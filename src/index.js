// src/index.js

import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

// Находим элемент с id="root" в вашем public/index.html
const rootElement = document.getElementById('root');

// Создаем "корень" для рендеринга React-приложения
const root = ReactDOM.createRoot(rootElement);

// Рендерим главный компонент App в этот "корень"
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

