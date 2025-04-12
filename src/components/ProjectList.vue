<template>
  <div class="project-list">
    <el-card
      v-for="project in projects"
      :key="project.name"
      class="project-card"
      :class="{ 'national': project.category === 'national' }"
    >
      <div class="card-header">
        <h3 class="title">{{ project.name }}</h3>
        <el-tag
          :type="project.status === '进行中' ? 'success' : 'info'"
          effect="plain"
        >
          {{ project.status }}
        </el-tag>
      </div>

      <div class="meta-info">
        <div v-if="project.category === 'national'" class="national-info">
          <el-icon><Trophy /></el-icon>
          <span>{{ project.type }}</span>
          <span>项目编号：{{ project.code }}</span>
          <span>资助金额：{{ project.budget }}</span>
        </div>

        <div v-else class="enterprise-info">
          <el-icon><Partnership /></el-icon>
          <span>合作企业：{{ project.partner }}</span>
          <span>经济效益：{{ project.contribution }}</span>
        </div>
      </div>

      <div class="time-period">
        <el-icon><Clock /></el-icon>
        <span>{{ project.period }}</span>
      </div>

      <p class="description">{{ project.description }}</p>

      <div class="outcomes">
        <div class="outcome-title">相关成果：</div>
        <div class="outcome-links">
          <el-link
            v-for="(outcome, index) in project.outcomes"
            :key="index"
            :href="outcome.link"
            target="_blank"
            :type="getLinkType(outcome.type)"
            :icon="getLinkIcon(outcome.type)"
            class="outcome-link"
          >
            {{ outcome.title }}
          </el-link>
        </div>
      </div>
    </el-card>
  </div>
</template>

<script setup>
import { Trophy, Clock, Link, Document, Star } from '@element-plus/icons-vue'

defineProps({
  projects: {
    type: Array,
    required: true
  }
})

const getLinkType = (type) => {
  const types = {
    paper: 'primary',
    code: 'success',
    patent: 'warning',
    product: 'danger'
  }
  return types[type] || 'info'
}

const getLinkIcon = (type) => {
  const icons = {
    paper: Document,
    code: Link,
    patent: Star,

  }
  return icons[type]
}
</script>

<style lang="scss" scoped>
.project-list {
  display: grid;
  gap: 1.5rem;
  padding: 1rem 0;

  .project-card {
    &.national {
      border-left: 4px solid var(--el-color-primary);
    }

    .card-header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 1rem;

      .title {
        margin: 0;
        font-size: 1.1rem;
        color: var(--el-color-primary);
      }
    }

    .meta-info {
      display: flex;
      align-items: center;
      gap: 1.5rem;
      color: #666;
      font-size: 0.9em;
      margin-bottom: 0.8rem;

      .el-icon {
        margin-right: 0.5rem;
      }
    }

    .time-period {
      color: #888;
      font-size: 0.85em;
      margin-bottom: 0.8rem;

      .el-icon {
        margin-right: 0.5rem;
      }
    }

    .description {
      color: #444;
      line-height: 1.6;
      margin-bottom: 1rem;
    }

    .outcomes {
      border-top: 1px dashed #eee;
      padding-top: 1rem;

      .outcome-title {
        color: #666;
        margin-bottom: 0.5rem;
      }

      .outcome-links {
        display: flex;
        flex-wrap: wrap;
        gap: 1rem;

        .outcome-link {
          display: inline-flex;
          align-items: center;
        }
      }
    }
  }
}
</style>
