import React from 'react';
import {createRoot} from 'react-dom/client';
import {App} from 'environment/App';

// eslint-disable-next-line ssr-friendly/no-dom-globals-in-module-scope
const container = document.getElementById('root') as HTMLElement;
const root = createRoot(container);

root.render(<App />);
