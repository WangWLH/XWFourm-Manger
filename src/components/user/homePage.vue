<template>
    <div class="homePage">
        <div class="welcome">
            <h2>欢迎回来！ CC</h2>
            <el-row :gutter="20">
                <el-col :span="6">
                    <div class="grid-content bg-purple">

                    </div>
                </el-col>
                <el-col :span="6">
                    <div class="grid-content bg-purple"></div>
                </el-col>
                <el-col :span="6">
                    <div class="grid-content bg-purple"></div>
                </el-col>
                <el-col :span="6">
                    <div class="grid-content bg-purple"></div>
                </el-col>
            </el-row>
        </div>
        <!-- echarts -->
        <div ref="chart" style="width:50%;height:376px"></div>
    </div>
</template>

<script>
import * as echarts from 'echarts'
export default {
    data() {
        return {

        }
    },
    mounted() {
        let _this = this;
        _this.getCharts();
    },
    methods: {
        getCharts() {
            // 基于准备好的dom，初始化echarts实例
            var myChart = echarts.init(this.$refs.chart);
            // 绘制图表
            myChart.setOption({
                title: {
                    text: 'XWFourm 发帖数量统计'
                },
                tooltip: {},
                xAxis: {
                    data: ['星期一', '星期二', '星期三', '星期四', '星期五', '星期六', '星期日']
                },
                yAxis: {},
                series: [
                    {
                        name: '发帖量',
                        type: 'bar',
                        data: [5, 20, 36, 10, 10, 20,1]
                    }
                ]
            });
        }
    }
}
</script>

<style lang="scss" scoped>
.homePage {
    .welcome {
        h2 {
            text-align: left;
        }
    }
}

.el-row {
    margin-bottom: 20px;

    &:last-child {
        margin-bottom: 0;
    }
}

.el-col {
    border-radius: 4px;
}

.bg-purple-dark {
    background: #99a9bf;
}

.bg-purple {
    background: #d3dce6;
}

.bg-purple-light {
    background: #e5e9f2;
}

.grid-content {
    border-radius: 4px;
    min-height: 36px;
}

.row-bg {
    padding: 10px 0;
    background-color: #f9fafc;
}
</style>