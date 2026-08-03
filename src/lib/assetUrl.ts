type AssetModule = string | { src: string };

export function assetUrl(asset: AssetModule): string {
  return typeof asset === 'string' ? asset : asset.src;
}
