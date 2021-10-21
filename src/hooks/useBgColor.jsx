import { useRouter } from 'next/dist/client/router';
import { useEffect, useMemo } from 'react';

export const useBgColor = () => {
  const router = useRouter();
  const bgColor = useMemo(() => {
    // return router.pathname === "/" ? "lightblue" : "lightyellow";
    switch (router.pathname) {
      case "/":{
        return "lightblue";
      }
      case "/about":{
        return "lightyellow";
      }
      default:{
        return "";
      }
    }
  },[router.pathname])
  useEffect(() => {
    document.body.style.backgroundColor = bgColor;
    return() =>{
      document.body.style.backgroundColor = ""
    }
  },[bgColor]);
}