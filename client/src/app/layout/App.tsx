import { Container, CssBaseline, ThemeProvider, } from "@mui/material";
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
import { createCustomTheme } from "../../features/theme";
import { Theme } from "@mui/material";

function App() {
  const dispatch = useAppDispatch();
  const [loading, setLoading] = useState(true);
  const location = useLocation();
  const [darkMode, setDarkMode] = useState(false);
  const palleteType = darkMode ? 'dark' : 'light';

  const initApp = useCallback(async () => {
    try {
      await dispatch(fetchCurrentUser());
      await dispatch(fetchBasketAsync());
    } catch (error) {
      console.log(error);
    }
  }, [dispatch]);

  const setThemeMode = () => {
    const storedDarkMode = localStorage.getItem('darkMode');
    if (storedDarkMode !== null) {
      setDarkMode(JSON.parse(storedDarkMode));
    }
  };

  useEffect(() => {
    setThemeMode();
    initApp().then(() => setLoading(false));
  }, [initApp]);

  const theme: Theme = createCustomTheme(palleteType);

  const handleThemeChange = () => {
    const newDarkMode = !darkMode;
    localStorage.setItem('darkMode', JSON.stringify(newDarkMode));
    setDarkMode(newDarkMode);
  };

  if (loading) return <LoadingComponent message="Initializing app..." />;

  return (
    <ThemeProvider theme={theme}>
      <ToastContainer position="bottom-right" hideProgressBar theme="colored" />
      <CssBaseline />
      <Header darkMode={darkMode} handleThemeChange={handleThemeChange} palleteType={palleteType} />
      <ScrollToTop />
      {location.pathname === '/' ? <HomePage palleteType={palleteType}/> :
        <Container sx={{ mt: 4, mb: 20 }}>
          <Outlet />
        </Container>
      }
      <Footer />
    </ThemeProvider>
  );
}

export default App;
