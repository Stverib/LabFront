<template>
  <div class="projects-container">
    <el-tabs v-model="activeCategory" class="category-tabs">
      <el-tab-pane v-for="tab in tabs" :key="tab.name" :label="tab.label" :name="tab.name">
        <div class="timeline-container">
          <div v-for="(project, index) in filteredProjects(tab.name)" :key="project.code" 
               class="project-card" :class="{ 'reverse-layout': index % 2 }">
            <!-- 时间轴节点 -->
            <div class="timeline-node">
              <div class="node-year">{{ getStartYear(project.period) }}</div>
              <div class="node-line"></div>
            </div>

            <!-- 项目内容 -->
            <el-card class="project-content">
              <div class="project-header">
                <h3 class="project-title">{{ project.name }}</h3>
                <el-tag :type="getStatusType(project.status)" effect="dark" class="status-tag">
                  {{ project.status }}
                </el-tag>
              </div>
              
              <div class="project-meta">
                <div><el-icon><Document /></el-icon> 项目编号：{{ project.code }}</div>
                <div><el-icon><Calendar /></el-icon> 起止时间：{{ project.period }}</div>
                <div><el-icon><Money /></el-icon> 项目经费：{{ project.budget || '待补充' }}</div>
              </div>

              <el-divider />

              <div class="project-body">
                <div class="project-description">{{ project.description }}</div>
                
                <div v-if="project.outcomes?.length" class="outcomes-section">
                  <h4>主要成果：</h4>
                  <div class="outcomes-grid">
                    <el-link v-for="outcome in project.outcomes" :key="outcome.title" 
                            :href="outcome.link" target="_blank" type="info" class="outcome-item">
                      <el-icon :size="18" class="outcome-icon">
                        <component :is="outcomeIcons[outcome.type] || 'QuestionFilled'" />
                      </el-icon>
                      {{ outcome.title }}
                    </el-link>
                  </div>
                </div>
              </div>
            </el-card>
          </div>
        </div>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import ProjectList from '@/components/ProjectList.vue'

// 真实项目数据
const projects = ref([
  // ========== 国家级项目 ==========
  {
    category: 'national',
    name: '面向节假日城市旅游客流调控和智能服务的应用示范',
    code: '2021ZD0111405',
    type: '科技创新2030-“新一代人工智能”重大项目',
    period: '2021-12 ~ 2024-11',
    status: '进行中',
    description: '研发节假日客流预测与智能调度系统，建立多维度旅游服务决策模型',
    outcomes: [
      { type: 'system', title: '客流智能调控平台', link: '#' },
      { type: 'report', title: '技术白皮书', link: '#' }
    ],
    budget: '860万元'
  },
  {
    category: 'national',
    name: '大数据权属保护理论与方法',
    code: '2018YFB1003205',
    type: '国家重点研发计划',
    period: '2018-05 ~ 2021-04',
    status: '已结题',
    description: '构建数据权属界定框架，研发数据确权与追踪技术',
    outcomes: [
      { type: 'standard', title: '数据权属标准草案', link: '#' },
      { type: 'patent', title: '发明专利3项', link: '#' }
    ],
    budget: '650万元'
  },
  {
    category: 'national',
    name: '基于概率近似正确理论的旅游大数据分析研究与应用',
    code: '21YF5FA111',
    type: '甘肃省重点研发计划',
    period: '2021-12 ~ 2023-12',
    status: '已结题',
    description: '开发旅游大数据概率分析模型，构建决策支持系统',
    outcomes: [
      { type: 'model', title: '旅游需求预测模型', link: '#' }
    ],
    budget: '180万元'
  },
  {
    category: 'national',
    name: '网格标准基础研究',
    code: '90812001',
    type: '国家自然科学基金重大研究计划',
    period: '2011-01 ~ 2012-06',
    status: '已结题',
    description: '研究网格计算标准化体系，制定核心协议规范',
    outcomes: [
      { type: 'standard', title: '网格协议标准V1.0', link: '#' }
    ],
    budget: '120万元'
  },
  {
    category: 'national',
    name: '基于语音交互的智慧家庭系统',
    code: '2017年度留学回国创业支持计划',
    type: '人社部优秀项目',
    period: '2017-01 ~ 2019-01',
    status: '已结题',
    description: '研发智能家居语音控制系统，实现多设备联动',
    outcomes: [
      { type: 'product', title: '智能家居中控设备', link: '#' }
    ],
    budget: '200万元'
  },

  // ========== 省部级项目 ==========
  {
    category: 'provincial',
    name: '大数据背景下数据安全及个人隐私保护研究',
    code: '2023省级重点人才',
    type: '甘肃省重点人才项目',
    period: '2023-01 ~ 2024-06',
    status: '进行中',
    description: '构建西北地区数据安全评估体系，研发隐私计算平台',
    outcomes: [
      { type: 'platform', title: '隐私保护计算平台', link: '#' }
    ],
    budget: '150万元'
  },
  {
    category: 'provincial',
    name: '基于“5G+智慧教育”促进高质量教育均衡发展的创新试点',
    code: '2023CYZC-01',
    type: '甘肃省高校产业支撑计划',
    period: '2023-12 ~ 2026-12',
    status: '进行中',
    description: '开发5G远程教育平台，实现优质教育资源下沉',
    outcomes: [
      { type: 'platform', title: '5G智慧教育云平台', link: '#' }
    ],
    budget: '320万元'
  },
  {
    category: 'provincial',
    name: '甘肃地质灾害防治区泥石流临灾监测预警关键技术研究与示范应用',
    code: '1102FKDA010',
    type: '甘肃省科技重大专项',
    period: '2012-04 ~ 2014-12',
    status: '已结题',
    description: '研发地质灾害实时监测系统，建立预警模型',
    outcomes: [
      { type: 'system', title: '地质灾害监测平台', link: '#' }
    ],
    budget: '480万元'
  },
  {
    category: 'provincial',
    name: '基于机会通信的风沙监测无线传感器组网关键技术研究',
    code: '2011自然科学基金',
    type: '甘肃省自然科学基金',
    period: '2011-01 ~ 2013-12',
    status: '已结题',
    description: '研究恶劣环境下的无线传感网络通信协议',
    outcomes: [
      { type: 'protocol', title: '机会通信协议栈', link: '#' }
    ],
    budget: '80万元'
  },

  // ========== 企业合作项目 ==========
  {
    category: 'enterprise',
    name: '数据同步系统测试',
    partner: '清华大学',
    period: '2013-10 ~ 2014-06',
    status: '已结题',
    description: '开发分布式数据同步测试框架，验证系统可靠性',
    outcomes: [
      { type: 'report', title: '测试认证报告', link: '#' },
      { type: 'tool', title: '自动化测试工具集', link: '#' }
    ],
    contribution: '提升系统稳定性30%'
  },
  {
    category: 'enterprise',
    name: 'TStor分布式文件系统评测与建模',
    partner: '清华大学',
    period: '2017-09 ~ 2019-12',
    status: '已结题',
    description: '构建分布式存储系统性能评估模型',
    outcomes: [
      { type: 'model', title: '性能评估指标体系', link: '#' }
    ],
    contribution: '优化存储效率25%'
  },
  {
    category: 'enterprise',
    name: '语音及语言云计算关键技术研究',
    partner: '科大讯飞',
    period: '2013-01 ~ 2015-12',
    status: '已结题',
    description: '研发语音识别云服务架构，优化自然语言处理流水线',
    outcomes: [
      { type: 'product', title: '语音云服务平台', link: '#' },
      { type: 'patent', title: '发明专利2项', link: '#' }
    ],
    contribution: '支撑千万级用户语音服务'
  },
  {
    category: 'enterprise',
    name: '万维自主版式电子文件管理系统开发',
    partner: '工信部',
    period: '2011-10 ~ 2012-07',
    status: '已结题',
    description: '开发符合国家标准的电子文件管理系统',
    outcomes: [
      { type: 'system', title: '电子文件管理系统V2.0', link: '#' }
    ],
    contribution: '通过国家二级等保认证'
  },

  // ========== 参与项目 ==========
  {
    category: 'collaboration',
    name: '丝绸之路文化主题创意关键技术研究',
    code: '2013BAH40F01',
    type: '国家科技支撑计划',
    period: '2013-01 ~ 2015-12',
    status: '已结题',
    role: '参与单位',
    description: '研究文化数字化保护与展示技术',
    outcomes: [
      { type: 'exhibition', title: '数字文化展厅', link: '#' }
    ]
  },
  {
    category: 'collaboration',
    name: '风沙环境中基于机会通信的无线传感器网络组网问题的基础研究及示范性应用',
    code: '国家自然科学基金面上项目',
    period: '2010-01 ~ 2013-12',
    status: '已结题',
    role: '参与单位',
    description: '研究恶劣环境下的网络组网协议',
    outcomes: [
      { type: 'protocol', title: '抗风沙通信协议', link: '#' }
    ]
  },
  {
    category: 'collaboration',
    name: '面向网络规划的演化程序开发理论与方法',
    code: '61370219',
    type: '国家自然科学基金面上项目',
    period: '2014-01 ~ 2017-12',
    status: '已结题',
    role: '参与单位',
    description: '研究网络规划自动生成算法',
    outcomes: [
      { type: 'algorithm', title: '自动规划算法库', link: '#' }
    ]
  }
])

// 项目分类
const activeCategory = ref('national')

// 在script setup中添加
import { Document, Calendar, Money } from '@element-plus/icons-vue'

const tabs = [
  { label: '国家级项目', name: 'national' },
  { label: '省部级项目', name: 'provincial' },
  { label: '企业合作', name: 'enterprise' },
  { label: '参与项目', name: 'collaboration' }
]

const outcomeIcons = {
  system: 'Monitor',
  report: 'Document',
  patent: 'Warning',
  platform: 'Platform',
  model: 'DataAnalysis',
  product: 'Goods',
  protocol: 'Connection',
  algorithm: 'Cpu',
  exhibition: 'Picture'
}

const filteredProjects = (category) => {
  return projects.value
    .filter(p => p.category === category)
    .sort((a, b) => new Date(b.period.split('~')[0]) - new Date(a.period.split('~')[0]))
}

const getStartYear = (period) => period.split('-')[0]
const getStatusType = (status) => status === '进行中' ? 'success' : 'info'
</script>

<style lang="scss" scoped>
.projects-container {
  max-width: 1400px;
  padding: 2rem 1.5rem;

  .timeline-container {
    position: relative;
    padding-left: 60px;
    margin-top: 2rem;

    &::before {
      content: '';
      position: absolute;
      left: 29px;
      top: 0;
      height: 100%;
      width: 2px;
      background: #e4e7ed;
    }
  }

  .project-card {
    position: relative;
    margin-bottom: 2rem;
    display: flex;
    align-items: flex-start;

    &.reverse-layout {
      flex-direction: row-reverse;
      
      .project-content {
        margin-left: 0;
        margin-right: 40px;
      }
    }
  }

  .timeline-node {
    position: relative;
    width: 60px;
    flex-shrink: 0;
    
    .node-year {
      background: #409eff;
      color: white;
      padding: 6px 12px;
      border-radius: 16px;
      font-size: 0.9em;
      text-align: center;
      box-shadow: 0 2px 8px rgba(64, 158, 255, 0.2);
    }

    .node-line {
      height: 2px;
      background: #409eff;
      margin: 12px 0;
      position: relative;
      
      &::after {
        content: '';
        position: absolute;
        right: -6px;
        top: -4px;
        width: 10px;
        height: 10px;
        background: #409eff;
        border-radius: 50%;
      }
    }
  }

  .project-content {
    flex: 1;
    margin-left: 40px;
    transition: transform 0.3s;

    &:hover {
      transform: translateY(-4px);
    }

    .project-header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 1rem;

      .project-title {
        margin: 0;
        font-size: 1.2em;
        color: #303133;
      }

      .status-tag {
        font-size: 0.85em;
      }
    }

    .project-meta {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
      gap: 1rem;
      color: #606266;
      font-size: 0.95em;

      .el-icon {
        vertical-align: middle;
        margin-right: 4px;
      }
    }

    .project-description {
      line-height: 1.6;
      color: #606266;
      margin: 1rem 0;
    }

    .outcomes-section {
      margin-top: 1.5rem;

      h4 {
        margin: 0 0 1rem;
        font-size: 1em;
        color: #909399;
      }

      .outcomes-grid {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
        gap: 12px;
      }

      .outcome-item {
        display: flex;
        align-items: center;
        padding: 8px;
        border-radius: 4px;
        transition: background 0.3s;

        &:hover {
          background: #f5f7fa;
        }

        .outcome-icon {
          margin-right: 8px;
          color: #909399;
        }
      }
    }
  }
}
</style>