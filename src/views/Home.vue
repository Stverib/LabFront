<template>
  <div class="lab-website-container">
    <!-- 导航栏 -->
    <el-header class="main-header">
      <div class="header-content">
        <div class="brand">
          <img
            src="@/assets/logo.png"
            alt="实验室Logo"
            class="logo"
          />
          <div class="lab-titles">
            <h1 class="cn-name">智能计算实验室</h1>
            <h2 class="en-name">Intelligent Computing Laboratory</h2>
          </div>
        </div>
        <el-menu
          mode="horizontal"
          :default-active="activeMenu"
          router
          class="nav-menu"
        >
          <el-menu-item
            v-for="item in navItems"
            :key="item.path"
            :index="item.path"
            class="nav-item"
          >
            {{ item.title }}
          </el-menu-item>
        </el-menu>
      </div>
    </el-header>

    <!-- 主内容区 -->
    <el-main class="main-content">
      <router-view />
    </el-main>

    <!-- 页脚 -->
    <el-footer class="main-footer">
      <div class="footer-content">
        <div class="contact-info">
          <h3>联系我们</h3>
          <p>地址：兰州市城关区天水南路222号</p>
          <p>邮箱：luliu0701@outlook.com</p>
        </div>
        <div class="social-links">
          <el-icon><Link /></el-icon>
          <el-icon><ChatDotRound /></el-icon>
          <el-icon><DocumentCopy /></el-icon>
        </div>
      </div>
    </el-footer>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import {
  Link,
  ChatDotRound,
  DocumentCopy
} from '@element-plus/icons-vue'

const activeMenu = ref('/')
const navItems = ref([
  { path: '/', title: '首页' },
  { path: '/people', title: '研究团队' },
  { path: '/publications', title: '科研成果' },
  { path: '/projects', title: '科研项目' },
])
</script>

<style lang="scss" scoped>
.lab-website-container {
  min-height: 100vh;
  display: flex;
  flex-direction: column;

  .main-header {
    background: #1a3a6d !important;
    color: white;
    box-shadow: 0 2px 12px rgba(0, 0, 0, 0.1);
    padding: 0 !important;
    width: 100%;
    .header-content {
      width: 100%;
      padding: 0 2rem;
      display: flex;
      justify-content: space-between;
      align-items: center;

      .brand {
        display: flex;
        align-items: center;
        gap: 12px;
        .logo {
          width: 50px;
          height: 50px;
          margin-right: 15px;
        }
        .lab-titles {
          .cn-name {
            margin: 0;
            font-size: 1.8rem;
            font-weight: 500;
            line-height: 1.2;
          }
          .en-name {
            margin: 0;
            font-size: 0.9rem;
            font-weight: 300;
            letter-spacing: 1px;
          }
        }
      }

      .nav-menu {
        flex: 1;
        display: flex;
        justify-content: flex-end;
        border-bottom: none;
        margin-right: 300px;

        .nav-item {
          flex-shrink: 0;
          padding: 0 1.8rem !important;
          margin: 0 0.5rem;
          position: relative;
          transition: all 0.3s;

          &::after {
            content: '';
            position: absolute;
            bottom: 0;
            left: 50%;
            width: 0;
            height: 2px;
            background: rgba(255,255,255,0.8);
            transition: all 0.3s;
          }

          &:hover {
            background: transparent !important;
            &::after {
              width: 100%;
              left: 0;
            }
          }

          &.is-active {
            &::after {
              width: 100%;
              left: 0;
              background: #fff;
            }
          }
        }
      }
    }
  }

  .main-content {
    flex: 1;
    max-width: 1200px;
    margin: 0 auto;
    padding: 2rem 1rem;
  }

  .main-footer {
    background: #f8f9fa;
    .footer-content {
      max-width: 1200px;
      margin: 0 auto;
      display: flex;
      justify-content: space-between;
      align-items: center;

      .social-links {
        display: flex;
        gap: 1.5rem;
        .el-icon {
          cursor: pointer;
          transition: color 0.3s;
          &:hover {
            color: var(--el-color-primary);
          }
        }
      }
    }
  }
}
</style>
