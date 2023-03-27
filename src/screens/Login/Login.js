import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { Box, Grid, Paper, TextField, Button, Typography } from '@mui/material';
import { useTheme } from '@emotion/react';
import { ErrorText, H4, Title } from '../../components';
import { useApiMutation } from '../../util/request';
import { login } from '../../util/auth';

const LoginPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
  const theme = useTheme();

  const navigate = useNavigate();
  const location = useLocation();

  const handleLogin = useApiMutation({
    endpoint: 'auth/login',
    method: 'POST',
  });

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      // const { data } = await handleLogin.mutateAsync({ username, password });
      // login(data.token);
      const { from } =
        // location.state ||
        { from: { pathname: '/dashboard' } };
      navigate(from);
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <Box sx={{ display: 'flex', justifyContent: 'center' }}>
      <Paper
        elevation={4}
        sx={{
          maxWidth: 400,
          width: '100%',
          mt: 8,
          p: 3,
          backgroundColor: theme.palette.background.default,
          boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.1)',
        }}
      >
        <H4 variant="h4" align="center" gutterBottom>
          Login
        </H4>
        <form onSubmit={handleSubmit}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                fullWidth
                id="username"
                label="Username"
                variant="outlined"
                value={username}
                onChange={(event) => setUsername(event.target.value)}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                id="password"
                label="Password"
                type="password"
                variant="outlined"
                value={password}
                onChange={(event) => setPassword(event.target.value)}
              />
            </Grid>
            <Grid item xs={12}>
              {error && (
                <ErrorText variant="body2" color="error">
                  {error}
                </ErrorText>
              )}
            </Grid>
            <Grid item xs={12}>
              <Button fullWidth variant="contained" type="submit">
                Log In
              </Button>
            </Grid>
          </Grid>
        </form>
      </Paper>
    </Box>
  );
};

export default LoginPage;
