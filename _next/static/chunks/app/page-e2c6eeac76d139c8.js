(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[931],{142:function(t,r,e){Promise.resolve().then(e.bind(e,8212))},3719:function(t,r,e){"use strict";var n=e(3950),a=e(2988),i=e(2265),o=e(4839),p=e(261),u=e(6259),h=e(8024),s=e(9281),l=e(2272),c=e(8958),g=e(7437);let f=["align","className","component","gutterBottom","noWrap","paragraph","variant","variantMapping"],m=t=>{let{align:r,gutterBottom:e,noWrap:n,paragraph:a,variant:i,classes:o}=t,p={root:["root",i,"inherit"!==t.align&&"align".concat((0,l.Z)(r)),e&&"gutterBottom",n&&"noWrap",a&&"paragraph"]};return(0,u.Z)(p,c.f,o)},d=(0,h.ZP)("span",{name:"MuiTypography",slot:"Root",overridesResolver:(t,r)=>{let{ownerState:e}=t;return[r.root,e.variant&&r[e.variant],"inherit"!==e.align&&r["align".concat((0,l.Z)(e.align))],e.noWrap&&r.noWrap,e.gutterBottom&&r.gutterBottom,e.paragraph&&r.paragraph]}})(t=>{let{theme:r,ownerState:e}=t;return(0,a.Z)({margin:0},"inherit"===e.variant&&{font:"inherit"},"inherit"!==e.variant&&r.typography[e.variant],"inherit"!==e.align&&{textAlign:e.align},e.noWrap&&{overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},e.gutterBottom&&{marginBottom:"0.35em"},e.paragraph&&{marginBottom:16})}),y={h1:"h1",h2:"h2",h3:"h3",h4:"h4",h5:"h5",h6:"h6",subtitle1:"h6",subtitle2:"h6",body1:"p",body2:"p",inherit:"p"},v={primary:"primary.main",textPrimary:"text.primary",secondary:"secondary.main",textSecondary:"text.secondary",error:"error.main"},Z=t=>v[t]||t,b=i.forwardRef(function(t,r){let e=(0,s.Z)({props:t,name:"MuiTypography"}),i=Z(e.color),u=(0,p.Z)((0,a.Z)({},e,{color:i})),{align:h="inherit",className:l,component:c,gutterBottom:v=!1,noWrap:b=!1,paragraph:x=!1,variant:k="body1",variantMapping:B=y}=u,w=(0,n.Z)(u,f),W=(0,a.Z)({},u,{align:h,color:i,className:l,component:c,gutterBottom:v,noWrap:b,paragraph:x,variant:k,variantMapping:B}),P=c||(x?"p":B[k]||y[k])||"span",S=m(W);return(0,g.jsx)(d,(0,a.Z)({as:P,ref:r,ownerState:W,className:(0,o.Z)(S.root,l)},w))});r.Z=b},8958:function(t,r,e){"use strict";e.d(r,{f:function(){return i}});var n=e(4535),a=e(7542);function i(t){return(0,a.ZP)("MuiTypography",t)}let o=(0,n.Z)("MuiTypography",["root","h1","h2","h3","h4","h5","h6","subtitle1","subtitle2","body1","body2","inherit","button","caption","overline","alignLeft","alignRight","alignCenter","alignJustify","noWrap","gutterBottom","paragraph"]);r.Z=o},8212:function(t,r,e){"use strict";e.r(r),e.d(r,{default:function(){return u}});var n=e(7437),a=e(2265),i=e(4587),o=e(3719),p=e(3643);function u(){return console.log((0,a.useContext)(p.k).beakpoints),(0,n.jsx)(i.Z,{maxWidth:"xl",children:(0,n.jsx)(o.Z,{variant:"h1",children:"Home page"})})}},3643:function(t,r,e){"use strict";e.d(r,{k:function(){return o},UiStatesProvider:function(){return p}});var n,a=e(7437),i=e(2265);(n||(n={})).setBreackpoint="setBreackpoint";let o=(0,i.createContext)({beakpoints:"xs",setState:t=>{}}),p=t=>{let[r,e]=(0,i.useReducer)((t,r)=>r.type===n.setBreackpoint?{...t}:t,{beakpoints:"xs",setState:(t,r)=>{e({type:t,newState:r})}});return(0,a.jsx)(o.Provider,{value:r,children:t.children})}}},function(t){t.O(0,[476,971,23,744],function(){return t(t.s=142)}),_N_E=t.O()}]);