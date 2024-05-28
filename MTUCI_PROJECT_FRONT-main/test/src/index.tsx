import React from 'react';
import { createRoot } from 'react-dom/client'
import { Pages } from './pages/index.tsx';
import { Provider } from 'react-redux';
import { setupStore } from './store/store.ts';
import './styles.css'

const store = setupStore()

const root = document.getElementById('root') as HTMLElement
createRoot(root).render(
  <React.StrictMode>
    <Provider store = {store}>
      <Pages />
    </Provider>
  </React.StrictMode>
)