import './App.css';
import { darkTheme, lightTheme } from './theme';
import useLocalStorage from './hooks/useLocalStorage';
import { CssBaseline, ThemeProvider } from '@mui/material';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { toggleTheme } from './redux/slices/theme';
import { routes } from './routes/route';
import { QueryClient, QueryClientProvider } from 'react-query';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
function App() {
  const queryClient = new QueryClient();

  const [themeMode, setThemeMode] = useLocalStorage('themeMode', 'light');
  const dispatch = useDispatch();
  const currentTheme = themeMode === 'light' ? lightTheme : darkTheme;

  const handleToggleTheme = () => {
    const newThemeMode = themeMode === 'light' ? 'dark' : 'light';
    setThemeMode(newThemeMode);
  };

  // Sync the theme state with the Redux store
  useEffect(() => {
    dispatch(toggleTheme(themeMode));
  }, [themeMode, dispatch]);

  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={currentTheme}>
        <CssBaseline />
        <Router>
          <Routes>
            {routes.map((route) => (
              <Route
                key={route.path}
                path={route.path}
                element={route.element}
              />
            ))}
          </Routes>
        </Router>
      </ThemeProvider>
    </QueryClientProvider>
  );
}

export default App;
