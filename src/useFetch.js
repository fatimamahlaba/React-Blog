import { cleanup } from "@testing-library/react";
import { useState, useEffect } from "react";

// fetch function from home page for url
const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [isPending, setIsPending] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
      const abortCont = new AbortController();

    setTimeout(() => {
        // timeout function for wrong url 
        fetch(url, { signal: abortCont.signal })
         .then(res => {
          console.log(res);
           if(!res.ok) {
               throw Error('could not fetch the data for that resource');
           }
          return res.json();
          })
         .then(data => { 
            //  if good req bring in blog
            setData(data);
             setIsPending(false);
             setError(null);
    })
    .catch(err => {
        console.log(err)
        if (err.name === 'AbortError') {
            console.log('fetch aborted');
        } else {
            setIsPending(false);
            setError(err.message);
        }   
    })
    }, 1000);

    return () => abortCont.abort();
}, [url]);
return { data, isPending, error }
}

 
export default useFetch;