import { useState } from 'react';
import { authAPI } from '../../api/common';
import userManager from '../../auth/userManager';
import useSafeContext, { PageStateContext } from '../../contexts';
import './Login.css';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = async () => {
    try {
      const response = await authAPI.login({ username, password });

      if (!response.success || !response.userLoginInfo) {
        // 예상된 실패 케이스 (잘못된 비밀번호, 존재하지 않는 계정 등)
        setError('아이디 또는 비밀번호가 올바르지 않습니다.');
        return;
      }

      userManager.setCurrentUser(response.userLoginInfo);
      const { setPageState } = useSafeContext(PageStateContext);
      setPageState('estimates');

      setError('');
    } catch (err) {
      setError('서버와의 통신이 실패했습니다. 잠시 후 다시 시도해주세요.');
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
