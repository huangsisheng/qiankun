import React from 'react';
import ReactDOM from 'react-dom/client';

/**
 * 渲染子应用
 */
function Render(props) {
  const { loading } = props;

  return (
    <>
      {loading && <h4 className="subapp-loading">Loading...</h4>}
      <div id="micro-app" />
    </>
  );
}

export default function render({ loading }) {
  const container = document.getElementById('sub-container');
  ReactDOM.createRoot(container).render(<Render loading={loading} />)
}