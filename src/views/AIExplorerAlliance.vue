<template>
  <div class="lab-detail-container">
    <!-- 新增社团图片 -->
    <div class="header-image">
      <img 
        src="@/assets/images/AIExplorerAlliance.png"
        alt="AI探索者联盟"
        class="alliance-header-img"
      >
    </div>

    <!-- 标题行 -->
    <el-row justify="space-between" align="middle" class="title-row">
      <el-col :span="12">
        <h1 class="main-title">AI探索者联盟社团</h1>
      </el-col>
      <el-col :span="12" class="breadcrumb-col">
        <el-breadcrumb separator=">>" class="breadcrumb">
          <el-breadcrumb-item>当前位置</el-breadcrumb-item>
          <el-breadcrumb-item :to="{ path: '/' }">前沿技术研究实验室</el-breadcrumb-item>
          <el-breadcrumb-item>AI探索者联盟社团</el-breadcrumb-item>
        </el-breadcrumb>
      </el-col>
    </el-row>

    <!-- 蓝色分割线 -->
    <hr class="divider">

    <!-- 内容区域 -->
    <div class="content-wrapper">
      <h2 class="section-title">AI探索者联盟社团简介</h2>

      <div class="section-block">
        <p class="content-text" style="text-indent: 2em">
          <strong>想要从"AI小白"华丽变身"AI大神"？</strong>别担心，我们不只是说说而已！在AI探索者联盟社团，我们用最酷的技术、最实用的项目和最有趣的团队合作，<strong>帮你从"啥是AI？"进阶到"AI还能这么玩！"</strong>，让AI从"科幻片"走进你的生活，从"高冷科技"变成"校园日常"！我们不仅要教你玩转AI技术，还要帮你把脑洞大开的想法变成现实。无论是机器学习、深度学习，还是用AI解决实际问题，我们都为你准备好了一个酷炫的舞台。<strong>通过最接地气的方式，我们让AI不再是遥不可及的概念，而是每个人都能轻松掌握的工具。</strong>
        </p>

        <p class="content-text" style="text-indent: 2em">
          <strong>AI探索者联盟，一群梦想家兼实干家</strong>，正用AI的魔法棒点石成金！我们不仅脑洞大开，还手脚麻利，把天马行空的想象变成现实。从医疗到教育，从工厂到银行，AI的触角无处不在，像超级英雄一样拯救低效、无聊和繁琐。跨学科合作？没问题！数据驱动？小菜一碟！我们用代码和算法编织未来，让创新不再是梦，而是每天都在发生的"小惊喜"。未来已来，AI探索者联盟正在用科技的力量，把世界变得更酷、更智能！
        </p>

        <p class="content-text" style="text-indent: 2em">
          <strong>AI探索者联盟社团（ AI for Science ）</strong>，是依托信息科学与工程学院的甘肃省人工智能和算力技术重点实验室、旅游信息融合处理与数据权属保护文化和旅游部重点实验室，秉承"学习、分享、创新"理念的学生社团，旨在为在校学生和热爱科技创新的学者提供一个交流和学习的平台，探索人工智能与科学研究的交叉点。
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

/* 新增社团图片样式 */
.header-image {
  margin-bottom: 30px;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 8px 20px rgba(26,58,109,0.1);
  transition: transform 0.3s ease;
}

.alliance-header-img {
  width: 100%;
  height: auto;
  display: block;
  object-fit: cover;
  max-height: 500px; /* 社团活动图片建议高度 */
}

@media (max-width: 768px) {
  .header-image {
    margin-bottom: 20px;
    border-radius: 8px;
    box-shadow: 0 4px 10px rgba(26,58,109,0.1);
  }
  
  .alliance-header-img {
    max-height: 220px;
  }
}

/* 添加悬停动效 */
.header-image:hover {
  transform: translateY(-3px);
}
</style>
