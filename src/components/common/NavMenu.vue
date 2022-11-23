<template>
    <el-menu
    :default-active="'/index'"
    router
    mode="horizontal"
    background-color="white"
    text-color="#222"
    active-text-color="red"
    style="min-width:1300px"
    >
      <el-menu-item v-for="(item,i) in navList" :key="i" :index="item.name">
        {{ item.navItem }}
      </el-menu-item>
    </el-menu>
</template>

<script>
/* eslint-disable */
export default {
  name: 'NavMenu',
  data () {
    return {
      navList: [
        {name: "/index", navItem: "首页"},
        {name: "/docGenerate", navItem: "开发文档编辑"}
      ]
    }
  }
}
</script>
<style>

</style>
