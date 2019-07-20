/* eslint-disable no-console */
import { useEffect, useState } from 'react';

export const useFetch = url => {
  const [state, setState] = useState({ data: null, loading: true });
  // useEffect will be called anytime the url changes
  useEffect(() => {
    setState(currentState => ({ data: currentState.data, loading: true }));
    fetch(url)
      .then(resp => resp.text())
      .then(val => {
        // console.log(val);
        setState({ data: val, loading: false });
      });
  }, [url, setState]);

  return state;
};
