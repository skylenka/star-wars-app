(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{130:function(e,t,a){e.exports=a.p+"static/media/logo.5d5d9eef.svg"},131:function(e,t,a){e.exports=a.p+"static/media/logosw.7bf98244.png"},144:function(e,t,a){e.exports=a(290)},149:function(e,t,a){},290:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(40),c=a.n(r),m=(a(149),a(151),a(26)),o=a(27),u=a(30),i=a(28),s=a(31),E=a(299),d=function(e){return l.a.createElement(l.a.Fragment,null,l.a.createElement(E.a,{content:"Prev",icon:"left arrow",labelPosition:"left",size:"mini",onClick:function(){return e.fnPrev()},disabled:null===e.prev,style:{margin:"10px 10px 10px 0px"}}),l.a.createElement(E.a,{content:"Next",icon:"right arrow",labelPosition:"right",size:"mini",onClick:function(){return e.fnNext()},disabled:null===e.next}))},h=a(297),p=function(e){function t(){var e,a;Object(m.a)(this,t);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return(a=Object(u.a)(this,(e=Object(i.a)(t)).call.apply(e,[this].concat(l)))).state={curr:null,prev:null,next:null,content:[]},a.handleRespond=function(e){e&&fetch(e).then(function(e){if(e.ok)return e.json();throw new Error("B\u0142\u0105d seci!")}).then(function(e){var t=e.results,n=e.next,l=e.previous;a.setState({content:t,next:n,prev:l})}).catch(function(e){console.log(e)})},a.handlePrevButton=function(){a.handleRespond(a.state.prev)},a.handleNextButton=function(){a.handleRespond(a.state.next)},a}return Object(s.a)(t,e),Object(o.a)(t,[{key:"componentDidMount",value:function(){this.handleRespond(this.props.curr)}},{key:"render",value:function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement("h2",null,this.props.name),l.a.createElement(d,{prev:this.state.prev,next:this.state.next,fnPrev:this.handlePrevButton,fnNext:this.handleNextButton}),l.a.createElement(h.a.Group,null,this.state.content.map(this.props.renderCard)))}}]),t}(n.Component),b=a(294),v=function(){return l.a.createElement(p,{name:"Starships",curr:"https://swapi.co/api/starships/",renderCard:function(e){return l.a.createElement(h.a,{key:e.url},l.a.createElement(h.a.Content,null,l.a.createElement(h.a.Header,null,e.name),l.a.createElement(h.a.Meta,null,"Model: ",e.model),l.a.createElement(h.a.Description,null,"Manufacturer: ",e.manufacturer)),l.a.createElement(h.a.Content,{extra:!0},l.a.createElement("div",null,l.a.createElement(b.a,{to:"details/".concat(e.url.match(/\/api\/(.*)/)[1])},"Read more"))))}})},f=function(){return l.a.createElement(p,{name:"People",curr:"https://swapi.co/api/people/",renderCard:function(e){return l.a.createElement(h.a,{key:e.url},l.a.createElement(h.a.Content,null,l.a.createElement(h.a.Header,null,e.name),l.a.createElement(h.a.Meta,null,"Height: ",e.height),l.a.createElement(h.a.Description,null,"Birth: ",e.birth_year),l.a.createElement(h.a.Description,null,"Gender: ",e.gender)),l.a.createElement(h.a.Content,{extra:!0},l.a.createElement("div",null,l.a.createElement(b.a,{to:"details/".concat(e.url.match(/\/api\/(.*)/)[1])},"Read more"))))}})},y=function(){return l.a.createElement(p,{name:"Planets",curr:"https://swapi.co/api/planets/",renderCard:function(e){return l.a.createElement(h.a,{key:e.url},l.a.createElement(h.a.Content,null,l.a.createElement(h.a.Header,null,e.name),l.a.createElement(h.a.Meta,null,"Climate: ",e.climate),l.a.createElement(h.a.Description,null,"Gravity: ",e.gravity),l.a.createElement(h.a.Description,null,"Terrain: ",e.terrain)),l.a.createElement(h.a.Content,{extra:!0},l.a.createElement("div",null,l.a.createElement(b.a,{to:"details/".concat(e.url.match(/\/api\/(.*)/)[1])},"Read more"))))}})},C=a(295),g=a(291),S=a(130),D=a.n(S),L=a(131),w=a.n(L),k=function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement(C.a,{fluid:!0},l.a.createElement(g.a,{src:w.a,size:"small"}),l.a.createElement(g.a,{src:D.a,size:"small"})))},x=a(296),j=a(117),O=function(e){function t(e){var a;return Object(m.a)(this,t),(a=Object(u.a)(this,Object(i.a)(t).call(this,e))).state={link:e.link,content:{}},a}return Object(s.a)(t,e),Object(o.a)(t,[{key:"componentDidMount",value:function(){var e=this;fetch(this.state.link).then(function(e){return e.json()}).then(function(t){e.setState({content:t})})}},{key:"render",value:function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement(x.a.Event,null,l.a.createElement(x.a.Content,null,l.a.createElement(x.a.Summary,null,this.state.content.title?this.state.content.title:this.state.content.name))))}}]),t}(l.a.Component),M=function(e){function t(e){var a;return Object(m.a)(this,t),(a=Object(u.a)(this,Object(i.a)(t).call(this,e))).state={id:e.match.params.id,link:"https://swapi.co/api/people/".concat(e.match.params.id,"/"),content:{}},a}return Object(s.a)(t,e),Object(o.a)(t,[{key:"componentDidMount",value:function(){var e=this;fetch(this.state.link).then(function(e){return e.json()}).then(function(t){e.setState({content:t})})}},{key:"render",value:function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement(h.a,{style:{width:"auto"}},l.a.createElement(h.a.Content,null,l.a.createElement(h.a.Header,null,this.state.content.name)),l.a.createElement(h.a.Content,null,l.a.createElement(x.a,null,l.a.createElement(x.a.Event,null,l.a.createElement(x.a.Label,null,l.a.createElement(j.a,{disabled:!0,name:"text height"})),l.a.createElement(x.a.Content,null,l.a.createElement(x.a.Date,{content:"Height:"}),l.a.createElement(x.a.Summary,null,this.state.content.height))),l.a.createElement(x.a.Event,null,l.a.createElement(x.a.Label,null,l.a.createElement(j.a,{disabled:!0,name:"weight"})),l.a.createElement(x.a.Content,null,l.a.createElement(x.a.Date,{content:"Mass:"}),l.a.createElement(x.a.Summary,null,this.state.content.mass))),l.a.createElement(x.a.Event,null,l.a.createElement(x.a.Label,null,l.a.createElement(j.a,{disabled:!0,name:"arrow alternate circle right outline"})),l.a.createElement(x.a.Content,null,l.a.createElement(x.a.Date,{content:"Hair color:"}),l.a.createElement(x.a.Summary,null,this.state.content.hair_color))),l.a.createElement(x.a.Event,null,l.a.createElement(x.a.Label,null,l.a.createElement(j.a,{disabled:!0,name:"arrow alternate circle right"})),l.a.createElement(x.a.Content,null,l.a.createElement(x.a.Date,{content:"Skin color:"}),l.a.createElement(x.a.Summary,null,this.state.content.skin_color))),l.a.createElement(x.a.Event,null,l.a.createElement(x.a.Label,null,l.a.createElement(j.a,{disabled:!0,name:"arrow alternate circle right outline"})),l.a.createElement(x.a.Content,null,l.a.createElement(x.a.Date,{content:"Eye color:"}),l.a.createElement(x.a.Summary,null,this.state.content.eye_color))),l.a.createElement(x.a.Event,null,l.a.createElement(x.a.Label,null,l.a.createElement(j.a,{disabled:!0,name:"birthday"})),l.a.createElement(x.a.Content,null,l.a.createElement(x.a.Date,{content:"Birth:"}),l.a.createElement(x.a.Summary,null,this.state.content.birth_year))),l.a.createElement(x.a.Event,null,l.a.createElement(x.a.Label,null,l.a.createElement(j.a,{disabled:!0,name:"genderless"})),l.a.createElement(x.a.Content,null,l.a.createElement(x.a.Date,{content:"Gender:"}),l.a.createElement(x.a.Summary,null,this.state.content.gender))),l.a.createElement(x.a.Event,null,l.a.createElement(x.a.Label,null,l.a.createElement(j.a,{disabled:!0,name:"home"})),l.a.createElement(x.a.Content,null,l.a.createElement(x.a.Date,{content:"Homeworld:"}),null!=this.state.content.homeworld&&l.a.createElement(O,{link:this.state.content.homeworld}))),l.a.createElement(x.a.Event,null,l.a.createElement(x.a.Label,null,l.a.createElement(j.a,{disabled:!0,name:"film"})),l.a.createElement(x.a.Content,null,l.a.createElement(x.a.Date,{content:"Films:"}),l.a.createElement(x.a.Summary,null,null!=this.state.content.films&&this.state.content.films.map(function(e,t){return l.a.createElement(O,{link:e})})))),l.a.createElement(x.a.Event,null,l.a.createElement(x.a.Label,null,l.a.createElement(j.a,{disabled:!0,name:"arrow alternate circle right outline"})),l.a.createElement(x.a.Content,null,l.a.createElement(x.a.Date,{content:"Species:"}),l.a.createElement(x.a.Summary,null,null!=this.state.content.species&&l.a.createElement(O,{link:this.state.content.species})))),l.a.createElement(x.a.Event,null,l.a.createElement(x.a.Label,null,l.a.createElement(j.a,{disabled:!0,name:"car"})),l.a.createElement(x.a.Content,null,l.a.createElement(x.a.Date,{content:"Vehicles:"}),l.a.createElement(x.a.Summary,null,null!=this.state.content.vehicles&&this.state.content.vehicles.map(function(e,t){return l.a.createElement(O,{link:e})})))),l.a.createElement(x.a.Event,null,l.a.createElement(x.a.Label,null,l.a.createElement(j.a,{disabled:!0,name:"ship"})),l.a.createElement(x.a.Content,null,l.a.createElement(x.a.Date,{content:"Starships:"}),l.a.createElement(x.a.Summary,null,null!=this.state.content.starships&&this.state.content.starships.map(function(e,t){return l.a.createElement(O,{link:e})})))),l.a.createElement(x.a.Event,null,l.a.createElement(x.a.Label,null,l.a.createElement(j.a,{disabled:!0,name:"external square alternate"})),l.a.createElement(x.a.Content,null,l.a.createElement(x.a.Date,{content:"Created:"}),l.a.createElement(x.a.Summary,null,this.state.content.created))),l.a.createElement(x.a.Event,null,l.a.createElement(x.a.Label,null,l.a.createElement(j.a,{disabled:!0,name:"edit"})),l.a.createElement(x.a.Content,null,l.a.createElement(x.a.Date,{content:"Edited:"}),l.a.createElement(x.a.Summary,null,this.state.content.edited))),l.a.createElement(x.a.Event,null,l.a.createElement(x.a.Label,null,l.a.createElement(j.a,{disabled:!0,name:"sync"})),l.a.createElement(x.a.Content,null,l.a.createElement(x.a.Date,{content:"URL:"}),l.a.createElement(x.a.Summary,null,this.state.content.url)))))),l.a.createElement(E.a,{color:"violet",as:b.a,to:"/people"},"Go back"))}}]),t}(l.a.Component),_=function(e){function t(e){var a;return Object(m.a)(this,t),(a=Object(u.a)(this,Object(i.a)(t).call(this,e))).state={id:e.match.params.id,link:"https://swapi.co/api/planets/".concat(e.match.params.id,"/"),content:{}},a}return Object(s.a)(t,e),Object(o.a)(t,[{key:"componentDidMount",value:function(){var e=this;fetch(this.state.link).then(function(e){return e.json()}).then(function(t){e.setState({content:t})})}},{key:"render",value:function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement(h.a,{style:{width:"auto"}},l.a.createElement(h.a.Content,null,l.a.createElement(h.a.Header,null,this.state.content.name)),l.a.createElement(h.a.Content,null,l.a.createElement(x.a,null,l.a.createElement(x.a.Event,null,l.a.createElement(x.a.Label,null,l.a.createElement(j.a,{disabled:!0,name:"text height"})),l.a.createElement(x.a.Content,null,l.a.createElement(x.a.Date,{content:"Rotation period:"}),l.a.createElement(x.a.Summary,null,this.state.content.rotation_period))),l.a.createElement(x.a.Event,null,l.a.createElement(x.a.Label,null,l.a.createElement(j.a,{disabled:!0,name:"weight"})),l.a.createElement(x.a.Content,null,l.a.createElement(x.a.Date,{content:"Orbital period:"}),l.a.createElement(x.a.Summary,null,this.state.content.orbital_period))),l.a.createElement(x.a.Event,null,l.a.createElement(x.a.Label,null,l.a.createElement(j.a,{disabled:!0,name:"arrow alternate circle right outline"})),l.a.createElement(x.a.Content,null,l.a.createElement(x.a.Date,{content:"Diameter:"}),l.a.createElement(x.a.Summary,null,this.state.content.diameter))),l.a.createElement(x.a.Event,null,l.a.createElement(x.a.Label,null,l.a.createElement(j.a,{disabled:!0,name:"arrow alternate circle right"})),l.a.createElement(x.a.Content,null,l.a.createElement(x.a.Date,{content:"Climate:"}),l.a.createElement(x.a.Summary,null,this.state.content.climate))),l.a.createElement(x.a.Event,null,l.a.createElement(x.a.Label,null,l.a.createElement(j.a,{disabled:!0,name:"arrow alternate circle right outline"})),l.a.createElement(x.a.Content,null,l.a.createElement(x.a.Date,{content:"Gravity:"}),l.a.createElement(x.a.Summary,null,this.state.content.gravity))),l.a.createElement(x.a.Event,null,l.a.createElement(x.a.Label,null,l.a.createElement(j.a,{disabled:!0,name:"birthday"})),l.a.createElement(x.a.Content,null,l.a.createElement(x.a.Date,{content:"Terrain:"}),l.a.createElement(x.a.Summary,null,this.state.content.terrain))),l.a.createElement(x.a.Event,null,l.a.createElement(x.a.Label,null,l.a.createElement(j.a,{disabled:!0,name:"genderless"})),l.a.createElement(x.a.Content,null,l.a.createElement(x.a.Date,{content:"Surface water:"}),l.a.createElement(x.a.Summary,null,this.state.content.surface_water))),l.a.createElement(x.a.Event,null,l.a.createElement(x.a.Label,null,l.a.createElement(j.a,{disabled:!0,name:"genderless"})),l.a.createElement(x.a.Content,null,l.a.createElement(x.a.Date,{content:"Population:"}),l.a.createElement(x.a.Summary,null,this.state.content.population))),l.a.createElement(x.a.Event,null,l.a.createElement(x.a.Label,null,l.a.createElement(j.a,{disabled:!0,name:"film"})),l.a.createElement(x.a.Content,null,l.a.createElement(x.a.Date,{content:"Residents:"}),l.a.createElement(x.a.Summary,null,null!=this.state.content.residents&&this.state.content.residents.map(function(e,t){return l.a.createElement(O,{link:e})})))),l.a.createElement(x.a.Event,null,l.a.createElement(x.a.Label,null,l.a.createElement(j.a,{disabled:!0,name:"car"})),l.a.createElement(x.a.Content,null,l.a.createElement(x.a.Date,{content:"Films:"}),l.a.createElement(x.a.Summary,null,null!=this.state.content.films&&this.state.content.films.map(function(e,t){return l.a.createElement(O,{link:e})})))),l.a.createElement(x.a.Event,null,l.a.createElement(x.a.Label,null,l.a.createElement(j.a,{disabled:!0,name:"external square alternate"})),l.a.createElement(x.a.Content,null,l.a.createElement(x.a.Date,{content:"Created:"}),l.a.createElement(x.a.Summary,null,this.state.content.created))),l.a.createElement(x.a.Event,null,l.a.createElement(x.a.Label,null,l.a.createElement(j.a,{disabled:!0,name:"edit"})),l.a.createElement(x.a.Content,null,l.a.createElement(x.a.Date,{content:"Edited:"}),l.a.createElement(x.a.Summary,null,this.state.content.edited))),l.a.createElement(x.a.Event,null,l.a.createElement(x.a.Label,null,l.a.createElement(j.a,{disabled:!0,name:"sync"})),l.a.createElement(x.a.Content,null,l.a.createElement(x.a.Date,{content:"URL:"}),l.a.createElement(x.a.Summary,null,this.state.content.url)))))),l.a.createElement(E.a,{color:"violet",as:b.a,to:"/planets"},"Go back"))}}]),t}(l.a.Component),P=function(e){function t(e){var a;return Object(m.a)(this,t),(a=Object(u.a)(this,Object(i.a)(t).call(this,e))).state={id:e.match.params.id,link:"https://swapi.co/api/starships/".concat(e.match.params.id,"/"),content:{}},a}return Object(s.a)(t,e),Object(o.a)(t,[{key:"componentDidMount",value:function(){var e=this;fetch(this.state.link).then(function(e){return e.json()}).then(function(t){e.setState({content:t})})}},{key:"render",value:function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement(h.a,{style:{width:"auto"}},l.a.createElement(h.a.Content,null,l.a.createElement(h.a.Header,null,this.state.content.name)),l.a.createElement(h.a.Content,null,l.a.createElement(x.a,null,l.a.createElement(x.a.Event,null,l.a.createElement(x.a.Label,null,l.a.createElement(j.a,{disabled:!0,name:"text height"})),l.a.createElement(x.a.Content,null,l.a.createElement(x.a.Date,{content:"Model:"}),l.a.createElement(x.a.Summary,null,this.state.content.model))),l.a.createElement(x.a.Event,null,l.a.createElement(x.a.Label,null,l.a.createElement(j.a,{disabled:!0,name:"weight"})),l.a.createElement(x.a.Content,null,l.a.createElement(x.a.Date,{content:"Manufacturer:"}),l.a.createElement(x.a.Summary,null,this.state.content.manufacturer))),l.a.createElement(x.a.Event,null,l.a.createElement(x.a.Label,null,l.a.createElement(j.a,{disabled:!0,name:"arrow alternate circle right outline"})),l.a.createElement(x.a.Content,null,l.a.createElement(x.a.Date,{content:"Cost in credits:"}),l.a.createElement(x.a.Summary,null,this.state.content.cost_in_credits))),l.a.createElement(x.a.Event,null,l.a.createElement(x.a.Label,null,l.a.createElement(j.a,{disabled:!0,name:"arrow alternate circle right"})),l.a.createElement(x.a.Content,null,l.a.createElement(x.a.Date,{content:"Length:"}),l.a.createElement(x.a.Summary,null,this.state.content.length))),l.a.createElement(x.a.Event,null,l.a.createElement(x.a.Label,null,l.a.createElement(j.a,{disabled:!0,name:"arrow alternate circle right outline"})),l.a.createElement(x.a.Content,null,l.a.createElement(x.a.Date,{content:"Max atmosphering speed:"}),l.a.createElement(x.a.Summary,null,this.state.content.max_atmosphering_speed))),l.a.createElement(x.a.Event,null,l.a.createElement(x.a.Label,null,l.a.createElement(j.a,{disabled:!0,name:"birthday"})),l.a.createElement(x.a.Content,null,l.a.createElement(x.a.Date,{content:"Crew:"}),l.a.createElement(x.a.Summary,null,this.state.content.crew))),l.a.createElement(x.a.Event,null,l.a.createElement(x.a.Label,null,l.a.createElement(j.a,{disabled:!0,name:"genderless"})),l.a.createElement(x.a.Content,null,l.a.createElement(x.a.Date,{content:"Surface water:"}),l.a.createElement(x.a.Summary,null,this.state.content.surface_water))),l.a.createElement(x.a.Event,null,l.a.createElement(x.a.Label,null,l.a.createElement(j.a,{disabled:!0,name:"genderless"})),l.a.createElement(x.a.Content,null,l.a.createElement(x.a.Date,{content:"Passengers:"}),l.a.createElement(x.a.Summary,null,this.state.content.passengers))),l.a.createElement(x.a.Event,null,l.a.createElement(x.a.Label,null,l.a.createElement(j.a,{disabled:!0,name:"genderless"})),l.a.createElement(x.a.Content,null,l.a.createElement(x.a.Date,{content:"Cargo capacity:"}),l.a.createElement(x.a.Summary,null,this.state.content.cargo_capacity))),l.a.createElement(x.a.Event,null,l.a.createElement(x.a.Label,null,l.a.createElement(j.a,{disabled:!0,name:"genderless"})),l.a.createElement(x.a.Content,null,l.a.createElement(x.a.Date,{content:"Consumables:"}),l.a.createElement(x.a.Summary,null,this.state.content.consumables))),l.a.createElement(x.a.Event,null,l.a.createElement(x.a.Label,null,l.a.createElement(j.a,{disabled:!0,name:"genderless"})),l.a.createElement(x.a.Content,null,l.a.createElement(x.a.Date,{content:"Hyperdrive rating:"}),l.a.createElement(x.a.Summary,null,this.state.content.hyperdrive_rating))),l.a.createElement(x.a.Event,null,l.a.createElement(x.a.Label,null,l.a.createElement(j.a,{disabled:!0,name:"genderless"})),l.a.createElement(x.a.Content,null,l.a.createElement(x.a.Date,{content:"MGLT:"}),l.a.createElement(x.a.Summary,null,this.state.content.MGLT))),l.a.createElement(x.a.Event,null,l.a.createElement(x.a.Label,null,l.a.createElement(j.a,{disabled:!0,name:"genderless"})),l.a.createElement(x.a.Content,null,l.a.createElement(x.a.Date,{content:"Starship class:"}),l.a.createElement(x.a.Summary,null,this.state.content.starship_class))),l.a.createElement(x.a.Event,null,l.a.createElement(x.a.Label,null,l.a.createElement(j.a,{disabled:!0,name:"film"})),l.a.createElement(x.a.Content,null,l.a.createElement(x.a.Date,{content:"Pilots:"}),l.a.createElement(x.a.Summary,null,null!=this.state.content.pilots&&this.state.content.pilots.map(function(e,t){return l.a.createElement(O,{link:e})})))),l.a.createElement(x.a.Event,null,l.a.createElement(x.a.Label,null,l.a.createElement(j.a,{disabled:!0,name:"car"})),l.a.createElement(x.a.Content,null,l.a.createElement(x.a.Date,{content:"Films:"}),l.a.createElement(x.a.Summary,null,null!=this.state.content.films&&this.state.content.films.map(function(e,t){return l.a.createElement(O,{link:e})})))),l.a.createElement(x.a.Event,null,l.a.createElement(x.a.Label,null,l.a.createElement(j.a,{disabled:!0,name:"external square alternate"})),l.a.createElement(x.a.Content,null,l.a.createElement(x.a.Date,{content:"Created:"}),l.a.createElement(x.a.Summary,null,this.state.content.created))),l.a.createElement(x.a.Event,null,l.a.createElement(x.a.Label,null,l.a.createElement(j.a,{disabled:!0,name:"edit"})),l.a.createElement(x.a.Content,null,l.a.createElement(x.a.Date,{content:"Edited:"}),l.a.createElement(x.a.Summary,null,this.state.content.edited))),l.a.createElement(x.a.Event,null,l.a.createElement(x.a.Label,null,l.a.createElement(j.a,{disabled:!0,name:"sync"})),l.a.createElement(x.a.Content,null,l.a.createElement(x.a.Date,{content:"URL:"}),l.a.createElement(x.a.Summary,null,this.state.content.url)))))),l.a.createElement(E.a,{color:"violet",as:b.a,to:"/starships"},"Go back"))}}]),t}(l.a.Component),F=a(302),H=function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement(C.a,{fluid:!0},l.a.createElement(F.a,{as:"h2"},"404")))},R=a(303),G=a(301),B=a(304),N=a(300),z=a(298),T=function(e){var t=e.name,a=e.to,n=e.activeOnlyWhenExact;return l.a.createElement(R.a,{path:a,exact:n,children:function(e){var n=e.match;return l.a.createElement(z.a.Item,{className:n?"active":""},l.a.createElement(b.a,{to:a},t))}})},W=function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement(G.a,null,l.a.createElement("div",{style:{margin:"10px"}},l.a.createElement(z.a,{inverted:!0},l.a.createElement(T,{activeOnlyWhenExact:!0,name:"Home",as:b.a,to:"/"}),l.a.createElement(T,{name:"Starships",as:b.a,to:"/starships"}),l.a.createElement(T,{name:"People",as:b.a,to:"/people"}),l.a.createElement(T,{name:"Planets",as:b.a,to:"/planets"})),l.a.createElement(B.a,null,l.a.createElement(R.a,{exact:!0,path:"/",component:k}),l.a.createElement(N.a,{from:"/star-wars-app",to:"/"}),l.a.createElement(R.a,{path:"/starships",component:v}),l.a.createElement(R.a,{path:"/people",component:f}),l.a.createElement(R.a,{path:"/planets",component:y}),l.a.createElement(R.a,{path:"/details/people/:id?",component:M}),l.a.createElement(R.a,{path:"/details/planets/:id?",component:_}),l.a.createElement(R.a,{path:"/details/starships/:id?",component:P}),l.a.createElement(R.a,{path:"*",component:H})))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(l.a.createElement(W,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[144,2,1]]]);
//# sourceMappingURL=main.a0709adf.chunk.js.map