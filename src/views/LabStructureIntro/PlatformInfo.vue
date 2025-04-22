<template>
  <div class="lab-detail-container">

    <!-- 标题行 -->
    <el-row justify="space-between" align="middle" class="title-row">
      <el-col :span="12">
        <h1 class="main-title">平台</h1>
      </el-col>
      <el-col :span="12" class="breadcrumb-col">
        <el-breadcrumb separator=">>" class="breadcrumb">
          <el-breadcrumb-item>当前位置</el-breadcrumb-item>
          <el-breadcrumb-item :to="{ path: '/' }">前沿技术研究实验室</el-breadcrumb-item>
          <el-breadcrumb-item>机构设置</el-breadcrumb-item>
          <el-breadcrumb-item :to="{ path: '/org-structure/platform-equipment' }">平台仪器</el-breadcrumb-item>
          <el-breadcrumb-item>平台</el-breadcrumb-item>
        </el-breadcrumb>
      </el-col>
    </el-row>

    <!-- 蓝色分割线 -->
    <hr class="divider">

    <!-- 平台信息内容 -->
    <div class="content-wrapper">
      <h2 class="section-title">平台概况</h2>

      <div class="platform-cards">
        <div v-for="(platform, index) in platformDescription" :key="index" class="platform-card">
          <div class="platform-card-content">
            <p class="platform-text">{{ platform }}</p>
          </div>
        </div>
      </div>

    </div>

  </div>

</template>

<script setup>

import {ref} from "vue";
const platformDescription=ref(['一、兰州大学网络空间安全研究院（由兰州大学于2016年发文成立）','二、甘肃省泛在电力物联网与电力资源优化配置工程研究中心（甘肃省发展和改革委员会于2020年发文成立）','三、旅游信息融合处理与数据权属保护文化和旅游部重点实验室（文化和旅游部于2021年5月发文成立）','四、甘肃省文化和旅游标准化技术委员会（甘肃省市场监督管理局于2022年发文成立）'])
</script>

<style scoped>
.lab-detail-container {
  width: 80%;
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

.content-wrapper {
  max-width: 95%;
  margin: 0 auto;
}

.section-title {
  font-size: 28px;
  font-weight: 600;
  text-align: center;
  color: #2d3748;
  margin-bottom: 30px;
}

.section-block {
  margin-bottom: 30px;
}

.section-subtitle {
  font-size: 20px;
  color: #1a3a6d;
  margin: 25px 0 15px;
  padding-bottom: 8px;
  border-bottom: 1px solid #e4e7ed;
}

.content-text {
  font-size: 16px;
  line-height: 2.5;
  color: #4a5568;
  text-align: justify;
  margin-bottom: 10px;
}

.content-list {
  padding-left: 30px;
  margin: 15px 0;

  li {
    margin-bottom: 8px;
    line-height: 1.6;
    color: #4a5568;
  }
}

.grid {
  display: grid;
}

.grid-cols-2 {
  grid-template-columns: repeat(2, minmax(0, 1fr));
}

.gap-4 {
  gap: 1rem;
}

.mt-4 {
  margin-top: 1rem;
}

.committee-table {
  margin: 40px 0;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  overflow: hidden;
}

:deep(.el-table) {
  --el-table-header-bg-color: white !important;
  --el-table-tr-bg-color: white;
  --el-table-row-hover-bg-color: #f5f7fa;
  font-family: '宋体';
}

:deep(.el-table th.el-table__cell) {
  color: #000000 !important;
  font-weight: bold !important;
  height: 70px !important;
  line-height: 30px !important;
}

:deep(.el-table td) {
  font-size: 18px;
  padding: 12px 0;
}

.equipment-list {
  @apply grid grid-cols-2 gap-4;
}

.equipment-item {
  @apply flex items-center p-3 bg-gray-50 rounded-lg;
}

.equipment-item svg {
  @apply mr-2 text-blue-600;
}

.category-title {
  @apply text-lg font-semibold mt-6 mb-3 text-gray-700;
}

@media (max-width: 768px) {
  .main-title {
    font-size: 24px;
  }

  .section-title {
    font-size: 22px;
  }

  .section-subtitle {
    font-size: 18px;
  }

  .content-text {
    font-size: 14px;
  }

  .content-list {
    padding-left: 20px;
  }

  .breadcrumb {
    font-size: 14px;
  }

  .grid-cols-2 {
    grid-template-columns: 1fr;
  }

  .committee-table {
    margin: 20px 0;
  }

  :deep(.el-table) {
    font-size: 14px;
  }

  :deep(.el-table th.el-table__cell) {
    font-size: 14px;
  }

  .equipment-list {
    grid-template-columns: 1fr;
  }
}

.content-text[style*="text-indent"] {
  text-indent: 2em;
}

.strategy-box {
  margin-top: 25px;
  padding: 20px;
  background: #f8fafc;
  border-radius: 8px;
}

.sub-list {
  padding-left: 30px;
  margin: 8px 0;
  list-style-type: circle;
}

.sub-list li {
  color: #4a5568;
  line-height: 1.6;
}

.structure-image-container {
  width: 100%;
  margin: 0 auto 40px;
  text-align: center;
}

.structure-image {
  width: 100%;
  max-width: 100%;
  height: auto;
  border-radius: 8px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
}

.images-container {
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
  gap: 30px;
  margin-bottom: 40px;
}

.image-link {
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-decoration: none;
  color: #333;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
}

.image-link:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.15);
}

.platform-image,
.equipment-image {
  width: 100%;
  height: 350px;
  object-fit: cover;
  display: block;
}

.image-caption {
  width: 100%;
  padding: 15px 0;
  font-size: 18px;
  font-weight: bold;
  text-align: center;
  background-color: #f5f7fa;
}

@media (max-width: 768px) {
  .images-container {
    flex-direction: column;
  }

  .platform-image,
  .equipment-image {
    height: 200px;
  }
}

.platform-cards {
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin-bottom: 40px;
}

.platform-card {
  background-color: #f8f9fa;
  border-radius: 10px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
  overflow: hidden;
  transition: all 0.3s ease;
}

.platform-card:hover {
  transform: translateY(-3px);
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.12);
}

.platform-card-content {
  padding: 25px;
}

.platform-text {
  font-size: 18px;
  line-height: 1.8;
  color: #333;
  margin: 0;
}

.platform-image-container {
  margin: 40px auto;
  text-align: center;
}

.platform-full-image {
  max-width: 100%;
  height: auto;
  border-radius: 10px;
  box-shadow: 0 6px 16px rgba(0, 0, 0, 0.1);
}

@media (max-width: 768px) {
  .platform-text {
    font-size: 16px;
  }
}
</style>
