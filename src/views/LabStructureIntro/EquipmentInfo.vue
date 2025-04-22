<template>
  <div class="lab-detail-container">

    <!-- 标题行 -->
    <el-row justify="space-between" align="middle" class="title-row">
      <el-col :span="12">
        <h1 class="main-title">仪器</h1>
      </el-col>
      <el-col :span="12" class="breadcrumb-col">
        <el-breadcrumb separator=">>" class="breadcrumb">
          <el-breadcrumb-item>当前位置</el-breadcrumb-item>
          <el-breadcrumb-item :to="{ path: '/' }">前沿技术研究实验室</el-breadcrumb-item>
          <el-breadcrumb-item>机构设置</el-breadcrumb-item>
          <el-breadcrumb-item :to="{ path: '/org-structure/platform-equipment' }">平台仪器
          </el-breadcrumb-item>
          <el-breadcrumb-item>仪器</el-breadcrumb-item>
        </el-breadcrumb>
      </el-col>
    </el-row>

    <!-- 蓝色分割线 -->
    <hr class="divider">

    <!-- 仪器信息内容 -->
    <div class="content-wrapper">
      <!-- 研发场地部分 -->
      <h2 class="section-title">研发场地</h2>

      <!-- 场地图片 -->
      <div class="images-container">
        <div class="image-box">
          <img src="@/assets/images/PlaceOne.png" alt="研发场地一" class="place-image">
        </div>
        <div class="image-box">
          <img src="@/assets/images/PlaceTwo.png" alt="研发场地二" class="place-image">
        </div>
      </div>


      <!-- 用房情况图片 -->
      <div class="house-condition-container">
        <img src="@/assets/images/HouseCondition.png" alt="用房情况" class="house-condition-image">
      </div>

      <!-- 研发设备部分 -->
      <h2 class="section-title mt-6">研发设备</h2>

      <!-- 计算节点设备表格 -->
      <h3 class="section-subtitle">计算节点设备</h3>
      <el-table :data="devices1" stripe class="devices-table" :show-header="true">
        <el-table-column prop="name" label="设备名称" align="center" min-width="150"/>
        <el-table-column prop="specs" label="规格型号" align="center" min-width="350"/>
        <el-table-column prop="count" label="数量" align="center" min-width="80"/>
        <el-table-column prop="technicalSpecifications" label="技术指标" align="center"
                         min-width="250"/>
      </el-table>

      <!-- 其他设备表格 -->
      <h3 class="section-subtitle">其他设备</h3>
      <el-table :data="devices2" stripe class="devices-table" :show-header="true">
        <el-table-column prop="name" label="设备名称" align="center" min-width="150"/>
        <el-table-column prop="spec" label="规格型号" align="center" min-width="150"/>
        <el-table-column prop="technicalSpecifications" label="主要技术指标" align="center"
                         min-width="350"/>
      </el-table>
    </div>

  </div>

</template>

<script setup>

import {ref} from "vue";

const devices1 = ref([ //字段分别为设备名称，规格型号，数量，技术指标
  {
    "name": "CPU计算节点1",
    "specs": "XH321 V5(CPU: 2*Intel Xeon Gold 6248, 内存: 192GB(12*16GB), 硬盘: 1*240G SSD, 网络: GE+10GE+100Gb EDR)",
    "count": 232,
    "technicalSpecifications": "处理MPI并行度较好的应用，例如WRF、VASP等"
  },
  {
    "name": "CPU计算节点2",
    "specs": "2488HV5(CPU: 4*Intel Xeon Gold 6248, 内存: 768GB(24*32GB), 硬盘: 3*480G SSD, 网络: GE+10GE+100Gb EDR)",
    "count": 4,
    "technicalSpecifications": "处理OpenMP并行的应用软件，以及并行度较差的应用，例如Gaussian"
  },
  {
    "name": "CPU计算节点3",
    "specs": "2488HV5(CPU: 8*Intel Xeon Gold 8260, 内存: 3072GB(96*32GB), 硬盘: 3*480G SSD, 网络: 1*10GE, 1*100Gb OPA)",
    "count": 2,
    "technicalSpecifications": "处理大内存的应用，例如隐式有限元分析，自研的多线程应用软件、基因组装"
  },
  {
    "name": "GPU计算节点1",
    "specs": "G560 V5(CPU: 2*Intel Xeon Gold 6248, 内存: 512GB(16*32GB), 硬盘: 2*9600G SSD, GPU: 8*Nvlink V100-32GB, 网络: GE+10GE+100Gb EDR)",
    "count": 2,
    "technicalSpecifications": "人工智能训练"
  },
  {
    "name": "GPU计算节点2",
    "specs": "G530 V5(CPU: 2*Intel Xeon Gold 6248, 内存: 512GB(12*32GB), 硬盘: 2*9600G SSD, GPU: 4*PCE-E V100-32GB, 网络: GE+10GE+100Gb EDR)",
    "count": 8,
    "technicalSpecifications": "人工智能训练、基于CUDA的科学计算，例如Fluent、VASP等部分求解器的优化"
  },
  {
    "name": "ARM计算节点",
    "specs": "TaiShan 2280V2(CPU: 2*Kunpeng920, 内存: 512GB(16*32GB), 硬盘: 1*240G SSD, 网络: GE+10GE+100Gb EDR)",
    "count": 20,
    "technicalSpecifications": "处理内存带宽密集型应用，例如WRF、OpenFoam等"
  }
]);

const devices2 = ref([ //字段分别为：设备型号、规格型号、主要技术指标
  {
    "name": "仿人智能机器人",
    "spec": "H25",
    "technicalSpecifications": "58cm高，具有25个自由度智能双仿人机器人，全身配备一百多个传感器"
  },
  {
    "name": "机器人",
    "spec": "NAO-H25",
    "technicalSpecifications": "双动型伺服机构智能机器人"
  },
  {
    "name": "日志事件管理中心",
    "spec": "华为 Logcenter",
    "technicalSpecifications": "融合报表管理、日志审计、集中告警管理等功能，具有高集成度、高可靠性等特点"
  },
  {
    "name": "超窄线宽激光器",
    "spec": "DL -BF9 -CLS 101B-S1550",
    "technicalSpecifications": "具有高度的波长和功率稳定性，优秀的SMSR；采用14pin BTF封装激光模块，内置激光驱动以及温度控制器"
  },
  {
    "name": "大屏幕监控显示器电子幕墙",
    "spec": "CS - WPJ50DG",
    "technicalSpecifications": "亮度500cd/㎡ 800cd/㎡拼接双边3.5mm双3.5mm屏幕类型55寸LED液晶超窄拼接单元接受信号USB/HDMI/DVI/VGA/AV/BNC"
  }
]);

// 用房情况数据
const housingData = ref([
  {type: '用房情况（共21间，710平方米）'}
]);

const rooms = ref(['实验室', '会议室', '大数据指挥中心', '机房', '数据安全中心'])
const tableData=ref([{}])
const objectSpanMethod=({ rowIndex, columnIndex })=> {
  // 合并首行
  if (rowIndex === 0) {
    if (columnIndex === 0) return { colspan: 7, rowspan: 1 }
    return { colspan: 0, rowspan: 0 }
  }
}
</script>

<style scoped>
.header-cell {
  font-weight: bold;
  background-color: #f5f7fa;
  padding: 12px 0;
}

.merged-cell {
  background-color: #f5f7fa;
  font-weight: bold;
}

.el-table--border td:not(.merged-cell),
.el-table--border th {
  border-right: 1px solid #ebeef5;
}

.el-table--border {
  border: 1px solid #ebeef5;
  border-bottom: none;
}

.house-condition-container {
  margin: 20px 0 40px;
  text-align: center;
}

.house-condition-image {
  max-width: 100%;
  border-radius: 8px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
}

.lab-detail-container {
  width: 80%;
  margin: 0 auto;
  padding: 40px 20px;
}

.title-row {
  margin-bottom: 20px;
}

.main-title {
  font-size: 32px;
  font-weight: 600;
  color: #303133;
  margin: 0;
}

.breadcrumb-col {
  display: flex;
  justify-content: flex-end;
}

.breadcrumb {
  font-size: 16px;

  :deep(.el-breadcrumb__inner) {
    color: #606266;

    &.is-link {
      font-weight: normal;
    }
  }
}

.divider {
  border: 0;
  height: 2px;
  background: #1a73e8;
  margin: 20px 0 40px;
}

.content-wrapper {
  max-width: 95%;
  margin: 0 auto;
}

.section-title {
  font-size: 28px;
  font-weight: 600;
  text-align: center;
  color: #2d3748;
  margin-bottom: 30px;
}

.section-block {
  margin-bottom: 30px;
}

.section-subtitle {
  font-size: 24px;
  color: #1a3a6d;
  margin: 25px 0 15px;
  padding-bottom: 8px;
  border-bottom: 1px solid #e4e7ed;
}

.content-text {
  font-size: 16px;
  line-height: 2.5;
  color: #4a5568;
  text-align: justify;
  margin-bottom: 10px;
}

.content-list {
  padding-left: 30px;
  margin: 15px 0;

  li {
    margin-bottom: 8px;
    line-height: 1.6;
    color: #4a5568;
  }
}

.grid {
  display: grid;
}

.grid-cols-2 {
  grid-template-columns: repeat(2, minmax(0, 1fr));
}

.gap-4 {
  gap: 1rem;
}

.mt-4 {
  margin-top: 1rem;
}

.committee-table {
  margin: 40px 0;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  overflow: hidden;
}

:deep(.el-table) {
  --el-table-header-bg-color: white !important;
  --el-table-tr-bg-color: white;
  --el-table-row-hover-bg-color: #f5f7fa;
  font-family: '宋体';
}

:deep(.el-table th.el-table__cell) {
  font-size: 22px !important;
  font-weight: bold !important;
  color: #000000 !important;
  padding: 16px 0;
}

:deep(.el-table td) {
  font-size: 18px;
  padding: 12px 0;
}

.equipment-list {
  @apply grid grid-cols-2 gap-4;
}

.equipment-item {
  @apply flex items-center p-3 bg-gray-50 rounded-lg;
}

.equipment-item svg {
  @apply mr-2 text-blue-600;
}

.category-title {
  @apply text-lg font-semibold mt-6 mb-3 text-gray-700;
}

@media (max-width: 768px) {
  .main-title {
    font-size: 24px;
  }

  .section-title {
    font-size: 22px;
  }

  .section-subtitle {
    font-size: 18px;
  }

  .content-text {
    font-size: 14px;
  }

  .content-list {
    padding-left: 20px;
  }

  .breadcrumb {
    font-size: 14px;
  }

  .grid-cols-2 {
    grid-template-columns: 1fr;
  }

  .committee-table {
    margin: 20px 0;
  }

  :deep(.el-table) {
    font-size: 14px;
  }

  :deep(.el-table th.el-table__cell) {
    font-size: 14px;
  }

  .equipment-list {
    grid-template-columns: 1fr;
  }
}

.content-text[style*="text-indent"] {
  text-indent: 2em;
}

.strategy-box {
  margin-top: 25px;
  padding: 20px;
  background: #f8fafc;
  border-radius: 8px;
}

.sub-list {
  padding-left: 30px;
  margin: 8px 0;
  list-style-type: circle;
}

.sub-list li {
  color: #4a5568;
  line-height: 1.6;
}

.structure-image-container {
  width: 100%;
  margin: 0 auto 40px;
  text-align: center;
}

.structure-image {
  width: 100%;
  max-width: 100%;
  height: auto;
  border-radius: 8px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
}

.images-container {
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
  gap: 30px;
  margin-bottom: 40px;
}

.image-link {
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-decoration: none;
  color: #333;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
}

.image-link:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.15);
}

.platform-image,
.equipment-image {
  width: 100%;
  height: 350px;
  object-fit: cover;
  display: block;
}

.image-caption {
  width: 100%;
  padding: 15px 0;
  font-size: 18px;
  font-weight: bold;
  text-align: center;
  background-color: #f5f7fa;
}

@media (max-width: 768px) {
  .images-container {
    flex-direction: column;
  }

  .platform-image,
  .equipment-image {
    height: 200px;
  }
}

.platform-cards {
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin-bottom: 40px;
}

.platform-card {
  background-color: #f8f9fa;
  border-radius: 10px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
  overflow: hidden;
  transition: all 0.3s ease;
}

.platform-card:hover {
  transform: translateY(-3px);
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.12);
}

.platform-card-content {
  padding: 25px;
}

.platform-text {
  font-size: 18px;
  line-height: 1.8;
  color: #333;
  margin: 0;
}

.platform-image-container {
  margin: 40px auto;
  text-align: center;
}

.platform-full-image {
  max-width: 100%;
  height: auto;
  border-radius: 10px;
  box-shadow: 0 6px 16px rgba(0, 0, 0, 0.1);
}

@media (max-width: 768px) {
  .platform-text {
    font-size: 16px;
  }
}

.table-wrapper {
  margin: 30px 0;
}

.housing-table {
  width: 100%;
}

.mt-1 {
  margin-top: -1px;
}

.mt-6 {
  margin-top: 60px;
}

.area-value {
  padding: 12px 0;
  font-weight: bold;
  text-align: center;
  font-size: 16px;
}

.devices-table {
  width: 100%;
  margin-bottom: 40px;
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.05);
  border-radius: 4px;
}

:deep(.el-table) {
  border-radius: 4px;
  overflow: hidden;
}

.images-container {
  display: flex;
  justify-content: space-between;
  gap: 30px;
  margin: 30px 0;
}

.image-box {
  flex: 1;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
}

.place-image {
  width: 100%;
  height: 300px;
  object-fit: cover;
  display: block;
  transition: transform 0.3s ease;
}

.image-box:hover .place-image {
  transform: scale(1.03);
}

@media (max-width: 768px) {
  .images-container {
    flex-direction: column;
  }

  .place-image {
    height: 200px;
  }
}
</style>
