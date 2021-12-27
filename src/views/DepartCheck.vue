<template>
  <div class="block">
    <span class="demonstration"></span>
    <el-date-picker
      v-model="TimeSelect"
      type="month"
      placeholder="选择月份查询"
    >
    </el-date-picker>

    <el-table
      :data="tableData"
      :span-method="arrSpanMethod"
      border
      style="width: 100%; margin-top: 20px"
      :header-cell-style="{ background: '#373d3f', color: '#fff' }"
    >
      <el-table-column prop="id" label="序号" width="100"> </el-table-column>
      <el-table-column prop="departName" label="部门名称" width="100">
      </el-table-column>
      <el-table-column prop="baseType" label="基础分类" width="200">
      </el-table-column>
      <el-table-column prop="socre" label="实际得分" width="100">
      </el-table-column>
      <el-table-column prop="target" label="考核指标" width="250px">
      </el-table-column>
      <el-table-column prop="theScore" label="该项得分" width="200px">
      </el-table-column>
      <el-table-column prop="checkDepart" label="认定部门" width="200px">
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {
  data() {
    return {
      TimeSelect: "",
      tableData: [
        {
          id: "1",
          departName: "客运部",
          baseType: "效率效益指标",
          socre: "43.78",
          target: "1.客运收入",
          theScore: "-4.74",
          checkDepart: "财务部（收入部）",
        },
        {
          id: "1",
          departName: "客运部",
          baseType: "效率效益指标",
          socre: "43.78",
          target: "2.旅客发送量",
          theScore: "1.52",
          checkDepart: "计划统计部",
        },
        {
          id: "1",
          departName: "客运部",
          baseType: "效率效益指标",
          socre: "43.78",
          target: "3.担当车客票收入",
          theScore: "0.00",
          checkDepart: "财务部（收入部）",
        },
        {
          id: "1",
          departName: "客运部",
          baseType: "效率效益指标",
          socre: "43.78",
          target: "4.客车上坐率",
          theScore: "2.00",
          checkDepart: "客运部",
        },
        {
          id: "1",
          departName: "客运部",
          baseType: "效率效益指标",
          socre: "43.78",
          target: "关联挂钩非运输企业效益指标",
          theScore: "5.00",
          checkDepart: "经营开发部",
        },
        {
          id: "1",
          departName: "客运部",
          baseType: "管理监控指标",
          socre: "18.00",
          target:
            "集团公司纳入督查督办的事项，未完成或完成较差的；年度两级1号文件重点工作推进不力的",
          theScore: "-2.00",
          checkDepart: "办公室",
        },
        {
          id: "2",
          departName: "运输部",
          baseType: "效率效益指标",
          socre: "47.69",
          target: "换算周转量",
          theScore: "3.59",
          checkDepart: "计划统计部",
        },
      ],
      merge: [],
      pos: "",
    };
  },

  created() {
    this.getSpanArr(this.tableData);
  },

  methods: {
    getSpanArr(data) {
      for (var i = 0; i < data.length; i++) {
        if (i === 0) {
          this.merge.push(1);
          this.pos = 0;
        } else {
          if (data[i].id === data[i - 1].id) {
            if (data[i].baseType === data[i - 1].baseType) {
              this.merge[this.pos] += 1;
              this.merge.push(0);
            }
          } else {
            this.merge.push(1);
            this.pos = i;
          }
        }
      }
    },
    arrSpanMethod({ row, column, rowIndex, columnIndex }) {
      if (columnIndex <= 3) {
        const _row = this.merge[rowIndex];
        const _col = _row > 0 ? 1 : 0;
        return {
          rowspan: _row,
          colspan: _col,
        };
      }
    },
  },
};
</script>
