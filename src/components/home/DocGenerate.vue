<template>
    <div>
      <json2-table v-model="RqJsonRst"></json2-table>
      <hr>
      <json2-table v-model="RespJsonRst"></json2-table>
    </div>
</template>
<script>
import Json2Table from '../common/Json2Table.vue'
/* eslint-disable */
//TODO 生成MD文件
export default{
  name: 'DocGenerate',

  components:{ Json2Table }
}
</script>

<style scoped>

</style>