<template>
  <div class="echart">
    <el-row :gutter="0" :span="24">
      <el-col :span="2"><div class="grid-content title">销售统计</div></el-col>
      <el-col :span="16"><div class="grid-content data">2022.09.01~2022.09.29</div></el-col>
      <el-col :span="6"><div class="grid-content data">2022.09.01~2022.09.29</div></el-col>
    </el-row>
    <el-row :gutter="0">
      <el-col :span="12"><div ref="chart" style="width:100%;height:294px;" /></el-col>
      <el-col :span="12"><div ref="chart1" style="width:100%;height:294px" /></el-col>
    </el-row>
  </div>

</template>

<script>

export default {
  data() {
    return {
      option: {
        title: {
          text: '销售额趋势图',
          left: 'center',
          textStyle: {
            fontSize: 14
          }
        },
        xAxis: [{
          type: 'category',
          data: ['星期一', '星期二', '星期三', '星期四', '星期五', '星期六', '星期日'],
          axisTick: {
            alignWithLabel: true
          },
          boundaryGap: false,
          axisLabei: {
            interval: 2
          }
        }],
        yAxis: {
          type: 'value',
          name: '单位：元'

        },
        grid: {
          // top:48,
          left: '15%' // 调整这个属性
        },
        series: [
          {
            data: [0, 1000, 2000, 1000, 4000, 5000, 6000],
            type: 'line',
            smooth: true
          }
        ] },
      option2: {
        title: {
          text: '销售额分布',
          left: 'center',
          textStyle: {
            fontSize: 14
          }
        },
        color: ['#91b0ff'],
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            type: 'shadow'
          }
        },
        grid: {
          // top:48,
          left: '15%' // 调整这个属性
        },
        xAxis: [{
          type: 'category',
          data: ['Mon', 'Tue'],
          axisTick: {
            alignWithLabel: true
          }
        }],
        yAxis: [{
          type: 'value',
          name: '单位：元'
        }],
        series: [{
          name: '直接访问',
          type: 'bar',
          barWidth: '6%',
          itemStyle: {
            borderRadius: [2, 2, 0, 0]
          },
          data: [3000, 6000, 9000, 12000, 15000, 18000, 21000]
        }]
      }
    }
  },
  watch: {},
  mounted() {
    this.getEchartData()
    this.getEchartData1()
  },
  created() {
  },
  methods: {
    getEchartData() {
      const chart = this.$refs.chart
      if (chart) {
        const myChart = this.$echarts.init(chart)
        myChart.setOption(this.option)
        window.addEventListener('resize', function() {
          myChart.resize()
        })
      }
      // this.$on('hook:destroyed', () => {
      //   window.removeEventListener('resize', function() {
      //     myChart.resize()
      //   })
      // })
    },
    getEchartData1() {
      const chart1 = this.$refs.chart1
      if (chart1) {
        const myChart = this.$echarts.init(chart1)
        myChart.setOption(this.option2)
        window.addEventListener('resize', function() {
          myChart.resize()
        })
      }
      // this.$on('hook:destroyed', () => {
      //   window.removeEventListener('resize', function() {
      //     myChart.resize()
      //   })
      // })
    }

  }
}
</script>
<style lang="scss" scoped>
.echart{
  border-radius: 10px;
  padding-top: 15px;
  padding-left: 16px;
  background-color: #fff;
  .el-row{
    margin-bottom: 15px;
     &:last-child {
      margin-bottom: 0;
    }
  }
  .title{
      font-size: 16px;
      font-weight: 700;
      line-height: 36px;
    }
    .data{
      font-size: 12px;;
      color: #b8afaf;
      line-height: 36px;
    }
}
</style>
