<template>
    <el-dialog :title="title" :visible.sync="dialogFormVisible">
        <!-- <slot></slot> -->
        <el-scrollbar>
            <XW-form
                v-bind="$attrs"
            ></XW-form>
        </el-scrollbar>
        <div slot="footer" class="dialog-footer">
            <el-button @click="cancelForm()">取 消</el-button>
            <el-button type="primary" @click="saveForm()">确 定</el-button>
        </div>
    </el-dialog>
</template>

<script>
import XWForm from './XWForm.vue'
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
        },
    },
    data() {
        return {
        //    formData: {
        //         input: "",
        //         textearea: "",
        //         select: "",
        //         searchSelect: "",
        //         dateTimeRange: [],
        //         timePicker: "",
        //         timePickerIsRange: [],
        //         datePicker: "",
        //         datePickerIsRange: [],
        //         dateTime: "2022-07-22 10:05:20",
        //         date:"",
        //         date1: "",
        //         switch: false,
        //         radio: "",
        //         checkbox: [],
        //         upload: [
        //             {name: 'food.jpg', url: 'https://img1.baidu.com/it/u=1966616150,2146512490&fm=253&app=138&size=w931&n=0&f=JPEG&fmt=auto?sec=1658595600&t=91fe8a201643568357340909b6c45610'}
        //         ],
        //         text:"这是一段文本，用于预览",
        //         quill:{
        //             content:""
        //         }
        //     }
        }
    },
    components:{
        XWForm
    },
    created(){
    },
    methods:{
        cancelForm(){
            this.$emit('cancelForm')
        },
        saveForm(){
            this.$emit('saveForm')
        }
    }
}
</script>

<style lang="scss" scoped>

</style>