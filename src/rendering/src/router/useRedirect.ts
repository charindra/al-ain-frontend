const useRedirect = (route: string, closeMenus?: () => void) => {
  if (!route) {
    console.error('Invalid route!');
    return;
  }

  if (closeMenus) {
    closeMenus();
  }

  window.location.href = route;
};

export default useRedirect;
