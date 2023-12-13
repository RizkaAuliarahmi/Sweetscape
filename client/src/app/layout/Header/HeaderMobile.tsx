import { AppBar, Toolbar, IconButton, Box } from "@mui/material";
import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import SearchIcon from "@mui/icons-material/Search";
import HeaderMenu from "./HeaderMobileMenu";
import HeaderLogo from "./HeaderLogo";
import ProductSearch from "../../../features/catalog/productSearch";

interface Props {
  midMenu: any[];
  rightMenu: any[];
}

const toolbarStyles = {
  display: 'flex',
  justifyContent: 'flex-start',
};

export default function HeaderMobile({midMenu, rightMenu}: Props) {
  const [showScrollHeader, setShowScrollHeader] = useState(false);
  const [isSearchOpen, setSearchOpen] = useState(false);
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

  useEffect(() => {
    setSearchOpen(false);
  }, [location.pathname]);

  const getAppBarStyle = () => {
    if (location.pathname === '/') {
      return {
        display: showScrollHeader ? "block" : "none",
        boxShadow: 'none',
      };
    } else if (location.pathname !== '/') {
      return {
        boxShadow: 'none',
      };
    }
  };

  const handleSearchClick = () => {
    setSearchOpen(!isSearchOpen);
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
            <HeaderMenu midMenu={midMenu} rightMenu={rightMenu}/>
            <HeaderLogo variant="h4" letterSpacing={6} />
          </Toolbar>
        </AppBar>
      )}
      <AppBar
        position={location.pathname === '/' ? 'fixed' : 'relative'}
        sx={getAppBarStyle()}
      >
        <Toolbar sx={toolbarStyles}>
          <HeaderMenu midMenu={midMenu} rightMenu={rightMenu}/>
          <HeaderLogo variant="h4" letterSpacing={6} />
          <div style={{ marginLeft: 'auto' }}>
            {location.pathname === "/catalog" && ( 
              <IconButton
                color="inherit"
                onClick={handleSearchClick}
                sx={{ '&:hover': { color: '#fff4e6' } }}
              >
                <SearchIcon />
              </IconButton>
            )}
          </div>
        </Toolbar>
      </AppBar>
      {isSearchOpen && (
        <Box sx={{ padding: '16px' }}>
          <ProductSearch />
        </Box>
      )}
    </>
  );
}
