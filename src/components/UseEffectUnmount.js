/* eslint-disable no-console */
import React, { useEffect } from 'react';

// Component to show 'clean-up' of useEffect by returning
export const UseEffectUnmount = () => {
  // When useEffect is called it adds an event litener to the window on 'clean-up' event listener is removed
  useEffect(() => {
    console.log('render');
    const onMouseMove = e => {
      console.log(e);
    };
    window.addEventListener('mousemove', onMouseMove);
    return () => {
      console.log('unmount');
      window.removeEventListener('mousemove', onMouseMove);
    };
  }, []);

  return <div>Hello</div>;
};
