import { createRouter, createWebHistory } from 'vue-router'
import ProjectList from '../components/WorkerList.vue'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'projects',
      component: HomeView
    },
    {
        path: '/workers',
        name: 'workers',
        component: ProjectList
    }
    
  ]
})

export default router