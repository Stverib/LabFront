<template>
  <div class="lab-website-container">
    <!-- 导航栏 -->
    <el-affix :offset="0">
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
            <el-menu
              :default-active="activeMenu"
              mode="horizontal"
              :router="true"
              class="nav-menu right-aligned-menu"
              @select="handleSelect"
            >
              <!-- 首页 -->
              <el-menu-item index="/">首页</el-menu-item>

              <!-- 实验室介绍（带子菜单） -->
              <el-sub-menu index="lab-intro">
                <template #title>实验室介绍</template>

                <el-sub-menu index="lab-structure">
                  <template #title>实验室结构</template>
                  <el-menu-item index="/lab-structure/cultural-tourism">文旅重点实验室</el-menu-item>
                  <el-menu-item index="/lab-structure/ai-computing">人工智能与算力技术重点实验室</el-menu-item>
                </el-sub-menu>

                <el-menu-item index="/committee">标委会</el-menu-item>
                <el-menu-item index="/ai-club">AI探索者联盟社团</el-menu-item>
                <el-menu-item index="/academic-committee">学术委员会</el-menu-item>
                <el-menu-item index="/leadership">现任领导</el-menu-item>
                <el-menu-item index="/contact">联系我们</el-menu-item>
              </el-sub-menu>

              <!-- 其他菜单项 -->
              <el-menu-item index="/org-structure">机构设置</el-menu-item>
              <el-menu-item index="/people">团队成员</el-menu-item>
              <el-menu-item index="/projects">项目研究</el-menu-item>
            </el-menu>
          </el-col>
        </el-row>
      </el-header>
    </el-affix>


    <!-- 主内容区 -->
    <el-main class="main-content">
      <!--      <router-view/>-->
      <router-view v-slot="{ Component }">
        <transition name="fade" mode="out-in">
          <component :is="Component"/>
        </transition>
      </router-view>
    </el-main>

    <!-- 页脚 -->
    <el-footer class="main-footer">
      <div class="footer-content">
        <div class="copyright-info">
          <p>电话：0931-8912778 地址：兰州市城关区天水南路222号 邮编：730000</p>
          <p>copyright@2025 兰州大学信息科学与工程学院 All rights reserved</p>
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

/*const navItems = ref([
  {path: '/', title: '首页'},
  {path: '/#', title: '实验室介绍'},
  {path: '/#', title: '机构设置'},
  {path: '/people', title: '团队成员'},
  {path: '/projects', title: '项目研究'},
])*/

const handleSelect = (index) => {
  activeMenu.value = index
}

</script>

<style lang="scss" scoped>
.lab-website-container {
  min-height: 100vh;
  display: flex;
  width: 100%;
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
      margin-top: 0;
      margin-bottom: 10px;
      padding: 0 20px;
    }

    .brand {
      display: flex;
      align-items: center;
      gap: 12px;
      height: auto;
      width: 100%;
      justify-content: flex-start;

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
      border-bottom: none !important;
      height: 60px;
      background: transparent !important;

      :deep(.el-sub-menu__title),
      :deep(.el-menu-item) {
        height: 50px;
        line-height: 50px;
        color: #606266;
        font-size: 1rem;
        transition: all 0.3s;

        &:hover {
          color: #1a3a6d !important;
          background: #f5f7fa !important;
        }
      }

      :deep(.is-active) {
        color: #1a3a6d !important;
        border-bottom: 2px solid #1a3a6d;
      }

      :deep(.el-sub-menu) {
        &.is-active .el-sub-menu__title {
          color: #1a3a6d !important;
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

/* 新增右对齐样式 */
.right-aligned-menu {
  display: flex;
  justify-content: flex-end;

  :deep(.el-sub-menu) {
    .el-sub-menu__title {
      padding: 0 20px;
    }

    .el-menu {
      left: auto !important;
      right: 0;
    }
  }

  :deep(.el-menu-item) {
    padding: 0 20px;
  }

  :deep(.el-menu--horizontal) {
    border-bottom: none;
  }
}

/* 调整子菜单箭头位置 */
:deep(.el-sub-menu__title) {
  padding-right: 30px !important;
  position: relative;
}

:deep(.el-sub-menu [class^=el-icon]) {
  position: absolute;
  right: 10px;
  top: 50%;
  transform: translateY(-50%);
  margin-top: 0 !important;
}

/* 调整菜单项间距 */
:deep(.el-menu-item) {
  padding: 0 25px !important;
}

:deep(.el-sub-menu) {
  margin-left: 10px;
}
</style>
