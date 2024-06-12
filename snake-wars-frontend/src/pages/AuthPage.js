import React, { useState } from 'react';
import LoginForm from '../components/Auth/LoginForm';
import RegisterForm from '../components/Auth/RegisterForm';

const AuthPage = () => {
  const [isLogin, setIsLogin] = useState(true);
  const handleAuthSuccess = (data) => {
    console.log('Auth successful', data);
    // Lưu thông tin đăng nhập và điều hướng đến trang chính
  };

  return (
    <div>
      {isLogin ? (
        <LoginForm onLogin={handleAuthSuccess} />
      ) : (
        <RegisterForm onRegister={handleAuthSuccess} />
      )}
      <button onClick={() => setIsLogin(!isLogin)}>
        {isLogin ? 'Switch to Register' : 'Switch to Login'}
      </button>
    </div>
  );
};

export default AuthPage;
