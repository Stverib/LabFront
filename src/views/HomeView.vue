<script setup>
import { ref, onMounted } from 'vue'

// 响应式数据
const hoverIndex = ref(-1)
const currentSlide = ref(0)
// eslint-disable-next-line no-unused-vars
let autoPlayTimer = null

// 研究方向数据
const researchAreas = ref([
  {
    icon: 'fas fa-microchip',
    title: '算力优化',
    keywords: ['分布式计算', '硬件加速', '能效比优化']
  },
  {
    icon: 'fas fa-network-wired',
    title: '大模型与AGI',
    keywords: ['多模态预训练', '推理加速', '安全对齐']
  },
  // 其他研究方向数据...
])

// 成果数据
const achievements = ref([
  {
    title: '基于稀疏注意力的大模型训练优化框架',
    conference: 'NeurIPS 2024 (CCF-A)',
    highlight: '训练效率提升40%，开源代码GitHub Star超1k',
    pdf: '#',
    code: '#'
  },
  // 其他成果数据...
])

// 快速入口
const quickLinks = ref([
  { icon: 'fas fa-file-alt', label: '论文库', link: '#' },
  { icon: 'fas fa-users', label: '团队成员', link: '#' },
  { icon: 'fas fa-project-diagram', label: '在研项目', link: '#' },
  { icon: 'fas fa-newspaper', label: '新闻动态', link: '#' }
])

// 自动轮播逻辑
onMounted(() => {
  autoPlayTimer = setInterval(() => {
    currentSlide.value = (currentSlide.value + 1) % achievements.value.length
  }, 5000)
})

// const navItems = ref([
//   { label: '成员', path: '/members' },
//   { label: '成果', path: '/achievements' },
//   { label: '项目', path: '/projects' }
// ])
</script>

<template>
  <header class='app-header'>
    <div class="container">
      <h1 class="logo">
        <RouterLink to="/">设备租赁系统</RouterLink>
      </h1>
      <!-- 导航区域 -->
      <ul class="app-header-nav ">
        <li class="home">
          <RouterLink to="/">首页</RouterLink>
        </li>
        <li style="width: auto">
          <RouterLink active-class="active" :to="`/people`">成员</RouterLink>
        </li>
        <li style="width: auto">
          <RouterLink active-class="active" :to="`/projects`">项目</RouterLink>
        </li>
        <li style="width: auto">
          <RouterLink active-class="active" :to="`/publications`">成果</RouterLink>
        </li>
      </ul>
    </div>
  </header>


  <!-- 研究方向 -->
  <section class="research-section">
    <h2 class="section-title">研究方向</h2>
    <div class="research-grid">
      <div
        v-for="(item, index) in researchAreas"
        :key="index"
        class="research-card"
        @mouseenter="hoverIndex = index"
        @mouseleave="hoverIndex = -1"
      >
        <i :class="item.icon" class="research-icon"></i>
        <h3>{{ item.title }}</h3>
        <transition name="fade">
          <div v-show="hoverIndex === index" class="keywords">
            <span v-for="(kw, i) in item.keywords" :key="i">{{ kw }}</span>
          </div>
        </transition>
      </div>
    </div>
  </section>

  <!-- 成果轮播 -->
  <section class="achievements-section">
    <h2 class="section-title">亮点成果</h2>
    <div class="carousel-container">
      <div
        v-for="(item, index) in achievements"
        :key="index"
        class="achievement-card"
        :style="{ transform: `translateX(${-currentSlide * 100}%)` }"
      >
        <div class="achievement-content">
          <h3>{{ item.title }}</h3>
          <p class="conference">{{ item.conference }}</p>
          <p class="highlight">{{ item.highlight }}</p>
          <div class="links">
            <a :href="item.pdf" target="_blank">
              <i class="fas fa-file-pdf"></i> PDF
            </a>
            <a v-if="item.code" :href="item.code" target="_blank">
              <i class="fab fa-github"></i> Code
            </a>
          </div>
        </div>
      </div>
    </div>
    <div class="carousel-dots">
      <span
        v-for="n in achievements.length"
        :key="n"
        :class="{ active: currentSlide === n - 1 }"
        @click="currentSlide = n - 1"
      ></span>
    </div>
  </section>

  <!-- 快速入口 -->
  <nav class="quick-access">
    <a
      v-for="(item, index) in quickLinks"
      :key="index"
      :href="item.link"
      class="access-btn"
    >
      <i :class="item.icon"></i>
      <span>{{ item.label }}</span>
    </a>
  </nav>

  <!-- 底部信息 -->
  <footer class="footer">
    <div class="contact-info">
      <p>地址：北京市海淀区中关村科学城</p>
      <p>电话：+86-10-XXXXXXX | 邮箱：contact@icslab.org</p>
    </div>
    <div class="social-links">
      <a href="#" class="social-icon"><i class="fab fa-github"></i></a>
      <a href="#" class="social-icon"><i class="fab fa-twitter"></i></a>
      <a href="#" class="social-icon"><i class="fab fa-weixin"></i></a>
    </div>
  </footer>
</template>



<style scoped>
/* 基础样式 */
.header {
  background: #2c3e50;
  color: white;
  padding: 2rem;
  text-align: center;
}

.logo-container {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  margin-bottom: 1rem;
}

.logo {
  width: 60px;
  height: 60px;
}

.lab-name {
  font-size: 2rem;
  margin: 0;
}

.lab-name-en {
  font-size: 1.2rem;
  margin: 0;
  opacity: 0.8;
}

.lab-description {
  max-width: 800px;
  margin: 1rem auto;
  font-size: 1.1rem;
}

/* 研究方向网格 */
.research-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
  max-width: 1200px;
  margin: 2rem auto;
  padding: 0 1rem;
}

.research-card {
  background: white;
  border-radius: 10px;
  padding: 2rem;
  box-shadow: 0 4px 6px rgba(0,0,0,0.1);
  transition: transform 0.3s ease;
  text-align: center;
}

.research-card:hover {
  transform: translateY(-5px);
}

.research-icon {
  font-size: 2.5rem;
  margin-bottom: 1rem;
  color: #3498db;
}

.keywords {
  margin-top: 1rem;
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  justify-content: center;
}

.keywords span {
  background: #f0f0f0;
  padding: 0.3rem 0.8rem;
  border-radius: 15px;
  font-size: 0.9rem;
}

/* 轮播样式 */
.carousel-container {
  display: flex;
  overflow: hidden;
  width: 300%;
  transition: transform 0.5s ease;
}

.achievement-card {
  flex: 1 0 33.333%;
  padding: 1rem;
  min-height: 300px;
}

.carousel-dots {
  display: flex;
  justify-content: center;
  gap: 0.8rem;
  margin-top: 1rem;
}

.carousel-dots span {
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background: #ddd;
  cursor: pointer;
  transition: background 0.3s ease;
}

.carousel-dots span.active {
  background: #3498db;
}

/* 快速入口 */
.quick-access {
  position: fixed;
  right: 2rem;
  bottom: 2rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  z-index: 100;
}

.access-btn {
  background: #3498db;
  color: white;
  padding: 1rem 2rem;
  border-radius: 30px;
  display: flex;
  align-items: center;
  gap: 0.8rem;
  text-decoration: none;
  box-shadow: 0 4px 6px rgba(0,0,0,0.1);
  transition: transform 0.2s ease;
}

.access-btn:hover {
  transform: translateY(-2px);
}

/* 响应式设计 */
@media (max-width: 768px) {
  .research-grid {
    grid-template-columns: repeat(2, 1fr);
  }

  .quick-access {
    bottom: 1rem;
    right: 1rem;
  }
}

.app-header {
  background: #fff;

  .container {
    display: flex;
    align-items: center;
  }

  .logo {
    width: 200px;
    a {
      display: block;
      height: 132px;
      width: 100%;
      text-indent: -9999px;
      background: #8bd3dd no-repeat center 18px / contain;
    }
  }

  .app-header-nav {
    width: 820px;
    display: flex;
    padding-left: 40px;
    position: relative;
    z-index: 998;

    li {
      margin-right: 40px;
      width: 38px;
      text-align: center;

      a {
        font-size: 16px;
        line-height: 32px;
        height: 32px;
        display: inline-block;

        &:hover {
          color: #27ba9b;
          border-bottom: 1px solid #27ba9b;
        }
      }

      .active {
        color: #27ba9b;
        border-bottom: 1px solid #27ba9b;
      }
    }
  }

  .search {
    width: 170px;
    height: 32px;
    position: relative;
    border-bottom: 1px solid #e7e7e7;
    line-height: 32px;

    .icon-search {
      font-size: 18px;
      margin-left: 5px;
    }

    input {
      width: 140px;
      padding-left: 5px;
      color: #666;
    }
  }

  .cart {
    width: 50px;

    .curr {
      height: 32px;
      line-height: 32px;
      text-align: center;
      position: relative;
      display: block;

      .icon-cart {
        font-size: 22px;
      }

      em {
        font-style: normal;
        position: absolute;
        right: 0;
        top: 0;
        padding: 1px 6px;
        line-height: 1;
        background: #e26237;
        color: #fff;
        font-size: 12px;
        border-radius: 10px;
        font-family: Arial,fangsong;
      }
    }
  }
}
</style>
