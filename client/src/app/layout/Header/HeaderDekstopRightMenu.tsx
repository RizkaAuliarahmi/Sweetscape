import { ShoppingCart } from "@mui/icons-material"
import { IconButton, Badge, List, ListItem } from "@mui/material"
import { Link, NavLink } from "react-router-dom"
import SignedInMenu from "../SignedInMenu"
import { useAppSelector } from "../../store/ConfigureStore";

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

export default function HeaderDekstopRightMenu (){
    const { basket } = useAppSelector((state) => state.basket);
    const { user } = useAppSelector((state) => state.account);
    const itemCount = basket?.items.reduce((sum, item) => sum + item.quantity, 0);

    return (
        <>
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
        </>
    )
}