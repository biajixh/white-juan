<template>
    <div>
      <el-row :gutter="24">
        <el-col :span="11">
          <codemirror v-model="jsonString" :autoFormatJson=true></codemirror>
        </el-col>
        <el-col :span="2">
            <el-button v-on:click="convert2Table">生成表格</el-button>
        </el-col>
        <el-col :span="11">
          <el-table :data="keys" stripe border>
          <el-table-column prop="name" label="参数名"/>
          <el-table-column prop="value" label="参数值"/>
          <el-table-column prop="type" label="类型"/>
          <el-table-column prop="remark" label="备注"/>
        </el-table>
        </el-col>
      </el-row>
    </div>
</template>
<script>
require('codemirror/mode/javascript/javascript')
require('codemirror/addon/hint/show-hint')
require('codemirror/addon/hint/javascript-hint')
/* eslint-disable */
export default{
  name: 'Json2Table',
  data() {
    return {
      jsonString: "",
      jsonValue:{},
      keys: []
    }
  },
  methods:{
    jsonFormat() {
       this.jsonString.charAt(0) === "[" ? this.jsonValue = eval(this.jsonString) : this.jsonValue = eval("["+this.jsonString+"]")[0]
    },
    convert2Table() {
      this.jsonFormat();
      this.keys = this.convertJson2Aarry(this.jsonValue,"");
    },
    convertJson2Aarry(jsonObject,name){
      let jsonKeys = []
      const str = name === "" ? "" : name
      if(jsonObject instanceof Array){
        if(jsonObject.length > 0){
          jsonObject.splice(1,(jsonObject.length-1))
        }
        jsonKeys = jsonKeys.concat(this.convertJson2Aarry(jsonObject[0],str))
      }else if(jsonObject instanceof Object){
        for(const index in jsonObject){
          const item = {
            name: str+index,
            value: jsonObject[index] instanceof Array || Object.prototype.toString.call(jsonObject[index]) === "[object Object]"  ? "-" : jsonObject[index],
            type: Object.prototype.toString.call(jsonObject[index]),
            remark: ""
          }
          jsonKeys.push(item)
          jsonKeys = jsonKeys.concat(this.convertJson2Aarry(jsonObject[index],str+index+"."))
        }
      }
      return jsonKeys;
    }
  },
  components:{

  }
}
</script>

<style scoped>

</style>