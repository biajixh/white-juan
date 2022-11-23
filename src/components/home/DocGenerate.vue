<template>
    <div>
      <el-form id="jsonInput">
          <el-form-item>
            <el-input type="texterea" v-model="jsonString" placeholder="填写json格式数据"></el-input>
          </el-form-item>
          <el-form-item>
            <el-button width="20%" v-on:click="jsonFormat">格式化</el-button>
            <el-button width="20%" v-on:click="convert2Table">生成表格</el-button>
          </el-form-item>
      </el-form>
      <json-viewer
         :value="jsonValue"
         :expand-depth="5"
         copyable
         boxed
         sort="false"
       ></json-viewer>
       <pre>{{keys}}</pre>
    </div>
</template>
<script>

/* eslint-disable */
export default{
  name: 'DocGenerate',
  data() {
    return {
      
      jsonString: "",
      jsonValue:{},
      keys: []
    }
  },
  methods:{
    jsonFormat() {
       this.jsonString.charAt(0) === "[" ? this.jsonValue = eval(this.jsonString) : this.jsonValue = eval("["+this.jsonString+"]")
    },
    convert2Table() {
      this.jsonFormat();
      this.keys = this.convertJson2Aarry(this.jsonValue,"");
    },
    convertJson2Aarry(jsonObject,name){
      let key1 = [];
      let str = name === "" ? "" : name
      if(jsonObject instanceof Array){
        if(jsonObject.length > 0){
          jsonObject.splice(1,(jsonObject.length-1))
        }
        key1 = key1.concat(this.convertJson2Aarry(jsonObject[0],str))
      }else if(jsonObject instanceof Object){
        for(let index in jsonObject){
          key1.push(str+index)
          key1 = key1.concat(this.convertJson2Aarry(jsonObject[index],str+index+"."))
        }
      }
      console.log(key1)
      return key1;
    }
  }
}
</script>

<style scoped>

</style>