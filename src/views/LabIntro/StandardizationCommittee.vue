<template>
  <div class="lab-detail-container">

    <!-- 标题行 -->
    <el-row justify="space-between" align="middle" class="title-row">
      <el-col :span="12">
        <h1 class="main-title">甘肃省文化和旅游标准化技术委员会</h1>
      </el-col>
      <el-col :span="12" class="breadcrumb-col">
        <el-breadcrumb separator=">>" class="breadcrumb">
          <el-breadcrumb-item>当前位置</el-breadcrumb-item>
          <el-breadcrumb-item :to="{ path: '/' }">前沿技术研究实验室</el-breadcrumb-item>
          <el-breadcrumb-item>人工智能与算力技术重点实验室</el-breadcrumb-item>
        </el-breadcrumb>
      </el-col>
    </el-row>

    <!-- 蓝色分割线 -->
    <hr class="divider">

    <!-- 内容区域 -->
    <div class="content-wrapper">
      <h2 class="section-title">甘肃省文化和旅游标准化技术委员会简介</h2>

      <div class="section-block">
        <p class="content-text" style="text-indent: 2em">
          2022年1月，甘肃省市场监督管理局正式批复甘肃省文化和旅游标准化技术委员会，秘书处设在兰州大学，具体工作由兰州大学文旅部重点实验室承担。
        </p>

        <p class="content-text" style="text-indent: 2em">
          甘肃省文化和旅游标准化技术委员会成立以来，积极推动文旅产业服务系列地方标准编制和立项工作，2023年由省文旅厅推荐的国家标准“节假日城市旅游客流智能疏导指南”和文旅部行业标准“旅游大数据安全与隐私保护规范”已由全国旅游标准化技术委员会立项。另外，秘书处遴选出23项文旅产业服务系列地方标准草案，形成项目库，其中《旅游景区突发事件应急预案》《藏式木雕通用要求》《甘肃省智慧景区建设规范》《甘肃省智慧酒店建设规范》《旅游大数据安全与隐私保护管理规范》等5项标准已被立项。金昌市图书馆、敦煌市鸣沙山月牙泉国家级标准化试点单位和迭部县腊子口、和政县松鸣岩景区等省级标准化试点单位顺利通过验收;泾川县文化馆、华亭市博物馆、李家庄田园综合体乡村休闲旅游服务标准化试点、张掖丹霞景区、庄浪县云崖寺景区等5个省级标准化试点单位获批。
        </p>

        <p class="content-text" style="text-indent: 2em">
          此外，大力加强文旅标准化工作专业人才培养和队伍建设2023年10月，作为协办单位组织举办全国旅游标准化技术委员会业务工作培训班，文旅标准化委员会副主任杨裔教授作为授课专家之一对甘肃省文化和旅游标准化建设工作与参加培训人员作了交流;2022年6月，文旅标准化委员会在张掖市组织举办了1期全省文化和旅游标准化工作培训班，邀请省内外标准化方面专家专题授课，系统培训各市州和县区文旅系统的标准化工作业务人员 126 人;组织文旅标准化委员会全体委员参加了2022年全国旅游标准化线上培训班;积极抽派2名负责标准化工作的工作人员参加 2021年全国旅游标准化培训班。
        </p>
      </div>
    </div>
  </div>
</template>

<script setup>

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
  border: 1px solid #e4e7ed;
  border-radius: 8px;
  overflow: hidden;
}

.table-header {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  background: #f8f9fa;
  padding: 12px 15px;
  font-weight: 600;
}

.table-row {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  padding: 12px 15px;
  border-top: 1px solid #e4e7ed;
}

.table-cell {
  padding: 8px 10px;
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


@media (max-width: 768px) {
}
</style>
