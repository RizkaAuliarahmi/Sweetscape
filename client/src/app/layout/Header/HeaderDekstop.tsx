import { AppBar, Box, Switch, Toolbar } from "@mui/material";
import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import HeaderDekstopMidMenu from "./HeaderDekstopMidMenu";
import HeaderDekstopRightMenu from "./HeaderDekstopRightMenu";
import HeaderLogo from "./HeaderLogo";

interface Props {
    midMenu: any[];
    rightMenu: any[];
    darkMode: boolean;
    handleThemeChange: () => void;
    palleteType?: string;
}

const navStyles = {
    color: 'inherit',
    textDecoration: 'none',
    typography: 'h6',
    '&:hover': {
        color: 'secondary.dark',
    },
    '&.active': {
        color: 'secondary.dark',
    },
};

export default function HeaderDekstop({ handleThemeChange, darkMode, midMenu, rightMenu, palleteType }: Props) {
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
                        display: 'flex',
                        zIndex: 1000, 
                        boxShadow: 'none', 
                        background: palleteType === 'light' ? `url('/images/bg-header.png')` : 'black', 
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                    }}
                >
                    <Toolbar 
                        sx={{ 
                            display: 'flex', 
                            flexDirection: 'row', 
                            alignItems: 'center'
                        }}
                    >
                        <Box
                            display="flex" 
                            sx={{
                                marginRight: 'auto', 
                                height: 'fit-content', 
                                mt: 2 
                            }}
                        >
                            <Switch
                                checked={darkMode}
                                onChange={handleThemeChange}
                                color="primary"
                                inputProps={{ 'aria-label': 'toggle dark mode' }}
                                sx={{
                                    '& .MuiSwitch-thumb': {
                                        backgroundColor: darkMode ? '#f8d151' : '#ffff',
                                        backgroundImage: darkMode ? 'url(/images/light.png)' : 'url(/images/dark.png)',
                                        backgroundSize: 'cover',
                                    },
                                    '& .Mui-checked': {
                                        backgroundColor: darkMode ? '#ffd43b' : '#65a5f2',
                                        // backgroundImage: darkMode ? 'url(/images/light.png)' : 'url(/images/light.png)',
                                    },
                                }}
                            />
                        </Box>
                        <Box 
                            display="flex" 
                            sx={{
                                marginLeft: 'auto', 
                                height: 'fit-content', 
                                mt: 2 
                            }}
                        >
                            <HeaderDekstopRightMenu 
                                menu={rightMenu} 
                                navStyles={navStyles}
                            />
                        </Box>
                    </Toolbar>
                    <Toolbar 
                        sx={{
                            display: 'flex', 
                            flexDirection: 'column', 
                            alignItems: 'center' 
                        }}
                    >
                        <HeaderLogo variant="h1" letterSpacing={6}/>
                        <HeaderDekstopMidMenu 
                            menu={midMenu}
                            navStyles={navStyles}    
                        />
                    </Toolbar>
                </AppBar>
            )}
            <AppBar 
                position={location.pathname === '/' ? 'fixed' : 'relative'} 
                sx={getAppBarStyle()}
            >
                <Toolbar 
                    sx={{
                        display: 'flex', 
                        justifyContent: 'space-between', 
                        alignItems: 'center'
                    }}
                >
                    <HeaderLogo 
                        sx={{ marginLeft: 10, marginTop: 2}} 
                        variant="h2" 
                        letterSpacing={4}
                    />
                    <HeaderDekstopMidMenu 
                        menu={midMenu}
                        navStyles={navStyles}
                    />
                    <Box display='flex' alignItems='center' sx={{ mr: 10 }}>
                        <HeaderDekstopRightMenu 
                            menu={rightMenu}
                            navStyles={navStyles}
                        />
                    </Box>
                </Toolbar>
            </AppBar>
        </>
    );
}