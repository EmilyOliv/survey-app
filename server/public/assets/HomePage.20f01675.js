import{a as _,c as ge,r as K,k as ke,o as he,h as L,T as Se,b as we,Q as xe,w as H,C as te,g as ve,m as W,D as be,f as Me,E as Ce,F as ie,_ as _e,v as ae,G as ne,H as C,z as P,I as oe,J as X,y as Z,K as Ee,L as Fe,M as re,N as Ve}from"./index.93cfe88b.js";import{u as se,a as Re,b as Te,c as Ne,d as Ie,e as Le,f as Ae,g as ue,h as qe,i as Pe,Q as je,j as de,k as ce,l as Be}from"./QSelect.030daff4.js";import"./scroll.e1fb290a.js";const Oe={ratio:[String,Number]};function De(e,o){return _(()=>{const E=Number(e.ratio||(o!==void 0?o.value:void 0));return isNaN(E)!==!0&&E>0?{paddingBottom:`${100/E}%`}:null})}const ze=1.7778;var le=ge({name:"QImg",props:{...Oe,src:String,srcset:String,sizes:String,alt:String,crossorigin:String,decoding:String,referrerpolicy:String,draggable:Boolean,loading:{type:String,default:"lazy"},loadingShowDelay:{type:[Number,String],default:0},fetchpriority:{type:String,default:"auto"},width:String,height:String,initialRatio:{type:[Number,String],default:ze},placeholderSrc:String,errorSrc:String,fit:{type:String,default:"cover"},position:{type:String,default:"50% 50%"},imgClass:String,imgStyle:Object,noSpinner:Boolean,noNativeMenu:Boolean,noTransition:Boolean,spinnerColor:String,spinnerSize:String},emits:["load","error"],setup(e,{slots:o,emit:E}){const M=K(e.initialRatio),u=De(e,M),d=ve(),{registerTimeout:w,removeTimeout:R}=se(),{registerTimeout:O,removeTimeout:v}=se(),x=_(()=>e.placeholderSrc!==void 0?{src:e.placeholderSrc}:null),f=_(()=>e.errorSrc!==void 0?{src:e.errorSrc,__qerror:!0}:null),N=[K(null),K(x.value)],k=K(0),I=K(!1),A=K(!1),D=_(()=>`q-img q-img--${e.noNativeMenu===!0?"no-":""}menu`),J=_(()=>({width:e.width,height:e.height})),F=_(()=>`q-img__image ${e.imgClass!==void 0?e.imgClass+" ":""}q-img__image--with${e.noTransition===!0?"out":""}-transition q-img__image--`),G=_(()=>({...e.imgStyle,objectFit:e.fit,objectPosition:e.position}));function $(){if(v(),e.loadingShowDelay===0){I.value=!0;return}O(()=>{I.value=!0},e.loadingShowDelay)}function j(){v(),I.value=!1}function B({target:t}){te(d)===!1&&(R(),M.value=t.naturalHeight===0?.5:t.naturalWidth/t.naturalHeight,T(t,1))}function T(t,r){r===1e3||te(d)===!0||(t.complete===!0?p(t):w(()=>{T(t,r+1)},50))}function p(t){te(d)!==!0&&(k.value=k.value^1,N[k.value].value=null,j(),t.getAttribute("__qerror")!=="true"&&(A.value=!1),E("load",t.currentSrc||t.src))}function l(t){R(),j(),A.value=!0,N[k.value].value=f.value,N[k.value^1].value=x.value,E("error",t)}function n(t){const r=N[t].value,s={key:"img_"+t,class:F.value,style:G.value,alt:e.alt,crossorigin:e.crossorigin,decoding:e.decoding,referrerpolicy:e.referrerpolicy,height:e.height,width:e.width,loading:e.loading,fetchpriority:e.fetchpriority,"aria-hidden":"true",draggable:e.draggable,...r};return k.value===t?Object.assign(s,{class:s.class+"current",onLoad:B,onError:l}):s.class+="loaded",L("div",{class:"q-img__container absolute-full",key:"img"+t},L("img",s))}function i(){return I.value===!1?L("div",{key:"content",class:"q-img__content absolute-full q-anchor--skip"},we(o[A.value===!0?"error":"default"])):L("div",{key:"loading",class:"q-img__loading absolute-full flex flex-center"},o.loading!==void 0?o.loading():e.noSpinner===!0?void 0:[L(xe,{color:e.spinnerColor,size:e.spinnerSize})])}{let t=function(){H(()=>e.src||e.srcset||e.sizes?{src:e.src,srcset:e.srcset,sizes:e.sizes}:null,r=>{R(),A.value=!1,r===null?(j(),N[k.value^1].value=x.value):$(),N[k.value].value=r},{immediate:!0})};ke.value===!0?he(t):t()}return()=>{const t=[];return u.value!==null&&t.push(L("div",{key:"filler",style:u.value})),N[0].value!==null&&t.push(n(0)),N[1].value!==null&&t.push(n(1)),t.push(L(Se,{name:"q-transition--fade"},i)),L("div",{key:"main",class:D.value,style:J.value,role:"img","aria-label":e.alt},t)}}});const fe={date:"####/##/##",datetime:"####/##/## ##:##",time:"##:##",fulltime:"##:##:##",phone:"(###) ### - ####",card:"#### #### #### ####"},ee={"#":{pattern:"[\\d]",negate:"[^\\d]"},S:{pattern:"[a-zA-Z]",negate:"[^a-zA-Z]"},N:{pattern:"[0-9a-zA-Z]",negate:"[^0-9a-zA-Z]"},A:{pattern:"[a-zA-Z]",negate:"[^a-zA-Z]",transform:e=>e.toLocaleUpperCase()},a:{pattern:"[a-zA-Z]",negate:"[^a-zA-Z]",transform:e=>e.toLocaleLowerCase()},X:{pattern:"[0-9a-zA-Z]",negate:"[^0-9a-zA-Z]",transform:e=>e.toLocaleUpperCase()},x:{pattern:"[0-9a-zA-Z]",negate:"[^0-9a-zA-Z]",transform:e=>e.toLocaleLowerCase()}},ye=Object.keys(ee);ye.forEach(e=>{ee[e].regex=new RegExp(ee[e].pattern)});const Ke=new RegExp("\\\\([^.*+?^${}()|([\\]])|([.*+?^${}()|[\\]])|(["+ye.join("")+"])|(.)","g"),me=/[.*+?^${}()|[\]\\]/g,S=String.fromCharCode(1),He={mask:String,reverseFillMask:Boolean,fillMask:[Boolean,String],unmaskedValue:Boolean};function Qe(e,o,E,M){let u,d,w,R,O,v;const x=K(null),f=K(k());function N(){return e.autogrow===!0||["textarea","text","search","url","tel","password"].includes(e.type)}H(()=>e.type+e.autogrow,A),H(()=>e.mask,l=>{if(l!==void 0)D(f.value,!0);else{const n=T(f.value);A(),e.modelValue!==n&&o("update:modelValue",n)}}),H(()=>e.fillMask+e.reverseFillMask,()=>{x.value===!0&&D(f.value,!0)}),H(()=>e.unmaskedValue,()=>{x.value===!0&&D(f.value)});function k(){if(A(),x.value===!0){const l=j(T(e.modelValue));return e.fillMask!==!1?p(l):l}return e.modelValue}function I(l){if(l<u.length)return u.slice(-l);let n="",i=u;const t=i.indexOf(S);if(t!==-1){for(let r=l-i.length;r>0;r--)n+=S;i=i.slice(0,t)+n+i.slice(t)}return i}function A(){if(x.value=e.mask!==void 0&&e.mask.length!==0&&N(),x.value===!1){R=void 0,u="",d="";return}const l=fe[e.mask]===void 0?e.mask:fe[e.mask],n=typeof e.fillMask=="string"&&e.fillMask.length!==0?e.fillMask.slice(0,1):"_",i=n.replace(me,"\\$&"),t=[],r=[],s=[];let y=e.reverseFillMask===!0,c="",m="";l.replace(Ke,(b,a,h,z,q)=>{if(z!==void 0){const V=ee[z];s.push(V),m=V.negate,y===!0&&(r.push("(?:"+m+"+)?("+V.pattern+"+)?(?:"+m+"+)?("+V.pattern+"+)?"),y=!1),r.push("(?:"+m+"+)?("+V.pattern+")?")}else if(h!==void 0)c="\\"+(h==="\\"?"":h),s.push(h),t.push("([^"+c+"]+)?"+c+"?");else{const V=a!==void 0?a:q;c=V==="\\"?"\\\\\\\\":V.replace(me,"\\\\$&"),s.push(V),t.push("([^"+c+"]+)?"+c+"?")}});const U=new RegExp("^"+t.join("")+"("+(c===""?".":"[^"+c+"]")+"+)?"+(c===""?"":"["+c+"]*")+"$"),Q=r.length-1,g=r.map((b,a)=>a===0&&e.reverseFillMask===!0?new RegExp("^"+i+"*"+b):a===Q?new RegExp("^"+b+"("+(m===""?".":m)+"+)?"+(e.reverseFillMask===!0?"$":i+"*")):new RegExp("^"+b));w=s,R=b=>{const a=U.exec(e.reverseFillMask===!0?b:b.slice(0,s.length+1));a!==null&&(b=a.slice(1).join(""));const h=[],z=g.length;for(let q=0,V=b;q<z;q++){const Y=g[q].exec(V);if(Y===null)break;V=V.slice(Y.shift().length),h.push(...Y)}return h.length!==0?h.join(""):b},u=s.map(b=>typeof b=="string"?b:S).join(""),d=u.split(S).join(n)}function D(l,n,i){const t=M.value,r=t.selectionEnd,s=t.value.length-r,y=T(l);n===!0&&A();const c=j(y),m=e.fillMask!==!1?p(c):c,U=f.value!==m;t.value!==m&&(t.value=m),U===!0&&(f.value=m),document.activeElement===t&&W(()=>{if(m===d){const g=e.reverseFillMask===!0?d.length:0;t.setSelectionRange(g,g,"forward");return}if(i==="insertFromPaste"&&e.reverseFillMask!==!0){const g=t.selectionEnd;let b=r-1;for(let a=O;a<=b&&a<g;a++)u[a]!==S&&b++;F.right(t,b);return}if(["deleteContentBackward","deleteContentForward"].indexOf(i)!==-1){const g=e.reverseFillMask===!0?r===0?m.length>c.length?1:0:Math.max(0,m.length-(m===d?0:Math.min(c.length,s)+1))+1:r;t.setSelectionRange(g,g,"forward");return}if(e.reverseFillMask===!0)if(U===!0){const g=Math.max(0,m.length-(m===d?0:Math.min(c.length,s+1)));g===1&&r===1?t.setSelectionRange(g,g,"forward"):F.rightReverse(t,g)}else{const g=m.length-s;t.setSelectionRange(g,g,"backward")}else if(U===!0){const g=Math.max(0,u.indexOf(S),Math.min(c.length,r)-1);F.right(t,g)}else{const g=r-1;F.right(t,g)}});const Q=e.unmaskedValue===!0?T(m):m;String(e.modelValue)!==Q&&(e.modelValue!==null||Q!=="")&&E(Q,!0)}function J(l,n,i){const t=j(T(l.value));n=Math.max(0,u.indexOf(S),Math.min(t.length,n)),O=n,l.setSelectionRange(n,i,"forward")}const F={left(l,n){const i=u.slice(n-1).indexOf(S)===-1;let t=Math.max(0,n-1);for(;t>=0;t--)if(u[t]===S){n=t,i===!0&&n++;break}if(t<0&&u[n]!==void 0&&u[n]!==S)return F.right(l,0);n>=0&&l.setSelectionRange(n,n,"backward")},right(l,n){const i=l.value.length;let t=Math.min(i,n+1);for(;t<=i;t++)if(u[t]===S){n=t;break}else u[t-1]===S&&(n=t);if(t>i&&u[n-1]!==void 0&&u[n-1]!==S)return F.left(l,i);l.setSelectionRange(n,n,"forward")},leftReverse(l,n){const i=I(l.value.length);let t=Math.max(0,n-1);for(;t>=0;t--)if(i[t-1]===S){n=t;break}else if(i[t]===S&&(n=t,t===0))break;if(t<0&&i[n]!==void 0&&i[n]!==S)return F.rightReverse(l,0);n>=0&&l.setSelectionRange(n,n,"backward")},rightReverse(l,n){const i=l.value.length,t=I(i),r=t.slice(0,n+1).indexOf(S)===-1;let s=Math.min(i,n+1);for(;s<=i;s++)if(t[s-1]===S){n=s,n>0&&r===!0&&n--;break}if(s>i&&t[n-1]!==void 0&&t[n-1]!==S)return F.leftReverse(l,i);l.setSelectionRange(n,n,"forward")}};function G(l){o("click",l),v=void 0}function $(l){if(o("keydown",l),be(l)===!0||l.altKey===!0)return;const n=M.value,i=n.selectionStart,t=n.selectionEnd;if(l.shiftKey||(v=void 0),l.keyCode===37||l.keyCode===39){l.shiftKey&&v===void 0&&(v=n.selectionDirection==="forward"?i:t);const r=F[(l.keyCode===39?"right":"left")+(e.reverseFillMask===!0?"Reverse":"")];if(l.preventDefault(),r(n,v===i?t:i),l.shiftKey){const s=n.selectionStart;n.setSelectionRange(Math.min(v,s),Math.max(v,s),"forward")}}else l.keyCode===8&&e.reverseFillMask!==!0&&i===t?(F.left(n,i),n.setSelectionRange(n.selectionStart,t,"backward")):l.keyCode===46&&e.reverseFillMask===!0&&i===t&&(F.rightReverse(n,t),n.setSelectionRange(i,n.selectionEnd,"forward"))}function j(l){if(l==null||l==="")return"";if(e.reverseFillMask===!0)return B(l);const n=w;let i=0,t="";for(let r=0;r<n.length;r++){const s=l[i],y=n[r];if(typeof y=="string")t+=y,s===y&&i++;else if(s!==void 0&&y.regex.test(s))t+=y.transform!==void 0?y.transform(s):s,i++;else return t}return t}function B(l){const n=w,i=u.indexOf(S);let t=l.length-1,r="";for(let s=n.length-1;s>=0&&t!==-1;s--){const y=n[s];let c=l[t];if(typeof y=="string")r=y+r,c===y&&t--;else if(c!==void 0&&y.regex.test(c))do r=(y.transform!==void 0?y.transform(c):c)+r,t--,c=l[t];while(i===s&&c!==void 0&&y.regex.test(c));else return r}return r}function T(l){return typeof l!="string"||R===void 0?typeof l=="number"?R(""+l):l:R(l)}function p(l){return d.length-l.length<=0?l:e.reverseFillMask===!0&&l.length!==0?d.slice(0,-l.length)+l:l+d.slice(l.length)}return{innerValue:f,hasMask:x,moveCursorForPaste:J,updateMaskValue:D,onMaskedKeydown:$,onMaskedClick:G}}function Ze(e,o){function E(){const M=e.modelValue;try{const u="DataTransfer"in window?new DataTransfer:"ClipboardEvent"in window?new ClipboardEvent("").clipboardData:void 0;return Object(M)===M&&("length"in M?Array.from(M):[M]).forEach(d=>{u.items.add(d)}),{files:u.files}}catch{return{files:void 0}}}return o===!0?_(()=>{if(e.type==="file")return E()}):_(E)}var Ue=ge({name:"QInput",inheritAttrs:!1,props:{...Re,...He,...Te,modelValue:[String,Number,FileList],shadowText:String,type:{type:String,default:"text"},debounce:[String,Number],autogrow:Boolean,inputClass:[Array,String,Object],inputStyle:[Array,String,Object]},emits:[...Ne,"paste","change","keydown","click","animationend"],setup(e,{emit:o,attrs:E}){const{proxy:M}=ve(),{$q:u}=M,d={};let w=NaN,R,O,v=null,x;const f=K(null),N=Ie(e),{innerValue:k,hasMask:I,moveCursorForPaste:A,updateMaskValue:D,onMaskedKeydown:J,onMaskedClick:F}=Qe(e,o,c,f),G=Ze(e,!0),$=_(()=>ue(k.value)),j=Pe(s),B=Le({changeEvent:!0}),T=_(()=>e.type==="textarea"||e.autogrow===!0),p=_(()=>T.value===!0||["text","search","url","tel","password"].includes(e.type)),l=_(()=>{const a={...B.splitAttrs.listeners.value,onInput:s,onPaste:r,onChange:U,onBlur:Q,onFocus:ie};return a.onCompositionstart=a.onCompositionupdate=a.onCompositionend=j,I.value===!0&&(a.onKeydown=J,a.onClick=F),e.autogrow===!0&&(a.onAnimationend=y),a}),n=_(()=>{const a={tabindex:0,"data-autofocus":e.autofocus===!0||void 0,rows:e.type==="textarea"?6:void 0,"aria-label":e.label,name:N.value,...B.splitAttrs.attributes.value,id:B.targetUid.value,maxlength:e.maxlength,disabled:e.disable===!0,readonly:e.readonly===!0};return T.value===!1&&(a.type=e.type),e.autogrow===!0&&(a.rows=1),a});H(()=>e.type,()=>{f.value&&(f.value.value=e.modelValue)}),H(()=>e.modelValue,a=>{if(I.value===!0){if(O===!0&&(O=!1,String(a)===w))return;D(a)}else k.value!==a&&(k.value=a,e.type==="number"&&d.hasOwnProperty("value")===!0&&(R===!0?R=!1:delete d.value));e.autogrow===!0&&W(m)}),H(()=>e.autogrow,a=>{a===!0?W(m):f.value!==null&&E.rows>0&&(f.value.style.height="auto")}),H(()=>e.dense,()=>{e.autogrow===!0&&W(m)});function i(){qe(()=>{const a=document.activeElement;f.value!==null&&f.value!==a&&(a===null||a.id!==B.targetUid.value)&&f.value.focus({preventScroll:!0})})}function t(){f.value!==null&&f.value.select()}function r(a){if(I.value===!0&&e.reverseFillMask!==!0){const h=a.target;A(h,h.selectionStart,h.selectionEnd)}o("paste",a)}function s(a){if(!a||!a.target)return;if(e.type==="file"){o("update:modelValue",a.target.files);return}const h=a.target.value;if(a.target.qComposing===!0){d.value=h;return}if(I.value===!0)D(h,!1,a.inputType);else if(c(h),p.value===!0&&a.target===document.activeElement){const{selectionStart:z,selectionEnd:q}=a.target;z!==void 0&&q!==void 0&&W(()=>{a.target===document.activeElement&&h.indexOf(a.target.value)===0&&a.target.setSelectionRange(z,q)})}e.autogrow===!0&&m()}function y(a){o("animationend",a),m()}function c(a,h){x=()=>{v=null,e.type!=="number"&&d.hasOwnProperty("value")===!0&&delete d.value,e.modelValue!==a&&w!==a&&(w=a,h===!0&&(O=!0),o("update:modelValue",a),W(()=>{w===a&&(w=NaN)})),x=void 0},e.type==="number"&&(R=!0,d.value=a),e.debounce!==void 0?(v!==null&&clearTimeout(v),d.value=a,v=setTimeout(x,e.debounce)):x()}function m(){requestAnimationFrame(()=>{const a=f.value;if(a!==null){const h=a.parentNode.style,{scrollTop:z}=a,{overflowY:q,maxHeight:V}=u.platform.is.firefox===!0?{}:window.getComputedStyle(a),Y=q!==void 0&&q!=="scroll";Y===!0&&(a.style.overflowY="hidden"),h.marginBottom=a.scrollHeight-1+"px",a.style.height="1px",a.style.height=a.scrollHeight+"px",Y===!0&&(a.style.overflowY=parseInt(V,10)<a.scrollHeight?"auto":"hidden"),h.marginBottom="",a.scrollTop=z}})}function U(a){j(a),v!==null&&(clearTimeout(v),v=null),x!==void 0&&x(),o("change",a.target.value)}function Q(a){a!==void 0&&ie(a),v!==null&&(clearTimeout(v),v=null),x!==void 0&&x(),R=!1,O=!1,delete d.value,e.type!=="file"&&setTimeout(()=>{f.value!==null&&(f.value.value=k.value!==void 0?k.value:"")})}function g(){return d.hasOwnProperty("value")===!0?d.value:k.value!==void 0?k.value:""}Me(()=>{Q()}),he(()=>{e.autogrow===!0&&m()}),Object.assign(B,{innerValue:k,fieldClass:_(()=>`q-${T.value===!0?"textarea":"input"}`+(e.autogrow===!0?" q-textarea--autogrow":"")),hasShadow:_(()=>e.type!=="file"&&typeof e.shadowText=="string"&&e.shadowText.length!==0),inputRef:f,emitValue:c,hasValue:$,floatingLabel:_(()=>$.value===!0&&(e.type!=="number"||isNaN(k.value)===!1)||ue(e.displayValue)),getControl:()=>L(T.value===!0?"textarea":"input",{ref:f,class:["q-field__native q-placeholder",e.inputClass],style:e.inputStyle,...n.value,...l.value,...e.type!=="file"?{value:g()}:G.value}),getShadowControl:()=>L("div",{class:"q-field__native q-field__shadow absolute-bottom no-pointer-events"+(T.value===!0?"":" text-no-wrap")},[L("span",{class:"invisible"},g()),L("span",e.shadowText)])});const b=Ae(B);return Object.assign(M,{focus:i,select:t,getNativeElement:()=>f.value}),Ce(M,"nativeEl",()=>f.value),b}}),$e="/assets/BAHS-CS-class-2024-12-18.f59f39e9.jpg",pe="/assets/BAHS-logo.ba22523d.png",Ye="/assets/image.c11171a6.jpg";const We={data(){return{email:"",emailError:!1,schoolError:!1,loading:!1,selectedSchool:null,schoolList:[],displayList:[]}},watch:{selectedSchool(){this.selectedSchool!==null&&(this.schoolError=!1)},email(){this.email.length>0&&(this.emailError=!1)}},computed:{creatorName(){return"Henning Seip"},linkedIn(){return"https://www.linkedin.com/in/henningseip/"},linkedIn_pic(){return{}.LINKEDIN_PIC}},methods:{filterSchool(e,o){if(e===""){o(()=>{this.displayList=this.schoolList});return}o(()=>{const E=e.toLowerCase();this.displayList=this.schoolList.filter(M=>M.SchoolName.toLowerCase().indexOf(E)>-1)})},go(){/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(this.email)?this.selectedSchool!==null?this.$router.push({name:"Survey",query:{user:this.email,id:this.selectedSchool.SchoolID}}):this.schoolError=!0:this.emailError=!0}},mounted(){fetch("http://localhost:3000/api/school-list").then(e=>e.json()).then(e=>{this.schoolList=e,this.displayList=this.schoolList})}},Je={style:{width:"100%","max-height":"300px",overflow:"hidden"}},Ge={class:"row text-center"},Xe={class:"col-12 col-md-4"},et={class:"row"},tt={class:"col"},at={class:"col"},nt={class:"q-mb-none text-bold"},lt={class:"q-mb-md"},it=["href"],ot={class:"col-12 col-md-8"},rt={class:"container"},st={class:"row"},ut={key:0,class:"text-red text-bold"},dt={key:1,class:"text-red text-bold"};function ct(e,o,E,M,u,d){return ae(),ne("div",null,[C("div",Je,[P(le,{src:$e})]),C("div",Ge,[C("div",Xe,[C("div",et,[C("div",tt,[P(le,{src:pe,width:"80%"}),o[3]||(o[3]=C("p",{class:"q-px-sm"},"Bronx Aerospace High School",-1))]),C("div",at,[o[5]||(o[5]=C("p",{class:"q-ma-none q-mt-md"},"created by:",-1)),C("p",nt,oe(d.creatorName),1),C("p",lt,[o[4]||(o[4]=X("visit me on ")),C("a",{href:d.linkedIn,target:"_blank"},"LinkedIn",8,it)]),P(le,{src:Ye,style:{"border-radius":"50%"},width:"50%"})])])]),C("div",ot,[o[9]||(o[9]=C("h2",{class:"gt-sm text-center q-my-md"},"NYC Job Interest Survey",-1)),o[10]||(o[10]=C("h3",{class:"lt-md text-center q-my-md"},"NYC Job Interest Survey",-1)),C("div",rt,[o[8]||(o[8]=C("p",{class:"text-left"},[X("Welcome to the job interest survey! The purpose of this survey is to obtain information about what job you may be interested interested when you enter your work life. "),C("span",{class:"text-bold"},"This poll is anonymous.")],-1)),P(je,{outlined:"",modelValue:u.selectedSchool,"onUpdate:modelValue":o[0]||(o[0]=w=>u.selectedSchool=w),options:u.displayList,label:"select your high school","option-value":"SchoolID","option-label":"SchoolName","use-input":"","input-debounce":"0",onFilter:d.filterSchool,clearable:"",class:"q-mb-md"},{option:Z(w=>[P(de,Ve(w.itemProps,{style:{background:"white"}}),{default:Z(()=>[P(ce,null,{default:Z(()=>[P(Be,{lines:"1"},{default:Z(()=>[X(oe(w.opt.SchoolName),1)]),_:2},1024)]),_:2},1024)]),_:2},1040)]),"no-option":Z(()=>[P(de,null,{default:Z(()=>[P(ce,{class:"text-grey"},{default:Z(()=>o[6]||(o[6]=[X(" No results ")])),_:1})]),_:1})]),_:1},8,["modelValue","options","onFilter"]),C("div",st,[P(Ue,{outlined:"",modelValue:u.email,"onUpdate:modelValue":o[1]||(o[1]=w=>u.email=w),label:"enter your email address",style:{width:"80%"},onFocus:o[2]||(o[2]=w=>e.error=!1),onKeyup:Ee(d.go,["enter"])},null,8,["modelValue","onKeyup"]),P(Fe,{color:"primary",class:"q-ml-md",onClick:d.go},{default:Z(()=>o[7]||(o[7]=[X("Go")])),_:1},8,["onClick"])]),u.schoolError?(ae(),ne("p",ut,"Please select your school.")):re("",!0),u.emailError?(ae(),ne("p",dt,"Email address is invalid.")):re("",!0)])])])])}var ht=_e(We,[["render",ct]]);export{ht as default};
