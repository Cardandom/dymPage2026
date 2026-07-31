'use client';

import dynamic from 'next/dynamic';
import React from 'react';
import ThreeCanvasErrorBoundary from './ThreeCanvasErrorBoundary';

const DynamicThreeCanvas = dynamic(
  () => import('../ThreeCanvas'),
  {
    ssr: false,
    loading: () => null,
  },
);

type SceneState = 'checking' | 'supported' | 'unsupported';
type SupportedScene = {
  status: 'supported';
  maxDpr: number;
};

type SceneStatus =
  | { status: Exclude<SceneState, 'supported'> }
  | SupportedScene;

type DataConnection = {
  readonly saveData?: boolean;
  addEventListener?: (type: 'change', listener: () => void) => void;
  removeEventListener?: (type: 'change', listener: () => void) => void;
};

type NavigatorWithConnection = Navigator & {
  readonly connection?: DataConnection;
};

function supportsWebGL(): boolean {
  const canvas = document.createElement('canvas');
  canvas.width = 1;
  canvas.height = 1;

  try {
    const context = canvas.getContext('webgl2') ?? canvas.getContext('webgl');
    return context !== null;
  } catch {
    return false;
  }
}

export default function NextThreeCanvas() {
  const [sceneState, setSceneState] = React.useState<SceneStatus>({ status: 'checking' });
  const detectionStarted = React.useRef(false);

  React.useEffect(() => {
    if (detectionStarted.current) return;
    detectionStarted.current = true;

    const reducedMotionQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    const connection = (navigator as NavigatorWithConnection).connection;

    if (reducedMotionQuery.matches || connection?.saveData === true) {
      setSceneState({ status: 'unsupported' });
      return;
    }

    if (!supportsWebGL()) {
      setSceneState({ status: 'unsupported' });

      if (process.env.NODE_ENV === 'development') {
        console.warn('[DYM Digital] WebGL no está disponible; se utilizará el fondo estático.');
      }

      return;
    }

    const isMobile = window.matchMedia('(max-width: 767px)').matches;
    setSceneState({ status: 'supported', maxDpr: isMobile ? 1.25 : 2 });
  }, []);

  if (sceneState.status !== 'supported') {
    return null;
  }

  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 z-[1] h-screen w-screen overflow-hidden [&_canvas]:block [&_canvas]:h-full [&_canvas]:w-full"
    >
      <ThreeCanvasErrorBoundary fallback={null}>
        <DynamicThreeCanvas maxDpr={sceneState.maxDpr} presentation="overlay" />
      </ThreeCanvasErrorBoundary>
    </div>
  );
}
