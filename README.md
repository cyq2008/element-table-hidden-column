# eltable

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

###  description  
element-table-hidden-colum
element-ui原生的没有隐藏列的功能，
网上使用v-if+key的方式效果，渲染时会很闪，表头高度会调整和内容位置会闪到另一处再到正确的地方
使用v-if每个地方都会加条件判断，使用不方便，没有封装

### use
在table上添加 showColumns参数，会呈现隐藏列的按钮选项，
在源码基础上封装，呈现效果很好，没有闪动
默认selection，fixed，操作不加入可选隐藏列

### 关键代码
```
<el-dropdown v-if="showColumns" style="float:right;" trigger="click">
  <el-button plain icon="el-icon-menu" size="mini"></el-button>
  <el-dropdown-menu slot="dropdown">
    <el-checkbox v-model="showColState[col.id]" v-for="col in showCols" style="display: block;margin:0 10px;">{{col.label}}</el-checkbox>
  </el-dropdown-menu>
</el-dropdown>
```
```
watch:{
  showColState:{
    handler(){
      if(!this.showColCheckedReady){return;}
      this.store.states._columns = this.originCols.filter(col=>{
        if(col.type=='selection' || col.fixed || col.label=='操作'){
          return true;
        }else{
          return this.showColState[col.id];
        }
      });
      this.store.updateColumns();
    },
    deep: true
  }
}
```
### css
// 显示隐藏table列的时候， show-overflow-tooltip属性自动计算的宽度不对，设置100%
// src/element-variables.scss
.cell.el-tooltip{
  width: 100% !important;
}

