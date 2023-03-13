import { loadMicroApp } from 'qiankun';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { Micro_Modal } from './constants';

/**
 * 渲染子应用
 */
function Render(props) {
  const onClick = () => {
    loadMicroApp(Micro_Modal)
  }
  return (
    <>
      <button onClick={onClick}>显示子应用</button>
      <div id="micro-app" />
    </>
  );
}

export default function render({ loading }) {
  const container = document.getElementById('sub-container');
  ReactDOM.createRoot(container).render(<Render loading={loading} />)
}