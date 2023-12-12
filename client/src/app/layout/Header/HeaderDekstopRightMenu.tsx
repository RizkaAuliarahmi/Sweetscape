import { ShoppingCart } from "@mui/icons-material"
import { IconButton, Badge, List, ListItem } from "@mui/material"
import { Link, NavLink } from "react-router-dom"
import SignedInMenu from "../SignedInMenu"
import { useAppSelector } from "../../store/ConfigureStore";

interface Props {
    menu: any[];
    navStyles: React.CSSProperties;
}

export default function HeaderDekstopRightMenu ({menu, navStyles}: Props){
    const { basket } = useAppSelector((state) => state.basket);
    const { user } = useAppSelector((state) => state.account);
    const itemCount = basket?.items.reduce((sum: any, item: { quantity: any; }) => sum + item.quantity, 0);

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
                    {menu.map(({ title, path }) => (
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