<template>
  <div class="publications-container">
    <el-tabs v-model="activeYear" class="year-tabs">
      <el-tab-pane 
        v-for="year in publicationYears" 
        :key="year"
        :label="`${year}年`"
        :name="year.toString()"
      >
        <div class="filter-bar">
          <el-select
            v-model="selectedVenue"
            placeholder="筛选会议/期刊"
            clearable
          >
            <el-option
              v-for="venue in venues"
              :key="venue"
              :label="venue"
              :value="venue"
            />
          </el-select>
        </div>
        
        <div class="publication-list">
          <el-card 
            v-for="(pub, index) in filteredPublications" 
            :key="index"
            class="publication-card"
            :class="{ 'highlight': pub.isTop }"
          >
            <div class="pub-header">
              <h3 class="title">{{ pub.title }}</h3>
              <el-tag v-if="pub.isTop" type="danger" effect="dark" class="top-tag">
                CCF-A
              </el-tag>
            </div>
            
            <div class="authors">{{ pub.authors.join(', ') }}</div>
            
            <div class="venue-info">
              <span class="venue">{{ pub.venue }}</span>
              <span class="date">{{ pub.date }}</span>
            </div>

            <div class="actions">
              <el-link 
                :href="pub.links.pdf" 
                target="_blank"
                type="primary"
                :icon="Document"
              >
                PDF
              </el-link>
              <el-link 
                :href="pub.links.arxiv" 
                target="_blank"
                type="info"
                :icon="Link"
                class="ml-2"
              >
                arXiv
              </el-link>
              <el-popover
                placement="right"
                title="BibTeX 引用"
                :width="600"
                trigger="click"
              >
                <template #reference>
                  <el-link 
                    type="warning" 
                    :icon="DocumentCopy"
                    class="ml-2"
                  >
                    BibTeX
                  </el-link>
                </template>
                <pre class="bibtex">{{ generateBibtex(pub) }}</pre>
              </el-popover>
            </div>
          </el-card>
        </div>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import { Document, Link, DocumentCopy } from '@element-plus/icons-vue'

// 虚拟数据
const publications = ref([
  {
    year: 2024,
    title: '基于多模态学习的跨语言语义理解研究',
    authors: ['王立华', '李晓萌', '张伟明'],
    venue: 'ACL 2024 (CCF-A)',
    date: '2024-05-15',
    isTop: true,
    links: {
      pdf: '#',
      arxiv: '#'
    }
  },
  {
    year: 2023,
    title: '面向开放域对话系统的动态知识图谱构建方法',
    authors: ['李晓萌', '王立华'],
    venue: 'IEEE Transactions on KDE (SCI Q1)',
    date: '2023-11-20',
    isTop: true,
    links: {
      pdf: '#',
      arxiv: '#'
    }
  },
  {
    year: 2023,
    title: '基于图神经网络的社交媒体情感分析',
    authors: ['陈宇航', '王立华'],
    venue: 'ICANN 2023',
    date: '2023-09-10',
    isTop: false,
    links: {
      pdf: '#',
      arxiv: '#'
    }
  }
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
</script>

<style lang="scss" scoped>
.publications-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem 0;

  .year-tabs {
    ::v-deep .el-tabs__nav-wrap::after {
      background-color: transparent;
    }
    
    ::v-deep .el-tabs__item {
      font-size: 1.1rem;
      padding: 0 2rem;
    }
  }

  .filter-bar {
    margin: 1rem 0 2rem;
    display: flex;
    justify-content: flex-end;
  }

  .publication-list {
    display: grid;
    gap: 1.5rem;

    .publication-card {
      transition: all 0.3s;
      border-left: 4px solid transparent;

      &.highlight {
        border-left-color: var(--el-color-danger);
        background: rgba(245, 108, 108, 0.05);
      }

      .pub-header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 0.8rem;

        .title {
          margin: 0;
          font-size: 1.1rem;
          color: var(--el-color-primary);
        }

        .top-tag {
          margin-left: 1rem;
        }
      }

      .authors {
        color: #666;
        font-size: 0.9em;
        margin-bottom: 0.5rem;
      }

      .venue-info {
        display: flex;
        justify-content: space-between;
        color: #888;
        font-size: 0.85em;
        margin-bottom: 1rem;

        .venue {
          font-style: italic;
        }
      }

      .actions {
        border-top: 1px dashed #eee;
        padding-top: 0.8rem;
      }
    }
  }
}

.bibtex {
  font-family: monospace;
  font-size: 0.8em;
  white-space: pre-wrap;
  margin: 0;
  padding: 1rem;
  background: #f8f9fa;
  border-radius: 4px;
}
</style> 