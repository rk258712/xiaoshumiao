import{j as e,k as t,s,y as i,z as a,A as l,m as r,o as n,c as o,w as u,i as c,f as p,g as d,t as h,a as f,b as g,F as y,q as m,p as T,h as b}from"./index-dc4240aa.js";import{_}from"./uni-nav-bar.f89a8f7c.js";import{r as x}from"./uni-app.es.3b71752e.js";import{_ as B}from"./fui-tabs.c922ba75.js";import{_ as C}from"./_plugin-vue_export-helper.1b428a4d.js";import"./uni-icons.27c1c678.js";const K=C({data:()=>({BKType:e("BKType"),types:[],currentIndex:0,list:[],user:null}),onShow(){this.user=t(),this.BKType=e("BKType"),0==this.types.length&&this.getTypes()},methods:{switchType(){1==this.BKType?this.BKType=2:this.BKType=1,s("BKType",this.BKType),this.currentIndex=0,this.getTypes()},onClickTab(e){this.currentIndex=e.index,this.getPaperList()},getTypes(){let e=this;this.$request.get("/api/index/getType",{}).then((t=>{e.types=t.data,e.getPaperList()}),(function(e){i({title:e.msg,duration:2e3,icon:"none"})}))},getPaperList(){a({title:""});let e=this.types[this.currentIndex],t=this;this.$request.get("/api/paper/paper_list",{type:e.id}).then((e=>{l(),t.list=e.rows}),(function(e){l(),i({title:e.msg,duration:2e3,icon:"none"})}))},goDetail(e){1!=e.chargeStatus?r({url:"/pages/datum/datumDetail?data="+encodeURIComponent(JSON.stringify(e))}):r({url:"/pages/buy/buy"})}},computed:{titles(){return this.types.map((e=>e.title))},coursePrice:()=>function(e){let t=e.price;return 1==this.user.isVip&&(t=e.vipPrice),t.toFixed(2)}}},[["render",function(e,t,s,i,a,l){const r=c,C=x(m("uni-nav-bar"),_),K=x(m("fui-tabs"),B),k=T,w=b;return n(),o(r,null,{default:u((()=>[p(C,{statusBar:"",border:!1,fixed:"true",rightWidth:"50vw",leftWidth:"50vw",height:"60px"},{left:u((()=>[p(r,{onClick:l.switchType,class:"d-flex align-items-center"},{default:u((()=>[p(r,{class:"left-title"},{default:u((()=>[d(h(1==a.BKType?"艺考学习":"兴趣培训"),1)])),_:1}),p(r,{class:"swich-bg"},{default:u((()=>[d(h(1==a.BKType?"切换兴趣版":"切换艺考版"),1)])),_:1})])),_:1},8,["onClick"])])),_:1}),p(K,{tabs:l.titles,scroll:"",center:!0,short:!1,fontWeight:"bold",selectedFontWeight:"bold",color:"#333333","selected-color":"#70CAA3",size:"28","selected-size":"28","slider-background":"#70CAA3",bottom:"15",scale:"1.0",onChange:l.onClickTab},null,8,["tabs","onChange"]),p(r,{class:"list-bg"},{default:u((()=>[(n(!0),f(y,null,g(a.list,((t,s)=>(n(),o(r,{onClick:e=>l.goDetail(t),class:"list-item"},{default:u((()=>[p(k,{class:"item-image",src:e.$request.imageBaseUrl+t.iconUrl},null,8,["src"]),p(r,{class:"course-info"},{default:u((()=>[p(w,null,{default:u((()=>[d(h(t.title),1)])),_:2},1024),p(r,{class:"price-text"},{default:u((()=>[d("¥ "+h(l.coursePrice(t)),1)])),_:2},1024)])),_:2},1024)])),_:2},1032,["onClick"])))),256))])),_:1})])),_:1})}],["__scopeId","data-v-affaddf9"]]);export{K as default};
