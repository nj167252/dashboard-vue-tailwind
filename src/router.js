import { createWebHistory, createRouter } from 'vue-router';
import Home from './views/Home.vue';

const routes = [{
  path: '/',
  name: 'home',
  component: Home,
},
{
  path: '/content',
  name: 'content',
  component: () => import(/* webpackChunkName: 'content' */ './views/Content.vue'), // lazy loading
},
{
  path: '/notes',
  name: 'notes',
  component: () => import(/* webpackChunkName: 'notes' */ './views/Notes.vue'), // lazy loading
},
{
  path: '/pricing',
  name: 'pricing',
  component: () => import(/* webpackChunkName: 'pricing' */ './views/Pricing.vue'), // lazy loading
},
{
  path: '/projects',
  name: 'projects',
  component: () => import(/* webpackChunkName: 'projects' */ './views/Projects.vue'), // lazy loading
},
{
  path: '/resources',
  name: 'resources',
  component: () => import(/* webpackChunkName: 'resources' */ './views/Resources.vue'), // lazy loading
},
{
  path: '/settings',
  name: 'settings',
  component: () => import(/* webpackChunkName: 'settings' */ './views/Settings.vue'), // lazy loading
}];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
