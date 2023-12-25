import { IconButton, Menu, Fade, MenuItem, Divider } from "@mui/material";
import { Link } from "react-router-dom";
import { signOut } from "../../../features/account/accountSlice";
import { clearBasket } from "../../../features/basket/basketSlice";
import { useState } from "react";
import { useAppSelector, useAppDispatch } from "../../store/ConfigureStore";
import MenuIcon from '@mui/icons-material/Menu';
import { resetProductParams, setProductParams } from "../../../features/catalog/catalogSlice";

interface Props {
    midMenu: any[];
    rightMenu: any[];
}

export default function HeaderMobileMenu({midMenu, rightMenu}: Props) {
    const { user } = useAppSelector((state: any) => state.account);
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
                {midMenu.map(({ title, path }) => (
                    [[
                        <MenuItem component={Link} to={path} onClick={() => { 
                            dispatch(setProductParams({ types: [] }));
                            dispatch(resetProductParams());
                        }}>
                            {title}
                        </MenuItem>
                    ]]
                ))}
                { user && user.roles?.includes('Admin') &&
                    <MenuItem component={Link} to='/inventory' onClick={() => { 
                            dispatch(setProductParams({ types: [] }));
                            dispatch(resetProductParams());
                        }}>
                        Inventory
                    </MenuItem>
                }
                <Divider />
                <MenuItem component={Link} to='/basket'>My basket</MenuItem>
                {user ? (
                    [
                        <MenuItem component={Link} to='/orders' key='my-orders'>
                            My orders
                        </MenuItem>,
                        <Divider key='divider' />,
                        <MenuItem onClick={() => {
                            dispatch(signOut());
                            dispatch(clearBasket());
                        }} key='logout'>
                            Logout
                        </MenuItem>
                    ]
                ) : (
                    rightMenu.map(({ title, path }) => (
                        <MenuItem component={Link} to={path} key={title.toLowerCase()}>
                            {title}
                        </MenuItem>
                    ))
                )}
            </Menu>
        </>
    )
}