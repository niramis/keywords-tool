(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{11:function(t,e,a){"use strict";function n(t){return["#a2cd9f","#6ef4ef","#ea6e2e","#6e224c","#edfc35","",""].slice(0,t)}function s(t){return 0===t?0:25*(t+1)+10}function i(t,e,a,n){for(var s=arguments.length>4&&void 0!==arguments[4]?arguments[4]:0,i=[],r=a/(Math.abs(e.max_x-e.min_x)-1),o=n/Math.abs(e.max_y-e.min_y),c=0;c<t.length;c++)i.push([(c+s)*r,t[c][1],n-t[c][2]*o+o*e.min_y,n-t[c][3]*o+o*e.min_y,n-t[c][4]*o+o*e.min_y]);return i}function r(t,e,a,n){for(var s=[],r=[],o=t.historical_data.length,c=0;c<o;c++)s.push(i(t.historical_data[c],e,a,n)),r.push(i(t.forecasted_data[c],e,a,n,t.historical_data[c].length-1));return[s,r]}function o(t){for(var e=[],a=t.historical_data.length,n=0;n<a;n++)e.push(t.historical_data[n].concat(t.forecasted_data[n]));for(var s=[],i=e[0].length,r=0;r<i;r++){var o,c=[],l=[],h=[];o=e[0][r][1];for(var u=0;u<a;u++)c.push(e[u][r][2]),l.push(e[u][r][3]),h.push(e[u][r][4]);s[r]=[r,o,c,l,h]}return s}function c(t){return function(t){for(var e=t.toLowerCase().split(" "),a=0;a<e.length;a++)e[a]=e[a].charAt(0).toUpperCase()+e[a].substring(1);return e.join(" ")}(t)}function l(t){for(var e=100,a=0;a<t.length;a++)for(var n=0;n<t[a].length-2;n++)null!==t[a][n][3]&&t[a][n][3]<e&&(e=t[a][n][3]);return e}function h(t){for(var e=0,a=0;a<t.length;a++)for(var n=0;n<t[a].length-2;n++)null!==t[a][n][4]&&t[a][n][4]>e&&(e=t[a][n][4]);return e}a.d(e,"f",(function(){return n})),a.d(e,"b",(function(){return s})),a.d(e,"g",(function(){return r})),a.d(e,"c",(function(){return o})),a.d(e,"a",(function(){return c})),a.d(e,"e",(function(){return l})),a.d(e,"d",(function(){return h}))},14:function(t,e,a){"use strict";var n=a(5),s=a(6),i=a(8),r=a(7),o=a(9),c=a(0),l=a.n(c);c.Component},18:function(t,e,a){t.exports=a(55)},22:function(t,e,a){t.exports=a(56)},27:function(t,e,a){},32:function(t,e,a){},33:function(t,e,a){},54:function(t,e,a){},55:function(t,e,a){"use strict";a.r(e);var n=a(21),s=a(20),i=a(0),r=a.n(i),o=a(5),c=a(6),l=a(8),h=a(7),u=a(12),d=a(9),m=(a(32),a(11)),_=(a(14),function(t){function e(t){return Object(o.a)(this,e),Object(l.a)(this,Object(h.a)(e).call(this,t))}return Object(d.a)(e,t),Object(c.a)(e,[{key:"render",value:function(){return r.a.createElement("g",null,function(t,e,a,n,s,i){var o=[],c=a+1;t<=700&&(c=7);for(var l=Object.keys(n).length-1,h=Math.floor(l/(c-1)),u=t/(c-1),d=0;d<c;d++){var m=u*d;o.push(p(m,e))}if(t<=700)for(var _=0;_<c;_++)o.push(r.a.createElement("text",{key:_,x:u*_,className:"plot_xtick",textAnchor:"middle",y:e+25},v(n[h*_][1])));else for(var y=0;y<c;y++)o.push(r.a.createElement("text",{x:u*y,className:"plot_xtick",textAnchor:"middle",y:e+25},f(n[h*y][1])));var g="M 0 ".concat(e," H ").concat(t),b=i;t>700?o.push(r.a.createElement("text",{x:t/2,textAnchor:"middle",className:"plot_xaxis_title",y:e+b-30},r.a.createElement("tspan",null,s))):o.push(r.a.createElement("text",{x:t/2,textAnchor:"middle",className:"plot_xaxis_title",y:e+40},r.a.createElement("tspan",null,s)));return o.push(r.a.createElement("path",{key:e,d:g,fill:"none",className:"plot_line","data-z-index":"0"})),o}(this.props.dimensions.width,this.props.dimensions.height,this.props.ticks,this.props.dates,this.props.x_label,this.props.dimensions.y_trans_bottom))}}]),e}(r.a.PureComponent));function p(t,e){var a="M ".concat(t," ").concat(e," L ").concat(t," ").concat(e+10);return r.a.createElement("path",{className:"plot_xmark",d:a,"data-z-index":"0"})}function f(t){var e=new Date(t),a=e.getMonth()+1;return a<10&&(a="0"+a),a+"-"+e.getFullYear()}function v(t){return new Date(t).getFullYear()}var y=function(t){function e(t){return Object(o.a)(this,e),Object(l.a)(this,Object(h.a)(e).call(this,t))}return Object(d.a)(e,t),Object(c.a)(e,[{key:"render",value:function(){for(var t=[],e=this.props.upper_bound/10,a=this.props.lower_bound/10,n=e-a,s=this.props.dimensions.height/n,i=a;i<=e;i++)t.push(g(-20,this.props.dimensions.height-s*(i-a),10*i));var o="M ".concat(0," ").concat(0," L ").concat(0," ").concat(0+this.props.dimensions.height);return r.a.createElement("g",null,r.a.createElement("g",{transform:"translate(".concat(-(this.props.dimensions.x_trans/2+10),",").concat(this.props.dimensions.height/2,")")},r.a.createElement("text",{x:"0",textAnchor:"middle",transform:"rotate(-90 0,0)",className:"plot_yaxis_title",y:"0"},r.a.createElement("tspan",null,this.props.y_label))),function(t,e){for(var a=[],n=t/e,s=0;s<=e;s++){var i=n*s;a.push(b(0,i))}return a}(this.props.dimensions.height,this.props.y_number),t,r.a.createElement("path",{d:o,fill:"none",className:"plot_line","data-z-index":"0"}))}}]),e}(r.a.PureComponent);function g(t,e,a){return r.a.createElement("text",{x:t,textAnchor:"end",className:"plot_ytick",y:e,key:a},a)}function b(t,e){var a="M ".concat(t-10," ").concat(e," L ").concat(t," ").concat(e);return r.a.createElement("path",{key:e,d:a,fill:"none",className:"plot_line","data-z-index":"0"})}var x=function(t){function e(t){return Object(o.a)(this,e),Object(l.a)(this,Object(h.a)(e).call(this,t))}return Object(d.a)(e,t),Object(c.a)(e,[{key:"render",value:function(){return r.a.createElement("g",null,function(t,e,a){var n=[],s=[];if(t.svg_width>700){for(var i=0;i<e.length;i++){var o=k(a[i].length),c=s.reduce((function(t,e){return t+e}),0);n.push(r.a.createElement("g",{key:i,"data-z-index":"1",transform:"translate(".concat(c,",3)")},r.a.createElement("path",{fill:"none",d:"M 0 11 L 30 11",stroke:e[i],strokeWidth:"0"}),r.a.createElement("text",{x:"35",textAnchor:"start","data-z-index":"0",y:"15",fontSize:"12px",stroke:"#6c757d",strokeWidth:"0"},Object(m.a)(a[i])))),s.push(o)}var l=s.reduce((function(t,e){return t+e}),0),h=t.svg_width/2-l/2-t.x_trans,u=(t.height,t.y_trans);return t.height+t.y_trans-t.y_trans_bottom,u=t.height+t.y_trans-25,r.a.createElement("g",{transform:"translate(".concat(h,", ").concat(u,")"),className:"plot_legend"},n)}for(var d=0;d<a.length;d++){var _=k(a[d].length);s.push(_)}for(var p=0;p<e.length;p++){var f=Math.max.apply(Math,s);n.push(r.a.createElement("g",{"data-z-index":"1",transform:"translate(".concat(t.width/2-f/2,", ").concat(18*p+10,")")},r.a.createElement("path",{fill:"none",d:"M 0 11 L 30 11",stroke:e[p],"stroke-width":"0"}),r.a.createElement("text",{x:"35",textAnchor:"start","data-z-index":"0",y:"15","font-size":"12px",stroke:"#6c757d","stroke-width":"0"},Object(m.a)(a[p]))))}var v=t.height+43;return r.a.createElement("g",{transform:"translate(".concat(0,", ",v,")"),class:"plot_legend"},n)}(this.props.dimensions,this.props.colors,this.props.keywords))}}]),e}(r.a.PureComponent);function k(t){return 5*t+55}var w=function(t){function e(t){return Object(o.a)(this,e),Object(l.a)(this,Object(h.a)(e).call(this,t))}return Object(d.a)(e,t),Object(c.a)(e,[{key:"render",value:function(){return r.a.createElement("g",null,function(t,e){var a=t.width/(e.max_x-1)*(t.historical_data_length-1);return r.a.createElement("path",{fill:"none",className:"plot_pointer_line",d:"M ".concat(a," 0 L ").concat(a," ").concat(t.height),strokeDasharray:"6","data-z-index":"0"})}(this.props.dimensions,this.props.ranges))}}]),e}(r.a.PureComponent);var E=function(t){function e(t){return Object(o.a)(this,e),Object(l.a)(this,Object(h.a)(e).call(this,t))}return Object(d.a)(e,t),Object(c.a)(e,[{key:"render",value:function(){return r.a.createElement("g",null,(t=this.props.height,e=this.props.mark_line,r.a.createElement("g",{transform:"translate(".concat(e.pos,", 0)")},r.a.createElement("path",{fill:"none","data-z-index":"0",className:"plot_mark_line",d:"M 0 0 L 0 ".concat(t),visibility:"mark_line.visibility"}))));var t,e}}]),e}(r.a.PureComponent);var O=function(t){function e(t){return Object(o.a)(this,e),Object(l.a)(this,Object(h.a)(e).call(this,t))}return Object(d.a)(e,t),Object(c.a)(e,[{key:"render",value:function(){return r.a.createElement("g",null,function(t,e,a,n){var s=[];if(void 0!==t&&void 0!==t.value_y)for(var i=0;i<t.colors.length;i++)null!==t.value_y[3][i]&&null!==t.value_y[2][i]?s.push(r.a.createElement("g",null,r.a.createElement("path",{fill:"none",d:"M 5 ".concat(25*(i+1)+22," L 20 ").concat(25*(i+1)+22),stroke:t.colors[i],strokeWidth:"2",opacity:"1"}),r.a.createElement("text",{x:"25",y:25*(i+1)+25},Object(m.a)(n[i])," ",t.value_y[2][i].toFixed(1)," (min: ",t.value_y[3][i].toFixed(1)," | max: ",t.value_y[4][i].toFixed(1),")"))):s.push(r.a.createElement("g",null,r.a.createElement("path",{fill:"none",d:"M 5 ".concat(25*(i+1)+22," L 20 ").concat(25*(i+1)+22),stroke:t.colors[i],strokeWidth:"2",opacity:"1"}),r.a.createElement("text",{x:"25",y:25*(i+1)+25},Object(m.a)(n[i])," ",t.value_y[2][i].toFixed(1))));var o=function(t){var e=new Date(t),a=e.getDate(),n=e.getMonth()+1,s=e.getFullYear();a<10&&(a="0"+a);n<10&&(n="0"+n);return t=a+"-"+n+"-"+s}(t.value_x);return r.a.createElement("g",{transform:"translate(".concat(t.pos_x,", ").concat(t.pos_y,")"),"data-z-index":"1",className:"plot_info_box",visibility:t.visibility},r.a.createElement("rect",{x:"0",y:"0",width:e,height:a}),r.a.createElement("g",{className:"plot_info_box_header"},r.a.createElement("text",{x:"5",y:"25"},"Date: ",o)),s)}(this.props.info_box,this.props.width,this.props.height,this.props.keywords))}}]),e}(r.a.PureComponent);var j=function(t){function e(t){return Object(o.a)(this,e),Object(l.a)(this,Object(h.a)(e).call(this,t))}return Object(d.a)(e,t),Object(c.a)(e,[{key:"render",value:function(){return"dash"===this.props.style?r.a.createElement("g",null,N(this.props.data,this.props.color,4)):r.a.createElement("g",null,N(this.props.data,this.props.color,0,this.props.slice))}}]),e}(r.a.PureComponent),M=function(t,e,a,n){var s=t.reduce((function(t,e,a,n){return 0===a?"M ".concat(e[0],",").concat(e[2]):"".concat(t," ").concat(A(e,a,n))}),"");return r.a.createElement("path",{d:s,fill:"none",key:a,stroke:a,strokeWidth:"2","data-z-index":"0",strokeDasharray:n,pointerEvents:"none"})},D=function(t,e,a){var n=t.reduce((function(t,e,a,n){return 0===a?"M ".concat(e[0],",").concat(e[4]):"".concat(t," ").concat(W(e,a,n))}),"");n+=" L ".concat(t[t.length-1][0]," ").concat(t[t.length-1][3],"  ");var s=t.reverse().reduce((function(t,e,a,n){return 0===a?"L ".concat(e[0],",").concat(e[3]):"".concat(t," ").concat(L(e,a,n))}),""),i=n+(s+=" L ".concat(t[t.length-1][0]," ").concat(t[t.length-1][4],"  "));return r.a.createElement("path",{d:i,fill:a,stroke:a,strokeWidth:"2","data-z-index":"0",pointerEvents:"none",opacity:"0.35"})},C=function(t){return"L ".concat(t[0]," ").concat(t[2])};function N(t,e){var a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0,n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:0,s=[];return s.push(M(t,C,e,a)),s.push(D(t.slice(n),A,e)),s}var S=function(t,e,a,n){var s=function(t,e){var a=e[0]-t[0],n=e[2]-t[2];return{length:Math.sqrt(Math.pow(a,2)+Math.pow(n,2)),angle:Math.atan2(n,a)}}(e||t,a||t),i=s.angle+(n?Math.PI:0),r=.2*s.length;return[t[0]+Math.cos(i)*r,t[2]+Math.sin(i)*r]},A=function(t,e,a){var n=S(a[e-1],a[e-2],t),s=S(t,a[e-1],a[e+1],!0);return"C ".concat(n[0],",").concat(n[1]," ").concat(s[0],",").concat(s[1]," ").concat(t[0],",").concat(t[2])},W=function(t,e,a){var n=F(a[e-1],a[e-2],t),s=F(t,a[e-1],a[e+1],!0);return"C ".concat(n[0],",").concat(n[1]," ").concat(s[0],",").concat(s[1]," ").concat(t[0],",").concat(t[4])},L=function(t,e,a){var n=T(a[e-1],a[e-2],t),s=T(t,a[e-1],a[e+1],!0);return"C ".concat(n[0],",").concat(n[1]," ").concat(s[0],",").concat(s[1]," ").concat(t[0],",").concat(t[3])},T=function(t,e,a,n){var s=function(t,e){var a=e[0]-t[0],n=e[3]-t[3];return{length:Math.sqrt(Math.pow(a,2)+Math.pow(n,2)),angle:Math.atan2(n,a)}}(e||t,a||t),i=s.angle+(n?Math.PI:0),r=.2*s.length;return[t[0]+Math.cos(i)*r,t[3]+Math.sin(i)*r]},F=function(t,e,a,n){var s=function(t,e){var a=e[0]-t[0],n=e[4]-t[4];return{length:Math.sqrt(Math.pow(a,2)+Math.pow(n,2)),angle:Math.atan2(n,a)}}(e||t,a||t),i=s.angle+(n?Math.PI:0),r=.2*s.length;return[t[0]+Math.cos(i)*r,t[4]+Math.sin(i)*r]},z=function(t){return r.a.createElement("g",null,r.a.createElement("text",{x:t.dimensions.width/2,className:"plot_title",textAnchor:"middle",y:-t.dimensions.y_trans/3},t.title))},B=(a(33),{box_width:400,box_height:120}),P=function(t){function e(t){var a;Object(o.a)(this,e),(a=Object(l.a)(this,Object(h.a)(e).call(this,t))).handleMouseMove=a.handleMouseMove.bind(Object(u.a)(a)),a.handleHoverOff=a.handleHoverOff.bind(Object(u.a)(a)),a.updateWindowDimensions=a.updateWindowDimensions.bind(Object(u.a)(a));var n=.8*(.6*window.innerWidth-680),s=a.props.plot_settings.height-85-85;a.divRef=r.a.createRef();var i=Object(m.e)(a.props.data.historical_data),c=Object(m.d)(a.props.data.historical_data),d=a.props.plot_settings.keywords.length,_=10*(Math.ceil((i+1)/10)-1),p=10*Math.ceil((Math.abs(c)+1)/10),f={max_x:a.props.data.historical_data[0].length+a.props.data.forecasted_data[0].length,min_x:0,max_y:p,min_y:_};return a.state={title:a.props.plot_settings.title,x_label:a.props.plot_settings.x_label,y_label:a.props.plot_settings.y_label,mark_line:{pos:0,visibility:"hidden"},info_box:{pos_x:0,pos_y:0,visibility:"hidden",colors:Object(m.f)(d)},scaled_data:a.scale_data_mocks(a.props.data,f,n,s),data_map_area_DATES:a.get_data_map_area_DATES(a.props.data),colors:a.get_random_colors(d),info_box_height:a.get_box_height(d),dimensions:{svg_width:n,width:n/1.1,height:s,x_trans:340,y_trans:85,y_trans_bottom:85,historical_data_length:a.props.data.historical_data[0].length,forecasted_data_length:a.props.data.forecasted_data[0].length},min_y:i,max_y:c,ticks:12,ranges:f,number_of_series:d},a}return Object(d.a)(e,t),Object(c.a)(e,[{key:"componentDidMount",value:function(){this.updateWindowDimensions(),window.addEventListener("resize",this.updateWindowDimensions),this.divRef.current.focus()}},{key:"componentWillUnmount",value:function(){window.removeEventListener("resize",this.updateWindowDimensions)}},{key:"updateWindowDimensions",value:function(){var t=this.divRef.current.clientWidth,e=this.get_dimensions(t),a=e.x_trans_left,n=e.x_trans_right,s=e.y_trans_up,i=e.y_trans_bottom,r=(e.height,t-a-n),o=this.props.plot_settings.height-s-i,c=this.state.ranges;this.setState({dimensions:{svg_width:t,width:r,height:o,x_trans:a,y_trans:s,x_trans_right:n,y_trans_bottom:i,historical_data_length:this.props.data.historical_data[0].length,forecasted_data_length:this.props.data.forecasted_data[0].length},scaled_data:this.scale_data_mocks(this.props.data,c,r,o)})}},{key:"scale_data_mocks",value:function(t,e,a,n){return Object(m.g)(t,e,a,n)}},{key:"get_data_map_area_DATES",value:function(t){return Object(m.c)(t)}},{key:"get_random_colors",value:function(t){return Object(m.f)(t)}},{key:"get_box_height",value:function(t){return Object(m.b)(t)}},{key:"handleMouseMove",value:function(t){var e=t.target.getBoundingClientRect(),a=t.clientX-e.left-this.state.dimensions.x_trans,n=t.clientY-e.top-this.state.dimensions.y_trans;if(a>=0&&n>=0&&a<=this.state.dimensions.width&&n<=this.state.dimensions.height){var s=this.state.ranges.max_x-this.state.ranges.min_x,i=this.state.dimensions.width/s,r=Math.round(a/i);if(void 0!==this.state.data_map_area_DATES[r]){Math.round((this.state.ranges.max_x-this.state.ranges.min_x)/2),Math.round((this.state.ranges.max_x-this.state.ranges.min_x)/2);for(var o=this.state.ranges.min_x;o<=r;o++)void 0!==this.state.data_map_area_DATES[o]&&o;for(var c=r;c<=this.state.ranges.max_x;c++)void 0!==this.state.data_map_area_DATES[c]&&c;this.setState({mark_line:{pos:a},info_box:{pos_x:a,pos_y:n,value_x:this.state.data_map_area_DATES[r][1],value_y:this.state.data_map_area_DATES[r],colors:Object(m.f)(this.props.plot_settings.number_of_series)}}),"hidden"!==this.state.info_box.visibility&&void 0!==this.state.info_box.visibility||this.setState({mark_line:{pos:a}})}else if(void 0!==r){for(var l=r-1,h=r+1,u=r;u>=0;u--)if(void 0!==this.state.data_map_area_DATES[u]){l=u;break}for(var d=r;d<=this.state.ranges.max_x;d++)if(void 0!==this.state.data_map_area_DATES[d]){h=d;break}void 0!==this.state.data_map_area_DATES[l]&&void 0!==this.state.data_map_area_DATES[h]&&(this.setState({mark_line:{pos:a},info_box:{pos_x:a,pos_y:n,value_x:this.state.data_map_area_DATES[r][1],value_y:this.state.data_map_area_DATES[r],colors:Object(m.f)(this.props.plot_settings.number_of_series)}}),"hidden"!==this.state.info_box.visibility&&void 0!==this.state.info_box.visibility||this.setState({mark_line:{pos:a}}))}}else(a>this.state.dimensions.width||n>this.state.dimensions.height||a<this.state.dimensions.x_trans||n<this.state.dimensions.y_trans)&&this.setState({mark_line:{visibility:"hidden",pos:9999},info_box:{visibility:"hidden",pos_x:9999,pos_y:9999,colors:Object(m.f)(this.props.plot_settings.number_of_series)}})}},{key:"handleHoverOff",value:function(t){this.setState({mark_line:{pos:0,visibility:"hidden"},info_box:{pos_x:0,pos_y:0,visibility:"hidden",colors:Object(m.f)(this.props.plot_settings.number_of_series)}})}},{key:"render",value:function(){var t=this,e=this.state.scaled_data[0].map((function(e,a){return r.a.createElement(j,{key:a,data:e,color:t.state.colors[a],style:"none",slice:4})})),a=this.state.scaled_data[1].map((function(e,a){return r.a.createElement(j,{key:a,data:e,color:t.state.colors[a],style:"dash"})})),n="0 0 "+this.state.dimensions.svg_width+" "+this.props.plot_settings.height,s="translate("+this.state.dimensions.x_trans+","+this.state.dimensions.y_trans+")",i=this.state.max_y,o=this.state.min_y,c=10*(Math.ceil((o+1)/10)-1),l=10*Math.ceil((Math.abs(i)+1)/10),h=(l-c)/10,u=[];if(this.state.info_box.value_y){for(var d=0;d<this.state.info_box.colors.length;d++)this.state.info_box.value_y[3][d]&&u.push({date:R(this.state.info_box.value_x),keyword:this.props.plot_settings.keywords[d],"value: ":this.state.info_box.value_y[2][d].toFixed(1),"min: ":this.state.info_box.value_y[3][d].toFixed(1),"max: ":this.state.info_box.value_y[4][d].toFixed(1)});console.log(u)}return r.a.createElement("div",{ref:this.divRef},r.a.createElement("svg",{version:"1.1",xmlns:"http://www.w3.org/2000/svg",preserveAspectRatio:"none",onMouseMove:this.handleMouseMove,onMouseLeave:this.handleHoverOff,width:this.state.dimensions.svg_width,height:this.props.plot_settings.height,viewBox:n},r.a.createElement("g",null,r.a.createElement("g",{transform:s},e,a,r.a.createElement(z,{dimensions:this.state.dimensions,y_number:this.state.y_number,title:this.state.title}),r.a.createElement(y,{dimensions:this.state.dimensions,y_number:h,y_label:this.state.y_label,lower_bound:c,upper_bound:l}),r.a.createElement(_,{dimensions:this.state.dimensions,x_label:this.state.x_label,ticks:this.state.ticks,dates:this.state.data_map_area_DATES}),r.a.createElement(x,{dimensions:this.state.dimensions,colors:this.state.colors,keywords:this.props.plot_settings.keywords}),r.a.createElement(w,{dimensions:this.state.dimensions,ranges:this.state.ranges}),r.a.createElement(E,{mark_line:this.state.mark_line,height:this.state.dimensions.height}),r.a.createElement(O,{info_box:this.state.info_box,width:B.box_width,height:this.state.info_box_height,keywords:this.props.plot_settings.keywords})))),r.a.createElement("div",null))}},{key:"get_dimensions",value:function(t){var e=t/4.5,a=this.state.x_trans,n=this.state.y_trans,s=this.state.x_trans,i=this.state.y_trans;return t>1800&&(e=e,a=80,n=80,s=50,i=80),t<=1800&&(e=1.2*t/4.5,a=80,n=80,s=50,i=80),t<=1600&&(e=1.4*t/4.5,a=80,n=80,s=50,i=80),t<=1400&&(e=1.6*t/4.5,a=70,n=70,s=50,i=70),t<=1200&&(e=1.8*t/4.5,a=60,n=60,s=50,i=70),t<=700&&(e=3.1*t/4.5,a=60,n=20,s=50,i=14*this.state.number_of_series+80),{height:e,x_trans_left:a,y_trans_up:n,x_trans_right:s,y_trans_bottom:i}}}]),e}(r.a.PureComponent);function R(t){var e=new Date(t),a=e.getDate(),n=e.getMonth()+1;return a<10&&(a="0"+a),n<10&&(n="0"+n),a+"-"+n+"-"+e.getFullYear()}var U={KeywordPlot:P};function I(t){var e=Object(i.useState)(!0),a=Object(s.a)(e,2),o=a[0];a[1];return o?r.a.createElement("div",{"aria-busy":"true"},r.a.createElement(U.KeywordPlot,Object(n.a)({},t))):null}a.d(e,"default",(function(){return I})),I.defaultProps={type:"Puff2",style:{},className:"",visible:!0,timeout:0}},56:function(t,e,a){"use strict";a.r(e);var n=a(0),s=a.n(n),i=a(16),r=a.n(i),o=(a(27),a(5)),c=a(6),l=a(8),h=a(7),u=a(12),d=a(9),m=(a(14),a(58)),_=a(59),p=[["us",0," All states"],["us-ma",1,"Massachusetts"],["us-wa",2,"Washington"],["us-ca",3,"California"],["us-or",4,"Oregon"],["us-wi",5,"Wisconsin"],["us-me",6,"Maine"],["us-mi",7,"Michigan"],["us-nv",8,"Nevada"],["us-nm",9,"New Mexico"],["us-co",10,"Colorado"],["us-wy",11,"Wyoming"],["us-ks",12,"Kansas"],["us-ne",13,"Nebraska"],["us-ok",14,"Oklahoma"],["us-mo",15,"Missouri"],["us-il",16,"Illinois"],["us-in",17,"Indiana"],["us-vt",18,"Vermont"],["us-ar",19,"Arkansas"],["us-tx",20,"Texas"],["us-ri",21,"Rhode Island"],["us-al",22,"Alabama"],["us-ms",23,"Mississippi"],["us-nc",24,"North Carolina"],["us-va",25,"Virginia"],["us-ia",26,"Iowa"],["us-md",27,"Maryland"],["us-de",28,"Delaware"],["us-pa",29,"Pennsylvania"],["us-nj",30,"New Jersey"],["us-ny",31,"New York"],["us-id",32,"Idaho"],["us-sd",33,"South Dakota"],["us-ct",34,"Connecticut"],["us-nh",35,"New Hampshire"],["us-ky",36,"Kentucky"],["us-oh",37,"Ohio"],["us-tn",38,"Tennessee"],["us-wv",39,"West Virginia"],["us-dc",40,"District of Columbia"],["us-la",41,"Louisiana"],["us-fl",42,"Florida"],["us-ga",43,"Georgia"],["us-sc",44,"South Carolina"],["us-mn",45,"Minnesota"],["us-mt",46,"Montana"],["us-nd",47,"North Dakota"],["us-az",48,"Arizona"],["us-ut",49,"Utah"],["us-hi",50,"Hawaii"],["us-ak",51,"Alaska"]].sort((function(t,e){return(""+t[2]).localeCompare(e[2])})),f=[[0,"Weekly","today 5-y"],[1,"Daily","today 12-m"],[2,"Hourly","today 1-m"]],v=function(t){function e(t){var a;return Object(o.a)(this,e),(a=Object(l.a)(this,Object(h.a)(e).call(this,t))).handleClick=a.handleClick.bind(Object(u.a)(a)),a.handleChange=a.handleChange.bind(Object(u.a)(a)),a.selectedState=a.selectedState.bind(Object(u.a)(a)),a.selectedTimeFrame=a.selectedTimeFrame.bind(Object(u.a)(a)),a.state={keywords:[],selected_state_name:p[0][0],selected_time_frame:f[0][2]},a}return Object(d.a)(e,t),Object(c.a)(e,[{key:"handleClick",value:function(t){t.preventDefault();var e=this.arrayTrim(this.state.keywords),a=this.state.selected_state_name,n=this.state.selected_time_frame;n===f[0][2]?e.length<=5?this.props.callbackFromParent(e,a,n):this.props.errorTimeframeCallback("Too many keywords"):this.props.errorTimeframeCallback("Incorrect Forecast Granularity")}},{key:"selectedState",value:function(t){this.setState({selected_state_name:t.target.value.split(",")[0]})}},{key:"selectedTimeFrame",value:function(t){this.setState({selected_time_frame:t.target.value.split(",")[2]})}},{key:"handleChange",value:function(t){var e=t.target.value.split(",");this.setState({keywords:e})}},{key:"arrayTrim",value:function(t){return t.map((function(t){return t.trim()}))}},{key:"render",value:function(){var t=p.map((function(t){return s.a.createElement("option",{key:t[1],value:t},t[2])}));f.map((function(t){return s.a.createElement("option",{key:t[0],value:t},t[1])}));return s.a.createElement("div",{className:"input_bar input-bar-item width100"},s.a.createElement(m.a,{onSubmit:this.handleClick,className:"input_form"},s.a.createElement(m.a.Group,{className:"form-inline"},s.a.createElement("div",{className:"keyword_div"},s.a.createElement("div",{className:"col-12"},s.a.createElement("div",{className:"form-row"},s.a.createElement("label",{className:"col-input-keywords-label col-form-label input_label",htmlFor:"keywords_input"},"Keywords"),s.a.createElement(m.a.Control,{className:"col-input-keywords",type:"text",placeholder:"Enter keywords",value:this.state.keywords,onChange:this.handleChange,id:"keywords_input"})))),s.a.createElement("div",{className:"state_select_div"},s.a.createElement("div",{className:"col-12"},s.a.createElement("div",{className:"form-row"},s.a.createElement("label",{className:"label-select-state col-form-label input_label",htmlFor:"select_state_input"},"Location"),s.a.createElement(m.a.Control,{as:"select",onChange:this.selectedState,id:"select_state_input",className:"col-input-state"},t),s.a.createElement("div",{className:"input_button col-button"},s.a.createElement(_.a,{variant:"primary",type:"submit",className:"btn-blue"},"Submit"))))))))}}]),e}(n.Component),y=a(18),g=a.n(y),b=(a(11),a(19)),x=a.n(b),k=(a(53),a(54),function(t){function e(t){var a;return Object(o.a)(this,e),(a=Object(l.a)(this,Object(h.a)(e).call(this,t))).fetchCallback=function(t,e,n){a.setState({displayResults:!1,region_state:e.toUpperCase()}),a.fetchData(t,e,n)},a.errorCallback=function(t){a.setState({displayError:!0,error_message:t}),window.setTimeout((function(){a.setState({displayError:!1})}),2e3)},a.mapCallback=function(t){a.setState({displayResults:!1,region_state:t.toUpperCase()}),a.fetchData(a.state.keywords,t,a.state.selected_time_frame)},a.handleMouseMove=function(){},a.updateWindowDimensions=a.updateWindowDimensions.bind(Object(u.a)(a)),a.handleMouseMove=a.handleMouseMove.bind(Object(u.a)(a)),a.state={username:"user",displayResults:!1,fetching_results:!1,displayError:!1,region_state:"US",selected_time_frame:"today 5-y",keywords:[],data:[],error_message:"",time:{}},a.myRef=s.a.createRef(),a}return Object(d.a)(e,t),Object(c.a)(e,[{key:"fetchData",value:function(t,e,a){var n=this;this.setState({fetching_results:!0,keywords:t}),fetch("/data",{method:"POST",headers:{"Content-type":"application/json"},body:JSON.stringify({keywords:t,region_state:e,time_frame:a})}).then((function(t){return t.json()})).then((function(s){var i=n.myRef.current.offsetWidth,r=n.get_dimensions(i);n.setState({keywords:t,displayResults:!0,fetching_results:!1,region_state:e.toUpperCase(),selected_time_frame:a,data:n.get_data2(t,s),div_height:r.height,width:i})})).catch((function(t){console.log(t)}))}},{key:"componentDidMount",value:function(){this.updateWindowDimensions(),window.addEventListener("resize",this.updateWindowDimensions),this.myRef.current.focus()}},{key:"componentWillUnmount",value:function(){window.removeEventListener("resize",this.updateWindowDimensions)}},{key:"updateWindowDimensions",value:function(){var t=this.myRef.current.offsetWidth,e=this.get_dimensions(t);this.setState({div_height:e.height,width:t})}},{key:"render",value:function(){var t={title:"Trends Forecast",x_label:"Date",y_label:"Search interest (%)",number_of_series:this.state.keywords.length,keywords:this.state.keywords,height:this.state.div_height,width:this.state.width};return s.a.createElement("div",{ref:this.myRef,onMouseMove:this.handleMouseMove,onMouseLeave:this.handleHoverOff},s.a.createElement("div",{className:"main_results"},s.a.createElement(v,{callbackFromParent:this.fetchCallback,errorTimeframeCallback:this.errorCallback}),this.state.displayError?s.a.createElement("div",{className:"error_message"},this.state.error_message):s.a.createElement("div",null,s.a.createElement("br",null)),this.state.displayResults?s.a.createElement("div",{className:"content"},s.a.createElement("div",{className:"results_div"},s.a.createElement(g.a,{plot_settings:t,data:this.state.data}))):s.a.createElement("div",null,this.state.fetching_results?s.a.createElement("div",{className:"spinner"},s.a.createElement(x.a,{type:"Oval",color:"#1694d0",height:200,width:200,timeout:3e4})):s.a.createElement("div",null))))}},{key:"get_data",value:function(t,e){var a=[],n=[],s=function(s){var i=0,r=t[s],o=Object.keys(e[r]).length-60;console.log(Object.keys(e[r]).length);var c=Object.keys(e[r]).map((function(t){if(null!==e[r][t])return i<4?[i++,new Date(t).valueOf(),e[r][t],e["Lower Band for "+r][t],e["Upper Band for "+r][t]]:[i++,new Date(t).valueOf(),e["5 Day MA for "+r][t],e["Lower Band for "+r][t],e["Upper Band for "+r][t]]}));a.push(c.slice(0,i)),c=Object.keys(e[t[s]+"F"]).map((function(a){return i<4?[i++,new Date(a).valueOf(),e[t[s]+"F"][a],e["Lower Band for "+r+"F"][a],e["Upper Band for "+r+"F"][a]]:[i++,new Date(a).valueOf(),e["5 Day MA for "+r+"F"][a],e["Lower Band for "+r+"F"][a],e["Upper Band for "+r+"F"][a]]})),n.push(c.slice(o,o+52))};for(var i in t)s(i);return{historical_data:a,forecasted_data:n}}},{key:"get_data2",value:function(t,e){var a=[],n=[],s=function(s){var i=0,r=t[s],o=Object.keys(e.historical_data).length,c=Object.keys(e.historical_data).map((function(t){if(null!==e.historical_data[t])return i<4?[i++,new Date(t).valueOf(),e.historical_data[t][r].value,e.historical_data[t][r].L_B,e.historical_data[t][r].U_B]:[i++,new Date(t).valueOf(),e.historical_data[t][r].M_A,e.historical_data[t][r].L_B,e.historical_data[t][r].U_B]}));a.push(c.slice(0,i)),c=Object.keys(e.forecasted_data).map((function(t){return i<4?[i++,new Date(t).valueOf(),e.forecasted_data[t][r].value,e.forecasted_data[t][r].L_B,e.forecasted_data[t][r].U_B]:[i++,new Date(t).valueOf(),e.forecasted_data[t][r].M_A,e.forecasted_data[t][r].L_B,e.forecasted_data[t][r].U_B]})),n.push(c.slice(o,o+52))};for(var i in t)s(i);return{historical_data:a,forecasted_data:n}}},{key:"get_dimensions",value:function(t){var e=t/4.5;return t>1800&&(e=e),t<=1800&&(e=1.2*t/4.5),t<=1600&&(e=1.4*t/4.5),t<=1400&&(e=1.7*t/4.5),t<=1200&&(e=2.2*t/4.5),t<=700&&(e=3.4*t/4.5),{height:e}}}]),e}(s.a.PureComponent));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(s.a.createElement(k,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(t){t.unregister()}))}},[[22,1,2]]]);
//# sourceMappingURL=main.b5546a98.chunk.js.map