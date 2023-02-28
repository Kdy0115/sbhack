import React from 'react';
import Login from './components/auth/login/Login';
import './App.css';
import { useAppDispatch, useAppSelector } from './app/hooks';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import Home from './components/home/Home';

const App: React.FC = () => {
  const dispatch = useAppDispatch();
  const { isLogined } = useAppSelector((state) => state.login);

  if(!isLogined) {
    return <Login />;
  }

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/login" element={<Login />}/>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
