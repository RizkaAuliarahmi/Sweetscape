import { useEffect, useState } from "react";
import HeaderMobile from "./HeaderMobile";
import HeaderDekstop from "./HeaderDekstop";

const midLinks = [
  { title: 'catalog', path: '/catalog' },
  { title: 'delivery information', path: '/delivery-information' },
];

const rightLinks = [
  { title: 'login', path: '/login' },
  { title: 'register', path: '/register' },
];

export default function Header() {
  const [mobileView, setMobileView] = useState(false);
  
  useEffect(() => {
      const setResponsiveness = () => {
        setMobileView(window.innerWidth < 900);
      };
    
      setResponsiveness();
    
      window.addEventListener("resize", setResponsiveness);
    
      return () => {
        window.removeEventListener("resize", setResponsiveness);
      };
    }, []);

  return (
    <>
      {mobileView ? 
        <HeaderMobile/> 
      : 
        <HeaderDekstop midMenu={midLinks} rightMenu={rightLinks}/>
      }
    </>
  );
}
