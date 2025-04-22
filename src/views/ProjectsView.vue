<template>
  <div class="projects-container">
    <!-- 菜单导航 -->
    <el-menu
      :default-active="activeCategory"
      mode="horizontal"
      class="category-menu"
      @select="handleSelect"
    >
      <el-menu-item
        v-for="tab in tabs"
        :key="tab.name"
        :index="tab.name"
      >
        {{ tab.label }}
      </el-menu-item>
    </el-menu>

    <!-- 项目列表 -->
    <div class="project-list">
      <el-card
        v-for="project in filteredProjects(activeCategory)"
        :key="project.id"
        class="project-item"
      >
        <div class="project-header">
          <h3 class="project-title">{{ project.description }}</h3>
          <el-tag :type="getStatusType(project.status)" effect="dark" class="status-tag">
            {{ project.status === 'completed' ? '已完成' : '进行中' }}
          </el-tag>
        </div>

        <div class="project-meta">
          <div class="meta-row">
            <div class="meta-item"><el-icon><Document /></el-icon> 项目名称：{{ project.projectName }}</div>
            <div class="meta-item" v-if="project.projectNumber"><el-icon><Ticket /></el-icon> 项目编号：{{ project.projectNumber }}</div>
            <div class="meta-item"><el-icon><OfficeBuilding /></el-icon> 主管部门：{{ project.department }}</div>
          </div>
          <div class="meta-row">
            <div class="meta-item"><el-icon><Calendar /></el-icon> 起止时间：{{ project.startTime }} ~ {{ project.endTime }}</div>
            <div class="meta-item"><el-icon><User /></el-icon> 角色：{{ project.role }}</div>
          </div>
        </div>
      </el-card>
    </div>
  </div>
</template>

<script setup>
import {ref} from 'vue'
import { Document, Ticket, Calendar, OfficeBuilding, User } from '@element-plus/icons-vue'

// 项目
const projects = ref([
  // ========== 国家级项目 ==========
  {
    category: 'national',
    name: '面向节假日城市旅游客流调控和智能服务的应用示范',
    code: '2021ZD0111405',
    type: '科技创新2030-"新一代人工智能"重大项目',
    period: '2021-12 ~ 2024-11',
    status: '进行中',
    description: '研发节假日客流预测与智能调度系统，建立多维度旅游服务决策模型',
    outcomes: [
      {type: 'system', title: '客流智能调控平台', link: '#'},
      {type: 'report', title: '技术白皮书', link: '#'}
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
      {type: 'standard', title: '数据权属标准草案', link: '#'},
      {type: 'patent', title: '发明专利3项', link: '#'}
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
      {type: 'model', title: '旅游需求预测模型', link: '#'}
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
      {type: 'standard', title: '网格协议标准V1.0', link: '#'}
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
      {type: 'product', title: '智能家居中控设备', link: '#'}
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
      {type: 'platform', title: '隐私保护计算平台', link: '#'}
    ],
    budget: '150万元'
  },
  {
    category: 'provincial',
    name: '基于"5G+智慧教育"促进高质量教育均衡发展的创新试点',
    code: '2023CYZC-01',
    type: '甘肃省高校产业支撑计划',
    period: '2023-12 ~ 2026-12',
    status: '进行中',
    description: '开发5G远程教育平台，实现优质教育资源下沉',
    outcomes: [
      {type: 'platform', title: '5G智慧教育云平台', link: '#'}
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
      {type: 'system', title: '地质灾害监测平台', link: '#'}
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
      {type: 'protocol', title: '机会通信协议栈', link: '#'}
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
      {type: 'report', title: '测试认证报告', link: '#'},
      {type: 'tool', title: '自动化测试工具集', link: '#'}
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
      {type: 'model', title: '性能评估指标体系', link: '#'}
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
      {type: 'product', title: '语音云服务平台', link: '#'},
      {type: 'patent', title: '发明专利2项', link: '#'}
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
      {type: 'system', title: '电子文件管理系统V2.0', link: '#'}
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
      {type: 'exhibition', title: '数字文化展厅', link: '#'}
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
      {type: 'protocol', title: '抗风沙通信协议', link: '#'}
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
      {type: 'algorithm', title: '自动规划算法库', link: '#'}
    ]
  }
])

const newProjectsData = ref([
  {
    "id": "1",
    "department": "国家科技部",
    "projectName": "科技创新2030-'新一代人工智能'重大项目",
    "projectNumber": "2021ZD0111405",
    "description": "面向节假日城市旅游客流调控和智能服务的应用示范",
    "startTime": "2021年12月",
    "endTime": "2024年11月",
    "role": "主持",
    "category": "national",
    "status": "completed"
  },
  {
    "id": "2",
    "department": "国家科技部",
    "projectName": "国家重点研发计划'数据科学的若干基础理论'",
    "projectNumber": "2018YFB1003205",
    "description": "大数据权属保护理论与方法",
    "startTime": "2018-05",
    "endTime": "2021-04",
    "role": "主持",
    "category": "national",
    "status": "completed"
  },
  {
    "id": "3",
    "department": "国家文化和旅游部",
    "projectName": "科技创新工程项目",
    "projectNumber": "",
    "description": "基于多源数据的旅游决策技术研究",
    "startTime": "2021年6月",
    "endTime": "2023年6月",
    "role": "主持",
    "category": "national",
    "status": "completed"
  },
  {
    "id": "4",
    "department": "甘肃省委组织部",
    "projectName": "2023年省级重点人才项目",
    "projectNumber": "",
    "description": "大数据背景下数据安全及个人隐私保护研究",
    "startTime": "2023年1月",
    "endTime": "2024年6月",
    "role": "主持",
    "category": "provincial",
    "status": "completed"
  },
  {
    "id": "5",
    "department": "甘肃省委组织部",
    "projectName": "甘肃省重点人才资金项目",
    "projectNumber": "",
    "description": "大数据背景下个人隐私保护研究团队建设项目",
    "startTime": "2018年12月",
    "endTime": "2020年12月",
    "role": "主持",
    "category": "provincial",
    "status": "completed"
  },
  {
    "id": "6",
    "department": "甘肃省科技厅",
    "projectName": "重点研发计划项目",
    "projectNumber": "21YF5FA111",
    "description": "基于概率近似正确理论的旅游大数据分析研究与应用",
    "startTime": "2021年12月",
    "endTime": "2023年12月",
    "role": "主持",
    "category": "provincial",
    "status": "completed"
  },
  {
    "id": "7",
    "department": "甘肃省工业和信息化厅",
    "projectName": "级制造业高质量发展和数据信息产业重点项目",
    "projectNumber": "",
    "description": "面向'中心-偏远地区'优质资源均衡的5G+智慧教育创新试点",
    "startTime": "2022年1月",
    "endTime": "2025年1月",
    "role": "主持",
    "category": "provincial",
    "status": "ongoing"
  },
  {
    "id": "8",
    "department": "甘肃省教育厅",
    "projectName": "2023年甘肃省高校产业支撑计划项目",
    "projectNumber": "2023CYZC-01",
    "description": "基于'5G+智慧教育'促进高质量教育均衡发展的创新试点",
    "startTime": "2023年12月",
    "endTime": "2026年12月",
    "role": "参与",
    "category": "provincial",
    "status": "ongoing"
  },
  {
    "id": "9",
    "department": "兰州市科技局",
    "projectName": "兰州市人才创新创业项目",
    "projectNumber": "2021-RC-91",
    "description": "旅游大数据关键技术研究与应用",
    "startTime": "2021年11月",
    "endTime": "2024年5月",
    "role": "主持",
    "category": "provincial",
    "status": "completed"
  },
  {
    "id": "10",
    "department": "国家科学技术部",
    "projectName": "国家科技支撑计划",
    "projectNumber": "2013BAH40F01",
    "description": "丝绸之路文化主题创意关键技术研究",
    "startTime": "2013年01月",
    "endTime": "2015年12月",
    "role": "参与",
    "category": "national",
    "status": "completed"
  },
  {
    "id": "11",
    "department": "国家自然科学基金委员会",
    "projectName": "重大研究计划面上项目课题",
    "projectNumber": "90812001",
    "description": "网格标准基础研究",
    "startTime": "2011年01月",
    "endTime": "2012年06月",
    "role": "主持",
    "category": "national",
    "status": "completed"
  },
  {
    "id": "12",
    "department": "国家自然科学基金委员会",
    "projectName": "青年科学基金项目",
    "projectNumber": "61300230",
    "description": "裂痕故障块：一种面向二维或多维网格网络拓扑的容错自适应路由机制的研究与应用",
    "startTime": "2014年01月",
    "endTime": "2016年12月",
    "role": "主持",
    "category": "national",
    "status": "completed"
  },
  {
    "id": "13",
    "department": "国家自然科学基金委员会",
    "projectName": "面上项目",
    "projectNumber": "",
    "description": "风沙环境中基于机会通信的无线传感器网络组网问题的基础研究及示范性应用",
    "startTime": "2010年01月",
    "endTime": "2013年12月",
    "role": "参与",
    "category": "national",
    "status": "completed"
  },
  {
    "id": "14",
    "department": "国家自然科学基金委员会",
    "projectName": "面上项目",
    "projectNumber": "61370219",
    "description": "面向网络规划的演化程序开发理论与方法",
    "startTime": "2014年01月",
    "endTime": "2017年12月",
    "role": "参与",
    "category": "national",
    "status": "completed"
  },
  {
    "id": "15",
    "department": "国家人力资源社会保障部",
    "projectName": "2017年度中国留学回国创业启动支持计划优秀项目",
    "projectNumber": "",
    "description": "基于语音交互的智慧家庭系统",
    "startTime": "2017年1月",
    "endTime": "2019年1月",
    "role": "主持",
    "category": "national",
    "status": "completed"
  },
  {
    "id": "16",
    "department": "国家工业和信息化部",
    "projectName": "电子信息产业发展基金",
    "projectNumber": "",
    "description": "万维自主版式电子文件管理系统开发",
    "startTime": "2011年10月",
    "endTime": "2012年07月",
    "role": "主持",
    "category": "national",
    "status": "completed"
  },
  {
    "id": "17",
    "department": "甘肃省科学技术厅",
    "projectName": "重大专项",
    "projectNumber": "1102FKDA010",
    "description": "甘肃地质灾害防治区泥石流临灾监测预警关键技术研究与示范应用",
    "startTime": "2012年04月",
    "endTime": "2014年12月",
    "role": "参与",
    "category": "provincial",
    "status": "completed"
  },
  {
    "id": "18",
    "department": "甘肃省科学技术厅",
    "projectName": "自然科学基金",
    "projectNumber": "",
    "description": "基于机会通信的风沙监测无线传感器组网关键技术研究",
    "startTime": "2011-01",
    "endTime": "2013-12",
    "role": "主持",
    "category": "provincial",
    "status": "completed"
  },
  {
    "id": "19",
    "department": "企事业委托",
    "projectName": "清华大学",
    "projectNumber": "",
    "description": "数据同步系统测试",
    "startTime": "2013年10月",
    "endTime": "2014年06月",
    "role": "主持",
    "category": "enterprise",
    "status": "completed"
  },
  {
    "id": "20",
    "department": "企事业委托",
    "projectName": "清华大学",
    "projectNumber": "",
    "description": "TStor分布式文件系统的评测与建模",
    "startTime": "2017-09",
    "endTime": "2019-12",
    "role": "主持",
    "category": "enterprise",
    "status": "completed"
  },
  {
    "id": "21",
    "department": "企事业委托",
    "projectName": "科大讯飞",
    "projectNumber": "",
    "description": "语音及语言云计算关键技术研究",
    "startTime": "2013-01",
    "endTime": "2015-12",
    "role": "主持",
    "category": "enterprise",
    "status": "completed"
  }
])

// 项目分类
const activeCategory = ref('all')


const tabs = [
  {label: '全部项目', name: 'all'},
  {label: '国家级项目', name: 'national'},
  {label: '省部级项目', name: 'provincial'},
  {label: '企业合作', name: 'enterprise'},
  {label: '参与项目', name: 'collaboration'}
]


const filteredProjects = (category) => {
  if (category === 'all') {
    return newProjectsData.value
      .sort((a, b) => new Date(b.startTime.replace('年', '-').replace('月', '')) -
                       new Date(a.startTime.replace('年', '-').replace('月', '')))
  }

  if (category === 'collaboration') {
    return newProjectsData.value
      .filter(p => p.role === '参与')
      .sort((a, b) => new Date(b.startTime.replace('年', '-').replace('月', '')) -
                       new Date(a.startTime.replace('年', '-').replace('月', '')))
  }

  return newProjectsData.value
    .filter(p => p.category === category && p.role === '主持')
    .sort((a, b) => new Date(b.startTime.replace('年', '-').replace('月', '')) -
                     new Date(a.startTime.replace('年', '-').replace('月', '')))
}

const getStatusType = (status) => status === 'ongoing' ? 'success' : 'info'

// 新增菜单选择处理
const handleSelect = (key) => {
  activeCategory.value = key
}
</script>

<style lang="scss" scoped>
.projects-container {
  width: 80%;
  margin: 0 auto;
  max-width: 1200px;
  padding: 20px;

  .category-menu {
    border-bottom: none;
    display: flex;
    justify-content: center;
    margin-bottom: 20px;

    // 菜单项样式
    :deep(.el-menu-item) {
      font-size: 16px;
      height: 50px;
      line-height: 50px;
      margin: 0 15px;
      color: #606266;
      border-bottom: 2px solid transparent;

      &.is-active {
        color: #409eff;
        border-bottom-color: #409eff;
        background: transparent;
      }

      &:hover {
        background-color: #f5f7fa;
      }
    }
  }

  .project-list {
    display: grid;
    gap: 24px;
    padding: 16px 0;
  }

  .project-item {
    transition: transform 0.3s;
    min-height: 200px;
    padding: 8px;

    :deep(.el-card__body) {
      padding: 20px;
    }

    &:hover {
      transform: translateY(-2px);
    }
  }

  .project-header {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    margin-bottom: 20px;
  }

  .project-meta {
    display: flex;
    flex-direction: column;
    gap: 20px;
    color: #606266;
    font-size: 1.1em;
    margin-top: 24px;
  }

  .meta-row {
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
    width: 100%;
  }

  .meta-item {
    display: flex;
    align-items: center;
    gap: 8px;
    padding: 4px 0;
    flex: 1;
    min-width: 200px;
    
    .el-icon {
      color: #409EFF;
      flex-shrink: 0;
    }
  }

  .project-title {
    font-size: 18px;
    font-weight: 600;
    color: #303133;
    margin: 0;
    line-height: 1.4;
    flex: 1;
    margin-right: 15px;
  }

  .status-tag {
    font-size: 12px;
    padding: 0 10px;
    height: 24px;
    line-height: 24px;
    border-radius: 12px;
    flex-shrink: 0;
  }

  .project-description {
    line-height: 1.6;
    color: #606266;
    margin-top: 12px;
  }
}
</style>
