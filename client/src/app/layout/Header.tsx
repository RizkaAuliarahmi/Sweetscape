import { ShoppingCart } from "@mui/icons-material";
import { AppBar, Badge, Box, IconButton, List, ListItem, Toolbar, Typography } from "@mui/material";
import { Link, NavLink, useLocation, useNavigate } from "react-router-dom";
import { useAppSelector } from "../store/ConfigureStore";
import SignedInMenu from "./SignedInMenu";
import { useEffect, useState } from "react";
import { setProductParams } from "../../features/catalog/catalogSlice";
import { useDispatch } from "react-redux";

const midLinks = [
    { title: 'catalog', path: '/catalog' },
    { title: 'delivery information', path: '/delivery-information' },
];

const rightLinks = [
    { title: 'login', path: '/login' },
    { title: 'register', path: '/register' },
];

const navStyles = {
    color: 'inherit',
    textDecoration: 'none',
    typography: 'h6',
    '&:hover': {
        color: 'secondary.main',
    },
    '&.active': {
        color: 'secondary.main',
    },
};

export default function Header() {
    const { basket } = useAppSelector((state) => state.basket);
    const { user } = useAppSelector((state) => state.account);
    const itemCount = basket?.items.reduce((sum, item) => sum + item.quantity, 0);
    const [showScrollHeader, setShowScrollHeader] = useState(false);
    const location = useLocation();
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const handleCatalogClick = () => {
        dispatch(setProductParams({ types: [] }));
      };

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
                        background: `url('/images/bg-header.png')`, 
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                    }}
                >
                    <Toolbar 
                        sx={{ 
                            display: 'flex', 
                            flexDirection: 'column', 
                            alignItems: 'center'
                        }}
                    >
                        <Box 
                            display="flex" 
                            sx={{
                                marginLeft: 'auto', 
                                height: 'fit-content', 
                                mt: 2 
                            }}
                        >
                            <IconButton 
                                component={Link} 
                                to='/basket' 
                                size='large' 
                                edge='start' 
                                sx={{ 
                                    mr: 2, 
                                    '&:hover': { color: 'secondary.main' } 
                                }}
                            >
                                <Badge badgeContent={itemCount} color="secondary">
                                    <ShoppingCart />
                                </Badge>
                            </IconButton>
                            {user ? (
                                <SignedInMenu />
                            ) : (
                                <List sx={{ display: 'flex' }}>
                                    {rightLinks.map(({ title, path }) => (
                                        <ListItem
                                            component={NavLink}
                                            to={path}
                                            key={path}
                                            sx={navStyles}
                                        >
                                            {title.toUpperCase()}
                                        </ListItem>
                                    ))}
                                </List>
                            )}
                        </Box>
                    </Toolbar>
                    <Toolbar 
                        sx={{
                            display: 'flex', 
                            flexDirection: 'column', 
                            alignItems: 'center' 
                        }}
                    >
                        <Box 
                            display="flex" 
                            component={Link} 
                            to={'/'} 
                            sx={{ textDecoration: 'none' }}
                        >
                            <Typography 
                                variant="h1" 
                                sx={{ 
                                    color: '#fff4e6', 
                                    fontFamily: 'Great Vibes', 
                                    letterSpacing: 6 
                                }}
                            >
                                Sweetscape
                            </Typography>
                        </Box>
                        <List sx={{ display: 'flex'}}>
                            {midLinks.map(({ title, path }) => (
                                <ListItem
                                    component={NavLink}
                                    onClick={() => handleCatalogClick()}
                                    to={path}
                                    key={path}
                                    sx={{...navStyles, whiteSpace: 'nowrap'}}
                                >
                                    {title.toUpperCase()}
                                </ListItem>
                            ))}
                        </List>
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
                    <Box 
                        display='flex' 
                        alignItems='center' 
                        component={Link} 
                        to={'/'} 
                        sx={{ ml: 10, textDecoration: 'none', mt: 2 }}>
                        <Typography variant="h2" style={{ color: '#fff4e6', fontFamily: 'Great Vibes', letterSpacing: 4 }}>
                            Sweetscape
                        </Typography>
                    </Box>
                    <List sx={{ display: 'flex' }}>
                        {midLinks.map(({title, path}) =>
                            <ListItem
                                component={NavLink}
                                onClick={() => handleCatalogClick()}
                                to={path}
                                key={path}
                                sx={{...navStyles, whiteSpace: 'nowrap'}}
                            >
                                {title.toUpperCase()}
                            </ListItem>
                        )}
                    </List>
                    <Box display='flex' alignItems='center' sx={{ mr: 10 }}>
                        <IconButton 
                            component={Link} 
                            to='/basket' 
                            size='large' 
                            edge='start' 
                            sx={{ mr: 2, '&:hover': {color: 'secondary.main'} }}
                        >
                            <Badge badgeContent={itemCount} color="secondary">
                                <ShoppingCart />
                            </Badge>
                        </IconButton>
                        {user ? (
                            <SignedInMenu />
                        ) : (
                            <List sx={{ display: 'flex' }}>
                                {rightLinks.map(({title, path}) => (
                                    <ListItem
                                        component={NavLink}
                                        to={path}
                                        key={path}
                                        sx={navStyles}
                                    >
                                        {title.toUpperCase()}
                                    </ListItem>
                                ))}
                            </List>
                        )}
                    </Box>
                </Toolbar>
            </AppBar>
        </>
    );
}
