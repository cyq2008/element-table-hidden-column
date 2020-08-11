<template>
    <div id="app">
        <c-table stripe :data="tableData" style="width: 100%" showColumns>
            <el-table-column type="selection" width="50" align="center"/>
            <el-table-column prop="date" label="日期"/>
            <el-table-column prop="name" label="姓名"/>
            <el-table-column prop="sex" label="性别"/>
            <el-table-column prop="address" label="地址" show-overflow-tooltip align="center"/>
            <el-table-column prop="num" label="序号" show-overflow-tooltip align="center"/>
            <el-table-column prop="date" label="日期"/>
            <el-table-column label="操作" align="center" class-name="small-padding fixed-width" width="180px">
                <template slot-scope="scope">
                    crud
                </template>
            </el-table-column>
        </c-table>
    </div>
</template>

<script>
    export default {
        name: 'app',
        components: {},
        data() {
            return {
                tableData: [
                    {date: '2016-05-02', name: '王小虎', sex:'男', age:18,num:1, address: '上海市普陀区金沙江路 1518 弄'},
                    {date: '2016-05-02', name: '王小虎', sex:'男', age:18,num:1, address: '上海市普陀区金沙江路 1518 弄'},
                    {date: '2016-05-02', name: '王小虎', sex:'男', age:18,num:1, address: '上海市普陀区金沙江路 1518 弄'},
                    {date: '2016-05-02', name: '王小虎', sex:'男', age:18,num:1, address: '上海市普陀区金沙江路 1518 弄上海市普陀区金沙江路 1518 弄'},
                    {date: '2016-05-02', name: '王小虎', sex:'男', age:18,num:1, address: '上海市普陀区金沙江路 1518 弄上海市普陀区金沙江路 1518 弄'},
                    {date: '2016-05-02', name: '王小虎', sex:'男', age:18,num:1, address: '上海市普陀区金沙江路 1518 弄上海市普陀区金沙江路 1518 弄'},
                    {date: '2016-05-02', name: '王小虎', sex:'男', age:18,num:1, address: '上海市普陀区金沙江路 1518 弄'},
                    {date: '2016-05-02', name: '王小虎', sex:'男', age:18,num:1, address: '上海市普陀区金沙江路 1518 弄'},
                    {date: '2016-05-02', name: '王小虎', sex:'男', age:18,num:1, address: '上海市普陀区金沙江路 1518 弄'},
                    {date: '2016-05-02', name: '王小虎', sex:'男', age:18,num:1, address: '上海市普陀区金沙江路 1518 弄'},
                ]
            }
        }
    }
</script>
