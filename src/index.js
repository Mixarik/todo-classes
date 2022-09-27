import React from 'react';

import App from './comonents/app';
import { createRoot } from 'react-dom/client';

const reactDom = document.getElementById('root');
const root = createRoot(reactDom);
root.render(<App />);
