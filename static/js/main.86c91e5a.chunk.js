(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{22:function(e,t,a){},27:function(e,t,a){e.exports=a(38)},33:function(e,t,a){},38:function(e,t,a){"use strict";a.r(t);var n=a(0),s=a.n(n),r=a(24),c=a.n(r),o=(a(22),a(9)),i=a.n(o),l=a(15),u=a(12),p=a(3),m=a(4),h=a(6),d=a(5),f=a(7),g=a(16),b=a(11),y=(a(33),function(e){function t(){var e,a;Object(p.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(h.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(r)))).showPreviousButton=function(){if(a.props.page.currentPage>1)return s.a.createElement("button",{className:"previous",onClick:function(){return a.props.changePage(-1)}},"<")},a.showNextButton=function(){if(a.props.page.currentPage<a.props.page.totalPages)return s.a.createElement("button",{className:"next",onClick:function(){return a.props.changePage(1)}},">")},a}return Object(f.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){return s.a.createElement("header",null,s.a.createElement("div",{className:"header-wrapper"},s.a.createElement("h1",null,"The Hacker News"),s.a.createElement("div",{className:"paginate"},this.showPreviousButton(),s.a.createElement("span",{className:"page-number"},this.props.page.currentPage),this.showNextButton())))}}]),t}(s.a.Component)),w=function(e){function t(){return Object(p.a)(this,t),Object(h.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(f.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){var e=this.props.newsItem,t=e.id,a=e.by,n=e.time,r=e.title;return s.a.createElement("li",{className:"news-item"},s.a.createElement("span",{className:"title"},s.a.createElement(g.b,{to:{pathname:"/stories/"+t,state:{data:this.props.newsItem}}},r)),s.a.createElement("span",{className:"author"},"Author: "+a+" | "),s.a.createElement("span",{className:"time"},"Published on: "+new Date(n).toLocaleString()))}}]),t}(s.a.Component),v=function(e){function t(){var e,a;Object(p.a)(this,t);for(var n=arguments.length,s=new Array(n),r=0;r<n;r++)s[r]=arguments[r];return(a=Object(h.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(s)))).state={news:[]},a}return Object(f.a)(t,e),Object(m.a)(t,[{key:"componentDidMount",value:function(){var e=this;this.props.displayData.map(function(){var t=Object(u.a)(i.a.mark(function t(a){var n,s;return i.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("https://hacker-news.firebaseio.com/v0/item/"+a+".json");case 2:return n=t.sent,t.next=5,n.json();case 5:s=t.sent,e.setState({news:[].concat(Object(l.a)(e.state.news),[s])});case 7:case"end":return t.stop()}},t)}));return function(e){return t.apply(this,arguments)}}())}},{key:"componentDidUpdate",value:function(e,t){var a=this;e.displayData!==this.props.displayData&&(this.setState({news:[]}),this.props.displayData.map(function(){var e=Object(u.a)(i.a.mark(function e(t){var n,s;return i.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://hacker-news.firebaseio.com/v0/item/"+t+".json");case 2:return n=e.sent,e.next=5,n.json();case 5:s=e.sent,a.setState({news:[].concat(Object(l.a)(a.state.news),[s])});case 7:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}()))}},{key:"render",value:function(){return s.a.createElement("div",{className:"news-list-wrapper"},s.a.createElement("ul",{className:"news-list"},this.state.news.map(function(e){return s.a.createElement(w,{newsItem:e,key:e.id})})))}}]),t}(s.a.Component),j=function(e){function t(){var e,a;Object(p.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(h.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(r)))).state={data:{},isLoaded:!1},a.displayDecendantStories=function(e){if(e&&e.length>0)return s.a.createElement("li",{className:"decendants"},e.map(function(e,a){return s.a.createElement(t,{storyId:e,key:a})}))},a}return Object(f.a)(t,e),Object(m.a)(t,[{key:"componentDidMount",value:function(){var e=Object(u.a)(i.a.mark(function e(){var t,a;return i.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://hacker-news.firebaseio.com/v0/item/"+this.props.storyId+".json");case 2:return t=e.sent,e.next=5,t.json();case 5:a=e.sent,this.setState({data:a,isLoaded:!0});case 7:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){return this.state.isLoaded&&"undefined"!==this.state.data.by?s.a.createElement(s.a.Fragment,null,s.a.createElement("li",{className:"story"},s.a.createElement("div",{dangerouslySetInnerHTML:{__html:this.state.data.text}}),s.a.createElement("span",{className:"author"},"comment by: "+this.state.data.by+" | "),s.a.createElement("span",{className:"time"},"Published on: "+new Date(this.state.data.time).toLocaleString())),this.displayDecendantStories(this.state.data.kids)):s.a.createElement(s.a.Fragment,null)}}]),t}(s.a.Component),O=function(e){function t(){var e,a;Object(p.a)(this,t);for(var n=arguments.length,s=new Array(n),r=0;r<n;r++)s[r]=arguments[r];return(a=Object(h.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(s)))).state={stories:[]},a.goBack=function(){a.props.history.goBack()},a.goBackOnOuterDivCLick=function(e){"story-wrapper"===e.target.className&&a.goBack()},a}return Object(f.a)(t,e),Object(m.a)(t,[{key:"componentDidMount",value:function(){var e=this.props.location.state.data.kids||[];this.setState({stories:e})}},{key:"render",value:function(){return s.a.createElement(s.a.Fragment,null,s.a.createElement("button",{className:"button",onClick:this.goBack},s.a.createElement("i",{className:"fa fa-times","aria-hidden":"true"})),s.a.createElement("div",{className:"story-wrapper",onClick:this.goBackOnOuterDivCLick},s.a.createElement("ul",{className:"modal story-modal",style:{height:window.screen.availHeight/1.2+"px"}},s.a.createElement("div",{className:"story-title-wrapper"},s.a.createElement("span",{className:"story-title"},s.a.createElement("a",{href:""!==this.props.location.state.data.url||null!==this.props.location.state.data.url?this.props.location.state.data.url:"#",target:"_blank"},this.props.location.state.data.title))),this.state.stories.map(function(e,t){return s.a.createElement(j,{key:t,storyId:e})}))))}}]),t}(s.a.Component),k=function(e){function t(){var e,a;Object(p.a)(this,t);for(var n=arguments.length,s=new Array(n),r=0;r<n;r++)s[r]=arguments[r];return(a=Object(h.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(s)))).state={newsIds:[],page:0,isLoaded:!1},a.getDisplayData=function(){return a.state.newsIds.slice(20*a.state.page,20*(a.state.page+1))},a.changePage=function(e){a.setState({page:a.state.page+e})},a}return Object(f.a)(t,e),Object(m.a)(t,[{key:"componentDidMount",value:function(){var e=Object(u.a)(i.a.mark(function e(){var t,a=this;return i.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://hacker-news.firebaseio.com/v0/topstories.json");case 2:return t=e.sent,e.next=5,t.json();case 5:e.sent.map(function(e){null===e&&"undefined"===e||a.setState({newsIds:[].concat(Object(l.a)(a.state.newsIds),[e])})}),this.setState({isLoaded:!0});case 8:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){return this.state.isLoaded?s.a.createElement(s.a.Fragment,null,s.a.createElement(y,{changePage:this.changePage,page:{currentPage:this.state.page+1,totalPages:this.state.newsIds.length/20}}),s.a.createElement(g.a,null,s.a.createElement(v,{displayData:this.getDisplayData()}),s.a.createElement(b.a,{exact:!0,path:"/stories/:storyId",component:O}))):s.a.createElement(s.a.Fragment,null)}}]),t}(s.a.Component);c.a.render(s.a.createElement(k,null),document.getElementById("root"))}},[[27,1,2]]]);
//# sourceMappingURL=main.86c91e5a.chunk.js.map