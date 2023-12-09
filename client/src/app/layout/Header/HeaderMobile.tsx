import { AppBar, Toolbar } from "@mui/material";
import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import HeaderMenu from "./HeaderMobileMenu";
import HeaderLogo from "./HeaderLogo";

const toolbarStyles = {
    display: 'flex',
    justifyContent: 'flex-start',
}

export default function Header() {
    const [showScrollHeader, setShowScrollHeader] = useState(false);
    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => {
          const scrollPosition = window.scrollY;
          setShowScrollHeader(scrollPosition > 200);
        };

        window.addEventListener("scroll", handleScroll);
        return () => {
          window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    const getAppBarStyle = () => {
        if (location.pathname === '/') {
          return {
            display: showScrollHeader ? "block" : "none",
            boxShadow:'none',
          };
        } else if (location.pathname !== '/') {
          return {
            boxShadow:'none',
          };
        }
    };

    return (
        <>
            {location.pathname === "/" && (
                <AppBar 
                position="relative" 
                sx={{
                    width: '100%',
                    boxShadow: 'none', 
                    background: `url('/images/bg-header.png')`, 
                    backgroundSize: 'cover',
                }}
            >
                <Toolbar sx={toolbarStyles}>
                    <HeaderMenu />
                    <HeaderLogo variant="h4" letterSpacing={6}/>
                </Toolbar>
            </AppBar>
            )}
            <AppBar 
                position={location.pathname === '/' ? 'fixed' : 'relative'} 
                sx={getAppBarStyle()}
            >
                <Toolbar sx={toolbarStyles}>
                    <HeaderMenu />
                    <HeaderLogo variant="h4" letterSpacing={6}/>
                </Toolbar>
            </AppBar>
        </>
    );
}
