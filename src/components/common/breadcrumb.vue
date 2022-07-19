<template>
    <div class="crumbsPage">
        <el-breadcrumb separator="/">
            <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
            <el-breadcrumb-item v-for="(item, index) in breadList" :key="index">
                <span v-if="item.redirect === 'noRedirect' || index == breadList.length - 1">{{ item.meta.title
                }}</span>
                <a v-else @click.prevent="handleLink(item)">{{ item.meta.title }}</a>
            </el-breadcrumb-item>
        </el-breadcrumb>
    </div>
</template>

<script>
export default {
    name: '',
    data() {
        return {
            breadList: []
        }
    },
    methods: {
        getBreadcrumb() {
            if (Object.keys(this.$route.matched[0].meta).length > 0) {
                this.breadList = this.$route.matched;
            } else {
                this.breadList = [];
            }
        },
        handleLink(item) {
            this.$router.push(item.path);
        }
    },
    watch: {
        $route(val) {
            this.getBreadcrumb();
        }
    }
}
</script>

<style lang="scss" scoped>
.crumbsPage{
    padding: 10px;
}
</style>