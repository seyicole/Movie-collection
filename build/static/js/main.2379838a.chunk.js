(this["webpackJsonpreact-movie"]=this["webpackJsonpreact-movie"]||[]).push([[0],{22:function(e,t,a){e.exports=a(46)},27:function(e,t,a){},28:function(e,t,a){},34:function(e,t,a){},35:function(e,t,a){},36:function(e,t,a){},37:function(e,t,a){},38:function(e,t,a){},39:function(e,t,a){},40:function(e,t,a){},41:function(e,t,a){},42:function(e,t,a){},43:function(e,t,a){},44:function(e,t,a){},45:function(e,t,a){},46:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),r=a(20),o=a.n(r),m=(a(27),a(6)),i=a(1),l=(a(28),function(){return c.a.createElement("div",{className:"rmdb-header"},c.a.createElement("div",{className:"rmdb-header-content"},c.a.createElement(m.b,{to:"/"},c.a.createElement("img",{className:"rmdb-logo",src:"./images/reactMovie_logo.png",alt:"rmdb-logo"}),c.a.createElement("img",{className:"rmdb-tmdb-logo",src:"./images/tmdb_logo.png",alt:"tmdb-logo"}))))}),s=function(){return c.a.createElement("div",null,c.a.createElement("h1",null,"Ooooooops!  This page doesn't exist"))},u=a(17),d=a(10),h=a(11),v=a(13),g=a(12),p="https://api.themoviedb.org/3/",b="019e8f375549e0bbd4a4191862ebc88f",f="http://image.tmdb.org/t/p/",E=(a(34),function(e){return c.a.createElement("div",{className:"rmdb-heroimage",style:{background:"linear-gradient(to bottom, rgba(0,0,0,0)\n                39%,rgba(0,0,0,0)\n                41%,rgba(0,0,0,0.95)\n                100%\n                ),\n                url('".concat(e.image,"'), #1c1c1c ")}},c.a.createElement("div",{className:"rmdb-heroimage-content"},c.a.createElement("div",{className:"rmdb-heroimage-text"},c.a.createElement("h1",null,e.title),c.a.createElement("p",null,e.text))))}),N=a(7),k=a.n(N),y=(a(35),function(e){Object(v.a)(a,e);var t=Object(g.a)(a);function a(){var e;Object(d.a)(this,a);for(var n=arguments.length,c=new Array(n),r=0;r<n;r++)c[r]=arguments[r];return(e=t.call.apply(t,[this].concat(c))).state={value:""},e.timeout=null,e.doSearch=function(t){e.setState({value:t.target.value}),clearTimeout(e.timeout),e.timeout=setTimeout((function(){e.props.callback(e.state.value)}),500)},e}return Object(h.a)(a,[{key:"render",value:function(){return c.a.createElement("div",{className:"rmdb-searchbar"},c.a.createElement("div",{className:"rmdb-searchbar-content"},c.a.createElement(k.a,{className:"rmdb-fa-search",name:"search",size:"2x"}),c.a.createElement("input",{type:"text",className:"rmdb-searchbar-input",placeholder:"Search",onChange:this.doSearch,value:this.state.value})))}}]),a}(n.Component)),I=(a(36),function(e){return c.a.createElement("div",{className:"rmdb-grid"},e.header&&!e.loading?c.a.createElement("h1",null,e.header):null,c.a.createElement("div",{className:"rmdb-grid-content"},e.children.map((function(e,t){return c.a.createElement("div",{key:t,className:"rmdb-grid-element"},e)}))))}),_=(a(37),function(e){return c.a.createElement("div",{className:"rmdb-moviethumb"},e.clickable?c.a.createElement(m.b,{to:{pathname:"/".concat(e.movieId),movieName:"".concat(e.movieName)}},c.a.createElement("img",{src:e.image,alt:"moviethumb"})):c.a.createElement("img",{src:e.image,alt:"moviethumb"}))}),S=(a(38),function(e){return c.a.createElement("div",{className:"rmdb-loadmorebtn",onClick:e.onClick},c.a.createElement("p",null,e.text))}),j=(a(39),function(){return c.a.createElement("div",{className:"loader"})}),w=(a(40),function(e){Object(v.a)(a,e);var t=Object(g.a)(a);function a(){var e;Object(d.a)(this,a);for(var n=arguments.length,c=new Array(n),r=0;r<n;r++)c[r]=arguments[r];return(e=t.call.apply(t,[this].concat(c))).state={movies:[],heroImage:null,loading:!1,currentPage:0,totalPages:0,searchTerm:""},e.searchItems=function(t){console.log(t);var a="";e.setState({movies:[],loading:!0,searchTerm:t}),a=""===t?"".concat(p,"movie/popular?api_key=").concat(b,"&language=en-US&page=1"):"".concat(p,"search/movie?api_key=").concat(b,"&language=en-US&query=").concat(t),e.fetchItems(a)},e.loadMoreItems=function(){var t="";e.setState({loading:!0}),t=""===e.state.searchTerm?"".concat(p,"movie/popular?api_key=").concat(b,"&language=en-US&page=").concat(e.state.currentPage+1):"".concat(p,"search/movie?api_key").concat(b,"&language=en-US&query=").concat(e.state.searchTerm,"&page=").concat(e.state.currentPage+1),e.fetchItems(t),console.log(t)},e.fetchItems=function(t){fetch(t).then((function(e){return e.json()})).then((function(t){console.log(t),e.setState({movies:[].concat(Object(u.a)(e.state.movies),Object(u.a)(t.results)),heroImage:e.state.heroImage||t.results[0],loading:!1,currentPage:t.page,totalPages:t.total_pages})}))},e}return Object(h.a)(a,[{key:"componentDidMount",value:function(){this.setState({loading:!0});var e="".concat(p,"movie/popular?api_key=").concat(b,"&language=en-US&page=1");this.fetchItems(e)}},{key:"render",value:function(){return c.a.createElement("div",{className:"rmdb.home"},this.state.heroImage?c.a.createElement("div",null,c.a.createElement(E,{image:"".concat(f).concat("w1280").concat(this.state.heroImage.backdrop_path),title:this.state.heroImage.original_title,text:this.state.heroImage.overview}),c.a.createElement(y,{callback:this.searchItems})):null,c.a.createElement("div",{className:" rmdb-home-grid"},c.a.createElement(I,{header:this.state.searchTerm?"Search Result":"Popular Movies",loading:this.state.loading},this.state.movies.map((function(e,t){return c.a.createElement(_,{key:t,clickable:!0,image:e.poster_path?"".concat(f).concat("w500").concat(e.poster_path):"./images/no_image.jpg",movieId:e.id,movieName:e.original_title})}))),this.state.loading?c.a.createElement(j,null):null,this.state.currentPage<=this.state.totalPages&&!this.state.loading?c.a.createElement(S,{text:"Load More",onClick:this.loadMoreItems}):null))}}]),a}(n.Component)),O=(a(41),function(e){return c.a.createElement("div",{className:"rmdb-navigation"},c.a.createElement("div",{className:"rmdb-navigation-content"},c.a.createElement(m.b,{to:"/"},c.a.createElement("p",null,"Home")),c.a.createElement("p",null,"/"),c.a.createElement("p",null,e.movie)))}),x=(a(42),function(e){return c.a.createElement("div",{className:"rmdb-movieinfo",style:{background:e.movie.backdrop_path?"url('".concat(f).concat("w1280").concat(e.movie.backdrop_path,"')"):"#000"}},c.a.createElement("div",{className:"rmdb-movieinfo-content"},c.a.createElement("div",{className:"rmdb-movieinfo-thumb"},c.a.createElement(_,{image:e.movie.poster_path?"".concat(f).concat("w500").concat(e.movie.poster_path):"./images/no_image.jpg",clickable:!1}),c.a.createElement("div",{className:"rmdb-movieinfo-text"},c.a.createElement("h1",null,e.movie.title),c.a.createElement("h3",null,"PLOT"),c.a.createElement("p",null,e.movie.overview),c.a.createElement("h3",null,"RMDB RATING"),c.a.createElement("div",{className:"rmdb-rating"},c.a.createElement("meter",{min:"0",max:"100",optimum:"100",low:"40",high:"70",value:10*e.movie.vote_average}),c.a.createElement("p",{className:"rmdb-score"},e.movie.vote_average)),e.directors.length>1?c.a.createElement("h3",null,"DIRECTORS"):c.a.createElement("h3",null,"DIRECTOR"),e.directors.map((function(e,t){return c.a.createElement("p",{key:t,className:"rmdb-director"},e.name)}))),c.a.createElement(k.a,{className:"fa-film",name:"film",size:"5x"}))))}),T=function(e){return new Intl.NumberFormat("en-US",{style:"currency",currency:"USD",minimumFractionDigits:0}).format(e)},M=(a(43),function(e){return c.a.createElement("div",{className:"rmdb-movieinfobar"},c.a.createElement("div",{className:"rmdb-movieinfobar-content"},c.a.createElement("div",{className:"rmdb-movieinfobar-content-col"},c.a.createElement(k.a,{className:"fa-time",name:"clock-o",size:"2x"}),c.a.createElement("span",{className:"rmdb-movieinfobar-info"},"Running time: ",function(e){var t=Math.floor(e/60),a=e%60;return"".concat(t,"h ").concat(a,"m")}(e.time))),c.a.createElement("div",{className:"rmdb-movieinfobar-content-col"},c.a.createElement(k.a,{className:"fa-budget",name:"money",size:"2x"}),c.a.createElement("span",{className:"rmdb-movieinfobar-info"},"Budget: ",T(e.budget))),c.a.createElement("div",{className:"rmdb-movieinfobar-content-col"},c.a.createElement(k.a,{className:"fa-revenue",name:"ticket",size:"2x"}),c.a.createElement("span",{className:"rmdb-movieinfobar-info"},"Revenue: ",T(e.revenue)))))}),P=(a(44),function(e){return c.a.createElement("div",{className:"rmdb-actor"},c.a.createElement("img",{src:e.actor.profile_path?"".concat(f).concat("w154").concat(e.actor.profile_path):"./images/no_images.jpg",alt:"actorthumb"}),c.a.createElement("span",{className:"rmdb-actor-name"},e.actor.name),c.a.createElement("span",{className:"rmdb-actor-character"},e.actor.character))}),C=(a(45),function(e){Object(v.a)(a,e);var t=Object(g.a)(a);function a(){var e;Object(d.a)(this,a);for(var n=arguments.length,c=new Array(n),r=0;r<n;r++)c[r]=arguments[r];return(e=t.call.apply(t,[this].concat(c))).state={movie:null,actors:null,directors:[],loading:!1},e}return Object(h.a)(a,[{key:"componentDidMount",value:function(){this.setState({loading:!0});var e="".concat(p,"movie/").concat(this.props.match.params.movieId,"?api_key=").concat(b,"&language=en-US");this.fetchItems(e)}},{key:"fetchItems",value:function(e){var t=this;fetch(e).then((function(e){return e.json()})).then((function(e){console.log(e),e.status_code?t.setState({loading:!1}):t.setState({movie:e},(function(){var e="".concat(p,"movie/").concat(t.props.match.params.movieId,"/credits?api_key=").concat(b);fetch(e).then((function(e){return e.json()})).then((function(e){var a=e.crew.filter((function(e){return"Director"===e.job}));t.setState({actors:e.cast,directors:a,loading:!1})}))}))})).catch((function(e){return console.error("Error:",e)}))}},{key:"render",value:function(){return c.a.createElement("div",{className:"rmdb-movie"},this.state.movie?c.a.createElement("div",null,c.a.createElement(O,{movie:this.props.location.movieName}),c.a.createElement(x,{movie:this.state.movie,directors:this.state.directors}),c.a.createElement(M,{time:this.state.movie.runtime,budget:this.state.movie.budget,revenue:this.state.movie.revenue})):null,this.state.actors?c.a.createElement("div",{className:"rmdb-movie-grid"},c.a.createElement(I,{header:"Actors"},this.state.actors.map((function(e,t){return c.a.createElement(P,{key:t,actor:e})})))):null,this.state.actors||this.state.loading?null:c.a.createElement("h1",null,"No Movie Found!"),this.state.loading?c.a.createElement(j,null):null,"}")}}]),a}(n.Component)),R=function(){return c.a.createElement("div",{className:"App"},c.a.createElement(m.a,null,c.a.createElement(c.a.Fragment,null,c.a.createElement(l,null),c.a.createElement(i.c,null,c.a.createElement(i.a,{path:"/",component:w,exact:!0}),c.a.createElement(i.a,{path:"/:movieId",component:C,exact:!0}),c.a.createElement(i.a,{component:s})))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(R,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[22,1,2]]]);
//# sourceMappingURL=main.2379838a.chunk.js.map