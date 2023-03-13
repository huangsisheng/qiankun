import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

import './public-path';
import { loadComponent } from './utils/router';

function render(props, Comp = App) {
  const { container } = props;
  const root = ReactDOM.createRoot(container ? container.querySelector('#root') : document.querySelector('#root'));
  root.render(<Comp />);
}

if (!window.__POWERED_BY_QIANKUN__) {
  render({});
}

export async function bootstrap() {
  console.log('react app bootstraped');
}

export async function mount(props) {
  const { from, page } = props
  if (from === 'main') {
    render(props, loadComponent(page, true))
  }
}

export async function unmount(props) {
  const { container } = props;
  ReactDOM.unmountComponentAtNode(container ? container.querySelector('#root') : document.querySelector('#root'));
}