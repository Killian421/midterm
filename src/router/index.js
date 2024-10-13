import { createRouter, createWebHistory } from 'vue-router'
import TaskList from '../components/TaskList.vue' // Task Manager component
import SongList from '../components/SongList.vue' // Song List component
import EventPlanner from '../components/EventPlanner.vue' // Event Planner component

const routes = [
  { path: '/', component: TaskList }, // For Task Manager
  { path: '/songs', component: SongList }, // For Song List
  { path: '/events', component: EventPlanner }, // For Event Planner
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
