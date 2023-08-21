"use strict";(self["webpackChunkjinghe"]=self["webpackChunkjinghe"]||[]).push([[408],{24408:function(e,t,a){a.r(t),a.d(t,{default:function(){return O}});var r=function(){var e=this,t=e._self._c;return t("div",{staticClass:"parameterManage"},[t("div",{staticClass:"table"},[t("div",{staticStyle:{"flex-grow":"1",position:"relative"}},[t("energyWarn")],1)])])},n=[],l=function(){var e=this,t=e._self._c;return t("div",{staticClass:"energyTrendAnalysis"},[t("div",{staticClass:"left border-box tree"},[t("el-tree",{attrs:{"default-expand-all":!0,"expand-on-click-node":!1,data:e.data,props:e.defaultProps},on:{"node-click":e.nodeClick}})],1),t("div",{staticClass:"right border-box"},[t("div",{staticClass:"search chartSearch"},[t("div",[t("el-date-picker",{attrs:{type:"date",placeholder:"","value-format":"yyyy-MM-dd",clearable:!1},on:{change:e.energyAlarmQueryFun},model:{value:e.date1,callback:function(t){e.date1=t},expression:"date1"}})],1),t("div",{staticStyle:{color:"#00b4fe"}},[e._v("至")]),t("div",[t("el-date-picker",{attrs:{type:"date",placeholder:"","value-format":"yyyy-MM-dd",clearable:!1},on:{change:e.energyAlarmQueryFun},model:{value:e.date2,callback:function(t){e.date2=t},expression:"date2"}})],1),t("el-button",{staticStyle:{"background-color":"#0066ff",border:"none",width:"1.5rem",position:"absolute",right:"0.2rem"},attrs:{type:"primary",icon:"el-icon-plus"},on:{click:e.addInfo}},[e._v("新增")])],1),t("div",{staticClass:"tabel"},[t("el-table",{staticStyle:{width:"100%"},attrs:{data:e.tableData,height:"250"},on:{"row-click":e.energyAlarmLineFun}},[t("el-table-column",{attrs:{prop:"alarmId",label:"预警数据编号",width:"150"}}),t("el-table-column",{attrs:{prop:"companyId",label:"企业编号",width:"170"}}),t("el-table-column",{attrs:{prop:"eqmId",label:"设备编号",width:"150"}}),t("el-table-column",{attrs:{prop:"eqmName",label:"设备名称"}}),t("el-table-column",{attrs:{prop:"department",label:"部门"}}),t("el-table-column",{attrs:{prop:"energyType2",label:"能源类型"}}),t("el-table-column",{attrs:{prop:"unitId",label:"单位"}}),t("el-table-column",{attrs:{prop:"workDayStandardQty",label:"工作日基准值",width:"170"}}),t("el-table-column",{attrs:{prop:"restDayStandardQty",label:"休息日基准值",width:"170"}}),t("el-table-column",{attrs:{prop:"planOutPutQty",label:"计划产值"}}),t("el-table-column",{attrs:{prop:"startDate",label:"起始日期",width:"150"}}),t("el-table-column",{attrs:{prop:"endDate",label:"截止日期",width:"150"}}),t("el-table-column",{attrs:{label:"操作",fixed:"right",width:"100"},scopedSlots:e._u([{key:"default",fn:function(a){return[t("el-button",{attrs:{type:"text",size:"small"},on:{click:function(t){return e.editInfo(a.row)}}},[e._v("修改")]),t("el-button",{attrs:{type:"text",size:"small"},on:{click:function(t){return e.deleteInfo(a.row)}}},[e._v("删除")])]}}])})],1),t("el-pagination",{staticStyle:{"margin-top":"0.1rem","margin-bottom":"0.1rem"},attrs:{background:"",layout:"prev, pager, next",total:e.total},on:{"current-change":e.handleCurrentChange}})],1),t("div",{staticClass:"lineTable"},[t("div",[t("el-table",{staticStyle:{width:"100%"},attrs:{data:e.alarmQty,height:"100%"}},[t("el-table-column",{attrs:{prop:"alarmId",label:"预警数据编号",width:"150"}}),t("el-table-column",{attrs:{prop:"date",label:"日期",width:"170"}}),t("el-table-column",{attrs:{prop:"time",label:"时间"}}),t("el-table-column",{attrs:{prop:"alarmLevel",label:"预警等级"}}),t("el-table-column",{attrs:{prop:"actualQty",label:"实际值"}}),t("el-table-column",{attrs:{prop:"standardQty",label:"基准值"}})],1)],1),t("div",[t("el-table",{staticStyle:{width:"100%"},attrs:{data:e.planOutPuts,height:"100%"}},[t("el-table-column",{attrs:{prop:"date",label:"日期",width:"150"}}),t("el-table-column",{attrs:{prop:"time",label:"时间",width:"170"}}),t("el-table-column",{attrs:{prop:"planOutPutQty",label:"计划产值"}}),t("el-table-column",{attrs:{prop:"planEnergyUse",label:"计划产值能耗",width:"170"}}),t("el-table-column",{attrs:{prop:"planEnergyUseOutPutQty",label:"单位产能能耗",width:"170"}}),t("el-table-column",{attrs:{prop:"outPutQty",label:"实际产值",width:"170"}}),t("el-table-column",{attrs:{prop:"energyUse",label:"实际产值能耗",width:"170"}}),t("el-table-column",{attrs:{prop:"energyUseOutPutQty",label:"单位产能能耗",width:"170"}}),t("el-table-column",{attrs:{prop:"alarmLevel",label:"预警等级"}})],1)],1)])]),t("energyWarnAddDialog",{ref:"addDialog"})],1)},o=[],i=a(8745),s=a(72021),d=(a(8499),function(){var e=this,t=e._self._c;return t("div",[t("el-dialog",{attrs:{title:"",visible:e.dialogFormVisible,modal:!1,top:"17vh"},on:{"update:visible":function(t){e.dialogFormVisible=t}}},[t("el-form",{attrs:{model:e.form}},[0==e.scpoeType?t("el-form-item",{attrs:{label:"企业","label-width":e.formLabelWidth}},[t("el-select",{attrs:{placeholder:""},on:{change:e.equipmentListFun},model:{value:e.form.companyId,callback:function(t){e.$set(e.form,"companyId",t)},expression:"form.companyId"}},e._l(e.companyOptions,(function(e){return t("el-option",{key:e.companyId,attrs:{label:e.companyName,value:e.companyId}})})),1)],1):t("el-form-item",{attrs:{label:"企业","label-width":e.formLabelWidth}},[t("el-input",{attrs:{autocomplete:"off",disabled:""},model:{value:e.form.companyId,callback:function(t){e.$set(e.form,"companyId",t)},expression:"form.companyId"}})],1),t("el-form-item",{attrs:{label:"设备","label-width":e.formLabelWidth}},[t("el-select",{attrs:{placeholder:""},model:{value:e.form.eqmId,callback:function(t){e.$set(e.form,"eqmId",t)},expression:"form.eqmId"}},e._l(e.eqmOptions,(function(e){return t("el-option",{key:e.eqmId,attrs:{label:e.eqmName,value:e.eqmId}})})),1)],1),t("el-form-item",{attrs:{label:"能源类型","label-width":e.formLabelWidth}},[t("el-select",{attrs:{placeholder:""},model:{value:e.form.energyType2,callback:function(t){e.$set(e.form,"energyType2",t)},expression:"form.energyType2"}},e._l(e.energyOption,(function(e){return t("el-option",{key:e,attrs:{label:e,value:e}})})),1)],1),t("el-form-item",{attrs:{label:"能源单位","label-width":e.formLabelWidth}},[t("el-input",{attrs:{autocomplete:"off"},nativeOn:{mousewheel:function(e){e.preventDefault()},DOMMousewheel:function(e){e.preventDefault()}},model:{value:e.form.unitId,callback:function(t){e.$set(e.form,"unitId",t)},expression:"form.unitId"}})],1),t("el-form-item",{attrs:{label:"工作日基准","label-width":e.formLabelWidth}},[t("el-input",{attrs:{type:"number",autocomplete:"off"},nativeOn:{mousewheel:function(e){e.preventDefault()},DOMMousewheel:function(e){e.preventDefault()}},model:{value:e.form.workDayStandardQty,callback:function(t){e.$set(e.form,"workDayStandardQty",t)},expression:"form.workDayStandardQty"}})],1),t("el-form-item",{attrs:{label:"休息日基准","label-width":e.formLabelWidth}},[t("el-input",{attrs:{type:"number",autocomplete:"off"},nativeOn:{mousewheel:function(e){e.preventDefault()},DOMMousewheel:function(e){e.preventDefault()}},model:{value:e.form.restDayStandardQty,callback:function(t){e.$set(e.form,"restDayStandardQty",t)},expression:"form.restDayStandardQty"}})],1),t("el-form-item",{attrs:{label:"计划产值","label-width":e.formLabelWidth}},[t("el-input",{attrs:{autocomplete:"off",type:"number"},model:{value:e.form.planOutPutQty,callback:function(t){e.$set(e.form,"planOutPutQty",t)},expression:"form.planOutPutQty"}})],1),t("el-form-item",{attrs:{label:"起始日期","label-width":e.formLabelWidth}},[t("el-date-picker",{attrs:{type:"date",placeholder:"","value-format":"yyyy-MM-dd",clearable:!1},model:{value:e.form.startDate,callback:function(t){e.$set(e.form,"startDate",t)},expression:"form.startDate"}})],1),t("el-form-item",{attrs:{label:"截止日期","label-width":e.formLabelWidth}},[t("el-date-picker",{attrs:{type:"date",placeholder:"","value-format":"yyyy-MM-dd",clearable:!1},model:{value:e.form.endDate,callback:function(t){e.$set(e.form,"endDate",t)},expression:"form.endDate"}})],1)],1),t("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[t("el-button",{attrs:{type:"primary"},on:{click:function(t){return e.confirm()}}},[e._v("确 定")])],1)],1)],1)}),m=[],c={data(){return{dialogFormVisible:!1,form:{companyId:"",eqmId:"",eqmName:"",energyType2:"",unitId:"",workDayStandardQty:"",restDayStandardQty:"",planOutPutQty:"",startDate:"",endDate:""},rowObj:{},formLabelWidth:"100px",companyOptions:[],eqmOptions:[],energyOption:["电","冷凝水","自来水","蒸汽","天然气","氮气","压缩空气","中水"],scpoeType:0}},watch:{dialogFormVisible(e){0==e&&(this.form={companyId:"",eqmId:"",eqmName:"",energyType2:"",unitId:"",workDayStandardQty:"",restDayStandardQty:"",planOutPutQty:"",startDate:"",endDate:""})}},mounted(){},methods:{showDialogFun(e,t){this.dialogFormVisible=!0,"企业"==sessionStorage.getItem("companyType")?this.companyOptions=[{companyId:sessionStorage.getItem("companyId"),companyName:sessionStorage.getItem("companyName")}]:this.energyCompanyListFun(),this.scpoeType=e,1==e&&(this.rowObj=t,this.form={companyId:t.companyId,eqmId:t.eqmId,eqmName:t.eqmName,energyType2:t.energyType2,unitId:t.unitId,workDayStandardQty:t.workDayStandardQty,restDayStandardQty:t.restDayStandardQty,planOutPutQty:t.planOutPutQty,startDate:t.startDate,endDate:t.endDate},this.equipmentListFun(),this.form.eqmId=t.eqmId)},energyCompanyListFun(){(0,s.oy)().then((e=>{const{content:t,errcode:a,errmsg:r}=e;this.companyOptions=t})).catch((e=>{}))},equipmentListFun(){this.form.eqmId="",this.form.eqmName="",(0,s.Js)(this.form.companyId).then((e=>{const{content:t,errcode:a,errmsg:r}=e;this.eqmOptions=t})).catch((e=>{}))},confirm(){0==this.scpoeType?this.addAlarmFun():this.editAlarmFun()},addAlarmFun(){let e=this.eqmOptions.filter((e=>e.eqmId==this.form.eqmId));this.form.eqmName=e[0].eqmName;let t="",a=Object.keys(this.form);a.forEach((e=>{t+=e+":"+this.form[e]+","})),(0,s.KX)("",t,this.scpoeType).then((e=>{const{content:t,errcode:a,errmsg:r}=e;0==a&&(this.$message({message:"新增成功!",type:"success"}),this.$bus.$emit("energyWarnrefresh",!0),this.dialogFormVisible=!1)})).catch((e=>{}))},editAlarmFun(){let e=this.eqmOptions.filter((e=>e.eqmId==this.form.eqmId));this.form.eqmName=e[0].eqmName;let t="",a=Object.keys(this.form);a.forEach((e=>{t+=e+":"+this.form[e]+","})),(0,s.KX)(this.rowObj.alarmId,t,this.scpoeType).then((e=>{const{content:t,errcode:a,errmsg:r}=e;0==a&&(this.$message({message:"修改成功!",type:"success"}),this.$bus.$emit("energyWarnrefresh",!0),this.dialogFormVisible=!1)})).catch((e=>{}))}}},u=c,p=a(1001),y=(0,p.Z)(u,d,m,!1,null,"37ab99a5",null),h=y.exports,f={components:{energyWarnAddDialog:h},data(){return{data:[],defaultProps:{children:"children",label:"label"},date1:"",date2:"",tableData:[],arry:{},total:0,currentPage:0,alarmQty:[],planOutPuts:[]}},created(){this.$bus.$on("energyWarnrefresh",(e=>{this.energyAlarmQueryFun()}))},mounted(){this.date2=this.date1=this.$getDate().year+"-"+this.$getDate().month+"-"+this.$getDate().day,this.placesFun()},methods:{placesFun(){(0,i.x6)().then((e=>{let t=!1;e.content.forEach((e=>{let a=e.id.substring(0,1);"A"==a||"C"==a?(e["isClick"]=!0,t||(this.areaId=e.id,t=!0)):e["isClick"]=!1})),this.data=this.$arrToTree(e.content),this.energyAlarmQueryFun()})).catch((e=>{}))},nodeClick(e){e.isClick&&(this.areaId=e.id,this.energyAlarmQueryFun())},energyAlarmQueryFun(){(0,s.OM)(this.date1,this.areaId,this.currentPage,this.date2).then((e=>{const{content:t,errcode:a,errmsg:r}=e;0==a&&(this.tableData=t,this.alarmQty=this.planOutPuts=[],this.energyAlarmLineFun(t[0]))})).catch((e=>{}))},energyAlarmLineFun(e){(0,s.a2)(e.alarmId).then((e=>{const{content:t,errcode:a,errmsg:r}=e;0==a&&(this.alarmQty=t.alarmQty,this.planOutPuts=t.planOutPuts)})).catch((e=>{}))},handleCurrentChange(e){this.currentPage=e,this.energyAlarmQueryFun()},addInfo(){this.$refs.addDialog.showDialogFun(0)},editInfo(e){this.$refs.addDialog.showDialogFun(1,e)},deleteInfo(e){this.$alert("确认删除该条信息","",{confirmButtonText:"确定",callback:t=>{this.deleteAlarmFun(e)}})},deleteAlarmFun(e){(0,s.KX)(e.alarmId,"",2).then((e=>{const{content:t,errcode:a,errmsg:r}=e;0==a&&(this.$message({message:"删除成功!",type:"success"}),this.energyAlarmQueryFun())})).catch((e=>{}))}}},b=f,g=(0,p.Z)(b,l,o,!1,null,"5d165813",null),w=g.exports,v={components:{energyWarn:w},data(){return{}},mounted(){},methods:{}},I=v,D=(0,p.Z)(I,r,n,!1,null,"c3f23444",null),O=D.exports},8745:function(e,t,a){a.d(t,{Jw:function(){return s},KQ:function(){return l},WI:function(){return d},bv:function(){return o},d1:function(){return i},x6:function(){return n}});var r=a(88304);function n(){return(0,r.W)({url:"/web/apps/gongqi.hsb.energy/energyManageAction/places",method:"POST"})}function l(){return(0,r.W)({url:"/web/apps/gongqi.hsb.elec/elecDrawAction/places",method:"POST"})}function o(){return(0,r.W)({method:"POST"})}function i(){return(0,r.W)({url:"/web/apps/gongqi.hsb.pv/pvStationTwoAction/places",method:"POST"})}function s(e,t,a,n,l){return(0,r.W)({url:"/web/apps/gongqi.hsb.energy/energyManageAction/energyTrend?dateType="+e+"&energyType="+t+"&fromDate="+a+"&id="+l+"&toDate="+n,method:"POST"})}function d(e,t,a,n,l){return(0,r.W)({url:"/web/apps/gongqi.hsb.energy/energyManageAction/energyBalance?dateType="+e+"&energyType="+t+"&fromDate="+a+"&id="+l+"&toDate="+n,method:"POST"})}},72021:function(e,t,a){a.d(t,{Js:function(){return d},KX:function(){return m},OH:function(){return n},OM:function(){return l},QA:function(){return i},a2:function(){return o},oy:function(){return s}});var r=a(88304);function n(e,t,a,n){return(0,r.W)({url:"/web/apps/gongqi.hsb.elec/elecTwoAction/workAlarm?alarmId="+e+"&checkContent="+t+"&solverDate="+a+"&solverRemark="+n,method:"POST"})}function l(e,t,a,n){return(0,r.W)({url:"/web/apps/gongqi.hsb.energy/energyManageAction/energyAlarmQuery?fromDate="+e+"&id="+t+"&pageIndex="+a+"&toDate="+n,method:"POST"})}function o(e){return(0,r.W)({url:"/web/apps/gongqi.hsb.energy/energyManageAction/energyAlarmLine?alarmId="+e,method:"POST"})}function i(e,t,a,n){return(0,r.W)({url:"/web/apps/gongqi.hsb.pv/pvAlarmAction/pvAlarmQuery?fromDate="+e+"&id="+t+"&pageIndex="+a+"&toDate="+n,method:"POST"})}function s(){return(0,r.W)({url:"/web/apps/gongqi.hsb.energy/energyTwoAction/companyList?areaId="+sessionStorage.getItem("companyId"),method:"POST"})}function d(e){return(0,r.W)({url:"/web/apps/gongqi.hsb.energy/energyTwoAction/equipmentList?companyId="+e,method:"POST"})}function m(e,t,a){return(0,r.W)({url:"/web/apps/gongqi.hsb.energy/energyManageAction/energyAlarmAddUpdateDelete",params:{alarmId:e,dateStr:t,type:a},method:"POST"})}}}]);
//# sourceMappingURL=408.c299a003.js.map