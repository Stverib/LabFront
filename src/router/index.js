import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomePage/HomeVue.vue'
import HomePage from "@/views/HomePage/HomePage.vue";
import PeopleView from "@/views/PeopleView.vue";
import PublicationsView from "@/views/PublicationsView.vue";
import ProjectsView from "@/views/ProjectsView.vue";
import testVue from "@/views/testVue.vue"
import AnnouncementDetail from "@/views/HomePage/AnnouncementDetail.vue";
import NewsDetail from "@/views/HomePage/NewsDetail.vue";
import ActivityDetail from "@/views/HomePage/AcademicActivityDetail.vue";
import CulturalTourismLab from "@/views/LabIntro/CulturalTourismLab.vue";
import AICComputingLab from "@/views/LabIntro/AICComputingLab.vue";
import StandardizationCommittee from "@/views/LabIntro/StandardizationCommittee.vue";
import AIExplorerAlliance from "@/views/LabIntro/AIExplorerAlliance.vue";
import AcademicCommittee from '@/views/LabIntro/AcademicCommittee.vue';
import CurrentLeaders from "@/views/LabIntro/CurrentLeaders.vue";
import ContactUs from "@/views/LabIntro/ContactUs.vue";
import LabStructure from "@/views/LabStructureIntro/LabStructure.vue";
import PlatformEquipment from "@/views/LabStructureIntro/PlatformEquipment.vue";
import PlatformInfo from "@/views/LabStructureIntro/PlatformInfo.vue";
import EquipmentInfo from "@/views/LabStructureIntro/EquipmentInfo.vue";
import StudentInfo from "@/views/TeamMember/StudentInfo.vue";
import TeacherInfo from "@/views/TeamMember/TeacherInfo.vue";

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
      },
      {
        path: '/org-structure/lab-structure',
        component: LabStructure
      },
      {
        path: '/org-structure/platform-equipment',
        component: PlatformEquipment
      },
      {
        path: '/PlatformEquipment/PlatformInfo',
        component: PlatformInfo
      },
      {
        path: '/PlatformEquipment/EquipmentInfo',
        component: EquipmentInfo
      },
      {
        path: '/people/teacher',
        component: TeacherInfo
      },
      {
        path: '/people/student',
        component: StudentInfo
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
