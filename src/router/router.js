import { createRouter, createWebHistory } from 'vue-router';
import DashboardPage from '../pages/DashboardPage.vue';
const routes = [
  {
    path: '/dashboard',
    component: DashboardPage,
    name: 'Dashboard', 
  },
]
  
const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
