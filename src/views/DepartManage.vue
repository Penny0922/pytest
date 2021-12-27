<style >

</style>
<template>
    <div>
        机关部门指标管理
        
        <el-table
            :data="tableData.filter(data=>!search || data.content.toLowerCase().includes(search.toLowerCase()))"          
            style="width: 99%"        
            :header-cell-style="{background:'#373d3f',color:'#fff'}" 
            height="800"
        >
         
            <el-table-column width="50">
                <template slot-scope="scope">
                    {{scope.$index+1}}
                </template>
            </el-table-column>

            <el-table-column label="被考核部门" prop="stander" width='125' align='center'>
                <template slot-scope="scope">
                    <span>{{scope.row.unitName}}</span>
                </template>
            </el-table-column>

            <el-table-column prop="primaryClassName" label="考核分类" width="100" align='center'>
                <template slot-scope="scope">
                    {{scope.row.primaryClassName}}
                </template>
            </el-table-column>

            <el-table-column label="具体考核" prop="secondaryClassName" width='150' align='center'>
                <template slot-scope="scope">
                    <span>{{scope.row.secondaryClassName}}</span>
                </template>   
            </el-table-column>

            <el-table-column label="考核内容" prop="content" width="300" align='center'>
                <template slot-scope="scope">
                    {{scope.row.content}}
                </template>
            </el-table-column>

             <el-table-column label="标准" prop="standard" width='230' align='center'>
                 <template slot-scope="scope">
                    <span v-if="scope.row.oneVote==1"><font style="color:red;">{{scope.row.standard}}</font></span>
                    <span v-else>{{scope.row.standard}}</span>
                </template>
            </el-table-column>

            <el-table-column label="考核部门" prop="stander" width="180" allign="center">
                <template slot-scope="scope">
                    <span>{{scope.row.departmentName}}</span>
                </template>
            </el-table-column>

            <el-table-column label="指标录入类型" prop="score" align="center">
                <template slot-scope="scope">
                    <span v-if="scope.row.quantified==0">人工录入指标</span>
                    <span v-else><font style="color:blue;">公式计算</font></span>
                </template>
            </el-table-column>

            <el-table-column  width="200" align="right">
                <template slot="header" slot-scope="">
                    <el-input
                        v-model="search"
                        size="mini"
                        placeholder="关键字搜索"
                        style="width:130px"
                        texe-align='left'
                        clearable
                    />   
                   
                </template>
            </el-table-column>

        </el-table>
    </div>
</template>

<script>
import axios from 'axios'


export default {
    name: "DeparteManage",
    
    data(){
        return {
            tableData:[

            ],
            
            search:''
        }
    },
    created(){
        this.fetch()
    },
    methods:{
        fetch(){
            var vm = this
            axios.get('/test.json',{
                
            })
            .then(function (res) {
                vm.tableData = res.data.allUnAbolishedKpiInfo
            })
            
        },

        
        //     //伪代码
        //     // axios{
        //     //     请求地址：url
        //     //     请求参数：header
        //     //     请求方式；get/post
        //     //     data（传参数）
        //     //     response:(res=>{
        //     //         this.tableData = res
        //     //     })
        //     // }
        // }



        //1.component
        //2.slot
        //3.search相关    ！

        //4.合并单元格（表格）--------4
    }
}
</script>

<style>


</style>