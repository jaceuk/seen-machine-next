import * as React from 'react';

export default function useIsDektop() {
  const [width, setWidth] = React.useState<number>();

  function handleWindowSizeChange() {
    setWidth(window.innerWidth);
  }

  React.useEffect(() => {
    handleWindowSizeChange();
    window.addEventListener('resize', handleWindowSizeChange);

    return () => {
      window.removeEventListener('resize', handleWindowSizeChange);
    };
  }, []);

  const isDesktop = width >= 768;

  return isDesktop;
}
