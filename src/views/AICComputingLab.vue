<template>
  <div class="lab-detail-container">
    <!-- 新增图片 -->
    <div class="header-image">
      <img
        src="@/assets/images/AICLab.png"
        alt="实验室图片"
        class="lab-header-img"
      >
    </div>

    <!-- 标题行 -->
    <el-row justify="space-between" align="middle" class="title-row">
      <el-col :span="12">
        <h1 class="main-title">人工智能与算力技术重点实验室</h1>
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
      <h2 class="section-title">甘肃省人工智能与算力技术重点实验室简介</h2>

      <div class="section-block">
        <p class="content-text" style="text-indent: 2em">
          2023年4月由兰州大学牵头，联合甘肃紫金云大数据开发有限责任公司、甘肃燧弘绿色算力有限公司、甘肃省计算中心、摩尔线程智能科技（北京）有限责任公司、内蒙古探索超算科技有限公司、甘肃树帜未来信息科技有限公司、陇东学院和中国移动通信集团甘肃有限公司等机构，向甘肃省科技厅申报甘肃省算力技术重点实验室（兰州大学）。此事作为4月初给程晓波副省长"关于与清华大学和兰州大学建立长效联系推进甘肃省算力及数字经济工作的请示"中已经重点汇报，并同时获得了省发改委和省科技厅的重视，目前已经成立。成立以来，以此重点实验室为依托，<strong style="color: #1a3a6d">瞄准国家人工智能及"东数西算"战略</strong>，结合我省"东数西算"节点建设，以实现通用人工智能算力调度和数据产业服务为目标，以建设甘肃省智能计算应用产业园为突破，以甘肃省十大生态产业中的节能环保、文化旅游和数据信息为战略示范，依托"旅游信息融合处理与数据权属保护文化和旅游部重点实验室""甘肃省泛在电力物联网与电力资源优化配置工程研究中心""甘肃省文旅大数据及智能化行业技术中心""甘肃省文化和旅游标准化技术委员会"等已建成的省部级大数据平台，探索我省通用人工智能发展路径，服务我省行业数字化转型升级战略需求，培养我省通用人工智能及大数据人才团队，为解决我省数字经济发展卡脖子问题提供技术攻关，为打造我省算力和数据引擎奠定基础。
        </p>

        <p class="content-text" style="text-indent: 2em">
          我们拥有21间共计710平方米的实验室用房，配备了756件先进设备，总价值超过4800万元。凭借268个计算节点，形成了<strong style="color: #1a3a6d">"以核心为引领、双支撑为保障、三维协同为动力"</strong>的发展格局，致力于解决地方算力行业的科学和技术难题。以建设全国一体化算力网络国家枢纽节点为契机，形成"一个核心，两个支撑，三个维度协同推进"的发展格局，其中以服务"东数西算"国家战略为核心定位，以区域算力协同调度和数据安全隐私保护为双支撑体系，并在甘肃省三个优势领域开展示范应用：文化旅游智能分析、工业智能质检和智慧农业监测。
        </p>

        <div class="strategy-box">
          <h3 class="section-subtitle">发展格局</h3>
          <p class="content-text" style="text-indent: 2em">
            本实验室立足国家"东数西算"战略核心，构建区域算力协同调度与数据安全隐私保护双支撑体系，重点推进三大示范领域：在文化旅游领域开展智能分析技术应用，在工业生产领域实施智能质检解决方案，在农业领域推进智慧监测系统建设。通过"核心引领-双轮驱动-多维示范"的协同发展模式，系统解决地方算力行业的技术瓶颈问题。
          </p>
        </div>
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
  line-height: 1.8;
  color: #4a5568;
  text-align: justify;
  margin-bottom: 15px;
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

/* 新增图片样式 */
.header-image {
  margin-bottom: 30px;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.lab-header-img {
  width: 100%;
  display: block;
  object-fit: cover;
  max-height: 550px;

}

@media (max-width: 768px) {
  .header-image {
    margin-bottom: 20px;
    border-radius: 4px;
  }

  .lab-header-img {
    max-height: 200px;
  }
}
</style>
