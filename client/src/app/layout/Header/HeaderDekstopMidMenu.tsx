import { List, ListItem } from "@mui/material";
import { NavLink } from "react-router-dom";
import { setProductParams } from "../../../features/catalog/catalogSlice";
import { useAppDispatch, useAppSelector } from "../../store/ConfigureStore";

interface Props {
    menu: any[];
    navStyles: React.CSSProperties;
}

export default function HeaderDesktopMidMenu({menu, navStyles}: Props){
    const dispatch = useAppDispatch();
    const { user } = useAppSelector((state) => state.account);

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
            { user && user.roles?.includes('Admin') &&
                <ListItem
                    component={NavLink}
                    to={'/inventory'}
                    sx={{...navStyles, whiteSpace: 'nowrap'}}
                >
                    INVENTORY
                </ListItem>
            }
        </List>

    )
};