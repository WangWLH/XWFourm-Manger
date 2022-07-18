<template>
    <div class="homePage">
        <div class="welcome">
            <h2>欢迎回来！ CC</h2>
            <div>
                <ul>
                    <li>
                        <i class="el-icon-platform-eleme"></i>
                        <div>
                            <h2>线上总内容</h2>
                            <h4>37777 w</h4>
                        </div>
                    </li>
                    <li>
                        <i class="el-icon-platform-eleme"></i>
                        <div>
                            <h2>线上总内容</h2>
                            <h4>37777 w</h4>
                        </div>
                    </li>
                     <li>
                        <i class="el-icon-platform-eleme"></i>
                        <div>
                            <h2>线上总内容</h2>
                            <h4>37777 w</h4>
                        </div>
                    </li>
                     <li>
                        <i class="el-icon-platform-eleme"></i>
                        <div>
                            <h2>线上总内容</h2>
                            <h4>37777 w</h4>
                        </div>
                    </li>
                </ul>
            </div>
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
                    text: 'ECharts 入门示例'
                },
                tooltip: {},
                xAxis: {
                    data: ['衬衫', '羊毛衫', '雪纺衫', '裤子', '高跟鞋', '袜子']
                },
                yAxis: {},
                series: [
                    {
                        name: '销量',
                        type: 'bar',
                        data: [5, 20, 36, 10, 10, 20]
                    }
                ]
            });
        }
    }
}
</script>

<style lang="scss" scoped>
.homePage{
.welcome{
    h2{
        text-align: left;
    }
    ul{
        display: flex;
        justify-content: space-between;
            align-items: center;

        li{
            display: flex;
            align-items: center;
            i{
                font-size: 50px;
                color: #007eff;
            }
        }
    }
}
}
</style>