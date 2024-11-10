import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.tsx';
import { PageStateProvider } from './contexts/PageState.tsx';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <PageStateProvider>
      <App />
    </PageStateProvider>
  </StrictMode>,
);
