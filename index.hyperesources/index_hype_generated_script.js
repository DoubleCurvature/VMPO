//	HYPE.documents["index"]

(function(){(function m(){function k(a,b,c,d){var e=!1;null==window[a]&&(null==window[b]?(window[b]=[],window[b].push(m),a=document.getElementsByTagName("head")[0],b=document.createElement("script"),e=l,false==!0&&(e=""),b.type="text/javascript",""!=d&&(b.integrity=d,b.setAttribute("crossorigin","anonymous")),b.src=e+"/"+c,a.appendChild(b)):window[b].push(m),e=!0);return e}var l="index.hyperesources",f="index",g="index_hype_container";if(false==
!1)try{for(var c=document.getElementsByTagName("script"),a=0;a<c.length;a++){var d=c[a].src,b=null!=d?d.indexOf("/index_hype_generated_script.js"):-1;if(-1!=b){l=d.substr(0,b);break}}}catch(p){}c=null==navigator.userAgentData&&navigator.userAgent.match(/MSIE (\d+\.\d+)/);c=parseFloat(c&&c[1])||null;d=!0==(null!=window.HYPE_740F||null!=window.HYPE_dtl_740F)||true==!0||null!=c&&10>c;a=!0==d?"HYPE-740.full.min.js":"HYPE-740.thin.min.js";c=!0==d?"F":"T";
d=d?"":"";if(false==!1&&(a=k("HYPE_740"+c,"HYPE_dtl_740"+c,a,d),false==!0&&(a=a||k("HYPE_w_740","HYPE_wdtl_740","HYPE-740.waypoints.min.js","")),false==!0&&(a=a||k("Matter","HYPE_pdtl_740","HYPE-740.physics.min.js","")),a))return;d=window.HYPE.documents;if(null!=d[f]){b=1;a=f;do f=""+a+"-"+b++;while(null!=d[f]);for(var e=
document.getElementsByTagName("div"),b=!1,a=0;a<e.length;a++)if(e[a].id==g&&null==e[a].getAttribute("HYP_dn")){var b=1,h=g;do g=""+h+"-"+b++;while(null!=document.getElementById(g));e[a].id=g;b=!0;break}if(!1==b)return}b=[];b=[{name:"startMutationObserver",source:"function(hypeDocument, element, event) {\n\tvar imageBigElm = element.querySelector('.imageBig');\n\tvar imageLittleElm = element.querySelector('.imageLittle');\n\tvar lensElm = element.querySelector('.lens');\n\tvar magnificationElm = element.querySelector('.magnification');\n\t\n\tvar imageBigWidth = hypeDocument.getElementProperty(imageBigElm, 'width');\n\tvar imageLittleWidth = hypeDocument.getElementProperty(imageLittleElm, 'width');\n\tvar lensWidth = hypeDocument.getElementProperty(lensElm, 'width');\n\t\n\tvar scaleFactorImage = imageBigWidth / imageLittleWidth;\n\tvar scaleFactorOffset = imageLittleWidth / imageBigWidth;\n\tvar scaleOffset = lensWidth/2 - lensWidth/2 * scaleFactorOffset;\n\t\n\tvar update = function(mutation){\n\t\tvar left = hypeDocument.getElementProperty(magnificationElm, 'left');\n\t\tvar top = hypeDocument.getElementProperty(magnificationElm, 'top');\n\t\thypeDocument.setElementProperty(imageBigElm, 'left', (-left-scaleOffset) * scaleFactorImage);\n\t\thypeDocument.setElementProperty(imageBigElm, 'top', (-top-scaleOffset) * scaleFactorImage);\n\t}\n\t\n\thypeDocument.startMutationObserver(magnificationElm, update, { attributes: true, attributeFilter: [ \"style\" ] });\n\n\tupdate();\n\t\n\t\n\t\n}",identifier:"197"}];e={};h={};for(a=0;a<b.length;a++)try{h[b[a].identifier]=b[a].name,e[b[a].name]=eval("(function(){return "+b[a].source+"})();")}catch(n){window.console&&window.console.log(n),e[b[a].name]=function(){}}c=new window["HYPE_740"+c](f,g,{"-2":{n:"blank.gif"},"18":{p:1,n:"warning-1.ico",g:"775",t:"image/vnd.microsoft.icon"},"10":{p:1,n:"panel2.png",g:"421",o:true,t:"@1x"},"19":{p:1,n:"small%20splash.jpg",g:"786",t:"@1x"},"11":{p:1,n:"panel2_2x.png",g:"421",o:true,t:"@2x"},"0":{p:1,n:"HypeVM.jpg",g:"107",o:true,t:"@1x"},"12":{p:1,n:"panel.png",g:"423",o:true,t:"@1x"},"1":{p:1,n:"HypeVM_2x.jpg",g:"107",o:true,t:"@2x"},"2":{p:1,n:"Oudemanns1.png",g:"329",o:true,t:"@1x"},"13":{p:1,n:"panel_2x.png",g:"423",o:true,t:"@2x"},"3":{p:1,n:"Oudemanns1_2x.png",g:"329",o:true,t:"@2x"},"14":{p:1,n:"HypeVM2.jpg",g:"492",o:true,t:"@1x"},"4":{p:1,n:"saravan1.png",g:"327",o:true,t:"@1x"},"5":{p:1,n:"saravan1_2x.png",g:"327",o:true,t:"@2x"},"15":{p:1,n:"HypeVM2_2x.jpg",g:"492",o:true,t:"@2x"},"6":{p:1,n:"Ganges%20catena.png",g:"345",o:true,t:"@1x"},"16":{p:1,n:"equation.png",g:"515",o:true,t:"@1x"},"7":{p:1,n:"Ganges%20catena_2x.png",g:"345",o:true,t:"@2x"},"-1":{n:"PIE.htc"},"8":{p:1,n:"orange%20butt.png",g:"395",o:true,t:"@1x"},"17":{p:1,n:"equation_2x.png",g:"515",o:true,t:"@2x"},"9":{p:1,n:"orange%20butt_2x.png",g:"395",o:true,t:"@2x"}},
l,[],e,[{n:"Untitled Scene 3",o:"89",X:[0,1]}],[{o:"731",A:{a:[{b:"747",p:3,z:false,symbolOid:"639"}]},p:"600px",a:100,Y:320,Z:568,b:100,cA:false,c:"#212121",L:[],bY:1,d:1024,U:{},T:{"747":{q:false,z:1,i:"747",n:"splash",a:[{f:"c",y:0.17,z:0.13,i:"bR",e:0,s:78,o:"788"},{f:"c",y:0.17,z:0.06,i:"e",e:1,s:0,o:"788"},{f:"c",y:0.23,z:0.07,i:"e",e:1,s:1,o:"788"},{y:1,i:"bR",s:0,z:0,o:"788",f:"c"},{y:1,i:"e",s:1,z:0,o:"788",f:"c"}],f:30,b:[]},"726":{q:false,z:0,i:"726",n:"saravan",a:[],f:30,b:[]},"729":{q:false,z:0,i:"729",n:"craters",a:[],f:30,b:[]},"725":{q:false,z:0,i:"725",n:"Scrubber",a:[],f:30,b:[]},"728":{q:false,z:0,i:"728",n:"oudemans",a:[],f:30,b:[]},kTimelineDefaultIdentifier:{q:false,z:0,i:"kTimelineDefaultIdentifier",n:"Main Timeline",a:[],f:30,b:[]},"724":{q:false,z:0,i:"724",n:"lines",a:[],f:30,b:[]},"727":{q:false,z:0,i:"727",n:"ganges",a:[],f:30,b:[]},"730":{q:false,z:0,i:"730",n:"periodic",a:[],f:30,b:[]}},bZ:180,O:["793","789","788","791","790","792"],n:"iPhone","_":0,v:{"788":{x:"visible",k:"div",c:288,d:106,bR:78,z:49,e:1,a:16,bS:45,j:"absolute",b:116},"790":{h:"775",p:"no-repeat",x:"visible",a:4,dB:"img",q:"100% 100%",j:"absolute",r:"inline",z:2,bF:"788",b:17,d:46,k:"div",c:46},"789":{c:283,d:100,I:"Solid",J:"Solid",K:"Solid",g:"#FF9300",L:"Solid",M:3,w:"",bF:"788",A:"#FFF",x:"visible",j:"absolute",B:"#FFF",P:3,N:3,C:"#FFF",O:3,z:1,D:"#FFF",aK:10,aJ:10,k:"div",aI:10,a:-1,aL:10,b:1},"791":{aU:8,G:"#000",c:229,aV:8,r:"inline",d:62,s:"Helvetica,Arial,Sans-Serif",t:12,Z:"break-word",w:"<font face=\"Helvetica Neue, Arial, Helvetica, sans-serif\"><b>Periodic Oscillation of Valles Marineris</b></font><br><span style=\"font-size: 11px;\">Larger Browser Window, Landscape Tablet, or Laptop/Desktop required for Interactive Interface</span>",bF:"788",j:"absolute",x:"visible",k:"div",y:"preserve",z:3,aS:8,aT:8,a:42,b:6},"793":{h:"786",p:"no-repeat",x:"visible",a:0,dB:"img",q:"100% 100%",j:"absolute",r:"inline",z:1,bS:383,b:-6,d:580,k:"div",c:326},"792":{b:68.5,z:4,K:"Solid",c:90,L:"Solid",d:15,aS:6,M:1,bD:"none",N:1,aT:6,dB:"button",O:1,g:"#0096FF",aU:6,P:1,bF:"788",aV:6,j:"absolute",k:"div",aI:4,aJ:4,aK:4,aL:4,A:"#A0A0A0",B:"#A0A0A0",Z:"break-word",r:"inline",C:"#A0A0A0",D:"#A0A0A0",t:13,F:"center",aA:{a:[{b:"747",p:3,z:true,symbolOid:"639"}]},G:"#000",aP:"pointer",w:"OK",x:"visible",I:"Solid",a:168,y:"preserve",J:"Solid"}}},{o:"104",p:"600px",a:100,Y:1366,Z:1024,b:100,cA:false,c:"#212121",L:[],bY:1,d:1024,U:{},T:{"392":{j:{"1":[[22,254,22,254,21,226,21,226],[21,226,21,226,21,128,21,128]]},q:false,z:2,i:"392",n:"Scrubber",a:[{o:"827",y:0,z:2,i:"a",e:16.5,a:"1",f:"c",s:17.5},{o:"827",y:0,z:2,i:"b",e:1,a:"1",f:"c",s:254},{f:"c",y:0,z:2,i:"c",e:9,s:9,o:"827"},{f:"c",y:0,z:2,i:"d",e:254,s:0,o:"827"},{f:"c",y:0,z:2,i:"b",e:-11,s:238,o:"828"},{f:"c",y:0,z:2,i:"a",e:-1,s:0,o:"828"},{y:2,i:"c",s:9,z:0,o:"827",f:"c"},{y:2,i:"d",s:254,z:0,o:"827",f:"c"},{y:2,i:"b",s:1,z:0,o:"827",f:"c"},{y:2,i:"a",s:16.5,z:0,o:"827",f:"c"},{y:2,i:"b",s:-11,z:0,o:"828",f:"c"},{y:2,i:"a",s:-1,z:0,o:"828",f:"c"}],f:30,b:[]},"519":{q:false,z:0.1,i:"519",n:"periodic",a:[{f:"c",y:0,z:0.1,i:"a",e:736,s:736,o:"848"},{f:"c",y:0,z:0.1,i:"b",e:48,s:-247,o:"848"},{f:"c",y:0,z:0.1,i:"f",e:180,s:0,o:"877"},{f:"c",y:0,z:0.1,i:"a",e:736,s:736,o:"795"},{f:"c",y:0,z:0.1,i:"b",e:-2,s:-56,o:"795"},{y:0.1,i:"f",s:180,z:0,o:"877",f:"c"},{y:0.1,i:"b",s:-2,z:0,o:"795",f:"c"},{y:0.1,i:"a",s:736,z:0,o:"795",f:"c"},{y:0.1,i:"a",s:736,z:0,o:"848",f:"c"},{y:0.1,i:"b",s:48,z:0,o:"848",f:"c"}],f:30,b:[]},"456":{j:{"2":[[954,502,954,502,1051,336,1051,336]]},q:false,z:2,i:"456",n:"saravan",a:[{o:"845",y:0,z:2,i:"a",e:801.5,a:"2",f:"c",s:929.5},{o:"845",y:0,z:2,i:"b",e:94,a:"2",f:"c",s:478},{f:"c",y:0,z:2,i:"c",e:499,s:49,o:"845"},{f:"c",y:0,z:2,i:"d",e:484,s:48,o:"845"},{f:"c",y:0,z:0.16,i:"e",e:0.63049316,s:0,o:"845"},{f:"c",y:0,z:2,i:"d",e:253,s:0,o:"869"},{f:"c",y:0,z:2,i:"c",e:12,s:12,o:"869"},{f:"c",y:0,z:2,i:"b",e:0,s:254,o:"869"},{f:"c",y:0,z:2,i:"a",e:-1,s:0,o:"871"},{f:"c",y:0,z:2,i:"b",e:-14,s:235,o:"871"},{f:"c",y:0.16,z:1.14,i:"e",e:1,s:0.63049316,o:"845"},{y:2,i:"d",s:253,z:0,o:"869",f:"c"},{y:2,i:"c",s:12,z:0,o:"869",f:"c"},{y:2,i:"a",s:801.5,z:0,o:"845",f:"c"},{y:2,i:"e",s:1,z:0,o:"845",f:"c"},{y:2,i:"b",s:0,z:0,o:"869",f:"c"},{y:2,i:"c",s:499,z:0,o:"845",f:"c"},{y:2,i:"d",s:484,z:0,o:"845",f:"c"},{y:2,i:"a",s:-1,z:0,o:"871",f:"c"},{y:2,i:"b",s:94,z:0,o:"845",f:"c"},{y:2,i:"b",s:-14,z:0,o:"871",f:"c"}],f:30,b:[]},"134":{j:{"0":[[23,254,23,254,23,125,23,125]]},q:false,z:2,i:"134",n:"lines",a:[{f:"c",y:0,z:2,i:"b",e:146,s:243,o:"798"},{f:"c",y:0,z:2,i:"a",e:139,s:52,o:"798"},{f:"c",y:0,z:2,i:"c",e:12,s:12,o:"827"},{f:"c",y:0,z:2,i:"d",e:254,s:0,o:"827"},{f:"c",y:0,z:2,i:"b",e:-15,s:238,o:"828"},{o:"827",y:0,z:2,i:"a",e:17,a:"0",f:"c",s:17},{o:"827",y:0,z:2,i:"b",e:-2,a:"0",f:"c",s:254},{f:"c",y:0,z:2,i:"a",e:117,s:52,o:"796"},{f:"c",y:0,z:2,i:"b",e:184,s:243,o:"796"},{f:"c",y:0,z:2,i:"a",e:155,s:52,o:"809"},{f:"c",y:0,z:2,i:"b",e:84,s:243,o:"809"},{f:"c",y:0,z:2,i:"a",e:17,s:52,o:"830"},{f:"c",y:0,z:2,i:"b",e:303,s:243,o:"830"},{y:2,i:"c",s:12,z:0,o:"827",f:"c"},{y:2,i:"d",s:254,z:0,o:"827",f:"c"},{y:2,i:"a",s:17,z:0,o:"827",f:"c"},{y:2,i:"b",s:-15,z:0,o:"828",f:"c"},{y:2,i:"a",s:117,z:0,o:"796",f:"c"},{y:2,i:"b",s:-2,z:0,o:"827",f:"c"},{y:2,i:"a",s:139,z:0,o:"798",f:"c"},{y:2,i:"b",s:184,z:0,o:"796",f:"c"},{y:2,i:"a",s:155,z:0,o:"809",f:"c"},{y:2,i:"b",s:146,z:0,o:"798",f:"c"},{y:2,i:"a",s:17,z:0,o:"830",f:"c"},{y:2,i:"b",s:84,z:0,o:"809",f:"c"},{y:2,i:"b",s:303,z:0,o:"830",f:"c"}],f:30,b:[]},"514_pressed":{q:false,z:1,i:"514_pressed",n:"514_pressed",a:[{f:"c",y:0,z:1,i:"g",e:"#009193",s:"#134A92",o:"847"},{y:1,i:"g",s:"#009193",z:0,o:"847",f:"c"}],f:30,b:[]},"458":{q:false,z:2,i:"458",n:"oudemans",a:[{f:"c",y:0,z:2,i:"c",e:515,s:60,o:"842"},{f:"c",y:0,z:2,i:"d",e:513,s:60,o:"842"},{f:"c",y:0,z:2,i:"a",e:33,s:52,o:"842"},{f:"c",y:0,z:2,i:"b",e:61,s:276,o:"842"},{f:"c",y:0,z:0.12,i:"e",e:0.48419548,s:-1,o:"842"},{f:"c",y:0,z:2,i:"a",e:-1,s:0,o:"864"},{f:"c",y:0,z:2,i:"b",e:-14,s:235,o:"864"},{f:"c",y:0,z:0,i:"d",e:5,s:10,o:"863"},{f:"c",y:0,z:0,i:"c",e:12,s:12,o:"863"},{f:"c",y:0,z:0,i:"b",e:251,s:246,o:"863"},{f:"c",y:0,z:2,i:"d",e:254,s:5,o:"863"},{f:"c",y:0,z:2,i:"c",e:12,s:12,o:"863"},{f:"c",y:0,z:2,i:"b",e:2,s:251,o:"863"},{f:"c",y:0.12,z:1.18,i:"e",e:1,s:0.48419548,o:"842"},{y:2,i:"e",s:1,z:0,o:"842",f:"c"},{y:2,i:"a",s:33,z:0,o:"842",f:"c"},{y:2,i:"c",s:515,z:0,o:"842",f:"c"},{y:2,i:"d",s:513,z:0,o:"842",f:"c"},{y:2,i:"a",s:-1,z:0,o:"864",f:"c"},{y:2,i:"b",s:61,z:0,o:"842",f:"c"},{y:2,i:"d",s:254,z:0,o:"863",f:"c"},{y:2,i:"c",s:12,z:0,o:"863",f:"c"},{y:2,i:"b",s:-14,z:0,o:"864",f:"c"},{y:2,i:"b",s:2,z:0,o:"863",f:"c"}],f:30,b:[]},kTimelineDefaultIdentifier:{q:false,z:0,i:"kTimelineDefaultIdentifier",n:"Main Timeline",a:[{f:"c",y:0,z:0,i:"b",e:243,s:219,o:"830"},{f:"c",y:0,z:0,i:"a",e:52,s:51,o:"830"},{y:0,i:"b",s:243,z:0,o:"830",f:"c"},{y:0,i:"a",s:52,z:0,o:"830",f:"c"}],f:30,b:[]},"510":{q:false,z:2,i:"510",n:"craters",a:[{f:"c",y:0,z:2,i:"e",e:1,s:0,o:"846"},{f:"c",y:0,z:2,i:"b",e:0,s:0,o:"834"},{f:"c",y:0,z:2,i:"a",e:297,s:0,o:"834"},{f:"c",y:0,z:2,i:"c",e:303,s:15,o:"836"},{y:2,i:"e",s:1,z:0,o:"846",f:"c"},{y:2,i:"b",s:0,z:0,o:"834",f:"c"},{y:2,i:"a",s:297,z:0,o:"834",f:"c"},{y:2,i:"c",s:303,z:0,o:"836",f:"c"}],f:30,b:[]},"514_hover":{q:false,z:1,i:"514_hover",n:"514_hover",a:[{f:"c",y:0,z:1,i:"g",e:"#FF9300",s:"#134A92",o:"847"},{y:1,i:"g",s:"#FF9300",z:0,o:"847",f:"c"}],f:30,b:[]},"457":{j:{"3":[[683,439,683,439,696,318,696,318]],"4":[[27,254,27,254,27,126,27,126]]},q:false,z:2,i:"457",n:"ganges",a:[{o:"832",y:0,z:2,i:"a",e:443,a:"3",f:"c",s:650},{o:"832",y:0,z:2,i:"b",e:39.5,a:"3",f:"c",s:403},{f:"c",y:0,z:2,i:"c",e:506,s:66,o:"832"},{f:"c",y:0,z:2,i:"d",e:557,s:72,o:"832"},{f:"c",y:0,z:0.09,i:"e",e:0.46004567,s:-1,o:"832"},{f:"c",y:0,z:2,i:"a",e:-1,s:0,o:"860"},{f:"c",y:0,z:2,i:"b",e:-15,s:234,o:"860"},{f:"c",y:0,z:2,i:"d",e:255,s:1,o:"859"},{o:"859",y:0,z:2,i:"a",e:21,a:"4",f:"c",s:21},{o:"859",y:0,z:2,i:"b",e:-1.5,a:"4",f:"c",s:253.5},{f:"c",y:0.09,z:1.21,i:"e",e:1,s:0.46004567,o:"832"},{y:2,i:"c",s:506,z:0,o:"832",f:"c"},{y:2,i:"d",s:557,z:0,o:"832",f:"c"},{y:2,i:"e",s:1,z:0,o:"832",f:"c"},{y:2,i:"a",s:443,z:0,o:"832",f:"c"},{y:2,i:"b",s:39.5,z:0,o:"832",f:"c"},{y:2,i:"d",s:255,z:0,o:"859",f:"c"},{y:2,i:"a",s:-1,z:0,o:"860",f:"c"},{y:2,i:"b",s:-15,z:0,o:"860",f:"c"},{y:2,i:"a",s:21,z:0,o:"859",f:"c"},{y:2,i:"b",s:-1.5,z:0,o:"859",f:"c"}],f:30,b:[]}},bZ:180,O:["850","848","849","795","873","846","799","794","797","874","844","877","801","804","796","798","809","872","830","865","842","876","802","832","875","845","867","856","853","851","852","855","854","803","824","819","813","814","815","816","817","818","800","805","820","829","837","838","866","811","810","840","839","822","821","808","806","812","841","823","807","861","862","857","858","868","870","825","826","834","833","835","836","831","843","847","864","860","871","828","863","827","859","869"],n:"iPad Landscape","_":1,v:{"834":{p:"no-repeat",bJ:0.73356503,c:56,q:"100% 100%",d:29,r:"inline",cQ:0.9,f:90,cR:1.2,h:"395",bN:{a:[{p:10,y:false,c:0,A:0,K:0.8,symbolOid:"102",b:"510"}]},w:"",bF:"833",j:"absolute",x:"visible",k:"div",dB:"img",z:3,bH:186,a:0,b:0},"869":{c:12,bS:0,d:0,I:"None",J:"None",K:"None",g:"#7F96A7",L:"None",M:0,w:"",bF:"868",A:"#D8DDE4",j:"absolute",x:"visible",B:"#D8DDE4",P:0,N:0,C:"#D8DDE4",O:0,z:2,D:"#D8DDE4",k:"div",a:20,b:254},"876":{x:"visible",a:63,b:306,j:"absolute",bF:"794",z:44,k:"div",dC:{path:[[1,1,1,1,1,375,1,375]],closed:false},d:376,c:2,dD:1,dE:"#D6D6D6"},"877":{x:"visible",a:1082,bS:0,b:16,j:"absolute",bF:"794",z:38,dC:{path:[[0,0,0,0,14.5,23,14.5,23],[14.5,23,14.5,23,29,0,29,0],[29,0,29,0,0,0,0,0]],closed:true},k:"div",d:23,c:29,cQ:1,dD:0,f:0,cR:1,dE:"#0096FF",g:"#FFF"},"842":{h:"329",p:"no-repeat",a:52,bS:0,q:"100% 100%",x:"visible",j:"absolute",cY:"0",bF:"794",r:"inline",b:276,d:60,z:32,dB:"img",e:0,cQ:1,k:"div",c:60,cR:1},"800":{c:1367,bS:0,d:19,r:"inline",I:"Solid",cQ:1,J:"Solid",K:"Solid",cR:1,g:"#3C4851",L:"Solid",M:0,bF:"794",N:0,A:"#5E5E5E",j:"absolute",x:"visible",B:"#5E5E5E",P:0,O:0,C:"#5E5E5E",z:7,k:"div",D:"#5E5E5E",a:0,b:627},"828":{w:"",h:"395",bN:{a:[{p:10,y:false,c:1,A:0,K:0.79921875,symbolOid:"102",b:"134"}]},x:"visible",p:"no-repeat",q:"100% 100%",bJ:0.77410386,a:0,r:"inline",j:"absolute",bF:"825",b:238,d:29,z:3,dB:"img",k:"div",c:56},"835":{c:326,d:18,I:"None",J:"None",K:"None",g:"#424242",L:"None",M:0,w:"",bF:"833",A:"#D8DDE4",x:"visible",j:"absolute",B:"#D8DDE4",P:0,N:0,C:"#D8DDE4",z:1,O:0,D:"#D8DDE4",k:"div",a:14,b:8},"836":{b:8,c:15,d:18,r:"inline",I:"Solid",J:"Solid",K:"Solid",g:"#7F96A7",L:"Solid",M:0,w:"",bF:"833",j:"absolute",x:"visible",N:0,B:"#5E5E5E",P:0,A:"#5E5E5E",C:"#5E5E5E",O:0,z:2,D:"#5E5E5E",k:"div",tX:0.5,a:22,tY:0.5},"843":{b:813,z:35,K:"Solid",c:308,L:"Solid",d:146,aS:8,M:1,cQ:1,N:1,aT:8,bS:0,O:1,cR:1,aU:8,P:1,dB:"button",bF:"794",aV:8,j:"absolute",k:"div",A:"#D6D6D6",B:"#D6D6D6",Z:"break-word",r:"inline",C:"#D6D6D6",s:"Helvetica,Arial,Sans-Serif",D:"#D6D6D6",t:10,aA:{a:[{p:6}]},G:"#A9A9A9",aP:"pointer",w:"<b style=\"font-size: small;\"><font color=\"#d6d6d6\">Image Source:</font></b><br><span style=\"font-size: 11px;\">HiRise Instrument on MRO (Mars Reconnaissance Orbiter)</span><br><b style=\"font-size: small;\"><font color=\"#d6d6d6\">Orbit:</font></b><br><span style=\"font-size: 11px;\">Polar</span><br><b style=\"font-size: small;\"><font color=\"#d6d6d6\">Projection:</font></b><br><span style=\"font-size: 11px;\">Planocentric Equatorial, distortion free.</span><br><br><br><br><font color=\"#d6d6d6\"><b>Contact:</b></font><br><br>",x:"visible",I:"Solid",a:992,y:"preserve",J:"Solid"},"801":{x:"visible",a:-25,bS:0,b:70,j:"absolute",bF:"794",z:23,k:"div",c:65,d:531,cQ:1,cR:1},"829":{b:651,z:19,K:"Solid",c:191,L:"Solid",d:10,gg:"0",M:4,aS:8,cQ:1,N:4,aT:8,bS:0,O:4,cR:1,aU:8,P:4,bF:"794",Q:0,aV:8,R:"#797979",j:"absolute",S:0,k:"div",T:0,aL:24,A:"#424242",B:"#424242",Z:"break-word",r:"inline",C:"#424242",s:"Helvetica,Arial,Sans-Serif",D:"#424242",t:16,G:"#A9A9A9",w:"Ganges Catena",x:"visible",I:"Solid",a:274,y:"preserve",J:"Solid"},"850":{aU:8,G:"#D6D6D6",c:375,aV:8,r:"inline",d:228,e:0.7,s:"Helvetica,Arial,Sans-Serif",t:16,g:"#212121",Z:"break-word",w:"<font><br><br><br>Periodic Oscillation (in the flat plane):<br><br><br><br>Formation of Oscillation: Unknown<br>Candidate Seismic formation processes:<br>L Wave, S Wave.<br>(Seismic wave propagation origin unlikely due to the observed extreme amplitude &gt;4,000 km).<br></font>",bF:"848",j:"absolute",x:"visible",k:"div",y:"preserve",z:1,aS:8,aT:8,a:0,b:-54},"837":{b:651,z:29,K:"Solid",c:193,L:"Solid",d:10,gg:"0",M:4,aS:8,cQ:1,N:4,aT:8,bS:0,O:4,cR:1,aU:8,P:4,bF:"794",Q:0,aV:8,R:"#797979",j:"absolute",S:0,k:"div",T:0,aL:24,A:"#424242",B:"#424242",Z:"break-word",r:"inline",C:"#424242",s:"Helvetica,Arial,Sans-Serif",D:"#424242",t:16,G:"#A9A9A9",w:"SARAVAN (Catena)",x:"visible",I:"Solid",a:489,y:"preserve",J:"Solid"},"844":{aU:8,G:"#EBEBEB",c:717,bS:0,aV:8,r:"inline",d:73,cQ:1,s:"'Helvetica Neue',Arial,Helvetica,Sans-Serif",t:23,Y:23,cR:1,Z:"break-word",v:"bold",w:"<font><span style=\"font-size: 44px;\">VMOI</span> <br>Valles Marineris Observation Interface</font>",bF:"794",j:"absolute",x:"visible",k:"div",y:"preserve",z:30,aS:8,aT:8,a:16,b:16},"802":{aU:8,G:"#C7CDD4",c:49,aV:8,r:"inline",d:18,s:"Helvetica,Arial,Sans-Serif",f:90,t:16,Z:"break-word",w:"-10\u00baN",bF:"801",j:"absolute",x:"visible",k:"div",y:"preserve",z:2,aS:8,aT:8,a:0,b:249},"851":{x:"visible",a:85,bS:0,b:539,j:"absolute",bF:"794",z:24,k:"div",c:175,d:30,cQ:1,cR:1},"838":{b:651,z:26,K:"Solid",c:193,L:"Solid",d:10,gg:"0",M:4,aS:8,cQ:1,N:4,aT:8,bS:0,O:4,cR:1,aU:8,P:4,bF:"794",Q:0,aV:8,R:"#797979",j:"absolute",S:0,k:"div",T:0,aL:24,A:"#424242",B:"#424242",Z:"break-word",r:"inline",C:"#424242",s:"Helvetica,Arial,Sans-Serif",D:"#424242",t:16,G:"#A9A9A9",w:"Main Curvatures",x:"visible",I:"Solid",a:742,y:"preserve",J:"Solid"},"810":{x:"visible",a:45,bS:0,b:662,j:"absolute",bF:"794",z:9,k:"div",c:249,d:346,cQ:1,cR:1},"845":{p:"no-repeat",b:478,c:49,q:"100% 100%",bS:0,d:48,r:"inline",cY:"0",e:0,cQ:1,f:0,cR:1,h:"327",bF:"794",j:"absolute",x:"visible",k:"div",dB:"img",z:31,tX:0.5,a:929,tY:0.5},"803":{aU:8,G:"#C7CDD4",c:49,aV:8,r:"inline",d:18,s:"Helvetica,Arial,Sans-Serif",f:90,t:16,Z:"break-word",w:"-20\u00baN",bF:"801",j:"absolute",x:"visible",k:"div",y:"preserve",z:3,aS:8,aT:8,a:0,b:497},"852":{aV:8,w:"500 km",x:"visible",a:60,Z:"break-word",y:"preserve",j:"absolute",bF:"851",r:"inline",yy:"nowrap",s:"Helvetica,Arial,Sans-Serif",b:0,z:2,t:12,aS:8,aT:8,aU:8,G:"#EBEBEB",k:"div"},"839":{x:"visible",a:257,bS:0,b:662,j:"absolute",bF:"794",z:8,k:"div",c:249,d:346,cQ:1,cR:1},"804":{aU:8,G:"#C7CDD4",c:33,aV:8,r:"inline",d:18,s:"Helvetica,Arial,Sans-Serif",f:90,t:16,Z:"break-word",w:"0\u00baN",bF:"801",j:"absolute",x:"visible",k:"div",y:"preserve",z:1,aS:8,aT:8,a:8,b:0},"811":{h:"423",p:"no-repeat",x:"visible",a:0,q:"100% 100%",b:0,j:"absolute",r:"inline",z:1,bF:"810",dB:"img",d:346,k:"div",c:249,e:0.46162971},"846":{w:"",h:"492",p:"no-repeat",a:1,bS:0,q:"100% 100%",x:"visible",j:"absolute",bF:"794",r:"inline",b:0,z:3,d:635,dB:"img",cQ:1,e:0,k:"div",c:1367,cR:1},"853":{x:"visible",k:"div",c:175,d:30,z:1,r:"inline",a:0,j:"absolute",bF:"851",b:0},"860":{w:"",h:"395",bN:{a:[{p:10,y:false,c:1,A:0,K:0.8,symbolOid:"102",b:"457"}]},x:"visible",p:"no-repeat",q:"100% 100%",bJ:0.77410386,a:0,r:"inline",j:"absolute",bF:"857",b:234,d:29,z:3,dB:"img",k:"div",c:56},"847":{b:935,z:36,K:"None",c:69,L:"None",d:16,aS:6,M:0,bD:"none",cQ:1,N:0,aT:6,bS:0,O:0,cR:1,aU:6,g:"#134A92",P:0,bF:"794",dB:"button",aV:6,j:"absolute",k:"div",aI:4,aJ:4,aK:4,aL:4,A:"#0096FF",B:"#0096FF",aM:"514_hover",r:"inline",C:"#0096FF",Z:"break-word",aN:"514_pressed",D:"#0096FF",t:13,F:"center",v:"bold",G:"#A9A9A9",aP:"pointer",w:"<font><span style=\"word-spacing: -1.28792px; letter-spacing: 0.928141px;\">Emai</span>l</font>",aB:{a:[{p:6,m:"Periodic Oscillation",l:"danjamesdeveloper@gmail.com"}]},x:"visible",I:"None",a:1056,y:"preserve",J:"None"},"805":{c:1377,bS:0,d:389,r:"inline",I:"Solid",cQ:1,J:"Solid",K:"Solid",cR:1,g:"#212121",L:"Solid",M:0,w:"",bF:"794",A:"#5E5E5E",j:"absolute",x:"visible",B:"#5E5E5E",P:0,N:0,C:"#5E5E5E",O:0,z:1,D:"#5E5E5E",k:"div",a:-9,b:635},"812":{h:"421",p:"no-repeat",x:"visible",a:69,q:"100% 100%",b:34,j:"absolute",r:"inline",z:2,bF:"810",dB:"img",d:278,k:"div",c:61,e:0.34203384},"854":{c:169,d:13,I:"Solid",J:"Solid",K:"Solid",g:"#424242",L:"Solid",M:0,bF:"853",N:0,A:"#5E5E5E",x:"visible",j:"absolute",B:"#5E5E5E",P:0,O:0,C:"#5E5E5E",z:1,k:"div",D:"#5E5E5E",a:3,b:8},"861":{x:"visible",bF:"794",k:"div",c:56,d:264,z:16,a:67,j:"absolute",bN:{a:[{p:10,y:true,c:1,A:0,K:1,symbolOid:"102",b:"458"}]},b:711},"848":{x:"visible",a:736,bS:0,b:-247,j:"absolute",bF:"794",z:37,k:"div",c:391,d:190,cQ:1,cR:1},"806":{x:"visible",a:726,bS:0,b:665,j:"absolute",bF:"794",z:6,k:"div",c:249,d:346,cQ:1,cR:1},"813":{x:"visible",a:70,bS:0,b:619,j:"absolute",bF:"794",z:22,k:"div",c:1282,d:35,cQ:1,cR:1},"820":{b:651,z:25,K:"Solid",c:187,L:"Solid",d:10,gg:"0",M:4,aS:8,cQ:1,N:4,aT:8,bS:0,O:4,cR:1,aU:8,P:4,bF:"794",Q:0,aV:8,R:"#797979",j:"absolute",S:0,k:"div",T:0,aL:24,A:"#424242",B:"#424242",Z:"break-word",r:"inline",C:"#424242",s:"Helvetica,Arial,Sans-Serif",D:"#424242",t:16,G:"#A9A9A9",w:"Oudemans Catena",x:"visible",I:"Solid",a:63,y:"preserve",J:"Solid"},"855":{x:"visible",a:169,b:0,j:"absolute",bF:"853",z:2,k:"div",dC:{path:[[3,3,3,3,3,27,3,27]],closed:false},d:30,c:6,dD:3,dE:"#424242"},"862":{c:13,d:256,I:"None",J:"None",K:"None",g:"#424242",L:"None",M:0,bF:"861",N:0,A:"#424242",x:"visible",j:"absolute",B:"#424242",P:0,O:0,C:"#424242",z:1,k:"div",D:"#424242",a:21,b:0},"849":{w:"",h:"515",p:"no-repeat",x:"visible",a:46.5,q:"100% 100%",b:22,j:"absolute",r:"inline",z:2,bF:"848",dB:"img",d:65,k:"div",c:201},"807":{h:"421",p:"no-repeat",x:"visible",a:74,q:"100% 100%",b:36,j:"absolute",r:"inline",z:2,bF:"806",dB:"img",d:274,k:"div",c:60,e:0.34203384},"814":{aV:8,w:"280\u00baE",x:"visible",a:247,Z:"break-word",y:"preserve",j:"absolute",bF:"813",r:"inline",yy:"nowrap",s:"Helvetica,Arial,Sans-Serif",b:0,z:2,t:16,aS:8,aT:8,aU:8,G:"#CACACA",k:"div"},"821":{x:"visible",a:473,bS:0,b:662,j:"absolute",bF:"794",z:5,k:"div",c:249,d:346,cQ:1,cR:1},"856":{x:"visible",a:0,b:0,j:"absolute",bF:"853",z:3,k:"div",dC:{path:[[3,3,3,3,3,27,3,27]],closed:false},d:30,c:6,dD:3,dE:"#424242"},"863":{c:12,d:10,I:"None",J:"None",K:"None",g:"#7F96A7",L:"None",M:0,w:"",bF:"861",A:"#D8DDE4",x:"visible",j:"absolute",B:"#D8DDE4",P:0,N:0,C:"#D8DDE4",z:2,O:0,D:"#D8DDE4",k:"div",a:22,b:246},"870":{b:0,c:12,d:254,I:"Solid",J:"Solid",K:"Solid",g:"#424242",L:"Solid",M:0,w:"",bF:"868",j:"absolute",x:"visible",A:"#5E5E5E",B:"#5E5E5E",P:0,N:0,C:"#5E5E5E",O:0,z:1,D:"#5E5E5E",k:"div",tX:0.5,a:22,tY:0.5},"794":{x:"hidden",k:"div",c:1366,d:1024,z:0,a:0,bS:383,j:"absolute",b:0},"822":{h:"423",p:"no-repeat",x:"visible",a:0,q:"100% 100%",b:0,j:"absolute",r:"inline",z:1,bF:"821",dB:"img",d:346,k:"div",c:249,e:0.46162971},"808":{h:"423",p:"no-repeat",x:"visible",a:0,q:"100% 100%",b:0,j:"absolute",r:"inline",z:1,bF:"806",dB:"img",d:346,k:"div",c:249,e:0.46162971},"815":{aV:8,w:"290\u00baE",x:"visible",a:489,Z:"break-word",y:"preserve",j:"absolute",bF:"813",r:"inline",yy:"nowrap",s:"Helvetica,Arial,Sans-Serif",b:0,z:3,t:16,aS:8,aT:8,aU:8,G:"#CACACA",k:"div"},"857":{x:"visible",bF:"794",k:"div",c:56,d:263,z:17,a:279,j:"absolute",bN:{a:[{p:10,y:true,c:1,A:0,K:1,symbolOid:"102",b:"457"}]},b:713},"864":{w:"",h:"395",bN:{a:[{p:10,y:false,c:1,A:0,K:0.8,symbolOid:"102",b:"458"}]},x:"visible",p:"no-repeat",q:"100% 100%",bJ:0.77410386,a:0,r:"inline",j:"absolute",bF:"861",b:235,d:29,z:3,dB:"img",k:"div",c:56},"871":{w:"",h:"395",bN:{a:[{p:10,y:false,c:1,A:0,K:0.8,symbolOid:"102",b:"456"}]},x:"visible",p:"no-repeat",q:"100% 100%",bJ:0.77410386,a:0,r:"inline",j:"absolute",bF:"868",b:235,d:29,z:3,dB:"img",k:"div",c:56},"795":{c:391,bS:0,d:50,I:"Solid",cQ:1,J:"Solid",K:"Solid",cR:1,L:"Solid",aP:"pointer",M:0,bF:"794",N:0,A:"#0096FF",j:"absolute",x:"visible",B:"#0096FF",O:0,P:0,C:"#0096FF",z:40,dB:"button",D:"#0096FF",aA:{a:[{b:"519",p:3,z:true,symbolOid:"102"}]},k:"div",a:736,b:-56},"823":{h:"421",p:"no-repeat",x:"visible",a:69,q:"100% 100%",b:34,j:"absolute",r:"inline",z:2,bF:"821",dB:"img",d:278,k:"div",c:61,e:0.34203384},"830":{x:"visible",a:52,bS:0,b:243,j:"absolute",r:"inline",z:10,dC:{path:[[3,5.6419,60.661,1.8827,79.2613,3.7623,125.7621,5.6419],[125.7621,5.6419,181.5184,7.8956,233.586,17.2409,263.4044,22.5583],[263.4044,22.5583,295.0249,28.1971,371.2862,52.6319,419.647,69.5483],[419.647,69.5483,454.33,81.6803,572.2441,114.1139,662.2406,137.7296],[662.2406,137.7296,697.7322,147.0429,728.8818,154.9847,748.8725,159.7692],[748.8725,159.7692,798.5723,171.664,847.2528,183.6213,914.4152,193.602],[914.4152,193.602,977.6563,203,1011.0749,203,1039.0373,203],[1039.0373,203,1070.6579,203,1079.958,203,1115.2986,197.3612],[1115.2986,197.3612,1126.7691,195.531,1168.0477,186.5509,1199,171.0468]],closed:false},bF:"794",d:206,k:"div",cQ:1,dD:3,c:1202,cR:1,dE:"#D4FB79"},"809":{x:"visible",a:52,bS:0,b:243,j:"absolute",r:"inline",z:12,dC:{path:[[3,5.6419,60.661,1.8827,79.2613,3.7623,125.7621,5.6419],[125.7621,5.6419,181.5184,7.8956,233.586,17.2409,263.4044,22.5583],[263.4044,22.5583,295.0249,28.1971,371.2862,52.6319,419.647,69.5483],[419.647,69.5483,454.33,81.6803,572.2441,114.1139,662.2406,137.7296],[662.2406,137.7296,697.7322,147.0429,728.8818,154.9847,748.8725,159.7692],[748.8725,159.7692,798.5723,171.664,847.2528,183.6213,914.4152,193.602],[914.4152,193.602,977.6563,203,1011.0749,203,1039.0373,203],[1039.0373,203,1070.6579,203,1079.958,203,1115.2986,197.3612],[1115.2986,197.3612,1126.7691,195.531,1168.0477,186.5509,1199,171.0468]],closed:false},bF:"794",d:206,k:"div",cQ:1,dD:3,c:1202,cR:1,dE:"#D4FB79"},"816":{aV:8,w:"300\u00baE",x:"visible",a:734,Z:"break-word",y:"preserve",j:"absolute",bF:"813",r:"inline",yy:"nowrap",s:"Helvetica,Arial,Sans-Serif",b:0,z:4,t:16,aS:8,aT:8,aU:8,G:"#CACACA",k:"div"},"858":{c:12,d:254,I:"None",J:"None",K:"None",g:"#424242",L:"None",M:0,w:"",bF:"857",A:"#D8DDE4",x:"visible",j:"absolute",B:"#D8DDE4",P:0,N:0,C:"#D8DDE4",z:1,O:0,D:"#D8DDE4",k:"div",a:21,b:0},"865":{c:21,bS:0,d:397,I:"Solid",cQ:1,J:"Solid",K:"Solid",cR:1,g:"#3C4851",L:"Solid",M:0,bF:"794",N:0,A:"#5E5E5E",j:"absolute",x:"visible",B:"#5E5E5E",P:0,O:0,C:"#5E5E5E",z:20,k:"div",D:"#5E5E5E",a:1352,b:238},"872":{x:"visible",a:52,bS:0,b:243,j:"absolute",r:"inline",z:11,dC:{path:[[3,5.6419,60.661,1.8827,79.2613,3.7623,125.7621,5.6419],[125.7621,5.6419,181.5184,7.8956,233.586,17.2409,263.4044,22.5583],[263.4044,22.5583,295.0249,28.1971,371.2862,52.6319,419.647,69.5483],[419.647,69.5483,454.33,81.6803,572.2441,114.1139,662.2406,137.7296],[662.2406,137.7296,697.7322,147.0429,728.8818,154.9847,748.8725,159.7692],[748.8725,159.7692,798.5723,171.664,847.2528,183.6213,914.4152,193.602],[914.4152,193.602,977.6563,203,1011.0749,203,1039.0373,203],[1039.0373,203,1070.6579,203,1079.958,203,1115.2986,197.3612],[1115.2986,197.3612,1126.7691,195.531,1168.0477,186.5509,1199,171.0468]],closed:false},bF:"794",d:206,k:"div",cQ:1,dD:3,c:1202,cR:1,dE:"#D4FB79"},"796":{x:"visible",a:52,bS:0,b:243,j:"absolute",r:"inline",z:14,dC:{path:[[3,5.6419,60.661,1.8827,79.2613,3.7623,125.7621,5.6419],[125.7621,5.6419,181.5184,7.8956,233.586,17.2409,263.4044,22.5583],[263.4044,22.5583,295.0249,28.1971,371.2862,52.6319,419.647,69.5483],[419.647,69.5483,454.33,81.6803,572.2441,114.1139,662.2406,137.7296],[662.2406,137.7296,697.7322,147.0429,728.8818,154.9847,748.8725,159.7692],[748.8725,159.7692,798.5723,171.664,847.2528,183.6213,914.4152,193.602],[914.4152,193.602,977.6563,203,1011.0749,203,1039.0373,203],[1039.0373,203,1070.6579,203,1079.958,203,1115.2986,197.3612],[1115.2986,197.3612,1126.7691,195.531,1168.0477,186.5509,1199,171.0468]],closed:false},bF:"794",d:206,k:"div",cQ:1,dD:3,c:1202,cR:1,dE:"#D4FB79"},"817":{aV:8,w:"310\u00baE",x:"visible",a:971,Z:"break-word",y:"preserve",j:"absolute",bF:"813",r:"inline",yy:"nowrap",s:"Helvetica,Arial,Sans-Serif",b:1,z:5,t:16,aS:8,aT:8,aU:8,G:"#CACACA",k:"div"},"824":{h:"421",p:"no-repeat",x:"visible",a:1152,q:"100% 100%",bS:0,j:"absolute",bF:"794",r:"inline",b:606,z:4,d:296,dB:"img",cQ:5.9,e:0.23539895,k:"div",c:7,f:90,cR:1.14},"831":{aU:8,G:"#FFF",c:316,bS:0,aV:8,r:"inline",d:39,e:0.4,s:"Helvetica,Arial,Sans-Serif",cQ:1,t:14,Y:13,cR:1,Z:"break-word",w:"<span style=\"font-size: 12px;\">Use slider to subtract <b>Circular Craters</b> from image leaving only features specific to the observed Periodoc Oscillation.</span><br>",bF:"794",j:"absolute",x:"visible",k:"div",y:"preserve",z:34,aS:8,aT:8,a:986,b:764},"859":{b:253,c:12,d:1,I:"Solid",J:"Solid",K:"Solid",g:"#7F96A7",L:"Solid",M:0,w:"",bF:"857",j:"absolute",x:"visible",A:"#5E5E5E",B:"#5E5E5E",P:0,N:0,C:"#5E5E5E",O:0,z:2,D:"#5E5E5E",k:"div",tX:0.5,a:21,tY:0.5},"866":{b:654,z:28,K:"Solid",c:302,L:"Solid",d:7,gg:"0",M:4,aS:8,cQ:1,N:4,aT:8,bS:0,O:4,cR:1,aU:8,P:4,bF:"794",Q:0,aV:8,R:"#797979",j:"absolute",S:0,k:"div",T:0,aL:24,A:"#424242",Y:13,B:"#424242",Z:"break-word",r:"inline",C:"#424242",s:"Helvetica,Arial,Sans-Serif",D:"#424242",t:16,G:"#A9A9A9",w:"Crater Subtraction",x:"visible",I:"Solid",a:991,y:"preserve",J:"Solid"},"873":{c:22,bS:0,d:651,I:"Solid",cQ:1,J:"Solid",K:"Solid",cR:1,g:"#3C4851",L:"Solid",M:0,w:"",bF:"794",A:"#5E5E5E",j:"absolute",x:"visible",B:"#5E5E5E",P:0,N:0,C:"#5E5E5E",O:0,z:21,D:"#5E5E5E",k:"div",a:-9,b:-16},"797":{c:1117,bS:0,d:12,I:"Solid",cQ:1,J:"Solid",K:"Solid",cR:1,g:"#3C4851",L:"Solid",M:0,bF:"794",N:0,A:"#0096FF",j:"absolute",x:"visible",B:"#0096FF",P:0,O:0,C:"#0096FF",z:41,k:"div",D:"#0096FF",a:10,b:-2},"818":{aV:8,w:"320\u00baE",x:"visible",a:1214,Z:"break-word",y:"preserve",j:"absolute",bF:"813",r:"inline",yy:"nowrap",s:"Helvetica,Arial,Sans-Serif",b:0,z:6,t:16,aS:8,aT:8,aU:8,G:"#CACACA",k:"div"},"825":{x:"visible",bF:"794",k:"div",c:56,d:267,z:15,a:755,j:"absolute",bN:{a:[{p:10,y:true,c:1,A:0,K:1,symbolOid:"102",b:"134"}]},b:710},"832":{p:"no-repeat",b:403,c:66,q:"100% 100%",bS:0,d:72,r:"inline",e:0,cQ:1,f:3,cR:1,h:"345",w:"",bF:"794",j:"absolute",x:"visible",k:"div",dB:"img",z:33,tX:0.5,a:650,tY:0.5},"867":{x:"visible",a:489,b:500,j:"absolute",bF:"794",z:42,k:"div",dC:{path:[[1,182,1,182,1,1,1,1],[1,1,1,1,457,1,457,1]],closed:false},d:183,c:458,dD:1,dE:"#D6D6D6"},"874":{aU:8,G:"#EBEBEB",c:382,bS:0,aV:8,r:"inline",d:32,e:0.42609576,s:"Helvetica,Arial,Sans-Serif",cQ:1,t:23,Y:41,cR:1,g:"#000",Z:"break-word",aP:"pointer",w:"<font>Periodic Oscillation</font>",bF:"794",j:"absolute",x:"visible",aA:{a:[{b:"519",p:3,z:false,symbolOid:"102"}]},k:"div",y:"preserve",dB:"button",z:39,aS:8,aT:8,a:736,b:0},"798":{x:"visible",a:52,bS:0,b:243,j:"absolute",r:"inline",z:13,dC:{path:[[3,5.6419,60.661,1.8827,79.2613,3.7623,125.7621,5.6419],[125.7621,5.6419,181.5184,7.8956,233.586,17.2409,263.4044,22.5583],[263.4044,22.5583,295.0249,28.1971,371.2862,52.6319,419.647,69.5483],[419.647,69.5483,454.33,81.6803,572.2441,114.1139,662.2406,137.7296],[662.2406,137.7296,697.7322,147.0429,728.8818,154.9847,748.8725,159.7692],[748.8725,159.7692,798.5723,171.664,847.2528,183.6213,914.4152,193.602],[914.4152,193.602,977.6563,203,1011.0749,203,1039.0373,203],[1039.0373,203,1070.6579,203,1079.958,203,1115.2986,197.3612],[1115.2986,197.3612,1126.7691,195.531,1168.0477,186.5509,1199,171.0468]],closed:false},bF:"794",d:206,k:"div",cQ:1,dD:3,c:1202,cR:1,dE:"#D4FB79"},"819":{aV:8,w:"270\u00baE",x:"visible",a:0,Z:"break-word",y:"preserve",j:"absolute",bF:"813",r:"inline",yy:"nowrap",s:"Helvetica,Arial,Sans-Serif",b:0,z:1,t:16,aS:8,aT:8,aU:8,G:"#CACACA",k:"div"},"826":{c:12,d:254,I:"None",J:"None",K:"None",g:"#424242",L:"None",M:0,w:"",bF:"825",A:"#D8DDE4",x:"visible",j:"absolute",B:"#D8DDE4",P:0,N:0,C:"#D8DDE4",z:1,O:0,D:"#D8DDE4",k:"div",a:16,b:0},"833":{x:"visible",bF:"794",k:"div",c:340,d:29,z:27,a:977,j:"absolute",bN:{a:[{p:10,y:true,c:0,A:0,K:1,symbolOid:"102",b:"510"}]},b:705},"840":{h:"423",p:"no-repeat",x:"visible",a:0,q:"100% 100%",b:0,j:"absolute",r:"inline",z:1,bF:"839",dB:"img",d:346,k:"div",c:249,e:0.46162971},"868":{x:"visible",bF:"794",k:"div",c:56,d:264,z:18,a:494,j:"absolute",bN:{a:[{p:10,y:true,c:1,A:0,K:1,symbolOid:"102",b:"456"}]},b:711},"875":{x:"visible",a:275,b:441,j:"absolute",bF:"794",z:43,k:"div",dC:{path:[[1,240,1,240,1,1,1,1],[1,1,1,1,374,3,374,3]],closed:false},d:241,c:375,dD:1,dE:"#D6D6D6"},"799":{h:"107",p:"no-repeat",x:"visible",a:1,q:"100% 100%",bS:0,j:"absolute",bF:"794",r:"inline",b:0,z:2,d:635,dB:"img",cQ:1,e:1,k:"div",c:1367,cR:1},"841":{h:"421",p:"no-repeat",x:"visible",a:69,q:"100% 100%",b:34,j:"absolute",r:"inline",z:2,bF:"839",dB:"img",d:278,k:"div",c:61,e:0.34203384},"827":{b:254,c:15,d:0,I:"Solid",J:"Solid",K:"Solid",g:"#7F96A7",L:"Solid",M:0,w:"",bF:"825",j:"absolute",x:"visible",A:"#5E5E5E",B:"#5E5E5E",P:0,N:0,C:"#5E5E5E",O:0,z:2,D:"#5E5E5E",k:"div",tX:0.5,a:13,tY:0.5}}}],{},h,{},null,false,true,-1,true,false,true,true,true);d[f]=c.API;document.getElementById(g).setAttribute("HYP_dn",f);c.z_o(this.body)})();})();
