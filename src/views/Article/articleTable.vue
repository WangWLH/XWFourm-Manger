<template>
    <div>
        <el-table :data="tableData" stripe style="width: 100%">
            <el-table-column prop="createdDate" label="发布日期" width="180"> </el-table-column>
            <el-table-column prop="creatUser" label="创建人" width="180"> </el-table-column>
            <el-table-column prop="content" label="文章内容"> </el-table-column>
            <el-table-column prop="giveNums" label="点赞量"> </el-table-column>
            <el-table-column prop="IP" label="IP"> </el-table-column>
            <el-table-column prop="" label="操作">
                <template slot-scope="scope">
                    <el-button type="primary" icon="el-icon-edit" circle @click="Edit(scope.row)"></el-button>
                    <el-button type="danger" icon="el-icon-delete" circle @click="Del(scope.row.article_Id)"></el-button>
                </template>
            </el-table-column>
        </el-table>
        <el-dialog title="修改数据" :visible.sync="dialogFormVisible">
            <el-form :model="row">
                <el-form-item label="发布时间" :label-width="formLabelWidth">
                    <el-input v-model="row.createdDate" autocomplete="off"></el-input>
                </el-form-item>
                <el-form-item label="创建人" :label-width="formLabelWidth">
                    <el-input v-model="row.creatUser" autocomplete="off"></el-input>
                </el-form-item>
                <el-form-item label="文章内容" :label-width="formLabelWidth">
                    <el-input v-model="row.content" autocomplete="off"></el-input>
                </el-form-item>
                <el-form-item label="点赞量" :label-width="formLabelWidth">
                    <el-input v-model="row.giveNums" autocomplete="off"></el-input>
                </el-form-item>
                <el-form-item label="IP" :label-width="formLabelWidth">
                    <el-input v-model="row.IP" autocomplete="off"></el-input>
                </el-form-item>
            </el-form>
            <div slot="footer" class="dialog-footer">
                <el-button @click="dialogFormVisible = false">取 消</el-button>
                <el-button type="primary" @click="dialogFormVisible = false">确 定</el-button>
            </div>
        </el-dialog>
    </div>
</template>

<script>
export default {
    props: {
        tableData: Array
    },
    data() {
        return {
            dialogFormVisible: false,
            formLabelWidth: '120px',
            row:{}
        };
    },
    methods: {
        Edit(row) {
            let _this = this;
            _this.dialogFormVisible = true
            _this.row = row
        },
        Del(article_Id) {
             let _this = this;
             let arr = _this.tableData.filter(p=>{
                return article_Id == p.article_Id
             })
             let index = _this.tableData.indexOf(arr[0]);
            _this.tableData.splice(index,1)
        },
    },
};
</script>

<style lang="scss" scoped>
.el-table {
    height: 100%;
    padding: 0 20px;
}
</style>