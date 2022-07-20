<template>
    <div class="commonTable">
        <el-table 
            :data="tableData" 
            :stripe="stripe" 
            style="width: 100%"
            key="slot"
        >
            <el-table-column
                v-for="(item,index) in tableHead"
                :key="index"
                :prop="item.prop"
                :label="item.label" 
                :width="item.width"
            >
                <template #default="scope">
                    <!-- 滑块 -->
                    <el-switch
                        v-model="scope.row.switch"
                        v-if="item.type == 'switch'"
                        active-color="#13ce66"
                        inactive-color="#ff4949">
                    </el-switch>
                    <!-- 按钮 -->
                    <span v-if="item.isOperation">
                        <el-button type="primary" icon="el-icon-edit" circle></el-button>
                        <el-button type="danger" icon="el-icon-delete" circle></el-button>
                    </span>
                </template>
            </el-table-column>
        </el-table>
    </div>
</template>

<script>
export default {
    props: {
        //表格数据
        tableData: {
            type: Array,
            required: true
        },
        //表头数据
        tableHead: {
            type: Array,
            required: true
        },
        //是否显示斑马条纹
        stripe:{
            type:Boolean,
            default:false
        },
        //是否固定表头  暂时不做
        height:{
            type:Number
        }
    },
    data() {
        return {
            value:true
        }
    },
    methods: {
    //    changeSwitch(){
    //     this.$emit('changeSwitch',1)
    //    }
    }
}
</script>

<style lang="scss" scoped>
</style>