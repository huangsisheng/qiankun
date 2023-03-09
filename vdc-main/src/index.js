import { registerMicroApps, start } from 'qiankun';

import renderApp from './App';
import { Micro_Apps } from './constants';

window.__POWERED_BY_QIANKUN__ = true
renderApp({ loading: true });

// const loader = (loading) => render({ loading });

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <App />
// );

const lifeCycles = {
  beforeLoad: [
    (app) => {
      console.log('[LifeCycle] before load %c%s', 'color: green;', app.name);
    },
  ],
  beforeMount: [
    (app) => {
      console.log('[LifeCycle] before mount %c%s', 'color: green;', app.name);
    },
  ],
  afterUnmount: [
    (app) => {
      console.log('[LifeCycle] after unmount %c%s', 'color: green;', app.name);
    },
  ],
};

registerMicroApps(Micro_Apps, lifeCycles)
// 启动 qiankun
start({ prefetch: 'all', strictStyleIsolation: true });