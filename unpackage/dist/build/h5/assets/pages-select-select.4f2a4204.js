import{j as e,m as s,B as t,s as a,C as l,o as p,a as c,f as n,w as r,F as o,i,g as u,c as d,d as f,p as m,h as _,q as g}from"./index-dc4240aa.js";import{_ as y}from"./uni-popup.e565c3b9.js";import{r as k}from"./uni-app.es.3b71752e.js";import{_ as C}from"./_plugin-vue_export-helper.1b428a4d.js";const S="/assets/select_dot-a9f78814.png";const h=C({data:()=>({currentSelect:1}),onReady(){e("XieYi")||this.$refs.popup.open("center")},methods:{userAgreement(){s({url:"/pages/agreement/agreement?data="+encodeURIComponent(JSON.stringify({typeStr:"1",title:"用户协议"}))})},privacyAgreement(){s({url:"/pages/agreement/agreement?data="+encodeURIComponent(JSON.stringify({typeStr:"2",title:"隐私协议"}))})},cancel(){switch(t().platform){case"android":plus.runtime.quit();break;case"ios":plus.ios.import("UIApplication").sharedApplication().performSelector("exit")}},closePopup(){this.$refs.popup.close(),a("XieYi",1)},selectType(e){this.currentSelect=e},enter(){a("BKType",this.currentSelect),l({url:"/pages/study/study"})}}},[["render",function(e,s,t,a,l,C){const h=i,x=m,A=_,j=k(g("uni-popup"),y);return p(),c(o,null,[n(h,null,{default:r((()=>[n(h,{class:"title"},{default:r((()=>[u("选择适合你的学习板块")])),_:1}),n(h,{class:"item"},{default:r((()=>[n(x,{onClick:s[0]||(s[0]=e=>C.selectType(1)),class:"item-image d-flex flex-fill",src:"/assets/select_type_1-7a4e8f44.png"}),1==l.currentSelect?(p(),d(x,{key:0,class:"select-dot",src:S})):f("",!0)])),_:1}),n(h,{class:"item"},{default:r((()=>[n(x,{onClick:s[1]||(s[1]=e=>C.selectType(2)),class:"item-image d-flex flex-fill",src:"/assets/select_type_2-5f2ea3db.png"}),2==l.currentSelect?(p(),d(x,{key:0,class:"select-dot",src:S})):f("",!0)])),_:1}),n(h,{onClick:C.enter,class:"enter"},{default:r((()=>[u("进入")])),_:1},8,["onClick"])])),_:1}),n(j,{ref:"popup",type:"center"},{default:r((()=>[n(h,{class:"popup-content"},{default:r((()=>[n(h,{class:"popup-title"},{default:r((()=>[u("欢迎下载并使用")])),_:1}),n(h,{class:"popup-des"},{default:r((()=>[u(" 在使用前，请您务必审慎阅读、充分理解“用户协议”和“隐私政策”各条款，包括但不限于：为了向您提供内容分析等服务，我们需要收集您的设备信息、操作日志等个人信息。您可以在“手机设置”中查看、变更、删除个人信息并管理您的授权。您可仔细阅读 "),n(A,{onClick:C.userAgreement,class:"agreement"},{default:r((()=>[u("《用户协议》")])),_:1},8,["onClick"]),u("和"),n(A,{onClick:C.privacyAgreement,class:"agreement"},{default:r((()=>[u("《隐私政策》")])),_:1},8,["onClick"]),u("了解详细信息。 ")])),_:1}),n(h,{class:"popup-des"},{default:r((()=>[u("如您同意，请点击“同意”开始接受我们的服务。")])),_:1}),n(h,{class:"popup-bt-bg"},{default:r((()=>[n(h,{onClick:C.cancel,class:"popup-cancel"},{default:r((()=>[u("取消")])),_:1},8,["onClick"]),n(h,{onClick:C.closePopup,class:"popup-confim"},{default:r((()=>[u("确定")])),_:1},8,["onClick"])])),_:1})])),_:1})])),_:1},512)],64)}],["__scopeId","data-v-595d3667"]]);export{h as default};