/* JS */ gapi.loaded_1(function(_){var window=this;
_.Fn=function(){return Math.floor((new Date).getTime()/1E3)};var MC;var LC;_.Vj=function(a,c){this.B=a;var f=c||{};this.M=f.Fr;this.G=f.domain;this.ha=f.path;this.qa=f.wD};LC=/^[-+/_=.:|%&a-zA-Z0-9@]*$/;MC=/^[A-Z_][A-Z0-9_]{0,63}$/;_.Vj.prototype.Hd=function(){for(var a=this.B+"=",c=window.document.cookie.split(/;\s*/),f=0;f<c.length;++f){var g=c[f];if(0==g.indexOf(a))return g.substr(a.length)}};
_.Vj.prototype.write=function(a,c){if(!MC.test(this.B))throw"Invalid cookie name";if(!LC.test(a))throw"Invalid cookie value";var f=this.B+"="+a;this.G&&(f+=";domain="+this.G);this.ha&&(f+=";path="+this.ha);var g="number"===typeof c?c:this.M;if(0<=g){var h=new Date;h.setSeconds(h.getSeconds()+g);f+=";expires="+h.toUTCString()}this.qa&&(f+=";secure");window.document.cookie=f};_.Vj.prototype.clear=function(){this.write("",0)}; _.Vj.iterate=function(a){for(var c=window.document.cookie.split(/;\s*/),f=0;f<c.length;++f){var g=c[f].split("="),h=g.shift();a(h,g.join("="))}};
var Ok;_.dk=function(a){this.B=a};Ok={};_.dk.prototype.Hd=function(){if(Ok.hasOwnProperty(this.B))return Ok[this.B]};_.dk.prototype.write=function(a){Ok[this.B]=a};_.dk.prototype.clear=function(){delete Ok[this.B]};_.dk.iterate=function(a){for(var c in Ok)Ok.hasOwnProperty(c)&&a(c,Ok[c])};
_.fk=function(a){this.G=a;this.B=window.sessionStorage};_.fk.prototype.Hd=function(){return this.B&&this.B.getItem(this.G)};_.fk.prototype.write=function(a){this.B&&this.B.setItem(this.G,a)};_.fk.prototype.clear=function(){this.B&&this.B.removeItem(this.G)};_.fk.iterate=function(a){if(window.sessionStorage)for(var c=0,f=window.sessionStorage.length;c<f;++c){var g=window.sessionStorage.key(c);a(g,window.sessionStorage[g])}};
for(var vk=0;64>vk;++vk);var wk;wk=[".APPS.GOOGLEUSERCONTENT.COM","@DEVELOPER.GSERVICEACCOUNT.COM"];_.xk="https:"===window.location.protocol;_.yk=_.xk||"http:"===window.location.protocol?_.Vj:_.dk;_.Ak=function(a){a=a.toUpperCase();for(var c=0,f=wk.length;c<f;++c){var g=a.split(wk[c]);2==g.length&&""===g[1]&&(a=g[0])}a=a.replace(/-/g,"_").toUpperCase();40<a.length&&(c=new _.uk,c.CA(a),a=c.Of().toUpperCase());return a};
_.Fk=function(a){var c=a.substr(1),f="",g=window.location.hostname;if(""!==c){f=(0,window.parseInt)(c,10);if((0,window.isNaN)(f))return null;c=g.split(".");if(c.length<f-1)return null;c.length==f-1&&(g="."+g)}else g="";return{Gb:"S"==a.charAt(0),domain:g,Ke:f}};
_.Gk=function(a){if(0!==a.indexOf("GCSC"))return null;var c={uf:!1};a=a.substr(4);if(!a)return c;var f=a.charAt(0);a=a.substr(1);var g=a.lastIndexOf("_");if(-1==g)return c;var h=(0,_.Fk)(a.substr(g+1));if(null==h)return c;a=a.substring(0,g);if("_"!==a.charAt(0))return c;g="E"===f&&h.Gb;return!g&&("U"!==f||h.Gb)||g&&!_.xk?c:{uf:!0,Gb:g,ep:a.substr(1),domain:h.domain,Ke:h.Ke}};
var xl;var ul;var tl;var pl;var ol;ol=(0,_.d)();pl=(0,_.d)();_.ql=(0,_.d)();_.rl=(0,_.d)();_.sl=null;tl="state code cookie_policy g_user_cookie_policy authuser prompt g-oauth-window status".split(" ");ul=function(a){this.G=a;this.B=null};ul.prototype.write=function(a){var c=(0,_.d)(),f=(0,_.d)(),g;for(g in a)(0,_.hb)(a,g)&&(f[g]=a[g],c[g]=a[g]);g=0;for(var h=tl.length;g<h;++g)delete f[tl[g]];a=String(a.authuser||0);g=(0,_.d)();g[a]=_.R.Qc("#"+(0,_.vl)(f));this.G.write((0,_.ck)(g));this.B=c};
ul.prototype.Hd=function(){return this.B};ul.prototype.clear=function(){this.G.clear();this.B=(0,_.d)()};
_.wl=function(a){if(!a)return null;"single_host_origin"!==a&&(a=_.T.Pq(a));var c=window.location.hostname,f=c,g=_.xk;if("single_host_origin"!==a){f=a.split("://");if(2==f.length)g="https"===f.shift();else return(0,_.kd)("WARNING invalid cookie_policy: "+a),null;f=f[0]}if(-1!==f.indexOf(":"))f=c="";else{a="."+f;if(c.lastIndexOf(a)!==c.length-a.length)return(0,_.kd)("Invalid cookie_policy domain: "+f),null;f=a;c=f.split(".").length-1}return{domain:f,Gb:g,Ke:c}};
xl=function(a){if(!a)return null;var c=a.client_id;if(!c)return null;c=(0,_.Ak)(c);a=(0,_.wl)(a.cookie_policy);return a?!_.xk&&a.Gb?((0,_.kd)("WARNING: https cookie_policy set for http domain"),null):["GCSC",a.Gb?"E":"U","_",c,"_",a.Gb?"S":"H",a.Ke].join(""):null};_.yl=function(a){return a?{domain:a.domain,path:"/",wD:a.Gb}:null};_.zl=function(a){var c=ol[a];c||(c=new ul(new _.dk(a)),ol[a]=c);return{Kc:c,key:a}};
_.Al=function(a,c){var f=c?pl:ol,g=c?_.yk:_.fk,h=a&&xl(a),l=!!h;a&&!a.g_user_cookie_policy&&(g=_.dk,h="token");if(!h)if(!c&&_.sl)h=_.sl;else return null;var n=f[h];if(!n){n=(0,_.Gk)(h);if(!("token"===h||n&&n.uf))return null;n=new g(h,(0,_.yl)(n));c||(n=new ul(n))}f[h]=n;return{Kc:n,key:h,Fj:l}};
_.Bl=function(a,c,f){a=a&&"token"!==a?(0,_.zl)(a):(0,_.Al)();if(!a)return null;if(f){f=a.Kc;(0,_.d)();var g=f.G.Hd();f=null;try{f=(0,_.ek)(g)}catch(h){}!1==f&&(f=null);g=(0,_.qk)()||"0";g=String(g);f=f&&f[g]}else f=a.Kc.Hd();f&&f.expires_at&&(0,_.Fn)()>f.expires_at&&(a.Kc.clear(),f=null);f&&f.error&&!c&&(f=null);return f};
_.vl=function(a,c){var f="";if(!a)return f;var g=c||"&",h;for(h in a)if({}.hasOwnProperty.call(a,h)){var l;l=a[h];if(null!=l){var n=[(0,window.encodeURIComponent)(h),"="];if(l instanceof Array){for(var q=[],t=0;t<l.length;t++)q.push((0,window.encodeURIComponent)(l[t]));n.push(q.join("+"))}else n.push((0,window.encodeURIComponent)(l));l=n.join("")}else l="";l&&(f&&(f+=g),f+=l)}return f};_.fk.iterate(function(a){var c=(0,_.Gk)(a);c&&c.uf&&(ol[a]=new ul(new _.fk(a,(0,_.yl)(c))))}); _.yk.iterate(function(a){ol[a]&&(pl[a]=new _.yk(a,(0,_.yl)((0,_.Gk)(a))))});

_.Xj=window.googleapis&&window.googleapis.server||{};
_.Yj=function(){var a=/\s*;\s*/;return{get:function(c,f){for(var g=c+"=",h=(window.document.cookie||"").split(a),l=0,n;n=h[l];++l)if(0==n.indexOf(g))return n.substr(g.length);return f}}}();
_.Qj=function(){function a(){var a=window.__OVERRIDE_SID;null==a&&(a=_.Yj.get("SID"));return!!a}function c(a,c,l){if(1==((0,_.ea)(l)?2:1))return f([c,a].join(" "));var n=[],q=[];(0,_.Be)(l,function(a){q.push(a.key);n.push(a.value)});l=(new Date).getTime();var t=[],t=(0,_.wj)(n)?[l,c,a]:[n.join(":"),l,c,a];a=f(t.join(" "));a=[l,a];(0,_.wj)(q)||a.push(q.join(""));return a.join("_")}function f(a){var c=(0,_.Tb)();c.update(a);return c.Of().toLowerCase()}return{Nq:function(a){var c={SAPISIDHASH:!0,APISIDHASH:!0};
return a&&(a.OriginToken||a.Authorization&&c[String(a.Authorization).split(" ")[0]])?!0:!1},er:a,bq:function(){var c=null;a()&&(c=window.__PVT,null==c&&(c=_.Yj.get("BEAT")));return c},Qe:function(f){var h=_.Rb.Pq(String(window.location.href));if(a()){var l=0==h.indexOf("https:")||0==h.indexOf("chrome-extension:"),n=l?"SAPISID":"APISID",q=l?window.__SAPISID:window.__APISID;null==q&&(q=_.Yj.get(n));if(q)return[l?"SAPISIDHASH":"APISIDHASH",c(h,q,f)].join(" ")}return null}}}();

_.Pb.ft=function(a){var c=[];if(1<arguments.length)for(var f=0,g;g=arguments[f];++f)c.push(g);else c=a;return function(a){for(var f=0;c[f];++f)if(a===c[f])return!0;return!1}};_.Pb.Dt=function(a){return function(c){return a.test(c)}};_.Pb.Sn=function(a){return"undefined"!==typeof a};_.Pb.yt=function(a){return"string"===typeof a&&0<a.length};_.Pb.SJ=function(a){return"boolean"===typeof a};_.Pb.rt=function(a){return function(c){for(var f in a)if(a.hasOwnProperty(f)&&!(0,a[f])(c[f]))return!1;return!0}};

_.R=_.R||{};
(function(){function a(c){var f="";if(3==c.nodeType||4==c.nodeType)f=c.nodeValue;else if(c.innerText)f=c.innerText;else if(c.innerHTML)f=c.innerHTML;else if(c.firstChild){f=[];for(c=c.firstChild;c;c=c.nextSibling)f.push(a(c));f=f.join("")}return f}_.R.createElement=function(a){var f;if(!window.document.body||window.document.body.namespaceURI)try{f=window.document.createElementNS("http://www.w3.org/1999/xhtml",a)}catch(g){}return f||window.document.createElement(a)};_.R.Fh=function(a){var f=_.R.createElement("iframe");
try{var g=["<","iframe"],h=a||{},l;for(l in h)h.hasOwnProperty(l)&&(g.push(" "),g.push(l),g.push('="'),g.push(_.R.Qf(h[l])),g.push('"'));g.push("></");g.push("iframe");g.push(">");var n=_.R.createElement(g.join(""));n&&(!f||n.tagName==f.tagName&&n.namespaceURI==f.namespaceURI)&&(f=n)}catch(q){}g=f;a=a||{};for(var t in a)a.hasOwnProperty(t)&&(g[t]=a[t]);return f};_.R.Jk=function(){if(window.document.body)return window.document.body;try{var a=window.document.getElementsByTagNameNS("http://www.w3.org/1999/xhtml", "body");if(a&&1==a.length)return a[0]}catch(f){}return window.document.documentElement||window.document};_.R.Qt=function(c){return a(c)}})();

_.R=_.R||{};(function(){function a(a){c=a["core.util"]||{}}var c={},f={};_.Pb&&_.Pb.register("core.util",null,a);_.R.Nt=function(a){return"undefined"===typeof c[a]?null:c[a]};_.R.hasFeature=function(a){return"undefined"!==typeof c[a]};_.R.Rt=function(){return f}})();

var Cp;var Sn;var Dp;var Bp;var zp;var uq;uq=function(a){return/^\s*$/.test(a)?!1:/^[\],:{}\s\u2028\u2029]*$/.test(a.replace(/\\["\\\/bfnrtu]/g,"@").replace(/"[^"\\\n\r\u2028\u2029\x00-\x08\x0a-\x1f]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,"]").replace(/(?:^|:|,)(?:[\s\u2028\u2029]*\[)+/g,""))};_.Qn=function(a){a=String(a);if(uq(a))try{return eval("("+a+")")}catch(c){}throw Error("G`"+a);};_.PC=function(a,c){var f=[];Bp(new zp(c),a,f);return f.join("")};zp=function(a){this.B=a};
Bp=function(a,c,f){switch(typeof c){case "string":Cp(a,c,f);break;case "number":f.push((0,window.isFinite)(c)&&!(0,window.isNaN)(c)?c:"null");break;case "boolean":f.push(c);break;case "undefined":f.push("null");break;case "object":if(null==c){f.push("null");break}if((0,_.ea)(c)){var g=c.length;f.push("[");for(var h="",l=0;l<g;l++)f.push(h),h=c[l],Bp(a,a.B?a.B.call(c,String(l),h):h,f),h=",";f.push("]");break}f.push("{");g="";for(l in c)Object.prototype.hasOwnProperty.call(c,l)&&(h=c[l],"function"!=
typeof h&&(f.push(g),Cp(a,l,f),f.push(":"),Bp(a,a.B?a.B.call(c,l,h):h,f),g=","));f.push("}");break;case "function":break;default:throw Error("H`"+typeof c);}};Dp={'"':'\\"',"\\":"\\\\","/":"\\/","\b":"\\b","\f":"\\f","\n":"\\n","\r":"\\r","\t":"\\t","\x0B":"\\u000b"};Sn=/\uffff/.test("\uffff")?/[\\\"\x00-\x1f\x7f-\uffff]/g:/[\\\"\x00-\x1f\x7f-\xff]/g; Cp=function(a,c,f){f.push('"',c.replace(Sn,function(a){if(a in Dp)return Dp[a];var c=a.charCodeAt(0),f="\\u";16>c?f+="000":256>c?f+="00":4096>c&&(f+="0");return Dp[a]=f+c.toString(16)}),'"')};

_.gh=function(){};_.ih=[];_.kh=[];_.jh=!1;_.hh=function(a){_.ih[_.ih.length]=a;if(_.jh)for(var c=0;c<_.kh.length;c++)a((0,_.H)(_.kh[c].B,_.kh[c]))};
_.fh=function(a,c){for(var f=a.split("."),g=c||_.D,h;h=f.shift();)if(null!=g[h])g=g[h];else return null;return g};_.ue=function(a,c,f){t:{for(var g=a.length,h=(0,_.fa)(a)?a.split(""):a,l=0;l<g;l++)if(l in h&&c.call(f,h[l],l,a)){c=l;break t}c=-1}return 0>c?null:(0,_.fa)(a)?a.charAt(c):a[c]};
_.dh=function(){};_.dh.prototype.Pj=!1;_.dh.prototype.Ma=function(){return this.Pj};_.dh.prototype.ca=function(){this.Pj||(this.Pj=!0,this.C())};_.pD=function(a,c){var f=(0,_.ma)(_.eh,c);a.Kh||(a.Kh=[]);a.Kh.push((0,_.H)(f,void 0))};_.dh.prototype.C=function(){if(this.Kh)for(;this.Kh.length;)this.Kh.shift()()};_.eh=function(a){a&&"function"==typeof a.ca&&a.ca()};
_.mh=function(a,c){this.type=a;this.currentTarget=this.target=c;this.defaultPrevented=this.Ad=!1;this.Tg=!0};_.mh.prototype.C=function(){};_.mh.prototype.ca=function(){};_.mh.prototype.stopPropagation=function(){this.Ad=!0};_.mh.prototype.preventDefault=function(){this.defaultPrevented=!0;this.Tg=!1};
var lh=function(a){lh[" "](a);return a};lh[" "]=_.gh;var Jh;var yh;_.Ih=!_.W||(0,_.Te)(9);yh=!_.W||(0,_.Te)(9);Jh=_.W&&!(0,_.Pn)("9");!_.ef||(0,_.Pn)("528");_.df&&(0,_.Pn)("1.9b")||_.W&&(0,_.Pn)("8")||_.cf&&(0,_.Pn)("9.5")||_.ef&&(0,_.Pn)("528");_.df&&!(0,_.Pn)("8")||_.W&&(0,_.Pn)("9");_.wq=_.W?"focusin":"DOMFocusIn";_.yq=_.W?"focusout":"DOMFocusOut";_.Mq=_.ef?"webkitTransitionEnd":_.cf?"otransitionend":"transitionend";_.nh=function(a,c){_.mh.call(this,a?a.type:"");this.relatedTarget=this.currentTarget=this.target=null;this.charCode=this.keyCode=this.button=this.screenY=this.screenX=this.clientY=this.clientX=this.offsetY=this.offsetX=0;this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1;this.state=null;this.fj=!1;this.B=null;a&&this.$c(a,c)};(0,_.J)(_.nh,_.mh);_.k=_.nh.prototype;
_.k.$c=function(a,c){var f=this.type=a.type;this.target=a.target||a.srcElement;this.currentTarget=c;var g=a.relatedTarget;if(g){if(_.df){var h;t:{try{lh(g.nodeName);h=!0;break t}catch(l){}h=!1}h||(g=null)}}else"mouseover"==f?g=a.fromElement:"mouseout"==f&&(g=a.toElement);this.relatedTarget=g;this.offsetX=_.ef||void 0!==a.offsetX?a.offsetX:a.layerX;this.offsetY=_.ef||void 0!==a.offsetY?a.offsetY:a.layerY;this.clientX=void 0!==a.clientX?a.clientX:a.pageX;this.clientY=void 0!==a.clientY?a.clientY:a.pageY;
this.screenX=a.screenX||0;this.screenY=a.screenY||0;this.button=a.button;this.keyCode=a.keyCode||0;this.charCode=a.charCode||("keypress"==f?a.keyCode:0);this.ctrlKey=a.ctrlKey;this.altKey=a.altKey;this.shiftKey=a.shiftKey;this.metaKey=a.metaKey;this.fj=_.$e?a.metaKey:a.ctrlKey;this.state=a.state;this.B=a;a.defaultPrevented&&this.preventDefault()};_.k.stopPropagation=function(){_.nh.T.stopPropagation.call(this);this.B.stopPropagation?this.B.stopPropagation():this.B.cancelBubble=!0};
_.k.preventDefault=function(){_.nh.T.preventDefault.call(this);var a=this.B;if(a.preventDefault)a.preventDefault();else if(a.returnValue=!1,Jh)try{if(a.ctrlKey||112<=a.keyCode&&123>=a.keyCode)a.keyCode=-1}catch(c){}};_.k.Op=function(){return this.B};_.k.C=function(){};
var Lh;var cC;cC="closure_listenable_"+(1E6*Math.random()|0);_.wB=function(a){try{return!(!a||!a[cC])}catch(c){return!1}};Lh=0;var oh=function(a,c,f,g,h,l){this.lb=a;this.B=c;this.src=f;this.type=g;this.capture=!!h;this.Tc=l;this.key=++Lh;this.Zc=this.If=!1},er=function(a){a.Zc=!0;a.lb=null;a.B=null;a.src=null;a.Tc=null};var mr;_.lr=function(a){this.src=a;this.B={};this.G=0};_.lr.prototype.add=function(a,c,f,g,h){var l=this.B[a];l||(l=this.B[a]=[],this.G++);var n=mr(l,c,g,h);-1<n?(a=l[n],f||(a.If=!1)):(a=new oh(c,null,this.src,a,!!g,h),a.If=f,l.push(a));return a};_.lr.prototype.remove=function(a,c,f,g){if(!(a in this.B))return!1;var h=this.B[a];c=mr(h,c,f,g);return-1<c?(er(h[c]),_.ye.splice.call(h,c,1),0==h.length&&(delete this.B[a],this.G--),!0):!1};
var nr=function(a,c){var f=c.type;if(!(f in a.B))return!1;var g=(0,_.xe)(a.B[f],c);g&&(er(c),0==a.B[f].length&&(delete a.B[f],a.G--));return g};_.lr.prototype.fo=(0,_.ba)(4);_.as=function(a,c,f,g,h){a=a.B[c];c=-1;a&&(c=mr(a,f,g,h));return-1<c?a[c]:null};mr=function(a,c,f,g){for(var h=0;h<a.length;++h){var l=a[h];if(!l.Zc&&l.lb==c&&l.capture==!!f&&l.Tc==g)return h}return-1};
var lC;var xh;var Gh;var Fh;var th;var ht;var vh;var et;et="closure_lm_"+(1E6*Math.random()|0);vh={};ht=0;_.ph=function(a,c,f,g,h){if((0,_.ea)(c)){for(var l=0;l<c.length;l++)(0,_.ph)(a,c[l],f,g,h);return null}f=(0,_.dC)(f);return(0,_.wB)(a)?a.R(c,f,g,h):(0,_.qh)(a,c,f,!1,g,h)};
_.qh=function(a,c,f,g,h,l){if(!c)throw Error("u");var n=!!h,q=(0,_.st)(a);q||(a[et]=q=new _.lr(a));f=q.add(c,f,g,h,l);if(f.B)return f;g=th();f.B=g;g.src=a;g.lb=f;a.addEventListener?a.addEventListener(c,g,n):a.attachEvent(c in vh?vh[c]:vh[c]="on"+c,g);ht++;return f};th=function(){var a=xh,c=yh?function(f){return a.call(c.src,c.lb,f)}:function(f){f=a.call(c.src,c.lb,f);if(!f)return f};return c};
_.Ah=function(a,c,f,g,h){if((0,_.ea)(c)){for(var l=0;l<c.length;l++)(0,_.Ah)(a,c[l],f,g,h);return null}f=(0,_.dC)(f);if((0,_.wB)(a))return a.se(c,f,g,h);if(!a)return!1;g=!!g;if(a=(0,_.st)(a))if(c=(0,_.as)(a,c,f,g,h))return(0,_.Ch)(c);return!1};
_.Ch=function(a){if((0,_.qe)(a)||!a||a.Zc)return!1;var c=a.src;if((0,_.wB)(c))return nr(c.Gi,a);var f=a.type,g=a.B;c.removeEventListener?c.removeEventListener(f,g,a.capture):c.detachEvent&&c.detachEvent(f in vh?vh[f]:vh[f]="on"+f,g);ht--;(f=(0,_.st)(c))?(nr(f,a),0==f.G&&(f.src=null,c[et]=null)):er(a);return!0};Fh=function(a,c,f,g){var h=1;if(a=(0,_.st)(a))if(c=a.B[c])for(c=(0,_.ze)(c),a=0;a<c.length;a++){var l=c[a];l&&l.capture==f&&!l.Zc&&(h&=!1!==Gh(l,g))}return Boolean(h)};
Gh=function(a,c){var f=a.lb,g=a.Tc||a.src;a.If&&(0,_.Ch)(a);return f.call(g,c)};
xh=function(a,c){if(a.Zc)return!0;if(!yh){var f=c||(0,_.fh)("window.event"),g=new _.nh(f,this),h=!0;if(!(0>f.keyCode||void 0!=f.returnValue)){t:{var l=!1;if(0==f.keyCode)try{f.keyCode=-1;break t}catch(n){l=!0}if(l||void 0==f.returnValue)f.returnValue=!0}f=[];for(l=g.currentTarget;l;l=l.parentNode)f.push(l);for(var l=a.type,q=f.length-1;!g.Ad&&0<=q;q--)g.currentTarget=f[q],h&=Fh(f[q],l,!0,g);for(q=0;!g.Ad&&q<f.length;q++)g.currentTarget=f[q],h&=Fh(f[q],l,!1,g)}return h}return Gh(a,new _.nh(c,this))}; _.st=function(a){a=a[et];return a instanceof _.lr?a:null};lC="__closure_events_fn_"+(1E9*Math.random()>>>0);_.dC=function(a){return(0,_.tq)(a)?a:a[lC]||(a[lC]=function(c){return a.handleEvent(c)})};(0,_.hh)(function(a){xh=a(xh)});
_.Hh=function(){this.Gi=new _.lr(this);this.ph=this};(0,_.J)(_.Hh,_.dh);_.Hh.prototype[cC]=!0;_.k=_.Hh.prototype;_.k.Lg=null;_.k.tj=(0,_.ba)(25);_.k.addEventListener=function(a,c,f,g){(0,_.ph)(this,a,c,f,g)};_.k.removeEventListener=function(a,c,f,g){(0,_.Ah)(this,a,c,f,g)};
_.k.dispatchEvent=function(a){var c,f=this.Lg;if(f){c=[];for(var g=1;f;f=f.Lg)c.push(f),++g}f=this.ph;g=a.type||a;if((0,_.fa)(a))a=new _.mh(a,f);else if(a instanceof _.mh)a.target=a.target||f;else{var h=a;a=new _.mh(g,f);(0,_.sf)(a,h)}var h=!0,l;if(c)for(var n=c.length-1;!a.Ad&&0<=n;n--)l=a.currentTarget=c[n],h=pC(l,g,!0,a)&&h;a.Ad||(l=a.currentTarget=f,h=pC(l,g,!0,a)&&h,a.Ad||(h=pC(l,g,!1,a)&&h));if(c)for(n=0;!a.Ad&&n<c.length;n++)l=a.currentTarget=c[n],h=pC(l,g,!1,a)&&h;return h};
_.k.C=function(){_.Hh.T.C.call(this);if(this.Gi){var a=this.Gi,c=0,f;for(f in a.B){for(var g=a.B[f],h=0;h<g.length;h++)++c,er(g[h]);delete a.B[f];a.G--}}this.Lg=null};_.k.R=function(a,c,f,g){return this.Gi.add(String(a),c,!1,f,g)};_.k.se=function(a,c,f,g){return this.Gi.remove(String(a),c,f,g)};
var pC=function(a,c,f,g){c=a.Gi.B[String(c)];if(!c)return!0;c=(0,_.ze)(c);for(var h=!0,l=0;l<c.length;++l){var n=c[l];if(n&&!n.Zc&&n.capture==f){var q=n.lb,t=n.Tc||n.src;n.If&&nr(a.Gi,n);h=!1!==q.call(t,g)&&h}}return h&&!1!=g.Tg};_.Hh.prototype.fo=(0,_.ba)(3);

_.fp=function(){this.B=[];this.G={}};(0,_.J)(_.fp,_.dh);_.k=_.fp.prototype;_.k.dl=1;_.k.Pg=0;_.k.zf=function(a){if(0!=this.Pg)return this.ha||(this.ha=[]),this.ha.push(a),!1;var c=this.B[a];if(c){var f=this.G[c];f&&(0,_.xe)(f,a);delete this.B[a];delete this.B[a+1];delete this.B[a+2]}return!!c};
_.k.jj=function(a,c){var f=this.G[a];if(f){this.Pg++;for(var g=(0,_.Ae)(arguments,1),h=0,l=f.length;h<l;h++){var n=f[h];this.B[n+1].apply(this.B[n+2],g)}this.Pg--;if(this.ha&&0==this.Pg)for(;f=this.ha.pop();)this.zf(f);return 0!=h}return!1};_.k.clear=function(a){if(a){var c=this.G[a];c&&((0,_.Be)(c,this.zf,this),delete this.G[a])}else this.B.length=0,this.G={}};_.k.Da=function(a){if(a){var c=this.G[a];return c?c.length:0}a=0;for(c in this.G)a+=this.Da(c);return a}; _.k.C=function(){_.fp.T.C.call(this);delete this.B;delete this.G;delete this.ha};

var Qk;_.Nk=function(a,c){(0,_.ea)(c)||(c=[c]);var f=(0,_.De)(c,function(a){return(0,_.fa)(a)?a:a.Rr+" "+a.duration+"s "+a.timing+" "+a.Le+"s"});(0,_.Mg)(a,"transition",f.join(","))};
_.Pk=function(){if(!(0,_.kf)(Qk))if(_.W)Qk=(0,_.Pn)("10.0");else{var a=window.document.createElement("div"),c=_.ef?"-webkit":_.df?"-moz":_.W?"-ms":_.cf?"-o":null;a.innerHTML='<div style="'+(c?c+"-transition:opacity 1s linear;":"")+'transition:opacity 1s linear;">';a=a.firstChild;c=a.style[(0,_.Cg)("transition")];Qk=""!=("undefined"!==typeof c?c:a.style[(0,_.Fg)(a,"transition")]||"")}return Qk};

_.Rn=function(a,c,f){if((0,_.tq)(a))f&&(a=(0,_.H)(a,f));else if(a&&"function"==typeof a.handleEvent)a=(0,_.H)(a.handleEvent,a);else throw Error("t");return 2147483647<c?-1:_.D.setTimeout(a,c||0)};_.Ht=function(a){_.D.clearTimeout(a)};
_.$t=function(){_.Qt="oauth2relay"+String(2147483647*(0,_.Vb)()|0);_.Kt.proxy=_.Qt};_.du=new _.fp;_.Kt={};(0,_.$t)();var wu=(0,_.P)("oauth-flow/client_id");_.Kt.client_id=wu;var Eu=_.Kt,Fu;var Ku=(0,_.P)("oauth-flow/redirectUri");if(Ku)Fu=Ku.replace(/[#][\s\S]*/,"");else{var Lu=_.Rb.Pq(window.location.href);Fu=[(0,_.P)("oauth-flow/callbackUrl"),"?x_origin=",(0,window.encodeURIComponent)(Lu)].join("")}Eu.redirect_uri=Fu;_.Kt.origin=_.Rb.Pq(window.location.href);_.Kt.response_type="token"; var Nu=((0,_.P)("oauth-flow/toastCfg")||"1000:3000:1000").split(":");_.Pt=(0,window.parseInt)(Nu[0]);_.Nt=(0,window.parseInt)(Nu[1]);_.Lt=(0,window.parseInt)(Nu[2]);

var nx;var mx;var lx;var kx;var ix;var hx;var fx;var ex;var dx;var cx;var bx;var ax;var $w;var Zw;var Uw;var Tw;var Sw;var Rw;var Qw;var Pw;var Ow;var Nw;var Lw;var Kw;var Jw;var Iw;var yw;var ww;var vw;var uw;var pw;var ow;var nw;var mw;var lw;var hw;var Zv;var Yv;var Xv;var Wv;var Vv;var Uv;var Tv;var Sv;var Rv;var Qv;var Pv;var Ek;var tv;var sv;var rv;var Bt;Bt=function(a,c,f,g){if(c=a.G[c]){var h=a.B;if(c=(0,_.ue)(c,function(a){return h[a+1]==f&&h[a+2]==g}))return a.zf(c)}return!1};rv=null;
sv=null;tv=null;Ek={};Pv=function(a,c,f){(0,_.Nk)(a,[{Rr:"-webkit-transform",duration:f/1E3,timing:"ease",Le:0}]);(0,_.Nk)(a,[{Rr:"transform",duration:f/1E3,timing:"ease",Le:0}]);(0,_.Rn)(function(){a.style.webkitTransform="translate3d(0px,"+c+"px,0px)";a.style.transform="translate3d(0px,"+c+"px,0px)"},0)};Sv=function(a){if(a=(0,_.wl)(a)){a=["G_USERSTATE_",a.Gb?"E":"U",a.Ke].join("");var c=_.rl[a];c||(c=new _.Vj(a,{Fr:63072E3,path:"/"}),_.rl[a]=c);return c}return new _.dk(Ek.XJ)};
Tv=function(a){a=a&&a.id_token;if(!a||!a.split(".")[1])return null;a=(a.split(".")[1]+"...").replace(/^((....)+).?.?.?$/,"$1");var c=_.Qn;if(!tv){tv={};sv={};rv={};for(var f=0;65>f;f++)tv[f]="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".charAt(f),sv[f]="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_.".charAt(f),rv[sv[f]]=f}for(var f=rv,g=[],h=0;h<a.length;){var l=f[a.charAt(h++)],n=h<a.length?f[a.charAt(h)]:0;++h;var q=h<a.length?f[a.charAt(h)]:0;++h;var t=
h<a.length?f[a.charAt(h)]:0;++h;if(null==l||null==n||null==q||null==t)throw Error();g.push(l<<2|n>>4);64!=q&&(g.push(n<<4&240|q>>2),64!=t&&g.push(q<<6&192|t))}return c(String.fromCharCode.apply(null,g))};Uv=function(){Qv.parentNode.removeChild(Qv)};Vv=function(){var a=Rv+88;Pv(Qv,a,_.Lt);Rv=a};Wv=function(){var a=Rv-88;Pv(Qv,a,_.Pt);Rv=a};Xv=function(a){var c=Sv(a).Hd();a=(0,_.d)();if(c)for(var c=c.split(":"),f;f=c.shift();)f=f.split("="),a[f[0]]=f[1];return a};
Yv=function(a){if(!a)return[];a=a.split("=");return a[1]?a[1].split("|"):[]};Zv=function(a){return(a=Tv(a))?a.sub:null};hw=function(a){var c=a?Vv:Wv,f=a?Wv:Vv;a=a?"-":"";Rv=(0,window.parseInt)(a+88);Qv.style.webkitTransform="translate3d(0px,"+a+88+"px,0px)";Qv.style.transform="translate3d(0px,"+a+88+"px,0px)";Qv.style.display="";Qv.style.visibility="visible";c();(0,_.Rn)(f,_.Pt+_.Nt);(0,_.Rn)(Uv,_.Pt+_.Nt+_.Lt)};lw=function(a){a=a.split(":");return{GB:a[0].split("=")[1],bJ:Yv(a[1]),TM:Yv(a[2]),xM:Yv(a[3])}};
mw=function(a){var c=Zv(a),f;if(f=c)f="X"==Xv(a.cookie_policy)[c];return f};
nw=function(a){var c=(0,_.P)("oauth-flow/toast/position");"top"!==c&&(c="bottom");var f=window.document.createElement("div");Qv=f;f.style.cssText="position:fixed;left:0px;z-index:1000;width:100%;";var g;if((0,_.P)("oauth-flow/improveToastUi")){(0,_.Mg)(f,"visibility","hidden");(0,_.Mg)(f,c,"-40px");(0,_.Mg)(f,"height","128px");g=f;if("desktop"==(0,_.P)("deviceType")){g=window.document.createElement("div");g.style.cssText="float:left;position:relative;left:50%;";f.appendChild(g);var h=window.document.createElement("div");
h.style.cssText="float:left;position:relative;left:-50%";g.appendChild(h);g=h}h="top"==c?"-":"";Rv=(0,window.parseInt)(h+88);Qv.style.webkitTransform="translate3d(0px,"+h+88+"px,0px)";Qv.style.transform="translate3d(0px,"+h+88+"px,0px)"}else(0,_.Mg)(f,"display","none"),(0,_.Mg)(f,c,"20px"),g=window.document.createElement("div"),g.style.cssText="float:left;position:relative;left:50%;",f.appendChild(g),h=window.document.createElement("div"),h.style.cssText="float:left;position:relative;left:-50%",g.appendChild(h),
g=h;h=window;try{for(;h.parent!=h&&h.parent.document;)h=h.parent}catch(l){}h=h.document.body;try{h.insertBefore(f,h.firstChild)}catch(n){}_.Sm.cj({url:":socialhost:/:session_prefix:_/widget/oauthflow/toast",queryParams:{clientId:a.client_id,idToken:a.id_token},where:g,onRestyle:function(){(0,_.P)("oauth-flow/improveToastUi")?"top"===c?hw(!0):hw(!1):f.style.display=""}})};ow=!1;
pw=function(a){var c,f=null;_.yk.iterate(function(a,g){if(0===a.indexOf("G_AUTHUSER_")){var h=(0,_.Fk)(a.substring(11));if(!c||h.Gb&&!c.Gb||h.Gb==c.Gb&&h.Ke>c.Ke)c=h,f=g}});var g=a&&(0,_.Ak)(a);if(null!==f){var h;_.yk.iterate(function(a,f){var l=(0,_.Gk)(a);l&&l.uf&&(g&&l.ep!=g||l.Gb==c.Gb&&l.Ke==c.Ke&&(h=f))});if(h){var l=lw(h);a=l&&l.bJ[Number(f)];l=l&&l.GB;if(a)return{Du:f,nN:a,GB:l}}}return null};uw=null;vw=function(a){return"true"===String(a.immediate)};
ww=function(a,c){var f=null;a&&c&&(f=c.client_id=c.client_id||a.client_id,c.scope=c.scope||a.scope,c.g_user_cookie_policy=a.cookie_policy,c.cookie_policy=c.cookie_policy||a.cookie_policy,c.response_type=c.response_type||a.response_type);if(c){c.issued_at||(c.issued_at=String((0,_.Fn)()));var g=(0,window.parseInt)(c.expires_in,10)||86400;c.error&&(g=(0,_.P)("oauth-flow/errorMaxAge")||86400);c.expires_in=String(g);c.expires_at||(c.expires_at=String((0,_.Fn)()+g));a&&vw(a)||(c["g-oauth-window"]=(uw||
{}).popup);c._aa||c.error||null!=pw(f)||!vw(a)||(c._aa="1");f=c.status={};f.google_logged_in=!!c.session_state;g=f.signed_in=!!c.access_token;f.method=g?c["g-oauth-window"]?"PROMPT":"AUTO":null}return c};yw={};
Iw=function(a,c){var f,g;"string"==typeof a?(f=c,g=a):(f=a,g="token");if(f){var h=(0,_.Al)(f,!0);if(h){var l;if((l=f)&&l.session_state){var n=[],q=[],t=[],v=(0,window.parseInt)(l.authuser,10)||0;n[v]=l.session_state;q[v]=l.issued_at;t[v]=l.expires_at;l=["C="+l.client_id,"S="+n.join("|"),"I="+q.join("|"),"X="+t.join("|")].join(":")}else l=null;l&&h.Kc.write(l);"token"==g&&(h=(0,_.wl)(f.g_user_cookie_policy),!h||h.Gb&&!_.xk?h=null:(l="G_AUTHUSER_"+(_.xk&&h.Gb?"S":"H")+h.Ke,n=_.ql[l],n||(n=new _.yk(l,
(0,_.yl)(h)),_.ql[l]=n),h=n),h&&(f.error?h.clear():f.session_state&&h.write(f.authuser||"0")))}}if(g="token"!==g?(0,_.zl)(g):(0,_.Al)(f))if(f){if(g.Kc.write(f),!_.sl||g.Fj&&"token"!==_.sl)_.sl=g.key}else g.Kc.clear(),_.sl=null;(0,_.Bl)(void 0,void 0)};
Jw=function(a,c){var f=c&&c.key||"token",g=a=ww(c&&c.params,a);(0,_.P)("oauth-flow/toastCfg")&&!mw(g)&&0<=(" "+(g.scope||"")+" ").indexOf(" https://www.googleapis.com/auth/plus.login ")&&"1"===g._aa&&(g._aa="0",ow||(ow=!0,nw(g)));Iw(f,a);a=(0,_.Bl)(f,void 0);if(c){(f=c.iframe)&&f.parentNode.removeChild(f);f=c.popup;g=c.after_redirect;if(f&&"keep_open"!=g)try{f.close()}catch(h){}c.timeout&&(window.clearTimeout(c.timeout),c.timeout=null);c.callback&&(c.callback(a),c.callback=null)}};Kw={};Lw={};
Nw=[];Ow=function(){var a=Nw;if(null!==a){Nw=null;for(var c=0,f=a.length;c<f;c++)a[c]()}};Pw=function(a){var c=_.Qt;return function(f){if(this.f==c&&this.t==_.T.Wd(this.f)&&this.origin==_.T.$d(this.f))return a.apply(this,arguments)}};Qw=0;Rw=function(a){var c={error:"user_signed_out"};c.client_id=a.client_id;c.g_user_cookie_policy=a.g_user_cookie_policy;c.scope=a.scope;c.response_type=a.response_type;c.session_state=a.session_state;return ww(null,c)};
Sw=function(a,c){var f=a||{},g;for(g in _.Kt)(0,_.kf)(f[g])||(f[g]=_.Kt[g]);a=f;f=(0,_.P)("googleapis/overrideClientId");null!=f&&(a.client_id=f);if(!a.redirect_uri||"postmessage"===a.redirect_uri){f=a;g=a.state||"";g=String(g);var h="";if({}.hasOwnProperty.call(Lw,g))h=Lw[g];else{for(var l=2147483647*(0,_.Vb)()|0;;){h=String(l);if(!{}.hasOwnProperty.call(yw,h))break;l+=(0,_.Vb)()}yw[h]=g;Lw[g]=h}f.state=h+"|"+(0,_.Vb)();Kw[a.state]=c}f=a.authorize_uri||(0,_.P)("oauth-flow/authUrl");delete a.authorize_uri;
f+=0<f.indexOf("?")?"&":"?";f+=(0,_.vl)(a);return f=(0,_.Xb)(f)};Tw=function(a){var c=(0,_.$u)(),f=c&&c.scope,c=a&&a.scope,c="string"===typeof c?c.split(" "):c||[];if(f){for(var f=f.split(" "),g=0;g<f.length;++g){var h=f[g];-1==_.Oj.call(c,h)&&c.push(h)}0<c.length&&(a.scope=c.join(" "))}return a};
Uw=function(a){if(!(0,_.kf)(a.include_granted_scopes)){var c=(0,_.P)("include_granted_scopes"),f=(0,_.$u)().include_granted_scopes;(0,_.kf)(c)?a.include_granted_scopes=!!c:(0,_.kf)(f)&&(a.include_granted_scopes="1"==f||"true"==f)}return a};
_.Vw=function(a){if(null===Nw)a&&a();else{a&&Nw.push(a);a=_.Qt;var c=window.document.getElementById(a),f=(new Date).getTime();if(c){if(Qw&&6E4>f-Qw)return;c.parentNode.removeChild(c);if(/Firefox/.test(window.navigator.userAgent))try{window.frames[a]=void 0}catch(g){}(0,_.$t)();a=_.Qt}Qw=f;var h=String(2147483647*(0,_.Vb)()|0);_.T.register("oauth2relayReady:"+h,Pw(function(){_.T.Jd("oauth2relayReady:"+h);Ow()}));_.T.register("oauth2relayReady",Pw(function(){Ow()}));c=Pw(function(a){var c=_.R.Qc;a=
c(a);var f=c=a.state,f=f.replace(/\|.*$/,"");a.state={}.hasOwnProperty.call(yw,f)?yw[f]:null;null!=a.state&&(f=Kw[c],delete Kw[c],Jw(a,f))});_.T.register("oauth2callback:"+h,c);_.T.register("oauth2callback",c);var c=[(0,_.P)("oauth-flow/proxyUrl")||(0,_.P)("oauth-flow/relayUrl"),"?parent=",(0,window.encodeURIComponent)(_.Rb.Pq(window.location.href)),"#rpctoken=",h,"&forcesecure=1"].join(""),f=_.R.Jk(),l=_.R.Fh({name:a,id:a});l.src=c;l.style.width="1px";l.style.height="1px";l.style.position="absolute";
l.style.top="-100px";f.appendChild(l);_.T.tf(a)}};Zw=function(a,c,f,g){var h=Xv(f),l=h[a];c?h[a]="X":delete h[a];var n=[];(0,_.of)(h,function(a,c){n.push(c+"="+a)});c=n.join(":");f=Sv(f);c?f.write(n.join(":")):f.clear();h[a]!==l&&g&&g()};$w=function(a,c){for(var f=a.split(" "),g=c.split(" "),h=(0,_.d)(),l=0,n=g.length;l<n;++l)g[l]&&(h[g[l]]=1);l=0;for(n=f.length;l<n;++l)if(f[l]&&!h[f[l]])return!1;return!0};
ax=function(a){if(!a)return null;var c,f,g=(0,_.Ak)(a);_.fk.iterate(function(a){var l=(0,_.Gk)(a);l&&l.uf&&l.ep===g&&(!c||l.Gb&&!c.Gb||l.Gb==c.Gb&&l.Ke>c.Ke)&&(c=l,f=a)});return f};bx=function(a){var c=_.R.Jk(),f=_.R.Fh();f.src=a.uri;f.style.width="1px";f.style.height="1px";f.style.position="absolute";f.style.top="-100px";a.timeout=window.setTimeout(function(){f.parentNode&&f.parentNode.removeChild(f)},3E5);c.appendChild(f)};
cx=function(a,c){if(uw){var f=uw.popup,g=uw.after_redirect;if(f&&"keep_open"!=g&&!vw(a))try{f.close()}catch(h){}}f=uw={};"key"in a&&(f.key=a.key,delete a.key);a=Uw(a);uw.params=Tw(a);uw.callback=function(f){mw(f)&&(vw(a)?f=Rw(f):f.error||Zw(Zv(f),!1,f.cookie_policy));(c||function(){})(ww(a,f))};f.uri=Sw(a,f);return f};dx=function(a,c){(0,_.Vw)(function(){_.T.call(_.Qt,"check_session_state",function(a){c.call(null,a)},a.session_state,a.client_id)})};
ex=function(a){a=_.R.Qc("#"+(0,_.vl)(a));if(!vw(a))return null;var c=a.key||ax(a.client_id);return(c=(0,_.Bl)(c,!0,!0))&&c.client_id===a.client_id&&$w(a.scope,c.scope)&&$w(a.response_type,c.response_type)?c:null};
fx=function(a,c){var f=_.R.Qc();a.hl=f.lang||f.hl||(0,_.P)("lang");var g=cx(a,c);a.after_redirect&&(g.after_redirect=a.after_redirect);if(null!=a.scope){var h=function(){(0,_.Vw)(function(){if(g.popup)g.popup.focus();else if(vw(a))bx(g);else{var c=Math.min((0,_.P)("oauth-flow/authWindowWidth",650),window.screen.width-20),f=Math.min((0,_.P)("oauth-flow/authWindowHeight",600),window.screen.height-30);uw.popup=window.open(g.uri,"_blank",["toolbar=no","location="+(window.opera?"no":"yes"),"directories=no,status=no,menubar=no,scrollbars=yes,resizable=yes,copyhistory=no",
"width="+c,"height="+f,"top="+(window.screen.height-f)/2,"left="+(window.screen.width-c)/2].join())}})},l=ex(a);!(0,_.P)("oauth-flow/disableOpt")&&l?dx(l,function(a){a?Jw(l,uw):h()}):h()}else Jw(null,uw)};
_.gx=function(a,c){var f=a||{},g=c||function(){};if((0,_.P)("oauth-flow/disableOpt")||(0,_.P)("isLoggedIn")||!vw(f))fx(f,g);else{var h=(0,_.d)();h.client_id=f.client_id;h.session_state=null;dx(h,function(a){a?(a=(0,_.d)(),a.error="immediate_failed_user_logged_out",g(ww(f,a))):((0,_.Fa)("isLoggedIn",!0),fx(f,g))})}};
hx=function(a){a||(a=(0,_.Bl)(void 0,!0));a&&"object"===typeof a||(a={error:"invalid_request",error_description:"no callback data"});var c=a.error_description;c&&window.console&&(window.console.error(a.error),window.console.error(c));a.error||(_.Nd.drw=null);Iw(a);if(c=a.authuser)(0,_.P)("googleapis.config/sessionIndex"),(0,_.Fa)("googleapis.config/sessionIndex",c);_.du.jj("oauth",a)};ix=function(a,c,f){var g=Zv(a);g&&Zw(g,!0,c,function(){f&&f(Rw(a))})};_.jx=_.Qj.Qe;kx=null;
lx=["request_visible_actions","client_id","scope"];_.ox=function(a,c){if("force"!==a.approvalprompt){var f=mx(a);f.immediate=!0;delete f.redirect_uri;delete f.approval_prompt;var g;if(g=!c)if(kx){for(g=0;g<lx.length;g++){var h=lx[g];f[h]!==kx[h]&&window.console&&window.console.log&&window.console.log("Ignoring mismatched auth param "+h+"="+f[h])}g=!0}else kx=f,g=!1;g||nx(f)}};
mx=function(a){var c=a.redirecturi||"postmessage",f=(0,_.Ge)((a.scope||"").replace(/[\s\xa0]+/g," ")),c={client_id:a.clientid,redirect_uri:c,response_type:"code token id_token gsession",scope:f};a.approvalprompt&&(c.approval_prompt=a.approvalprompt);a.state&&(c.state=a.state);a.openidrealm&&(c["openid.realm"]=a.openidrealm);f="offline"==a.accesstype?!0:(f=a.redirecturi)&&"postmessage"!=f;f&&(c.access_type="offline");a.requestvisibleactions&&(c.request_visible_actions=(0,_.Ge)(a.requestvisibleactions.replace(/[\s\xa0]+/g,
" ")));a.after_redirect&&(c.after_redirect=a.after_redirect);a.cookiepolicy&&"none"!==a.cookiepolicy&&(c.cookie_policy=a.cookiepolicy);"undefined"!=typeof c.includegrantedscopes&&(c.include_granted_scopes=a.includegrantedscopes);a.e&&(c.e=a.e);(a=a.authuser||(0,_.P)("googleapis.config/sessionIndex"))&&(c.authuser=a);(a=(0,_.P)("useoriginassocialhost"))&&(c.use_origin_as_socialhost=a);return c};nx=function(a){(0,_.nf)("waaf0","signin",0);(0,_.gx)(a,function(a){(0,_.nf)("waaf1","signin",0);hx(a)})};
_.px=function(a){a=mx(a);(0,_.Fa)("oauth-flow/authWindowWidth",445);(0,_.Fa)("oauth-flow/authWindowHeight",615);nx(a)};_.qx=function(a){Bt(_.du,"oauth",a);var c=_.du.G.oauth;c||(c=_.du.G.oauth=[]);var f=_.du.dl;_.du.B[f]="oauth";_.du.B[f+1]=a;_.du.B[f+2]=void 0;_.du.dl=f+3;c.push(f)};
var Jx;_.sx=function(a){return a.cookiepolicy?!0:((0,_.rx)("cookiepolicy is a required field.  See https://developers.google.com/+/web/signin/#button_attr_cookiepolicy for more information."),!1)};_.rx=function(a){window.console&&(window.console.error?window.console.error(a):window.console.log&&window.console.log(a))};_.Ix=function(a,c){var f=(0,_.$u)();(0,_.ib)(a,f);f=Tw(f);if((0,_.sx)(f)){var g=(0,_.Ax)(f);(0,_.Gx)(f);c?(0,_.ud)(c,"click",function(){(0,_.Hx)(f,g)}):(0,_.Hx)(f,g)}};
_.Ax=function(a){var c=new Jx;(0,_.qx)(function(f){if(c.B&&f){if(f.access_token){(0,_.Fa)("isPlusUser",!0);var g={};(0,_.ib)(f,g);g.client_id=a.clientid;g.scope=a.scope}c.B=!1;if(f.access_token&&"consent"==f.prompt){g=f["g-oauth-window"];f=f.id_token;var h=a.apppackagename;if(h&&g){var l=!0;try{l=g.closed}catch(n){}l||(f=(0,_.P)("iframes/:socialhost:")+"/_/history/otaappinstall?clientId="+(0,window.encodeURIComponent)(a.clientid)+"&appId="+(0,window.encodeURIComponent)(h)+"&idToken="+(0,window.encodeURIComponent)(f),
f=(0,_.Xb)(f),g.location.href=f)}}else if(g=f["g-oauth-window"],a.apppackagename&&g)try{g.close()}catch(q){}}});return c};Jx=function(){this.B=!1};_.Gx=function(a){a=(0,_.Kx)(a);(0,_.Vx)(a.callback);(0,_.Vw)(function(){(0,_.ox)(a)})};
_.Kx=function(a){(0,_.uy)(a,"https://www.googleapis.com/auth/plus.login");a.apppackagename&&(a.after_redirect="keep_open");a.redirecturi&&delete a.redirecturi;(0,_.P)("enableMultilogin")||(a.authuser=0);a.apppackagename&&(a.apppackagename=a.apppackagename.replace(/^[\s\xa0]+|[\s\xa0]+$/g,""));return a};_.uy=function(a,c){var f=a.scope||"";0>f.indexOf(c)&&(f+=" "+c);a.scope=f}; _.Vx=function(a){if("string"===typeof a)if(window[a])a=window[a];else{(0,_.rx)('Callback function named "'+a+'" not found');return}a&&(0,_.qx)(a)};_.Hx=function(a,c){c.B=!0;var f=a,f=(0,_.Kx)(f);(0,_.px)(f)};
(0,_.b)("gapi.auth.authorize",_.gx);(0,_.b)("gapi.auth.checkSessionState",dx);(0,_.b)("gapi.auth.getAuthHeaderValueForFirstParty",_.jx);(0,_.b)("gapi.auth.getToken",function(a,c){return(0,_.Bl)(a,c)});(0,_.b)("gapi.auth.getVersionInfo",function(a,c){(0,_.Vw)(function(){var f=_.Qt,g=_.Qj.Qe()||"",h=null,l=null;g&&(l=g.split(" "),2==l.length&&(h=l[1]));h?_.T.call(f,"get_versioninfo",function(c){a(c)},h,c):a()})});(0,_.b)("gapi.auth.init",_.Vw);(0,_.b)("gapi.auth.setToken",Iw);
(0,_.b)("gapi.auth.signIn",function(a){(0,_.Ix)(a)});(0,_.b)("gapi.auth.signOut",function(){var a=(0,_.Bl)(void 0,void 0);a&&ix(a,a.cookie_policy,hx)});(0,_.b)("gapi.auth.unsafeUnpackIdToken",Tv);(0,_.b)("gapi.auth._pimf",_.ox);(0,_.b)("gapi.auth._oart",nw);
var fz=(0,_.$u)();if(fz.clientid&&fz.scope&&fz.cookiepolicy){var gz="gapi.auth.pageLevelConfig("+(0,_.Xf)(fz).sort().join("-")+")";(0,_.La)(gz)&&(0,_.vi)(gz)}fz.clientid&&fz.scope&&fz.callback&&!(0,_.P)("disableRealtimeCallback")?(0,_.Gx)(fz):(0,_.Vw)();

_.uy=function(a,c){""==(a.scope||"").replace(" ","")&&(a.scope=c)};
});

// Copyright 2002-2013 Google Inc.