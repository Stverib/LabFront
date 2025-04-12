<template>
  <div class="home-page">
    <!-- 实验室简介 -->
    <el-card class="intro-card">
      <h2>欢迎来到智能计算实验室</h2>
      <p>我们致力于人工智能前沿技术研究，聚焦自然语言处理与计算机视觉...</p>
    </el-card>

    <!-- 研究方向大框 -->
    <el-card class="section-box">
      <template #header>
        <div class="section-title">研究方向</div>
      </template>
      <el-row :gutter="20">
        <el-col 
          v-for="(area, index) in researchAreas" 
          :key="index" 
          :xs="24" 
          :sm="12" 
          :md="8" 
          :lg="6"
        >
          <div class="text-card">
            <h3 class="research-title">{{ area.title }}</h3>
            <el-divider />
            <p class="research-desc">{{ area.description }}</p>
          </div>
        </el-col>
      </el-row>
    </el-card>

    <!-- 研究成果大框 -->
    <el-card class="section-box">
      <template #header>
        <div class="section-title">研究成果</div>
      </template>
      <div class="achievement-list">
        <div 
          v-for="(item, index) in achievements" 
          :key="index" 
          class="achievement-item"
        >
          <div class="achievement-index">{{ index + 1 }}.</div>
          <div class="achievement-content">
            <p class="achievement-title">{{ item.title }}</p>
            <p class="achievement-detail">{{ item.detail }}</p>
            <p class="achievement-period">{{ item.period }}</p>
          </div>
        </div>
      </div>
    </el-card>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const researchAreas = ref([
  {
    title: '算力技术',
    image: 'https://q5.itc.cn/q_70/images03/20240227/61078131381245279ffd956a04b8d254.jpeg',
    description: '分布式计算架构与加速芯片研究，提升AI算力效率'
  },
  {
    title: '大模型',
    image: 'https://n.sinaimg.cn/sinakd20240621s/67/w1000h667/20240621/df0b-d564ddfca5043a99981e578e2817dbd0.png',
    description: '百亿参数级模型训练与垂直领域应用研究'
  },
  {
    title: '图像识别',
    image: 'https://img0.baidu.com/it/u=407960834,441505028&fm=253&fmt=auto&app=120&f=JPEG?w=837&h=500',
    description: '多模态视觉理解与工业级检测算法研发'
  },
  {
    title: '大数据分析',
    image: 'https://nimg.ws.126.net/?url=http%3A%2F%2Fdingyue.ws.126.net%2F2025%2F0317%2F17ce6d71j00st9uyg00j6d000ss00g8m.jpg&thumbnail=660x2147483647&quality=80&type=jpg',
    description: '海量数据挖掘与实时计算平台构建'
  }
])

// 新增研究成果数据
const achievements = ref([
  {
    title: '国家科技部，科技创新2030-“新一代人工智能”重大项目',
    detail: '2021ZD0111405，面向节假日城市旅游客流调控和智能服务的应用示范',
    period: '2021年12月至2024年11月，主持'
  },
  {
    title: '国家科技部，国家重点研发计划“数据科学的若干基础理论”',
    detail: '2018YFB1003205，大数据权属保护理论与方法',
    period: '2018-05至2021-04，主持'
  },
  {
    title: '国家文化和旅游部，科技创新工程项目',
    detail: '基于多源数据的旅游决策技术研究',
    period: '2021年6月-2023年6月，主持'
  },
  {
    title: '甘肃省委组织部，2023年省级重点人才项目',
    detail: '大数据背景下数据安全及个人隐私保护研究',
    period: '2023年1月-2014年6月，主持'
  },
  {
    title: '甘肃省委组织部，甘肃省重点人才资金项目',
    detail: '大数据背景下个人隐私保护研究团队建设项目',
    period: '2018年12月至2020年12月，主持'
  }
])
</script>

<style scoped>
/* 新增板块样式 */
.section-box {
  margin-top: 30px;
}

.section-title {
  font-size: 24px;
  color: #303133;
  font-weight: 500;
  padding: 10px 0;
}

/* 调整文字卡片样式 */
.text-card {
  margin: 8px;
  padding: 15px;
}

/* 新增研究成果样式 */
.achievement-list {
  padding: 0 20px;
}

.achievement-item {
  display: flex;
  margin: 18px 0;
  padding: 12px;
  background: #f8f9fa;
  border-radius: 4px;
}

.achievement-index {
  font-size: 18px;
  color: #1a73e8;
  min-width: 30px;
  padding-right: 15px;
}

.achievement-title {
  color: #2d3748;
  font-weight: 500;
  margin-bottom: 6px;
}

.achievement-detail {
  color: #4a5568;
  font-size: 14px;
  line-height: 1.6;
}

.achievement-period {
  color: #718096;
  font-size: 13px;
  margin-top: 8px;
}
</style>
