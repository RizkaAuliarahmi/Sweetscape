import { useEffect, useState } from "react";
import HeaderMobile from "./HeaderMobile";
import HeaderDekstop from "./HeaderDekstop";
import { useMediaQuery } from "@mui/material";

const midLinks = [
  { title: 'Catalog', path: '/catalog' },
  { title: 'Delivery information', path: '/delivery-information' },
];

const rightLinks = [
  { title: 'Login', path: '/login' },
  { title: 'Register', path: '/register' },
];

export default function Header() {
  const isMobile = useMediaQuery('(max-width: 1000px)');

  return (
    <>
      {isMobile ? 
        <HeaderMobile midMenu={midLinks} rightMenu={rightLinks}/> 
      : 
        <HeaderDekstop midMenu={midLinks} rightMenu={rightLinks}/>
      }
    </>
  );
}
