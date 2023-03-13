import { loadComponent } from "../utils/router";

// eslint-disable-next-line import/no-anonymous-default-export
export default [
  {
    path: '/',
    element: loadComponent('Home'),
    exec: true
  },
  {
    path: '/home',
    element: loadComponent('Home'),
    exec: true
  },
  {
    path: '/create',
    element: loadComponent('Create'),
    exec: true
  },
  {
    path: '/detail',
    element: loadComponent('Detail'),
    exec: true
  },
]