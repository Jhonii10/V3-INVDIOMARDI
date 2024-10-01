import { useState, useEffect } from 'react';

const useFirstVisit = (name:string): boolean => {
  const [isFirstVisit, setIsFirstVisit] = useState<boolean>(true);

  useEffect(() => {
    const hasVisited = sessionStorage.getItem(name);
    if (!hasVisited) {
      setIsFirstVisit(true);
      sessionStorage.setItem(name, 'true');
    } else {
      setIsFirstVisit(false);
    }
  }, [name]);

  return isFirstVisit
};

export default useFirstVisit;
