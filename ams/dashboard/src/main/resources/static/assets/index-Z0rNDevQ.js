import{d as V,a as S,r as k,V as J,b as m,o as b,e as j,w as h,c as p,Y as se,z as I,M as H,D as te,s as E,N as Z,j as N,B as x,l as w,F as U,x as ie,a1 as P,y as q,W as Y,aj as X,$ as ee,_ as ae,Z as re,a9 as ce,ak as pe,aa as de,G as me,J as fe}from"./index-7UdTOOsH.js";import{u as oe}from"./usePlaceholder-oV8njzjL.js";import{u as ne}from"./usePagination-nbhDV7a3.js";import{s as ge,r as le,a as ue,g as be,b as _e,c as ye,d as ve,_ as he,e as ze,u as Ge,f as ke}from"./optimize.service-Y_sPfOrx.js";const Ce=V({__name:"ScaleOut",props:{groupRecord:{}},emits:["cancel","refresh"],setup(n,{emit:f}){var i;const e=f,z=n,u=S(!1),C=k(oe()),r=S(),a=k({resourceGroup:((i=z.groupRecord)==null?void 0:i.name)||"",parallelism:1});function G(){r.value.validateFields().then(async()=>{u.value=!0,await ge({optimizerGroup:a.resourceGroup||"",parallelism:Number(a.parallelism)}),r.value.resetFields(),e("cancel"),e("refresh"),u.value=!1}).catch(()=>{u.value=!1})}function _(){r.value.resetFields(),e("cancel")}return J(()=>{}),(s,g)=>{const O=m("a-form-item"),d=m("a-input"),c=m("a-form"),v=m("a-modal");return b(),j(v,{visible:!0,title:s.$t("scaleOut"),confirmLoading:u.value,closable:!1,onOk:G,onCancel:_},{default:h(()=>[p(c,{ref_key:"formRef",ref:r,model:a,class:"label-120"},{default:h(()=>[p(O,{name:"resourceGroup",label:s.$t("resourceGroup")},{default:h(()=>[se(I(a.resourceGroup),1)]),_:1},8,["label"]),p(O,{name:"parallelism",label:s.$t("parallelism"),rules:[{required:!0,message:`${C.parallelismPh}`}]},{default:h(()=>[p(d,{value:a.parallelism,"onUpdate:value":g[0]||(g[0]=M=>a.parallelism=M),type:"number",placeholder:C.parallelismPh},null,8,["value","placeholder"])]),_:1},8,["label","rules"])]),_:1},8,["model"])]),_:1},8,["title","confirmLoading"])}}}),$e={class:"list-wrap"},Ie=["title"],we=["onClick"],Se=["onClick"],Re=["onClick"],Te=["onClick"],Le=V({__name:"List",props:{curGroupName:{},type:{}},emits:["editGroup","refresh"],setup(n,{emit:f}){const{t:e}=H();te();const z=n,u=f,C=E({pending:{title:"pending",color:"#ffcc00"},planning:{title:"planning",color:"#076de3"},idle:{title:"idle",color:"#c9cdd4"},minor:{title:"minor",color:"#0ad787"},major:{title:"major",color:"#0ad787"},full:{title:"full",color:"#0ad787"},committing:{title:"committing",color:"#0ad787"}}),r=S(!1),a=S(!1),G=E([{dataIndex:"name",title:e("name"),ellipsis:!0},{dataIndex:"container",title:e("container"),width:"23%",ellipsis:!0},{dataIndex:"resourceOccupation",title:e("resourceOccupation"),width:"23%",ellipsis:!0},{dataIndex:"operationGroup",title:e("operation"),key:"operationGroup",ellipsis:!0,width:230,scopedSlots:{customRender:"operationGroup"}}]),_=E([{dataIndex:"index",title:e("order"),width:80,ellipsis:!0},{dataIndex:"groupName",title:e("optimizerGroup"),ellipsis:!0},{dataIndex:"container",title:e("container"),ellipsis:!0},{dataIndex:"jobStatus",title:e("status"),ellipsis:!0},{dataIndex:"resourceAllocation",title:e("resourceAllocation"),width:"20%",ellipsis:!0},{dataIndex:"operation",title:e("operation"),key:"operation",ellipsis:!0,width:160,scopedSlots:{customRender:"operationGroup"}}]),i=k(ne()),s=k([]),g=k([]),O=Z(()=>z.type==="optimizers"?_:G),d=Z(()=>z.type==="optimizers"?s:g);function c(o){o&&(i.current=1),z.type==="optimizers"?A():F()}function v(o){o.container!=="external"&&Y.confirm({title:e("releaseOptModalTitle"),content:"",okText:"",cancelText:"",onOk:()=>{M(o)}})}async function M(o){try{a.value=!0,await le({optimizerGroup:o.groupName,jobId:o.jobId}),c(!0),u("refreshCurGroupInfo")}finally{a.value=!1}}async function A(){try{s.length=0,r.value=!0;const o={optimizerGroup:"all",page:i.current,pageSize:i.pageSize},t=await ue(o),{list:y,total:K}=t;i.total=K,(y||[]).forEach((L,$)=>{L.resourceAllocation=`${L.coreNumber} ${e("core")} ${X(L.memory)}`,L.index=(i.current-1)*i.pageSize+$+1,s.push(L)})}catch{}finally{r.value=!1}}async function F(){try{g.length=0,r.value=!0;const o=await be();i.total=o.length,(o||[]).forEach(t=>{t.name=t.resourceGroup.name,t.container=t.resourceGroup.container,t.resourceOccupation=`${t.occupationCore} ${e("core")} ${X(t.occupationMemory)}`,g.push(t)})}catch{}finally{r.value=!1}}const B=o=>{u("editGroup",o)},D=async o=>{if(await _e({name:o.name})){Y.confirm({title:e("deleteGroupModalTitle"),onOk:async()=>{await ye({name:o.name}),ee.success(`${e("remove")} ${e("success")}`),c()}});return}Y.warning({title:e("cannotDeleteGroupModalTitle"),content:e("cannotDeleteGroupModalContent")})},W=S({}),l=S(!1),R=o=>{o.container!=="external"&&(W.value={...o},l.value=!0)};function T({current:o=i.current,pageSize:t=i.pageSize}){i.current=o;const y=t!==i.pageSize;i.pageSize=t,c(y)}return J(()=>{c()}),(o,t)=>{const y=m("a-table"),K=m("u-loading");return b(),N(U,null,[x("div",$e,[p(y,{class:"ant-table-common",columns:O.value,"data-source":d.value,pagination:i,loading:r.value,onChange:T},{bodyCell:h(({column:L,record:$})=>[L.dataIndex==="durationDisplay"?(b(),N("span",{key:0,title:$.durationDesc},I($.durationDisplay),9,Ie)):w("",!0),L.dataIndex==="optimizeStatus"?(b(),N(U,{key:1},[x("span",{style:ie({"background-color":(P(C)[$.optimizeStatus]||{}).color}),class:"status-icon"},null,4),x("span",null,I($.optimizeStatus),1)],64)):w("",!0),L.dataIndex==="operation"?(b(),N("span",{key:2,class:q(["primary-link",{disabled:$.container==="external"}]),onClick:Q=>v($)},I(P(e)("release")),11,we)):w("",!0),L.dataIndex==="operationGroup"?(b(),N(U,{key:3},[x("span",{class:q(["primary-link g-mr-12",{disabled:$.container==="external"}]),onClick:Q=>R($)},I(P(e)("scaleOut")),11,Se),x("span",{class:"primary-link g-mr-12",onClick:Q=>B($)},I(P(e)("edit")),9,Re),x("span",{class:"primary-link",onClick:Q=>D($)},I(P(e)("remove")),9,Te)],64)):w("",!0)]),_:1},8,["columns","data-source","pagination","loading"])]),l.value?(b(),j(Ce,{key:0,groupRecord:W.value,onCancel:t[0]||(t[0]=L=>l.value=!1),onRefresh:c},null,8,["groupRecord"])):w("",!0),a.value?(b(),j(K,{key:1})):w("",!0)],64)}}}),xe=ae(Le,[["__scopeId","data-v-c551ff87"]]),Ne={class:"list-wrap"},Oe=["title","onClick"],Me=["title"],De=["onClick"],Pe=V({__name:"List",props:{curGroupName:{},type:{}},emits:["refreshCurGroupInfo"],setup(n,{emit:f}){const{t:e}=H(),z=te(),u=n,C=f,r=E({pending:{title:"pending",color:"#ffcc00"},planning:{title:"planning",color:"#076de3"},idle:{title:"idle",color:"#c9cdd4"},minor:{title:"minor",color:"#0ad787"},major:{title:"major",color:"#0ad787"},full:{title:"full",color:"#0ad787"},committing:{title:"committing",color:"#0ad787"}}),a=S(!1),G=S(!1),_=E([{dataIndex:"tableName",title:e("table"),ellipsis:!0,scopedSlots:{customRender:"tableName"}},{dataIndex:"groupName",title:e("optimizerGroup"),width:"16%",ellipsis:!0},{dataIndex:"optimizeStatus",title:e("optimizingStatus"),width:"16%",ellipsis:!0},{dataIndex:"durationDisplay",title:e("duration"),width:"10%",ellipsis:!0},{dataIndex:"fileCount",title:e("fileCount"),width:"10%",ellipsis:!0},{dataIndex:"fileSizeDesc",title:e("fileSize"),width:"10%",ellipsis:!0},{dataIndex:"quota",title:e("quota"),width:"10%",ellipsis:!0},{dataIndex:"quotaOccupationDesc",title:e("occupation"),width:120,ellipsis:!0}]),i=E([{dataIndex:"index",title:e("order"),width:80,ellipsis:!0},{dataIndex:"groupName",title:e("optimizerGroup"),ellipsis:!0},{dataIndex:"container",title:e("container"),ellipsis:!0},{dataIndex:"jobStatus",title:e("status"),ellipsis:!0},{dataIndex:"resourceAllocation",title:e("resourceAllocation"),width:"20%",ellipsis:!0},{dataIndex:"operation",title:e("operation"),key:"operation",ellipsis:!0,width:160,scopedSlots:{customRender:"operation"}}]),s=k(ne()),g=k([]),O=k([]),d=Z(()=>u.type==="optimizers"?i:_),c=Z(()=>u.type==="optimizers"?g:O);re(()=>u.curGroupName,l=>{l&&v()});function v(l){l&&(s.current=1),u.type==="optimizers"?M():A()}async function M(){try{g.length=0,a.value=!0;const l={optimizerGroup:u.curGroupName,page:s.current,pageSize:s.pageSize},R=await ue(l),{list:T,total:o}=R;s.total=o,(T||[]).forEach((t,y)=>{t.resourceAllocation=`${t.coreNumber} ${e("core")} ${X(t.memory)}`,t.index=(s.current-1)*s.pageSize+y+1,g.push(t)})}catch{}finally{a.value=!1}}async function A(){try{O.length=0,a.value=!0;const l={optimizerGroup:u.curGroupName||"",page:s.current,pageSize:s.pageSize},R=await ve(l),{list:T,total:o}=R;s.total=o,(T||[]).forEach(t=>{t.quotaOccupationDesc=t.quotaOccupation-5e-4>0?`${(t.quotaOccupation*100).toFixed(1)}%`:"0",t.durationDesc=ce(t.duration||0),t.durationDisplay=pe(t.duration||0),t.fileSizeDesc=de(t.fileSize),O.push(t)})}catch{}finally{a.value=!1}}function F(l){l.container!=="external"&&Y.confirm({title:e("releaseOptModalTitle"),content:"",okText:"",cancelText:"",onOk:()=>{B(l)}})}async function B(l){try{G.value=!0,await le({optimizerGroup:l.groupName,jobId:l.jobId}),v(!0),C("refreshCurGroupInfo")}finally{G.value=!1}}function D({current:l=s.current,pageSize:R=s.pageSize}){s.current=l;const T=R!==s.pageSize;s.pageSize=R,v(T)}function W(l){const{catalog:R,database:T,tableName:o}=l.tableIdentifier;z.push({path:"/tables",query:{catalog:R,db:T,table:o}})}return J(()=>{v()}),(l,R)=>{const T=m("a-table"),o=m("u-loading");return b(),N(U,null,[x("div",Ne,[p(T,{class:"ant-table-common",columns:d.value,"data-source":c.value,pagination:s,loading:a.value,onChange:D},{bodyCell:h(({column:t,record:y})=>[t.dataIndex==="tableName"?(b(),N("span",{key:0,title:y.tableName,class:"primary-link",onClick:K=>W(y)},I(y.tableName),9,Oe)):w("",!0),t.dataIndex==="durationDisplay"?(b(),N("span",{key:1,title:y.durationDesc},I(y.durationDisplay),9,Me)):w("",!0),t.dataIndex==="optimizeStatus"?(b(),N(U,{key:2},[x("span",{style:ie({"background-color":(P(r)[y.optimizeStatus]||{}).color}),class:"status-icon"},null,4),x("span",null,I(y.optimizeStatus),1)],64)):w("",!0),t.dataIndex==="operation"?(b(),N("span",{key:3,class:q(["primary-link",{disabled:y.container==="external"}]),onClick:K=>F(y)},I(P(e)("release")),11,De)):w("",!0)]),_:1},8,["columns","data-source","pagination","loading"])]),G.value?(b(),j(o,{key:0})):w("",!0)],64)}}}),Ee=ae(Pe,[["__scopeId","data-v-b9f88b2c"]]),je=V({__name:"GroupModal",props:{edit:{type:Boolean},editRecord:{}},emits:["cancel","refresh"],setup(n,{emit:f}){const{t:e}=H(),z=k(oe()),u=n,C=S({containerList:[]});async function r(){const c=(await ze()||[]).map(v=>({label:v,value:v}));C.value.containerList=c}const a=k({name:"",container:void 0,properties:{}}),G=S(!1),_=f,i=()=>{_("cancel")},s=S(),g=S(),O=()=>{s.value.validateFields().then(async()=>{try{const d=await g.value.getProperties(),c={name:a.name,container:a.container,properties:d};u.edit?await Ge(c):await ke(c),ee.success(`${e("save")} ${e("success")}`),_("refresh")}catch{ee.error(`${e("save")} ${e("failed")}`)}})};return J(()=>{var d,c,v;r(),u.edit&&(a.name=(d=u.editRecord)==null?void 0:d.name,a.container=(c=u.editRecord)==null?void 0:c.container,a.properties=(v=u.editRecord)==null?void 0:v.resourceGroup.properties)}),(d,c)=>{const v=m("a-input"),M=m("a-form-item"),A=m("a-select"),F=m("a-form"),B=m("a-modal");return b(),j(B,{visible:!0,title:d.edit?d.$t("editgroup"):d.$t("addgroup"),confirmLoading:G.value,closable:!1,class:"group-modal",onOk:O,onCancel:i},{default:h(()=>[p(F,{ref_key:"formRef",ref:s,model:a,class:"label-120"},{default:h(()=>[p(M,{name:"name",label:d.$t("name"),rules:[{required:!0,message:`${z.groupNamePh}`}]},{default:h(()=>[p(v,{value:a.name,"onUpdate:value":c[0]||(c[0]=D=>a.name=D),placeholder:z.groupNamePh,disabled:d.edit},null,8,["value","placeholder","disabled"])]),_:1},8,["label","rules"]),p(M,{name:"container",label:d.$t("container"),rules:[{required:!0,message:`${z.groupContainer}`}]},{default:h(()=>[p(A,{value:a.container,"onUpdate:value":c[1]||(c[1]=D=>a.container=D),showSearch:!0,options:C.value.containerList,placeholder:z.groupContainer},null,8,["value","options","placeholder"])]),_:1},8,["label","rules"]),p(M,{label:d.$t("properties")},null,8,["label"]),p(M,null,{default:h(()=>[p(he,{propertiesObj:a.properties,isEdit:!0,ref_key:"propertiesRef",ref:g},null,8,["propertiesObj"])]),_:1})]),_:1},8,["model"])]),_:1},8,["title","confirmLoading"])}}}),qe=V({name:"Resource",components:{List:xe,GroupModal:je,TableList:Ee},setup(){const{t:n}=H(),f=te(),e=me(),z=E([{label:n("optimizergroup"),value:"optimizergroup"},{label:n("optimizers"),value:"optimizers"}]),u=k(oe()),C=k(ne()),r=k({activeTab:"optimizergroup",showGroupModal:!1,groupEdit:!1,groupEditRecord:{},groupKeyCount:1,showTab:!1});re(()=>e.query,_=>{r.activeTab=_.tab||"tables"},{immediate:!0});const a=_=>{_?(r.groupEdit=!0,r.groupEditRecord={..._}):r.groupEdit=!1,r.showGroupModal=!0},G=_=>{const i={...e.query};i.tab=_,f.replace({query:{...i}})};return J(()=>{r.showTab=!0}),{placeholder:u,pagination:C,...fe(r),tabConfig:z,onChangeTab:G,editGroup:a,t:n}}}),Ae={class:"border-wrap"},Fe={class:"resource-wrap"},Be={class:"content"};function Ke(n,f,e,z,u,C){const r=m("TableList"),a=m("a-tab-pane"),G=m("List"),_=m("a-button"),i=m("a-tabs"),s=m("GroupModal");return b(),N("div",Ae,[x("div",Fe,[x("div",Be,[p(i,{activeKey:n.activeTab,"onUpdate:activeKey":f[1]||(f[1]=g=>n.activeTab=g),destroyInactiveTabPane:"",onChange:n.onChangeTab},{default:h(()=>[p(a,{key:"tables",tab:n.t("tables"),class:q([n.activeTab==="tables"?"active":""])},{default:h(()=>[p(r,{curGroupName:"all",type:"tables"})]),_:1},8,["tab","class"]),p(a,{key:"optimizers",tab:n.t("optimizers"),class:q([n.activeTab==="optimizers"?"active":""])},{default:h(()=>[p(G,{type:"optimizers"})]),_:1},8,["tab","class"]),p(a,{key:"optimizergroup",tab:n.t("optimizergroup"),class:q([n.activeTab==="optimizergroup"?"active":""])},{default:h(()=>[p(_,{type:"primary",class:"g-mb-16",onClick:f[0]||(f[0]=g=>n.editGroup(null))},{default:h(()=>[se(I(n.t("addgroup")),1)]),_:1}),(b(),j(G,{key:n.groupKeyCount,type:"optimizergroup",onEditGroup:n.editGroup},null,8,["onEditGroup"]))]),_:1},8,["tab","class"])]),_:1},8,["activeKey","onChange"])])]),n.showGroupModal?(b(),j(s,{key:0,edit:n.groupEdit,editRecord:n.groupEditRecord,onCancel:f[2]||(f[2]=g=>n.showGroupModal=!1),onRefresh:f[3]||(f[3]=g=>{n.groupKeyCount++,n.showGroupModal=!1})},null,8,["edit","editRecord"])):w("",!0)])}const Ye=ae(qe,[["render",Ke],["__scopeId","data-v-556157ca"]]);export{Ye as default};