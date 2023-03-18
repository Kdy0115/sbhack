import React from "react";

import { Navigate } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from "../../../app/hooks";
import { changeLoginPassword, changeLoginUserName, login } from "../../../features/auth/login/LoginSlice";

import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Grid2 from '@mui/material/Unstable_Grid2';

const Login: React.FC = () => {
    const dispatch = useAppDispatch();
    const { entities, isLogining, isLoginFaied, isLogined } = useAppSelector((state) => state.login);

    if (isLogined) {
        return <Navigate to={'/'} />
    }

    const theme = createTheme();
    return (      
        <ThemeProvider theme={theme}>
        <Container component="main" maxWidth="xs">
          <CssBaseline />
            <Box
              sx={{
                marginTop: 8,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
              }}
            >
              <Typography component="h1" variant="h5" sx={{ fontSize: 40}}>
                Sign in
              </Typography>
              <Box component="form" noValidate sx={{ mt: 1 }}>
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  id="username"
                  label="ユーザー名"
                  name="username"
                  autoComplete="ユーザー名"
                  autoFocus
                  onChange={(event) => {
                    const {value} = event.target;
                    dispatch(changeLoginUserName(value));
                  }}
                />
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  name="password"
                  label="パスワード"
                  type="password"
                  id="password"
                  autoComplete="パスワード"
                  onChange={(event) => {
                    const {value} = event.target;
                    dispatch(changeLoginPassword(value));
                  }}                
                />
                <FormControlLabel
                  control={<Checkbox value="remember" color="primary" />}
                  label="Remember me"
                />
                <Button
                  type="button"
                  fullWidth
                  variant="contained"
                  sx={{ mt: 3, mb: 2 }}
                  onClick={() => 
                    dispatch(login(entities.user)) }
                >
                  Sign In
                </Button>
                <Grid container>
                  <Grid item xs>
                    <Link href="#" variant="body2">
                      パスワードを忘れた？
                    </Link>
                  </Grid>
                  <Grid item>
                    <Link href="#" variant="body2">
                      アカウントを作成
                    </Link>
                  </Grid>
                </Grid>
              </Box>
            </Box>
        </Container>
      </ThemeProvider>        
    )
};

export default Login;
