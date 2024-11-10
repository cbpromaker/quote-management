import './App.css';
import useSafeContext, { PageStateContext } from './contexts';
import Login from './pages/login/Login';

function App() {
  const { pageState } = useSafeContext(PageStateContext);
  return <div className="App">{pageState == 'login' && <Login />}</div>;
}

export default App;
