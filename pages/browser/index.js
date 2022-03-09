import React from "react";
import { useUserAgent } from 'next-useragent'
import { useEffect } from "react";
import { useState } from "react";
const Browser = (props) => {

    const [ua, setUa] = useState()

    useEffect(()=>{
        if (props.uaString) {
        setUa(useUserAgent(props.uaString))
        } else {
        setUa(useUserAgent(window.navigator.userAgent))
        }

    },[])

  return (
    <>
      {String(ua?.source).search("ArtisBrowser") > 0 ? <span>Página liberada, pois está sendo usado o browser artis</span>: <span>Página bloqueada, use o ArtisBrowser</span>}
    </>
  );
};
export default Browser;
