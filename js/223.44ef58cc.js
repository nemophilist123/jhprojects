"use strict";(self["webpackChunkjinghe"]=self["webpackChunkjinghe"]||[]).push([[223],{89223:function(e,t,a){a.r(t),a.d(t,{default:function(){return f}});var r=function(){var e=this,t=e._self._c;return t("div",{staticClass:"energyTrendAnalysis"},[t("div",{staticClass:"left border-box tree"},[t("el-tree",{attrs:{"default-expand-all":!0,"expand-on-click-node":!1,data:e.data,props:e.defaultProps},on:{"node-click":e.nodeClick}})],1),t("div",{staticClass:"right border-box"},[t("div",{staticClass:"search chartSearch"},[t("div",[t("span",[e._v("能源类型")]),t("el-select",{attrs:{placeholder:""},on:{change:e.energyTrendFun},model:{value:e.energyVal,callback:function(t){e.energyVal=t},expression:"energyVal"}},e._l(e.energyOption,(function(e){return t("el-option",{key:e,attrs:{label:e,value:e}})})),1)],1),t("div",[t("el-date-picker",{attrs:{type:"date",placeholder:"","value-format":"yyyy-MM-dd",clearable:!1},on:{change:e.energyTrendFun},model:{value:e.date1,callback:function(t){e.date1=t},expression:"date1"}})],1),t("div",{staticStyle:{color:"#00b4fe"}},[e._v("至")]),t("div",[t("el-date-picker",{attrs:{type:"date",placeholder:"","value-format":"yyyy-MM-dd",clearable:!1},on:{change:e.energyTrendFun},model:{value:e.date2,callback:function(t){e.date2=t},expression:"date2"}})],1),t("div",{staticClass:"tabAll"},e._l(e.timeTab,(function(a,r){return t("div",{key:r,class:{isActive:r==e.tTIndex},on:{click:function(t){return e.changeTimeTab(r)}}},[e._v(" "+e._s(a)+" ")])})),0)]),t("div",{staticClass:"tabel"},[t("el-table",{staticStyle:{width:"100%"},attrs:{data:e.tableData,height:"250"}},[t("el-table-column",{attrs:{prop:"CompanyId",label:"企业编号",width:"150"}}),t("el-table-column",{attrs:{prop:"CompanyName",label:"企业名称",width:"170"}}),t("el-table-column",{attrs:{prop:"EnergyTypeStr",label:"能源类型"}}),t("el-table-column",{attrs:{prop:"UseQty",label:"当前用量"}}),t("el-table-column",{attrs:{prop:"PlanNum",label:"产值计划值"}}),t("el-table-column",{attrs:{prop:"UsePlanNum",label:"用量计划值"}}),t("el-table-column",{attrs:{prop:"QOQ",label:"环比"}}),t("el-table-column",{attrs:{prop:"UseQtyRatio",label:"用量占比"}}),t("el-table-column",{attrs:{prop:"UnitId",label:"单位"}})],1)],1),t("div",{staticClass:"border-box chart",staticStyle:{"flex-grow":"1"}},[t("e-Chart",{attrs:{arry:e.arry}})],1)])])},n=[],l=(a(57658),function(){var e=this,t=e._self._c;return t("div",{staticClass:"Pechart"},[t("div",{ref:"echart",staticClass:"echart"})])}),i=[],s={props:{arry:{type:Object,default:()=>[]}},data(){return{}},watch:{arry(e){this.setEchart()}},mounted(){},methods:{setEchart(){let e=this.$refs.echart,t=this.$echarts.init(e),a={tooltip:{trigger:"axis",axisPointer:{type:"cross",label:{backgroundColor:"#6a7985"}}},legend:{textStyle:{color:"#fff"}},grid:{left:"3%",right:"5%",bottom:"2%",top:"10%",containLabel:!0},xAxis:[{type:"category",boundaryGap:!0,data:this.arry.VAL,axisLabel:{show:!0,textStyle:{color:"#ffffff"}},axisTick:{show:!1}}],yAxis:[{type:"value",axisLabel:{show:!0,textStyle:{color:"#ffffff"}},splitLine:{show:!0,lineStyle:{color:["rgba(255, 255, 255, 0.5)"],type:"dashed"}}}],series:[{name:"产值计划值",type:"bar",z:1,itemStyle:{normal:{color:new this.$echarts.graphic.LinearGradient(0,0,0,1,[{offset:0,color:"rgba(0, 253, 152, 0.8)"},{offset:1,color:"rgba(0, 252, 235, 0.8)"}])}},data:this.arry.VAL1},{name:"用量计划值",type:"bar",z:1,itemStyle:{normal:{color:new this.$echarts.graphic.LinearGradient(0,0,0,1,[{offset:0,color:"rgba(0, 235, 255, 0.8)"},{offset:1,color:"rgba(0, 58, 255, 0.8)"}])}},data:this.arry.VAL2},{name:"当前用量",type:"line",z:2,emphasis:{focus:"series"},lineStyle:{normal:{color:"#FF9C00"}},itemStyle:{normal:{color:"#FF9C00"}},data:this.arry.VAL3}]};t.setOption(a),window.addEventListener("resize",(function(){t.resize()}))}}},o=s,c=a(1001),d=(0,c.Z)(o,l,i,!1,null,"5fc781e2",null),h=d.exports,u=a(8745),p={components:{eChart:h},data(){return{timeTab:["日","月","年"],tTIndex:0,data:[],defaultProps:{children:"children",label:"label"},energyOption:["电","冷凝水","自来水","蒸汽","天然气","氮气","压缩空气","中水"],energyVal:"电",date1:"",date2:"",tableData:[],arry:{}}},mounted(){this.date2=this.date1=this.$getDate().year+"-"+this.$getDate().month+"-"+this.$getDate().day,this.placesFun()},methods:{placesFun(){(0,u.x6)().then((e=>{let t=!1;e.content.forEach((e=>{let a=e.id.substring(0,1);"A"==a||"C"==a?(e["isClick"]=!0,t||(this.areaId=e.id,t=!0)):e["isClick"]=!1})),this.data=this.$arrToTree(e.content),console.log(this.data),this.energyTrendFun()})).catch((e=>{}))},energyTrendFun(){(0,u.Jw)(this.timeTab[this.tTIndex],this.energyVal,this.date1,this.date2,this.areaId).then((e=>{const{content:t,errmsg:a,errcode:r}=e;if(0==r){this.tableData=t;let e=[],a=[],r=[],n=[];t.forEach((t=>{e.push(t.CompanyName),a.push(t.PlanNum),r.push(t.UsePlanNum),n.push(t.UseQty)})),this.arry={VAL:e,VAL1:a,VAL2:r,VAL3:n}}})).catch((e=>{}))},changeTimeTab(e){this.tTIndex=e,this.energyTrendFun()},nodeClick(e){e.isClick&&(this.areaId=e.id,this.energyTrendFun())}}},y=p,b=(0,c.Z)(y,r,n,!1,null,"187ca296",null),f=b.exports},8745:function(e,t,a){a.d(t,{Jw:function(){return o},KQ:function(){return l},WI:function(){return c},bv:function(){return i},d1:function(){return s},x6:function(){return n}});var r=a(88304);function n(){return(0,r.W)({url:"/web/apps/gongqi.hsb.energy/energyManageAction/places",method:"POST"})}function l(){return(0,r.W)({url:"/web/apps/gongqi.hsb.elec/elecDrawAction/places",method:"POST"})}function i(){return(0,r.W)({method:"POST"})}function s(){return(0,r.W)({url:"/web/apps/gongqi.hsb.pv/pvStationTwoAction/places",method:"POST"})}function o(e,t,a,n,l){return(0,r.W)({url:"/web/apps/gongqi.hsb.energy/energyManageAction/energyTrend?dateType="+e+"&energyType="+t+"&fromDate="+a+"&id="+l+"&toDate="+n,method:"POST"})}function c(e,t,a,n,l){return(0,r.W)({url:"/web/apps/gongqi.hsb.energy/energyManageAction/energyBalance?dateType="+e+"&energyType="+t+"&fromDate="+a+"&id="+l+"&toDate="+n,method:"POST"})}}}]);
//# sourceMappingURL=223.44ef58cc.js.map