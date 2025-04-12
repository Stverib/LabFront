<template>
  <div class="projects-container">
    <el-tabs v-model="activeCategory" class="category-tabs">
      <el-tab-pane label="国家级项目" name="national">
        <project-list :projects="nationalProjects" />
      </el-tab-pane>
      <el-tab-pane label="企业合作项目" name="enterprise">
        <project-list :projects="enterpriseProjects" />
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import ProjectList from '@/components/ProjectList.vue'

// 模拟数据
const projects = ref([
  {
    category: 'national',
    name: '多模态认知计算基础理论研究',
    code: 'NSFC-62122001',
    type: '国家自然科学基金重点项目',
    period: '2023-2026',
    status: '进行中',
    description: '研究多模态信息融合的认知计算模型，探索跨模态语义理解新方法...',
    outcomes: [
      { type: 'paper', title: 'ACL 2024论文', link: '#' },
      { type: 'code', title: '项目开源代码', link: '#' }
    ],
    budget: '280万元'
  },
  {
    category: 'enterprise',
    name: '智能客服对话系统研发',
    partner: '某科技公司',
    period: '2022-2024',
    status: '已结题',
    description: '研发基于深度学习的多轮对话系统，提升客户服务效率...',
    outcomes: [
      { type: 'patent', title: '发明专利授权', link: '#' },
      { type: 'product', title: '系统演示地址', link: '#' }
    ],
    contribution: '累计创造经济效益1200万元'
  }
])

// 项目分类
const activeCategory = ref('national')

const nationalProjects = computed(() => 
  projects.value.filter(p => p.category === 'national')
)

const enterpriseProjects = computed(() => 
  projects.value.filter(p => p.category === 'enterprise')
)
</script>

<style lang="scss" scoped>
.projects-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem 0;

  .category-tabs {
    ::v-deep .el-tabs__nav-wrap::after {
      background-color: transparent;
    }
    
    ::v-deep .el-tabs__item {
      font-size: 1.1rem;
      padding: 0 2rem;
    }
  }
}
</style> 