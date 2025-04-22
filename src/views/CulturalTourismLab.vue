<template>
    <div class="lab-detail-container">
      <!-- 标题行 -->
      <el-row justify="space-between" align="middle" class="title-row">
        <el-col :span="12">
          <h1 class="main-title">文旅重点实验室</h1>
        </el-col>
        <el-col :span="12" class="breadcrumb-col">
          <el-breadcrumb separator=">>" class="breadcrumb">
            <el-breadcrumb-item>当前位置</el-breadcrumb-item>
            <el-breadcrumb-item :to="{ path: '/' }">前沿技术研究实验室</el-breadcrumb-item>
            <el-breadcrumb-item>文旅重点实验室</el-breadcrumb-item>
          </el-breadcrumb>
        </el-col>
      </el-row>

      <!-- 蓝色分割线 -->
      <hr class="divider">

      <!-- 内容区域 -->
      <div class="content-wrapper">
        <h2 class="section-title">旅游信息融合处理与数据权属保护文化和旅游部重点实验室简介</h2>

        <div class="section-block">
          <h3 class="section-subtitle">一、实验室名称</h3>
          <p class="content-text">旅游信息融合处理与数据权属保护文化和旅游部重点实验室</p>
        </div>

        <div class="section-block">
          <h3 class="section-subtitle">二、实验室背景</h3>
          <p class="content-text">旅游信息融合处理与数据权属保护文化和旅游部重点实验室，依托兰州大学信息科学与工程学院，以国家文化和旅游信息处理的重大战略需求为目标，立足于智慧旅游信息科学的国际前沿和我国现代文化和旅游行业建设的重大问题，探索研究文化和旅游行业中的旅游信息融合处理研究、旅游数据权属保护研究等科学问题，形成一系列的重大研究成果，推动兰州大学信息学科的发展。</p>
        </div>

        <div class="section-block">
          <h3 class="section-subtitle">三、研究内容</h3>
          <p class="content-text">实验室将围绕目前旅游信息共享开放程度不够、关键技术支撑能力不强、信息资源应用领域不广、数据安全管理体系不完善、专业人才队伍规模和素质不够等问题，从信息处理和数据安全两方面开展以下两个关键技术研究：</p>
          <ul class="content-list">
            <li>旅游信息融合处理</li>
            <li>旅游数据权属保护</li>
          </ul>
          <p class="content-text">这两个研究方向之间相互联系，各有侧重，是一个有机的整体。通过这两个研究方向，建立旅游信息的使用机制，探索旅游信息的应用价值，创新旅游行业提升竞争力的手段，提升游客体验的同时保障游客个人隐私。</p>
        </div>

        <div class="section-block">
          <h3 class="section-subtitle">四、科研力量</h3>
          <div class="grid grid-cols-2 gap-4">
            <div>
              <p class="content-text"><strong>固定研究人员：</strong>25人（管理人员2人，研究人员17人，技术人员6人）</p>
              <p class="content-text"><strong>职称结构：</strong></p>
              <ul class="content-list">
                <li>教授8人</li>
                <li>副教授10人</li>
                <li>高级实验师1人</li>
                <li>讲师4人</li>
                <li>助理研究员2人</li>
              </ul>
            </div>
            <div>
              <p class="content-text"><strong>学历结构：</strong></p>
              <ul class="content-list">
                <li>博士22人</li>
                <li>硕士3人</li>
              </ul>
              <p class="content-text"><strong>年龄结构：</strong></p>
              <ul class="content-list">
                <li>30-40岁：9人</li>
                <li>41-50岁：11人</li>
                <li>51岁以上：5人</li>
              </ul>
            </div>
          </div>
          <p class="content-text mt-4">此外，实验室有流动人员32人，均为实验室在读或已毕业博士或硕士研究生。</p>
        </div>

        <div class="section-block">
          <h3 class="section-subtitle">五、学术委员会</h3>
          <div class="committee-table">
            <div class="table-header">
              <div class="table-cell">姓名</div>
              <div class="table-cell">职称/职务</div>
              <div class="table-cell">单位</div>
            </div>
            <div class="table-row">
              <div class="table-cell font-semibold">郑纬民</div>
              <div class="table-cell">主任/中国工程院院士</div>
              <div class="table-cell">清华大学计算机系</div>
            </div>
            <!-- 其他委员按相同格式添加 -->
            <div class="table-row">
              <div class="table-cell">吴飞</div>
              <div class="table-cell">国家杰青/教授</div>
              <div class="table-cell">浙江大学</div>
            </div>
          </div>
        </div>

        <div class="section-block">
          <h3 class="section-subtitle">六、基础条件</h3>
          <p class="content-text">实验室总面积：<strong>710m²</strong>（含实验室、会议室、大数据指挥中心）</p>
          <p class="content-text">主要设备：</p>
          <ul class="equipment-list">
            <li v-for="item in equipment" :key="item" class="equipment-item">
              <el-icon><Monitor /></el-icon>
              {{ item }}
            </li>
          </ul>
        </div>

        <div class="section-block">
          <h3 class="section-subtitle">七、成果及贡献</h3>
          <div class="achievement-category">
            <h4 class="category-title">1. 推动行业发展</h4>
            <ul class="content-list">
              <li>主导甘肃省智慧文旅规划编制，起草《关于加快建设旅游强省的意见》等3份省级文件</li>
              <li>实施"游安徽"、"一部手机游广州"等省级智慧旅游项目</li>
              <li>完成甘肃省7个地市智慧旅游项目建设</li>
            </ul>
          </div>

          <div class="achievement-category">
            <h4 class="category-title">2. 行业技术进步</h4>
            <ul class="content-list">
              <li>建设"甘肃文旅大数据中心"，获腾讯全球数字生态大会"数字文旅先锋奖"</li>
              <li>设计"甘肃省旅游文化大数据交换共享平台"入选文旅部典型案例</li>
            </ul>
          </div>

          <div class="achievement-category">
            <h4 class="category-title">3. 解决关键问题</h4>
            <ul class="content-list">
              <li>主导"一部手机游甘肃"省列重大项目，获文旅产业年度突出贡献奖</li>
              <li>开发旅游信息分析建模系统，解决数据共享、安全等关键技术问题</li>
            </ul>
          </div>
        </div>

        <div class="section-block">
          <h3 class="section-subtitle">八、人才培养</h3>
          <div class="grid grid-cols-2 gap-4">
            <div>
              <p class="content-text"><strong>人才引进：</strong></p>
              <ul class="content-list">
                <li>北京大学</li>
                <li>肯特州立大学</li>
                <li>巴黎第十一大学</li>
                <li>悉尼科技大学</li>
              </ul>
            </div>
            <div>
              <p class="content-text"><strong>学术交流：</strong></p>
              <ul class="content-list">
                <li>主办4次国际会议</li>
                <li>举办7次全国会议</li>
                <li>外籍专家交流计划</li>
                <li>访问学者项目</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>

  <script setup>
  import { Monitor } from '@element-plus/icons-vue'

  const equipment = [
    '网络安全专用服务器',
    '模拟计算平台',
    '数据采集系统CTI3000',
    '华为RH2288V3专用服务器',
    '华为Logcenter专用服务器',
    'IBM数据专用服务器'
  ]
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
    max-width: 100%;
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
  </style>
