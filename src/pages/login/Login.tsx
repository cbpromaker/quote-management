import { useState } from 'react';
import { User } from '../../auth/userClass';
import { authAPI } from '../../api/common';
import './Login.css';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = async () => {
    try {
      // TODO:: custom hook 사용해서 개선
      const userInfo = await authAPI.login(username);
      const permissionManager = User.getInstance();
      permissionManager.setCurrentUser(userInfo);
      setError('');
    } catch (err) {
      setError('로그인에 실패했습니다.');
    }
  };

  return (
    <div className="login-container">
      <div className="login-box">
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="사용자 이름"
          className="login-input"
        />
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="비밀번호"
          className="login-input"
        />
        <button onClick={handleLogin} className="login-button">
          로그인
        </button>
        {error && <p className="error-message">{error}</p>}
      </div>
    </div>
  );
};

export default Login;
