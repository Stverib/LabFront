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
              <el-link
                type="default"
                :href="`/announcement/${item.id}`"
                :to="`/announcement/${item.id}`"
                class="content">
                {{ truncateContent(item.title, 50) }}
              </el-link>
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
import {announcements} from "@/data/announcements.js";
import {reports} from "@/data/reports.js";
import {activities} from "@/data/activities.js";
// 响应式报道数据
const reportData = ref(reports)
const announcement = ref(announcements)
const AcademicActivities = ref(activities);

const truncateContent = (text, maxLength) => {
  return text.length > maxLength ? text.substring(0, maxLength) + '...' : text;
};

// 新增研究成果数据
/*const achievements = ref([
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
])*/
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
