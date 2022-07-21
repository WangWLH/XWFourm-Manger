<template>
    <el-dialog :title="title" :visible.sync="dialogFormVisible">
        <slot></slot>
        <div slot="footer" class="dialog-footer">
            <el-button @click="cancelForm()">取 消</el-button>
            <el-button type="primary" @click="dialogFormVisible = false">确 定</el-button>
        </div>
    </el-dialog>
</template>

<script>
export default {
    props:{
        //显示关闭弹框
        dialogFormVisible:{
            type:Boolean,
            default:false
        },
        //标题
        title:{
            type:String,
            default:'XWFourm'
        }
    },
    data() {
        return {
          
        }
    },
    methods:{
        cancelForm(){
            this.$emit('cancelForm')
        }
    }
}
</script>

<style>
</style>