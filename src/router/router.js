import { createRouter, createWebHistory } from 'vue-router';
import DashboardPage from '../pages/DashboardPage.vue';
import DemoPage from '@/pages/DemoPage.vue';
const routes = [
  {
    path: '/dashboard',
    component: DashboardPage,
    name: 'Dashboard', 
  },
  {
    path: '/demo',
    component: DemoPage,
    name: 'Demo', 
  },
]
  
const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
