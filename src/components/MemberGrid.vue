<template>
  <div class="member-grid">
    <el-card 
      v-for="member in members" 
      :key="member.name"
      class="member-card"
    >
      <div class="card-content">
        <img 
          :src="member.photo" 
          :alt="member.name"
          class="member-photo"
        />
        <div class="member-info">
          <h3 class="name">{{ member.name }}</h3>
          <p class="title">{{ member.title }}</p>
          <p class="research">{{ member.research }}</p>
          
          <el-link
            type="info"
            :underline="false"
            href="https://xxxy.lzu.edu.cn/shiziduiwu/jiaoshiduiwu/fujiaoshou/2020/0921/132781.html"
            class="homepage-link"
          >
            个人主页
          </el-link>
          

          <div v-if="member.current" class="alumni-info">
            <el-tag type="success" effect="plain">
              {{ member.current }}
            </el-tag>
          </div>
        </div>
      </div>
    </el-card>
  </div>
</template>

<script setup>
import { Link, Position } from '@element-plus/icons-vue'

defineProps({
  members: {
    type: Array,
    required: true
  }
})
</script>

<style lang="scss" scoped>
.member-grid {
  display: grid;
  gap: 1.5rem;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));

  .member-card {
    transition: transform 0.3s, box-shadow 0.3s;
    
    &:hover {
      transform: translateY(-5px);
      box-shadow: 0 4px 12px rgba(0,0,0,0.1);
    }

    .card-content {
      display: flex;
      gap: 1rem;
      padding: 1rem;

      .member-photo {
        width: 100px;
        height: 120px;
        object-fit: cover;
        border-radius: 4px;
      }

      .member-info {
        flex: 1;
        .name {
          margin: 0 0 0.5rem;
          color: var(--el-color-primary);
        }
        .title {
          margin: 0 0 0.5rem;
          font-size: 0.9em;
          color: #666;
        }
        .research {
          font-size: 0.9em;
          color: #888;
          line-height: 1.4;
        }

        .links {
          margin-top: 1rem;
          display: flex;
          gap: 0.8rem;
        }

        .alumni-info {
          margin-top: 1rem;
          padding-top: 0.5rem;
          border-top: 1px dashed #eee;
        }
      }
    }
  }
}

.homepage-link {
  color: #666 !important;
  font-size: 0.9em;
  transition: color 0.3s;
  margin-top: 10px;
  display: inline-block;

  &:hover {
    color: #444 !important;
  }
}
</style> 