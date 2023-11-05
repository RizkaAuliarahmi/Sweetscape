import { Container, CssBaseline, ThemeProvider, createTheme } from "@mui/material";
import Header from "./Header";
import { useCallback, useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import LoadingComponent from "./LoadingComponent";
import { useAppDispatch } from "../store/ConfigureStore";
import { fetchBasketAsync } from "../../features/basket/basketSlice";
import { fetchCurrentUser } from "../../features/account/accountSlice";
import Footer from "./Footer";

function App() {
  const dispatch = useAppDispatch();
  const [loading, setLoading] = useState(true);

  const initApp = useCallback(async () => {
    try {
      await dispatch(fetchCurrentUser());
      await dispatch(fetchBasketAsync());
    } catch (error) {
      console.log(error);
    }
  }, [dispatch])

  useEffect(() => {
    initApp().then(() => setLoading(false));
  }, [initApp])

  const theme = createTheme({
    palette:{
        primary: {
          main: '#d3979f',
          // light: '#ffc0cb',
          dark: '#b44b59',
        },
        secondary: {
          main: '#fff4e6',
        },
        background: {
          default: '#fffff',
        },
      },
      typography: {
        allVariants: {
          color: 'black',
          fontFamily: 'Montserrat',
        },
        body1: {
          fontSize: '1.2rem',
        },
        body2: {
          fontSize: '1.2rem',
        },
      },
})

if (loading) return <LoadingComponent message="Initializing app..." />

  return (
    <ThemeProvider theme={theme}>
      <ToastContainer position="bottom-right" hideProgressBar theme="colored" />
      <CssBaseline/>
      <Header/>
      <Container>
        <Outlet />
      </Container>
      <Footer/>
    </ThemeProvider>
  );
}
//outlet change depends on route
export default App;
