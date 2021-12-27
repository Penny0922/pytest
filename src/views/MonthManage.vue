<template>
    <div class="block">
        <span class="demonstration"></span>
        <el-date-picker
           v-model="value"
           type="month"
           placeholder="选择月份查询"
           value-format="yyyy年MM月">
        </el-date-picker>
        
        <el-button @click="AddMonth1()">添加部门</el-button>
        <el-button @click="AddMonth2()">添加单位</el-button>
    
    <el-table class="el_table_see_month"
    :data="tableData"
    type
    
    max-height="1000"
    highlight-current-row
    :header-cell-style="{background:'rgb(51,102,153)',color:'white'}">
    <el-table-column prop="date" width="200" align="center" label="允许录入日期">
        <template slot-scope="scope">
            <span>{{scope.row.date}}</span>
        </template>
    </el-table-column>
   

    <el-table-column prop="department" width="350" align="center" label="允许单位/部门">
    <template slot-scope="scope">
        <span>{{scope.row.department}}</span>
    </template>
    
    </el-table-column>

    <el-table-column prop="content" width="300" label="操作">
        <template slot-scope="scope">
            <el-button type="danger" size="mini" @click="handleDelete(scope.row)">删除</el-button>
        </template>
    </el-table-column>
     </el-table> 
    
    </div>
</template>



<script>

export default {
 data(){
        return {
            tableData:[],
            value:''
        }
    },

created(){
    this.fetch();
},

 methods:{
     async handleDelete(index){
        await this.axios.post("http://192.168.43.127:8888/delete",{"id":index.id});
         this.fetch();         
     },
 
     fetch(){
         var vm = this;
         this.axios.get("http://192.168.43.127:8888/get")
         .then(function(response){
            vm.tableData=response.data.data;
            console.log(vm.tableData)
         })        
     },

     async AddMonth1(){
          var newList = {
              date:this.value,
              department:"机关部门"
          }
          if(this.value==''||this.value==null){
              alert("请选择月份")
          }else{
            //    for(var i =0;i<=this.tableData.length;i++){
            //        if(this.tableData[i].date===newList.date&&this.tableData[i].department===newList.department){
            //            console.log(this.tableData[i])
            //            alert("请勿重复添加相同数据")
            //        }else{
            //            console.log(this.tableData[i])
            //           this.tableData.unshift(newList) 
               await this.axios.post("http://192.168.43.127:8888/insert",newList) ,
               this.fetch()     
            //        }
            //    }
                
          }
               
     },
     async AddMonth2(){
          var newList = {
              date:this.value,
              department:"基层单位"
          }
          if(this.value==''||this.value==null){
              alert("请选择月份")
          }else{
        //        for(var i =0;i<this.tableData.length;i++){
        //           if(this.tableData[i].date===newList.date&&this.tableData[i].department===newList.department){
        //               alert("请勿重复添加相同数据")
        //           }else{
        //               this.tableData.unshift(newList) 
                      await this.axios.post("http://192.168.43.127:8888/insert",newList);
                      this.fetch();
        //           }
        //       }
          }
               
     }
 }
}
</script>
<style>

</style>