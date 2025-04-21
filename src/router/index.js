import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/Home.vue'
import HomePage from "@/views/HomePage.vue";
import PeopleView from "@/views/PeopleView.vue";
import PublicationsView from "@/views/PublicationsView.vue";
import ProjectsView from "@/views/ProjectsView.vue";
import testVue from "@/views/testVue.vue"
import AnnouncementDetail from "@/views/AnnouncementDetail.vue";

const routes = [
  {
    path: '/',
    component: HomeView,
    children: [
      {
        path: '',
        component: HomePage
      },
      {
        path: '/people',
        component: PeopleView
      },
      {
        path: '/publications',
        component: PublicationsView
      },
      {
        path: '/projects',
        component: ProjectsView
      },
      {
        path: '/test',
        component: testVue
      },
      {
        path: '/announcement/:id',
        component: AnnouncementDetail,
        props: true
      }
    ]
  },

]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
