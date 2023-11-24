import { ShoppingCart } from "@mui/icons-material";
import { AppBar, Badge, Box, IconButton, List, ListItem, Toolbar, Typography } from "@mui/material";
import { Link, NavLink } from "react-router-dom";
import { useAppSelector } from "../store/ConfigureStore";
import SignedInMenu from "./SignedInMenu";

const midLinks = [
    { title: 'catalog', path: '/catalog' },
    { title: 'about', path: '/about' },
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

    return (
        <AppBar position="fixed" sx={{ boxShadow: 'none', background: 'transparent' }}>
            <Toolbar sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexDirection: 'row', }}>
            <Box display="flex" component={Link} to={'/'} sx={{ textDecoration: 'none', marginLeft: 'auto' }}>
    <Typography component="div" style={{ fontSize: 60, color: '#fff4e6', fontFamily: 'Great Vibes', letterSpacing: 4 }}>
        Sweetscape
    </Typography>
</Box>

                
                <Box display="flex" sx={{ mt: 2 }}>
                    <IconButton component={Link} to='/basket' size='large' edge='start' sx={{ mr: 2, '&:hover': { color: 'secondary.main' } }}>
                        <Badge badgeContent={itemCount} color="secondary">
                            <ShoppingCart/>
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

            <Toolbar sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <List sx={{ display: 'flex', mb: 2 }}>
                    {midLinks.map(({ title, path }) => (
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

            </Toolbar>
        </AppBar>
    );
}
