import { List, ListItem } from "@mui/material";
import { NavLink } from "react-router-dom";
import { setProductParams } from "../../../features/catalog/catalogSlice";
import { useAppDispatch } from "../../store/ConfigureStore";

interface Props {
    menu: any[];
    navStyles: React.CSSProperties;
}

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

export default function HeaderDesktopMidMenu({menu, navStyles}: Props){
    const dispatch = useAppDispatch();

    const handleCatalogClick = () => {
        dispatch(setProductParams({ types: [] }));
      };

    return (
        <List sx={{ display: 'flex'}}>
            {menu.map(({ title, path }) => (
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