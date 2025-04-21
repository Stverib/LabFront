<template>
  <div class="lab-website-container">
    <!-- 导航栏 -->
    <el-header class="main-header">
      <el-row
        class="header-content"
        type="flex"
        align="middle"
        justify="space-between"
      >
        <!-- 品牌LOGO区域 -->
        <el-col :span="4">
          <div class="brand">
            <img
              src="@/assets/images/LZU.png"
              alt="实验室Logo"
              class="logo"
            />
            <div class="lab-titles">
              <h1 class="cn-name">前沿技术研究实验室</h1>
              <h2 class="en-name">Advanced Technology Research Laboratory</h2>
            </div>
          </div>
        </el-col>
        <!-- 导航菜单 -->
        <el-col :span="20">
          <el-row
            tag="nav"
            class="nav-menu"
            type="flex"
            justify="end"
            :gutter="20"
          >
            <el-col
              v-for="item in navItems"
              :key="item.path"
              :span="2"
              class="nav-item-col"
            >
              <router-link
                :to="item.path"
                class="nav-item"
                :class="{ 'is-active': activeMenu === item.path }"
              >
                {{ item.title }}
              </router-link>
            </el-col>
          </el-row>
        </el-col>
      </el-row>
    </el-header>

    <!-- 主内容区 -->
    <el-main class="main-content">
<!--      <router-view/>-->
      <router-view v-slot="{ Component }">
        <transition name="fade" mode="out-in">
          <component :is="Component" />
        </transition>
      </router-view>
    </el-main>

    <!-- 页脚 -->
    <el-footer class="main-footer">
      <div class="footer-content">
        <div class="copyright-info">
          <p>电话：0931-8912778       地址：兰州市城关区天水南路222号       邮编：730000</p>
          <p>copyright@2015 兰州大学信息科学与工程学院 All rights reserved</p>
        </div>
      </div>
    </el-footer>
  </div>
</template>

<script setup>
import {ref} from 'vue'
import {useRoute} from 'vue-router'
// import {
//   Link,
//   ChatDotRound,
//   DocumentCopy
// } from '@element-plus/icons-vue'

const route = useRoute()
const activeMenu = ref(route.path)

const navItems = ref([
  {path: '/', title: '首页'},
  {path: '/#', title: '实验室介绍'},
  {path: '/#', title: '机构设置'},
  {path: '/people', title: '团队成员'},
  {path: '/projects', title: '项目研究'},
])

</script>

<style lang="scss" scoped>
.lab-website-container {
  min-height: 100vh;
  display: flex;
  flex-direction: column;

  .main-header {
    background: #ffffff !important;
    border-bottom: 1px solid #e4e7ed;
    color: white;
    box-shadow: 0 2px 12px rgba(0, 0, 0, 0.1);
    padding: 0 !important;
    width: 100%;
    height: auto !important;

    .header-content {
      width: auto;
      margin-top: 10px;
      margin-bottom: 10px;
      padding: 0 20px;
    }

    .brand {
      display: flex;
      align-items: center;
      gap: 12px;
      height: auto;

      .logo {
        width: 100px;
        height: 100px;
      }

      .lab-titles {
        .cn-name {
          margin-bottom: 10px;
          font-size: 1.4rem;
          white-space: nowrap;
          color: #000000 !important;
        }

        .en-name {
          margin: 0;
          font-size: 0.9rem;
          color: #000000 !important;
          overflow: hidden;
          text-overflow: ellipsis;
          width: auto;
          white-space: nowrap;
        }
      }
    }

    .nav-menu {
      gap: 20px;
      flex-wrap: nowrap;

      .nav-item-col {
        display: flex;
        flex: 0 0 auto;

        &:last-child {
          margin-right: 15px;
        }
      }

      .nav-item {
        color: #606266;
        text-decoration: none !important;
        font-size: 1rem;
        padding: 8px 12px;
        transition: all 0.3s;
        border-radius: 4px;
        white-space: nowrap;
        display: inline-block;

        &:hover,
        &.is-active {
          color: #1a3a6d;
          background: #f5f7fa;
        }
      }
    }

    .hamburger-btn {
      color: white !important;
      border-color: rgba(255, 255, 255, 0.5) !important;
      float: right;
    }

    .mobile-nav {
      background: rgba(0, 0, 0, 0.1);

      &-item {
        display: block;
        padding: 15px;
        color: rgba(255, 255, 255, 0.8);
        text-decoration: none;
        transition: all 0.3s;

        &:hover {
          background: rgba(255, 255, 255, 0.1);
          color: white;
        }

        &.router-link-exact-active {
          color: white;
          background: rgba(255, 255, 255, 0.1);
        }
      }
    }
  }

  .main-content {
    flex: 1;
    width: 100%;
    margin: 0 auto;

  }

  .main-footer {
    background: #2d3a4b !important;
    color: rgba(255, 255, 255, 0.8) !important;
    height: auto;
  }

  .copyright-info {
    max-width: 1200px;
    margin: 0 auto;
    text-align: center;
    line-height: 1.6;
    font-size: 14px;

    p:first-child {
      margin-bottom: 8px;
    }
  }

  .contact-info, .social-links {
    display: none;
  }
}

@media (max-width: 768px) {
  .brand {
    .cn-name {
      font-size: 1.2rem !important;
    }

    .en-name {
      display: none;
    }
  }
}

.info-container {
  max-width: 1200px;
  margin: 20px auto;
  padding: 0 20px;

  .card-item {
    margin-bottom: 20px;
  }

  .custom-header {
    display: flex;
    align-items: center;

    .title {
      font-weight: bold;
      margin-right: 10px;
    }

    .sub-title {
      color: #909399;
      font-size: 0.8em;
    }

    .more-btn {
      margin-left: auto;
      padding: 0;
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

.el-row {
  margin-bottom: 20px;
}

.el-row:last-child {
  margin-bottom: 0;
}

.el-col {
  border-radius: 4px;
}

.grid-content {
  border-radius: 4px;
  min-height: 36px;
}
</style>
