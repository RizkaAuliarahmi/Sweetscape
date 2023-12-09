import { IconButton, Menu, Fade, MenuItem, Divider } from "@mui/material";
import { Link } from "react-router-dom";
import { signOut } from "../../../features/account/accountSlice";
import { clearBasket } from "../../../features/basket/basketSlice";
import { useState } from "react";
import { useAppSelector, useAppDispatch } from "../../store/ConfigureStore";
import MenuIcon from '@mui/icons-material/Menu';

export default function HeaderMobileMenu() {
    const { user } = useAppSelector((state) => state.account);
    const dispatch = useAppDispatch();
    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);

    const handleClick = (event: any) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <>
            <IconButton
                color='inherit'
                onClick={handleClick}
                sx={{ typography: 'h6', '&:hover': {color: 'secondary.main'}, pr: 2 }}
                >
                    <MenuIcon />
            </IconButton>
            <Menu
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                TransitionComponent={Fade}
            >
                <MenuItem component={Link} to='/catalog'>Catalog</MenuItem>
                <MenuItem component={Link} to='/delivery-information'>Delivery information</MenuItem>
                <Divider />
                <MenuItem component={Link} to='/basket'>My basket</MenuItem>
                {user ? (
                    <>
                        <MenuItem component={Link} to='/orders'>My orders</MenuItem>
                        <Divider />
                        <MenuItem onClick={() => {
                            dispatch(signOut());
                            dispatch(clearBasket());
                        }}>Logout</MenuItem>
                    </>
                ) : (
                    <>
                        <MenuItem component={Link} to='/login'>Login</MenuItem>
                        <MenuItem component={Link} to='/register'>Register</MenuItem>
                    </>
                )}
            </Menu>
        </>
    )
}