import{j as e,I as s,s as t,m as a,M as l,y as i,o,c as r,w as n,i as c,f as d,g as f,d as u,a as h,b as p,F as m,v as y,q as g,h as x,t as _}from"./index-dc4240aa.js";import{_ as k}from"./uni-nav-bar.f89a8f7c.js";import{r as w}from"./uni-app.es.3b71752e.js";import{_ as H}from"./_plugin-vue_export-helper.1b428a4d.js";import"./uni-icons.27c1c678.js";const C=H({data:()=>({searchValue:"",searchHot:[],list:[]}),onLoad(){this.getSearchIndex();let s=e("searchHot");s&&(this.searchHot=s);let t=e("searchHistroy");t&&(this.list=JSON.parse(t))},methods:{onClickLeft(){s()},getSearchIndex(){let e=this;this.$request.get("/api/search/index",{}).then((s=>{e.searchHot=s.rows,t("searchHot",s.rows)}),(function(e){}))},goResult(e){let s={keyword:e};a({url:"/pages/study/courseList/courseList?data="+encodeURIComponent(JSON.stringify(s))}),this.addHistory(e)},search(){this.goResult(this.searchValue)},addHistory(e){if(!e)return;const s=this.list.findIndex((s=>s==e));console.log(s),console.log("======"),-1!==s?(this.list.splice(s,1),this.list.unshift(e)):this.list.unshift(e),t("searchHistroy",JSON.stringify(this.list))},clearHistory(){l("searchHistory"),this.list=[],i({title:"操作成功",duration:2e3,icon:"none"})}}},[["render",function(e,s,t,a,l,i){const H=y("van-icon"),C=y("van-search"),b=c,j=w(g("uni-nav-bar"),k),v=x;return o(),r(b,null,{default:n((()=>[d(j,{statusBar:"",fixed:!0,border:!1,"left-width":"22px","right-width":"0px"},{left:n((()=>[d(H,{onClick:i.onClickLeft,name:"arrow-left",size:"22",color:"#333"},null,8,["onClick"])])),default:n((()=>[d(b,{style:{display:"flex","align-items":"center","flex-grow":"1"}},{default:n((()=>[d(C,{modelValue:l.searchValue,"onUpdate:modelValue":s[0]||(s[0]=e=>l.searchValue=e),shape:"round",background:"#ffffff",placeholder:"请输入要查找的内容",style:{"flex-grow":"1"},clearable:!1,onSearch:i.search},null,8,["modelValue","onSearch"])])),_:1})])),_:1}),d(b,{class:"p-x-md p-y-md"},{default:n((()=>[d(b,{class:"d-flex justify-between p-y-md"},{default:n((()=>[d(v,{class:"section-title"},{default:n((()=>[f("最近搜索")])),_:1}),0!=l.list.length?(o(),r(v,{key:0,class:"section-title-right",onClick:i.clearHistory},{default:n((()=>[f("清空")])),_:1},8,["onClick"])):u("",!0)])),_:1}),d(b,{class:"d-flex flex-wrap fo-13"},{default:n((()=>[(o(!0),h(m,null,p(l.list,((e,s)=>(o(),r(b,{key:s,class:"item",onClick:s=>i.goResult(e)},{default:n((()=>[f(_(e),1)])),_:2},1032,["onClick"])))),128))])),_:1}),d(b,{class:"d-flex justify-between p-y-md"},{default:n((()=>[d(v,{class:"section-title"},{default:n((()=>[f("热门搜索")])),_:1})])),_:1}),d(b,{class:"d-flex flex-wrap fo-13"},{default:n((()=>[(o(!0),h(m,null,p(l.searchHot,((e,s)=>(o(),r(b,{key:s,class:"item",onClick:s=>i.goResult(e.title)},{default:n((()=>[f(_(e.title),1)])),_:2},1032,["onClick"])))),128))])),_:1})])),_:1})])),_:1})}],["__scopeId","data-v-1d4cabf5"]]);export{C as default};
