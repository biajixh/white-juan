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
      navList: []
    }
  },
  methods:{
    findNavItem () {
        this.$axios.get('/navItem/findAll')
        .then(successResponse => {
            console.log(successResponse)
            if(successResponse.data.code === 200){
              this.navList = successResponse.data.data
            }
        })
        .catch(failResponse => {})
    }
  },
  mounted () {
    this.findNavItem()
  }
}
</script>
<style>

</style>
