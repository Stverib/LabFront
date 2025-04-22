<template>
  <div class="news-detail-container">
    <!-- 标题行 -->
    <el-row justify="space-between" align="middle" class="title-row">
      <el-col :span="12">
        <h1 class="main-title">新闻动态</h1>
      </el-col>
      <el-col :span="12" class="breadcrumb-col">
        <el-breadcrumb separator=">>" class="breadcrumb">
          <el-breadcrumb-item>当前位置</el-breadcrumb-item>
          <el-breadcrumb-item :to="{ path: '/' }">前沿技术研究实验室</el-breadcrumb-item>
          <el-breadcrumb-item>新闻动态</el-breadcrumb-item>
        </el-breadcrumb>
      </el-col>
    </el-row>

    <!-- 蓝色分割线 -->
    <hr class="divider">

    <!-- 新闻标题 -->
    <h1 class="news-title">{{ newsData.title }}</h1>

    <!-- 新闻内容 -->
    <div class="news-content">
      {{ newsData.content }}
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import { reports } from '@/data/reports.js'

const route = useRoute()
const newsData = ref({})

onMounted(() => {
  newsData.value = reports.value.find(item => item.id === Number(route.params.id)) || {}
})
console.log(newsData.value);

</script>

<style scoped>
.news-detail-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 40px 20px;
}

.title-row {
  margin-bottom: 20px;
}

.main-title {
  font-size: 32px;
  font-weight: 600;
  color: #303133;
  margin: 0;
}

.breadcrumb-col {
  display: flex;
  justify-content: flex-end;
}

.breadcrumb {
  font-size: 16px;
  :deep(.el-breadcrumb__inner) {
    color: #606266;
    &.is-link {
      font-weight: normal;
    }
  }
}

.divider {
  border: 0;
  height: 2px;
  background: #1a73e8;
  margin: 20px 0 40px;
}

.news-title {
  font-size: 36px;
  font-weight: 600;
  text-align: center;
  color: #303133;
  margin-bottom: 30px;
}

.news-content {
  font-size: 18px;
  line-height: 1.8;
  color: #606266;
  white-space: pre-wrap;
}
</style>
