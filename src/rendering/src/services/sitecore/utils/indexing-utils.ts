export const isDisabledForIndexing = (itemPath: string): boolean => {
  const safePath = (itemPath || '').trim().toLowerCase();

  return safePath.startsWith('/test') || safePath.startsWith('/demo');
};
