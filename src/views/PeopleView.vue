<script setup>
import { ref, computed } from 'vue'
import MemberGrid from '@/components/MemberGrid.vue'

// 新增虚拟数据
const members = ref([
  // 常任导师（新增3条）
  {
    category: 'faculty',
    name: '王立华',
    title: '教授/博士生导师',
    photo: '@/assets/members/wang.jpg',
    research: '自然语言处理、知识图谱',
    year: 2015
  },
  {
    category: 'faculty',
    name: '李雪峰',
    title: '副教授',
    photo: '@/assets/members/li_xuefeng.jpg',
    research: '机器学习理论',
    year: 2018
  },
  {
    category: 'faculty',
    name: '张云',
    title: '副教授',
    photo: '@/assets/members/zhang_yun.jpg',
    research: '计算机视觉',
    year: 2019
  },
  {
    category: 'faculty',
    name: '陈志强',
    title: '讲师',
    photo: '@/assets/members/chen_zhiqiang.jpg',
    research: '数据挖掘',
    year: 2020
  },

  // 兼职导师（新增3条）
  {
    category: 'adjunct',
    name: '张伟明',
    title: '高级研究员',
    photo: '@/assets/members/zhang.jpg',
    research: '计算机视觉、多模态学习',
    company: '某科技公司研究院'
  },
  {
    category: 'adjunct',
    name: '王海涛',
    title: '首席科学家',
    photo: '@/assets/members/wang_haitao.jpg',
    research: '自动驾驶算法',
    company: '某汽车研究院'
  },
  {
    category: 'adjunct',
    name: '赵敏',
    title: '技术总监',
    photo: '@/assets/members/zhao_min.jpg',
    research: '工业视觉检测',
    company: '某制造企业'
  },
  {
    category: 'adjunct',
    name: '周晓琳',
    title: '资深工程师',
    photo: '@/assets/members/zhou_xiaolin.jpg',
    research: '云计算架构',
    company: '某云服务商'
  },

  // 在读学生（新增3条）
  {
    category: 'students',
    name: '李晓萌',
    title: '博士研究生',
    photo: '@/assets/members/li.jpg',
    research: '对话系统、情感分析',
    year: 2020,
    supervisor: '王立华'
  },
  {
    category: 'students',
    name: '王浩然',
    title: '硕士研究生',
    photo: '@/assets/members/wang_haoran.jpg',
    research: '图像分割算法',
    year: 2022,
    supervisor: '张云'
  },
  {
    category: 'students',
    name: '陈思雨',
    title: '博士研究生',
    photo: '@/assets/members/chen_siyu.jpg',
    research: '联邦学习',
    year: 2021,
    supervisor: '李雪峰'
  },
  {
    category: 'students',
    name: '张伟',
    title: '硕士研究生',
    photo: '@/assets/members/zhang_wei.jpg',
    research: '知识图谱构建',
    year: 2023,
    supervisor: '陈志强'
  },

  // 已毕业学生（新增3条）
  {
    category: 'alumni',
    name: '陈宇航',
    title: '博士（2022届）',
    photo: '@/assets/members/chen.jpg',
    research: '图神经网络应用',
    current: '某大学助理教授'
  },
  {
    category: 'alumni',
    name: '刘心怡',
    title: '硕士（2021届）',
    photo: '@/assets/members/liu_xinyi.jpg',
    research: '自然语言生成',
    current: '某科技公司算法工程师'
  },
  {
    category: 'alumni',
    name: '黄子轩',
    title: '博士（2020届）',
    photo: '@/assets/members/huang_zixuan.jpg',
    research: '视频理解',
    current: '某研究院高级研究员'
  },
  {
    category: 'alumni',
    name: '周雨桐',
    title: '硕士（2023届）',
    photo: '@/assets/members/zhou_yutong.jpg',
    research: '异常检测',
    current: '某金融机构数据分析师'
  }
])

// 分类筛选逻辑
const selectedCategories = ref([])
const categoryOptions = [
  { label: '常任导师', value: 'faculty' },
  { label: '兼职导师', value: 'adjunct' },
  { label: '在读学生', value: 'students' },
  { label: '已毕业学生', value: 'alumni' }
]

// 分组显示逻辑
const groupedMembers = computed(() => {
  const groups = {
    faculty: { title: '常任导师', members: [], show: true },
    adjunct: { title: '兼职导师', members: [], show: true },
    students: { title: '在读学生', members: [], show: true },
    alumni: { title: '已毕业学生', members: [], show: true }
  }

  // 筛选逻辑
  const showAll = selectedCategories.value.length === 0
  members.value.forEach(member => {
    const shouldShow = showAll || selectedCategories.value.includes(member.category)
    if (shouldShow) {
      groups[member.category].members.push(member)
      groups[member.category].show = true
    }
  })

  // 过滤空分组
  return Object.entries(groups)
    .filter(([_, group]) => group.members.length > 0)
    .map(([key, group]) => ({
      key,
      title: group.title,
      members: group.members,
      show: group.show
    }))
})
</script>

<template>
  <div class="people-container">
    <!-- 分类筛选 -->
    <div class="category-filter">
      <el-checkbox-group v-model="selectedCategories">
        <el-checkbox 
          v-for="option in categoryOptions" 
          :key="option.value"
          :label="option.value"
        >
          {{ option.label }}
        </el-checkbox>
      </el-checkbox-group>
    </div>

    <!-- 分组显示 -->
    <div 
      v-for="group in groupedMembers" 
      :key="group.key"
      class="member-group"
    >
      <h2 class="group-title">{{ group.title }}</h2>
      <member-grid :members="group.members" />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.people-container {
  max-width: none;
  width: 1020px;
  margin: 0;
  padding: 2rem 5%;
  box-sizing: border-box;

  .category-filter {
    margin-bottom: 2rem;
    padding: 1rem;
    background: #f8f9fa;
    border-radius: 4px;
    
    .el-checkbox {
      margin-right: 2rem;
    }
  }

  .member-group {
    margin: 3rem 0;

    .group-title {
      font-size: 1.5rem;
      font-weight: 600;
      color: #1a3a6d;
      border-left: 4px solid #1a3a6d;
      padding-left: 1rem;
      margin: 2rem 0;
    }
  }
}
</style>
