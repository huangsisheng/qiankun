export const Micro_Apps = [
  {
    name: 'sub-portal',
    entry: '//localhost:9999',
    container: '#micro-app',
    activeRule: '/create',
  },
]

export const Micro_Modal = {
  name: 'sub-portal',
  entry: '//localhost:9999/create',
  container: '#micro-app',
  props: {
    from: 'main',
    page: 'Create'
  }
}