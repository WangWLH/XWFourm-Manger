<template>
    <div class="block">
        <el-pagination 
            @size-change="handleSizeChange" 
            @current-change="handleCurrentChange" 
            :background="background"
            :current-page="currentPage"
            :page-sizes="pageSizes" 
            :page-size.sync="pageSize"
            :layout="layout"
            :total="total">
        </el-pagination>
    </div>
</template>

<script>
export default {
    props: {
        //页面展示数量
        pageSize: {
            type: Number,
            default: 1
        },
        //分页大小
        pageSizes: {
            type: Array,
            default() {
                return [10, 20, 30]
            }
        },
        //默认跳转页数
        currentPage:{
           type:Number,
           default:1
        },
        //布局方式
        layout:{
            type:String,
            default:'total, sizes, prev, pager, next, jumper'
        },
        //数据总条数
        total:{
            type:Number,
            default:0
        },
        //是否显示背景色
        background:{
            type:Boolean,
            default:false
        }
    },
    data() {
        return {
            
        }
    },
    created(){
       
    },
    methods: {
        handleSizeChange(val) {
            let _this = this;
            console.log(`每页 ${val} 条`);
            _this.$emit('changeSize',_this.pageSize)
        },
        handleCurrentChange(val) {
            console.log(`当前页: ${val}`);
            let _this = this;
            _this.$emit('changeCurrent',val)
        }
    }
}
</script>

<style lang="scss" scoped>
.block {
    text-align: left;
    padding: 10px;
}
</style>