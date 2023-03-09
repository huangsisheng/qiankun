/** 微应用修改静态资源的 publicPath */
import { isQianKunLoad } from 'utils/qiankun';
/* eslint-disable */
if (isQianKunLoad()) {
  __webpack_public_path__ = window.__INJECTED_PUBLIC_PATH_BY_QIANKUN__;
}
