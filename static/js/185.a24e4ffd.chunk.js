"use strict";(self.webpackChunkmy_app=self.webpackChunkmy_app||[]).push([[185],{2039:function(e,n,a){var t=a(2791),r=a(4554),c=a(2824),i=a(184),o=function(e){var n=e.page,a=e.handlePage,t=e.count;return console.log("Pagination"),(0,i.jsx)(r.Z,{my:2,children:(0,i.jsx)(c.Z,{count:t,page:n,onChange:function(e,n){return a(n)}})})};n.Z=t.memo(o)},2185:function(e,n,a){a.r(n),a.d(n,{default:function(){return j}});var t=a(885),r=a(1889),c=a(2791),i=a(6030),o=a(6871),s=a(2827),h=a(7621),u=a(6647),l=a(2169),d=a(9504),p=a(890),g=a(184),m=function(e){var n=e.item,a=(0,o.s0)();console.log("CardPeople");return(0,g.jsx)("div",{children:(0,g.jsx)(h.Z,{className:"CardPeople",sx:{maxWidth:300},onClick:function(){a("/people/".concat(n.id))},children:(0,g.jsxs)(u.Z,{children:[(0,g.jsx)(l.Z,{component:"img",height:"auto",image:"https://starwars-visualguide.com/assets/img/characters/".concat(n.id,".jpg"),alt:"green iguana"}),(0,g.jsxs)(d.Z,{children:[(0,g.jsx)(p.Z,{gutterBottom:!0,variant:"h5",component:"div",children:n.name}),(0,g.jsx)(p.Z,{variant:"body2",color:"text.secondary",children:n.gender})]})]})})})},f=c.memo(m),v=a(2039),x=a(4317),Z=function(){var e=(0,i.I0)(),n=(0,i.v9)((function(e){return e.peoples.results})),a=(0,i.v9)((function(e){return e.peoples.count})),h=(0,c.useState)(1),u=(0,t.Z)(h,2),l=u[0],d=u[1],p=(0,c.useState)(""),m=(0,t.Z)(p,2),Z=m[0],j=m[1],P=(0,o.s0)(),w=(0,o.TH)();console.log("Peoples");var b=function(e){P("/peoples/?search=".concat(Z,"&page=").concat(e)),d(e)};return(0,c.useEffect)((function(){var n=new URLSearchParams(w.search).get("search")||"",a=new URLSearchParams(w.search).get("page")||1;e((0,s.FS)(n,a))}),[]),(0,c.useEffect)((function(){var n=new URLSearchParams(w.search).get("search")||"",a=new URLSearchParams(w.search).get("page")||1;e((0,s.FS)(n,a)),l!==a&&d(Number(a)),Z!==n&&j(n)}),[w]),(0,g.jsxs)("div",{children:[(0,g.jsx)(x.Z,{search:Z,handleSearch:function(e){P("/peoples/?search=".concat(e,"&page=1")),d(1),j(e)}}),(0,g.jsx)(v.Z,{count:Math.ceil(a/10),page:l,handlePage:b}),(0,g.jsx)(r.ZP,{container:!0,spacing:2,children:n.length?n.map((function(e){return(0,g.jsx)(r.ZP,{item:!0,xs:12,sm:6,md:4,lg:3,children:(0,g.jsx)(f,{item:e})},e.id)})):(0,g.jsx)("div",{children:"Not Items"})}),(0,g.jsx)(v.Z,{count:Math.ceil(a/10),page:l,handlePage:b})]})},j=c.memo(Z)},4317:function(e,n,a){var t=a(4942),r=a(5901),c=a(5403),i=a(7630),o=a(2065),s=a(2791),h=a(4554),u=a(184),l=(0,i.ZP)("div")((function(e){var n=e.theme;return(0,t.Z)({position:"relative",borderRadius:n.shape.borderRadius,backgroundColor:(0,o.Fq)(n.palette.common.white,.15),"&:hover":{backgroundColor:(0,o.Fq)(n.palette.common.white,.25)},marginLeft:0,width:"100%"},n.breakpoints.up("sm"),{marginLeft:n.spacing(1),width:"auto"})})),d=(0,i.ZP)("div")((function(e){return{padding:e.theme.spacing(0,2),height:"100%",position:"absolute",pointerEvents:"none",display:"flex",alignItems:"center",justifyContent:"center"}})),p=(0,i.ZP)(r.ZP)((function(e){var n=e.theme;return{color:"inherit","& .MuiInputBase-input":(0,t.Z)({padding:n.spacing(1,1,1,0),paddingLeft:"calc(1em + ".concat(n.spacing(4),")"),transition:n.transitions.create("width"),width:"100%"},n.breakpoints.up("sm"),{width:"12ch","&:focus":{width:"20ch"}})}})),g=function(e){var n=e.search,a=e.handleSearch;return console.log("Search"),(0,u.jsx)(h.Z,{my:2,children:(0,u.jsxs)(l,{children:[(0,u.jsx)(d,{children:(0,u.jsx)(c.Z,{})}),(0,u.jsx)(p,{placeholder:"Search\u2026",inputProps:{"aria-label":"search"},value:n,onChange:function(e){return a(e.target.value)}})]})})};n.Z=s.memo(g)}}]);
//# sourceMappingURL=185.a24e4ffd.chunk.js.map