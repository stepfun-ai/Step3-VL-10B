(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,725917,640289,e=>{"use strict";let t,r;var o=e.i(408466);function a(e,t,r,o,a,n){return{enabled:e.selectable({base:t,dark:r,solid:o,muted:a,state:"enabled",tone:n}),hovered:e.selectable({base:t,dark:r,solid:o,muted:a,state:"hovered",tone:n}),pressed:e.selectable({base:t,dark:r,solid:o,muted:a,state:"pressed",tone:n}),selected:e.selectable({base:t,dark:r,solid:o,muted:a,state:"selected",tone:n}),disabled:e.selectable({base:t,dark:r,solid:o,muted:a,state:"disabled",tone:n})}}function n(e,t,r,o,a,n){return{default:e.button({base:t,dark:r,solid:o.default,muted:a.default,mode:n}),primary:e.button({base:t,dark:r,solid:o.primary,muted:a.primary,mode:n}),positive:e.button({base:t,dark:r,solid:o.positive,muted:a.positive,mode:n}),caution:e.button({base:t,dark:r,solid:o.caution,muted:a.caution,mode:n}),critical:e.button({base:t,dark:r,solid:o.critical,muted:a.critical,mode:n})}}let i="hsl(0, 0%, 0%)",d="hsl(0, 0%, 100%)",l={default:{lightest:"hsl(0, 0%, 95%)",lighter:"hsl(0, 0%, 70%)",light:"hsl(0, 0%, 65%)",base:"hsl(0, 0%, 50%)",dark:"hsl(0, 0%, 35%)",darker:"hsl(0, 0%, 20%)",darkest:"hsl(0, 0%, 5%)"},transparent:{lightest:"hsl(240, 100%, 95%)",lighter:"hsl(240, 100%, 70%)",light:"hsl(240, 100%, 65%)",base:"hsl(240, 100%, 50%)",dark:"hsl(240, 100%, 35%)",darker:"hsl(240, 100%, 20%)",darkest:"hsl(240, 100%, 5%)"},primary:{lightest:"hsl(240, 100%, 95%)",lighter:"hsl(240, 100%, 70%)",light:"hsl(240, 100%, 65%)",base:"hsl(240, 100%, 50%)",dark:"hsl(240, 100%, 35%)",darker:"hsl(240, 100%, 20%)",darkest:"hsl(240, 100%, 5%)"},positive:{lightest:"hsl(120, 100%, 95%)",lighter:"hsl(120, 100%, 70%)",light:"hsl(120, 100%, 65%)",base:"hsl(120, 100%, 50%)",dark:"hsl(120, 100%, 35%)",darker:"hsl(120, 100%, 20%)",darkest:"hsl(120, 100%, 5%)"},caution:{lightest:"hsl(60, 100%, 95%)",lighter:"hsl(60, 100%, 70%)",light:"hsl(60, 100%, 65%)",base:"hsl(60, 100%, 50%)",dark:"hsl(60, 100%, 35%)",darker:"hsl(60, 100%, 20%)",darkest:"hsl(60, 100%, 5%)"},critical:{lightest:"hsl(0, 100%, 95%)",lighter:"hsl(0, 100%, 70%)",light:"hsl(0, 100%, 65%)",base:"hsl(0, 100%, 50%)",dark:"hsl(0, 100%, 35%)",darker:"hsl(0, 100%, 20%)",darkest:"hsl(0, 100%, 5%)"}},s={gray:"hsl(0, 0%, 50%)",red:"hsl(0, 100%, 50%)",orange:"hsl(30, 100%, 50%)",yellow:"hsl(60, 100%, 50%)",green:"hsl(120, 100%, 50%)",cyan:"hsl(180, 100%, 50%)",blue:"hsl(240, 100%, 50%)",purple:"hsl(270, 100%, 50%)",magenta:"hsl(300, 100%, 50%)"},c={transparent:{bg:[l.transparent.darkest,l.transparent.lightest],fg:[l.transparent.lightest,l.transparent.darkest],border:[l.transparent.darker,l.transparent.lighter],focusRing:[l.transparent.base,l.transparent.base]},primary:{bg:[l.primary.darkest,l.primary.lightest],fg:[l.primary.lightest,l.primary.darkest],border:[l.primary.darker,l.primary.lighter],focusRing:[l.primary.base,l.primary.base]},positive:{bg:[l.positive.darkest,l.positive.lightest],fg:[l.positive.lightest,l.positive.darkest],border:[l.positive.darker,l.positive.lighter],focusRing:[l.positive.base,l.positive.base]},caution:{bg:[l.caution.darkest,l.caution.lightest],fg:[l.caution.lightest,l.caution.darkest],border:[l.caution.darker,l.caution.lighter],focusRing:[l.caution.base,l.caution.base]},critical:{bg:[l.critical.darkest,l.critical.lightest],fg:[l.critical.lightest,l.critical.darkest],border:[l.critical.darker,l.critical.lighter],focusRing:[l.critical.base,l.critical.base]}},u={base:({dark:e,name:t})=>"default"===t?{bg:e?i:d,fg:e?d:i,border:e?l.default.darkest:l.default.lightest,focusRing:l.primary.base,shadow:{outline:i,umbra:i,penumbra:i,ambient:i},skeleton:{from:e?d:i,to:e?d:i}}:{bg:c[t].bg[+!e],fg:c[t].fg[+!e],border:c[t].border[+!e],focusRing:c[t].focusRing[+!e],shadow:{outline:i,umbra:i,penumbra:i,ambient:i},skeleton:{from:e?d:i,to:e?d:i}},solid:({base:e,dark:t,state:r,tone:o})=>{let a=l[o];return"hovered"===r?{bg:t?a.light:a.dark,bg2:t?a.light:a.dark,border:t?a.lighter:a.darker,fg:t?a.darkest:a.lightest,icon:t?a.darkest:a.lightest,muted:{fg:i},accent:{fg:i},link:{fg:i},code:{bg:i,fg:i},skeleton:e.skeleton}:{bg:a.base,bg2:a.base,border:t?a.light:a.dark,fg:t?a.darkest:a.lightest,icon:t?a.darkest:a.lightest,muted:{fg:i},accent:{fg:i},link:{fg:i},code:{bg:i,fg:i},skeleton:e.skeleton}},muted:({base:e,dark:t,state:r,tone:o})=>{let a=l[o];return"hovered"===r?{bg:t?a.darker:a.lighter,bg2:t?a.darker:a.lighter,border:t?a.lighter:a.darker,fg:t?a.lightest:a.darkest,icon:t?a.lightest:a.darkest,muted:{fg:i},accent:{fg:i},link:{fg:i},code:{bg:i,fg:i},skeleton:e.skeleton}:{bg:t?a.darkest:a.lightest,bg2:t?a.darkest:a.lightest,border:t?a.darker:a.lighter,fg:t?a.lighter:a.darker,icon:t?a.lighter:a.darker,muted:{fg:i},accent:{fg:i},link:{fg:i},code:{bg:i,fg:i},skeleton:e.skeleton}},button:({base:e,mode:t,muted:r,solid:o})=>"bleed"===t?{...r,enabled:{bg:"transparent",bg2:"transparent",fg:r.enabled.fg,icon:r.enabled.fg,border:"transparent",muted:{fg:i},accent:{fg:i},link:{fg:i},code:{bg:i,fg:i},skeleton:e.skeleton},hovered:{bg:r.enabled.bg,bg2:r.enabled.bg,fg:r.hovered.fg,icon:r.hovered.fg,border:"transparent",muted:{fg:i},accent:{fg:i},link:{fg:i},code:{bg:i,fg:i},skeleton:e.skeleton}}:"ghost"===t?{...o,enabled:r.enabled}:o,card:({base:e})=>({bg:i,bg2:i,fg:i,icon:i,border:i,muted:{fg:i},accent:{fg:i},link:{fg:i},code:{bg:i,fg:i},skeleton:e.skeleton}),input:()=>({bg:i,bg2:i,fg:i,border:i,placeholder:i}),selectable:({muted:e,state:t,tone:r})=>e[r][t],spot:({key:e})=>s[e],syntax:()=>({atrule:i,attrName:i,attrValue:i,attribute:i,boolean:i,builtin:i,cdata:i,char:i,class:i,className:i,comment:i,constant:i,deleted:i,doctype:i,entity:i,function:i,hexcode:i,id:i,important:i,inserted:i,keyword:i,number:i,operator:i,prolog:i,property:i,pseudoClass:i,pseudoElement:i,punctuation:i,regex:i,selector:i,string:i,symbol:i,tag:i,unit:i,url:i,variable:i})};function f(e={}){let t={...u,...e};return{light:b(t,!1),dark:b(t,!0)}}function b(e,t){return{default:g(e,t,"default"),transparent:g(e,t,"transparent"),primary:g(e,t,"primary"),positive:g(e,t,"positive"),caution:g(e,t,"caution"),critical:g(e,t,"critical")}}function g(e,t,r){let o=e.base({dark:t,name:r}),i={default:{enabled:e.solid({base:o,dark:t,tone:"default",name:r,state:"enabled"}),disabled:e.solid({base:o,dark:t,tone:"default",name:r,state:"disabled"}),hovered:e.solid({base:o,dark:t,tone:"default",name:r,state:"hovered"}),pressed:e.solid({base:o,dark:t,tone:"default",name:r,state:"pressed"}),selected:e.solid({base:o,dark:t,tone:"default",name:r,state:"selected"})},transparent:{enabled:e.solid({base:o,dark:t,tone:"transparent",name:r,state:"enabled"}),disabled:e.solid({base:o,dark:t,tone:"transparent",name:r,state:"disabled"}),hovered:e.solid({base:o,dark:t,tone:"transparent",name:r,state:"hovered"}),pressed:e.solid({base:o,dark:t,tone:"transparent",name:r,state:"pressed"}),selected:e.solid({base:o,dark:t,tone:"transparent",name:r,state:"selected"})},primary:{enabled:e.solid({base:o,dark:t,tone:"primary",name:r,state:"enabled"}),disabled:e.solid({base:o,dark:t,tone:"primary",name:r,state:"disabled"}),hovered:e.solid({base:o,dark:t,tone:"primary",name:r,state:"hovered"}),pressed:e.solid({base:o,dark:t,tone:"primary",name:r,state:"pressed"}),selected:e.solid({base:o,dark:t,tone:"primary",name:r,state:"selected"})},positive:{enabled:e.solid({base:o,dark:t,tone:"positive",name:r,state:"enabled"}),disabled:e.solid({base:o,dark:t,tone:"positive",name:r,state:"disabled"}),hovered:e.solid({base:o,dark:t,tone:"positive",name:r,state:"hovered"}),pressed:e.solid({base:o,dark:t,tone:"positive",name:r,state:"pressed"}),selected:e.solid({base:o,dark:t,tone:"positive",name:r,state:"selected"})},caution:{enabled:e.solid({base:o,dark:t,tone:"caution",name:r,state:"enabled"}),disabled:e.solid({base:o,dark:t,tone:"caution",name:r,state:"disabled"}),hovered:e.solid({base:o,dark:t,tone:"caution",name:r,state:"hovered"}),pressed:e.solid({base:o,dark:t,tone:"caution",name:r,state:"pressed"}),selected:e.solid({base:o,dark:t,tone:"caution",name:r,state:"selected"})},critical:{enabled:e.solid({base:o,dark:t,tone:"critical",name:r,state:"enabled"}),disabled:e.solid({base:o,dark:t,tone:"critical",name:r,state:"disabled"}),hovered:e.solid({base:o,dark:t,tone:"critical",name:r,state:"hovered"}),pressed:e.solid({base:o,dark:t,tone:"critical",name:r,state:"pressed"}),selected:e.solid({base:o,dark:t,tone:"critical",name:r,state:"selected"})}},d={default:{enabled:e.muted({base:o,dark:t,tone:"default",name:r,state:"enabled"}),disabled:e.muted({base:o,dark:t,tone:"default",name:r,state:"disabled"}),hovered:e.muted({base:o,dark:t,tone:"default",name:r,state:"hovered"}),pressed:e.muted({base:o,dark:t,tone:"default",name:r,state:"pressed"}),selected:e.muted({base:o,dark:t,tone:"default",name:r,state:"selected"})},transparent:{enabled:e.muted({base:o,dark:t,tone:"transparent",name:r,state:"enabled"}),disabled:e.muted({base:o,dark:t,tone:"transparent",name:r,state:"disabled"}),hovered:e.muted({base:o,dark:t,tone:"transparent",name:r,state:"hovered"}),pressed:e.muted({base:o,dark:t,tone:"transparent",name:r,state:"pressed"}),selected:e.muted({base:o,dark:t,tone:"transparent",name:r,state:"selected"})},primary:{enabled:e.muted({base:o,dark:t,tone:"primary",name:r,state:"enabled"}),disabled:e.muted({base:o,dark:t,tone:"primary",name:r,state:"disabled"}),hovered:e.muted({base:o,dark:t,tone:"primary",name:r,state:"hovered"}),pressed:e.muted({base:o,dark:t,tone:"primary",name:r,state:"pressed"}),selected:e.muted({base:o,dark:t,tone:"primary",name:r,state:"selected"})},positive:{enabled:e.muted({base:o,dark:t,tone:"positive",name:r,state:"enabled"}),disabled:e.muted({base:o,dark:t,tone:"positive",name:r,state:"disabled"}),hovered:e.muted({base:o,dark:t,tone:"positive",name:r,state:"hovered"}),pressed:e.muted({base:o,dark:t,tone:"positive",name:r,state:"pressed"}),selected:e.muted({base:o,dark:t,tone:"positive",name:r,state:"selected"})},caution:{enabled:e.muted({base:o,dark:t,tone:"caution",name:r,state:"enabled"}),disabled:e.muted({base:o,dark:t,tone:"caution",name:r,state:"disabled"}),hovered:e.muted({base:o,dark:t,tone:"caution",name:r,state:"hovered"}),pressed:e.muted({base:o,dark:t,tone:"caution",name:r,state:"pressed"}),selected:e.muted({base:o,dark:t,tone:"caution",name:r,state:"selected"})},critical:{enabled:e.muted({base:o,dark:t,tone:"critical",name:r,state:"enabled"}),disabled:e.muted({base:o,dark:t,tone:"critical",name:r,state:"disabled"}),hovered:e.muted({base:o,dark:t,tone:"critical",name:r,state:"hovered"}),pressed:e.muted({base:o,dark:t,tone:"critical",name:r,state:"pressed"}),selected:e.muted({base:o,dark:t,tone:"critical",name:r,state:"selected"})}};return{base:o,button:{default:n(e,o,t,i,d,"default"),ghost:n(e,o,t,i,d,"ghost"),bleed:n(e,o,t,i,d,"bleed")},card:{enabled:e.card({base:o,dark:t,name:r,state:"enabled",solid:i,muted:d}),disabled:e.card({base:o,dark:t,name:r,state:"disabled",solid:i,muted:d}),hovered:e.card({base:o,dark:t,name:r,state:"hovered",solid:i,muted:d}),pressed:e.card({base:o,dark:t,name:r,state:"pressed",solid:i,muted:d}),selected:e.card({base:o,dark:t,name:r,state:"selected",solid:i,muted:d})},dark:t,input:{default:{enabled:e.input({base:o,dark:t,mode:"default",state:"enabled",solid:i.default,muted:d.default}),disabled:e.input({base:o,dark:t,mode:"default",state:"disabled",solid:i.default,muted:d.default}),hovered:e.input({base:o,dark:t,mode:"default",state:"hovered",solid:i.default,muted:d.default}),readOnly:e.input({base:o,dark:t,mode:"default",state:"readOnly",solid:i.default,muted:d.default})},invalid:{enabled:e.input({base:o,dark:t,mode:"invalid",state:"enabled",solid:i.default,muted:d.default}),disabled:e.input({base:o,dark:t,mode:"invalid",state:"disabled",solid:i.default,muted:d.default}),hovered:e.input({base:o,dark:t,mode:"invalid",state:"hovered",solid:i.default,muted:d.default}),readOnly:e.input({base:o,dark:t,mode:"invalid",state:"readOnly",solid:i.default,muted:d.default})}},selectable:{default:a(e,o,t,i,d,"default"),primary:a(e,o,t,i,d,"primary"),positive:a(e,o,t,i,d,"positive"),caution:a(e,o,t,i,d,"caution"),critical:a(e,o,t,i,d,"critical")},spot:{gray:e.spot({base:o,dark:t,key:"gray"}),blue:e.spot({base:o,dark:t,key:"blue"}),purple:e.spot({base:o,dark:t,key:"purple"}),magenta:e.spot({base:o,dark:t,key:"magenta"}),red:e.spot({base:o,dark:t,key:"red"}),orange:e.spot({base:o,dark:t,key:"orange"}),yellow:e.spot({base:o,dark:t,key:"yellow"}),green:e.spot({base:o,dark:t,key:"green"}),cyan:e.spot({base:o,dark:t,key:"cyan"})},syntax:e.syntax({base:o,dark:t}),solid:i,muted:d}}let p={sizes:[{distance:-4,size:19},{distance:-4,size:25},{distance:-8,size:33},{distance:-12,size:49}],focusRing:{offset:1,width:1}},h={textWeight:"medium",border:{width:1},focusRing:{offset:-1,width:1}},m={border:{width:1},focusRing:{offset:-1,width:1},shadow:{outline:.5}},y=[320,640,960,1280,1600,1920],v=[360,600,900,1200,1800,2400],w={dialog:{zOffset:600},popover:{zOffset:400},tooltip:{zOffset:200}},k=[0,1,3,6,9,12,21],x=[null,{umbra:[0,0,0,0],penumbra:[0,0,0,0],ambient:[0,0,0,0]},{umbra:[0,3,5,-2],penumbra:[0,6,10,0],ambient:[0,1,18,1]},{umbra:[0,7,8,-4],penumbra:[0,12,17,2],ambient:[0,5,22,4]},{umbra:[0,9,11,-5],penumbra:[0,18,28,2],ambient:[0,7,34,6]},{umbra:[0,11,15,-7],penumbra:[0,24,38,3],ambient:[0,9,46,8]}],$=[0,4,8,12,20,32,52,84,136,220],S={border:{width:1},checkbox:{size:17,focusRing:{offset:-1,width:1}},radio:{size:17,markSize:9,focusRing:{offset:-1,width:1}},switch:{width:25,height:17,padding:5,transitionDurationMs:150,transitionTimingFunction:"ease-out",focusRing:{offset:1,width:1}},select:{focusRing:{offset:-1,width:1}},text:{focusRing:{offset:-1,width:1}}},R={button:{root:{transition:"background-color 100ms,border-color 100ms,color 100ms"}}},_={code:{family:"ui-monospace, SFMono-Regular, SF Mono, Menlo, Consolas, Liberation Mono, monospace",weights:{regular:400,medium:500,semibold:600,bold:700},sizes:[{ascenderHeight:4,descenderHeight:4,fontSize:10,iconSize:17,lineHeight:15,letterSpacing:0},{ascenderHeight:5,descenderHeight:5,fontSize:13,iconSize:21,lineHeight:19,letterSpacing:0},{ascenderHeight:6,descenderHeight:6,fontSize:16,iconSize:25,lineHeight:23,letterSpacing:0},{ascenderHeight:7,descenderHeight:7,fontSize:19,iconSize:29,lineHeight:27,letterSpacing:0},{ascenderHeight:8,descenderHeight:8,fontSize:22,iconSize:33,lineHeight:31,letterSpacing:0}]},heading:{family:'Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", "Liberation Sans", Helvetica, Arial, system-ui, sans-serif',weights:{regular:700,medium:800,semibold:900,bold:900},sizes:[{ascenderHeight:5,descenderHeight:5,fontSize:13,iconSize:17,lineHeight:19,letterSpacing:0},{ascenderHeight:6,descenderHeight:6,fontSize:16,iconSize:25,lineHeight:23,letterSpacing:0},{ascenderHeight:7,descenderHeight:7,fontSize:21,iconSize:33,lineHeight:29,letterSpacing:0},{ascenderHeight:8,descenderHeight:8,fontSize:27,iconSize:41,lineHeight:35,letterSpacing:0},{ascenderHeight:9.5,descenderHeight:8.5,fontSize:33,iconSize:49,lineHeight:41,letterSpacing:0},{ascenderHeight:10.5,descenderHeight:9.5,fontSize:38,iconSize:53,lineHeight:47,letterSpacing:0}]},label:{family:'Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", "Liberation Sans", system-ui, sans-serif',weights:{regular:600,medium:700,semibold:800,bold:900},sizes:[{ascenderHeight:2,descenderHeight:2,fontSize:8.1,iconSize:13,lineHeight:10,letterSpacing:.5},{ascenderHeight:2,descenderHeight:2,fontSize:9.5,iconSize:15,lineHeight:11,letterSpacing:.5},{ascenderHeight:2,descenderHeight:2,fontSize:10.8,iconSize:17,lineHeight:12,letterSpacing:.5},{ascenderHeight:2,descenderHeight:2,fontSize:12.25,iconSize:19,lineHeight:13,letterSpacing:.5},{ascenderHeight:2,descenderHeight:2,fontSize:13.6,iconSize:21,lineHeight:14,letterSpacing:.5},{ascenderHeight:2,descenderHeight:2,fontSize:15,iconSize:23,lineHeight:15,letterSpacing:.5}]},text:{family:'Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", "Liberation Sans", Helvetica, Arial, system-ui, sans-serif',weights:{regular:400,medium:500,semibold:600,bold:700},sizes:[{ascenderHeight:4,descenderHeight:4,fontSize:10,iconSize:17,lineHeight:15,letterSpacing:0},{ascenderHeight:5,descenderHeight:5,fontSize:13,iconSize:21,lineHeight:19,letterSpacing:0},{ascenderHeight:6,descenderHeight:6,fontSize:15,iconSize:25,lineHeight:23,letterSpacing:0},{ascenderHeight:7,descenderHeight:7,fontSize:18,iconSize:29,lineHeight:27,letterSpacing:0},{ascenderHeight:8,descenderHeight:8,fontSize:21,iconSize:33,lineHeight:31,letterSpacing:0}]}},z=new WeakMap;function j(e){let t=z.get(e);if(t)return t;let r=E(e,e.card.enabled),o={_blend:e._blend||(e.dark?"screen":"multiply"),_dark:e.dark,accent:r.accent,avatar:r.avatar,backdrop:e.base.shadow.ambient,badge:r.badge,bg:e.base.bg,border:e.base.border,button:{default:C(e,e.button.default),ghost:C(e,e.button.ghost),bleed:C(e,e.button.bleed)},code:r.code,fg:e.base.fg,focusRing:e.base.focusRing,icon:r.muted.fg,input:{default:I(e.input.default),invalid:I(e.input.invalid)},kbd:r.kbd,link:r.link,muted:{...r.muted,bg:e.selectable?.default.enabled.bg2||e.base.bg},selectable:C(e,e.selectable||e.muted),shadow:e.base.shadow,skeleton:{from:e.skeleton?.from||e.base.border,to:e.skeleton?.to||e.base.border},syntax:e.syntax};return z.set(e,o),o}function C(e,t){return{default:{enabled:E(e,t.default.enabled),hovered:E(e,t.default.hovered),pressed:E(e,t.default.pressed),selected:E(e,t.default.selected),disabled:E(e,t.default.disabled)},neutral:{enabled:E(e,t.default.enabled),hovered:E(e,t.default.hovered),pressed:E(e,t.default.pressed),selected:E(e,t.default.selected),disabled:E(e,t.default.disabled)},primary:{enabled:E(e,t.primary.enabled),hovered:E(e,t.primary.hovered),pressed:E(e,t.primary.pressed),selected:E(e,t.primary.selected),disabled:E(e,t.primary.disabled)},suggest:{enabled:E(e,t.primary.enabled),hovered:E(e,t.primary.hovered),pressed:E(e,t.primary.pressed),selected:E(e,t.primary.selected),disabled:E(e,t.primary.disabled)},positive:{enabled:E(e,t.positive.enabled),hovered:E(e,t.positive.hovered),pressed:E(e,t.positive.pressed),selected:E(e,t.positive.selected),disabled:E(e,t.positive.disabled)},caution:{enabled:E(e,t.caution.enabled),hovered:E(e,t.caution.hovered),pressed:E(e,t.caution.pressed),selected:E(e,t.caution.selected),disabled:E(e,t.caution.disabled)},critical:{enabled:E(e,t.critical.enabled),hovered:E(e,t.critical.hovered),pressed:E(e,t.critical.pressed),selected:E(e,t.critical.selected),disabled:E(e,t.critical.disabled)}}}function E(e,t){return{...t,avatar:{gray:{bg:e.spot.gray,fg:e.base.bg},blue:{bg:e.spot.blue,fg:e.base.bg},purple:{bg:e.spot.purple,fg:e.base.bg},magenta:{bg:e.spot.magenta,fg:e.base.bg},red:{bg:e.spot.red,fg:e.base.bg},orange:{bg:e.spot.orange,fg:e.base.bg},yellow:{bg:e.spot.yellow,fg:e.base.bg},green:{bg:e.spot.green,fg:e.base.bg},cyan:{bg:e.spot.cyan,fg:e.base.bg}},badge:{default:{bg:e.muted.default.enabled.bg,fg:e.muted.default.enabled.fg,dot:e.muted.default.enabled.muted.fg,icon:e.muted.default.enabled.muted.fg},neutral:{bg:e.muted.transparent.enabled.bg,fg:e.muted.transparent.enabled.fg,dot:e.muted.transparent.enabled.muted.fg,icon:e.muted.transparent.enabled.muted.fg},primary:{bg:e.muted.primary.enabled.bg,fg:e.muted.primary.enabled.fg,dot:e.muted.primary.enabled.muted.fg,icon:e.muted.primary.enabled.muted.fg},suggest:{bg:e.muted.primary.enabled.bg,fg:e.muted.primary.enabled.fg,dot:e.muted.primary.enabled.muted.fg,icon:e.muted.primary.enabled.muted.fg},positive:{bg:e.muted.positive.enabled.bg,fg:e.muted.positive.enabled.fg,dot:e.muted.positive.enabled.muted.fg,icon:e.muted.positive.enabled.muted.fg},caution:{bg:e.muted.caution.enabled.bg,fg:e.muted.caution.enabled.fg,dot:e.muted.caution.enabled.muted.fg,icon:e.muted.caution.enabled.muted.fg},critical:{bg:e.muted.critical.enabled.bg,fg:e.muted.critical.enabled.fg,dot:e.muted.critical.enabled.muted.fg,icon:e.muted.critical.enabled.muted.fg}},kbd:{bg:e.muted.default.enabled.bg,fg:e.muted.default.enabled.fg,border:e.muted.default.enabled.border},muted:{...e.muted.default.enabled.muted,bg:t.bg2||t.bg},skeleton:{from:t.skeleton?.from||t.border,to:t.skeleton?.to||t.border}}}function I(e){return{enabled:N(e.enabled),disabled:N(e.disabled),readOnly:N(e.readOnly),hovered:N(e.hovered)}}function N(e){return{bg:e.bg,border:e.border,fg:e.fg,muted:{bg:e.bg2},placeholder:e.placeholder}}let H=new WeakMap;function T(e){if(e.sanity.v2?._resolved)return e.sanity.v2;let t=H.get(e);if(t)return t;let r={_version:2,_resolved:!0,avatar:{...p,...e.sanity.avatar},button:{...h,...e.sanity.button},card:m,color:j(e.sanity.color),container:e.sanity.container,font:e.sanity.fonts,input:{...S,...e.sanity.input,checkbox:{...S.checkbox,...e.sanity.input.checkbox},radio:{...S.radio,...e.sanity.input.radio},switch:{...S.switch,...e.sanity.input.switch}},layer:e.sanity.layer??w,media:e.sanity.media,radius:e.sanity.radius,shadow:e.sanity.shadows,space:e.sanity.space,style:e.sanity.styles};return H.set(e,r),r}function M(e){return 2===e._version}let O=new WeakMap,L=new WeakMap;function F(e){let t=L.get(e);if(t)return t;let{avatar:r,button:o,color:a,container:n,font:i,input:d,media:l,radius:s,shadow:c,space:u,style:f}=e;return{_version:0,avatar:r,button:o,container:n,color:{light:{transparent:A(a.light.transparent),default:A(a.light.default),primary:A(a.light.primary),positive:A(a.light.positive),caution:A(a.light.caution),critical:A(a.light.critical)},dark:{transparent:A(a.dark.transparent),default:A(a.dark.default),primary:A(a.dark.primary),positive:A(a.dark.positive),caution:A(a.dark.caution),critical:A(a.dark.critical)}},focusRing:d.text.focusRing,fonts:i,input:d,media:l,radius:s,shadows:c,space:u,styles:f,v2:e}}function A(e){return{base:{bg:e.bg,fg:e.fg,border:e.border,focusRing:e.focusRing,shadow:e.shadow},button:e.button,card:e.selectable.default,dark:e._dark,input:{default:B(e.input.default),invalid:B(e.input.invalid)},muted:{...e.button.ghost,transparent:e.button.ghost.default},solid:{...e.button.default,transparent:e.button.default.default},selectable:e.selectable,spot:{gray:e.avatar.gray.bg,blue:e.avatar.blue.bg,purple:e.avatar.purple.bg,magenta:e.avatar.magenta.bg,red:e.avatar.red.bg,orange:e.avatar.orange.bg,yellow:e.avatar.yellow.bg,green:e.avatar.green.bg,cyan:e.avatar.cyan.bg},syntax:e.syntax}}function B(e){return{enabled:P(e.enabled),disabled:P(e.disabled),readOnly:P(e.readOnly),hovered:P(e.hovered)}}function P(e){return{bg:e.bg,bg2:e.muted.bg,border:e.border,fg:e.fg,placeholder:e.placeholder}}let D=["multiply","screen"],V=["transparent","default","neutral","primary","suggest","positive","caution","critical"],W=["default","neutral","primary","suggest","positive","caution","critical"],G=["enabled","hovered","pressed","selected","disabled"],Y=["default","ghost","bleed"],U=["default","invalid"],X=["enabled","hovered","readOnly","disabled"];function q(e){return o.COLOR_TINTS.includes(e)}function K(e){return/^\d+%$/.test(e)}function Q(e){var t;let r=e.split("/"),a=r.shift()||"",[n,i]=a.split(" ");if(q(n)){let e=r.shift()||"";return K(i)?{type:"color",tint:n,mix:Number(i.slice(0,-1))/100}:Z(e)?{type:"color",tint:n,opacity:Number(e)}:{type:"color",tint:n}}if("black"===(t=n)||"white"===t){let e=r.shift()||"";return K(i)?{type:"color",key:n,mix:Number(i.slice(0,-1))/100}:Z(e)?{type:"color",key:n,opacity:Number(e)}:{type:"color",key:n}}if(o.COLOR_HUES.includes(n)){let[e,t]=(a=r.shift()||"").split(" ");if(q(e)){let o=r.shift()||"";return K(t)?{type:"color",hue:n,tint:e,mix:Number(t.slice(0,-1))/100}:Z(o)?{type:"color",hue:n,tint:e,opacity:Number(o)}:{type:"color",hue:n,tint:e}}return{type:"hue",value:n}}if(D.includes(n))return{type:"blendMode",value:n}}function Z(e){return"0"===e||/^0\.[0-9]+$/.test(e)||"1"===e}[...o.COLOR_HUES],[...V],[...W],[...G],[...U],[...X];let J=["500","500"];function ee(e,t=J){var r;let o,{hue:a,scheme:n}=e,i=Q(t[+("light"!==n)]);if(!i||"color"!==i.type)throw Error(`Invalid color token: ${t[0]}`);return r={...i,hue:i.hue||a},o="",o="black"===r.key||"white"===r.key?r.key:`${r.hue}/${r.tint}`,void 0!==r.mix?`${o} ${100*r.mix}%`:(void 0!==r.opacity&&(o+=`/${r.opacity}`),o)}let et={base:{"*":{_blend:["multiply","screen"],accent:{fg:["purple/600","purple/400"]},avatar:{"*":{_blend:["screen","multiply"],bg:["500","400"],fg:["white","black"]}},backdrop:["gray/200/0.5","black/0.5"],badge:{"*":{bg:["100","900"],fg:["600","400"],icon:["500","500"],dot:["500","500"]},positive:{bg:["200 50%","900"],fg:["600","500"]},caution:{bg:["200 50%","900"],fg:["600","500"]}},bg:["50","950"],border:["200","800"],code:{bg:["50","950"],fg:["600","400"]},fg:["800","200"],focusRing:["blue/500","blue/500"],icon:["600","400"],kbd:{bg:["white","black"],fg:["600","400"],border:["200","800"]},link:{fg:["blue/600","blue/300"]},muted:{bg:["50","950"],fg:["700 75%","300 75%"]},shadow:{outline:["500/0.3","500/0.4"],umbra:["gray/500/0.1","black/0.2"],penumbra:["gray/500/0.07","black/0.14"],ambient:["gray/500/0.06","black/0.12"]},skeleton:{from:["100","900"],to:["100 50%","900 50%"]}},transparent:{bg:["50","black"]},default:{bg:["white","950"],fg:["800","200"],muted:{fg:["600","400"]}},primary:{_hue:"blue"},suggest:{_hue:"purple"},positive:{_hue:"green",shadow:{outline:["500/0.4","500/0.4"]}},caution:{_hue:"yellow",shadow:{outline:["600/0.3","500/0.4"]}},critical:{_hue:"red"}},button:{default:{"*":{"*":{_blend:["screen","multiply"],accent:{fg:["purple/300","purple/700"]},avatar:{"*":{_blend:["screen","multiply"],bg:["500","400"],fg:["white","black"]}},badge:{"*":{bg:["900","100"],fg:["400","600"],dot:["500","500"],icon:["500","500"]}},bg:["500","400"],border:["500/0","400/0"],code:{bg:["500 20%","400 20%"],fg:["200","600"]},fg:["white","black"],icon:["100 70%","900 70%"],kbd:{bg:["black","white"],fg:["200","600"],border:["800","200"]},link:{fg:["blue/200","blue/600"]},muted:{bg:["950","50"],fg:["100 70%","900 70%"]},skeleton:{from:["900","100"],to:["900 50%","100 50%"]}},hovered:{bg:["600","300"],border:["700/0","300/0"]},pressed:{bg:["700","300"]},selected:{bg:["700","300"]},disabled:{_hue:"gray",accent:{fg:["100 70%","900 70%"]},avatar:{"*":{_blend:["screen","multiply"],bg:["gray/500","gray/400"],fg:["white","black"]}},badge:{"*":{bg:["gray/700","gray/300"],fg:["white","black"],dot:["white","black"],icon:["white","black"]}},bg:["300","600"],code:{bg:["950","50"],fg:["300","600"]},fg:["300","600"],muted:{bg:["950","50"],fg:["300","600"]},kbd:{bg:["black","white"],fg:["white","black"],border:["700","300"]},link:{fg:["100 70%","900 70%"]}}},default:{"*":{avatar:{"*":{_blend:["screen","multiply"],bg:["500","400"],fg:["white","black"]}},bg:["800","200"],muted:{bg:["950","50"],fg:["400","600"]}},hovered:{bg:["900","100"]},pressed:{bg:["black","white"]},selected:{bg:["black","white"]}}},ghost:{"*":{"*":{_blend:["multiply","screen"],accent:{fg:["purple/700 60%","purple/300 70%"]},avatar:{"*":{_blend:["screen","multiply"],bg:["500","400"],fg:["white","black"]}},badge:{"*":{bg:["100","900"],fg:["600","400"],dot:["500","500"],icon:["500","500"]}},bg:["50","950"],border:["100","900"],code:{bg:["500 10%","400 10%"],fg:["700 60%","400 60%"]},fg:["600","400"],icon:["700 60%","300 60%"],kbd:{bg:["white","black"],fg:["600","400"],border:["200","800"]},link:{fg:["blue/700 60%","blue/300 60%"]},muted:{bg:["100","950"],fg:["700 60%","300 60%"]},skeleton:{from:["100","900"],to:["100 50%","900 50%"]}},hovered:{bg:["100","900"],fg:["700","300"]},pressed:{bg:["200","800"],fg:["800","200"]},selected:{bg:["200","800"],fg:["800","200"]},disabled:{_hue:"gray",accent:{fg:["200","800"]},avatar:{"*":{_blend:["screen","multiply"],bg:["gray/100","gray/900"],fg:["white","black"]}},badge:{"*":{_hue:"gray",bg:["50","950"],fg:["gray/200","gray/800"],dot:["gray/200","gray/800"],icon:["gray/200","gray/800"]}},border:["100","900"],code:{bg:["50","950"],fg:["200","800"]},fg:["400","600"],icon:["300","700"],muted:{fg:["300","700"]},kbd:{bg:["white","black"],fg:["200","800"],border:["100","900"]},link:{fg:["200","800"]}}},positive:{"*":{border:["600 20%","800"]}},caution:{"*":{border:["600 20%","800"]}}},bleed:{"*":{"*":{_blend:["multiply","screen"],accent:{fg:["purple/700 70%","purple/300 70%"]},avatar:{"*":{_blend:["screen","multiply"],bg:["500","400"],fg:["white","black"]}},badge:{"*":{bg:["100","900"],fg:["600","400"],dot:["500","500"],icon:["500","500"]}},bg:["white","black"],border:["white/0","black/0"],code:{bg:["50","950"],fg:["700 75%","300 75%"]},fg:["700","300"],icon:["700 75%","300 75%"],kbd:{bg:["white","black"],fg:["700","300"],border:["200","800"]},link:{fg:["blue/700 70%","blue/300 70%"]},muted:{bg:["100","950"],fg:["700 75%","300 75%"]},skeleton:{from:["100","900"],to:["100 50%","900 50%"]}},hovered:{bg:["50","900"],fg:["800","200"],icon:["800 70%","300 70%"]},pressed:{bg:["100","800"],fg:["800","200"],icon:["800 70%","200 70%"]},selected:{bg:["100","900"],fg:["800","200"],icon:["800 60%","200 60%"]},disabled:{_hue:"gray",accent:{fg:["200","800"]},avatar:{"*":{_blend:["screen","multiply"],bg:["gray/100","gray/900"],fg:["white","black"]}},badge:{"*":{_hue:"gray",bg:["50","950"],fg:["gray/200","gray/800"],dot:["gray/200","gray/800"],icon:["gray/200","gray/800"]}},code:{bg:["50","950"],fg:["200","800"]},fg:["400","600"],icon:["300","700"],muted:{fg:["400","600"]},kbd:{bg:["white","black"],fg:["200","800"],border:["100","900"]},link:{fg:["200","800"]}}}}},input:{"*":{"*":{_blend:["multiply","screen"],bg:["white","black"],border:["200","700"],fg:["black","200"],muted:{bg:["50","950"]},placeholder:["400","600"]},hovered:{border:["300","700"]},readOnly:{bg:["50","950"],border:["200","800"],fg:["800","200"]},disabled:{bg:["50","950"],fg:["400","600"],border:["100","900"],placeholder:["200","800 50%"]}},invalid:{"*":{_hue:"red",bg:["100","950"]}}},selectable:{"*":{"*":{_blend:["multiply","screen"],accent:{fg:["purple/700 70%","purple/300 70%"]},avatar:{"*":{_blend:["screen","multiply"],bg:["500","400"],fg:["white","black"]}},badge:{"*":{bg:["100","900"],fg:["600","400"],dot:["500","500"],icon:["500","500"]}},bg:["white","black"],border:["200","800"],code:{bg:["50","950"],fg:["600","400"]},fg:["700","300"],icon:["700 75%","300 75%"],kbd:{bg:["white","black"],fg:["600","400"],border:["200","800"]},link:{fg:["blue/700 70%","blue/300 70%"]},muted:{bg:["50","950"],fg:["700 75%","300 75%"]},skeleton:{from:["100","900"],to:["100 50%","900 50%"]}},hovered:{bg:["50","950"]},pressed:{bg:["100","900"]},selected:{_blend:["screen","multiply"],accent:{fg:["purple/300","purple/700"]},avatar:{"*":{_blend:["multiply","screen"],bg:["white","black"],fg:["black","white"]}},badge:{"*":{bg:["900","100"],fg:["400","600"],dot:["500","500"],icon:["500","500"]}},bg:["500","400"],border:["500 20%","400 20%"],code:{bg:["500 20%","400 20%"],fg:["200","600"]},fg:["white","black"],icon:["100 70%","900 70%"],kbd:{bg:["black","white"],fg:["200","600"],border:["800","200"]},link:{fg:["blue/200","blue/600"]},muted:{bg:["500 10%","400 10%"],fg:["100 70%","900 70%"]},skeleton:{from:["900","100"],to:["900 50%","100 50%"]}},disabled:{_hue:"gray",accent:{fg:["200","800"]},avatar:{"*":{_blend:["screen","multiply"],bg:["gray/100","gray/900"],fg:["white","black"]}},badge:{"*":{_hue:"gray",bg:["50","950"],fg:["gray/200","gray/800"],dot:["gray/200","gray/800"],icon:["gray/200","gray/800"]}},border:["100","900"],code:{bg:["50","950"],fg:["200","800"]},fg:["200","800"],icon:["200","800"],kbd:{bg:["white","black"],fg:["200","800"],border:["100","900"]},link:{fg:["200","800"]},muted:{bg:["50 50%","950 50%"],fg:["200","800"]}}},default:{selected:{_hue:"blue"}},critical:{disabled:{bg:["50 50%","950 50%"]}}},syntax:{atrule:["purple/600","purple/400"],attrName:["green/600","green/400"],attrValue:["yellow/600","yellow/400"],attribute:["yellow/600","yellow/400"],boolean:["purple/600","purple/400"],builtin:["purple/600","purple/400"],cdata:["yellow/600","yellow/400"],char:["yellow/600","yellow/400"],class:["orange/600","orange/400"],className:["cyan/600","cyan/400"],comment:["gray/400","gray/600"],constant:["purple/600","purple/400"],deleted:["red/600","red/400"],entity:["red/600","red/400"],function:["green/600","green/400"],hexcode:["blue/600","blue/400"],id:["purple/600","purple/400"],important:["purple/600","purple/400"],inserted:["yellow/600","yellow/400"],keyword:["magenta/600","magenta/400"],number:["purple/600","purple/400"],operator:["magenta/600","magenta/400"],property:["blue/600","blue/400"],pseudoClass:["yellow/600","yellow/400"],pseudoElement:["yellow/600","yellow/400"],punctuation:["gray/600","gray/400"],regex:["blue/600","blue/400"],selector:["red/600","red/400"],string:["yellow/600","yellow/400"],symbol:["purple/600","purple/400"],tag:["red/600","red/400"],unit:["orange/600","orange/400"],url:["red/600","red/400"],variable:["red/600","red/400"]}};function er(e){return!!(e&&"object"==typeof e&&!Array.isArray(e))}function eo(...e){let t=e.filter(Boolean);return 0===t.length?{}:t.reduce(ea,{})}function ea(e,t){for(let r of Object.keys(t)){let o=e[r],a=t[r];er(o)&&er(a)?e[r]=eo(o,a):e[r]=a}return e}function en(e,t){let{scheme:r}=e,o={};for(let e of V)o[e]=function(e,t){let{scheme:r,tone:o}=e,a=t?.color?.base?.[o],n={hue:a?._hue||"gray",scheme:r};return{_blend:(a?._blend||["multiply","screen"])[+("light"!==r)],_dark:"dark"===r,accent:{fg:ee(n,a?.accent?.fg)},avatar:ei({scheme:r},a),backdrop:ee(n,a?.backdrop),badge:el(a?.badge,{scheme:r},t),bg:ee(n,a?.bg),border:ee(n,a?.border),button:function(e,t){let{scheme:r,tone:o}=e,a={};for(let e of Y)a[e]=function(e,t){let{cardTone:r,mode:o,scheme:a}=e,n={};for(let e of W)n[e]=function(e,t){let{cardTone:r,mode:o,scheme:a,tone:n}=e,i={};for(let e of G)i[e]=function(e,t){let{cardTone:r,mode:o,tone:a,scheme:n,state:i}=e,d=t?.color?.base?.[r],l=t?.color?.button?.[o]?.[a]?.[i],s=l?._hue||d?._hue||"gray",c=l?._blend||["screen","multiply"],u={hue:s,scheme:n};return{_blend:c[+("light"!==n)],accent:{fg:ee(u,l?.accent?.fg)},avatar:ei({scheme:n},l),badge:el(l?.badge,{scheme:n},t),bg:ee(u,l?.bg),border:ee(u,l?.border),code:{bg:ee(u,l?.code?.bg),fg:ee(u,l?.code?.fg)},fg:ee(u,l?.fg),icon:ee(u,l?.icon),muted:{bg:ee(u,l?.muted?.bg),fg:ee(u,l?.muted?.fg)},kbd:{bg:ee(u,l?.kbd?.bg),fg:ee(u,l?.kbd?.fg),border:ee(u,l?.kbd?.border)},link:{fg:ee(u,l?.link?.fg)},skeleton:{from:ee(u,l?.skeleton?.from),to:ee(u,l?.skeleton?.to)}}}({cardTone:r,mode:o,tone:n,scheme:a,state:e},t);return i}({cardTone:r,mode:o,scheme:a,tone:e},t);return n}({cardTone:o,scheme:r,mode:e},t);return a}({scheme:r,tone:o},t),code:{bg:ee(n,a?.code?.bg),fg:ee(n,a?.code?.fg)},fg:ee(n,a?.fg),focusRing:ee(n,a?.focusRing),icon:ee(n,a?.icon),input:function(e,t){let{scheme:r,tone:o}=e;return{default:es({mode:"default",scheme:r,tone:o},t),invalid:es({mode:"invalid",scheme:r,tone:o},t)}}({scheme:r,tone:o},t),kbd:{bg:ee(n,a?.kbd?.bg),fg:ee(n,a?.kbd?.fg),border:ee(n,a?.kbd?.border)},link:{fg:ee(n,a?.link?.fg)},muted:{bg:ee(n,a?.muted?.bg),fg:ee(n,a?.muted?.fg)},selectable:function(e,t){let{scheme:r,tone:o}=e,a={};for(let e of W)a[e]=function(e,t){let{cardTone:r,scheme:o,tone:a}=e,n={};for(let e of G)n[e]=function(e,t){let{cardTone:r,scheme:o,state:a,tone:n}=e,i=t?.color?.base?.[r],d=t?.color?.selectable?.[n]?.[a],l=d?._hue||i?._hue||"gray",s=d?._blend||["screen","multiply"],c={hue:l,scheme:o};return{_blend:s[+("light"!==o)],accent:{fg:ee(c,d?.accent?.fg)},avatar:ei({scheme:o},d),badge:el(d?.badge,{scheme:o},t),bg:ee(c,d?.bg),border:ee(c,d?.border),code:{bg:ee(c,d?.code?.bg),fg:ee(c,d?.code?.fg)},fg:ee(c,d?.fg),icon:ee(c,d?.icon),muted:{bg:ee(c,d?.muted?.bg),fg:ee(c,d?.muted?.fg)},kbd:{bg:ee(c,d?.kbd?.bg),fg:ee(c,d?.kbd?.fg),border:ee(c,d?.kbd?.border)},link:{fg:ee(c,d?.link?.fg)},skeleton:{from:ee(c,d?.skeleton?.from),to:ee(c,d?.skeleton?.to)}}}({cardTone:r,tone:a,scheme:o,state:e},t);return n}({cardTone:o,scheme:r,tone:e},t);return a}({scheme:r,tone:o},t),shadow:function(e,t){let{scheme:r,tone:o}=e,a=t?.color?.base?.[o],n={hue:a?._hue||"gray",scheme:r};return{outline:ee(n,a?.shadow?.outline),umbra:ee(n,a?.shadow?.umbra),penumbra:ee(n,a?.shadow?.penumbra),ambient:ee(n,a?.shadow?.ambient)}}({scheme:r,tone:o},t),skeleton:{from:ee(n,a?.skeleton?.from),to:ee(n,a?.skeleton?.to)},syntax:function(e,t){let{scheme:r}=e,o=t?.color?.syntax,a={hue:"gray",scheme:r};return{atrule:ee(a,o?.atrule),attrName:ee(a,o?.attrName),attrValue:ee(a,o?.attrValue),attribute:ee(a,o?.attribute),boolean:ee(a,o?.boolean),builtin:ee(a,o?.builtin),cdata:ee(a,o?.cdata),char:ee(a,o?.char),class:ee(a,o?.class),className:ee(a,o?.className),comment:ee(a,o?.comment),constant:ee(a,o?.constant),deleted:ee(a,o?.deleted),doctype:ee(a,o?.doctype),entity:ee(a,o?.entity),function:ee(a,o?.function),hexcode:ee(a,o?.hexcode),id:ee(a,o?.id),important:ee(a,o?.important),inserted:ee(a,o?.inserted),keyword:ee(a,o?.keyword),number:ee(a,o?.number),operator:ee(a,o?.operator),prolog:ee(a,o?.prolog),property:ee(a,o?.property),pseudoClass:ee(a,o?.pseudoClass),pseudoElement:ee(a,o?.pseudoElement),punctuation:ee(a,o?.punctuation),regex:ee(a,o?.regex),selector:ee(a,o?.selector),string:ee(a,o?.string),symbol:ee(a,o?.symbol),tag:ee(a,o?.tag),unit:ee(a,o?.unit),url:ee(a,o?.url),variable:ee(a,o?.variable)}}({scheme:r},t)}}({scheme:r,tone:e},t);return o}function ei(e,t){let{scheme:r}=e;return{gray:ed({color:"gray",scheme:r},t),blue:ed({color:"blue",scheme:r},t),purple:ed({color:"purple",scheme:r},t),magenta:ed({color:"magenta",scheme:r},t),red:ed({color:"red",scheme:r},t),orange:ed({color:"orange",scheme:r},t),yellow:ed({color:"yellow",scheme:r},t),green:ed({color:"green",scheme:r},t),cyan:ed({color:"cyan",scheme:r},t)}}function ed(e,t){let{color:r,scheme:o}=e,a=t?.avatar?.[r],n={hue:a?._hue||"gray",scheme:o};return{_blend:(a?._blend||["screen","multiply"])[+("light"!==o)],bg:ee(n,a?.bg),fg:ee(n,a?.fg)}}function el(e,t,r){let{scheme:o}=t,a={};for(let t of W)a[t]=function(e,t,r){let{scheme:o,tone:a}=t,n=e?.[a],i={hue:n?._hue||r?.color?.base?.[a]?._hue||"gray",scheme:o};return{bg:ee(i,n?.bg),fg:ee(i,n?.fg),dot:ee(i,n?.dot),icon:ee(i,n?.icon)}}(e,{scheme:o,tone:t},r);return a}function es(e,t){let{mode:r,scheme:o,tone:a}=e;return{enabled:ec({mode:r,scheme:o,state:"enabled",cardTone:a},t),hovered:ec({mode:r,scheme:o,state:"hovered",cardTone:a},t),readOnly:ec({mode:r,scheme:o,state:"readOnly",cardTone:a},t),disabled:ec({mode:r,scheme:o,state:"disabled",cardTone:a},t)}}function ec(e,t){let{cardTone:r,mode:o,scheme:a,state:n}=e,i=t?.color?.base?.[r],d=t?.color?.input?.[o]?.[n],l=d?._hue||i?._hue||"gray",s=d?._blend||["screen","multiply"],c={hue:l,scheme:a};return{_blend:s[+("light"!==a)],bg:ee(c,d?.bg),border:ee(c,d?.border),fg:ee(c,d?.fg),muted:{bg:ee(c,d?.muted?.bg)},placeholder:ee(c,d?.placeholder)}}let eu=o.color;function ef(e,t){return{r:255*(e.r/255*(t.r/255)),g:255*(e.g/255*(t.g/255)),b:255*(e.b/255*(t.b/255))}}function eb(e,t){var r,o,a,n,i,d;return{r:255*((r=e.r/255)+(o=t.r/255)-r*o),g:255*((a=e.g/255)+(n=t.g/255)-a*n),b:255*((i=e.b/255)+(d=t.b/255)-i*d)}}function eg(e,t=0,r=1){return Math.min(r,Math.max(t,e))}function ep(e,t,r,o,a){var n;return r*(1-(n=eg((a-e)/(t-e))))+o*n}function eh(e){return Math.round(e)}function em(e){if(4===e.length){let t=e.slice(1,2),r=e.slice(2,3),o=e.slice(3,4);return{r:parseInt(t+t,16),g:parseInt(r+r,16),b:parseInt(o+o,16)}}return{r:parseInt(e.slice(1,3),16),g:parseInt(e.slice(3,5),16),b:parseInt(e.slice(5,7),16)}}function ey(e){let t=eh(eg(Math.round(e.r),0,255)),r=eh(eg(Math.round(e.g),0,255)),o=eh(eg(Math.round(e.b),0,255));return"a"in e?`rgba(${t},${r},${o},${e.a})`:"#"+(0x1000000+(t<<16)+(r<<8)+o).toString(16).slice(1)}function ev({r:e,g:t,b:r}){e/=255;let o=Math.min(e,t/=255,r/=255),a=Math.max(e,t,r),n=a-o,i=0,d=0,l=0;return(i=Math.round(60*(i=0==n?0:a==e?(t-r)/n%6:a==t?(r-e)/n+2:(e-t)/n+4)))<0&&(i+=360),l=(a+o)/2,{h:i,s:d=+(100*(d=0==n?0:n/(1-Math.abs(2*l-1)))).toFixed(1),l:l=+(100*l).toFixed(1)}}function ew(e){let t=e.s/100,r=e.l/100,o=(1-Math.abs(2*r-1))*t,a=o*(1-Math.abs(e.h/60%2-1)),n=r-o/2,i=0,d=0,l=0;return 0<=e.h&&e.h<60?(i=o,d=a,l=0):60<=e.h&&e.h<120?(i=a,d=o,l=0):120<=e.h&&e.h<180?(i=0,d=o,l=a):180<=e.h&&e.h<240?(i=0,d=a,l=o):240<=e.h&&e.h<300?(i=a,d=0,l=o):300<=e.h&&e.h<360&&(i=o,d=0,l=a),{r:Math.round((i+n)*255),g:Math.round((d+n)*255),b:Math.round((l+n)*255)}}let ek=/hsl\(\s*(\d+)\s*,\s*((\d+(?:\.\d+)?)%)\s*,\s*((\d+(?:\.\d+)?)%)\s*\)/i;function ex(e){if(!e)return{r:0,g:0,b:0};if("string"!=typeof e)throw Error("parseColor: expected a string");if("#"===e[0]&&(4===e.length||7===e.length)&&function(e){for(let t of e)if(-1==="0123456789ABCDEFabcdef".indexOf(t))return!1;return!0}(e.slice(1)))return em(e);if(e.startsWith("hsl("))return ew(function(e){let t=ek.exec(e);if(!t)throw Error(`parseHsl: string is not a HSL color: "${e}"`);return{h:parseInt(t[1]),s:parseFloat(t[3]),l:parseFloat(t[5])}}(e));if(e.startsWith("rgba(")){let t;return{r:parseInt((t=e.replace(/rgba\(|\)/g,"").split(","))[0]),g:parseInt(t[1]),b:parseInt(t[2]),a:parseFloat(t[3])}}throw Error(`parseColor: unexpected color format: "${e}"`)}function e$(e,t){let r=ex(e);return`rgba(${r.r},${r.g},${r.b},${t})`}let eS=[0,255];function eR(e,t){let{bg:r,blendMode:o,colorPalette:a}=t;if("white"===r)throw Error("Cannot blend with white background");let n=Q(e);if(!n||"color"!==n.type)throw Error(`Invalid color token value: ${e}`);let i="";if("black"===n.key&&(i=e_(a.black)),"white"===n.key&&(i=e_(a.white)),n.hue&&n.tint&&(i=e_(a[n.hue][n.tint])),!i)throw Error(`Invalid color token value: ${e}`);let d=i,l={blendMode:o,bg:r,black:e_(a.black),white:e_(a.white)};try{if(i=function(e,t){let{blendMode:r}=t,o=ex(e),a=ex(t.black),n=ex(t.white),i=t.bg?ex(t.bg):"multiply"===r?n:a,d={r:[a.r,n.r],g:[a.g,n.g],b:[a.b,n.b]},l={r:eg(ep(...d.r,...eS,i.r),...eS),g:eg(ep(...d.g,...eS,i.g),...eS),b:eg(ep(...d.b,...eS,i.b),...eS)},s={r:eg(ep(...d.r,...eS,o.r),...eS),g:eg(ep(...d.g,...eS,o.g),...eS),b:eg(ep(...d.b,...eS,o.b),...eS)},c="multiply"===r?ef(l,s):eb(l,s);return ey({r:eg(ep(...eS,...d.r,c.r),...d.r),g:eg(ep(...eS,...d.g,c.g),...d.g),b:eg(ep(...eS,...d.b,c.b),...d.b)})}(i,l),r&&void 0!==n.mix){var s,c,u,f,b,g,p;let e=em(r),t=em(i);i=ey((s=n.mix,{r:(c=e.r,u=t.r,c+(u-c)*s),g:(f=e.g,b=t.g,f+(b-f)*s),b:(g=e.b,p=t.b,g+(p-g)*s)}))}}catch(e){throw console.warn("could not blend",i,l),e}return"#aN"===i&&(console.warn(`invalid color token value: ${e}`),i=d),void 0!==n.opacity&&(i=e$(i,n.opacity)),i}function e_(e){return"string"==typeof e?e:e.hex}function ez(e,t){let r=Object.entries(t),[,o]=r.find(([e])=>"transparent"===e),[,a]=r.find(([e])=>"default"===e),n=ej(o,{colorPalette:e}),i=ej(a,{colorPalette:e}),d=i.bg;if("white"===d)throw Error("Cannot blend with white background");return Object.fromEntries([["transparent",n],["default",i],...r.filter(([e])=>"default"!==e&&"transparent"!==e).map(([t,r])=>[t,ej(r,{bg:d,colorPalette:e})])])}function ej(e,t){var r,o,a,n;let{colorPalette:i,bg:d}=t,l=e._blend||"multiply",s=eR(e.bg,{colorPalette:i,bg:d,blendMode:l}),c={colorPalette:i,bg:s,blendMode:l},u=(r=e.button,o={baseBg:s,blendMode:l,colorPalette:i},{default:eI(r.default,o),ghost:eI(r.ghost,o),bleed:eI(r.bleed,o)}),f=function(e,t){let r={};for(let n of W){var o,a;r[n]=(o=e[n],a=t,{enabled:eN(o.enabled,a),hovered:eN(o.hovered,a),pressed:eN(o.pressed,a),selected:eN(o.selected,a),disabled:eN(o.disabled,a)})}return r}(e.selectable,{colorPalette:i,baseBg:s,blendMode:l}),b={outline:eR(e.shadow.outline,c),umbra:eR(e.shadow.umbra,{...c,bg:void 0,colorPalette:{...i,black:"#000000"}}),penumbra:eR(e.shadow.penumbra,{...c,bg:void 0,colorPalette:{...i,black:"#000000"}}),ambient:eR(e.shadow.ambient,{...c,bg:void 0,colorPalette:{...i,black:"#000000"}})};return{_blend:l,_dark:e._dark,accent:{fg:eR(e.accent.fg,c)},avatar:eC(e.avatar,{baseBg:s,colorPalette:i,blendMode:l}),backdrop:eR(e.backdrop,c),badge:eE(e.badge,{baseBg:s,colorPalette:i,blendMode:l}),bg:s,border:eR(e.border,c),button:u,code:{bg:eR(e.code.bg,c),fg:eR(e.code.fg,c)},fg:eR(e.fg,c),focusRing:eR(e.focusRing,c),icon:eR(e.icon,c),input:(a=e.input,n={baseBg:s,colorPalette:i,blendMode:l},{default:eH(a.default,n),invalid:eH(a.invalid,n)}),kbd:function(e,t){let{baseBg:r,blendMode:o,colorPalette:a}=t,n=eR(e.bg,{bg:r,blendMode:o,colorPalette:a}),i={bg:n,blendMode:o,colorPalette:a};return{bg:n,fg:eR(e.fg,i),border:eR(e.border,i)}}(e.kbd,{baseBg:s,colorPalette:i,blendMode:l}),link:{fg:eR(e.link.fg,c)},muted:{bg:eR(e.muted.bg,c),fg:eR(e.muted.fg,c)},shadow:b,skeleton:{from:eR(e.skeleton.from,c),to:eR(e.skeleton.to,c)},syntax:function(e,t){let{colorPalette:r,baseBg:o,blendMode:a}=t,n={colorPalette:r,bg:o,blendMode:a};return{atrule:eR(e.atrule,n),attrName:eR(e.attrName,n),attrValue:eR(e.attrValue,n),attribute:eR(e.attribute,n),boolean:eR(e.boolean,n),builtin:eR(e.builtin,n),cdata:eR(e.cdata,n),char:eR(e.char,n),class:eR(e.class,n),className:eR(e.className,n),comment:eR(e.comment,n),constant:eR(e.constant,n),deleted:eR(e.deleted,n),doctype:eR(e.doctype,n),entity:eR(e.entity,n),function:eR(e.function,n),hexcode:eR(e.hexcode,n),id:eR(e.id,n),important:eR(e.important,n),inserted:eR(e.inserted,n),keyword:eR(e.keyword,n),number:eR(e.number,n),operator:eR(e.operator,n),prolog:eR(e.prolog,n),property:eR(e.property,n),pseudoClass:eR(e.pseudoClass,n),pseudoElement:eR(e.pseudoElement,n),punctuation:eR(e.punctuation,n),regex:eR(e.regex,n),selector:eR(e.selector,n),string:eR(e.string,n),symbol:eR(e.symbol,n),tag:eR(e.tag,n),unit:eR(e.unit,n),url:eR(e.url,n),variable:eR(e.variable,n)}}(e.syntax,{baseBg:s,colorPalette:i,blendMode:l}),selectable:f}}function eC(e,t){let r={};for(let a of o.COLOR_HUES)r[a]=function(e,t){let{baseBg:r,blendMode:o,colorPalette:a}=t,n=e._blend||"multiply",i=eR(e.bg,{bg:r,blendMode:o,colorPalette:a});return{_blend:n,bg:i,fg:eR(e.fg,{bg:i,blendMode:n,colorPalette:a})}}(e[a],t);return r}function eE(e,t){let r={};for(let o of W)r[o]=function(e,t){let{baseBg:r,blendMode:o,colorPalette:a}=t,n=eR(e.bg,{bg:r,blendMode:o,colorPalette:a}),i={bg:n,blendMode:o,colorPalette:a};return{bg:n,dot:eR(e.dot,i),fg:eR(e.fg,i),icon:eR(e.icon,i)}}(e[o],t);return r}function eI(e,t){let r={};for(let n of W){var o,a;r[n]=(o=e[n],a=t,{enabled:eN(o.enabled,a),hovered:eN(o.hovered,a),pressed:eN(o.pressed,a),selected:eN(o.selected,a),disabled:eN(o.disabled,a)})}return r}function eN(e,t){let{baseBg:r,blendMode:o,colorPalette:a}=t,n=e._blend||"multiply",i=eR(e.bg,{bg:r,blendMode:o,colorPalette:a}),d={bg:i,blendMode:n,colorPalette:a};return{_blend:n,accent:{fg:eR(e.accent.fg,d)},avatar:eC(e.avatar,{baseBg:i,colorPalette:a,blendMode:n}),badge:eE(e.badge,{baseBg:i,colorPalette:a,blendMode:n}),bg:i,border:eR(e.border,d),code:{bg:eR(e.code.bg,d),fg:eR(e.code.fg,d)},fg:eR(e.fg,d),icon:eR(e.icon,d),link:{fg:eR(e.link.fg,d)},muted:{bg:eR(e.muted.bg,d),fg:eR(e.muted.fg,d)},kbd:{bg:eR(e.kbd.bg,d),fg:eR(e.kbd.fg,d),border:eR(e.kbd.border,d)},skeleton:{from:eR(e.skeleton?.from,d),to:eR(e.skeleton?.to,d)}}}function eH(e,t){return{enabled:eT(e.enabled,t),hovered:eT(e.hovered,t),readOnly:eT(e.readOnly,t),disabled:eT(e.disabled,t)}}function eT(e,t){let{baseBg:r,blendMode:o,colorPalette:a}=t,n=e._blend||"multiply",i=eR(e.bg,{colorPalette:a,bg:r,blendMode:o}),d={colorPalette:a,bg:i,blendMode:n};return{_blend:n,bg:i,border:eR(e.border,d),fg:eR(e.fg,d),muted:{bg:eR(e.muted.bg,d)},placeholder:eR(e.placeholder,d)}}function eM(e){var t;let r,a,n,i=(t=e,{light:en({scheme:"light"},a={color:{base:function(e){let t={};for(let r of V)t[r]=function(e,t){let r=eo(e?.base?.["*"],e?.base?.[t]),a=r._hue||e?.base?.[t]?._hue||"gray";return{...r,_hue:a,avatar:o.COLOR_HUES.reduce((e,t)=>({...e,[t]:eo({_hue:t},r.avatar?.["*"],r.avatar?.[t])}),{}),badge:W.reduce((t,o)=>({...t,[o]:{_hue:e?.base?.[o]?._hue||a,...r.badge?.["*"],...r.badge?.[o]}}),{})}}(e,r);return t}(r=eo(et,t?.color)),button:function(e){let t={};for(let r of Y)t[r]=function(e,t){let r={};for(let a of W)r[a]=function(e,t,r){let a={};for(let n of G)a[n]=function(e,t,r,a){let n=eo(e?.button?.[r]?.["*"]?.["*"],e?.button?.[r]?.[t]?.["*"],e?.button?.[r]?.["*"]?.[a],e?.button?.[r]?.[t]?.[a]),i=n._hue||e?.base?.[t]?._hue;return{...n,_hue:i,avatar:o.COLOR_HUES.reduce((e,t)=>({...e,[t]:eo({_hue:t},n.avatar?.["*"],n.avatar?.[t])}),{}),badge:W.reduce((t,r)=>({...t,[r]:{_hue:e?.base?.[r]?._hue||i,...n.badge?.["*"],...n.badge?.[r]}}),{})}}(e,r,t,n);return a}(e,t,a);return r}(e,r);return t}(r),input:function(e){let t={};for(let r of U)t[r]=function(e,t){let r={};for(let o of X)r[o]=function(e,t,r){let o=eo(e?.input?.["*"]?.["*"],e?.input?.[t]?.["*"],e?.input?.["*"]?.[r],e?.input?.[t]?.[r]),a=o._hue||e?.input?.[t]?._hue;return{...o,_hue:a}}(e,t,o);return r}(e,r);return t}(r),selectable:function(e){let t={};for(let r of W)t[r]=function(e,t){let r={_hue:e?.selectable?.[t]?._hue||e?.base?.[t]?._hue};for(let a of G)r[a]=function(e,t,r){let a=eo(e?.selectable?.["*"]?.["*"],e?.selectable?.[t]?.["*"],e?.selectable?.["*"]?.[r],e?.selectable?.[t]?.[r]),n=a._hue||e?.base?.[t]?._hue;return{...a,_hue:n,avatar:o.COLOR_HUES.reduce((e,t)=>({...e,[t]:eo({_hue:t},a.avatar?.["*"],a.avatar?.[t])}),{}),badge:W.reduce((t,r)=>({...t,[r]:{_hue:e?.base?.[r]?._hue||n,...a.badge?.["*"],...a.badge?.[r]}}),{})}}(e,t,a);return r}(e,r);return t}(r),syntax:r.syntax}}),dark:en({scheme:"dark"},a)});return F({_version:2,avatar:e?.avatar??p,button:e?.button??h,card:e?.card??m,color:{light:ez(n=e?.palette??eu,i.light),dark:ez(n,i.dark)},container:e?.container??y,font:e?.font??_,input:e?.input??S,layer:e?.layer??w,media:e?.media??v,radius:e?.radius??k,shadow:e?.shadow??x,space:e?.space??$,style:e?.style??R})}let eO=new Map;function eL(e,t,r){var o,a,n,i,d;let l,s=function(e,t,r){let o=eO.get(t);if(!o)return;let a=o.get(r);if(a)return a.get(e)}(e,t,r);if(s)return s;let c=M(e)?F(e):e,u=M(e)?e:function(e){if(e.v2)return e.v2;let t=O.get(e);if(t)return t;let{avatar:r,button:o,color:a,container:n,fonts:i,input:d,layer:l,media:s,radius:c,shadows:u,space:f,styles:b}=e,g={_version:2,avatar:{...p,...r},button:{...h,...o},card:m,color:{light:{transparent:j(a.light.transparent),default:j(a.light.default),neutral:j(a.light.transparent),primary:j(a.light.primary),suggest:j(a.light.primary),positive:j(a.light.positive),caution:j(a.light.caution),critical:j(a.light.critical)},dark:{transparent:j(a.dark.transparent),default:j(a.dark.default),neutral:j(a.dark.transparent),primary:j(a.dark.primary),suggest:j(a.dark.primary),positive:j(a.dark.positive),caution:j(a.dark.caution),critical:j(a.dark.critical)}},container:n,font:i,input:{...S,...d,checkbox:{...S.checkbox,...d.checkbox},radio:{...S.radio,...d.radio},switch:{...S.switch,...d.switch}},layer:l??w,media:s,radius:c,shadow:u,space:f,style:b};return O.set(e,g),g}(e),f=c.color[t]||c.color.light,b=f[r]||f.default,g=c.layer||w,y=u.color[t]||u.color.light,v="neutral"in(o=y[r]||y.default).badge?o:{...o,badge:{...o.badge,neutral:o.badge.default,suggest:o.badge.primary},button:{bleed:{...o.button.bleed,neutral:o.button.bleed.default,suggest:o.button.bleed.primary},default:{...o.button.default,neutral:o.button.default.default,suggest:o.button.default.primary},ghost:{...o.button.ghost,neutral:o.button.ghost.default,suggest:o.button.ghost.primary}},selectable:{...o.selectable,neutral:o.selectable.default,suggest:o.selectable.primary}},k=u.layer||w,x={sanity:{...c,color:b,layer:g,v2:{...u,_resolved:!0,color:v,layer:k}}};return a=e,n=t,i=r,d=x,eO.has(n)||eO.set(n,new Map),(l=eO.get(n)).has(i)||l.set(i,new WeakMap),l.get(i).set(a,d),x}e.s(["buildTheme",()=>eM,"createColorTheme",()=>f,"getScopedTheme",()=>eL,"getTheme_v2",()=>T,"hexToRgb",()=>em,"hslToRgb",()=>ew,"multiply",()=>ef,"parseColor",()=>ex,"rgbToHex",()=>ey,"rgbToHsl",()=>ev,"rgba",()=>e$,"screen",()=>eb],640289);var eF=e.i(843476),eA=e.i(881933),eB=e.i(271645),eP=e.i(997053),eD=e.i(179684),eV=e.i(447912),eW=e.i(953760),eG=e.i(258950),eY=e.i(846932),eU=e.i(88653);e.i(926199);var eX=e.i(648568),eq=e.i(174080),eK=e.i(462576);let eQ=eM(),eZ=[],eJ={},e0={initial:{scale:.97,willChange:"transform"},hidden:{opacity:0},visible:{opacity:1,transition:{when:"beforeChildren",duration:.1}},scaleIn:{scale:1},scaleOut:{scale:.97}},e1={hidden:{opacity:0},visible:{opacity:1}},e2={type:"spring",visualDuration:.2,bounce:.25};function e3(e){return e4(e)||e7(e)}function e5(e){return e instanceof Node&&e.nodeType===Node.ELEMENT_NODE}function e4(e){return e5(e)&&"A"===e.nodeName}function e6(e){return e5(e)&&"INPUT"===e.nodeName}function e7(e){return e5(e)&&"BUTTON"===e.nodeName}function e8(e){return e5(e)&&"SELECT"===e.nodeName}function e9(e){return e5(e)&&"TEXTAREA"===e.nodeName}function te(e,t){return e.contains(t)||e===t}function tt(e){if(!(e instanceof Element))return!1;let t=window.getComputedStyle(e);return t.overflowX.includes("auto")||t.overflowX.includes("scroll")||t.overflowY.includes("auto")||t.overflowY.includes("scroll")}function tr(e,t){return e.reduce((e,r)=>(e[r]=t,e),{})}function to(e){return 0===e?0:`${e/16}rem`}function ta(e,t,r){return(t?.map(r)||[]).map((t,r)=>0===r?t:{[`@media screen and (min-width: ${e[r-1]}px)`]:t})}function tn(e,t){return void 0===e?t||eZ:Array.isArray(e)?e:[e]}function ti(e,t,r=eZ){if(!Array.isArray(r))throw Error("the property must be array of numbers");if(0===r.length)return null;let{media:o,space:a}=T(e);return ta(o,r,e=>tr(t,to(a[e])))}function td(e,t){let{$size:r,$weight:o}=t,{font:a,media:n}=T(t.theme),{family:i,sizes:d,weights:l}=a[e],s=o&&l[o]||l.regular,c=d[2],u={position:"relative",fontFamily:i,fontWeight:`${s}`,padding:"1px 0",margin:0,"&:before":{content:'""',display:"block",height:0},"&:after":{content:'""',display:"block",height:0},"& > code, & > span":{display:"block"},"&:not([hidden])":{display:"block"}};return r?[u,...ta(n,r,e=>(function(e){let{ascenderHeight:t,descenderHeight:r,fontSize:o,iconSize:a,letterSpacing:n,lineHeight:i}=e,d=t+r,l=i-d,s=2*Math.floor(1.125*o/2)+1;return{fontSize:to(o),lineHeight:`calc(${i} / ${o})`,letterSpacing:to(n),transform:`translateY(${to(r)})`,"&:before":{marginTop:`calc(${to(0-d)} - 1px)`},"&:after":{marginBottom:"-1px"},"& svg:not([data-sanity-icon])":{fontSize:`calc(${s} / 16 * 1rem)`,margin:to((l-s)/2)},"& [data-sanity-icon]":{fontSize:`calc(${a} / 16 * 1rem)`,margin:to((l-a)/2)}}})(d[e]||c))]:(td.warned||(console.warn("No size specified for responsive font",{fontKey:e,$size:r,props:t,base:u}),td.warned=!0),[u])}function tl(e){return td("code",e)}function ts(e){return td("heading",e)}function tc(e){return td("label",e)}function tu(e){let{media:t}=T(e.theme);return ta(t,e.$align,e=>({textAlign:e}))}function tf(e){return td("text",e)}let tb="u">typeof globalThis?globalThis:"u">typeof window?window:"u">typeof self?self:e.g;function tg(e,t){let r=Symbol.for(e);if(typeof document>"u"){let r=(0,eB.createContext)(t);return r.displayName=e,r}return tb[r]=tb[r]||(0,eB.createContext)(t),tb[r]}let tp=tg("@sanity/ui/context/theme",null);function th(e){let t,r,o,a,n=(0,eA.c)(15),i=(0,eB.useContext)(tp),{children:d}=e,l=e.scheme??(i?.scheme||"light"),s=e.theme??(i?.theme||null),c=e.tone??(i?.tone||"default");e:{let e;if(!s){t=null;break e}n[0]!==s||n[1]!==l||n[2]!==c?(e={version:0,theme:s,scheme:l,tone:c},n[0]=s,n[1]=l,n[2]=c,n[3]=e):e=n[3],t=e}let u=t;t:{let e;if(!s){r=null;break t}n[4]!==s||n[5]!==l||n[6]!==c?(e=eL(s,l,c),n[4]=s,n[5]=l,n[6]=c,n[7]=e):e=n[7],r=e}let f=r;if(!f){let e;return n[8]===Symbol.for("react.memo_cache_sentinel")?(e=(0,eF.jsx)("pre",{children:'ThemeProvider: no "theme" property provided'}),n[8]=e):e=n[8],e}return n[9]!==d||n[10]!==f?(o=(0,eF.jsx)(eP.ThemeProvider,{theme:f,children:d}),n[9]=d,n[10]=f,n[11]=o):o=n[11],n[12]!==o||n[13]!==u?(a=(0,eF.jsx)(tp.Provider,{value:u,children:o}),n[12]=o,n[13]=u,n[14]=a):a=n[14],a}function tm(){let e=(0,eB.useContext)(tp);if(!e)throw Error("useRootTheme(): missing context value");return e}function ty(e){let t,r=(0,eA.c)(5),{children:o,scheme:a,tone:n}=e,i=tm(),d=a||i.scheme;return r[0]!==o||r[1]!==i.theme||r[2]!==d||r[3]!==n?(t=(0,eF.jsx)(th,{scheme:d,theme:i.theme,tone:n,children:o}),r[0]=o,r[1]=i.theme,r[2]=d,r[3]=n,r[4]=t):t=r[4],t}function tv(){return(0,eP.useTheme)()}function tw(){let e,t=(0,eA.c)(2),r=(0,eP.useTheme)();return t[0]!==r?(e=T(r),t[0]=r,t[1]=e):e=t[1],e}function tk(e){let{card:t,media:r}=T(e.theme),o=`${t.border?.width??1}px solid var(--card-border-color)`;return ta(r,e.$border,e=>e?{"&&":{border:o}}:{"&&":{border:0}})}function tx(e){let{card:t,media:r}=T(e.theme),o=`${t.border?.width??1}px solid var(--card-border-color)`;return ta(r,e.$borderTop,e=>e?{"&&":{borderTop:o}}:{"&&":{borderTop:0}})}function t$(e){let{card:t,media:r}=T(e.theme),o=`${t.border?.width??1}px solid var(--card-border-color)`;return ta(r,e.$borderRight,e=>e?{"&&":{borderRight:o}}:{"&&":{borderRight:0}})}function tS(e){let{card:t,media:r}=T(e.theme),o=`${t.border?.width??1}px solid var(--card-border-color)`;return ta(r,e.$borderBottom,e=>e?{"&&":{borderBottom:o}}:{"&&":{borderBottom:0}})}function tR(e){let{card:t,media:r}=T(e.theme),o=`${t.border?.width??1}px solid var(--card-border-color)`;return ta(r,e.$borderLeft,e=>e?{"&&":{borderLeft:o}}:{"&&":{borderLeft:0}})}th.displayName="ThemeProvider",ty.displayName="ThemeColorProvider";let t_={'&[data-as="ul"],&[data-as="ol"]':{listStyle:"none"}},tz={content:"content-box",border:"border-box"},tj={stretch:"stretch",fill:"100%"};function tC(e){let{media:t}=T(e.theme);return ta(t,e.$display,e=>({"&:not([hidden])":{display:e}}))}function tE(e){let{media:t}=T(e.theme);return ta(t,e.$sizing,e=>({boxSizing:tz[e]}))}function tI(e){let{media:t}=T(e.theme);return ta(t,e.$height,e=>({height:tj[e]}))}function tN(e){let{media:t}=T(e.theme);return ta(t,e.$overflow,e=>({overflow:e}))}let tH={minWidth:0,minHeight:0};function tT(){return[tH,tM]}function tM(e){let{media:t}=T(e.theme);return e.$flex?ta(t,e.$flex,e=>({flex:`${e}`})):eZ}let tO={"&&:not([hidden])":{display:"flex"}};function tL(e){let{media:t}=T(e.theme);return ta(t,e.$align,e=>({alignItems:e}))}function tF(e){let{media:t,space:r}=T(e.theme);return ta(t,e.$gap,e=>({gap:e?to(r[e]):void 0}))}function tA(e){let{media:t}=T(e.theme);return ta(t,e.$wrap,e=>({flexWrap:e}))}function tB(e){let{media:t}=T(e.theme);return ta(t,e.$justify,e=>({justifyContent:e}))}function tP(e){let{media:t}=T(e.theme);return ta(t,e.$direction,e=>({flexDirection:e}))}function tD(e){return`inset 0 0 0 ${e.width}px ${e.color}`}function tV(e){let{base:t,border:r,focusRing:o}=e,a=o.offset+o.width,n=0-o.offset,i=t?t.bg:"var(--card-bg-color)";return[n>0&&`inset 0 0 0 ${n}px var(--card-focus-ring-color)`,r&&tD(r),n<0&&`0 0 0 ${0-n}px ${i}`,a>0&&`0 0 0 ${a}px var(--card-focus-ring-color)`].filter(Boolean).join(",")}let tW={auto:"auto",full:"1 / -1"},tG={auto:"auto",full:"1 / -1"};function tY(e){let{media:t}=T(e.theme);return ta(t,e.$row,e=>"number"==typeof e?{gridRow:`span ${e} / span ${e}`}:{gridRow:tW[e]})}function tU(e){let{media:t}=T(e.theme);return ta(t,e.$rowStart,e=>({gridRowStart:`${e}`}))}function tX(e){let{media:t}=T(e.theme);return ta(t,e.$rowEnd,e=>({gridRowEnd:`${e}`}))}function tq(e){let{media:t}=T(e.theme);return ta(t,e.$column,e=>"number"==typeof e?{gridColumn:`span ${e} / span ${e}`}:{gridColumn:tG[e]})}function tK(e){let{media:t}=T(e.theme);return ta(t,e.$columnStart,e=>({gridColumnStart:`${e}`}))}function tQ(e){let{media:t}=T(e.theme);return ta(t,e.$columnEnd,e=>({gridColumnEnd:`${e}`}))}let tZ={"&&:not([hidden])":{display:"grid"},'&[data-as="ul"],&[data-as="ol"]':{listStyle:"none"}},tJ={auto:"auto",min:"min-content",max:"max-content",fr:"minmax(0, 1fr)"},t0={auto:"auto",min:"min-content",max:"max-content",fr:"minmax(0, 1fr)"};function t1(e){let{media:t}=T(e.theme);return ta(t,e.$autoFlow,e=>({gridAutoFlow:e}))}function t2(e){let{media:t}=T(e.theme);return ta(t,e.$autoRows,e=>({gridAutoRows:e&&t0[e]}))}function t3(e){let{media:t}=T(e.theme);return ta(t,e.$autoCols,e=>({gridAutoColumns:e&&tJ[e]}))}function t5(e){let{media:t}=T(e.theme);return ta(t,e.$columns,e=>({gridTemplateColumns:e&&`repeat(${e},minmax(0,1fr));`}))}function t4(e){let{media:t}=T(e.theme);return ta(t,e.$rows,e=>({gridTemplateRows:e&&`repeat(${e},minmax(0,1fr));`}))}function t6(e){let{media:t,space:r}=T(e.theme);return ta(t,e.$gap,e=>({gridGap:e?to(r[e]):void 0}))}function t7(e){let{media:t,space:r}=T(e.theme);return ta(t,e.$gapX,e=>({columnGap:e?to(r[e]):void 0}))}function t8(e){let{media:t,space:r}=T(e.theme);return ta(t,e.$gapY,e=>({rowGap:e?to(r[e]):void 0}))}function t9(e){let{$fontSize:t,$iconLeft:r,$iconRight:o,$padding:a,$space:n}=e,{font:i,media:d,space:l}=T(e.theme),s=Math.max(a.length,n.length,t.length),c=[],u=[],f=[];for(let e=0;e<s;e+=1)f[e]=void 0===t[e]?f[e-1]:t[e],c[e]=void 0===a[e]?c[e-1]:a[e],u[e]=void 0===n[e]?u[e-1]:n[e];return ta(d,c,(e,t)=>{let a=i.text.sizes[f[t]]||i.text.sizes[2],n=a.lineHeight-a.ascenderHeight-a.descenderHeight,d=l[c[t]],s=l[u[t]],b={paddingTop:to(d-a.ascenderHeight),paddingRight:to(d),paddingBottom:to(d-a.descenderHeight),paddingLeft:to(d)};return o&&(b.paddingRight=to(d+n+s)),r&&(b.paddingLeft=to(d+n+s)),b})}function re(e){return t9({...e,$iconRight:!0})}let rt=eP.css`
  &:not([hidden]) {
    display: flex;
  }

  align-items: center;
`;function rr(){return rt}function ro(e){let{$scheme:t,$tone:r,$weight:o}=e,{color:a,font:n}=T(e.theme);return eP.css`
    appearance: none;
    background: none;
    border: 0;
    border-radius: 0;
    outline: none;
    width: 100%;
    box-sizing: border-box;
    font-family: ${n.text.family};
    font-weight: ${o&&n.text.weights[o]||n.text.weights.regular};
    margin: 0;
    position: relative;
    z-index: 1;
    display: block;

    /* NOTE: This is a hack to disable Chrome’s autofill styles */
    &:-webkit-autofill,
    &:-webkit-autofill:hover,
    &:-webkit-autofill:focus,
    &:-webkit-autofill:active {
      -webkit-text-fill-color: var(--input-fg-color) !important;
      transition: background-color 5000s;
      transition-delay: 86400s /* 24h */;
    }

    /* &:is(textarea) */
    &[data-as='textarea'] {
      resize: none;
    }

    color: var(--input-fg-color);

    &::placeholder {
      color: var(--input-placeholder-color);
    }

    &[data-scheme='${t}'][data-tone='${r}'] {
      --input-fg-color: ${a.input.default.enabled.fg};
      --input-placeholder-color: ${a.input.default.enabled.placeholder};

      /* enabled */
      &:not(:invalid):not(:disabled):not(:read-only) {
        --input-fg-color: ${a.input.default.enabled.fg};
        --input-placeholder-color: ${a.input.default.enabled.placeholder};
      }

      /* disabled */
      &:not(:invalid):disabled {
        --input-fg-color: ${a.input.default.disabled.fg};
        --input-placeholder-color: ${a.input.default.disabled.placeholder};
      }

      /* invalid */
      &:invalid {
        --input-fg-color: ${a.input.invalid.enabled.fg};
        --input-placeholder-color: ${a.input.invalid.enabled.placeholder};
      }

      /* readOnly */
      &:read-only {
        --input-fg-color: ${a.input.default.readOnly.fg};
        --input-placeholder-color: ${a.input.default.readOnly.placeholder};
      }
    }
  `}function ra(e){let{font:t,media:r}=T(e.theme);return ta(r,e.$fontSize,e=>{let r=t.text.sizes[e]||t.text.sizes[2];return{fontSize:to(r.fontSize),lineHeight:`${r.lineHeight/r.fontSize}`}})}function rn(e){let{$hasPrefix:t,$hasSuffix:r,$scheme:o,$tone:a,$unstableDisableFocusRing:n}=e,{color:i,input:d}=T(e.theme);return eP.css`
    --input-box-shadow: none;

    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    display: block;
    pointer-events: none;
    z-index: 0;

    background-color: var(--card-bg-color);
    box-shadow: var(--input-box-shadow);

    border-top-left-radius: ${t?0:void 0};
    border-bottom-left-radius: ${t?0:void 0};
    border-top-right-radius: ${r?0:void 0};
    border-bottom-right-radius: ${r?0:void 0};

    &[data-scheme='${o}'][data-tone='${a}'] {
      --card-bg-color: ${i.input.default.enabled.bg};
      --card-fg-color: ${i.input.default.enabled.fg};

      /* enabled */
      *:not(:disabled) + &[data-border] {
        --input-box-shadow: ${tD({color:i.input.default.enabled.border,width:d.border.width})};
      }

      /* invalid */
      *:not(:disabled):invalid + & {
        --card-bg-color: ${i.input.invalid.enabled.bg};
        --card-fg-color: ${i.input.invalid.enabled.fg};

        &[data-border] {
          --input-box-shadow: ${tD({color:i.input.invalid.enabled.border,width:d.border.width})};
        }
      }

      /* focused */
      *:not(:disabled):focus + & {
        &[data-border] {
          --input-box-shadow: ${n?void 0:tV({border:{color:i.input.default.enabled.border,width:d.border.width},focusRing:d.text.focusRing})};
        }

        &:not([data-border]) {
          --input-box-shadow: ${n?void 0:tV({focusRing:d.text.focusRing})};
        }
      }

      /* disabled */
      *:not(:invalid):disabled + & {
        --card-bg-color: ${i.input.default.disabled.bg} !important;
        --card-fg-color: ${i.input.default.disabled.fg} !important;
        --card-icon-color: ${i.input.default.disabled.fg} !important;

        &[data-border] {
          --input-box-shadow: ${tD({color:i.input.default.disabled.border,width:d.border.width})};
        }
      }

      *:invalid:disabled + & {
        --card-bg-color: ${i.input.invalid.disabled.bg} !important;
        --card-fg-color: ${i.input.invalid.disabled.fg} !important;
        --card-icon-color: ${i.input.invalid.disabled.fg} !important;

        &[data-border] {
          --input-box-shadow: ${tD({color:i.input.invalid.disabled.border,width:d.border.width})};
        }
      }

      /* readOnly */
      *:not(:invalid):read-only + & {
        --card-bg-color: ${i.input.default.readOnly.bg} !important;
        --card-fg-color: ${i.input.default.readOnly.fg} !important;
      }

      *:invalid:read-only + & {
        --card-bg-color: ${i.input.invalid.readOnly.bg} !important;
        --card-fg-color: ${i.input.invalid.readOnly.fg} !important;
      }

      /* hovered */
      @media (hover: hover) {
        *:not(:disabled):not(:read-only):not(:invalid):hover + & {
          --card-bg-color: ${i.input.default.hovered.bg};
          --card-fg-color: ${i.input.default.hovered.fg};
        }

        *:invalid:not(:disabled):not(:read-only):hover + & {
          --card-bg-color: ${i.input.invalid.hovered.bg};
          --card-fg-color: ${i.input.invalid.hovered.fg};
        }

        *:not(:disabled):not(:read-only):not(:invalid):not(:focus):hover + &[data-border] {
          --input-box-shadow: ${tD({color:i.input.default.hovered.border,width:d.border.width})};
        }

        *:invalid:not(:disabled):not(:read-only):not(:focus):hover + &[data-border] {
          --input-box-shadow: ${tD({color:i.input.invalid.hovered.border,width:d.border.width})};
        }
      }
    }
  `}function ri(e){let{theme:t}=e;return[ti(t,["padding"],e.$padding),ti(t,["paddingLeft","paddingRight"],e.$paddingX),ti(t,["paddingTop","paddingBottom"],e.$paddingY),ti(t,["paddingTop"],e.$paddingTop),ti(t,["paddingRight"],e.$paddingRight),ti(t,["paddingBottom"],e.$paddingBottom),ti(t,["paddingLeft"],e.$paddingLeft)].filter(Boolean)}function rd(e){let{media:t,radius:r}=T(e.theme);return ta(t,e.$radius,e=>{let t=0;return"number"==typeof e&&(t=to(r[e])),"full"===e&&(t="9999px"),{borderRadius:t}})}function rl(e,t){return`${e.map(to).join(" ")} ${t}`}let rs=eP.styled.span.withConfig({displayName:"SpanWithTextOverflow",componentId:"sc-ol2i3b-0"})`display:block;white-space:nowrap;text-overflow:ellipsis;overflow:hidden;overflow:clip;`,rc=eP.styled.div.withConfig({displayName:"StyledLabel",componentId:"sc-1luap7z-0"})(tc,tu,function(e){let{$accent:t,$muted:r}=e,{font:o}=T(e.theme);return eP.css`
    text-transform: uppercase;

    ${t&&eP.css`
      color: var(--card-accent-fg-color);
    `}

    ${r&&eP.css`
      color: var(--card-muted-fg-color);
    `}

    & code {
      font-family: ${o.code.family};
      border-radius: 1px;
    }

    & a {
      text-decoration: none;
      border-radius: 1px;
    }

    & svg {
      /* Certain popular CSS libraries changes the defaults for SVG display */
      /* Make sure SVGs are rendered as inline elements */
      display: inline;
    }

    & [data-sanity-icon] {
      vertical-align: baseline;
    }
  `}),ru=(0,eB.forwardRef)(function(e,t){let r,o,a,n,i,d,l,s,c,u,f,b=(0,eA.c)(26);b[0]!==e?({accent:r,align:o,children:a,muted:i,size:d,textOverflow:l,weight:s,...n}=e,b[0]=e,b[1]=r,b[2]=o,b[3]=a,b[4]=n,b[5]=i,b[6]=d,b[7]=l,b[8]=s):(r=b[1],o=b[2],a=b[3],n=b[4],i=b[5],d=b[6],l=b[7],s=b[8]);let g=void 0!==i&&i,p=void 0===d?2:d,h=a;if("ellipsis"===l){let e;b[9]!==h?(e=(0,eF.jsx)(rs,{children:h}),b[9]=h,b[10]=e):e=b[10],h=e}else{let e;b[11]!==h?(e=(0,eF.jsx)("span",{children:h}),b[11]=h,b[12]=e):e=b[12],h=e}return b[13]!==o?(c=tn(o),b[13]=o,b[14]=c):c=b[14],b[15]!==p?(u=tn(p),b[15]=p,b[16]=u):u=b[16],b[17]!==r||b[18]!==h||b[19]!==g||b[20]!==t||b[21]!==n||b[22]!==c||b[23]!==u||b[24]!==s?(f=(0,eF.jsx)(rc,{"data-ui":"Label",...n,$accent:r,$align:c,$muted:g,$size:u,$weight:s,ref:t,children:h}),b[17]=r,b[18]=h,b[19]=g,b[20]=t,b[21]=n,b[22]=c,b[23]=u,b[24]=s,b[25]=f):f=b[25],f});ru.displayName="ForwardRef(Label)";let rf=eP.styled.div.withConfig({displayName:"StyledAvatar",componentId:"sc-1rj7kl0-0"})(function(e){let{avatar:t,media:r}=T(e.theme);return ta(r,e.$size,e=>{let r=t.sizes[e]||t.sizes[0];return{width:to(r.size),height:to(r.size),borderRadius:to(r.size/2),"&>svg":{width:to(r.size),height:to(r.size),borderRadius:to(r.size/2)}}})},function(e){let{$color:t}=e,{avatar:r}=T(e.theme);return{"--avatar-bg-color":`var(--card-avatar-${t}-bg-color)`,"--avatar-fg-color":`var(--card-avatar-${t}-fg-color)`,backgroundColor:"var(--avatar-bg-color)",position:"relative",boxSizing:"border-box",userSelect:"none",boxShadow:"0 0 0 1px var(--card-bg-color)",'&[data-status="inactive"]':{opacity:"0.5"},"&>svg":{"&:not([hidden])":{display:"block"}},'&[data-as="button"]':{WebkitFontSmoothing:"inherit",appearance:"none",margin:0,padding:0,border:0,font:"inherit",color:"inherit",outline:"none","&:focus":{boxShadow:tV({focusRing:r.focusRing})},"&:focus:not(:focus-visible)":{boxShadow:"none"}}}}),rb=eP.styled.div.withConfig({displayName:"Arrow",componentId:"sc-1rj7kl0-1"})(function(){return{position:"absolute",boxSizing:"border-box",zIndex:"0",opacity:"0",transition:"all 0.2s linear",transform:"rotate(-90deg) translate3d(0, 6px, 0)",left:0,right:0,top:0,bottom:0,"& > svg":{width:"11px",height:"7px",position:"absolute",top:"-5px",left:"50%",transform:"translateX(-6px)","&:not([hidden])":{display:"block"}},"[data-arrow-position='inside'] > &":{transform:"rotate(-90deg) translate3d(0, 6px, 0)",opacity:"0"},"[data-arrow-position='top'] > &":{opacity:"1",transform:"rotate(0deg)"},"[data-arrow-position='bottom'] > &":{opacity:"1",transform:"rotate(-180deg)"}}}),rg=eP.styled.ellipse.withConfig({displayName:"BgStroke",componentId:"sc-1rj7kl0-2"})(function(){return{strokeWidth:"4px",stroke:"var(--card-bg-color)"}}),rp=eP.styled.ellipse.withConfig({displayName:"Stroke",componentId:"sc-1rj7kl0-3"})(function(){return{strokeWidth:"2px",stroke:"var(--avatar-bg-color)",'[data-status="editing"] &':{strokeDasharray:"2 4",strokeLinecap:"round"}}}),rh=eP.styled.div.withConfig({displayName:"Initials",componentId:"sc-1rj7kl0-4"})(function(){return{width:"100%",height:"100%",color:"var(--avatar-fg-color)",alignItems:"center",justifyContent:"center",textTransform:"uppercase",textAlign:"center",borderRadius:"50%","&:not([hidden])":{display:"flex"}}}),rm=(0,eP.styled)(ru).withConfig({displayName:"InitialsLabel",componentId:"sc-1rj7kl0-5"})({color:"inherit"}),ry=eP.styled.svg.withConfig({displayName:"AvatarImage",componentId:"sc-1rj7kl0-6"})(function(){return{position:"relative"}}),rv=(0,eB.forwardRef)(function(e,t){let r,o,a,n,i,d,l,s,c,u,f,b,g,p,h,m,y,v,w,k,x=(0,eA.c)(46);x[0]!==e?({__unstable_hideInnerStroke:r,as:n,color:c,src:s,title:b,initials:i,onImageLoadError:d,arrowPosition:a,animateArrowFrom:o,status:u,size:f,...l}=e,x[0]=e,x[1]=r,x[2]=o,x[3]=a,x[4]=n,x[5]=i,x[6]=d,x[7]=l,x[8]=s,x[9]=c,x[10]=u,x[11]=f,x[12]=b):(r=x[1],o=x[2],a=x[3],n=x[4],i=x[5],d=x[6],l=x[7],s=x[8],c=x[9],u=x[10],f=x[11],b=x[12]);let $=void 0===c?"gray":c,S=void 0===u?"online":u,R=void 0===f?1:f,{avatar:_}=tw(),z=eD.default.isValidElementType(n)?n:"div",j=tn(R),C=(_.sizes[j[0]]||_.sizes[0]).size,E=C/2,I=(0,eB.useId)(),[N,H]=(0,eB.useState)(o||a||"inside"),[T,M]=(0,eB.useState)(!1),O=`avatar-image-${I}`;x[13]!==N||x[14]!==a?(g=()=>{if(N===a)return;let e=requestAnimationFrame(()=>H(a));return()=>cancelAnimationFrame(e)},p=[N,a],x[13]=N,x[14]=a,x[15]=g,x[16]=p):(g=x[15],p=x[16]),(0,eB.useEffect)(g,p),x[17]!==s?(h=()=>{s&&M(!1)},m=[s],x[17]=s,x[18]=h,x[19]=m):(h=x[18],m=x[19]),(0,eB.useEffect)(h,m),x[20]!==d?(y=()=>{M(!0),d&&d(Error("Avatar: the image failed to load"))},x[20]=d,x[21]=y):y=x[21];let L=y,F="string"==typeof z?z:void 0;x[22]!==$?(v=(0,eF.jsx)(rb,{children:(0,eF.jsx)("svg",{width:"11",height:"7",viewBox:"0 0 11 7",fill:"none",children:(0,eF.jsx)("path",{d:"M6.67948 1.50115L11 7L0 7L4.32052 1.50115C4.92109 0.736796 6.07891 0.736795 6.67948 1.50115Z",fill:$})})}),x[22]=$,x[23]=v):v=x[23],x[24]!==r||x[25]!==E||x[26]!==C||x[27]!==L||x[28]!==T||x[29]!==O||x[30]!==s?(w=!T&&s&&(0,eF.jsxs)(ry,{viewBox:`0 0 ${C} ${C}`,fill:"none",children:[(0,eF.jsx)("defs",{children:(0,eF.jsx)("pattern",{id:O,patternContentUnits:"objectBoundingBox",width:"1",height:"1",children:(0,eF.jsx)("image",{href:s,width:"1",height:"1",onError:L})})}),(0,eF.jsx)("circle",{cx:E,cy:E,r:E,fill:`url(#${O})`}),!r&&(0,eF.jsx)(rg,{cx:E,cy:E,rx:E,ry:E,vectorEffect:"non-scaling-stroke"}),(0,eF.jsx)(rp,{cx:E,cy:E,rx:E,ry:E,vectorEffect:"non-scaling-stroke"})]}),x[24]=r,x[25]=E,x[26]=C,x[27]=L,x[28]=T,x[29]=O,x[30]=s,x[31]=w):w=x[31];let A=(T||!s)&&i&&(0,eF.jsx)(eF.Fragment,{children:(0,eF.jsx)(rh,{children:(0,eF.jsx)(rm,{forwardedAs:"span",size:j.map(rw),weight:"medium",children:i})})});return x[32]!==rf||x[33]!==N||x[34]!==z||x[35]!==$||x[36]!==t||x[37]!==l||x[38]!==j||x[39]!==S||x[40]!==v||x[41]!==w||x[42]!==A||x[43]!==F||x[44]!==b?(k=(0,eF.jsxs)(rf,{as:z,"data-as":F,"data-ui":"Avatar",...l,$color:$,$size:j,"aria-label":b,"data-arrow-position":N,"data-status":S,ref:t,title:b,children:[v,w,A]}),x[32]=rf,x[33]=N,x[34]=z,x[35]=$,x[36]=t,x[37]=l,x[38]=j,x[39]=S,x[40]=v,x[41]=w,x[42]=A,x[43]=F,x[44]=b,x[45]=k):k=x[45],k});function rw(e){return 1===e?1:2===e?3:5*(3===e)}rv.displayName="ForwardRef(Avatar)";let rk=eP.styled.div.withConfig({displayName:"StyledAvatarCounter",componentId:"sc-1ydx86y-0"})(function(e){let{avatar:t,media:r}=T(e.theme);return ta(r,e.$size,e=>{let r=t.sizes[e];return r?{borderRadius:to(r.size/2),minWidth:to(r.size),height:to(r.size)}:eJ})},function(e){let{space:t}=T(e.theme);return eP.css`
    align-items: center;
    justify-content: center;
    box-sizing: border-box;
    user-select: none;
    color: inherit;
    color: var(--card-fg-color);
    background: var(--card-bg-color);
    box-shadow:
      0 0 0 1px var(--card-bg-color),
      inset 0 0 0 1px var(--card-hairline-hard-color);
    padding: 0 ${to(t[2])};

    &:not([hidden]) {
      display: flex;
    }
  `}),rx=(0,eB.forwardRef)(function(e,t){let r,o,a,n,i,d,l,s,c,u=(0,eA.c)(20),{count:f,size:b}=e,g=void 0===b?1:b;if(u[0]!==t||u[1]!==g){let e=tn(g);o=rk,i=e,d="AvatarCounter",l=t,r=ru,a="span",n=e.map(r$),u[0]=t,u[1]=g,u[2]=r,u[3]=o,u[4]=a,u[5]=n,u[6]=i,u[7]=d,u[8]=l}else r=u[2],o=u[3],a=u[4],n=u[5],i=u[6],d=u[7],l=u[8];return u[9]!==r||u[10]!==f||u[11]!==a||u[12]!==n?(s=(0,eF.jsx)(r,{as:a,size:n,weight:"medium",children:f}),u[9]=r,u[10]=f,u[11]=a,u[12]=n,u[13]=s):s=u[13],u[14]!==o||u[15]!==i||u[16]!==d||u[17]!==l||u[18]!==s?(c=(0,eF.jsx)(o,{$size:i,"data-ui":d,ref:l,children:s}),u[14]=o,u[15]=i,u[16]=d,u[17]=l,u[18]=s,u[19]=c):c=u[19],c});function r$(e){return 1===e?1:2===e?3:5*(3===e)}rx.displayName="ForwardRef(AvatarCounter)";let rS=eP.css`
  white-space: nowrap;

  & > div {
    vertical-align: top;

    &:not([hidden]) {
      display: inline-block;
    }
  }
`,rR=eP.styled.div.withConfig({displayName:"StyledAvatarStack",componentId:"sc-cysmbb-0"})(function(e){let{avatar:t,media:r}=T(e.theme);return ta(r,e.$size,e=>{let r=t.sizes[e];return r?{"& > div + div":{marginLeft:to(r.distance)}}:eJ})},function(){return rS}),r_=(0,eB.forwardRef)(function(e,t){let r,o,a,n,i,d,l,s,c,u,f,b,g,p=(0,eA.c)(38);p[0]!==e?({children:r,maxLength:a,size:n,...o}=e,p[0]=e,p[1]=r,p[2]=o,p[3]=a,p[4]=n):(r=p[1],o=p[2],a=p[3],n=p[4]);let h=void 0===a?4:a,m=void 0===n?1:n;if(p[5]!==r||p[6]!==h||p[7]!==t||p[8]!==o||p[9]!==m){let e,a,n=eB.Children.toArray(r).filter(eB.isValidElement),g=Math.max(h,0);p[18]!==m?(e=tn(m),p[18]=m,p[19]=e):e=p[19];let y=e,v=n.length,w=v-(g-1),k=w>1?n.slice(w,v):n;i=rR,d="AvatarStack",l=o,s=t,c=y,p[20]!==v||p[21]!==y?(u=0===v&&(0,eF.jsx)("div",{children:(0,eF.jsx)(rx,{count:v,size:y})}),p[20]=v,p[21]=y,p[22]=u):u=p[22],p[23]!==w||p[24]!==v||p[25]!==y?(f=0!==v&&w>1&&(0,eF.jsx)("div",{children:(0,eF.jsx)(rx,{count:w,size:y})}),p[23]=w,p[24]=v,p[25]=y,p[26]=f):f=p[26],p[27]!==y?(a=(e,t)=>(0,eF.jsx)("div",{children:(0,eB.cloneElement)(e,{size:y})},String(t)),p[27]=y,p[28]=a):a=p[28],b=k.map(a),p[5]=r,p[6]=h,p[7]=t,p[8]=o,p[9]=m,p[10]=i,p[11]=d,p[12]=l,p[13]=s,p[14]=c,p[15]=u,p[16]=f,p[17]=b}else i=p[10],d=p[11],l=p[12],s=p[13],c=p[14],u=p[15],f=p[16],b=p[17];return p[29]!==i||p[30]!==d||p[31]!==l||p[32]!==s||p[33]!==c||p[34]!==u||p[35]!==f||p[36]!==b?(g=(0,eF.jsxs)(i,{"data-ui":d,...l,ref:s,$size:c,children:[u,f,b]}),p[29]=i,p[30]=d,p[31]=l,p[32]=s,p[33]=c,p[34]=u,p[35]=f,p[36]=b,p[37]=g):g=p[37],g});r_.displayName="ForwardRef(AvatarStack)";let rz=eP.styled.div.withConfig({displayName:"StyledBox",componentId:"sc-1hhky9f-0"})(function(){return t_},tT,function(){return[tE,tI,tN,tC]},function(){return[tY,tU,tX,tq,tK,tQ]},function(e){let{theme:t}=e;return[ti(t,["margin"],e.$margin),ti(t,["marginLeft","marginRight"],e.$marginX),ti(t,["marginTop","marginBottom"],e.$marginY),ti(t,["marginTop"],e.$marginTop),ti(t,["marginRight"],e.$marginRight),ti(t,["marginBottom"],e.$marginBottom),ti(t,["marginLeft"],e.$marginLeft)].filter(Boolean)},ri),rj=(0,eB.forwardRef)(function(e,t){let r,o,a,n,i,d,l,s,c,u,f,b,g,p,h,m,y,v,w,k,x,$,S,R,_,z,j,C,E,I,N,H,T,M,O,L,F,A,B,P,D,V,W,G,Y,U,X,q,K,Q,Z,J,ee,et=(0,eA.c)(109);et[0]!==e?({as:R,column:r,columnStart:a,columnEnd:o,display:_,flex:n,height:i,margin:z,marginX:u,marginY:f,marginTop:c,marginRight:s,marginBottom:d,marginLeft:l,overflow:b,padding:j,paddingX:y,paddingY:v,paddingTop:m,paddingRight:h,paddingBottom:g,paddingLeft:p,row:k,rowStart:$,rowEnd:x,sizing:S,...w}=e,et[0]=e,et[1]=r,et[2]=o,et[3]=a,et[4]=n,et[5]=i,et[6]=d,et[7]=l,et[8]=s,et[9]=c,et[10]=u,et[11]=f,et[12]=b,et[13]=g,et[14]=p,et[15]=h,et[16]=m,et[17]=y,et[18]=v,et[19]=w,et[20]=k,et[21]=x,et[22]=$,et[23]=S,et[24]=R,et[25]=_,et[26]=z,et[27]=j):(r=et[1],o=et[2],a=et[3],n=et[4],i=et[5],d=et[6],l=et[7],s=et[8],c=et[9],u=et[10],f=et[11],b=et[12],g=et[13],p=et[14],h=et[15],m=et[16],y=et[17],v=et[18],w=et[19],k=et[20],x=et[21],$=et[22],S=et[23],R=et[24],_=et[25],z=et[26],j=et[27]);let er=void 0===R?"div":R,eo=void 0===_?"block":_,ea=void 0===z?0:z,en=void 0===j?0:j,ei="string"==typeof er?er:void 0;return et[28]!==r?(C=tn(r),et[28]=r,et[29]=C):C=et[29],et[30]!==a?(E=tn(a),et[30]=a,et[31]=E):E=et[31],et[32]!==o?(I=tn(o),et[32]=o,et[33]=I):I=et[33],et[34]!==eo?(N=tn(eo),et[34]=eo,et[35]=N):N=et[35],et[36]!==n?(H=tn(n),et[36]=n,et[37]=H):H=et[37],et[38]!==i?(T=tn(i),et[38]=i,et[39]=T):T=et[39],et[40]!==ea?(M=tn(ea),et[40]=ea,et[41]=M):M=et[41],et[42]!==u?(O=tn(u),et[42]=u,et[43]=O):O=et[43],et[44]!==f?(L=tn(f),et[44]=f,et[45]=L):L=et[45],et[46]!==c?(F=tn(c),et[46]=c,et[47]=F):F=et[47],et[48]!==s?(A=tn(s),et[48]=s,et[49]=A):A=et[49],et[50]!==d?(B=tn(d),et[50]=d,et[51]=B):B=et[51],et[52]!==l?(P=tn(l),et[52]=l,et[53]=P):P=et[53],et[54]!==b?(D=tn(b),et[54]=b,et[55]=D):D=et[55],et[56]!==en?(V=tn(en),et[56]=en,et[57]=V):V=et[57],et[58]!==y?(W=tn(y),et[58]=y,et[59]=W):W=et[59],et[60]!==v?(G=tn(v),et[60]=v,et[61]=G):G=et[61],et[62]!==m?(Y=tn(m),et[62]=m,et[63]=Y):Y=et[63],et[64]!==h?(U=tn(h),et[64]=h,et[65]=U):U=et[65],et[66]!==g?(X=tn(g),et[66]=g,et[67]=X):X=et[67],et[68]!==p?(q=tn(p),et[68]=p,et[69]=q):q=et[69],et[70]!==k?(K=tn(k),et[70]=k,et[71]=K):K=et[71],et[72]!==$?(Q=tn($),et[72]=$,et[73]=Q):Q=et[73],et[74]!==x?(Z=tn(x),et[74]=x,et[75]=Z):Z=et[75],et[76]!==S?(J=tn(S),et[76]=S,et[77]=J):J=et[77],et[78]!==er||et[79]!==e.children||et[80]!==t||et[81]!==w||et[82]!==T||et[83]!==M||et[84]!==O||et[85]!==L||et[86]!==F||et[87]!==A||et[88]!==B||et[89]!==P||et[90]!==D||et[91]!==V||et[92]!==W||et[93]!==G||et[94]!==Y||et[95]!==U||et[96]!==X||et[97]!==q||et[98]!==K||et[99]!==Q||et[100]!==Z||et[101]!==J||et[102]!==ei||et[103]!==C||et[104]!==E||et[105]!==I||et[106]!==N||et[107]!==H?(ee=(0,eF.jsx)(rz,{"data-as":ei,"data-ui":"Box",...w,$column:C,$columnStart:E,$columnEnd:I,$display:N,$flex:H,$height:T,$margin:M,$marginX:O,$marginY:L,$marginTop:F,$marginRight:A,$marginBottom:B,$marginLeft:P,$overflow:D,$padding:V,$paddingX:W,$paddingY:G,$paddingTop:Y,$paddingRight:U,$paddingBottom:X,$paddingLeft:q,$row:K,$rowStart:Q,$rowEnd:Z,$sizing:J,as:er,ref:t,children:e.children}),et[78]=er,et[79]=e.children,et[80]=t,et[81]=w,et[82]=T,et[83]=M,et[84]=O,et[85]=L,et[86]=F,et[87]=A,et[88]=B,et[89]=P,et[90]=D,et[91]=V,et[92]=W,et[93]=G,et[94]=Y,et[95]=U,et[96]=X,et[97]=q,et[98]=K,et[99]=Q,et[100]=Z,et[101]=J,et[102]=ei,et[103]=C,et[104]=E,et[105]=I,et[106]=N,et[107]=H,et[108]=ee):ee=et[108],ee});rj.displayName="ForwardRef(Box)";let rC=eP.styled.div.withConfig({displayName:"StyledText",componentId:"sc-11ov82j-0"})(tf,tu,function(e){let{$accent:t,$muted:r}=e,{font:o}=T(e.theme);return eP.css`
    color: var(--card-fg-color);

    ${t&&eP.css`
      color: var(--card-accent-fg-color);
    `}

    ${r&&eP.css`
      color: var(--card-muted-fg-color);
    `}

    & code {
      font-family: ${o.code.family};
      border-radius: 1px;
      background-color: var(--card-code-bg-color);
      color: var(--card-code-fg-color);
    }

    & a {
      text-decoration: none;
      border-radius: 1px;
      color: var(--card-link-color);
      outline: none;

      @media (hover: hover) {
        &:hover {
          text-decoration: underline;
        }
      }

      &:focus {
        box-shadow:
          0 0 0 1px var(--card-bg-color),
          0 0 0 3px var(--card-focus-ring-color);
      }

      &:focus:not(:focus-visible) {
        box-shadow: none;
      }
    }

    & strong {
      font-weight: ${o.text.weights.bold};
    }

    & svg {
      /* Certain popular CSS libraries changes the defaults for SVG display */
      /* Make sure SVGs are rendered as inline elements */
      display: inline;
    }

    & [data-sanity-icon] {
      vertical-align: baseline;
      color: var(--card-icon-color);

      & path {
        vector-effect: non-scaling-stroke !important;
      }
    }
  `}),rE=(0,eB.forwardRef)(function(e,t){let r,o,a,n,i,d,l,s,c,u,f,b,g=(0,eA.c)(26);g[0]!==e?({accent:n,align:r,children:o,muted:i,size:d,textOverflow:l,weight:s,...a}=e,g[0]=e,g[1]=r,g[2]=o,g[3]=a,g[4]=n,g[5]=i,g[6]=d,g[7]=l,g[8]=s):(r=g[1],o=g[2],a=g[3],n=g[4],i=g[5],d=g[6],l=g[7],s=g[8]);let p=void 0!==n&&n,h=void 0!==i&&i,m=void 0===d?2:d,y=o;if("ellipsis"===l){let e;g[9]!==y?(e=(0,eF.jsx)(rs,{children:y}),g[9]=y,g[10]=e):e=g[10],y=e}return g[11]!==r?(c=tn(r),g[11]=r,g[12]=c):c=g[12],g[13]!==m?(u=tn(m),g[13]=m,g[14]=u):u=g[14],g[15]!==y?(f=(0,eF.jsx)("span",{children:y}),g[15]=y,g[16]=f):f=g[16],g[17]!==p||g[18]!==h||g[19]!==t||g[20]!==a||g[21]!==c||g[22]!==u||g[23]!==f||g[24]!==s?(b=(0,eF.jsx)(rC,{"data-ui":"Text",...a,$accent:p,$align:c,$muted:h,ref:t,$size:u,$weight:s,children:f}),g[17]=p,g[18]=h,g[19]=t,g[20]=a,g[21]=c,g[22]=u,g[23]=f,g[24]=s,g[25]=b):b=g[25],b});rE.displayName="ForwardRef(Text)";let rI=(0,eP.styled)(rj).withConfig({displayName:"StyledBadge",componentId:"sc-5u140l-0"})(rd,function(e){let{$tone:t}=e;return{"--card-bg-color":`var(--card-badge-${t}-bg-color)`,"--card-fg-color":`var(--card-badge-${t}-fg-color)`,backgroundColor:"var(--card-bg-color)",cursor:"default","&:not([hidden])":{display:"inline-block",verticalAlign:"top"}}}),rN=(0,eB.forwardRef)(function(e,t){let r,o,a,n,i,d,l,s,c,u,f=(0,eA.c)(21);if(f[0]!==e){let{children:t,fontSize:l,mode:s,padding:c,radius:u,tone:b,...g}=e;r=t,a=l,n=c,i=u,d=b,o=g,f[0]=e,f[1]=r,f[2]=o,f[3]=a,f[4]=n,f[5]=i,f[6]=d}else r=f[1],o=f[2],a=f[3],n=f[4],i=f[5],d=f[6];let b=void 0===a?1:a,g=void 0===n?1:n,p=void 0===i?"full":i,h=void 0===d?"default":d;return f[7]!==p?(l=tn(p),f[7]=p,f[8]=l):l=f[8],f[9]!==g?(s=tn(g),f[9]=g,f[10]=s):s=f[10],f[11]!==r||f[12]!==b?(c=(0,eF.jsx)(rE,{size:b,children:r}),f[11]=r,f[12]=b,f[13]=c):c=f[13],f[14]!==t||f[15]!==o||f[16]!==l||f[17]!==s||f[18]!==c||f[19]!==h?(u=(0,eF.jsx)(rI,{"data-ui":"Badge",...o,$tone:h,$radius:l,padding:s,ref:t,children:c}),f[14]=t,f[15]=o,f[16]=l,f[17]=s,f[18]=c,f[19]=h,f[20]=u):u=f[20],u});rN.displayName="ForwardRef(Badge)";let rH=(0,eP.styled)(rj).withConfig({displayName:"StyledFlex",componentId:"sc-oxesg3-0"})(tT,function(){return[tO,tL,tF,tA,tB,tP]}),rT=(0,eB.forwardRef)(function(e,t){let r,o,a,n,i,d,l,s,c,u,f,b,g,p=(0,eA.c)(27);p[0]!==e?({align:r,as:o,direction:d,gap:a,justify:n,wrap:l,...i}=e,p[0]=e,p[1]=r,p[2]=o,p[3]=a,p[4]=n,p[5]=i,p[6]=d,p[7]=l):(r=p[1],o=p[2],a=p[3],n=p[4],i=p[5],d=p[6],l=p[7]);let h=void 0===d?"row":d;return p[8]!==r?(s=tn(r),p[8]=r,p[9]=s):s=p[9],p[10]!==h?(c=tn(h),p[10]=h,p[11]=c):c=p[11],p[12]!==a?(u=tn(a),p[12]=a,p[13]=u):u=p[13],p[14]!==n?(f=tn(n),p[14]=n,p[15]=f):f=p[15],p[16]!==l?(b=tn(l),p[16]=l,p[17]=b):b=p[17],p[18]!==o||p[19]!==t||p[20]!==i||p[21]!==s||p[22]!==c||p[23]!==u||p[24]!==f||p[25]!==b?(g=(0,eF.jsx)(rH,{"data-ui":"Flex",...i,$align:s,$direction:c,$gap:u,$justify:f,$wrap:b,forwardedAs:o,ref:t}),p[18]=o,p[19]=t,p[20]=i,p[21]=s,p[22]=c,p[23]=u,p[24]=f,p[25]=b,p[26]=g):g=p[26],g});rT.displayName="ForwardRef(Flex)";let rM=eP.keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`,rO=(0,eP.styled)(rE).withConfig({displayName:"StyledSpinner",componentId:"sc-124hnd0-0"})`& > span > svg{animation:${rM} 500ms linear infinite;}`,rL=(0,eB.forwardRef)(function(e,t){let r,o,a=(0,eA.c)(4);return a[0]===Symbol.for("react.memo_cache_sentinel")?(r=(0,eF.jsx)(eV.SpinnerIcon,{}),a[0]=r):r=a[0],a[1]!==e||a[2]!==t?(o=(0,eF.jsx)(rO,{"data-ui":"Spinner",...e,ref:t,children:r}),a[1]=e,a[2]=t,a[3]=o):o=a[3],o});function rF(e,t,r=!1){return{"--card-backdrop-color":e.backdrop,"--card-focus-ring-color":e.focusRing,"--card-shadow-outline-color":e.shadow.outline,"--card-shadow-umbra-color":e.shadow.umbra,"--card-shadow-penumbra-color":e.shadow.penumbra,"--card-shadow-ambient-color":e.shadow.ambient,"--card-accent-fg-color":t.accent.fg,"--card-avatar-gray-bg-color":t.avatar.gray.bg,"--card-avatar-gray-fg-color":t.avatar.gray.fg,"--card-avatar-blue-bg-color":t.avatar.blue.bg,"--card-avatar-blue-fg-color":t.avatar.blue.fg,"--card-avatar-purple-bg-color":t.avatar.purple.bg,"--card-avatar-purple-fg-color":t.avatar.purple.fg,"--card-avatar-magenta-bg-color":t.avatar.magenta.bg,"--card-avatar-magenta-fg-color":t.avatar.magenta.fg,"--card-avatar-red-bg-color":t.avatar.red.bg,"--card-avatar-red-fg-color":t.avatar.red.fg,"--card-avatar-orange-bg-color":t.avatar.orange.bg,"--card-avatar-orange-fg-color":t.avatar.orange.fg,"--card-avatar-yellow-bg-color":t.avatar.yellow.bg,"--card-avatar-yellow-fg-color":t.avatar.yellow.fg,"--card-avatar-green-bg-color":t.avatar.green.bg,"--card-avatar-green-fg-color":t.avatar.green.fg,"--card-avatar-cyan-bg-color":t.avatar.cyan.bg,"--card-avatar-cyan-fg-color":t.avatar.cyan.fg,"--card-bg-color":t.bg,"--card-bg-image":r?`repeating-conic-gradient(${t.bg} 0% 25%, ${t.muted.bg} 0% 50%)`:void 0,"--card-border-color":t.border,"--card-badge-default-bg-color":t.badge.default.bg,"--card-badge-default-dot-color":t.badge.default.dot,"--card-badge-default-fg-color":t.badge.default.fg,"--card-badge-default-icon-color":t.badge.default.icon,"--card-badge-neutral-bg-color":t.badge.neutral?.bg,"--card-badge-neutral-dot-color":t.badge.neutral?.dot,"--card-badge-neutral-fg-color":t.badge.neutral?.fg,"--card-badge-neutral-icon-color":t.badge.neutral?.icon,"--card-badge-primary-bg-color":t.badge.primary.bg,"--card-badge-primary-dot-color":t.badge.primary.dot,"--card-badge-primary-fg-color":t.badge.primary.fg,"--card-badge-primary-icon-color":t.badge.primary.icon,"--card-badge-suggest-bg-color":t.badge.suggest?.bg,"--card-badge-suggest-dot-color":t.badge.suggest?.dot,"--card-badge-suggest-fg-color":t.badge.suggest?.fg,"--card-badge-suggest-icon-color":t.badge.suggest?.icon,"--card-badge-positive-bg-color":t.badge.positive.bg,"--card-badge-positive-dot-color":t.badge.positive.dot,"--card-badge-positive-fg-color":t.badge.positive.fg,"--card-badge-positive-icon-color":t.badge.positive.icon,"--card-badge-caution-bg-color":t.badge.caution.bg,"--card-badge-caution-dot-color":t.badge.caution.dot,"--card-badge-caution-fg-color":t.badge.caution.fg,"--card-badge-caution-icon-color":t.badge.caution.icon,"--card-badge-critical-bg-color":t.badge.critical.bg,"--card-badge-critical-dot-color":t.badge.critical.dot,"--card-badge-critical-fg-color":t.badge.critical.fg,"--card-badge-critical-icon-color":t.badge.critical.icon,"--card-code-bg-color":t.code.bg,"--card-code-fg-color":t.code.fg,"--card-fg-color":t.fg,"--card-icon-color":t.icon,"--card-kbd-bg-color":t.kbd.bg,"--card-kbd-border-color":t.kbd.border,"--card-kbd-fg-color":t.kbd.fg,"--card-link-fg-color":t.link.fg,"--card-muted-bg-color":t.muted.bg,"--card-muted-fg-color":t.muted.fg,"--card-skeleton-color-from":t.skeleton.from,"--card-skeleton-color-to":t.skeleton.to,"--card-bg2-color":t.muted.bg,"--card-link-color":t.link.fg,"--card-hairline-soft-color":t.border,"--card-hairline-hard-color":t.border}}function rA(...e){return e.filter(Boolean).join(",")}rL.displayName="ForwardRef(Spinner)";let rB=eP.styled.button.withConfig({displayName:"StyledButton",componentId:"sc-aaekt4-0"})(rd,function(e){let{$width:t}=e,{style:r}=T(e.theme);return eP.css`
    ${r?.button};

    -webkit-font-smoothing: inherit;
    appearance: none;
    display: inline-flex;
    align-items: center;
    font: inherit;
    border: 0;
    outline: none;
    user-select: none;
    text-decoration: none;
    border: 0;
    box-sizing: border-box;
    padding: 0;
    margin: 0;
    white-space: nowrap;
    text-align: left;
    position: relative;
    vertical-align: top;

    ${"fill"===t&&eP.css`
      width: -moz-available;
      width: -webkit-fill-available;
      width: stretch;
    `}

    & > span {
      display: block;
      flex: 1;
      min-width: 0;
      border-radius: inherit;
    }

    &::-moz-focus-inner {
      border: 0;
      padding: 0;
    }
  `},function(e){let{$mode:t}=e,{button:r,color:o,style:a}=T(e.theme),n="ghost"===e.$mode,i=o.button[t]||o.button.default,d=i[e.$tone]||i.default,l={width:r.border.width,color:"var(--card-border-color)"},s;return[rF(o,d.enabled),{backgroundColor:"var(--card-bg-color)",color:"var(--card-fg-color)",boxShadow:tD(l),'&:disabled, &[data-disabled="true"]':rF(o,d.disabled),"&:not([data-disabled='true'])":{boxShadow:rA(tD(l),n?s:void 0),"&:focus":{boxShadow:tV({base:o,border:{width:2,color:o.bg},focusRing:r.focusRing})},"&:focus:not(:focus-visible)":{boxShadow:rA(tD(l),n?s:void 0)},"@media (hover: hover)":{"&:hover":rF(o,d.hovered),"&:active":rF(o,d.pressed),"&[data-hovered]":rF(o,d.hovered)},"&[data-selected]":rF(o,d.pressed)}},a?.button?.root].filter(Boolean)}),rP=eP.styled.div.withConfig({displayName:"LoadingBox",componentId:"sc-aaekt4-1"})`position:absolute;top:0;left:0;right:0;bottom:0;display:flex;align-items:center;justify-content:center;background-color:var(--card-bg-color);border-radius:inherit;z-index:1;box-shadow:inherit;`,rD=(0,eB.forwardRef)(function(e,t){let r,o,a,n,i,d,l,s,c,u,f,b,g,p,h,m,y,v,w,k,x,$,S,R,_,z,j,C,E,I,N,H,T,M,O,L,F,A,B,P,D,V=(0,eA.c)(86);V[0]!==e?({children:a,disabled:n,fontSize:p,icon:r,iconRight:o,justify:h,loading:i,mode:m,padding:y,paddingX:u,paddingY:f,paddingTop:c,paddingBottom:d,paddingLeft:l,paddingRight:s,radius:v,selected:g,space:w,text:S,textAlign:R,textWeight:_,tone:k,type:x,muted:$,width:z,...b}=e,V[0]=e,V[1]=r,V[2]=o,V[3]=a,V[4]=n,V[5]=i,V[6]=d,V[7]=l,V[8]=s,V[9]=c,V[10]=u,V[11]=f,V[12]=b,V[13]=g,V[14]=p,V[15]=h,V[16]=m,V[17]=y,V[18]=v,V[19]=w,V[20]=k,V[21]=x,V[22]=$,V[23]=S,V[24]=R,V[25]=_,V[26]=z):(r=V[1],o=V[2],a=V[3],n=V[4],i=V[5],d=V[6],l=V[7],s=V[8],c=V[9],u=V[10],f=V[11],b=V[12],g=V[13],p=V[14],h=V[15],m=V[16],y=V[17],v=V[18],w=V[19],k=V[20],x=V[21],$=V[22],S=V[23],R=V[24],_=V[25],z=V[26]);let W=void 0===p?1:p,G=void 0===h?"center":h,Y=void 0===m?"default":m,U=void 0===y?3:y,X=void 0===v?2:v,q=void 0===w?3:w,K=void 0===k?"default":k,Q=void 0===x?"button":x,Z=void 0!==$&&$,{button:J}=tw();V[27]!==G?(j=tn(G),V[27]=G,V[28]=j):j=V[28];let ee=j;V[29]!==U?(C=tn(U),V[29]=U,V[30]=C):C=V[30];let et=C;V[31]!==u?(E=tn(u),V[31]=u,V[32]=E):E=V[32];let er=E;V[33]!==f?(I=tn(f),V[33]=f,V[34]=I):I=V[34];let eo=I;V[35]!==c?(N=tn(c),V[35]=c,V[36]=N):N=V[36];let ea=N;V[37]!==d?(H=tn(d),V[37]=d,V[38]=H):H=V[38];let en=H;V[39]!==l?(T=tn(l),V[39]=l,V[40]=T):T=V[40];let ei=T;V[41]!==s?(M=tn(s),V[41]=s,V[42]=M):M=V[42];let ed=M;V[43]!==X?(O=tn(X),V[43]=X,V[44]=O):O=V[44];let el=O;V[45]!==q?(L=tn(q),V[45]=q,V[46]=L):L=V[46];let es=L;V[47]!==et||V[48]!==en||V[49]!==ei||V[50]!==ed||V[51]!==ea||V[52]!==er||V[53]!==eo?(F={padding:et,paddingX:er,paddingY:eo,paddingTop:ea,paddingBottom:en,paddingLeft:ei,paddingRight:ed},V[47]=et,V[48]=en,V[49]=ei,V[50]=ed,V[51]=ea,V[52]=er,V[53]=eo,V[54]=F):F=V[54];let ec=F,eu=!!(i||n),ef=g?"":void 0,eb=!!(i||n);return V[55]!==i?(A=!!i&&(0,eF.jsx)(rP,{children:(0,eF.jsx)(rL,{})}),V[55]=i,V[56]=A):A=V[56],V[57]!==r||V[58]!==o||V[59]!==ec||V[60]!==J||V[61]!==W||V[62]!==ee||V[63]!==Z||V[64]!==es||V[65]!==S||V[66]!==R||V[67]!==_?(B=(r||S||o)&&(0,eF.jsx)(rj,{as:"span",...ec,children:(0,eF.jsxs)(rT,{as:"span",justify:ee,gap:es,children:[r&&(0,eF.jsxs)(rE,{size:W,children:[(0,eB.isValidElement)(r)&&r,(0,eD.isValidElementType)(r)&&(0,eF.jsx)(r,{})]}),S&&(0,eF.jsx)(rj,{children:(0,eF.jsx)(rE,{muted:Z,align:R,size:W,textOverflow:"ellipsis",weight:_??J.textWeight,children:S})}),o&&(0,eF.jsxs)(rE,{size:W,children:[(0,eB.isValidElement)(o)&&o,(0,eD.isValidElementType)(o)&&(0,eF.jsx)(o,{})]})]})}),V[57]=r,V[58]=o,V[59]=ec,V[60]=J,V[61]=W,V[62]=ee,V[63]=Z,V[64]=es,V[65]=S,V[66]=R,V[67]=_,V[68]=B):B=V[68],V[69]!==ec||V[70]!==a?(P=a&&(0,eF.jsx)(rj,{as:"span",...ec,children:a}),V[69]=ec,V[70]=a,V[71]=P):P=V[71],V[72]!==Y||V[73]!==el||V[74]!==t||V[75]!==b||V[76]!==eu||V[77]!==ef||V[78]!==eb||V[79]!==A||V[80]!==B||V[81]!==P||V[82]!==K||V[83]!==Q||V[84]!==z?(D=(0,eF.jsxs)(rB,{"data-ui":"Button",...b,$mode:Y,$radius:el,$tone:K,"data-disabled":eu,"data-selected":ef,disabled:eb,ref:t,type:Q,$width:z,children:[A,B,P]}),V[72]=Y,V[73]=el,V[74]=t,V[75]=b,V[76]=eu,V[77]=ef,V[78]=eb,V[79]=A,V[80]=B,V[81]=P,V[82]=K,V[83]=Q,V[84]=z,V[85]=D):D=V[85],D});rD.displayName="ForwardRef(Button)";let rV=(0,eP.styled)(rj).withConfig({displayName:"StyledCard",componentId:"sc-osnro2-0"})(function(){return[tk,tx,t$,tS,tR]},rd,function(e){let{card:t,media:r,shadow:o}=T(e.theme);return ta(r,e.$shadow,e=>(function(e,t=1){if(!e)return eJ;let r=`0 0 0 ${to(t)} var(--card-shadow-outline-color)`,o=rl(e.umbra,"var(--card-shadow-umbra-color)"),a=rl(e.penumbra,"var(--card-shadow-penumbra-color)"),n=rl(e.ambient,"var(--card-shadow-ambient-color)");return{boxShadow:`${r}, ${o}, ${a}, ${n}`}})(o[e],t.shadow.outline))},function(e){return[function(e){let{$checkered:t}=e,{space:r}=T(e.theme);return eP.css`
    ${t&&eP.css`
      background-size: ${r[3]}px ${r[3]}px;
      background-position: 50% 50%;
      background-image: var(--card-bg-image);
    `}

    &[data-as='button'] {
      -webkit-font-smoothing: inherit;
      appearance: none;
      outline: none;
      font: inherit;
      text-align: inherit;
      border: 0;
      width: -moz-available;
      width: -webkit-fill-available;
      width: stretch;
    }

    /* &:is(a) */
    &[data-as='a'] {
      outline: none;
      text-decoration: none;
    }

    /* &:is(pre) */
    &[data-as='pre'] {
      font: inherit;
    }
  `}(e),function(e){let{$checkered:t,$focusRing:r,$muted:o}=e,{card:a,color:n,style:i}=T(e.theme),d={width:a.border.width,color:"var(--card-border-color)"};return eP.css`
    color-scheme: ${n._dark?"dark":"light"};

    ${rF(n,n,t)}

    background-color: ${o?"var(--card-muted-bg-color)":"var(--card-bg-color)"};
    color: var(--card-fg-color);

    /* &:is(button) */
    &[data-as='button'] {
      --card-focus-ring-box-shadow: none;

      cursor: default;
      box-shadow: var(--card-focus-ring-box-shadow);

      &:disabled {
        ${rF(n,n.selectable.default.disabled,t)}
      }

      &:not(:disabled) {
        &[data-pressed] {
          ${rF(n,n.selectable.default.pressed,t)}
        }

        &[data-selected] {
          ${rF(n,n.selectable.default.selected,t)}
        }

        @media (hover: hover) {
          &:not([data-pressed]):not([data-selected]) {
            &[data-hovered],
            &:hover {
              ${rF(n,n.selectable.default.hovered,t)}
            }

            &:active {
              ${rF(n,n.selectable.default.pressed,t)}
            }
          }
        }

        &:focus-visible {
          --card-focus-ring-box-shadow: ${r?tV({base:n,border:d,focusRing:a.focusRing}):void 0};
        }
      }
    }

    /* &:is(a) */
    &[data-as='a'] {
      cursor: pointer;
      box-shadow: var(--card-focus-ring-box-shadow);

      &[data-disabled] {
        ${rF(n,n.selectable.default.disabled,t)}
      }

      &:not([data-disabled]) {
        &[data-pressed] {
          ${rF(n,n.selectable.default.pressed,t)}
        }

        &[data-selected] {
          ${rF(n,n.selectable.default.selected,t)}
        }

        @media (hover: hover) {
          &:not([data-pressed]):not([data-selected]) {
            &[data-hovered],
            &:hover {
              ${rF(n,n.selectable.default.hovered,t)}
            }

            &:active {
              ${rF(n,n.selectable.default.pressed,t)}
            }
          }
        }

        &:focus-visible {
          --card-focus-ring-box-shadow: ${r?tV({base:n,border:d,focusRing:a.focusRing}):void 0};
        }
      }
    }

    ${i?.card?.root}
  `}(e)]}),rW=(0,eB.forwardRef)(function(e,t){let r,o,a,n,i,d,l,s,c,u,f,b,g,p,h,m,y,v,w,k,x,$,S,R,_,z=(0,eA.c)(56);z[0]!==e?({__unstable_checkered:g,__unstable_focusRing:p,as:r,border:o,borderTop:d,borderRight:i,borderBottom:a,borderLeft:n,muted:l,pressed:s,radius:h,scheme:u,selected:f,shadow:b,tone:m,...c}=e,z[0]=e,z[1]=r,z[2]=o,z[3]=a,z[4]=n,z[5]=i,z[6]=d,z[7]=l,z[8]=s,z[9]=c,z[10]=u,z[11]=f,z[12]=b,z[13]=g,z[14]=p,z[15]=h,z[16]=m):(r=z[1],o=z[2],a=z[3],n=z[4],i=z[5],d=z[6],l=z[7],s=z[8],c=z[9],u=z[10],f=z[11],b=z[12],g=z[13],p=z[14],h=z[15],m=z[16]);let j=void 0!==g&&g,C=void 0!==p&&p,E=void 0===h?0:h,I=void 0===m?"default":m,N=(0,eD.isValidElementType)(r)?r:"div",H=tm(),T="inherit"===I?H.tone:I,M="string"==typeof N?N:void 0,O=H.scheme;z[17]!==o?(y=tn(o),z[17]=o,z[18]=y):y=z[18],z[19]!==d?(v=tn(d),z[19]=d,z[20]=v):v=z[20],z[21]!==i?(w=tn(i),z[21]=i,z[22]=w):w=z[22],z[23]!==a?(k=tn(a),z[23]=a,z[24]=k):k=z[24],z[25]!==n?(x=tn(n),z[25]=n,z[26]=x):x=z[26],z[27]!==E?($=tn(E),z[27]=E,z[28]=$):$=z[28],z[29]!==b?(S=tn(b),z[29]=b,z[30]=S):S=z[30];let L=j?"":void 0,F=s?"":void 0,A=f?"":void 0;return z[31]!==N||z[32]!==j||z[33]!==C||z[34]!==l||z[35]!==t||z[36]!==c||z[37]!==H.scheme||z[38]!==f||z[39]!==x||z[40]!==$||z[41]!==S||z[42]!==L||z[43]!==F||z[44]!==A||z[45]!==M||z[46]!==y||z[47]!==v||z[48]!==w||z[49]!==k||z[50]!==T?(R=(0,eF.jsx)(rV,{"data-as":M,"data-scheme":O,"data-ui":"Card","data-tone":T,...c,$border:y,$borderTop:v,$borderRight:w,$borderBottom:k,$borderLeft:x,$checkered:j,$focusRing:C,$muted:l,$radius:$,$shadow:S,$tone:T,"data-checkered":L,"data-pressed":F,"data-selected":A,forwardedAs:N,ref:t,selected:f}),z[31]=N,z[32]=j,z[33]=C,z[34]=l,z[35]=t,z[36]=c,z[37]=H.scheme,z[38]=f,z[39]=x,z[40]=$,z[41]=S,z[42]=L,z[43]=F,z[44]=A,z[45]=M,z[46]=y,z[47]=v,z[48]=w,z[49]=k,z[50]=T,z[51]=R):R=z[51],z[52]!==u||z[53]!==R||z[54]!==T?(_=(0,eF.jsx)(ty,{scheme:u,tone:T,children:R}),z[52]=u,z[53]=R,z[54]=T,z[55]=_):_=z[55],_});function rG(e,t,r){let o,a,n,i=(0,eA.c)(9),d=void 0===t?rY:t;i[0]!==r||i[1]!==d||i[2]!==e?(o=t=>{if(!e)return;let o=t.target;if(!(o instanceof Node))return;let a=r?.();if(!a||a.contains(o)){for(let e of d().flat())if(e&&(o===e||e.contains(o)))return;e(t)}},i[0]=r,i[1]=d,i[2]=e,i[3]=o):o=i[3];let l=(0,eK.useEffectEvent)(o),s=!!e;i[4]!==s||i[5]!==l?(a=()=>{if(!s)return;let e=e=>l(e);return document.addEventListener("mousedown",e),()=>{document.removeEventListener("mousedown",e)}},i[4]=s,i[5]=l,i[6]=a):a=i[6],i[7]!==s?(n=[s],i[7]=s,i[8]=n):n=i[8],(0,eB.useEffect)(a,n),(0,eB.useDebugValue)(e?"MouseDown On":"MouseDown Off")}function rY(){return eZ}function rU(e,t){let r,o,a=(0,eA.c)(4);a[0]!==t||a[1]!==e?(r=()=>{e.current?.setCustomValidity(t||"")},o=[t,e],a[0]=t,a[1]=e,a[2]=r,a[3]=o):(r=a[2],o=a[3]),(0,eB.useEffect)(r,o)}rW.displayName="ForwardRef(Card)";let rX="u">typeof document&&"u">typeof window&&window.ResizeObserver?window.ResizeObserver:eX.ResizeObserver,rq=(t=new WeakMap,r=new WeakMap,{subscribe(e,o){let a=r.get(e)||[],n=t.get(e);return r.has(e)||(r.set(e,a),n=({subscribe(e,t){let r=new rX(([e])=>{t({_contentRect:e.contentRect,border:{width:e.borderBoxSize[0].inlineSize,height:e.borderBoxSize[0].blockSize},content:{width:e.contentRect.width,height:e.contentRect.height}})});return r.observe(e),()=>{r.unobserve(e),r.disconnect()}}}).subscribe(e,e=>{for(let t of a)t(e)})),a.push(o),()=>{let e=a.indexOf(o);e>-1&&a.splice(e,1),0===a.length&&n&&n()}}});function rK(e){let t,r,o=(0,eA.c)(3),[a,n]=(0,eB.useState)(null);return o[0]!==e?(t=()=>{if(e)return rq.subscribe(e,n)},r=[e],o[0]=e,o[1]=t,o[2]=r):(t=o[1],r=o[2]),(0,eB.useEffect)(t,r),a}function rQ(e,t){let r,o,a,n=(0,eA.c)(7);n[0]!==e?(r=t=>e(t),n[0]=e,n[1]=r):r=n[1];let i=(0,eK.useEffectEvent)(r);n[2]!==i||n[3]!==t?(o=()=>{let e=e=>i(e);return window.addEventListener("keydown",e,t),()=>window.removeEventListener("keydown",e,t)},n[2]=i,n[3]=t,n[4]=o):o=n[4],n[5]!==t?(a=[t],n[5]=t,n[6]=a):a=n[6],(0,eB.useEffect)(o,a)}function rZ(e,t){let r,o,a=(0,eA.c)(4);return(0,eB.useDebugValue)(e),a[0]!==e?(r=t=>{let r=window.matchMedia(e);return r.addEventListener("change",t),()=>r.removeEventListener("change",t)},a[0]=e,a[1]=r):r=a[1],a[2]!==e?(o=()=>window.matchMedia(e).matches,a[2]=e,a[3]=o):o=a[3],(0,eB.useSyncExternalStore)(r,o,t)}function rJ(){return 0}function r0(){let e,t,r,o,a=(0,eA.c)(2),{media:n}=tw();a[0]!==n?(r=n.length,o=()=>{if(!t){t=[];for(let o=r;o>-1;o-=1){var e;let r=0===(e=o)?`screen and (max-width: ${n[e]-1}px)`:e===n.length?`screen and (min-width: ${n[e-1]}px)`:`screen and (min-width: ${n[e-1]}px) and (max-width: ${n[e]-1}px)`;t.push({index:o,mq:window.matchMedia(r)})}}return t},e={getSnapshot:()=>{for(let{index:e,mq:t}of o())if(t.matches)return e;return 0},subscribe:e=>{let t=[];for(let{mq:r}of o()){let o=()=>{r.matches&&e()};r.addEventListener("change",o),t.push(()=>r.removeEventListener("change",o))}return()=>{for(let e of t)e()}}},a[0]=n,a[1]=e):e=a[1];let i=e;return(0,eB.useSyncExternalStore)(i.subscribe,i.getSnapshot,rJ)}function r1(e){return rZ("(prefers-color-scheme: dark)",void 0===e?r2:e)}function r2(){return!1}function r3(e){return rZ("(prefers-reduced-motion: reduce)",void 0===e?r5:e)}function r5(){return!1}let r4=eP.styled.div.withConfig({displayName:"StyledCheckbox",componentId:"sc-1l5mt2l-0"})(function(){return eP.css`
    position: relative;
    display: inline-block;
  `}),r6=eP.styled.input.withConfig({displayName:"Input",componentId:"sc-1l5mt2l-1"})(function(e){let{color:t,input:r,radius:o}=T(e.theme),{focusRing:a}=r.checkbox;return eP.css`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    outline: none;
    opacity: 0;
    z-index: 1;
    padding: 0;
    margin: 0;

    & + span {
      position: relative;
      display: block;
      height: ${to(r.checkbox.size)};
      width: ${to(r.checkbox.size)};
      box-sizing: border-box;
      box-shadow: ${tD({color:t.input.default.enabled.border,width:r.border.width})};
      border-radius: ${to(o[2])};
      line-height: 1;
      background-color: ${t.input.default.enabled.bg};

      & > svg {
        display: block;
        position: absolute;
        opacity: 0;
        height: 100%;
        width: 100%;

        & > path {
          vector-effect: non-scaling-stroke;
          stroke-width: 1.5px !important;
        }
      }
    }

    &:checked + span {
      background: ${t.input.default.enabled.fg};
      box-shadow: ${tD({color:t.input.default.enabled.fg,width:r.border.width})};
      color: ${t.input.default.enabled.bg};
    }

    /* focus */
    &:not(:disabled):focus:focus-visible + span {
      box-shadow: ${tV({focusRing:a})};
    }

    /* focus when checked - uses a different offset */
    &:not(:disabled):focus:focus-visible&:checked + span {
      box-shadow: ${tV({focusRing:{width:1,offset:1}})};
    }

    &[data-error] + span {
      background-color: ${t.input.invalid.enabled.border};
      box-shadow: ${tD({width:r.border.width,color:t.input.invalid.enabled.muted.bg})};
      color: ${t.input.default.disabled.fg};
    }
    &[data-error]&:checked + span {
      background-color: ${t.input.invalid.enabled.muted.bg};
      color: ${t.input.default.enabled.bg};
    }
    &[data-error]&:checked&:not(:disabled):focus:focus-visible + span {
      box-shadow: ${tV({border:{width:r.border.width,color:t.input.invalid.readOnly.muted.bg},focusRing:{width:1,offset:1}})};
    }

    &:disabled + span {
      background-color: ${t.input.default.disabled.bg};
      box-shadow: ${tD({width:r.border.width,color:t.input.default.disabled.border})};
      color: ${t.input.default.disabled.fg};
    }
    &:disabled&:checked + span {
      background-color: ${t.input.default.disabled.muted.bg};
    }

    &[data-read-only] + span {
      background-color: ${t.input.default.readOnly.bg};
      box-shadow: ${tD({width:r.border.width,color:t.input.default.readOnly.border})};
      color: ${t.input.default.readOnly.fg};
    }

    &[data-read-only]&:checked + span {
      background-color: ${t.input.default.readOnly.muted.bg};
    }

    &:checked + span > svg:first-child {
      opacity: 1;
    }
    &:indeterminate + span > svg:last-child {
      opacity: 1;
    }
  `}),r7=(0,eB.forwardRef)(function(e,t){let r,o,a,n,i,d,l,s,c,u,f,b,g,p,h=(0,eA.c)(25);h[0]!==e?({checked:r,className:o,disabled:n,indeterminate:i,customValidity:a,readOnly:d,style:s,...l}=e,h[0]=e,h[1]=r,h[2]=o,h[3]=a,h[4]=n,h[5]=i,h[6]=d,h[7]=l,h[8]=s):(r=h[1],o=h[2],a=h[3],n=h[4],i=h[5],d=h[6],l=h[7],s=h[8]);let m=(0,eB.useRef)(null);h[9]===Symbol.for("react.memo_cache_sentinel")?(c=()=>m.current,h[9]=c):c=h[9],(0,eB.useImperativeHandle)(t,c),h[10]!==i?(u=()=>{m.current&&(m.current.indeterminate=i||!1)},f=[i],h[10]=i,h[11]=u,h[12]=f):(u=h[11],f=h[12]),(0,eB.useEffect)(u,f),rU(m,a);let y=!n&&d?"":void 0,v=a?"":void 0,w=n||d;return h[13]!==r||h[14]!==d||h[15]!==l||h[16]!==y||h[17]!==v||h[18]!==w?(b=(0,eF.jsx)(r6,{"data-read-only":y,"data-error":v,...l,checked:r,disabled:w,type:"checkbox",readOnly:d,ref:m}),h[13]=r,h[14]=d,h[15]=l,h[16]=y,h[17]=v,h[18]=w,h[19]=b):b=h[19],h[20]===Symbol.for("react.memo_cache_sentinel")?(g=(0,eF.jsxs)("span",{children:[(0,eF.jsx)(eV.CheckmarkIcon,{}),(0,eF.jsx)(eV.RemoveIcon,{})]}),h[20]=g):g=h[20],h[21]!==o||h[22]!==s||h[23]!==b?(p=(0,eF.jsxs)(r4,{className:o,"data-ui":"Checkbox",style:s,children:[b,g]}),h[21]=o,h[22]=s,h[23]=b,h[24]=p):p=h[24],p});function r8({theme:e}){let{color:{syntax:t}}=T(e);return{"&.atrule":{color:t.atrule},"&.attr-name":{color:t.attrName},"&.attr-value":{color:t.attrValue},"&.attribute":{color:t.attribute},"&.boolean":{color:t.boolean},"&.builtin":{color:t.builtin},"&.cdata":{color:t.cdata},"&.char":{color:t.char},"&.class":{color:t.class},"&.class-name":{color:t.className},"&.comment":{color:t.comment},"&.constant":{color:t.constant},"&.deleted":{color:t.deleted},"&.doctype":{color:t.doctype},"&.entity":{color:t.entity},"&.function":{color:t.function},"&.hexcode":{color:t.hexcode},"&.id":{color:t.id},"&.important":{color:t.important},"&.inserted":{color:t.inserted},"&.keyword":{color:t.keyword},"&.number":{color:t.number},"&.operator":{color:t.operator},"&.prolog":{color:t.prolog},"&.property":{color:t.property},"&.pseudo-class":{color:t.pseudoClass},"&.pseudo-element":{color:t.pseudoElement},"&.punctuation":{color:t.punctuation},"&.regex":{color:t.regex},"&.selector":{color:t.selector},"&.string":{color:t.string},"&.symbol":{color:t.symbol},"&.tag":{color:t.tag},"&.unit":{color:t.unit},"&.url":{color:t.url},"&.variable":{color:t.variable}}}r7.displayName="ForwardRef(Checkbox)";let r9=(0,eB.lazy)(()=>e.A(709319)),oe=eP.styled.pre.withConfig({displayName:"StyledCode",componentId:"sc-4dymyn-0"})(function(){return eP.css`
    color: var(--card-code-fg-color);

    & code {
      font-family: inherit;

      &.refractor .token {
        ${r8}
      }
    }

    & a {
      color: inherit;
      text-decoration: underline;
      border-radius: 1px;
    }

    & svg {
      /* Certain popular CSS libraries changes the defaults for SVG display */
      /* Make sure SVGs are rendered as inline elements */
      display: inline;
    }

    & [data-sanity-icon] {
      vertical-align: baseline;
    }
  `},tl),ot=(0,eB.forwardRef)(function(e,t){let r,o,a,n,i,d,l,s,c,u,f=(0,eA.c)(22);f[0]!==e?({children:r,language:o,size:n,weight:i,...a}=e,f[0]=e,f[1]=r,f[2]=o,f[3]=a,f[4]=n,f[5]=i):(r=f[1],o=f[2],a=f[3],n=f[4],i=f[5]);let b=void 0===n?2:n;return f[6]!==b?(d=tn(b),f[6]=b,f[7]=d):d=f[7],f[8]!==r?(l=(0,eF.jsx)("code",{children:r}),f[8]=r,f[9]=l):l=f[9],f[10]!==r||f[11]!==o?(s=(0,eF.jsx)(r9,{language:o,value:r}),f[10]=r,f[11]=o,f[12]=s):s=f[12],f[13]!==l||f[14]!==s?(c=(0,eF.jsx)(eB.Suspense,{fallback:l,children:s}),f[13]=l,f[14]=s,f[15]=c):c=f[15],f[16]!==t||f[17]!==a||f[18]!==d||f[19]!==c||f[20]!==i?(u=(0,eF.jsx)(oe,{"data-ui":"Code",...a,$size:d,$weight:i,ref:t,children:c}),f[16]=t,f[17]=a,f[18]=d,f[19]=c,f[20]=i,f[21]=u):u=f[21],u});ot.displayName="ForwardRef(Code)";let or={width:"100%",margin:"0 auto"},oo=(0,eP.styled)(rj).withConfig({displayName:"StyledContainer",componentId:"sc-wyroop-0"})(function(){return or},function(e){let{container:t,media:r}=T(e.theme);return ta(r,e.$width,e=>({maxWidth:"auto"===e?"none":to(t[e])}))}),oa=(0,eB.forwardRef)(function(e,t){let r,o,a,n,i,d=(0,eA.c)(11);d[0]!==e?({as:r,width:a,...o}=e,d[0]=e,d[1]=r,d[2]=o,d[3]=a):(r=d[1],o=d[2],a=d[3]);let l=void 0===a?2:a;return d[4]!==l?(n=tn(l),d[4]=l,d[5]=n):n=d[5],d[6]!==r||d[7]!==t||d[8]!==o||d[9]!==n?(i=(0,eF.jsx)(oo,{"data-ui":"Container",...o,$width:n,forwardedAs:r,ref:t}),d[6]=r,d[7]=t,d[8]=o,d[9]=n,d[10]=i):i=d[10],i});oa.displayName="ForwardRef(Container)";let on=(0,eP.styled)(rj).withConfig({displayName:"StyledGrid",componentId:"sc-v8t8oz-0"})(function(){return[tZ,t1,t2,t3,t5,t4,t6,t7,t8]}),oi=(0,eB.forwardRef)(function(e,t){let r,o,a,n,i,d,l,s,c,u,f,b,g,p,h,m,y,v,w,k,x=(0,eA.c)(42);x[0]!==e?({as:r,autoRows:n,autoCols:o,autoFlow:a,columns:d,gap:l,gapX:s,gapY:c,rows:f,children:i,...u}=e,x[0]=e,x[1]=r,x[2]=o,x[3]=a,x[4]=n,x[5]=i,x[6]=d,x[7]=l,x[8]=s,x[9]=c,x[10]=u,x[11]=f):(r=x[1],o=x[2],a=x[3],n=x[4],i=x[5],d=x[6],l=x[7],s=x[8],c=x[9],u=x[10],f=x[11]);let $="string"==typeof r?r:void 0;return x[12]!==n?(b=tn(n),x[12]=n,x[13]=b):b=x[13],x[14]!==o?(g=tn(o),x[14]=o,x[15]=g):g=x[15],x[16]!==a?(p=tn(a),x[16]=a,x[17]=p):p=x[17],x[18]!==d?(h=tn(d),x[18]=d,x[19]=h):h=x[19],x[20]!==l?(m=tn(l),x[20]=l,x[21]=m):m=x[21],x[22]!==s?(y=tn(s),x[22]=s,x[23]=y):y=x[23],x[24]!==c?(v=tn(c),x[24]=c,x[25]=v):v=x[25],x[26]!==f?(w=tn(f),x[26]=f,x[27]=w):w=x[27],x[28]!==r||x[29]!==i||x[30]!==t||x[31]!==u||x[32]!==$||x[33]!==b||x[34]!==g||x[35]!==p||x[36]!==h||x[37]!==m||x[38]!==y||x[39]!==v||x[40]!==w?(k=(0,eF.jsx)(on,{"data-as":$,"data-ui":"Grid",...u,$autoRows:b,$autoCols:g,$autoFlow:p,$columns:h,$gap:m,$gapX:y,$gapY:v,$rows:w,forwardedAs:r,ref:t,children:i}),x[28]=r,x[29]=i,x[30]=t,x[31]=u,x[32]=$,x[33]=b,x[34]=g,x[35]=p,x[36]=h,x[37]=m,x[38]=y,x[39]=v,x[40]=w,x[41]=k):k=x[41],k});oi.displayName="ForwardRef(Grid)";let od=eP.styled.div.withConfig({displayName:"StyledHeading",componentId:"sc-137lwim-0"})(function(e){let{$accent:t,$muted:r}=e,{font:o}=T(e.theme);return eP.css`
    ${t&&eP.css`
      color: var(--card-accent-fg-color);
    `}

    ${r&&eP.css`
      color: var(--card-muted-fg-color);
    `}

    & code {
      font-family: ${o.code.family};
      border-radius: 1px;
    }

    & a {
      text-decoration: none;
      border-radius: 1px;
      color: var(--card-link-color);
      outline: none;

      @media (hover: hover) {
        &:hover {
          text-decoration: underline;
        }
      }

      &:focus {
        box-shadow:
          0 0 0 1px var(--card-bg-color),
          0 0 0 3px var(--card-focus-ring-color);
      }

      &:focus:not(:focus-visible) {
        box-shadow: none;
      }
    }

    & strong {
      font-weight: ${o.heading.weights.bold};
    }

    & svg {
      /* Certain popular CSS libraries changes the defaults for SVG display */
      /* Make sure SVGs are rendered as inline elements */
      display: inline;
    }

    & [data-sanity-icon] {
      vertical-align: baseline;
    }
  `},tu,ts),ol=(0,eB.forwardRef)(function(e,t){let r,o,a,n,i,d,l,s,c,u,f,b,g=(0,eA.c)(26);g[0]!==e?({accent:n,align:r,children:o,muted:i,size:d,textOverflow:l,weight:s,...a}=e,g[0]=e,g[1]=r,g[2]=o,g[3]=a,g[4]=n,g[5]=i,g[6]=d,g[7]=l,g[8]=s):(r=g[1],o=g[2],a=g[3],n=g[4],i=g[5],d=g[6],l=g[7],s=g[8]);let p=void 0!==n&&n,h=void 0!==i&&i,m=void 0===d?2:d,y=o;if("ellipsis"===l){let e;g[9]!==y?(e=(0,eF.jsx)(rs,{children:y}),g[9]=y,g[10]=e):e=g[10],y=e}return g[11]!==r?(c=tn(r),g[11]=r,g[12]=c):c=g[12],g[13]!==m?(u=tn(m),g[13]=m,g[14]=u):u=g[14],g[15]!==y?(f=(0,eF.jsx)("span",{children:y}),g[15]=y,g[16]=f):f=g[16],g[17]!==p||g[18]!==h||g[19]!==t||g[20]!==a||g[21]!==c||g[22]!==u||g[23]!==f||g[24]!==s?(b=(0,eF.jsx)(od,{"data-ui":"Heading",...a,$accent:p,$align:c,$muted:h,$size:u,$weight:s,ref:t,children:f}),g[17]=p,g[18]=h,g[19]=t,g[20]=a,g[21]=c,g[22]=u,g[23]=f,g[24]=s,g[25]=b):b=g[25],b});ol.displayName="ForwardRef(Heading)";let os=(0,eP.styled)(rj).withConfig({displayName:"StyledInline",componentId:"sc-1pkiy6j-0"})(function(){return{lineHeight:"0","&&:not([hidden])":{display:"block"},"& > div":{display:"inline-block",verticalAlign:"middle"}}},function(e){let{media:t,space:r}=T(e.theme);return ta(t,e.$space,e=>{let t=to(.5===e?r[1]/2:r[e]);return{margin:`-${t} 0 0 -${t}`,"& > div":{padding:`${t} 0 0 ${t}`}}})}),oc=(0,eB.forwardRef)(function(e,t){let r,o,a,n,i,d,l,s=(0,eA.c)(15);s[0]!==e?({as:r,children:o,space:n,...a}=e,s[0]=e,s[1]=r,s[2]=o,s[3]=a,s[4]=n):(r=s[1],o=s[2],a=s[3],n=s[4]),s[5]!==o?(i=eB.Children.map(o,ou),s[5]=o,s[6]=i):i=s[6];let c=i;return s[7]!==n?(d=tn(n),s[7]=n,s[8]=d):d=s[8],s[9]!==r||s[10]!==c||s[11]!==a||s[12]!==d||s[13]!==t?(l=(0,eF.jsx)(os,{"data-ui":"Inline",...a,$space:d,forwardedAs:r,ref:t,children:c}),s[9]=r,s[10]=c,s[11]=a,s[12]=d,s[13]=t,s[14]=l):l=s[14],l});function ou(e){return e&&(0,eF.jsx)("div",{children:e})}oc.displayName="ForwardRef(Inline)";let of=eP.styled.kbd.withConfig({displayName:"StyledKBD",componentId:"sc-1w7yd8w-0"})(rd,function(){return eP.css`
    --card-bg-color: var(--card-kbd-bg-color);
    --card-border-color: var(--card-kbd-border-color);
    --card-fg-color: var(--card-kbd-fg-color);

    box-shadow: inset 0 0 0 1px var(--card-border-color);
    background: var(--card-bg-color);
    font: inherit;

    vertical-align: top;

    &:not([hidden]) {
      display: inline-block;
    }
  `}),ob=(0,eB.forwardRef)(function(e,t){let r,o,a,n,i,d,l,s,c,u=(0,eA.c)(19);u[0]!==e?({children:r,fontSize:a,padding:n,radius:i,...o}=e,u[0]=e,u[1]=r,u[2]=o,u[3]=a,u[4]=n,u[5]=i):(r=u[1],o=u[2],a=u[3],n=u[4],i=u[5]);let f=void 0===a?0:a,b=void 0===n?1:n,g=void 0===i?2:i;return u[6]!==g?(d=tn(g),u[6]=g,u[7]=d):d=u[7],u[8]!==r||u[9]!==f?(l=(0,eF.jsx)(rE,{as:"span",size:f,weight:"semibold",children:r}),u[8]=r,u[9]=f,u[10]=l):l=u[10],u[11]!==b||u[12]!==l?(s=(0,eF.jsx)(rj,{as:"span",padding:b,children:l}),u[11]=b,u[12]=l,u[13]=s):s=u[13],u[14]!==t||u[15]!==o||u[16]!==d||u[17]!==s?(c=(0,eF.jsx)(of,{"data-ui":"KBD",...o,$radius:d,ref:t,children:s}),u[14]=t,u[15]=o,u[16]=d,u[17]=s,u[18]=c):c=u[18],c});ob.displayName="ForwardRef(KBD)";let og={name:"@sanity/ui/origin",fn({middlewareData:e,placement:t,rects:r}){let[o]=t.split("-"),a=r.floating.width,n=r.floating.height,i=e.shift?.x||0,d=e.shift?.y||0;if(a<=0||n<=0)return{};let{originX:l,originY:s}=["bottom","top"].includes(o)?{originX:op(.5-i/a,0,1),originY:+("bottom"!==o)}:{originX:+("left"===o),originY:op(.5-d/n,0,1)};return{data:{originX:l,originY:s}}}};function op(e,t,r){return Math.min(Math.max(e,t),r)}function oh(e,t,r){let o=t.x-e.x,a=t.y-e.y;return om(e,t,Math.min(1,r/Math.sqrt(o*o+a*a)))}function om(e,t,r){return{x:e.x+(t.x-e.x)*r,y:e.y+(t.y-e.y)*r}}let oy=eP.styled.div.withConfig({displayName:"StyledArrow",componentId:"sc-12vzy6c-0"})(({$w:e})=>eP.css`
    position: absolute;
    width: ${e}px;
    height: ${e}px;

    :empty + & {
      display: none;
    }

    & > svg {
      display: block;
      line-height: 0;
      transform-origin: ${e/2}px ${e/2}px;
    }

    [data-placement^='top'] > & {
      bottom: -${e}px;

      & > svg {
        transform: rotate(0);
      }
    }

    [data-placement^='right'] > & {
      left: -${e}px;

      & > svg {
        transform: rotate(90deg);
      }
    }

    [data-placement^='left'] > & {
      right: -${e}px;

      & > svg {
        transform: rotate(-90deg);
      }
    }

    [data-placement^='bottom'] > & {
      top: -${e}px;

      & > svg {
        transform: rotate(180deg);
      }
    }
  `),ov=eP.styled.path.withConfig({displayName:"StrokePath",componentId:"sc-12vzy6c-1"})`stroke:var(--card-shadow-outline-color);`,ow=eP.styled.path.withConfig({displayName:"ShapePath",componentId:"sc-12vzy6c-2"})`fill:var(--card-bg-color);`,ok=(0,eB.forwardRef)(function(e,t){let r,o,a,n,i,d,l,s,c,u,f=(0,eA.c)(29);f[0]!==e?({width:n,height:r,radius:a,...o}=e,f[0]=e,f[1]=r,f[2]=o,f[3]=a,f[4]=n):(r=f[1],o=f[2],a=f[3],n=f[4]);let b=void 0===a?0:a,{card:g}=tw(),p=g.shadow.outline,h=n/2;f[5]!==h||f[6]!==r||f[7]!==b||f[8]!==n?(i=(function(e){let t=e.length,r=[];for(let o=0;o<t;o+=1){let t=e[o],a=e[o-1],n=e[o+1];if(a&&t.radius){let e=oh(t,a,t.radius),o=oh(t,n,t.radius),i=om(e,t,.5),d=om(t,o,.5);r.push({type:"point",...e}),r.push({type:"curve",curveEnd:o,startControl:i,endControl:d})}else r.push({type:"point",...t})}return r})([{x:0,y:0},{x:b,y:0,radius:b},{x:h,y:r-1,radius:b},{x:n-b,y:0,radius:b},{x:n,y:0}]).map((e,t)=>"point"===e.type?`${0===t?"M":"L"} ${e.x} ${e.y}`:"curve"===e.type?`C ${e.startControl.x} ${e.startControl.y} ${e.endControl.x} ${e.endControl.y} ${e.curveEnd.x} ${e.curveEnd.y}`:"").join(" "),f[5]=h,f[6]=r,f[7]=b,f[8]=n,f[9]=i):i=f[9];let m=i,y=`${m}`,v=`${m} M ${n} -1 M 0 -1 Z`,w=`0 0 ${n} ${n}`;f[10]!==p||f[11]!==n?(d=(0,eF.jsx)("mask",{id:"stroke-mask",children:(0,eF.jsx)("rect",{x:0,y:p,width:n,height:n,fill:"white"})}),f[10]=p,f[11]=n,f[12]=d):d=f[12];let k=2*p;return f[13]!==y||f[14]!==k?(l=(0,eF.jsx)(ov,{d:y,mask:"url(#stroke-mask)",strokeWidth:k}),f[13]=y,f[14]=k,f[15]=l):l=f[15],f[16]!==v?(s=(0,eF.jsx)(ow,{d:v}),f[16]=v,f[17]=s):s=f[17],f[18]!==w||f[19]!==d||f[20]!==l||f[21]!==s||f[22]!==n?(c=(0,eF.jsxs)("svg",{width:n,height:n,viewBox:w,children:[d,l,s]}),f[18]=w,f[19]=d,f[20]=l,f[21]=s,f[22]=n,f[23]=c):c=f[23],f[24]!==t||f[25]!==o||f[26]!==c||f[27]!==n?(u=(0,eF.jsx)(oy,{...o,$w:n,ref:t,children:c}),f[24]=t,f[25]=o,f[26]=c,f[27]=n,f[28]=u):u=f[28],u});ok.displayName="ForwardRef(Arrow)";let ox=tg("@sanity/ui/context/boundaryElement",null);function o$(e){let t,r,o=(0,eA.c)(5),{children:a,element:n}=e;o[0]!==n?(t={version:0,element:n},o[0]=n,o[1]=t):t=o[1];let i=t;return o[2]!==a||o[3]!==i?(r=(0,eF.jsx)(ox.Provider,{value:i,children:a}),o[2]=a,o[3]=i,o[4]=r):r=o[4],r}function oS(e){return!!(e&&"object"==typeof e&&!Array.isArray(e))}o$.displayName="BoundaryElementProvider";let oR={version:0,element:null};function o_(){let e=(0,eB.useContext)(ox);if(e&&(!oS(e)||0!==e.version))throw Error("useBoundaryElement(): the context value is not compatible");return e||oR}function oz({children:e,condition:t,wrapper:r}){return t?r(e):e}oz.displayName="ConditionalWrapper";let oj=(0,eB.forwardRef)(function(e,t){let r,o,a,n,i,d,l,s,c=(0,eA.c)(18),u=tw();c[0]!==e?({children:o,media:r,...a}=e,c[0]=e,c[1]=r,c[2]=o,c[3]=a):(r=c[1],o=c[2],a=c[3]);let f=r??u.media,[b,g]=(0,eB.useState)(null),p=rK(b)?.border.width??window.innerWidth;if(c[4]!==f||c[5]!==p){let e=function(e,t){let r=[];for(let o=0;o<e.length;o+=1)e[o]>t&&r.push(o);return r}(f,p);n=e.length?e.join(" "):void 0,c[4]=f,c[5]=p,c[6]=n}else n=c[6];let h=n;if(c[7]!==f||c[8]!==p){let e=function(e,t){let r=[];for(let o=0;o<e.length;o+=1)e[o]<=t&&r.push(o);return r}(f,p);i=e.length?e.join(" "):void 0,c[7]=f,c[8]=p,c[9]=i}else i=c[9];let m=i;return c[10]!==b?(d=()=>b,l=[b],c[10]=b,c[11]=d,c[12]=l):(d=c[11],l=c[12]),(0,eB.useImperativeHandle)(t,d,l),c[13]!==o||c[14]!==h||c[15]!==m||c[16]!==a?(s=(0,eF.jsx)("div",{"data-ui":"ElementQuery",...a,"data-eq-max":h,"data-eq-min":m,ref:g,children:o}),c[13]=o,c[14]=h,c[15]=m,c[16]=a,c[17]=s):s=c[17],s});function oC(e){if(!oS(e)||0!==e.version)throw Error("the context value is not compatible");if(!e)throw Error("components using `useLayer()` should be wrapped in a <LayerProvider>.");if(0===e.version)return e;throw Error("could not get layer context")}oj.displayName="ForwardRef(ElementQuery)";let oE=tg("@sanity/ui/context/layer",null);function oI(e){let t,r,o,a,n,i,d,l,s=(0,eA.c)(21),{children:c,zOffset:u}=e,f=void 0===u?0:u,b=(0,eB.useContext)(oE);s[0]!==b?(t=b&&oC(b),s[0]=b,s[1]=t):t=s[1];let g=t,p=g?.registerChild,h=(g?.level??0)+1;s[2]!==f?(r=tn(f),s[2]=f,s[3]=r):r=s[3];let m=r,y=m.length-1,v=Math.min(r0(),y),w=g?g.zIndex+m[v]:m[v];s[4]===Symbol.for("react.memo_cache_sentinel")?(o={},s[4]=o):o=s[4];let[,k]=(0,eB.useState)(o),[x,$]=(0,eB.useState)(0),S=0===x;s[5]!==p||s[6]!==k?(a=e=>{let t=p?.(e);return void 0!==e?k(t=>{let r=t[e]??0,o={...t,[e]:r+1};return $(Object.keys(o).length),o}):$(oH),()=>{void 0!==e?k(t=>{let r={...t};return 1===r[e]?(delete r[e],$(Object.keys(r).length)):r[e]=r[e]-1,r}):$(oN),t?.()}},s[5]=p,s[6]=k,s[7]=a):a=s[7];let R=a;s[8]!==h||s[9]!==p?(n=()=>p?.(h),i=[h,p],s[8]=h,s[9]=p,s[10]=n,s[11]=i):(n=s[10],i=s[11]),(0,eB.useEffect)(n,i),s[12]!==S||s[13]!==h||s[14]!==R||s[15]!==x||s[16]!==w?(d={version:0,isTopLayer:S,level:h,registerChild:R,size:x,zIndex:w},s[12]=S,s[13]=h,s[14]=R,s[15]=x,s[16]=w,s[17]=d):d=s[17];let _=d;return s[18]!==c||s[19]!==_?(l=(0,eF.jsx)(oE.Provider,{value:_,children:c}),s[18]=c,s[19]=_,s[20]=l):l=s[20],l}function oN(e){return e-1}function oH(e){return e+1}function oT(){let e=(0,eA.c)(2),t=(0,eB.useContext)(oE);if(!t)throw Error("useLayer(): missing context value");try{let r;return e[0]!==t?(r=oC(t),e[0]=t,e[1]=r):r=e[1],r}catch(e){throw e instanceof Error?Error(`useLayer(): ${e.message}`):Error(`useLayer(): ${e}`)}}oI.displayName="LayerProvider";let oM=eP.styled.div.withConfig({displayName:"StyledLayer",componentId:"sc-16kojrv-0"})({position:"relative"}),oO=(0,eB.forwardRef)(function(e,t){let r,o,a,n,i,d,l,s,c,u,f,b=(0,eA.c)(22);b[0]!==e?({children:r,onActivate:o,onFocus:a,style:i,...n}=e,b[0]=e,b[1]=r,b[2]=o,b[3]=a,b[4]=n,b[5]=i):(r=b[1],o=b[2],a=b[3],n=b[4],i=b[5]);let g=void 0===i?eJ:i,{zIndex:p,isTopLayer:h}=oT(),m=(0,eB.useRef)(null),y=(0,eB.useRef)(null),v=(0,eB.useRef)(h);b[6]===Symbol.for("react.memo_cache_sentinel")?(d=()=>y.current,b[6]=d):d=b[6],(0,eB.useImperativeHandle)(t,d),b[7]!==h||b[8]!==o?(l=()=>{v.current!==h&&h&&o?.({activeElement:m.current}),v.current=h},s=[h,o],b[7]=h,b[8]=o,b[9]=l,b[10]=s):(l=b[9],s=b[10]),(0,eB.useEffect)(l,s),b[11]!==h||b[12]!==a?(c=e=>{a?.(e);let t=y.current,r=document.activeElement;!h||!t||!r||e5(r)&&te(t,r)&&(m.current=r)},b[11]=h,b[12]=a,b[13]=c):c=b[13];let w=c;return b[14]!==g||b[15]!==p?(u={...g,zIndex:p},b[14]=g,b[15]=p,b[16]=u):u=b[16],b[17]!==r||b[18]!==w||b[19]!==n||b[20]!==u?(f=(0,eF.jsx)(oM,{...n,"data-ui":"Layer",onFocus:w,ref:y,style:u,children:r}),b[17]=r,b[18]=w,b[19]=n,b[20]=u,b[21]=f):f=b[21],f}),oL=(0,eB.forwardRef)(function(e,t){let r,o,a,n,i,d=(0,eA.c)(11);d[0]!==e?({children:r,zOffset:a,...o}=e,d[0]=e,d[1]=r,d[2]=o,d[3]=a):(r=d[1],o=d[2],a=d[3]);let l=void 0===a?1:a;return d[4]!==r||d[5]!==t||d[6]!==o?(n=(0,eF.jsx)(oO,{...o,ref:t,children:r}),d[4]=r,d[5]=t,d[6]=o,d[7]=n):n=d[7],d[8]!==n||d[9]!==l?(i=(0,eF.jsx)(oI,{zOffset:l,children:n}),d[8]=n,d[9]=l,d[10]=i):i=d[10],i});oL.displayName="ForwardRef(Layer)";let oF="@sanity/ui/context/portal",oA=Symbol.for(`${oF}/element`);tb[oA]=null;let oB=tg(oF,{version:0,boundaryElement:null,get element(){return typeof document>"u"?null:(tb[oA]||(tb[oA]=document.createElement("div"),tb[oA].setAttribute("data-portal",""),document.body.appendChild(tb[oA])),tb[oA])}});function oP(){let e=(0,eB.useContext)(oB);if(!e)throw Error("usePortal(): missing context value");if(!oS(e)||0!==e.version)throw Error("usePortal(): the context value is not compatible");return e}function oD(e){let t,r=(0,eA.c)(3),{children:o,__unstable_name:a}=e,n=oP(),i=(a?n.elements&&n.elements[a]:n.element)||n.elements?.default;return i?(r[0]!==o||r[1]!==i?(t=(0,eq.createPortal)(o,i),r[0]=o,r[1]=i,r[2]=t):t=r[2],t):null}function oV(e){let t,r,o=(0,eA.c)(7),{boundaryElement:a,children:n,element:i,__unstable_elements:d}=e,l=(0,eB.useSyncExternalStore)(oY,oG,oW),s=a||null,c=i||l;o[0]!==d||o[1]!==s||o[2]!==c?(t={version:0,boundaryElement:s,element:c,elements:d},o[0]=d,o[1]=s,o[2]=c,o[3]=t):t=o[3];let u=t;return o[4]!==n||o[5]!==u?(r=(0,eF.jsx)(oB.Provider,{value:u,children:n}),o[4]=n,o[5]=u,o[6]=r):r=o[6],r}function oW(){return null}function oG(){return document.body}oD.displayName="Portal",oV.displayName="PortalProvider";let oY=()=>()=>{},oU=eP.styled.div.withConfig({displayName:"StyledSrOnly",componentId:"sc-mubr0c-0"})`display:block;width:0;height:0;position:absolute;overflow:hidden;overflow:clip;`,oX=(0,eB.forwardRef)(function(e,t){let r,o=(0,eA.c)(4),{as:a,children:n}=e;return o[0]!==a||o[1]!==n||o[2]!==t?(r=(0,eF.jsx)(oU,{"aria-hidden":!0,as:a,"data-ui":"SrOnly",ref:t,children:n}),o[0]=a,o[1]=n,o[2]=t,o[3]=r):r=o[3],r});oX.displayName="ForwardRef(SrOnly)";let oq=eP.styled.div.withConfig({displayName:"StyledVirtualList",componentId:"sc-dlqsj4-0"})`position:relative;`,oK=eP.styled.div.withConfig({displayName:"ItemWrapper",componentId:"sc-dlqsj4-1"})`position:absolute;left:0;right:0;`,oQ=(0,eB.forwardRef)(function(e,t){let r,o,a,n,i,d,l,s,c,u,f,b,g,p,h,m,y,v,w,k=(0,eA.c)(44);k[0]!==e?({as:i,gap:d,getItemKey:r,items:l,onChange:o,renderItem:a,...n}=e,k[0]=e,k[1]=r,k[2]=o,k[3]=a,k[4]=n,k[5]=i,k[6]=d,k[7]=l):(r=k[1],o=k[2],a=k[3],n=k[4],i=k[5],d=k[6],l=k[7]);let x=void 0===i?"div":i,$=void 0===d?0:d;k[8]!==l?(s=void 0===l?[]:l,k[8]=l,k[9]=s):s=k[9];let S=s,{space:R}=tw(),_=(0,eB.useRef)(null),z=(0,eB.useRef)(null),[j,C]=(0,eB.useState)(0),[E,I]=(0,eB.useState)(0),[N,H]=(0,eB.useState)(-1);k[10]===Symbol.for("react.memo_cache_sentinel")?(c=()=>_.current,k[10]=c):c=k[10],(0,eB.useImperativeHandle)(t,c),k[11]===Symbol.for("react.memo_cache_sentinel")?(u=()=>{if(!z.current)return;let e=z.current.firstChild;e instanceof HTMLElement&&H(e.offsetHeight)},k[11]=u):u=k[11],k[12]!==a?(f=[a],k[12]=a,k[13]=f):f=k[13],(0,eB.useEffect)(u,f),k[14]===Symbol.for("react.memo_cache_sentinel")?(b=()=>{if(!_.current)return;let e=function(e){let t=e;for(;t&&!tt(t);)t=t.parentNode;return t}(_.current.parentNode);if(e){if(!(e instanceof HTMLElement))return;let t=()=>{C(e.scrollTop)};e.addEventListener("scroll",t,{passive:!0});let r=new rX(e=>{I(e[0].contentRect.height)});return r.observe(e),t(),()=>{e.removeEventListener("scroll",t),r.unobserve(e),r.disconnect()}}let t=()=>{C(window.scrollY)},r=()=>{I(window.innerHeight)};return window.addEventListener("scroll",t,{passive:!0}),window.addEventListener("resize",r),I(window.innerHeight),t(),()=>{window.removeEventListener("scroll",t),window.removeEventListener("resize",r)}},g=[],k[14]=b,k[15]=g):(b=k[14],g=k[15]),(0,eB.useEffect)(b,g);let T=S.length,M=N?T*(N+R[$])-R[$]:0,O=M?Math.max(Math.floor(j/M*T)-2,0):0,L=M?Math.ceil((j+E)/M*T)+1:0;k[16]!==O||k[17]!==$||k[18]!==N||k[19]!==o||k[20]!==E||k[21]!==j||k[22]!==R||k[23]!==L?(h=()=>{o&&o({fromIndex:O,gap:R[$],itemHeight:N,scrollHeight:E,scrollTop:j,toIndex:L})},p=[O,$,N,o,E,j,R,L],k[16]=O,k[17]=$,k[18]=N,k[19]=o,k[20]=E,k[21]=j,k[22]=R,k[23]=L,k[24]=p,k[25]=h):(p=k[24],h=k[25]),(0,eB.useEffect)(h,p),k[26]!==O||k[27]!==$||k[28]!==r||k[29]!==N||k[30]!==S||k[31]!==a||k[32]!==R||k[33]!==L?(m={fromIndex:O,gap:$,itemHeight:N,space:R,toIndex:L,getItemKey:r,items:S,renderItem:a},k[26]=O,k[27]=$,k[28]=r,k[29]=N,k[30]=S,k[31]=a,k[32]=R,k[33]=L,k[34]=m):m=k[34];let F=function(e){let t,r=(0,eA.c)(21),{fromIndex:o,gap:a,getItemKey:n,itemHeight:i,items:d,renderItem:l,space:s,toIndex:c}=e;if(!l||0===d.length)return null;if(-1===i){let e,t;return r[0]!==d[0]||r[1]!==l?(e=l(d[0]),r[0]=d[0],r[1]=l,r[2]=e):e=r[2],r[3]!==e?(t=[(0,eF.jsx)(oK,{children:e},0)],r[3]=e,r[4]=t):t=r[4],t}if(r[5]!==o||r[6]!==a||r[7]!==n||r[8]!==i||r[9]!==d||r[10]!==l||r[11]!==s||r[12]!==c){let e;r[14]!==o||r[15]!==a||r[16]!==n||r[17]!==i||r[18]!==l||r[19]!==s?(e=(e,t)=>{let r=o+t,d=l(e),c=n?n(e,r):r;return(0,eF.jsx)(oK,{style:{top:r*(i+s[a])},children:d},c)},r[14]=o,r[15]=a,r[16]=n,r[17]=i,r[18]=l,r[19]=s,r[20]=e):e=r[20],t=d.slice(o,c).map(e),r[5]=o,r[6]=a,r[7]=n,r[8]=i,r[9]=d,r[10]=l,r[11]=s,r[12]=c,r[13]=t}else t=r[13];return t}(m);return k[35]!==M?(y={height:M},k[35]=M,k[36]=y):y=k[36],k[37]!==F||k[38]!==y?(v=(0,eF.jsx)("div",{ref:z,style:y,children:F}),k[37]=F,k[38]=y,k[39]=v):v=k[39],k[40]!==x||k[41]!==n||k[42]!==v?(w=(0,eF.jsx)(oq,{as:x,"data-ui":"VirtualList",...n,ref:_,children:v}),k[40]=x,k[41]=n,k[42]=v,k[43]=w):w=k[43],w});function oZ(e){let t=Object.getOwnPropertyDescriptor(e.props,"ref")?.get,r=t&&"isReactWarning"in t&&t.isReactWarning;return r?e.ref:(r=(t=Object.getOwnPropertyDescriptor(e,"ref")?.get)&&"isReactWarning"in t&&t.isReactWarning)?e.props.ref:e.props.ref||e.ref}oQ.displayName="ForwardRef(VirtualList)";let oJ=[0,0,0,0],o0={top:["bottom","left","right"],"top-start":["bottom-start","left-start","right-start"],"top-end":["bottom-end","left-end","right-end"],bottom:["top","left","right"],"bottom-start":["top-start","left-start","right-start"],"bottom-end":["top-end","left-end","right-end"],left:["right","top","bottom"],"left-start":["right-start","top-start","bottom-start"],"left-end":["right-end","top-end","bottom-end"],right:["left","top","bottom"],"right-start":["left-start","top-start","bottom-start"],"right-end":["left-end","top-end","bottom-end"]},o1=(0,eP.styled)(eY.motion.create(rW)).withConfig({displayName:"MotionCard",componentId:"sc-ihg31s-0"})`&:not([hidden]){display:flex;}flex-direction:column;width:max-content;min-width:min-content;will-change:transform;`,o2=(0,eP.styled)(eY.motion.create(rT)).withConfig({displayName:"MotionFlex",componentId:"sc-ihg31s-1"})`will-change:opacity;`,o3=(0,eB.forwardRef)(function(e,t){let r,o,a,n,i,d,l,s,c,u,f,b,g,p,h,m,y,v,w,k,x,$,S,R,_,z,j,C,E,I,N,H=(0,eA.c)(66);H[0]!==e?({__unstable_margins:l,animate:r,arrow:o,arrowRef:a,arrowX:n,arrowY:i,children:d,padding:f,placement:b,originX:s,originY:c,overflow:u,radius:g,scheme:h,shadow:m,strategy:y,style:v,tone:w,width:k,x:x,y:$,...p}=e,H[0]=e,H[1]=r,H[2]=o,H[3]=a,H[4]=n,H[5]=i,H[6]=d,H[7]=l,H[8]=s,H[9]=c,H[10]=u,H[11]=f,H[12]=b,H[13]=g,H[14]=p,H[15]=h,H[16]=m,H[17]=y,H[18]=v,H[19]=w,H[20]=k,H[21]=x,H[22]=$):(r=H[1],o=H[2],a=H[3],n=H[4],i=H[5],d=H[6],l=H[7],s=H[8],c=H[9],u=H[10],f=H[11],b=H[12],g=H[13],p=H[14],h=H[15],m=H[16],y=H[17],v=H[18],w=H[19],k=H[20],x=H[21],$=H[22]);let{zIndex:T}=oT(),M=l||oJ,O=(x??0)+M[3],L=($??0)+M[0],F=r?"transform":void 0;H[23]!==s||H[24]!==c||H[25]!==y||H[26]!==v||H[27]!==F||H[28]!==k||H[29]!==O||H[30]!==L||H[31]!==T?(S={left:O,originX:s,originY:c,position:y,top:L,width:k,zIndex:T,willChange:F,...v},H[23]=s,H[24]=c,H[25]=y,H[26]=v,H[27]=F,H[28]=k,H[29]=O,H[30]=L,H[31]=T,H[32]=S):S=H[32];let A=S,B=null!==n?n:void 0,P=null!==i?i:void 0;H[33]!==B||H[34]!==P?(R={left:B,top:P,right:void 0,bottom:void 0},H[33]=B,H[34]=P,H[35]=R):R=H[35];let D=R,V=p;return H[36]!==r?(_=r?["hidden","initial"]:void 0,H[36]=r,H[37]=_):_=H[37],H[38]!==r?(z=r?["visible","scaleIn"]:void 0,H[38]=r,H[39]=z):z=H[39],H[40]!==r?(j=r?["hidden","scaleOut"]:void 0,H[40]=r,H[41]=j):j=H[41],H[42]!==d||H[43]!==f?(C=(0,eF.jsx)(rT,{direction:"column",flex:1,padding:f,children:d}),H[42]=d,H[43]=f,H[44]=C):C=H[44],H[45]!==u||H[46]!==C?(E=(0,eF.jsx)(o2,{"data-ui":"Popover__wrapper",direction:"column",flex:1,overflow:u,variants:e1,transition:e2,children:C}),H[45]=u,H[46]=C,H[47]=E):E=H[47],H[48]!==o||H[49]!==a||H[50]!==D?(I=o&&(0,eF.jsx)(ok,{ref:a,style:D,width:19,height:8,radius:2}),H[48]=o,H[49]=a,H[50]=D,H[51]=I):I=H[51],H[52]!==b||H[53]!==g||H[54]!==t||H[55]!==A||H[56]!==h||H[57]!==m||H[58]!==E||H[59]!==I||H[60]!==V||H[61]!==_||H[62]!==z||H[63]!==j||H[64]!==w?(N=(0,eF.jsxs)(o1,{"data-ui":"Popover",...V,"data-placement":b,radius:g,ref:t,scheme:h,shadow:m,sizing:"border",style:A,tone:w,variants:e0,transition:e2,initial:_,animate:z,exit:j,children:[E,I]}),H[52]=b,H[53]=g,H[54]=t,H[55]=A,H[56]=h,H[57]=m,H[58]=E,H[59]=I,H[60]=V,H[61]=_,H[62]=z,H[63]=j,H[64]=w,H[65]=N):N=H[65],N});o3.displayName="ForwardRef(PopoverCard)";let o5=()=>{let e,t=(0,eA.c)(2),{zIndex:r}=oT();return t[0]!==r?(e=(0,eF.jsx)("div",{style:{height:"100vh",inset:0,position:"fixed",width:"100vw",zIndex:r}}),t[0]=r,t[1]=e):e=t[1],e},o4=(0,eB.forwardRef)(function(e,t){let r,o,a,n,i,d,l,s,c,u,f,b,g,p,h,m,y,v,w,k,x,$,S,R,_,z,j,C,E,I,N,H,T,M,O,L,F,A,B,P,D,V,W,G,Y,U,X,q,K,Q,Z,J,ee,et,er,eo,ea,en=(0,eA.c)(126),{container:ei,layer:ed}=tw(),el=o_();if(en[0]!==e){let{__unstable_margins:t,animate:I,arrow:N,boundaryElement:H,children:T,constrainSize:M,content:O,disabled:L,fallbackPlacements:F,matchReferenceWidth:A,floatingBoundary:B,modal:P,onActivate:D,open:V,overflow:W,padding:G,placement:Y,placementStrategy:U,portal:X,preventOverflow:q,radius:K,referenceBoundary:Q,referenceElement:Z,scheme:J,shadow:ee,tone:et,width:er,zOffset:eo,updateRef:ea,...ei}=e;y=t,v=I,x=N,r=H,d=T,$=M,l=O,s=L,o=F,c=A,a=B,u=P,f=V,S=W,b=G,R=Y,_=U,g=X,z=q,j=K,n=Q,p=Z,m=J,C=ee,w=et,k=er,i=eo,E=ea,h=ei,en[0]=e,en[1]=r,en[2]=o,en[3]=a,en[4]=n,en[5]=i,en[6]=d,en[7]=l,en[8]=s,en[9]=c,en[10]=u,en[11]=f,en[12]=b,en[13]=g,en[14]=p,en[15]=h,en[16]=m,en[17]=y,en[18]=v,en[19]=w,en[20]=k,en[21]=x,en[22]=$,en[23]=S,en[24]=R,en[25]=_,en[26]=z,en[27]=j,en[28]=C,en[29]=E}else r=en[1],o=en[2],a=en[3],n=en[4],i=en[5],d=en[6],l=en[7],s=en[8],c=en[9],u=en[10],f=en[11],b=en[12],g=en[13],p=en[14],h=en[15],m=en[16],y=en[17],v=en[18],w=en[19],k=en[20],x=en[21],$=en[22],S=en[23],R=en[24],_=en[25],z=en[26],j=en[27],C=en[28],E=en[29];let es=void 0===y?oJ:y,ec=void 0!==v&&v,eu=void 0!==x&&x,ef=void 0!==$&&$,eb=void 0===S?"hidden":S,eg=void 0===R?"bottom":R,ep=void 0===_?"flip":_,eh=void 0===z||z,em=void 0===j?3:j,ey=void 0===C?3:C,ev=void 0===w?"inherit":w,ew=void 0===k?"auto":k,ek=r??el?.element,ex=o??o0[e.placement??"bottom"],e$=a??e.boundaryElement??el.element,eS=n??e.boundaryElement??el.element,eR=i??ed.popover.zOffset,e_=!r3()&&ec,ez=rK(ek)?.border;en[30]!==b?(I=tn(b),en[30]=b,en[31]=I):I=en[31];let ej=I;en[32]!==em?(N=tn(em),en[32]=em,en[33]=N):N=en[33];let eC=N;en[34]!==ey?(H=tn(ey),en[34]=ey,en[35]=H):H=en[35];let eE=H,eI=tn(ew);en[36]!==eR?(T=tn(eR),en[36]=eR,en[37]=T):T=en[37];let eN=T,eH=(0,eB.useRef)(null),eT=(0,eB.useRef)(null);en[38]===Symbol.for("react.memo_cache_sentinel")?(M=()=>eH.current,en[38]=M):M=en[38],(0,eB.useImperativeHandle)(t,M);let eM=r0(),eO=ef||eh?ez?.width:void 0,eL=function(e){let{container:t,mediaIndex:r,width:o}=e,a=o[r],n=void 0===a?o[o.length-1]:a;return"number"==typeof n?t[n]:void 0}({container:ei,mediaIndex:eM,width:eI}),eP=(0,eB.useRef)(eL);en[39]!==eL?(O=()=>{eP.current=eL},L=[eL],en[39]=eL,en[40]=O,en[41]=L):(O=en[40],L=en[41]),(0,eB.useEffect)(O,L),en[42]!==eO||en[43]!==eL?(F=function(e){let{boundaryWidth:t,currentWidth:r}=e;if(void 0!==r||void 0!==t)return Math.min(r??1/0,(t||1/0)-8)}({boundaryWidth:eO,currentWidth:eL}),en[42]=eO,en[43]=eL,en[44]=F):F=en[44];let eD=F,eV=(0,eB.useRef)(eD);en[45]!==eD?(A=()=>{eV.current=eD},B=[eD],en[45]=eD,en[46]=A,en[47]=B):(A=en[46],B=en[47]),(0,eB.useEffect)(A,B);let eY=(0,eB.useRef)(void 0);en[48]!==c||en[49]!==eD||en[50]!==f||en[51]!==eL?(P=()=>{let e=eH.current;if(!f||!e)return;let t=eY.current;c?void 0!==t&&(e.style.width=`${t}px`):void 0!==eL&&(e.style.width=`${eL}px`),"number"==typeof eD&&(e.style.maxWidth=`${eD}px`)},D=[eL,c,eD,f],en[48]=c,en[49]=eD,en[50]=f,en[51]=eL,en[52]=P,en[53]=D):(P=en[52],D=en[53]),(0,eB.useEffect)(P,D);let[eX,eq]=(0,eB.useState)(void 0);en[54]!==e_||en[55]!==eu||en[56]!==ef||en[57]!==ex||en[58]!==e$||en[59]!==es||en[60]!==c||en[61]!==eg||en[62]!==ep||en[63]!==eh||en[64]!==eS?(V={animate:e_,arrowProp:eu,arrowRef:eT,constrainSize:ef,fallbackPlacements:ex,floatingBoundary:e$,margins:es,matchReferenceWidth:c,maxWidthRef:eV,placementProp:eg,placementStrategy:ep,preventOverflow:eh,referenceBoundary:eS,referenceWidthRef:eY,rootBoundary:"viewport",setReferenceWidth:eq,widthRef:eP},en[54]=e_,en[55]=eu,en[56]=ef,en[57]=ex,en[58]=e$,en[59]=es,en[60]=c,en[61]=eg,en[62]=ep,en[63]=eh,en[64]=eS,en[65]=V):V=en[65];let eK=function(e){let t,r=(0,eA.c)(42),{animate:o,arrowProp:a,arrowRef:n,constrainSize:i,fallbackPlacements:d,floatingBoundary:l,margins:s,matchReferenceWidth:c,maxWidthRef:u,placementProp:f,placementStrategy:b,preventOverflow:g,referenceBoundary:p,referenceWidthRef:h,rootBoundary:m,setReferenceWidth:y,widthRef:v}=e;if(r[0]!==o||r[1]!==a||r[2]!==n||r[3]!==i||r[4]!==d||r[5]!==l||r[6]!==s||r[7]!==c||r[8]!==u||r[9]!==f||r[10]!==b||r[11]!==g||r[12]!==p||r[13]!==h||r[14]!==m||r[15]!==y||r[16]!==v){let e,w;if(t=[],i||g)if("autoPlacement"===b){let e;r[18]!==d||r[19]!==f?(e=(0,eG.autoPlacement)({allowedPlacements:[f].concat(d)}),r[18]=d,r[19]=f,r[20]=e):e=r[20],t.push(e)}else{let e,o=l||void 0;r[21]!==d||r[22]!==m||r[23]!==o?(e=(0,eG.flip)({boundary:o,fallbackPlacements:d,padding:4,rootBoundary:m}),r[21]=d,r[22]=m,r[23]=o,r[24]=e):e=r[24],t.push(e)}if(r[25]===Symbol.for("react.memo_cache_sentinel")?(e=(0,eG.offset)({mainAxis:4}),r[25]=e):e=r[25],t.push(e),i||c){let e,o=l||void 0;r[26]!==i||r[27]!==s||r[28]!==c||r[29]!==u||r[30]!==h||r[31]!==y||r[32]!==o||r[33]!==v?(e=function(e){let{constrainSize:t,margins:r,matchReferenceWidth:o,maxWidthRef:a,padding:n=0,referenceWidthRef:i,setReferenceWidth:d,widthRef:l}=e;return{name:"@sanity/ui/size",async fn(s){let{elements:c,placement:u,platform:f,rects:b}=s,{floating:g,reference:p}=b,h=await (0,eW.detectOverflow)(s,{altBoundary:!0,boundary:e.boundaryElement||void 0,elementContext:"floating",padding:n,rootBoundary:"viewport"}),m=1/0,y=1/0,v=g.width,w=g.height;u.includes("top")&&(m=v-(h.left+h.right),y=w-h.top),u.includes("right")&&(m=v-h.right,y=w-(h.top+h.bottom)),u.includes("bottom")&&(m=v-(h.left+h.right),y=w-h.bottom),u.includes("left")&&(m=v-h.left,y=w-(h.top+h.bottom));let k=m-r[1]-r[3],x=y-r[0]-r[2],$=p.width-r[1]-r[3];i.current=$,d($),o?c.floating.style.width=`${$}px`:void 0!==l.current&&(c.floating.style.width=`${l.current}px`),t&&(c.floating.style.maxWidth=`${Math.min(k,a.current??1/0)}px`,c.floating.style.maxHeight=`${x}px`);let S=await f.getDimensions(c.floating),R=S.height;return v!==S.width||w!==R?{reset:{rects:!0}}:{}}}}({boundaryElement:o,constrainSize:i,margins:s,matchReferenceWidth:c,maxWidthRef:u,padding:4,referenceWidthRef:h,setReferenceWidth:y,widthRef:v}),r[26]=i,r[27]=s,r[28]=c,r[29]=u,r[30]=h,r[31]=y,r[32]=o,r[33]=v,r[34]=e):e=r[34],t.push(e)}if(g){let e,o=l||void 0;r[35]!==m||r[36]!==o?(e=(0,eG.shift)({boundary:o,rootBoundary:m,padding:4}),r[35]=m,r[36]=o,r[37]=e):e=r[37],t.push(e)}if(a){let e;r[38]!==n?(e=(0,eG.arrow)({element:n,padding:4}),r[38]=n,r[39]=e):e=r[39],t.push(e)}o&&t.push(og);let k=p||void 0;r[40]!==k?(w=(0,eG.hide)({boundary:k,padding:4,strategy:"referenceHidden"}),r[40]=k,r[41]=w):w=r[41],t.push(w),r[0]=o,r[1]=a,r[2]=n,r[3]=i,r[4]=d,r[5]=l,r[6]=s,r[7]=c,r[8]=u,r[9]=f,r[10]=b,r[11]=g,r[12]=p,r[13]=h,r[14]=m,r[15]=y,r[16]=v,r[17]=t}else t=r[17];return t}(V);en[66]!==p?(W=p?{reference:p}:void 0,en[66]=p,en[67]=W):W=en[67],en[68]!==eK||en[69]!==eg||en[70]!==W?(G={middleware:eK,placement:eg,whileElementsMounted:eW.autoUpdate,elements:W},en[68]=eK,en[69]=eg,en[70]=W,en[71]=G):G=en[71];let{x:eQ,y:eZ,middlewareData:eJ,placement:e0,refs:e1,strategy:e2,update:e3}=(0,eG.useFloating)(G),e5=eJ.hide?.referenceHidden,e4=eJ.arrow?.x,e6=eJ.arrow?.y,e7=eJ["@sanity/ui/origin"]?.originX,e8=eJ["@sanity/ui/origin"]?.originY;en[72]===Symbol.for("react.memo_cache_sentinel")?(Y=e=>{eT.current=e},en[72]=Y):Y=en[72];let e9=Y;en[73]!==e1?(U=e=>{eH.current=e,e1.setFloating(e)},en[73]=e1,en[74]=U):U=en[74];let te=U;en[75]!==d?(X=d?oZ(d):null,en[75]=d,en[76]=X):X=en[76],en[77]!==e1.reference.current?(q=()=>e1.reference.current,en[77]=e1.reference.current,en[78]=q):q=en[78],(0,eB.useImperativeHandle)(X,q);e:{let e;if(p){K=d;break e}if(!d){K=null;break e}en[79]!==d||en[80]!==e1.setReference?(e=(0,eB.cloneElement)(d,{ref:e1.setReference}),en[79]=d,en[80]=e1.setReference,en[81]=e):e=en[81],K=e}let tt=K;if(en[82]!==e3?(Q=()=>e3,Z=[e3],en[82]=e3,en[83]=Q,en[84]=Z):(Q=en[83],Z=en[84]),(0,eB.useImperativeHandle)(E,Q,Z),s){let e;return en[85]!==d?(e=d||(0,eF.jsx)(eF.Fragment,{}),en[85]=d,en[86]=e):e=en[86],e}en[87]!==u?(J=u&&(0,eF.jsx)(o5,{}),en[87]=u,en[88]=J):J=en[88];let tr=c?eX:eL;en[89]!==e_||en[90]!==eu||en[91]!==e4||en[92]!==e6||en[93]!==l||en[94]!==es||en[95]!==e7||en[96]!==e8||en[97]!==eb||en[98]!==ej||en[99]!==e0||en[100]!==eC||en[101]!==e5||en[102]!==h||en[103]!==m||en[104]!==te||en[105]!==eE||en[106]!==e2||en[107]!==tr||en[108]!==ev||en[109]!==eQ||en[110]!==eZ?(ee=(0,eF.jsx)(o3,{...h,__unstable_margins:es,animate:e_,arrow:eu,arrowRef:e9,arrowX:e4,arrowY:e6,hidden:e5,overflow:eb,padding:ej,placement:e0,radius:eC,ref:te,scheme:m,shadow:eE,originX:e7,originY:e8,strategy:e2,tone:ev,width:tr,x:eQ,y:eZ,children:l}),en[89]=e_,en[90]=eu,en[91]=e4,en[92]=e6,en[93]=l,en[94]=es,en[95]=e7,en[96]=e8,en[97]=eb,en[98]=ej,en[99]=e0,en[100]=eC,en[101]=e5,en[102]=h,en[103]=m,en[104]=te,en[105]=eE,en[106]=e2,en[107]=tr,en[108]=ev,en[109]=eQ,en[110]=eZ,en[111]=ee):ee=en[111],en[112]!==J||en[113]!==ee||en[114]!==eN?(et=(0,eF.jsxs)(oI,{zOffset:eN,children:[J,ee]}),en[112]=J,en[113]=ee,en[114]=eN,en[115]=et):et=en[115];let to=et;en[116]!==f||en[117]!==to||en[118]!==g?(er=f&&(g?(0,eF.jsx)(oD,{__unstable_name:"string"==typeof g?g:void 0,children:to}):to),en[116]=f,en[117]=to,en[118]=g,en[119]=er):er=en[119];let ta=er;return en[120]!==e_||en[121]!==ta?(eo=e_?(0,eF.jsx)(eU.AnimatePresence,{children:ta}):ta,en[120]=e_,en[121]=ta,en[122]=eo):eo=en[122],en[123]!==tt||en[124]!==eo?(ea=(0,eF.jsxs)(eF.Fragment,{children:[eo,tt]}),en[123]=tt,en[124]=eo,en[125]=ea):ea=en[125],ea});o4.displayName="ForwardRef(Popover)";let o6=eP.styled.div.withConfig({displayName:"StyledRadio",componentId:"sc-ccrwkf-0"})(function(){return eP.css`
    position: relative;

    &:not([hidden]) {
      display: inline-block;
    }

    &[data-read-only] {
      outline: 1px solid red;
    }
  `}),o7=eP.styled.input.withConfig({displayName:"Input",componentId:"sc-ccrwkf-1"})(function(e){let{color:t,input:r}=T(e.theme),o=(r.radio.size-r.radio.markSize)/2;return eP.css`
    appearance: none;
    position: absolute;
    top: 0;
    left: 0;
    opacity: 0;
    height: 100%;
    width: 100%;
    outline: none;
    z-index: 1;
    padding: 0;
    margin: 0;
    border-radius: ${to(r.radio.size/2)};
    border: none;

    /* enabled */
    & + span {
      display: block;
      position: relative;
      height: ${to(r.radio.size)};
      width: ${to(r.radio.size)};
      border-radius: ${to(r.radio.size/2)};
      background: ${t.input.default.enabled.bg};
      box-shadow: ${tD({color:t.input.default.enabled.border,width:r.border.width})};

      &::after {
        content: '';
        position: absolute;
        top: ${to(o)};
        left: ${to(o)};
        height: ${to(r.radio.markSize)};
        width: ${to(r.radio.markSize)};
        border-radius: ${to(r.radio.markSize/2)};
        background: ${t.input.default.enabled.fg};
        opacity: 0;
      }
    }

    /* focused */
    &:not(:disabled):focus + span {
      box-shadow: ${tV({border:{width:r.border.width,color:t.input.default.enabled.border},focusRing:r.radio.focusRing})};
    }

    &:not(:disabled):focus:not(:focus-visible) + span {
      box-shadow: ${tD({color:t.input.default.enabled.border,width:r.border.width})};
    }

    &:checked + span::after {
      opacity: 1;
    }

    /* customValidity */
    &[data-error] + span {
      background-color: ${t.input.invalid.enabled.border};
      box-shadow: ${tD({width:r.border.width,color:t.input.invalid.enabled.muted.bg})};
      &::after {
        background: ${t.input.invalid.enabled.muted.bg};
      }
    }

    /* read only */
    &[data-read-only] + span {
      box-shadow: 0 0 0 1px ${t.input.default.readOnly.border};
      background: ${t.input.default.readOnly.bg};

      &::after {
        background: ${t.input.default.readOnly.border};
      }
    }

    /* disabled */
    &:not([data-read-only]):disabled + span {
      box-shadow: 0 0 0 1px ${t.input.default.disabled.border};
      background: ${t.input.default.disabled.bg};

      &::after {
        background: ${t.input.default.disabled.border};
      }
    }
  `}),o8=(0,eB.forwardRef)(function(e,t){let r,o,a,n,i,d,l,s,c,u,f=(0,eA.c)(19);f[0]!==e?({className:r,disabled:a,style:d,customValidity:o,readOnly:n,...i}=e,f[0]=e,f[1]=r,f[2]=o,f[3]=a,f[4]=n,f[5]=i,f[6]=d):(r=f[1],o=f[2],a=f[3],n=f[4],i=f[5],d=f[6]);let b=(0,eB.useRef)(null);f[7]===Symbol.for("react.memo_cache_sentinel")?(l=()=>b.current,f[7]=l):l=f[7],(0,eB.useImperativeHandle)(t,l),rU(b,o);let g=!a&&n?"":void 0,p=o?"":void 0,h=a||n;return f[8]!==n||f[9]!==i||f[10]!==g||f[11]!==p||f[12]!==h?(s=(0,eF.jsx)(o7,{"data-read-only":g,"data-error":p,...i,disabled:h,readOnly:n,ref:b,type:"radio"}),f[8]=n,f[9]=i,f[10]=g,f[11]=p,f[12]=h,f[13]=s):s=f[13],f[14]===Symbol.for("react.memo_cache_sentinel")?(c=(0,eF.jsx)("span",{}),f[14]=c):c=f[14],f[15]!==r||f[16]!==d||f[17]!==s?(u=(0,eF.jsxs)(o6,{className:r,"data-ui":"Radio",style:d,children:[s,c]}),f[15]=r,f[16]=d,f[17]=s,f[18]=u):u=f[18],u});function o9(e){let{font:t}=T(e.theme);return eP.css`
    -webkit-font-smoothing: antialiased;
    appearance: none;
    border: 0;
    font-family: ${t.text.family};
    color: inherit;
    width: 100%;
    outline: none;
    margin: 0;

    &:disabled {
      opacity: 1;
    }
  `}function ae(e){let{color:t,input:r}=T(e.theme);return eP.css`
    /* enabled */
    background-color: ${t.input.default.enabled.bg};
    color: ${t.input.default.enabled.fg};
    box-shadow: ${tD({color:t.input.default.enabled.border,width:r.border.width})};

    /* hovered */
    @media (hover: hover) {
      &:not(:disabled):hover {
        background-color: ${t.input.default.hovered.bg};
        color: ${t.input.default.hovered.fg};
        box-shadow: ${tD({color:t.input.default.hovered.border,width:r.border.width})};
      }
    }

    /* focused */
    &:not(:disabled):focus {
      box-shadow: ${tV({border:{width:r.border.width,color:t.input.default.enabled.border},focusRing:r.select.focusRing})};
    }

    /* read-only */
    &[data-read-only] {
      background-color: ${t.input.default.readOnly.bg};
      color: ${t.input.default.readOnly.fg};
      box-shadow: ${tD({color:t.input.default.readOnly.border,width:r.border.width})};
    }

    /* disabled */
    &:not([data-read-only]):disabled {
      background-color: ${t.input.default.disabled.bg};
      color: ${t.input.default.disabled.fg};
      box-shadow: ${tD({color:t.input.default.disabled.border,width:r.border.width})};
    }
  `}function at(e){let{$fontSize:t}=e,{font:r,media:o}=T(e.theme);return ta(o,t,e=>{var t;return{fontSize:to((t=r.text.sizes[e]||r.text.sizes[2]).fontSize),lineHeight:`${to(t.lineHeight)}`}})}o8.displayName="ForwardRef(Radio)";let ar=eP.styled.div.withConfig({displayName:"StyledSelect",componentId:"sc-5mxno7-0"})(function(){return eP.css`
    position: relative;
    width: -moz-available;
    width: -webkit-fill-available;
    width: stretch;

    &:not([hidden]) {
      display: inline-block;
    }
  `}),ao=eP.styled.select.withConfig({displayName:"Input",componentId:"sc-5mxno7-1"})(function(){return[rd,o9,ae,at,re]}),aa=(0,eP.styled)(rj).withConfig({displayName:"IconBox",componentId:"sc-5mxno7-2"})(function(e){let{color:t}=T(e.theme);return eP.css`
    pointer-events: none;
    position: absolute;
    top: 0;
    right: 0;

    /* enabled */
    --card-fg-color: ${t.input.default.enabled.fg};

    /* hover */
    @media (hover: hover) {
      select:not(disabled):not(:read-only):hover + && {
        --card-fg-color: ${t.input.default.hovered.fg};
      }
    }

    /* disabled */
    select:disabled + && {
      --card-fg-color: ${t.input.default.disabled.fg};
    }

    /* read-only */
    select[data-read-only] + && {
      --card-fg-color: ${t.input.default.readOnly.fg};
    }
  `}),an=(0,eB.forwardRef)(function(e,t){let r,o,a,n,i,d,l,s,c,u,f,b,g,p,h,m,y,v,w,k=(0,eA.c)(37);k[0]!==e?({children:r,customValidity:o,disabled:a,fontSize:d,padding:l,radius:s,readOnly:n,space:c,...i}=e,k[0]=e,k[1]=r,k[2]=o,k[3]=a,k[4]=n,k[5]=i,k[6]=d,k[7]=l,k[8]=s,k[9]=c):(r=k[1],o=k[2],a=k[3],n=k[4],i=k[5],d=k[6],l=k[7],s=k[8],c=k[9]);let x=void 0===d?2:d,$=void 0===l?3:l,S=void 0===s?2:s,R=void 0===c?3:c,_=(0,eB.useRef)(null);k[10]===Symbol.for("react.memo_cache_sentinel")?(u=()=>_.current,k[10]=u):u=k[10],(0,eB.useImperativeHandle)(t,u),rU(_,o);let z=!a&&n?"":void 0;k[11]!==x?(f=tn(x),k[11]=x,k[12]=f):f=k[12],k[13]!==$?(b=tn($),k[13]=$,k[14]=b):b=k[14],k[15]!==S?(g=tn(S),k[15]=S,k[16]=g):g=k[16],k[17]!==R?(p=tn(R),k[17]=R,k[18]=p):p=k[18];let j=a||n;return k[19]!==r||k[20]!==i||k[21]!==j||k[22]!==z||k[23]!==f||k[24]!==b||k[25]!==g||k[26]!==p?(h=(0,eF.jsx)(ao,{"data-read-only":z,"data-ui":"Select",...i,$fontSize:f,$padding:b,$radius:g,$space:p,disabled:j,ref:_,children:r}),k[19]=r,k[20]=i,k[21]=j,k[22]=z,k[23]=f,k[24]=b,k[25]=g,k[26]=p,k[27]=h):h=k[27],k[28]===Symbol.for("react.memo_cache_sentinel")?(m=(0,eF.jsx)(eV.ChevronDownIcon,{}),k[28]=m):m=k[28],k[29]!==x?(y=(0,eF.jsx)(rE,{size:x,children:m}),k[29]=x,k[30]=y):y=k[30],k[31]!==$||k[32]!==y?(v=(0,eF.jsx)(aa,{padding:$,children:y}),k[31]=$,k[32]=y,k[33]=v):v=k[33],k[34]!==h||k[35]!==v?(w=(0,eF.jsxs)(ar,{"data-ui":"Select",children:[h,v]}),k[34]=h,k[35]=v,k[36]=w):w=k[36],w});an.displayName="ForwardRef(Select)";let ai={"&&:not([hidden])":{display:"grid"},'&[data-as="ul"],&[data-as="ol"]':{listStyle:"none"},gridTemplateColumns:"minmax(0, 1fr)",gridAutoRows:"min-content"},ad=(0,eP.styled)(rj).withConfig({displayName:"StyledStack",componentId:"sc-8dpfq2-0"})(function(){return ai},function(e){let{media:t,space:r}=T(e.theme);return ta(t,e.$space,e=>({gridGap:to(r[e])}))}),al=(0,eB.forwardRef)(function(e,t){let r,o,a,n,i,d=(0,eA.c)(12);d[0]!==e?({as:r,space:a,...o}=e,d[0]=e,d[1]=r,d[2]=o,d[3]=a):(r=d[1],o=d[2],a=d[3]);let l="string"==typeof r?r:void 0;return d[4]!==a?(n=tn(a),d[4]=a,d[5]=n):n=d[5],d[6]!==r||d[7]!==t||d[8]!==o||d[9]!==l||d[10]!==n?(i=(0,eF.jsx)(ad,{"data-as":l,"data-ui":"Stack",...o,$space:n,forwardedAs:r,ref:t}),d[6]=r,d[7]=t,d[8]=o,d[9]=l,d[10]=n,d[11]=i):i=d[11],i});al.displayName="ForwardRef(Stack)";let as=eP.styled.span.withConfig({displayName:"StyledSwitch",componentId:"sc-dw1foe-0"})(function(){return eP.css`
    position: relative;
    &:not([hidden]) {
      display: inline-block;
    }
  `}),ac=eP.styled.input.withConfig({displayName:"Input",componentId:"sc-dw1foe-1"})(function(){return eP.css`
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    opacity: 0;
    height: 100%;
    width: 100%;
    outline: none;
    padding: 0;
    margin: 0;

    /* Place the input element above the representation element */
    z-index: 1;
  `}),au=eP.styled.span.withConfig({displayName:"Representation",componentId:"sc-dw1foe-2"})(function(e){let{color:t,input:r}=T(e.theme);return eP.css`
    --switch-bg-color: ${t.input.default.enabled.border};
    --switch-fg-color: ${t.input.default.enabled.bg};
    --switch-box-shadow: none;

    &:not([hidden]) {
      display: block;
    }
    position: relative;
    width: ${to(r.switch.width)};
    height: ${to(r.switch.height)};
    border-radius: ${to(r.switch.height/2)};

    /* Make sure it’s not possible to interact with the wrapper element */
    pointer-events: none;

    &:after {
      content: '';
      display: block;
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      z-index: 1;
      box-shadow: var(--switch-box-shadow);
      border-radius: inherit;
    }

    /* Focus styles */
    input:focus + && {
      --switch-box-shadow: ${tV({focusRing:r.switch.focusRing})};
    }

    input:focus:not(:focus-visible) + && {
      --switch-box-shadow: none;
    }

    input:checked + && {
      --switch-bg-color: ${t.input.default.enabled.fg};
      --switch-fg-color: ${t.input.default.enabled.bg};
    }

    @media (hover: hover) {
      input:not(:disabled):hover + && {
        --switch-bg-color: ${t.input.default.hovered.border};
        --switch-fg-color: ${t.input.default.hovered.bg};
      }

      input:not(:disabled):checked:hover + && {
        --switch-bg-color: ${t.input.default.enabled.fg};
        --switch-fg-color: ${t.input.default.enabled.bg};
      }
    }

    input:not([data-read-only]):disabled + && {
      --switch-bg-color: ${t.input.default.disabled.border};
      --switch-fg-color: ${t.input.default.disabled.bg};
    }

    input[data-read-only]:disabled + && {
      --switch-bg-color: ${t.input.default.readOnly.border};
      --switch-fg-color: ${t.input.default.readOnly.bg};
    }

    input:checked[data-read-only]:disabled + && {
      --switch-bg-color: ${t.input.default.readOnly.fg};
      --switch-fg-color: ${t.input.default.readOnly.bg};
    }
  `}),af=eP.styled.span.withConfig({displayName:"Track",componentId:"sc-dw1foe-3"})(function(e){let{input:t}=T(e.theme);return eP.css`
    &:not([hidden]) {
      display: block;
    }
    background-color: var(--switch-bg-color);
    position: absolute;
    left: 0;
    top: 0;
    width: ${to(t.switch.width)};
    height: ${to(t.switch.height)};
    border-radius: ${to(t.switch.height/2)};
  `}),ab=eP.styled.span.withConfig({displayName:"Thumb",componentId:"sc-dw1foe-4"})(function(e){let{$indeterminate:t}=e,{input:r}=T(e.theme),o=r.switch.width,a=r.switch.height,n=r.switch.padding,i=a-2*r.switch.padding,d=o-2*n-i,l=o/2-i/2-n,s=!0!==t&&!0===e.$checked;return eP.css`
    &:not([hidden]) {
      display: block;
    }
    position: absolute;
    left: ${to(n)};
    top: ${to(n)};
    height: ${to(i)};
    width: ${to(i)};
    border-radius: ${to(i/2)};
    transition-property: transform;
    transition-duration: ${r.switch.transitionDurationMs}ms;
    transition-timing-function: ${r.switch.transitionTimingFunction};
    background: var(--switch-fg-color);
    transform: translate3d(0, 0, 0);
    box-shadow: 0px 1px 0px 0px rgba(0, 0, 0, 0.05);

    ${s&&eP.css`
      transform: translate3d(${d}px, 0, 0);
    `}

    ${t&&eP.css`
      transform: translate3d(${l}px, 0, 0);
    `}
  `}),ag=(0,eB.forwardRef)(function(e,t){let r,o,a,n,i,d,l,s,c,u,f,b,g,p,h=(0,eA.c)(26);h[0]!==e?({checked:r,className:o,disabled:a,indeterminate:n,readOnly:i,style:l,...d}=e,h[0]=e,h[1]=r,h[2]=o,h[3]=a,h[4]=n,h[5]=i,h[6]=d,h[7]=l):(r=h[1],o=h[2],a=h[3],n=h[4],i=h[5],d=h[6],l=h[7]);let m=(0,eB.useRef)(null);h[8]===Symbol.for("react.memo_cache_sentinel")?(s=()=>m.current,h[8]=s):s=h[8],(0,eB.useImperativeHandle)(t,s),h[9]!==n?(c=()=>{m.current&&(m.current.indeterminate=n||!1)},u=[n],h[9]=n,h[10]=c,h[11]=u):(c=h[10],u=h[11]),(0,eB.useEffect)(c,u);let y=!a&&i?"":void 0,v=!0!==n&&r,w=a||i;return h[12]!==d||h[13]!==y||h[14]!==v||h[15]!==w?(f=(0,eF.jsx)(ac,{"data-read-only":y,...d,checked:v,disabled:w,type:"checkbox",ref:m}),h[12]=d,h[13]=y,h[14]=v,h[15]=w,h[16]=f):f=h[16],h[17]===Symbol.for("react.memo_cache_sentinel")?(b=(0,eF.jsx)(af,{}),h[17]=b):b=h[17],h[18]!==r||h[19]!==n?(g=(0,eF.jsxs)(au,{"aria-hidden":!0,"data-name":"representation",children:[b,(0,eF.jsx)(ab,{$checked:r,$indeterminate:n})]}),h[18]=r,h[19]=n,h[20]=g):g=h[20],h[21]!==o||h[22]!==l||h[23]!==f||h[24]!==g?(p=(0,eF.jsxs)(as,{className:o,"data-ui":"Switch",style:l,children:[f,g]}),h[21]=o,h[22]=l,h[23]=f,h[24]=g,h[25]=p):p=h[25],p});ag.displayName="ForwardRef(Switch)";let ap=eP.styled.span.withConfig({displayName:"StyledTextArea",componentId:"sc-1d6h1o8-0"})(rr),ah=eP.styled.span.withConfig({displayName:"InputRoot",componentId:"sc-1d6h1o8-1"})`flex:1;min-width:0;display:block;position:relative;`,am=eP.styled.textarea.withConfig({displayName:"Input",componentId:"sc-1d6h1o8-2"})(t9,ro,ra),ay=eP.styled.div.withConfig({displayName:"Presentation",componentId:"sc-1d6h1o8-3"})(rd,rn),av=(0,eB.forwardRef)(function(e,t){let r,o,a,n,i,d,l,s,c,u,f,b,g,p,h,m,y,v=(0,eA.c)(35);v[0]!==e?({border:n,customValidity:o,disabled:i,fontSize:d,padding:l,radius:s,weight:c,__unstable_disableFocusRing:r,...a}=e,v[0]=e,v[1]=r,v[2]=o,v[3]=a,v[4]=n,v[5]=i,v[6]=d,v[7]=l,v[8]=s,v[9]=c):(r=v[1],o=v[2],a=v[3],n=v[4],i=v[5],d=v[6],l=v[7],s=v[8],c=v[9]);let w=void 0===n||n,k=void 0!==i&&i,x=void 0===d?2:d,$=void 0===l?3:l,S=void 0===s?2:s,R=(0,eB.useRef)(null),_=tm();v[10]===Symbol.for("react.memo_cache_sentinel")?(u=()=>R.current,v[10]=u):u=v[10],(0,eB.useImperativeHandle)(t,u),rU(R,o);let z=_.scheme,j=_.tone;v[11]!==x?(f=tn(x),v[11]=x,v[12]=f):f=v[12],v[13]!==$?(b=tn($),v[13]=$,v[14]=b):b=v[14];let C=_.scheme;v[15]===Symbol.for("react.memo_cache_sentinel")?(g=tn(0),v[15]=g):g=v[15],v[16]!==k||v[17]!==a||v[18]!==_.scheme||v[19]!==_.tone||v[20]!==f||v[21]!==b||v[22]!==c?(p=(0,eF.jsx)(am,{"data-as":"textarea","data-scheme":z,"data-tone":j,...a,$fontSize:f,$padding:b,$scheme:C,$space:g,$tone:_.tone,$weight:c,disabled:k,ref:R}),v[16]=k,v[17]=a,v[18]=_.scheme,v[19]=_.tone,v[20]=f,v[21]=b,v[22]=c,v[23]=p):p=v[23],v[24]!==S?(h=tn(S),v[24]=S,v[25]=h):h=v[25];let E=w?"":void 0;return v[26]!==r||v[27]!==_.scheme||v[28]!==_.tone||v[29]!==h||v[30]!==E?(m=(0,eF.jsx)(ay,{$radius:h,$unstableDisableFocusRing:r,$scheme:_.scheme,$tone:_.tone,"data-border":E,"data-scheme":_.scheme,"data-tone":_.tone}),v[26]=r,v[27]=_.scheme,v[28]=_.tone,v[29]=h,v[30]=E,v[31]=m):m=v[31],v[32]!==p||v[33]!==m?(y=(0,eF.jsx)(ap,{"data-ui":"TextArea",children:(0,eF.jsxs)(ah,{children:[p,m]})}),v[32]=p,v[33]=m,v[34]=y):y=v[34],y});av.displayName="ForwardRef(TextArea)";let aw={zIndex:2},ak=(0,eP.styled)(rW).attrs({forwardedAs:"span"}).withConfig({displayName:"StyledTextInput",componentId:"sc-h62wco-0"})(rr),ax=eP.styled.span.withConfig({displayName:"InputRoot",componentId:"sc-h62wco-1"})`flex:1;min-width:0;display:block;position:relative;`,a$=(0,eP.styled)(rW).attrs({forwardedAs:"span"}).withConfig({displayName:"Prefix",componentId:"sc-h62wco-2"})`border-top-right-radius:0;border-bottom-right-radius:0;& > span{display:block;margin:-1px;}`,aS=(0,eP.styled)(rW).attrs({forwardedAs:"span"}).withConfig({displayName:"Suffix",componentId:"sc-h62wco-3"})`border-top-left-radius:0;border-bottom-left-radius:0;& > span{display:block;margin:-1px;}`,aR=eP.styled.input.withConfig({displayName:"Input",componentId:"sc-h62wco-4"})(t9,ro,ra),a_=eP.styled.span.withConfig({displayName:"Presentation",componentId:"sc-h62wco-5"})(rd,rn),az=(0,eP.styled)(rj).withConfig({displayName:"LeftBox",componentId:"sc-h62wco-6"})`position:absolute;top:0;left:0;`,aj=(0,eP.styled)(rj).withConfig({displayName:"RightBox",componentId:"sc-h62wco-7"})`position:absolute;top:0;right:0;`,aC=(0,eP.styled)(rW).withConfig({displayName:"RightCard",componentId:"sc-h62wco-8"})`background-color:transparent;position:absolute;top:0;right:0;`,aE=(0,eP.styled)(rD).withConfig({displayName:"TextInputClearButton",componentId:"sc-h62wco-9"})({"&:not([hidden])":{display:"block"}}),aI=(0,eB.forwardRef)(function(e,t){let r,o,a,n,i,d,l,s,c,u,f,b,g,p,h,m,y,v,w,k,x,$,S,R,_,z,j,C,E,I,N,H,T,M,O,L=(0,eA.c)(92);L[0]!==e?({__unstable_disableFocusRing:a,border:f,clearButton:n,disabled:b,fontSize:g,icon:r,iconRight:o,onClear:d,padding:p,prefix:l,radius:h,readOnly:s,space:m,suffix:u,customValidity:i,type:y,weight:v,...c}=e,L[0]=e,L[1]=r,L[2]=o,L[3]=a,L[4]=n,L[5]=i,L[6]=d,L[7]=l,L[8]=s,L[9]=c,L[10]=u,L[11]=f,L[12]=b,L[13]=g,L[14]=p,L[15]=h,L[16]=m,L[17]=y,L[18]=v):(r=L[1],o=L[2],a=L[3],n=L[4],i=L[5],d=L[6],l=L[7],s=L[8],c=L[9],u=L[10],f=L[11],b=L[12],g=L[13],p=L[14],h=L[15],m=L[16],y=L[17],v=L[18]);let F=void 0===f||f,A=void 0!==b&&b,B=void 0===g?2:g,P=void 0===p?3:p,D=void 0===h?2:h,V=void 0===m?3:m,W=void 0===y?"text":y,G=(0,eB.useRef)(null),Y=tm();L[19]!==B?(w=tn(B),L[19]=B,L[20]=w):w=L[20];let U=w;L[21]!==P?(k=tn(P),L[21]=P,L[22]=k):k=L[22];let X=k;L[23]!==D?(x=tn(D),L[23]=D,L[24]=x):x=L[24];let q=x;L[25]!==V?($=tn(V),L[25]=V,L[26]=$):$=L[26];let K=$,Q=!!n,Z=!!r,J=!!o,ee=!!u,et=!!l;L[27]===Symbol.for("react.memo_cache_sentinel")?(S=()=>G.current,L[27]=S):S=L[27],(0,eB.useImperativeHandle)(t,S),rU(G,i),L[28]!==d?(R=e=>{e.preventDefault(),e.stopPropagation(),d&&d(),G.current?.focus()},L[28]=d,L[29]=R):R=L[29];let er=R;L[30]!==l||L[31]!==q?(_=l&&(0,eF.jsx)(a$,{borderTop:!0,borderLeft:!0,borderBottom:!0,radius:q,sizing:"border",tone:"inherit",children:(0,eF.jsx)("span",{children:l})}),L[30]=l,L[31]=q,L[32]=_):_=L[32];let eo=_,ea=F?"":void 0;L[33]!==r||L[34]!==U||L[35]!==X?(z=r&&(0,eF.jsx)(az,{padding:X,children:(0,eF.jsxs)(rE,{size:U,children:[(0,eB.isValidElement)(r)&&r,(0,eD.isValidElementType)(r)&&(0,eF.jsx)(r,{})]})}),L[33]=r,L[34]=U,L[35]=X,L[36]=z):z=L[36],L[37]!==Q||L[38]!==o||L[39]!==U||L[40]!==X?(j=!Q&&o&&(0,eF.jsx)(aj,{padding:X,children:(0,eF.jsxs)(rE,{size:U,children:[(0,eB.isValidElement)(o)&&o,(0,eD.isValidElementType)(o)&&(0,eF.jsx)(o,{})]})}),L[37]=Q,L[38]=o,L[39]=U,L[40]=X,L[41]=j):j=L[41],L[42]!==et||L[43]!==ee||L[44]!==a||L[45]!==q||L[46]!==Y.scheme||L[47]!==Y.tone||L[48]!==ea||L[49]!==z||L[50]!==j?(C=(0,eF.jsxs)(a_,{$hasPrefix:et,$unstableDisableFocusRing:a,$hasSuffix:ee,$radius:q,$scheme:Y.scheme,$tone:Y.tone,"data-border":ea,"data-scheme":Y.scheme,"data-tone":Y.tone,children:[z,j]}),L[42]=et,L[43]=ee,L[44]=a,L[45]=q,L[46]=Y.scheme,L[47]=Y.tone,L[48]=ea,L[49]=z,L[50]=j,L[51]=C):C=L[51];let en=C;L[52]!==X?(E=X.map(aH),L[52]=X,L[53]=E):E=L[53];let ei=E;L[54]!==X?(I=X.map(aT),L[54]=X,L[55]=I):I=L[55];let ed=I,el="object"==typeof n?n:eJ;L[56]!==n||L[57]!==ei||L[58]!==ed||L[59]!==el||L[60]!==i||L[61]!==A||L[62]!==U||L[63]!==er||L[64]!==q||L[65]!==s?(N=!A&&!s&&n&&(0,eF.jsx)(aC,{forwardedAs:"span",padding:ei,style:aw,tone:i?"critical":"inherit",children:(0,eF.jsx)(aE,{"aria-label":"Clear","data-qa":"clear-button",fontSize:U,icon:eV.CloseIcon,mode:"bleed",padding:ed,radius:q,...el,onClick:er,onMouseDown:aN})}),L[56]=n,L[57]=ei,L[58]=ed,L[59]=el,L[60]=i,L[61]=A,L[62]=U,L[63]=er,L[64]=q,L[65]=s,L[66]=N):N=L[66];let es=N;L[67]!==q||L[68]!==u?(H=u&&(0,eF.jsx)(aS,{borderTop:!0,borderRight:!0,borderBottom:!0,radius:q,sizing:"border",tone:"inherit",children:(0,eF.jsx)("span",{children:u})}),L[67]=q,L[68]=u,L[69]=H):H=L[69];let ec=H,eu=J||Q;return L[70]!==Z||L[71]!==A||L[72]!==U||L[73]!==X||L[74]!==s||L[75]!==c||L[76]!==Y.scheme||L[77]!==Y.tone||L[78]!==K||L[79]!==eu||L[80]!==W||L[81]!==v?(T=(0,eF.jsx)(aR,{"data-as":"input","data-scheme":Y.scheme,"data-tone":Y.tone,...c,$fontSize:U,$iconLeft:Z,$iconRight:eu,$padding:X,$scheme:Y.scheme,$space:K,$tone:Y.tone,$weight:v,disabled:A,readOnly:s,ref:G,type:W}),L[70]=Z,L[71]=A,L[72]=U,L[73]=X,L[74]=s,L[75]=c,L[76]=Y.scheme,L[77]=Y.tone,L[78]=K,L[79]=eu,L[80]=W,L[81]=v,L[82]=T):T=L[82],L[83]!==es||L[84]!==en||L[85]!==T?(M=(0,eF.jsxs)(ax,{children:[T,en,es]}),L[83]=es,L[84]=en,L[85]=T,L[86]=M):M=L[86],L[87]!==eo||L[88]!==Y.tone||L[89]!==ec||L[90]!==M?(O=(0,eF.jsxs)(ak,{"data-ui":"TextInput",tone:Y.tone,children:[eo,M,ec]}),L[87]=eo,L[88]=Y.tone,L[89]=ec,L[90]=M,L[91]=O):O=L[91],O});function aN(e){e.preventDefault(),e.stopPropagation()}function aH(e){return 0===e?0:1===e||2===e?1:e-2}function aT(e){return 0===e||1===e?0:2===e?1:e-1}function aM(e){let t,r,o=(0,eA.c)(3),[a,n]=(0,eB.useState)(e),i=(0,eB.useRef)(void 0);o[0]===Symbol.for("react.memo_cache_sentinel")?(t=(e,t)=>{let r=()=>{n(e)};if(i.current&&(clearTimeout(i.current),i.current=void 0),!t)return r();i.current=setTimeout(r,t)},o[0]=t):t=o[0];let d=t;return o[1]!==a?(r=[a,d],o[1]=a,o[2]=r):r=o[2],r}aI.displayName="ForwardRef(TextInput)";let aO={top:["top-end","top-start","bottom","left","right"],"top-start":["top","top-end","bottom-start","left-start","right-start"],"top-end":["top","top-start","bottom-end","left-end","right-end"],bottom:["bottom-end","bottom-start","top","left","right"],"bottom-start":["bottom","bottom-end","top-start","left-start","right-start"],"bottom-end":["bottom","bottom-start","top-end","left-end","right-end"],left:["left-end","left-start","right","top","bottom"],"left-start":["left","left-end","right-start","top-start","bottom-start"],"left-end":["left","left-start","right-end","top-end","bottom-end"],right:["right-end","right-start","left","top","bottom"],"right-start":["right","right-end","left-start","top-start","bottom-start"],"right-end":["right","right-start","left-end","top-end","bottom-end"]},aL=(0,eP.styled)(eY.motion.create(rW)).withConfig({displayName:"MotionCard",componentId:"sc-1xn138w-0"})`will-change:transform;`,aF=(0,eB.forwardRef)(function(e,t){let r,o,a,n,i,d,l,s,c,u,f,b,g,p,h,m,y,v,w,k,x,$,S=(0,eA.c)(48);S[0]!==e?({animate:r,arrow:o,arrowRef:a,arrowX:n,arrowY:i,children:d,originX:l,originY:s,padding:c,placement:u,radius:f,scheme:g,shadow:p,style:h,...b}=e,S[0]=e,S[1]=r,S[2]=o,S[3]=a,S[4]=n,S[5]=i,S[6]=d,S[7]=l,S[8]=s,S[9]=c,S[10]=u,S[11]=f,S[12]=b,S[13]=g,S[14]=p,S[15]=h):(r=S[1],o=S[2],a=S[3],n=S[4],i=S[5],d=S[6],l=S[7],s=S[8],c=S[9],u=S[10],f=S[11],b=S[12],g=S[13],p=S[14],h=S[15]);let R=r?"transform":void 0;S[16]!==l||S[17]!==s||S[18]!==h||S[19]!==R?(m={originX:l,originY:s,willChange:R,...h},S[16]=l,S[17]=s,S[18]=h,S[19]=R,S[20]=m):m=S[20];let _=m,z=null!==n?n:void 0,j=null!==i?i:void 0;S[21]!==z||S[22]!==j?(y={left:z,top:j,right:void 0,bottom:void 0},S[21]=z,S[22]=j,S[23]=y):y=S[23];let C=y,E=b;return S[24]!==r?(v=r?["hidden","initial"]:void 0,S[24]=r,S[25]=v):v=S[25],S[26]!==r?(w=r?["visible","scaleIn"]:void 0,S[26]=r,S[27]=w):w=S[27],S[28]!==r?(k=r?["hidden","scaleOut"]:void 0,S[28]=r,S[29]=k):k=S[29],S[30]!==o||S[31]!==a||S[32]!==C?(x=o&&(0,eF.jsx)(ok,{ref:a,style:C,width:15,height:6,radius:2}),S[30]=o,S[31]=a,S[32]=C,S[33]=x):x=S[33],S[34]!==d||S[35]!==c||S[36]!==u||S[37]!==f||S[38]!==t||S[39]!==_||S[40]!==g||S[41]!==p||S[42]!==E||S[43]!==v||S[44]!==w||S[45]!==k||S[46]!==x?($=(0,eF.jsxs)(aL,{"data-ui":"Tooltip__card",...E,"data-placement":u,padding:c,radius:f,ref:t,scheme:g,shadow:p,style:_,variants:e0,transition:e2,initial:v,animate:w,exit:k,children:[d,x]}),S[34]=d,S[35]=c,S[36]=u,S[37]=f,S[38]=t,S[39]=_,S[40]=g,S[41]=p,S[42]=E,S[43]=v,S[44]=w,S[45]=k,S[46]=x,S[47]=$):$=S[47],$});aF.displayName="ForwardRef(TooltipCard)";let aA=tg("@sanity/ui/context/tooltipDelayGroup",null);function aB(e){let t,r,o=(0,eA.c)(9),{children:a,delay:n}=e,[i,d]=aM(!1),[l,s]=aM(null),c="number"==typeof n?n:n?.open||0,u="number"==typeof n?n:n?.close||0,f=i?1:c;o[0]!==u||o[1]!==l||o[2]!==d||o[3]!==s||o[4]!==f?(t={setIsGroupActive:d,openTooltipId:l,setOpenTooltipId:s,openDelay:f,closeDelay:u},o[0]=u,o[1]=l,o[2]=d,o[3]=s,o[4]=f,o[5]=t):t=o[5];let b=t;return o[6]!==a||o[7]!==b?(r=(0,eF.jsx)(aA.Provider,{value:b,children:a}),o[6]=a,o[7]=b,o[8]=r):r=o[8],r}function aP(){return(0,eB.useContext)(aA)}aB.displayName="TooltipDelayGroupProvider";let aD=(0,eP.styled)(oL).withConfig({displayName:"StyledTooltip",componentId:"sc-13f2zvh-0"})`pointer-events:none;`,aV=(0,eB.forwardRef)(function(e,t){let r,o,a,n,i,d,l,s,c,u,f,b,g,p,h,m,y,v,w,k,x,$,S,R,_,z,j,C,E,I,N,H,T,M,O,L,F,A,B,P,D,V,W,G,Y,U,X,q,K,Q,Z=(0,eA.c)(137),J=o_(),{layer:ee}=tw();Z[0]!==e?({animate:f,arrow:b,boundaryElement:r,children:n,content:i,disabled:l,fallbackPlacements:o,padding:g,placement:p,portal:s,radius:h,scheme:u,shadow:m,zOffset:a,delay:d,...c}=e,Z[0]=e,Z[1]=r,Z[2]=o,Z[3]=a,Z[4]=n,Z[5]=i,Z[6]=d,Z[7]=l,Z[8]=s,Z[9]=c,Z[10]=u,Z[11]=f,Z[12]=b,Z[13]=g,Z[14]=p,Z[15]=h,Z[16]=m):(r=Z[1],o=Z[2],a=Z[3],n=Z[4],i=Z[5],d=Z[6],l=Z[7],s=Z[8],c=Z[9],u=Z[10],f=Z[11],b=Z[12],g=Z[13],p=Z[14],h=Z[15],m=Z[16]);let et=void 0!==f&&f,er=void 0!==b&&b,eo=void 0===g?2:g,ea=void 0===p?"bottom":p,en=void 0===h?2:h,ei=void 0===m?2:m,ed=r??J?.element,el=o??aO[e.placement??"bottom"],es=a??ee.tooltip.zOffset,ec=!r3()&&et;Z[17]!==el?(y=tn(el),Z[17]=el,Z[18]=y):y=Z[18];let eu=y,ef=(0,eB.useRef)(null),[eb,eg]=(0,eB.useState)(null),ep=(0,eB.useRef)(null),[eh,em]=(0,eB.useState)(0);Z[19]===Symbol.for("react.memo_cache_sentinel")?(v=()=>ef.current,Z[19]=v):v=Z[19],(0,eB.useImperativeHandle)(t,v);let ey=oP(),ev="string"==typeof s?ey.elements?.[s]||null:ey.element;Z[20]!==ec||Z[21]!==er||Z[22]!==ed||Z[23]!==eu?(w={animate:ec,arrowProp:er,arrowRef:ep,boundaryElement:ed,fallbackPlacements:eu,rootBoundary:"viewport"},Z[20]=ec,Z[21]=er,Z[22]=ed,Z[23]=eu,Z[24]=w):w=Z[24];let ew=function(e){let t,r=(0,eA.c)(17),{animate:o,arrowProp:a,arrowRef:n,boundaryElement:i,fallbackPlacements:d,rootBoundary:l}=e;if(r[0]!==o||r[1]!==a||r[2]!==n||r[3]!==i||r[4]!==d||r[5]!==l){let e,s,c;t=[];let u=i||void 0;r[7]!==d||r[8]!==l||r[9]!==u?(e=(0,eG.flip)({boundary:u,fallbackPlacements:d,padding:4,rootBoundary:l}),r[7]=d,r[8]=l,r[9]=u,r[10]=e):e=r[10],t.push(e),r[11]===Symbol.for("react.memo_cache_sentinel")?(s=(0,eG.offset)({mainAxis:4}),r[11]=s):s=r[11],t.push(s);let f=i||void 0;if(r[12]!==l||r[13]!==f?(c=(0,eG.shift)({boundary:f,rootBoundary:l,padding:4}),r[12]=l,r[13]=f,r[14]=c):c=r[14],t.push(c),a){let e;r[15]!==n?(e=(0,eG.arrow)({element:n,padding:4}),r[15]=n,r[16]=e):e=r[16],t.push(e)}o&&t.push(og),r[0]=o,r[1]=a,r[2]=n,r[3]=i,r[4]=d,r[5]=l,r[6]=t}else t=r[6];return t}(w);Z[25]!==eb?(k={reference:eb},Z[25]=eb,Z[26]=k):k=Z[26],Z[27]!==ew||Z[28]!==ea||Z[29]!==k?(x={middleware:ew,placement:ea,whileElementsMounted:eW.autoUpdate,elements:k},Z[27]=ew,Z[28]=ea,Z[29]=k,Z[30]=x):x=Z[30];let{floatingStyles:ek,placement:ex,middlewareData:e$,refs:eS,update:eR}=(0,eG.useFloating)(x),e_=e$.arrow?.x,ez=e$.arrow?.y,ej=e$["@sanity/ui/origin"]?.originX,eC=e$["@sanity/ui/origin"]?.originY,eE=(0,eB.useId)(),[eI,eN]=aM(!1),eH=aP();Z[31]!==eH?($=eH||{},Z[31]=eH,Z[32]=$):$=Z[32];let{setIsGroupActive:eT,setOpenTooltipId:eM}=$,eO=eI||eH?.openTooltipId===eE,eL=null!==eH,eP="number"==typeof d?d:d?.open||0,eD="number"==typeof d?d:d?.close||0,eV=eL?eH.openDelay:eP,eY=eL?eH.closeDelay:eD;Z[33]!==eY||Z[34]!==eL||Z[35]!==eV||Z[36]!==eT||Z[37]!==eN||Z[38]!==eM||Z[39]!==eE?(S=(e,t)=>{if(eL)if(e){let r=t?0:eV;eT?.(e,r),eM?.(eE,r)}else{let r=eY>200?eY:200;eT?.(e,r),eM?.(null,t?0:eY)}else eN(e,t?0:e?eV:eY)},Z[33]=eY,Z[34]=eL,Z[35]=eV,Z[36]=eT,Z[37]=eN,Z[38]=eM,Z[39]=eE,Z[40]=S):S=Z[40];let eX=S;Z[41]!==n?.props||Z[42]!==eX?(R=e=>{eX(!1),n?.props?.onBlur?.(e)},Z[41]=n?.props,Z[42]=eX,Z[43]=R):R=Z[43];let eq=R;Z[44]!==n?.props||Z[45]!==eX?(_=e=>{eX(!1,!0),n?.props.onClick?.(e)},Z[44]=n?.props,Z[45]=eX,Z[46]=_):_=Z[46];let eQ=_;Z[47]!==n?.props||Z[48]!==eX?(z=e=>{eX(!1,!0),n?.props.onContextMenu?.(e)},Z[47]=n?.props,Z[48]=eX,Z[49]=z):z=Z[49];let eZ=z;Z[50]!==n?.props||Z[51]!==eX?(j=e=>{eX(!0),n?.props?.onFocus?.(e)},Z[50]=n?.props,Z[51]=eX,Z[52]=j):j=Z[52];let eJ=j;Z[53]!==n?.props||Z[54]!==eX?(C=e=>{eX(!0),n?.props?.onMouseEnter?.(e)},Z[53]=n?.props,Z[54]=eX,Z[55]=C):C=Z[55];let e0=C;Z[56]!==n?.props||Z[57]!==eX?(E=e=>{eX(!1),n?.props?.onMouseLeave?.(e)},Z[56]=n?.props,Z[57]=eX,Z[58]=E):E=Z[58];let e1=E;Z[59]!==eX||Z[60]!==eL||Z[61]!==eb||Z[62]!==eO?(I={handleIsOpenChange:eX,referenceElement:eb,showTooltip:eO,isInsideGroup:eL},Z[59]=eX,Z[60]=eL,Z[61]=eb,Z[62]=eO,Z[63]=I):I=Z[63],function(e){let t,r,o,a=(0,eA.c)(10),{handleIsOpenChange:n,referenceElement:i,showTooltip:d,isInsideGroup:l}=e;a[0]!==n||a[1]!==i?(t=(e,t)=>{i&&(i===e||e instanceof Node&&i.contains(e)||(n(!1),t()))},a[0]=n,a[1]=i,a[2]=t):t=a[2];let s=(0,eK.useEffectEvent)(t);a[3]!==l||a[4]!==s||a[5]!==d?(r=()=>{if(!d||l)return;let e=t=>{s(t.target,()=>window.removeEventListener("mousemove",e))};return window.addEventListener("mousemove",e),()=>window.removeEventListener("mousemove",e)},a[3]=l,a[4]=s,a[5]=d,a[6]=r):r=a[6],a[7]!==l||a[8]!==d?(o=[l,d],a[7]=l,a[8]=d,a[9]=o):o=a[9],(0,eB.useEffect)(r,o)}(I),Z[64]!==l||Z[65]!==eX||Z[66]!==eO?(N=()=>{l&&eO&&eX(!1)},H=[l,eX,eO],Z[64]=l,Z[65]=eX,Z[66]=eO,Z[67]=N,Z[68]=H):(N=Z[67],H=Z[68]),(0,eB.useEffect)(N,H),Z[69]!==i||Z[70]!==eX||Z[71]!==eO?(T=()=>{!i&&eO&&eX(!1)},M=[i,eX,eO],Z[69]=i,Z[70]=eX,Z[71]=eO,Z[72]=T,Z[73]=M):(T=Z[72],M=Z[73]),(0,eB.useEffect)(T,M),Z[74]!==eX||Z[75]!==eO?(O=()=>{if(!eO)return;let e=function(e){"Escape"===e.key&&eX(!1,!0)};return window.addEventListener("keydown",e),()=>{window.removeEventListener("keydown",e)}},L=[eX,eO],Z[74]=eX,Z[75]=eO,Z[76]=O,Z[77]=L):(O=Z[76],L=Z[77]),(0,eB.useEffect)(O,L),Z[78]!==ed||Z[79]!==ev?.offsetWidth?(F=()=>{em(Math.min(...ed?[ed.offsetWidth]:[],ev?.offsetWidth||document.body.offsetWidth)-8)},Z[78]=ed,Z[79]=ev?.offsetWidth,Z[80]=F):F=Z[80],Z[81]!==ed||Z[82]!==ev?(A=[ed,ev],Z[81]=ed,Z[82]=ev,Z[83]=A):A=Z[83],(0,eB.useLayoutEffect)(F,A),Z[84]!==eR?(B=e=>{ep.current=e,eR()},Z[84]=eR,Z[85]=B):B=Z[85];let e2=B;Z[86]!==eS?(P=e=>{ef.current=e,eS.setFloating(e)},Z[86]=eS,Z[87]=P):P=Z[87];let e3=P;e:{let e;if(!n){D=null;break e}Z[88]!==n||Z[89]!==eq||Z[90]!==eQ||Z[91]!==eZ||Z[92]!==eJ||Z[93]!==e0||Z[94]!==e1?(e=(0,eB.cloneElement)(n,{onBlur:eq,onFocus:eJ,onMouseEnter:e0,onMouseLeave:e1,onClick:eQ,onContextMenu:eZ,ref:eg}),Z[88]=n,Z[89]=eq,Z[90]=eQ,Z[91]=eZ,Z[92]=eJ,Z[93]=e0,Z[94]=e1,Z[95]=e):e=Z[95],D=e}let e5=D;if(Z[96]!==n?(V=n?oZ(n):null,Z[96]=n,Z[97]=V):V=Z[97],Z[98]!==eb?(W=()=>eb,G=[eb],Z[98]=eb,Z[99]=W,Z[100]=G):(W=Z[99],G=Z[100]),(0,eB.useImperativeHandle)(V,W,G),!e5){let e;return Z[101]===Symbol.for("react.memo_cache_sentinel")?(e=(0,eF.jsx)(eF.Fragment,{}),Z[101]=e):e=Z[101],e}if(l)return e5;let e4=eh>0?`${eh}px`:void 0;Z[102]!==ek||Z[103]!==e4?(Y={...ek,maxWidth:e4},Z[102]=ek,Z[103]=e4,Z[104]=Y):Y=Z[104],Z[105]!==ec||Z[106]!==er||Z[107]!==e_||Z[108]!==ez||Z[109]!==i||Z[110]!==ej||Z[111]!==eC||Z[112]!==eo||Z[113]!==ex||Z[114]!==en||Z[115]!==c||Z[116]!==u||Z[117]!==e2||Z[118]!==e3||Z[119]!==ei?(U=(0,eF.jsx)(aF,{...c,animate:ec,arrow:er,arrowRef:e2,arrowX:e_,arrowY:ez,originX:ej,originY:eC,padding:eo,placement:ex,radius:en,ref:e3,scheme:u,shadow:ei,children:i}),Z[105]=ec,Z[106]=er,Z[107]=e_,Z[108]=ez,Z[109]=i,Z[110]=ej,Z[111]=eC,Z[112]=eo,Z[113]=ex,Z[114]=en,Z[115]=c,Z[116]=u,Z[117]=e2,Z[118]=e3,Z[119]=ei,Z[120]=U):U=Z[120],Z[121]!==c||Z[122]!==e3||Z[123]!==Y||Z[124]!==U||Z[125]!==es?(X=(0,eF.jsx)(aD,{"data-ui":"Tooltip",...c,ref:e3,style:Y,zOffset:es,children:U}),Z[121]=c,Z[122]=e3,Z[123]=Y,Z[124]=U,Z[125]=es,Z[126]=X):X=Z[126];let e6=X;Z[127]!==s||Z[128]!==eO||Z[129]!==e6?(q=eO&&(s?(0,eF.jsx)(oD,{__unstable_name:"string"==typeof s?s:void 0,children:e6}):e6),Z[127]=s,Z[128]=eO,Z[129]=e6,Z[130]=q):q=Z[130];let e7=q;return Z[131]!==ec||Z[132]!==e7?(K=ec?(0,eF.jsx)(eU.AnimatePresence,{children:e7}):e7,Z[131]=ec,Z[132]=e7,Z[133]=K):K=Z[133],Z[134]!==e5||Z[135]!==K?(Q=(0,eF.jsxs)(eF.Fragment,{children:[K,e5]}),Z[134]=e5,Z[135]=K,Z[136]=Q):Q=Z[136],Q});aV.displayName="ForwardRef(Tooltip)";let aW=eP.styled.kbd.withConfig({displayName:"StyledHotkeys",componentId:"sc-b37mge-0"})`font:inherit;padding:1px;&:not([hidden]){display:block;}`,aG=(0,eP.styled)(ob).withConfig({displayName:"Key",componentId:"sc-b37mge-1"})`&:not([hidden]){display:block;}`,aY=(0,eB.forwardRef)(function(e,t){let r,o,a,n,i,d,l,s,c,u,f=(0,eA.c)(26);f[0]!==e?({fontSize:r,keys:o,padding:a,radius:n,space:d,...i}=e,f[0]=e,f[1]=r,f[2]=o,f[3]=a,f[4]=n,f[5]=i,f[6]=d):(r=f[1],o=f[2],a=f[3],n=f[4],i=f[5],d=f[6]);let b=void 0===d?.5:d;f[7]!==b?(l=tn(b),f[7]=b,f[8]=l):l=f[8];let g=l;if(!o||0===o.length){let e;return f[9]===Symbol.for("react.memo_cache_sentinel")?(e=(0,eF.jsx)(eF.Fragment,{}),f[9]=e):e=f[9],e}if(f[10]!==r||f[11]!==o||f[12]!==a||f[13]!==n){let e;f[15]!==r||f[16]!==a||f[17]!==n?(e=(e,t)=>(0,eF.jsx)(aG,{fontSize:r,padding:a,radius:n,children:e},t),f[15]=r,f[16]=a,f[17]=n,f[18]=e):e=f[18],s=o.map(e),f[10]=r,f[11]=o,f[12]=a,f[13]=n,f[14]=s}else s=f[14];return f[19]!==g||f[20]!==s?(c=(0,eF.jsx)(oc,{as:"span",space:g,children:s}),f[19]=g,f[20]=s,f[21]=c):c=f[21],f[22]!==t||f[23]!==i||f[24]!==c?(u=(0,eF.jsx)(aW,{"data-ui":"Hotkeys",...i,ref:t,children:c}),f[22]=t,f[23]=i,f[24]=c,f[25]=u):u=f[25],u});aY.displayName="ForwardRef(Hotkeys)";let aU=tg("@sanity/ui/context/menu",null);function aX(e){return e4(e)&&"true"!==e.getAttribute("data-disabled")||e7(e)&&!e.disabled}function aq(e){return e.filter(aX)}let aK=[];function aQ(){}let aZ=(0,eP.styled)(rj).withConfig({displayName:"StyledMenu",componentId:"sc-xt0tnv-0"})`outline:none;overflow:auto;`,aJ=(0,eB.forwardRef)(function(e,t){let r,o,a,n,i,d,l,s,c,u,f,b,g,p,h,m,y,v,w,k,x,$,S,R=(0,eA.c)(49);if(R[0]!==e){let{children:t,focusFirst:g,focusLast:p,onClickOutside:h,onEscape:m,onItemClick:y,onItemSelect:v,onKeyDown:w,originElement:k,padding:x,registerElement:$,shouldFocus:S,space:_,...z}=e;o=t,a=h,n=m,i=y,d=v,l=w,s=k,f=x,c=$,r=S,b=_,u=z,R[0]=e,R[1]=r,R[2]=o,R[3]=a,R[4]=n,R[5]=i,R[6]=d,R[7]=l,R[8]=s,R[9]=c,R[10]=u,R[11]=f,R[12]=b}else r=R[1],o=R[2],a=R[3],n=R[4],i=R[5],d=R[6],l=R[7],s=R[8],c=R[9],u=R[10],f=R[11],b=R[12];let _=void 0===f?1:f,z=void 0===b?1:b,j=r??(e.focusFirst&&"first"||e.focusLast&&"last"||null),C=(0,eB.useRef)(null);R[13]===Symbol.for("react.memo_cache_sentinel")?(g=()=>C.current,R[13]=g):g=R[13],(0,eB.useImperativeHandle)(t,g);let{isTopLayer:E}=oT();R[14]!==l||R[15]!==s||R[16]!==j?(p={onKeyDown:l,originElement:s,shouldFocus:j,rootElementRef:C},R[14]=l,R[15]=s,R[16]=j,R[17]=p):p=R[17];let{activeElement:I,activeIndex:N,handleItemMouseEnter:H,handleItemMouseLeave:T,handleKeyDown:M,mount:O}=function(e){let t,r,o,a,n,i,d,l,s,c=(0,eA.c)(21),{onKeyDown:u,originElement:f,shouldFocus:b,rootElementRef:g}=e;c[0]===Symbol.for("react.memo_cache_sentinel")?(t=[],c[0]=t):t=c[0];let p=(0,eB.useRef)(t),[h,m]=(0,eB.useState)(-1),y=(0,eB.useRef)(h),[v,w]=(0,eB.useState)(null);c[1]===Symbol.for("react.memo_cache_sentinel")?(r=e=>{m(e),y.current=e,w(p.current[e]||null)},c[1]=r):r=c[1];let k=r;c[2]!==g?(o=(e,t)=>e?(-1===p.current.indexOf(e)&&(p.current.push(e),function(e,t){if(!e)return;let r=new WeakMap;for(let o of t)r.set(o,function(e,t){let r=[],o=t;for(;o!==e;){let t=o.parentElement;if(!t)break;let a=Array.from(t.childNodes).indexOf(o);if(r.unshift(a),t===e)break;o=t}return r}(e,o));t.sort((e,t)=>{let o=r.get(e)||aK,a=r.get(t)||aK,n=Math.max(o.length,a.length);for(let e=0;e<n;e+=1){let t=o[e]||-1,r=a[e]||-1;if(t!==r)return t-r}return 0})}(g.current,p.current)),t&&k(p.current.indexOf(e)),()=>{let t=p.current.indexOf(e);t>-1&&p.current.splice(t,1)}):aQ,c[2]=g,c[3]=o):o=c[3];let x=o;c[4]!==u||c[5]!==f?(a=e=>{if("Tab"===e.key){f&&f.focus();return}if("Home"===e.key){e.preventDefault(),e.stopPropagation();let t=aq(p.current)[0];if(!t)return;k(p.current.indexOf(t));return}if("End"===e.key){e.preventDefault(),e.stopPropagation();let t=aq(p.current),r=t[t.length-1];if(!r)return;k(p.current.indexOf(r));return}if("ArrowUp"===e.key){e.preventDefault(),e.stopPropagation();let t=aq(p.current),r=t.length;if(0===r)return;let o=p.current[y.current],a=t.indexOf(o),n=t[a=(a-1+r)%r];k(p.current.indexOf(n));return}if("ArrowDown"===e.key){e.preventDefault(),e.stopPropagation();let t=aq(p.current),r=t.length;if(0===r)return;let o=p.current[y.current],a=t.indexOf(o),n=t[a=(a+1)%r];k(p.current.indexOf(n));return}u&&u(e)},c[4]=u,c[5]=f,c[6]=a):a=c[6];let $=a;c[7]===Symbol.for("react.memo_cache_sentinel")?(n=e=>{let t=e.currentTarget;k(p.current.indexOf(t))},c[7]=n):n=c[7];let S=n;c[8]!==g?(i=()=>{k(-2),g.current?.focus()},c[8]=g,c[9]=i):i=c[9];let R=i;return c[10]!==h||c[11]!==g||c[12]!==b?(d=()=>{if(!g.current)return;let e=requestAnimationFrame(()=>{if(-1===h){if("first"===b){let e=aq(p.current)[0];e&&k(p.current.indexOf(e))}if("last"===b){let e=aq(p.current),t=e[e.length-1];t&&k(p.current.indexOf(t))}return}(p.current[h]||null)?.focus()});return()=>cancelAnimationFrame(e)},l=[h,g,k,b],c[10]=h,c[11]=g,c[12]=b,c[13]=d,c[14]=l):(d=c[13],l=c[14]),(0,eB.useEffect)(d,l),c[15]!==v||c[16]!==h||c[17]!==R||c[18]!==$||c[19]!==x?(s={activeElement:v,activeIndex:h,handleItemMouseEnter:S,handleItemMouseLeave:R,handleKeyDown:$,mount:x},c[15]=v,c[16]=h,c[17]=R,c[18]=$,c[19]=x,c[20]=s):s=c[20],s}(p),L=(0,eB.useRef)(null);R[18]!==c?(h=e=>{L.current&&(L.current(),L.current=null),C.current=e,C.current&&c&&(L.current=c(C.current))},R[18]=c,R[19]=h):h=R[19];let F=h;R[20]!==N||R[21]!==d?(m=()=>{d&&d(N)},y=[N,d],R[20]=N,R[21]=d,R[22]=m,R[23]=y):(m=R[22],y=R[23]),(0,eB.useEffect)(m,y),R[24]===Symbol.for("react.memo_cache_sentinel")?(v=()=>[C.current],R[24]=v):v=R[24],rG(E&&a,v),R[25]!==E||R[26]!==n?(w=e=>{E&&"Escape"===e.key&&(e.stopPropagation(),n&&n())},R[25]=E,R[26]=n,R[27]=w):w=R[27],rQ(w),R[28]!==I||R[29]!==H||R[30]!==T||R[31]!==O||R[32]!==a||R[33]!==n||R[34]!==i||R[35]!==c?(k={version:2,activeElement:I,mount:O,onClickOutside:a,onEscape:n,onItemClick:i,onItemMouseEnter:H,onItemMouseLeave:T,registerElement:c},R[28]=I,R[29]=H,R[30]=T,R[31]=O,R[32]=a,R[33]=n,R[34]=i,R[35]=c,R[36]=k):k=R[36];let A=k;return R[37]!==o||R[38]!==z?(x=(0,eF.jsx)(al,{space:z,children:o}),R[37]=o,R[38]=z,R[39]=x):x=R[39],R[40]!==M||R[41]!==F||R[42]!==_||R[43]!==u||R[44]!==x?($=(0,eF.jsx)(aZ,{"data-ui":"Menu",...u,onKeyDown:M,padding:_,ref:F,role:"menu",tabIndex:-1,children:x}),R[40]=M,R[41]=F,R[42]=_,R[43]=u,R[44]=x,R[45]=$):$=R[45],R[46]!==$||R[47]!==A?(S=(0,eF.jsx)(aU.Provider,{value:A,children:$}),R[46]=$,R[47]=A,R[48]=S):S=R[48],S});aJ.displayName="ForwardRef(Menu)";let a0=eP.styled.hr.withConfig({displayName:"MenuDivider",componentId:"sc-uhoxwu-0"})`height:1px;border:0;background:var(--card-hairline-soft-color);margin:0;`;a0.displayName="MenuDivider";let a1=(0,eP.styled)(rj).withConfig({displayName:"Selectable",componentId:"sc-1w01ang-0"})(rd,function(){return eP.css`
    background-color: inherit;
    color: inherit;

    &[data-as='button'] {
      -webkit-font-smoothing: inherit;
      appearance: none;
      outline: none;
      font: inherit;
      text-align: inherit;
      border: 0;
      width: -moz-available;
      width: -webkit-fill-available;
      width: stretch;
    }

    /* &:is(a) */
    &[data-as='a'] {
      text-decoration: none;
    }
  `},function(e){let{$tone:t}=e,{color:r,style:o}=T(e.theme),a=r.selectable[t];return eP.css`
    ${rF(r,a.enabled)}

    background-color: var(--card-bg-color);
    color: var(--card-fg-color);
    outline: none;

    /* &:is(button) */
    &[data-as='button'] {
      &:disabled {
        ${rF(r,a.disabled)}
      }

      &:not(:disabled) {
        &[aria-pressed='true'] {
          ${rF(r,a.pressed)}
        }

        &[data-selected],
        &[aria-selected='true'] > & {
          ${rF(r,a.selected)}
        }

        @media (hover: hover) {
          &:not([data-selected]) {
            &[data-hovered],
            &:hover {
              ${rF(r,a.hovered)}
            }

            &:active {
              ${rF(r,a.pressed)}
            }
          }
        }
      }
    }

    /* &:is(a) */
    &[data-as='a'] {
      &[data-disabled] {
        ${rF(r,a.disabled)}
      }

      &:not([data-disabled]) {
        &[data-pressed] {
          ${rF(r,a.pressed)}
        }

        &[data-selected] {
          ${rF(r,a.selected)}
        }

        @media (hover: hover) {
          &:not([data-selected]) {
            &[data-hovered],
            &:hover {
              ${rF(r,a.hovered)}
            }
            &:active {
              ${rF(r,a.pressed)}
            }
          }
        }
      }
    }

    ${o?.card?.root}
  `});function a2(){let e=(0,eB.useContext)(aU);if(!e)throw Error("useMenu(): missing context value");if(!oS(e)||2!==e.version)throw Error("useMenu(): the context value is not compatible");return e}function a3(e){let t,r,o,a,n,i,d,l,s,c,u,f,b,g,p,h,m,y,v,w,k,x,$,S,R,_,z,j,C,E,I,N,H,T,M,O,L=(0,eA.c)(81);L[0]!==e?({as:d,children:r,fontSize:l,icon:t,menu:o,onClick:a,padding:s,popover:n,radius:c,space:u,text:b,tone:f,...i}=e,L[0]=e,L[1]=t,L[2]=r,L[3]=o,L[4]=a,L[5]=n,L[6]=i,L[7]=d,L[8]=l,L[9]=s,L[10]=c,L[11]=u,L[12]=f,L[13]=b):(t=L[1],r=L[2],o=L[3],a=L[4],n=L[5],i=L[6],d=L[7],l=L[8],s=L[9],c=L[10],u=L[11],f=L[12],b=L[13]);let F=void 0===d?"button":d,A=void 0===l?1:l,B=void 0===s?3:s,P=void 0===c?2:c,D=void 0===u?3:u,V=void 0===f?"default":f,W=a2(),{scheme:G}=tm(),{activeElement:Y,mount:U,onClickOutside:X,onEscape:q,onItemClick:K,onItemMouseEnter:Q,registerElement:Z}=W,J=Q??W.onItemMouseEnter,[ee,et]=(0,eB.useState)(null),[er,eo]=(0,eB.useState)(!1),[ea,en]=(0,eB.useState)(null),ei=!!Y&&Y===ee,[ed,el]=(0,eB.useState)(!1);L[14]!==J?(g=e=>{el(!1),J(e),eo(!0)},L[14]=J,L[15]=g):g=L[15];let es=g;L[16]!==ee?(p=e=>{"ArrowLeft"===e.key&&(e.stopPropagation(),eo(!1),requestAnimationFrame(()=>{ee?.focus()}))},L[16]=ee,L[17]=p):p=L[17];let ec=p;L[18]!==a?(h=e=>{a?.(e),en("first"),eo(!0)},L[18]=a,L[19]=h):h=L[19];let eu=h;L[20]!==K?(m=()=>{eo(!1),K?.()},L[20]=K,L[21]=m):m=L[21];let ef=m;L[22]===Symbol.for("react.memo_cache_sentinel")?(y=()=>el(!0),L[22]=y):y=L[22];let eb=y;L[23]!==U||L[24]!==ee?(v=()=>U(ee),w=[U,ee],L[23]=U,L[24]=ee,L[25]=v,L[26]=w):(v=L[25],w=L[26]),(0,eB.useEffect)(v,w),L[27]!==ei?(k=()=>{ei||eo(!1)},x=[ei],L[27]=ei,L[28]=k,L[29]=x):(k=L[28],x=L[29]),(0,eB.useEffect)(k,x),L[30]!==er?($=()=>{er||el(!1)},S=[er],L[30]=er,L[31]=$,L[32]=S):($=L[31],S=L[32]),(0,eB.useEffect)($,S),L[33]!==ea?(R=()=>{if(!ea)return;let e=requestAnimationFrame(()=>en(null));return()=>cancelAnimationFrame(e)},_=[ea],L[33]=ea,L[34]=R,L[35]=_):(R=L[34],_=L[35]),(0,eB.useEffect)(R,_),L[36]!==r||L[37]!==ef||L[38]!==ec||L[39]!==o||L[40]!==X||L[41]!==q||L[42]!==Z||L[43]!==ea?(z=(0,eF.jsx)(aJ,{...o,onClickOutside:X,onEscape:q,onItemClick:ef,onKeyDown:ec,onMouseEnter:eb,registerElement:Z,shouldFocus:ea,children:r}),L[36]=r,L[37]=ef,L[38]=ec,L[39]=o,L[40]=X,L[41]=q,L[42]=Z,L[43]=ea,L[44]=z):z=L[44];let eg=z;L[45]===Symbol.for("react.memo_cache_sentinel")?(j=e=>{let t=e.currentTarget;if(document.activeElement===t&&"ArrowRight"===e.key){en("first"),eo(!0),el(!0);return}},L[45]=j):j=L[45];let ep=j,eh="button"===F?ed:void 0,em="button"!==F?ed:void 0,ey=!ed&&ei?"":void 0;L[46]!==P?(C=tn(P),L[46]=P,L[47]=C):C=L[47];let ev="button"===F?"button":void 0;return L[48]!==t||L[49]!==A?(E=t&&(0,eF.jsxs)(rE,{size:A,children:[(0,eB.isValidElement)(t)&&t,(0,eD.isValidElementType)(t)&&(0,eF.jsx)(t,{})]}),L[48]=t,L[49]=A,L[50]=E):E=L[50],L[51]!==A||L[52]!==b?(I=(0,eF.jsx)(rj,{flex:1,children:(0,eF.jsx)(rE,{size:A,textOverflow:"ellipsis",weight:"medium",children:b})}),L[51]=A,L[52]=b,L[53]=I):I=L[53],L[54]===Symbol.for("react.memo_cache_sentinel")?(N=(0,eF.jsx)(eV.ChevronRightIcon,{}),L[54]=N):N=L[54],L[55]!==A?(H=(0,eF.jsx)(rE,{size:A,children:N}),L[55]=A,L[56]=H):H=L[56],L[57]!==B||L[58]!==D||L[59]!==E||L[60]!==I||L[61]!==H?(T=(0,eF.jsxs)(rT,{gap:D,padding:B,children:[E,I,H]}),L[57]=B,L[58]=D,L[59]=E,L[60]=I,L[61]=H,L[62]=T):T=L[62],L[63]!==F||L[64]!==eu||L[65]!==es||L[66]!==i||L[67]!==G||L[68]!==eh||L[69]!==em||L[70]!==ey||L[71]!==C||L[72]!==ev||L[73]!==T||L[74]!==V?(M=(0,eF.jsx)(a1,{"data-as":F,"data-ui":"MenuGroup",forwardedAs:F,...i,"aria-pressed":eh,"data-pressed":em,"data-selected":ey,$radius:C,$tone:V,$scheme:G,onClick:eu,onKeyDown:ep,onMouseEnter:es,ref:et,tabIndex:-1,type:ev,children:T}),L[63]=F,L[64]=eu,L[65]=es,L[66]=i,L[67]=G,L[68]=eh,L[69]=em,L[70]=ey,L[71]=C,L[72]=ev,L[73]=T,L[74]=V,L[75]=M):M=L[75],L[76]!==eg||L[77]!==er||L[78]!==n||L[79]!==M?(O=(0,eF.jsx)(o4,{...n,content:eg,"data-ui":"MenuGroup__popover",open:er,children:M}),L[76]=eg,L[77]=er,L[78]=n,L[79]=M,L[80]=O):O=L[80],O}a1.displayName="Selectable",a3.displayName="MenuGroup";let a5=(0,eB.forwardRef)(function(e,t){let r,o,a,n,i,d,l,s,c,u,f,b,g,p,h,m,y,v,w,k,x,$,S,R,_,z,j,C,E,I,N,H,T,M,O=(0,eA.c)(75);O[0]!==e?({as:m,children:a,disabled:n,fontSize:y,hotkeys:i,icon:r,iconRight:o,onClick:d,padding:v,paddingX:f,paddingY:b,paddingTop:u,paddingRight:c,paddingBottom:l,paddingLeft:s,pressed:g,radius:w,selected:h,space:k,text:$,tone:x,...p}=e,O[0]=e,O[1]=r,O[2]=o,O[3]=a,O[4]=n,O[5]=i,O[6]=d,O[7]=l,O[8]=s,O[9]=c,O[10]=u,O[11]=f,O[12]=b,O[13]=g,O[14]=p,O[15]=h,O[16]=m,O[17]=y,O[18]=v,O[19]=w,O[20]=k,O[21]=x,O[22]=$):(r=O[1],o=O[2],a=O[3],n=O[4],i=O[5],d=O[6],l=O[7],s=O[8],c=O[9],u=O[10],f=O[11],b=O[12],g=O[13],p=O[14],h=O[15],m=O[16],y=O[17],v=O[18],w=O[19],k=O[20],x=O[21],$=O[22]);let L=void 0===m?"button":m,F=void 0===y?1:y,A=void 0===v?3:v,B=void 0===w?2:w,P=void 0===k?3:k,D=void 0===x?"default":x,{scheme:V}=tm(),W=a2(),{activeElement:G,mount:Y,onItemClick:U,onItemMouseEnter:X,onItemMouseLeave:q}=W,K=X??W.onItemMouseEnter,Q=q??W.onItemMouseLeave,[Z,J]=(0,eB.useState)(null),ee=!!G&&G===Z,et=(0,eB.useRef)(null);O[23]===Symbol.for("react.memo_cache_sentinel")?(S=()=>et.current,O[23]=S):S=O[23],(0,eB.useImperativeHandle)(t,S),O[24]!==Y||O[25]!==Z||O[26]!==h?(R=()=>Y(Z,h),_=[Y,Z,h],O[24]=Y,O[25]=Z,O[26]=h,O[27]=R,O[28]=_):(R=O[27],_=O[28]),(0,eB.useEffect)(R,_),O[29]!==n||O[30]!==d||O[31]!==U?(z=e=>{n||(d&&d(e),U&&U())},O[29]=n,O[30]=d,O[31]=U,O[32]=z):z=O[32];let er=z;O[33]!==A||O[34]!==l||O[35]!==s||O[36]!==c||O[37]!==u||O[38]!==f||O[39]!==b?(j={padding:A,paddingX:f,paddingY:b,paddingTop:u,paddingRight:c,paddingBottom:l,paddingLeft:s},O[33]=A,O[34]=l,O[35]=s,O[36]=c,O[37]=u,O[38]=f,O[39]=b,O[40]=j):j=O[40];let eo=j;O[41]!==F?(C=tn(F).map(a4),O[41]=F,O[42]=C):C=O[42];let ea=C;O[43]===Symbol.for("react.memo_cache_sentinel")?(E=e=>{et.current=e,J(e)},O[43]=E):E=O[43];let en=E,ei="button"!==L&&g?"":void 0,ed=ee?"":void 0,el=n?"":void 0;O[44]!==B?(I=tn(B),O[44]=B,O[45]=I):I=O[45],O[46]===Symbol.for("react.memo_cache_sentinel")?(N=tn(0),O[46]=N):N=O[46];let es=n?"default":D,ec="button"===L?"button":void 0;return O[47]!==r||O[48]!==o||O[49]!==F||O[50]!==i||O[51]!==ea||O[52]!==eo||O[53]!==P||O[54]!==$?(H=(r||$||o)&&(0,eF.jsxs)(rT,{as:"span",gap:P,align:"center",...eo,children:[r&&(0,eF.jsxs)(rE,{size:F,children:[(0,eB.isValidElement)(r)&&r,(0,eD.isValidElementType)(r)&&(0,eF.jsx)(r,{})]}),$&&(0,eF.jsx)(rj,{flex:1,children:(0,eF.jsx)(rE,{size:F,textOverflow:"ellipsis",weight:"medium",children:$})}),i&&(0,eF.jsx)(aY,{fontSize:ea,keys:i,style:{marginTop:-4,marginBottom:-4}}),o&&(0,eF.jsxs)(rE,{size:F,children:[(0,eB.isValidElement)(o)&&o,(0,eD.isValidElementType)(o)&&(0,eF.jsx)(o,{})]})]}),O[47]=r,O[48]=o,O[49]=F,O[50]=i,O[51]=ea,O[52]=eo,O[53]=P,O[54]=$,O[55]=H):H=O[55],O[56]!==a||O[57]!==eo?(T=a&&(0,eF.jsx)(rj,{as:"span",...eo,children:a}),O[56]=a,O[57]=eo,O[58]=T):T=O[58],O[59]!==L||O[60]!==n||O[61]!==er||O[62]!==K||O[63]!==Q||O[64]!==p||O[65]!==V||O[66]!==ei||O[67]!==ed||O[68]!==el||O[69]!==I||O[70]!==es||O[71]!==ec||O[72]!==H||O[73]!==T?(M=(0,eF.jsxs)(a1,{"data-ui":"MenuItem",role:"menuitem",...p,"data-pressed":ei,"data-selected":ed,"data-disabled":el,forwardedAs:L,$radius:I,$padding:N,$tone:es,$scheme:V,disabled:n,onClick:er,onMouseEnter:K,onMouseLeave:Q,ref:en,tabIndex:-1,type:ec,children:[H,T]}),O[59]=L,O[60]=n,O[61]=er,O[62]=K,O[63]=Q,O[64]=p,O[65]=V,O[66]=ei,O[67]=ed,O[68]=el,O[69]=I,O[70]=es,O[71]=ec,O[72]=H,O[73]=T,O[74]=M):M=O[74],M});function a4(e){return e-1}a5.displayName="ForwardRef(MenuItem)";let a6=(0,eP.styled)(rD).withConfig({displayName:"CustomButton",componentId:"sc-1kns779-0"})`max-width:100%;`,a7=(0,eB.forwardRef)(function(e,t){let r,o,a,n,i,d,l,s,c,u,f,b,g,p,h,m,y=(0,eA.c)(30);y[0]!==e?({icon:o,id:a,focused:r,fontSize:c,label:n,onClick:i,onFocus:d,padding:u,selected:s,...l}=e,y[0]=e,y[1]=r,y[2]=o,y[3]=a,y[4]=n,y[5]=i,y[6]=d,y[7]=l,y[8]=s,y[9]=c,y[10]=u):(r=y[1],o=y[2],a=y[3],n=y[4],i=y[5],d=y[6],l=y[7],s=y[8],c=y[9],u=y[10]);let v=void 0===c?1:c,w=void 0===u?2:u,k=(0,eB.useRef)(null),x=(0,eB.useRef)(!1);y[11]===Symbol.for("react.memo_cache_sentinel")?(f=()=>k.current,y[11]=f):f=y[11],(0,eB.useImperativeHandle)(t,f),y[12]===Symbol.for("react.memo_cache_sentinel")?(b=()=>{x.current=!1},y[12]=b):b=y[12];let $=b;y[13]!==d?(g=e=>{x.current=!0,d&&d(e)},y[13]=d,y[14]=g):g=y[14];let S=g;y[15]!==r?(p=()=>{r&&!x.current&&(k.current&&k.current.focus(),x.current=!0)},h=[r],y[15]=r,y[16]=p,y[17]=h):(p=y[16],h=y[17]),(0,eB.useEffect)(p,h);let R=s?"true":"false",_=s?0:-1;return y[18]!==v||y[19]!==S||y[20]!==o||y[21]!==a||y[22]!==n||y[23]!==i||y[24]!==w||y[25]!==l||y[26]!==s||y[27]!==R||y[28]!==_?(m=(0,eF.jsx)(a6,{"data-ui":"Tab",...l,"aria-selected":R,fontSize:v,icon:o,id:a,mode:"bleed",onClick:i,onBlur:$,onFocus:S,padding:w,ref:k,role:"tab",selected:s,tabIndex:_,text:n,type:"button"}),y[18]=v,y[19]=S,y[20]=o,y[21]=a,y[22]=n,y[23]=i,y[24]=w,y[25]=l,y[26]=s,y[27]=R,y[28]=_,y[29]=m):m=y[29],m});a7.displayName="ForwardRef(Tab)";let a8=(0,eP.styled)(oc).withConfig({displayName:"CustomInline",componentId:"sc-5cm04m-0"})`& > div{display:inline-block;vertical-align:middle;max-width:100%;box-sizing:border-box;}`,a9=(0,eB.forwardRef)(function(e,t){let r,o,a,n,i,d=(0,eA.c)(15);d[0]!==e?({children:r,...o}=e,d[0]=e,d[1]=r,d[2]=o):(r=d[1],o=d[2]);let[l,s]=(0,eB.useState)(-1);if(d[3]!==r||d[4]!==l){let e,t=eB.Children.toArray(r).filter(eB.isValidElement);d[6]!==l?(e=(e,t)=>(0,eB.cloneElement)(e,{focused:l===t,key:t,onFocus:()=>s(t)}),d[6]=l,d[7]=e):e=d[7],a=t.map(e),d[3]=r,d[4]=l,d[5]=a}else a=d[5];let c=a,u=c.length;d[8]!==u?(n=e=>{"ArrowLeft"===e.key&&s(e=>(e+u-1)%u),"ArrowRight"===e.key&&s(e=>(e+1)%u)},d[8]=u,d[9]=n):n=d[9];let f=n;return d[10]!==f||d[11]!==t||d[12]!==o||d[13]!==c?(i=(0,eF.jsx)(a8,{"data-ui":"TabList",...o,onKeyDown:f,ref:t,role:"tablist",children:c}),d[10]=f,d[11]=t,d[12]=o,d[13]=c,d[14]=i):i=d[14],i});a9.displayName="ForwardRef(TabList)",e.s(["Arrow",()=>ok,"Avatar",()=>rv,"AvatarCounter",()=>rx,"AvatarStack",()=>r_,"Badge",()=>rN,"BoundaryElementProvider",()=>o$,"Box",()=>rj,"Button",()=>rD,"Card",()=>rW,"Checkbox",()=>r7,"Code",()=>ot,"ConditionalWrapper",()=>oz,"Container",()=>oa,"EMPTY_ARRAY",()=>eZ,"EMPTY_RECORD",()=>eJ,"ElementQuery",()=>oj,"Flex",()=>rT,"Grid",()=>oi,"Heading",()=>ol,"Hotkeys",()=>aY,"Inline",()=>oc,"KBD",()=>ob,"Label",()=>ru,"Layer",()=>oL,"LayerProvider",()=>oI,"Menu",()=>aJ,"MenuDivider",()=>a0,"MenuGroup",()=>a3,"MenuItem",()=>a5,"Popover",()=>o4,"Portal",()=>oD,"PortalProvider",()=>oV,"Radio",()=>o8,"Select",()=>an,"Spinner",()=>rL,"SrOnly",()=>oX,"Stack",()=>al,"Switch",()=>ag,"Tab",()=>a7,"TabList",()=>a9,"Text",()=>rE,"TextArea",()=>av,"TextInput",()=>aI,"ThemeColorProvider",()=>ty,"ThemeProvider",()=>th,"Tooltip",()=>aV,"TooltipDelayGroupContext",()=>aA,"TooltipDelayGroupProvider",()=>aB,"VirtualList",()=>oQ,"_ResizeObserver",()=>rX,"_cardColorStyle",()=>rF,"_elementSizeObserver",()=>rq,"_fillCSSObject",()=>tr,"_getArrayProp",()=>tn,"_getResponsiveSpace",()=>ti,"_isEnterToClickElement",()=>e3,"_isScrollable",()=>tt,"_responsive",()=>ta,"containsOrEqualsElement",()=>te,"createColorTheme",()=>f,"createGlobalScopedContext",()=>tg,"hexToRgb",()=>em,"hslToRgb",()=>ew,"isHTMLAnchorElement",()=>e4,"isHTMLButtonElement",()=>e7,"isHTMLElement",()=>e5,"isHTMLInputElement",()=>e6,"isHTMLSelectElement",()=>e8,"isHTMLTextAreaElement",()=>e9,"isRecord",()=>oS,"multiply",()=>ef,"parseColor",()=>ex,"rem",()=>to,"responsiveCodeFontStyle",()=>tl,"responsiveHeadingFont",()=>ts,"responsiveLabelFont",()=>tc,"responsivePaddingStyle",()=>ri,"responsiveRadiusStyle",()=>rd,"responsiveTextAlignStyle",()=>tu,"responsiveTextFont",()=>tf,"rgbToHex",()=>ey,"rgbToHsl",()=>ev,"rgba",()=>e$,"screen",()=>eb,"studioTheme",()=>eQ,"useBoundaryElement",()=>o_,"useClickOutsideEvent",()=>rG,"useCustomValidity",()=>rU,"useElementSize",()=>rK,"useGlobalKeyDown",()=>rQ,"useLayer",()=>oT,"useMatchMedia",()=>rZ,"useMediaIndex",()=>r0,"usePortal",()=>oP,"usePrefersDark",()=>r1,"usePrefersReducedMotion",()=>r3,"useRootTheme",()=>tm,"useTheme",()=>tv,"useTheme_v2",()=>tw,"useTooltipDelayGroup",()=>aP],725917)}]);