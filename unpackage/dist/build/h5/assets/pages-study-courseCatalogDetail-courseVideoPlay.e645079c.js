import{m as e,o as t,c as o,w as a,i as s,f as n,g as l}from"./index-dc4240aa.js";import{_ as i}from"./_plugin-vue_export-helper.1b428a4d.js";const r=i({data:()=>({cateLogDetail:null}),onLoad(e){let t=JSON.parse(decodeURIComponent(e.data));console.log(t),this.cateLogDetail=t},methods:{goStudy(){let t={cateLogDetail:this.cateLogDetail,fromType:1};e({url:"/pages/exercise/question/question?data="+encodeURIComponent(JSON.stringify(t))})}}},[["render",function(e,i,r,c,d,u){const g=s;return t(),o(g,null,{default:a((()=>[n(g,{onClick:u.goStudy,class:""},{default:a((()=>[l("继续学习")])),_:1},8,["onClick"])])),_:1})}]]);export{r as default};