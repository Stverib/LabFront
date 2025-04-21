<template>
  <div>
    <!-- 图片 -->
    <div>
      <img src="../assets/images/hezhao.jpg" alt="合照"
           style="width: 100%; height: 600px; object-fit: cover;"/>
    </div>

    <!-- 信息展示区 -->
    <div class="info-container">
      <el-row :gutter="20">
        <!-- 左侧列 -->
        <el-col :span="16">
          <el-card class="card-item">
            <template #header>
              <div class="custom-header">
                <span class="title">通知公告</span>
                <span class="sub-title">Notice</span>
                <el-button type="primary" link class="more-btn">更多</el-button>
              </div>
            </template>
            <div v-for="item in announcement" :key="item.id" class="announcement-item">
              <div class="date-box">{{ item.date }}</div>
              <div class="content">{{ truncateContent(item.content, 30) }}</div>
            </div>
          </el-card>

          <el-card class="card-item">
            <template #header>
              <div class="custom-header">
                <span class="title">学术活动</span>
                <span class="sub-title">Academic Activity</span>
                <el-button type="primary" link class="more-btn">更多</el-button>
              </div>
            </template>
            <div v-for="item in AcademicActivities" :key="item.id" class="activity-item">
              <div class="content">{{ truncateContent(item.content, 30) }}</div>
              <div class="date">{{ item.date }}</div>
            </div>
          </el-card>
        </el-col>

        <!-- 右侧列 -->
        <el-col :span="8">
          <el-card class="news-card">
            <template #header>
              <div class="custom-header">
                <span class="title">新闻动态</span>
                <span class="sub-title">News</span>
              </div>
            </template>
            <div v-for="item in reportData" :key="item.id" class="news-item">
              {{ truncateContent(item.content, 19) }}
            </div>
          </el-card>
        </el-col>
      </el-row>
    </div>

  </div>
</template>

<script setup>
import { ref } from 'vue'
// 响应式报道数据
const reportData = ref([
  {
    id: 1,
    media: '文博网',
    date: '2023.7.12',
    content: '着力推动文旅产业数字化建设加快发展',
    link: 'https://www.srdice.net/?m=home&c=View&a=index&aid=3259'
  },
  {
    id: 2,
    media: '澎湃新闻',
    date: '2023.6.27',
    content: '“缘起丝路”敦煌疏勒河古道徒步活动在香港启动',
    link: 'https://www.thepaper.cn/newsDetail_forward_23635925'
  },
  {
    id: 3,
    media: '中华人民共和国文化和旅游部',
    date: '2023.5.18',
    content: '甘肃省文化和旅游厅打造"一平台、一中心、三体系、三朵云"促进文旅与科技深度融合',
    link: 'https://www.mct.gov.cn/whzx/qgwhxxlb/gs/202305/t20230518_943844.htm'
  },
  {
    id: 4,
    media: '微游甘肃',
    date: '2023.5.13',
    content: '甘肃省文旅厅与中文在线座谈对接工作',
    link: 'https://mp.weixin.qq.com/s/UHSh1CK7li5nsjFYaJJ4Ow'
  },
  {
    id: 5,
    media: '中国甘肃网',
    date: '2023.4.28',
    content: '【甘快看】为甘肃文旅产业提质增效转型升级提供"数字动能"',
    link: 'http://gansu.gscn.com.cn/system/2023/04/28/012950817.shtml'
  },
  {
    id: 6,
    media: '', // 空值处理
    date: '2023.4.28',
    content: '为甘肃文旅产业高质量发展提供数字动能——省文旅厅与10个网络平台签订合作协议',
    link: 'https://www.gswbj.gov.cn/a/2023/04/28/17107.html'
  },
  {
    id: 7,
    media: '微游甘肃',
    date: '2023.3.17',
    content: '国家信息中心调研甘肃数字文旅建设工作',
    link: 'https://mp.weixin.qq.com/s/eFBcwY4TEVK5VqJ-x7HDaQ'
  },
  {
    id: 8,
    media: '', // 空值处理
    date: '2023.3.16',
    content: '甘肃省文旅厅与支付宝座谈对接工作',
    link: 'https://mp.weixin.qq.com/s/Rh-mna59Wsmnu3PuLoBjYQ'
  },
  {
    id: 9,
    media: '中华人民共和国文化和旅游部',
    date: '2023.3.1',
    content: '中国旅游研究院重大项目课题组到甘肃调研',
    link: 'https://www.mct.gov.cn/whzx/qgwhxxlb/gs/202303/t20230301_939431.htm'
  },
  {
    id: 10,
    media: '甘肃省文化和旅游厅',
    date: '2023.2.8',
    content: '甘肃省文旅厅与同程旅行座谈对接工作',
    link: 'https://mp.weixin.qq.com/s/pkyvhtGgEnEudOqtdVRVAA'
  }
])
const announcement = ref([
  {
    id: 1,
    date: "2023.10.16",
    content: "关于举办全国旅游标准化技术委员会业务工作培训班的通知",
  },
  {
    id: 2,
    date: "2023.5.18",
    content: "甘肃省实施标准化发展战略领导小组办公室关于报送“十四五”以来标准化工作总结和下一步工作计划的通知",
  },
  {
    id: 3,
    date: "2023.4.25",
    content: "全国旅游标准化技术委员会关于征集2023年旅游业国家标准、行业标准制修订计划项目的公告",
  },
  {
    id: 4,
    date: "2022.9.17",
    content: "关于同意引进王建州的通知",
  },
  {
    id: 5,
    date: "2022.4.12",
    content: "关于协助做好数字藏品专区建立工作的通知",
  },
  {
    id: 6,
    date: "2022.3.10",
    content: "关于召开甘肃省文化和旅游标准化技术委员会成立大会暨标委会第一次会议的通知",
  },
  {
    id: 7,
    date: "2021.8.2",
    content: "甘肃省市场监督管理局关于批准筹建甘肃省文化旅游标准化技术委员会的通知",
  },
])
const AcademicActivities = ref([
  {
    id: 1,
    date: "2024.10.18",
    content: "人工智能与算力技术重点实验室交流座谈",
  },
  {
    id: 2,
    date: "2023.10.27",
    content: "甘肃东数西算与人工智能产业发展研讨会暨燧弘探索算力运营合作研讨会",
  },
  {
    id: 3,
    date: "2023.10.24",
    content: "飞云大讲堂",
  },
  {
    id: 4,
    date: "2023.8.6",
    content: "算力技术大会",
  },
  {
    id: 5,
    date: "2023.8.7",
    content: "中国教育科研网格ChinaGrid二十周年研讨会",
  },
  {
    id: 6,
    date: "2023.2.27",
    content: "科技创新2030“新一代人工智能”重大项目课题座谈会",
  },
]);

const truncateContent = (text, maxLength) => {
  return text.length > maxLength ? text.substring(0, maxLength) + '...' : text;
};

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
.info-container {
  width: 100%;
  margin-top: 40px;


  .card-item {
    margin-bottom: 20px;
  }

  .custom-header {
    display: flex;
    align-items: center;

    .title {
      font-weight: bold;
      margin-right: 10px;
      font-size: x-large;
    }

    .sub-title {
      color: #909399;
      font-size: 0.8em;
    }

    .more-btn {
      margin-left: auto;
      padding: 0;
      width: 50px;
    }
  }

  .announcement-item {
    display: flex;
    align-items: center;
    padding: 12px 0;
    border-bottom: 1px solid #ebeef5;

    .date-box {
      background: #f0f2f5;
      color: #409eff;
      padding: 6px 12px;
      border-radius: 16px;
      margin-right: 15px;
      min-width: 80px;
      text-align: center;
    }
  }

  .activity-item {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 12px 0;
    border-bottom: 1px solid #ebeef5;

    .date {
      color: #909399;
      font-size: 0.9em;
    }
  }

  .news-card {
    .news-item {
      padding: 12px 0;
      border-bottom: 1px solid #ebeef5;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }
  }
}
</style>
