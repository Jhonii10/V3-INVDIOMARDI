import { useState, useEffect } from 'react';

const useFirstVisit = (): boolean => {
  const [isFirstVisit, setIsFirstVisit] = useState<boolean>(true);

  useEffect(() => {
    const hasVisited = sessionStorage.getItem('hasVisited');
    if (!hasVisited) {
      setIsFirstVisit(true);
      sessionStorage.setItem('hasVisited', 'true');
    } else {
      setIsFirstVisit(false);
    }
  }, []);

  return isFirstVisit
};

export default useFirstVisit;
