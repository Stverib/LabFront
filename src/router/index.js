import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeVue.vue'
import HomePage from "@/views/HomePage.vue";
import PeopleView from "@/views/PeopleView.vue";
import PublicationsView from "@/views/PublicationsView.vue";
import ProjectsView from "@/views/ProjectsView.vue";
import testVue from "@/views/testVue.vue"
import AnnouncementDetail from "@/views/AnnouncementDetail.vue";
import NewsDetail from "@/views/NewsDetail.vue";
import ActivityDetail from "@/views/AcademicActivityDetail.vue";
import CulturalTourismLab from "@/views/CulturalTourismLab.vue";
import AICComputingLab from "@/views/AICComputingLab.vue";
import StandardizationCommittee from "@/views/StandardizationCommittee.vue";
import AIExplorerAlliance from "@/views/AIExplorerAlliance.vue";
import AcademicCommittee from '@/views/AcademicCommittee.vue';
import CurrentLeaders from "@/views/CurrentLeaders.vue";
import ContactUs from "@/views/ContactUs.vue";

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
      },
      {
        path: '/news/:id',
        component: NewsDetail,
        props: true
      },
      {
        path: '/AcademicActivity/:id',
        component: ActivityDetail,
        props: true
      },
      {
        path: '/lab-structure/cultural-tourism',
        component: CulturalTourismLab,
      },
      {
        path: '/lab-structure/ai-computing',
        component: AICComputingLab,
      },
      {
        path: '/committee',
        component: StandardizationCommittee
      },
      {
        path: '/ai-club',
        component: AIExplorerAlliance
      },
      {
        path: '/academic-committee',
        component: AcademicCommittee
      },
      {
        path: '/leadership',
        component: CurrentLeaders
      },
      {
        path: '/contact',
        component: ContactUs
      }
    ]
  },

]

const router = createRouter({
  history: createWebHistory(),
  routes
})

// main.js 或 router/index.js
router.beforeEach((to, from) => {
  console.log('[路由跳转]', from.path, '=>', to.path)
})

export default router
