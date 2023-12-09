import { List, ListItem } from "@mui/material";
import { useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";
import { setProductParams } from "../../../features/catalog/catalogSlice";

const midLinks = [
    { title: 'catalog', path: '/catalog' },
    { title: 'delivery information', path: '/delivery-information' },
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

export default function HeaderDesktopMidMenu (){
    const dispatch = useDispatch();

    const handleCatalogClick = () => {
        dispatch(setProductParams({ types: [] }));
      };

    return (
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

    )
};