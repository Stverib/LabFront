<script setup>
import { leaders } from '@/data/LeaderInfo.js';
const getImageUrl=(url)=> {
  return new URL(url, import.meta.url).href;
}
</script>

<template>
  <div class="teacher-container">
    <h1 class="teacher-title">教师队伍</h1>

    <div class="teacher-grid">
      <el-card v-for="teacher in leaders" :key="teacher.name" class="teacher-card">
        <div class="teacher-card-content">
          <div class="teacher-image-container">
            <img :src=getImageUrl(teacher.picture) :alt="teacher.name" class="teacher-image">
          </div>

          <div class="teacher-info">
            <h2 class="teacher-name">{{ teacher.name }}</h2>
            <div class="teacher-title-text">{{ teacher.title }}</div>

            <div class="info-section" v-if="teacher.projects && teacher.projects !== '无'">
              <h3 class="info-title">项目经历</h3>
              <p class="info-content">{{ teacher.projects }}</p>
            </div>

            <div class="info-section" v-if="teacher.academicAchievement && teacher.academicAchievement !== '无'">
              <h3 class="info-title">学术成就</h3>
              <p class="info-content">{{ teacher.academicAchievement }}</p>
            </div>
          </div>
        </div>
      </el-card>
    </div>
  </div>
</template>

<style scoped>
.teacher-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 40px 20px;
}

.teacher-title {
  font-size: 36px;
  font-weight: bold;
  color: #1a3a6d;
  text-align: center;
  margin-bottom: 40px;
  text-decoration: underline;
  text-underline-offset: 10px;
  text-decoration-thickness: 2px;
}

.teacher-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(380px, 1fr));
  gap: 30px;
}

.teacher-card {
  border-radius: 8px;
  transition: all 0.3s ease;
  height: 100%;
}

.teacher-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 15px 30px rgba(0, 0, 0, 0.1);
}

.teacher-card-content {
  display: flex;
  flex-direction: column;
}

.teacher-image-container {
  width: 100%;
  padding-bottom: 20px;
  display: flex;
  justify-content: center;
}

.teacher-image {
  width: 180px;
  height: 220px;
  object-fit: cover;
  border-radius: 8px;
}

.teacher-info {
  display: flex;
  flex-direction: column;
  flex: 1;
}

.teacher-name {
  font-size: 24px;
  font-weight: bold;
  margin: 0 0 10px;
  color: #1a3a6d;
}

.teacher-title-text {
  font-size: 16px;
  color: #606266;
  margin-bottom: 20px;
}

.info-section {
  margin-bottom: 15px;
}

.info-title {
  font-size: 16px;
  font-weight: bold;
  color: #303133;
  margin: 0 0 5px;
  padding-bottom: 5px;
  border-bottom: 1px solid #ebeef5;
}

.info-content {
  font-size: 14px;
  line-height: 1.6;
  color: #606266;
  margin: 0;
}

@media (max-width: 768px) {
  .teacher-grid {
    grid-template-columns: 1fr;
  }

  .teacher-title {
    font-size: 28px;
  }

  .teacher-container {
    padding: 20px 10px;
  }
}
</style>
