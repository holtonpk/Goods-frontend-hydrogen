import{r as c,a,j as $}from"./index.82c951e8.js";import{a as pe}from"./ca60a7d6.js";import{p as fe,l as me,g as L,b as T,e as w,h as B,f as U,d as z,r as he,k as ge,u as be}from"./abf02db0.js";import{T as Ce}from"./d462f1cc.js";import{_ as I,c as E}from"./e23961ad.js";import{_ as s}from"./acc1a395.js";import{u as le,i as K,c as se,a as ve}from"./52a93b56.js";import{B as xe}from"./282be278.js";import{c as ye}from"./07e4cb3e.js";import"./af829185.js";import"./bfd11c3b.js";const Re=["sx"],Fe=e=>{const o={systemProps:{},otherProps:{}};return Object.keys(e).forEach(t=>{fe[t]?o.systemProps[t]=e[t]:o.otherProps[t]=e[t]}),o};function we(e){const{sx:o}=e,t=I(e,Re),{systemProps:r,otherProps:n}=Fe(t);let l;return Array.isArray(o)?l=[r,...o]:typeof o=="function"?l=(...u)=>{const d=o(...u);return me(d)?s({},r,d):r}:l=s({},r,o),s({},n,{sx:l})}function Pe(e){return L("MuiTypography",e)}T("MuiTypography",["root","h1","h2","h3","h4","h5","h6","subtitle1","subtitle2","body1","body2","inherit","button","caption","overline","alignLeft","alignRight","alignCenter","alignJustify","noWrap","gutterBottom","paragraph"]);const Se=["align","className","component","gutterBottom","noWrap","paragraph","variant","variantMapping"],ke=e=>{const{align:o,gutterBottom:t,noWrap:r,paragraph:n,variant:l,classes:u}=e,d={root:["root",l,e.align!=="inherit"&&`align${B(o)}`,t&&"gutterBottom",r&&"noWrap",n&&"paragraph"]};return z(d,Pe,u)},$e=w("span",{name:"MuiTypography",slot:"Root",overridesResolver:(e,o)=>{const{ownerState:t}=e;return[o.root,t.variant&&o[t.variant],t.align!=="inherit"&&o[`align${B(t.align)}`],t.noWrap&&o.noWrap,t.gutterBottom&&o.gutterBottom,t.paragraph&&o.paragraph]}})(({theme:e,ownerState:o})=>s({margin:0},o.variant&&e.typography[o.variant],o.align!=="inherit"&&{textAlign:o.align},o.noWrap&&{overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},o.gutterBottom&&{marginBottom:"0.35em"},o.paragraph&&{marginBottom:16})),ee={h1:"h1",h2:"h2",h3:"h3",h4:"h4",h5:"h5",h6:"h6",subtitle1:"h6",subtitle2:"h6",body1:"p",body2:"p",inherit:"p"},Be={primary:"primary.main",textPrimary:"text.primary",secondary:"secondary.main",textSecondary:"text.secondary",error:"error.main"},Ie=e=>Be[e]||e,Ne=c.exports.forwardRef(function(o,t){const r=U({props:o,name:"MuiTypography"}),n=Ie(r.color),l=we(s({},r,{color:n})),{align:u="inherit",className:d,component:f,gutterBottom:h=!1,noWrap:g=!1,paragraph:C=!1,variant:p="body1",variantMapping:m=ee}=l,b=I(l,Se),v=s({},l,{align:u,color:n,className:d,component:f,gutterBottom:h,noWrap:g,paragraph:C,variant:p,variantMapping:m}),i=f||(C?"p":m[p]||ee[p])||"span",x=ke(v);return a($e,s({as:i,ref:t,ownerState:v,className:E(x.root,d)},b))});var oe=Ne;function ie({props:e,states:o,muiFormControl:t}){return o.reduce((r,n)=>(r[n]=e[n],t&&typeof e[n]=="undefined"&&(r[n]=t[n]),r),{})}const Me=c.exports.createContext();var ce=Me;function Q(){return c.exports.useContext(ce)}function te(e){return e!=null&&!(Array.isArray(e)&&e.length===0)}function We(e,o=!1){return e&&(te(e.value)&&e.value!==""||o&&te(e.defaultValue)&&e.defaultValue!=="")}function Le(e){return e.startAdornment}function Te(e){return L("PrivateSwitchBase",e)}T("PrivateSwitchBase",["root","checked","disabled","input","edgeStart","edgeEnd"]);const ze=["autoFocus","checked","checkedIcon","className","defaultChecked","disabled","disableFocusRipple","edge","icon","id","inputProps","inputRef","name","onBlur","onChange","onFocus","readOnly","required","tabIndex","type","value"],Ge=e=>{const{classes:o,checked:t,disabled:r,edge:n}=e,l={root:["root",t&&"checked",r&&"disabled",n&&`edge${B(n)}`],input:["input"]};return z(l,Te,o)},Ue=w(xe)(({ownerState:e})=>s({padding:9,borderRadius:"50%"},e.edge==="start"&&{marginLeft:e.size==="small"?-3:-12},e.edge==="end"&&{marginRight:e.size==="small"?-3:-12})),Ee=w("input")({cursor:"inherit",position:"absolute",opacity:0,width:"100%",height:"100%",top:0,left:0,margin:0,padding:0,zIndex:1}),_e=c.exports.forwardRef(function(o,t){const{autoFocus:r,checked:n,checkedIcon:l,className:u,defaultChecked:d,disabled:f,disableFocusRipple:h=!1,edge:g=!1,icon:C,id:p,inputProps:m,inputRef:b,name:v,onBlur:i,onChange:x,onFocus:y,readOnly:R,required:D,tabIndex:q,type:N,value:G}=o,_=I(o,ze),[M,j]=le({controlled:n,default:Boolean(d),name:"SwitchBase",state:"checked"}),P=Q(),H=k=>{y&&y(k),P&&P.onFocus&&P.onFocus(k)},J=k=>{i&&i(k),P&&P.onBlur&&P.onBlur(k)},Z=k=>{if(k.nativeEvent.defaultPrevented)return;const Y=k.target.checked;j(Y),x&&x(k,Y)};let F=f;P&&typeof F=="undefined"&&(F=P.disabled);const S=N==="checkbox"||N==="radio",W=s({},o,{checked:M,disabled:F,disableFocusRipple:h,edge:g}),X=Ge(W);return $(Ue,s({component:"span",className:E(X.root,u),centerRipple:!0,focusRipple:!h,disabled:F,tabIndex:null,role:void 0,onFocus:H,onBlur:J,ownerState:W,ref:t},_,{children:[a(Ee,s({autoFocus:r,checked:n,defaultChecked:d,className:X.input,disabled:F,id:S&&p,name:v,onChange:Z,readOnly:R,ref:b,required:D,ownerState:W,tabIndex:q,type:N},N==="checkbox"&&G===void 0?{}:{value:G},m)),M?l:C]}))});var Ae=_e;function Oe(e){return L("MuiFormControl",e)}T("MuiFormControl",["root","marginNone","marginNormal","marginDense","fullWidth","disabled"]);const Ve=["children","className","color","component","disabled","error","focused","fullWidth","hiddenLabel","margin","required","size","variant"],De=e=>{const{classes:o,margin:t,fullWidth:r}=e,n={root:["root",t!=="none"&&`margin${B(t)}`,r&&"fullWidth"]};return z(n,Oe,o)},qe=w("div",{name:"MuiFormControl",slot:"Root",overridesResolver:({ownerState:e},o)=>s({},o.root,o[`margin${B(e.margin)}`],e.fullWidth&&o.fullWidth)})(({ownerState:e})=>s({display:"inline-flex",flexDirection:"column",position:"relative",minWidth:0,padding:0,margin:0,border:0,verticalAlign:"top"},e.margin==="normal"&&{marginTop:16,marginBottom:8},e.margin==="dense"&&{marginTop:8,marginBottom:4},e.fullWidth&&{width:"100%"})),je=c.exports.forwardRef(function(o,t){const r=U({props:o,name:"MuiFormControl"}),{children:n,className:l,color:u="primary",component:d="div",disabled:f=!1,error:h=!1,focused:g,fullWidth:C=!1,hiddenLabel:p=!1,margin:m="none",required:b=!1,size:v="medium",variant:i="outlined"}=r,x=I(r,Ve),y=s({},r,{color:u,component:d,disabled:f,error:h,fullWidth:C,hiddenLabel:p,margin:m,required:b,size:v,variant:i}),R=De(y),[D,q]=c.exports.useState(()=>{let F=!1;return n&&c.exports.Children.forEach(n,S=>{if(!K(S,["Input","Select"]))return;const W=K(S,["Select"])?S.props.input:S;W&&Le(W.props)&&(F=!0)}),F}),[N,G]=c.exports.useState(()=>{let F=!1;return n&&c.exports.Children.forEach(n,S=>{!K(S,["Input","Select"])||We(S.props,!0)&&(F=!0)}),F}),[_,M]=c.exports.useState(!1);f&&_&&M(!1);const j=g!==void 0&&!f?g:_;let P;const H=c.exports.useCallback(()=>{G(!0)},[]),J=c.exports.useCallback(()=>{G(!1)},[]),Z={adornedStart:D,setAdornedStart:q,color:u,disabled:f,error:h,filled:N,focused:j,fullWidth:C,hiddenLabel:p,size:v,onBlur:()=>{M(!1)},onEmpty:J,onFilled:H,onFocus:()=>{M(!0)},registerEffect:P,required:b,variant:i};return a(ce.Provider,{value:Z,children:a(qe,s({as:d,ownerState:y,className:E(R.root,l),ref:t},x,{children:n}))})});var He=je;function Je(e){return L("MuiFormControlLabel",e)}const Ze=T("MuiFormControlLabel",["root","labelPlacementStart","labelPlacementTop","labelPlacementBottom","disabled","label","error"]);var A=Ze;const Ke=["checked","className","componentsProps","control","disabled","disableTypography","inputRef","label","labelPlacement","name","onChange","value"],Qe=e=>{const{classes:o,disabled:t,labelPlacement:r,error:n}=e,l={root:["root",t&&"disabled",`labelPlacement${B(r)}`,n&&"error"],label:["label",t&&"disabled"]};return z(l,Je,o)},Xe=w("label",{name:"MuiFormControlLabel",slot:"Root",overridesResolver:(e,o)=>{const{ownerState:t}=e;return[{[`& .${A.label}`]:o.label},o.root,o[`labelPlacement${B(t.labelPlacement)}`]]}})(({theme:e,ownerState:o})=>s({display:"inline-flex",alignItems:"center",cursor:"pointer",verticalAlign:"middle",WebkitTapHighlightColor:"transparent",marginLeft:-11,marginRight:16,[`&.${A.disabled}`]:{cursor:"default"}},o.labelPlacement==="start"&&{flexDirection:"row-reverse",marginLeft:16,marginRight:-11},o.labelPlacement==="top"&&{flexDirection:"column-reverse",marginLeft:16},o.labelPlacement==="bottom"&&{flexDirection:"column",marginLeft:16},{[`& .${A.label}`]:{[`&.${A.disabled}`]:{color:(e.vars||e).palette.text.disabled}}})),Ye=c.exports.forwardRef(function(o,t){const r=U({props:o,name:"MuiFormControlLabel"}),{className:n,componentsProps:l={},control:u,disabled:d,disableTypography:f,label:h,labelPlacement:g="end"}=r,C=I(r,Ke),p=Q();let m=d;typeof m=="undefined"&&typeof u.props.disabled!="undefined"&&(m=u.props.disabled),typeof m=="undefined"&&p&&(m=p.disabled);const b={disabled:m};["checked","name","onChange","value","inputRef"].forEach(R=>{typeof u.props[R]=="undefined"&&typeof r[R]!="undefined"&&(b[R]=r[R])});const v=ie({props:r,muiFormControl:p,states:["error"]}),i=s({},r,{disabled:m,labelPlacement:g,error:v.error}),x=Qe(i);let y=h;return y!=null&&y.type!==oe&&!f&&(y=a(oe,s({component:"span",className:x.label},l.typography,{children:y}))),$(Xe,s({className:E(x.root,n),ownerState:i,ref:t},C,{children:[c.exports.cloneElement(u,b),y]}))});var O=Ye;function eo(e){return L("MuiFormGroup",e)}T("MuiFormGroup",["root","row","error"]);const oo=["className","row"],to=e=>{const{classes:o,row:t,error:r}=e;return z({root:["root",t&&"row",r&&"error"]},eo,o)},ro=w("div",{name:"MuiFormGroup",slot:"Root",overridesResolver:(e,o)=>{const{ownerState:t}=e;return[o.root,t.row&&o.row]}})(({ownerState:e})=>s({display:"flex",flexDirection:"column",flexWrap:"wrap"},e.row&&{flexDirection:"row"})),no=c.exports.forwardRef(function(o,t){const r=U({props:o,name:"MuiFormGroup"}),{className:n,row:l=!1}=r,u=I(r,oo),d=Q(),f=ie({props:r,muiFormControl:d,states:["error"]}),h=s({},r,{row:l,error:f.error}),g=to(h);return a(ro,s({className:E(g.root,n),ownerState:h,ref:t},u))});var ao=no,lo=se(a("path",{d:"M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"}),"RadioButtonUnchecked"),so=se(a("path",{d:"M8.465 8.465C9.37 7.56 10.62 7 12 7C14.76 7 17 9.24 17 12C17 13.38 16.44 14.63 15.535 15.535C14.63 16.44 13.38 17 12 17C9.24 17 7 14.76 7 12C7 10.62 7.56 9.37 8.465 8.465Z"}),"RadioButtonChecked");const io=w("span")({position:"relative",display:"flex"}),co=w(lo)({transform:"scale(1)"}),uo=w(so)(({theme:e,ownerState:o})=>s({left:0,position:"absolute",transform:"scale(0)",transition:e.transitions.create("transform",{easing:e.transitions.easing.easeIn,duration:e.transitions.duration.shortest})},o.checked&&{transform:"scale(1)",transition:e.transitions.create("transform",{easing:e.transitions.easing.easeOut,duration:e.transitions.duration.shortest})}));function de(e){const{checked:o=!1,classes:t={},fontSize:r}=e,n=s({},e,{checked:o});return $(io,{className:t.root,ownerState:n,children:[a(co,{fontSize:r,className:t.background,ownerState:n}),a(uo,{fontSize:r,className:t.dot,ownerState:n})]})}const po=c.exports.createContext(void 0);var ue=po;function fo(){return c.exports.useContext(ue)}function mo(e){return L("MuiRadio",e)}const ho=T("MuiRadio",["root","checked","disabled","colorPrimary","colorSecondary"]);var re=ho;const go=["checked","checkedIcon","color","icon","name","onChange","size"],bo=e=>{const{classes:o,color:t}=e,r={root:["root",`color${B(t)}`]};return s({},o,z(r,mo,o))},Co=w(Ae,{shouldForwardProp:e=>he(e)||e==="classes",name:"MuiRadio",slot:"Root",overridesResolver:(e,o)=>{const{ownerState:t}=e;return[o.root,o[`color${B(t.color)}`]]}})(({theme:e,ownerState:o})=>s({color:(e.vars||e).palette.text.secondary,"&:hover":{backgroundColor:e.vars?`rgba(${o.color==="default"?e.vars.palette.action.activeChannel:e.vars.palette[o.color].mainChannel} / ${e.vars.palette.action.hoverOpacity})`:ge(o.color==="default"?e.palette.action.active:e.palette[o.color].main,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},o.color!=="default"&&{[`&.${re.checked}`]:{color:(e.vars||e).palette[o.color].main}},{[`&.${re.disabled}`]:{color:(e.vars||e).palette.action.disabled}}));function vo(e,o){return typeof o=="object"&&o!==null?e===o:String(e)===String(o)}const ne=a(de,{checked:!0}),ae=a(de,{}),xo=c.exports.forwardRef(function(o,t){var r,n;const l=U({props:o,name:"MuiRadio"}),{checked:u,checkedIcon:d=ne,color:f="primary",icon:h=ae,name:g,onChange:C,size:p="medium"}=l,m=I(l,go),b=s({},l,{color:f,size:p}),v=bo(b),i=fo();let x=u;const y=ye(C,i&&i.onChange);let R=g;return i&&(typeof x=="undefined"&&(x=vo(i.value,l.value)),typeof R=="undefined"&&(R=i.name)),a(Co,s({type:"radio",icon:c.exports.cloneElement(h,{fontSize:(r=ae.props.fontSize)!=null?r:p}),checkedIcon:c.exports.cloneElement(d,{fontSize:(n=ne.props.fontSize)!=null?n:p}),ownerState:b,classes:v,name:R,checked:x,onChange:y,ref:t},m))});var V=xo;const yo=["actions","children","defaultValue","name","onChange","value"],Ro=c.exports.forwardRef(function(o,t){const{actions:r,children:n,defaultValue:l,name:u,onChange:d,value:f}=o,h=I(o,yo),g=c.exports.useRef(null),[C,p]=le({controlled:f,default:l,name:"RadioGroup"});c.exports.useImperativeHandle(r,()=>({focus:()=>{let i=g.current.querySelector("input:not(:disabled):checked");i||(i=g.current.querySelector("input:not(:disabled)")),i&&i.focus()}}),[]);const m=be(t,g),b=i=>{p(i.target.value),d&&d(i,i.target.value)},v=ve(u);return a(ue.Provider,{value:{name:v,onChange:b,value:C},children:a(ao,s({role:"radiogroup",ref:m},h,{children:n}))})});var Fo=Ro;const To=()=>{const e=w(Ce)({"& input:valid + fieldset":{borderColor:"white",borderWidth:2},"& input:invalid + fieldset":{borderColor:"red",borderWidth:2},"& input:valid:focus + fieldset":{borderColor:"white"},input:{"&::placeholder":{color:"gray"},color:"white"}});return $("div",{className:"grid w-full grid-rows-5 px-6 mx-auto mt-10 bg-c2 md:shadow-xl md:p-6 md:gap-6 md:rounded-t-xl rounded-t-2xl",children:[$("div",{className:"grid items-center grid-cols-1 md:grid-cols-2 md:gap-10 gap-4 mb-4 mt-4 md:mt-0",children:[a(e,{fullWidth:!0,name:"firstName",type:"text",label:"First Name",variant:"outlined",InputLabelProps:{style:{color:"#fff"}},id:"validation-outlined-input"}),a(e,{fullWidth:!0,name:"lastName",type:"text",label:"Last Name",variant:"outlined",id:"validation-outlined-input",InputLabelProps:{style:{color:"#fff"}}})]}),$("div",{className:"grid items-center  md:gap-10  grid-cols-1 md:grid-cols-2 gap-4",children:[a(e,{fullWidth:!0,name:"email",type:"text",label:"Email",variant:"outlined",id:"validation-outlined-input",InputLabelProps:{style:{color:"#fff"}}}),a(e,{fullWidth:!0,name:"name",type:"phone",label:"Phone",variant:"outlined",id:"validation-outlined-input",InputLabelProps:{style:{color:"#fff"}}})]}),$(He,{children:[a("h1",{className:"text-lg font-bold text-white font-f1 text-center md:text-left",children:"What can we help you with?"}),$(Fo,{row:!0,"aria-labelledby":"demo-radio-buttons-group-label",defaultValue:"other",name:"row-radio-buttons-group",children:[a(O,{value:"orderStatus",control:a(V,{}),label:"Order Status"}),a(O,{value:"returns",control:a(V,{}),label:"Returns"}),a(O,{value:"join",control:a(V,{}),label:"Join The Team"}),a(O,{value:"other",control:a(V,{}),label:"Other"})]})]}),a("div",{className:"w-full h-fit",children:a(e,{fullWidth:!0,name:"message",type:"text",label:"Message",variant:"outlined",id:"validation-outlined-input",InputLabelProps:{style:{color:"#fff"}}})}),a("button",{className:"p-4 text-xl font-bold text-white rounded-full md:text-3xl md:p-2 h-fit bg-c4 font-c1 -mt-16 md:mt-0",children:$("div",{className:"flex flex-row items-center mx-auto w-fit",children:[a("h2",{className:"whitespace-nowrap",children:"Send Message"}),a(pe,{className:"w-4 h-4 ml-4 md:w-6 md:h-6 fill-white"})]})})]})};export{To as default};
//# sourceMappingURL=d710f438.js.map