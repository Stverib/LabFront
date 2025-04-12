<template>
  <div class="publications-container">
    <div v-for="year in publicationYears" :key="year" class="year-group">
      <h3 class="year-title">{{ year }}年</h3>
      <el-card class="pub-table">
        <el-table :data="getPublicationsByYear(year)" style="width: 100%">
          <el-table-column>
            <template #default="{ row }">
              <div class="pub-item">
                <div class="pub-header">
                  <strong>{{ row.title }}</strong>
                  <el-tag v-if="row.isTop" type="danger" effect="dark" class="top-tag">
                    CCF-A
                  </el-tag>
                </div>
                <div class="authors">{{ row.authors.join('，') }}</div>
                <div class="venue-info">
                  <span class="venue">{{ row.venue }}</span>
                  <span class="date">{{ formatDate(row.date) }}</span>
                </div>
                <div class="action-buttons">
                  <el-button 
                    v-for="(link, key) in row.links" 
                    :key="key"
                    :href="link"
                    target="_blank"
                    size="mini"
                    :type="getButtonType(key)"
                    class="link-btn"
                  >
                    {{ getButtonLabel(key) }}
                  </el-button>
                </div>
              </div>
            </template>
          </el-table-column>
        </el-table>
      </el-card>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'

// 虚拟数据
const publications = ref([
  // 2024年（新增2条）
  {
    year: 2024,
    title: '基于深度强化学习的多智能体协作决策研究',
    authors: ['张云', '王浩然', '李雪峰'],
    venue: 'AAAI 2024 (CCF-A)',
    date: '2024-02-10',
    isTop: true,
    links: {
      pdf: '#',
      arxiv: '#'
    }
  },
  {
    year: 2024,
    title: '面向低光照场景的鲁棒图像增强算法',
    authors: ['陈志强', '张伟', '周晓琳'],
    venue: 'CVPR 2024 (CCF-A)',
    date: '2024-03-20',
    isTop: true,
    links: {
      pdf: '#',
      arxiv: '#'
    }
  },

  // 2023年（新增1条）
  {
    year: 2023,
    title: '联邦学习中隐私保护与模型效率的平衡研究',
    authors: ['李雪峰', '陈思雨', '王立华'],
    venue: 'ICML 2023 (CCF-A)',
    date: '2023-07-15',
    isTop: true,
    links: {
      pdf: '#',
      arxiv: '#'
    }
  },

  // 2022年（新增3条）
  {
    year: 2022,
    title: '基于元学习的少样本知识图谱补全方法',
    authors: ['李晓萌', '王立华', '张云'],
    venue: 'NeurIPS 2022 (CCF-A)',
    date: '2022-12-05',
    isTop: true,
    links: {
      pdf: '#',
      arxiv: '#'
    }
  },
  {
    year: 2022,
    title: '边缘计算环境下的实时视频分析框架',
    authors: ['赵敏', '王海涛', '周雨桐'],
    venue: 'IEEE INFOCOM 2022',
    date: '2022-05-18',
    isTop: false,
    links: {
      pdf: '#',
      arxiv: '#'
    }
  },
  {
    year: 2022,
    title: '多模态医学影像的病灶自动分割算法',
    authors: ['黄子轩', '刘心怡', '陈宇航'],
    venue: 'Medical Image Analysis (SCI Q1)',
    date: '2022-08-22',
    isTop: true,
    links: {
      pdf: '#',
      arxiv: '#'
    }
  },

  // 2021年（新增3条）
  {
    year: 2021,
    title: '基于对比学习的跨模态检索研究',
    authors: ['王立华', '张伟明', '李晓萌'],
    venue: 'ACL 2021 (CCF-A)',
    date: '2021-05-10',
    isTop: true,
    links: {
      pdf: '#',
      arxiv: '#'
    }
  },
  {
    year: 2021,
    title: '自动驾驶场景下的实时目标检测算法优化',
    authors: ['张云', '王浩然', '李雪峰'],
    venue: 'ICRA 2021',
    date: '2021-09-15',
    isTop: false,
    links: {
      pdf: '#',
      arxiv: '#'
    }
  },
  {
    year: 2021,
    title: '基于生成对抗网络的医学影像增强方法',
    authors: ['陈志强', '周晓琳', '黄子轩'],
    venue: 'MICCAI 2021',
    date: '2021-10-01',
    isTop: true,
    links: {
      pdf: '#',
      arxiv: '#'
    }
  },
  
  // 保留原有数据...
])

// 生成BibTeX
const generateBibtex = (pub) => {
  return `@inproceedings{${pub.authors[0].slice(0,2)}${pub.year},
  title     = {${pub.title}},
  author    = {${pub.authors.join(' and ')}},
  booktitle = {${pub.venue.split(' ')[0]}},
  year      = {${pub.year}},
  pages     = {1--15},
  url       = {${pub.links.pdf}}
}`
}

// 筛选逻辑
const activeYear = ref('2024')
const selectedVenue = ref(null)

const publicationYears = computed(() => [
  ...new Set(publications.value.map(p => p.year)).values()
].sort((a, b) => b - a))

const venues = computed(() => [
  ...new Set(publications.value
    .filter(p => p.year === parseInt(activeYear.value))
    .map(p => p.venue))
])

const filteredPublications = computed(() => 
  publications.value
    .filter(p => 
      p.year === parseInt(activeYear.value) &&
      (!selectedVenue.value || p.venue === selectedVenue.value)
    )
    .sort((a, b) => new Date(b.date) - new Date(a.date))
)

// 新增方法
const getPublicationsByYear = (year) => {
  return publications.value
    .filter(p => p.year === year)
    .sort((a, b) => new Date(b.date) - new Date(a.date))
}

const formatDate = (dateStr) => {
  const date = new Date(dateStr)
  return `${date.getFullYear()}年${date.getMonth() + 1}月`
}

const getButtonType = (key) => {
  const types = { pdf: 'success', arxiv: 'info', bibtex: 'warning' }
  return types[key] || 'primary'
}

const getButtonLabel = (key) => {
  const labels = { pdf: 'PDF', arxiv: 'arXiv', bibtex: 'BibTeX' }
  return labels[key] || '链接'
}
</script>

<style lang="scss" scoped>
.publications-container {
  width: 1200px;
  margin: 0 auto;
  padding: 2rem 1rem;

  .year-group {
    margin-bottom: 2.5rem;

    .year-title {
      color: #1a3a6d;
      font-size: 1.4rem;
      border-left: 4px solid #1a3a6d;
      padding-left: 1rem;
      margin: 1.5rem 0;
    }
  }

  .pub-table {
    box-shadow: none;
    border: 1px solid #ebeef5;

    ::v-deep .el-table__row {
      td {
        padding: 1.2rem;
        vertical-align: top;
        border-bottom: none;
      }
    }
  }

  .pub-item {
    .pub-header {
      display: flex;
      align-items: center;
      margin-bottom: 0.8rem;

      strong {
        font-size: 1.1rem;
        color: #303133;
        flex-grow: 1;
      }

      .top-tag {
        margin-left: 1rem;
        height: 24px;
        line-height: 24px;
      }
    }

    .authors {
      color: #606266;
      font-size: 0.95em;
      margin-bottom: 0.8rem;
    }

    .venue-info {
      color: #909399;
      font-size: 0.9em;
      margin-bottom: 1rem;

      .date {
        float: right;
      }
    }

    .action-buttons {
      margin-top: 1rem;
      .link-btn {
        margin-right: 10px;
        padding: 6px 12px;
        border-radius: 4px;
        
        &.el-button--success {
          background-color: #f0f9eb;
          border-color: #e1f3d8;
          color: #67c23a;
        }
        &.el-button--info {
          background-color: #f4f4f5;
          border-color: #e9e9eb;
          color: #909399;
        }
        &.el-button--warning {
          background-color: #fdf6ec;
          border-color: #faecd8;
          color: #e6a23c;
        }
      }
    }
  }
}
</style> 