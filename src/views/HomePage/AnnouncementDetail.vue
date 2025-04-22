<template>
  <div class="announcement-detail">
    <!-- 头部 -->
    <div class="header">
      <h1 class="title">通知公告</h1>
      <el-breadcrumb separator=">">
        <el-breadcrumb-item>当前位置</el-breadcrumb-item>
        <el-breadcrumb-item>前沿技术研究实验室</el-breadcrumb-item>
        <el-breadcrumb-item>通知公告</el-breadcrumb-item>
      </el-breadcrumb>
    </div>

    <!-- 分割线 -->
    <hr class="divider-bold">

    <!-- 主要内容 -->
    <div class="content" :style="{ fontSize: fontSize + 'px' }">
      <h2 class="announcement-title">{{ currentAnnouncement.title }}</h2>
      <div class="announcement-content" v-html="currentAnnouncement.content"></div>

      <hr class="divider-normal">

      <!-- 文件下载 -->
      <div class="file-downloads">
        <h3>相关附件：</h3>
        <div v-for="(file, index) in currentAnnouncement.link" :key="index">
          <a :href="file" download class="file-link" target="_blank">
            <el-icon><Document /></el-icon>
            附件{{ index + 1 }}：{{ getFileName(file) }}
          </a>
        </div>
      </div>
    </div>

    <!-- 底部控制栏 -->
    <div class="control-bar">
      <span>发布时间：{{ currentAnnouncement.date }}</span>
      <div class="font-control">
        <span>字体大小：</span>
        <el-button-group>
          <el-button :type="fontSize === 14 ? 'primary' : ''" @click="fontSize = 14">小</el-button>
          <el-button :type="fontSize === 16 ? 'primary' : ''" @click="fontSize = 16">中</el-button>
          <el-button :type="fontSize === 18 ? 'primary' : ''" @click="fontSize = 18">大</el-button>
        </el-button-group>
      </div>
    </div>

    <!-- 导航 -->
    <div class="navigation">
      <hr class="divider-normal">
      <div class="prev-next">
        <div v-if="prevAnnouncement" class="nav-item">
          <strong>上一篇：</strong>
          <router-link :to="`/announcement/${prevAnnouncement.id}`">
            {{ prevAnnouncement.title }}
          </router-link>
        </div>
        <div v-if="nextAnnouncement" class="nav-item">
          <strong>下一篇：</strong>
          <router-link :to="`/announcement/${nextAnnouncement.id}`">
            {{ nextAnnouncement.title }}
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import { useRoute } from 'vue-router'
import { Document } from '@element-plus/icons-vue'
import {announcements} from "@/data/announcements.js";

const route = useRoute()
const fontSize = ref(16)

// 新增本地响应式数据
const announcementData = ref(announcements)

// 获取当前公告
const currentAnnouncement = computed(() =>
  announcementData.value.find(a => a.id === parseInt(route.params.id))
)

// 获取相邻公告
const currentIndex = computed(() =>
  announcementData.value.findIndex(a => a.id === parseInt(route.params.id))
)

const prevAnnouncement = computed(() =>
  currentIndex.value > 0 ? announcementData.value[currentIndex.value - 1] : null
)

const nextAnnouncement = computed(() =>
  currentIndex.value < announcementData.value.length - 1 ? announcementData.value[currentIndex.value + 1] : null
)

const getFileName = (path) => {
  const fullName = path.split('/').pop();
  const chineseName = fullName.match(/[\u4e00-\u9fa5].+/);
  return chineseName ? chineseName[0].split('.')[0] : fullName;
}
</script>

<style scoped>
.announcement-detail {
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
}

.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
}

.title {
  font-size: 28px;
  font-weight: bold;
}

.divider-bold {
  border: 2px solid #409EFF;
  margin: 20px 0;
}

.announcement-title {
  text-align: center;
  font-size: 24px;
  margin: 30px 0;
}

.announcement-content {
  line-height: 1.8;
  margin-bottom: 40px;
}

.file-downloads {
  margin: 20px 0;
}

.file-link {
  color: #409EFF;
  display: block;
  margin: 10px 0;
  text-decoration: none;
}

.control-bar {
  background: #f5f7fa;
  padding: 15px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 20px 0;
}

.font-control {
  display: flex;
  align-items: center;
  gap: 10px;
}

.nav-item {
  margin: 15px 0;
}

.nav-item a {
  color: #409EFF;
  text-decoration: none;
}

.nav-item a:hover {
  text-decoration: underline;
}
</style>
