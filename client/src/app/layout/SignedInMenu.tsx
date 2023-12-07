import { Menu, Fade, MenuItem, IconButton } from "@mui/material";
import { useState } from "react";
import { signOut } from "../../features/account/accountSlice";
import { clearBasket } from "../../features/basket/basketSlice";
import { useAppDispatch } from "../store/ConfigureStore";
import { Link } from "react-router-dom";
import { Person2Rounded } from "@mui/icons-material";

export default function SignedInMenu() {
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
                sx={{ typography: 'h6', '&:hover': {color: 'secondary.main'}, }}
            >
                <Person2Rounded fontSize="large"/>
            </IconButton>
            <Menu
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                TransitionComponent={Fade}
            >
                <MenuItem component={Link} to='/orders'>My orders</MenuItem>
                <MenuItem onClick={() => {
                    dispatch(signOut());
                    dispatch(clearBasket());
                }}>Logout</MenuItem>
            </Menu>
        </>
    );
}