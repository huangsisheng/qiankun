
import React from 'react';
import ReactDOM from 'react-dom/client';
import { registerMicroApps, start } from 'qiankun';

import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <App />
);


const apps = [
  {
    name: 'sub-portal',
    entry: '//localhost:3001',
    container: '#sub-containter',
    activeRule: '/sub-create',
  },
]

const lifeCycles = {
  beforeLoad: () => {
    ReactDOM.createRoot(
      document.getElementById('subApp')
    ).render(
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontWeight: 600,
          fontSize: '20px',
          marginTop: '40px',
        }}
      >
        <h1>Loading...</h1>
      </div>,
    );
  },
};

registerMicroApps(apps, lifeCycles)
// 启动 qiankun
start({ prefetch: 'all' });