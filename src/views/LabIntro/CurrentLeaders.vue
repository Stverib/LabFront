<template>
  <div class="lab-detail-container">

    <!-- 标题行 -->
    <el-row justify="space-between" align="middle" class="title-row">
      <el-col :span="12">
        <h1 class="main-title">现任领导</h1>
      </el-col>
      <el-col :span="12" class="breadcrumb-col">
        <el-breadcrumb separator=">>" class="breadcrumb">
          <el-breadcrumb-item>当前位置</el-breadcrumb-item>
          <el-breadcrumb-item :to="{ path: '/' }">前沿技术研究实验室</el-breadcrumb-item>
          <el-breadcrumb-item>现任领导</el-breadcrumb-item>
        </el-breadcrumb>
      </el-col>
    </el-row>

    <!-- 蓝色分割线 -->
    <hr class="divider">

    <!-- 内容区域 -->
    <h2 class="section-title">现任领导简介</h2>

    <!-- 新增领导信息表格 -->
    <div class="committee-table">
      <el-table
        :data="currentLeaders"
        border
        style="width: 100%; font-family: '宋体'; font-size: 30px;"
        :header-cell-style="{
          color: '#000000',
          fontWeight: 'bold',
          background: 'white',
          fontSize: '24px',

        }"
      >
        <el-table-column
          prop="name"
          label="姓名"
          width="120"
          fixed
          header-align="center"
          align="center"
        />
        <el-table-column
          prop="title"
          label="职称"
          width="180"
          header-align="center"
        />
        <el-table-column
          prop="honors"
          label="荣誉奖项"
          width="220"
          header-align="center"

        />
        <el-table-column
          prop="positions"
          label="学术任职"
          width="250"
          header-align="center"

        />
        <el-table-column
          prop="researchFields"
          label="研究方向"
          width="200"
          header-align="center"
        />
        <el-table-column
          prop="academicAchievement"
          label="学术成果"
          min-width="300"
          header-align="center"

        />
      </el-table>
    </div>

  </div>

</template>

<script setup>

import {ref} from "vue";
import {leaders} from "@/data/LeaderInfo.js";

const currentLeaders = ref(leaders);
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
</style>
