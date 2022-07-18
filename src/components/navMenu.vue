<template>
    <div class="navMenu">
        <div class="menu-left">
            <i 
             :class="$store.state.isCollapse ? 'el-icon-s-fold' : 'el-icon-s-unfold'"
             :title="$store.state.isCollapse ? '展开' : '收起'" 
             @click="changeCollapse"></i>
            <i class="el-icon-refresh-right"></i>
        </div>
        <div class="menu-right">
            <el-dropdown trigger="click" size="small" @command="handleClick">
                <span class="el-dropdown-link">
                    <el-avatar src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"></el-avatar>
                    <span>CC</span>
                </span>
                <el-dropdown-menu slot="dropdown">
                    <el-dropdown-item icon="el-icon-s-custom" command="userCenter">个人中心</el-dropdown-item>
                    <el-dropdown-item icon="el-icon-s-tools" command="setting">设置</el-dropdown-item>
                    <el-dropdown-item icon="el-icon-menu" command="logOut">退出登录</el-dropdown-item>
                </el-dropdown-menu>
            </el-dropdown>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {

        }
    },
    methods: {
        handleClick(command) {
            this.$message('click on item ' + command);
        },
        changeCollapse() {
            let _this = this;
            _this.$store.state.isCollapse = !_this.$store.state.isCollapse;
        }
    }
}
</script>

<style lang="scss" scoped>
.navMenu {
    height: 62px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background: #fff;

    // menu左边部分
    .menu-left {
        font-size: 20px;
        i{
            cursor: pointer;
        }
        i:nth-child(1) {
            margin-right: 10px;
        }
    }

    // menu右边部分
    .menu-right {
        display: flex;
        align-items: center;
        cursor: pointer;

        span {
            display: flex;
            align-items: center;
            font-size: 14px;

            .el-avatar {
                margin-right: 10px;
            }
        }
    }
}
</style>