'use client';

import React from 'react';

type ThreeCanvasErrorBoundaryProps = {
  children: React.ReactNode;
  fallback?: React.ReactNode;
};

type ThreeCanvasErrorBoundaryState = {
  hasError: boolean;
};

export default class ThreeCanvasErrorBoundary extends React.Component<
  ThreeCanvasErrorBoundaryProps,
  ThreeCanvasErrorBoundaryState
> {
  state: ThreeCanvasErrorBoundaryState = { hasError: false };

  static getDerivedStateFromError(): ThreeCanvasErrorBoundaryState {
    return { hasError: true };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    if (process.env.NODE_ENV === 'development') {
      console.error('[DYM Digital] No fue posible renderizar el universo 3D.', error, errorInfo);
    }
  }

  render() {
    if (this.state.hasError) {
      return this.props.fallback ?? null;
    }

    return this.props.children;
  }
}
