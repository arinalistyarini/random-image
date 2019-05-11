// Routes
const TopPage = () => import(/* webpackChunkName: 'topPage' */ 'pages/TopPage')
// const SearchPage = () => import(/* webpackChunkName: 'searchPage' */ 'pages/SearchPage')

export default [
  { path: '/', component: TopPage },
  // { path: '/search', component: SearchPage },sss
]
