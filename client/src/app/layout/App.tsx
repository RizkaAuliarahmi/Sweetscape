import { Container, CssBaseline, ThemeProvider, createTheme, responsiveFontSizes } from "@mui/material";
import Header from "./Header/Header";
import { useCallback, useEffect, useState } from "react";
import { Outlet, useLocation } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import LoadingComponent from "./LoadingComponent";
import { useAppDispatch } from "../store/ConfigureStore";
import { fetchBasketAsync } from "../../features/basket/basketSlice";
import { fetchCurrentUser } from "../../features/account/accountSlice";
import Footer from "./Footer";
import { ScrollToTop } from "../components/ScrollToTop";
import HomePage from "../../features/Home/HomePage";

function App() {
  const dispatch = useAppDispatch();
  const [loading, setLoading] = useState(true);
  const location = useLocation();

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

  const theme = responsiveFontSizes(createTheme({
    palette:{
        primary: {
          main: '#d3979f',
          dark: '#b44b59',
        },
        secondary: {
          main: '#fff4e6',
        },
      },
      typography: {
        allVariants: {
          color: 'black',
          fontFamily: 'Satoshi-Medium',
        },
        body1: {
          fontSize: '1.2rem',
        },
        body2: {
          fontSize: '1.2rem',
        },
      },
}))

if (loading) return <LoadingComponent message="Initializing app..." />

  return (
    <ThemeProvider theme={theme}>
      <ToastContainer position="bottom-right" hideProgressBar theme="colored" />
      <CssBaseline />
      <Header />
       <ScrollToTop />
      {location.pathname === '/' ? <HomePage /> :
        <Container sx={{ mt: 4, mb: 20 }}>
          <Outlet />
        </Container>
      }
      <Footer />
    </ThemeProvider>
  );
}
//outlet change depends on route
export default App;
