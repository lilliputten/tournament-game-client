(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{8312:function(e,t,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return a(1198)}])},1198:function(e,t,a){"use strict";a.r(t),a.d(t,{default:function(){return eh}});var n,r,c,l,s,i,o,u,m,p,d,f,h,_,x,N,Z,E,j=a(5893),C=a(7294),g=a(7694),w=a(6493),v=a(6333),k=a(7568),S=a(655),b=a(7236),B=a(6041),M=a(4347);function T(){return(T=(0,k.Z)(function(e){var t,a,n;return(0,S.__generator)(this,function(r){return t="POST",a=B.Z.api.apiUrlPrefix+"/setName",n={name:e.name},[2,(0,M.i)({url:a,method:t,data:n}).then(function(e){var t=e.Token,a=e.success,n=e.error;if(!a||n)throw Error(n||"Операция завершена с неопределённой ошибкой");if(!t)throw Error("Не получен токен сессии!");return{token:t}}).catch(function(r){var c=Error("Ошибка сохранения имени: "+r.message);throw console.error("[postSetName]: request catch",{error:r,queryData:n,params:e,method:t,url:a}),c})]})})).apply(this,arguments)}(0,b.hg)("articles/postSetNameThunk",(n=(0,k.Z)(function(e){return(0,S.__generator)(this,function(t){switch(t.label){case 0:return[4,function(e){return T.apply(this,arguments)}(e)];case 1:return[2,t.sent()]}})}),function(e){return n.apply(this,arguments)}));var F=a(7925),y=a(2720),P=a(5409),G=a(7433),D=a(603),W=a(1163),O=a(8122),q=a(6863),L=a(7357),X=a(6447),A=a(5861),I=a(4184),K=a.n(I),Q=a(657),U=a(8557),V=a(594),Y=a(7036),z=a(423),H=a(7558),R=a.n(H);function J(e){var t=e.className,a=e.onClose,n=e.onSubmit,r=e.name,c=e.open,l=(0,D.Z)(C.useState(r),2),s=l[0],i=l[1],o=C.useCallback(function(e){i(e.currentTarget.value)},[]),u=C.useCallback(function(){n(s)},[s,n]),m=C.useCallback(function(e){null==e||e.preventDefault(),u()},[u]);return(0,j.jsxs)(Q.Z,{className:K()(t,R().container),onClose:a,open:c,children:[(0,j.jsx)(U.Z,{className:R().dialogTitle,children:"Выбрать имя"}),(0,j.jsx)(L.Z,{m:3,children:(0,j.jsx)("form",{className:R().form,onSubmit:m,children:(0,j.jsxs)(X.Z,{direction:"column",spacing:3,children:[(0,j.jsx)(X.Z,{direction:"row",spacing:2,children:(0,j.jsx)(z.Z,{id:"name",label:"Имя",variant:"filled",defaultValue:r,onChange:o,autoFocus:!0,fullWidth:!0})}),(0,j.jsxs)(X.Z,{direction:"row",spacing:2,children:[(0,j.jsx)(O.Z,{className:"FixMuiButton",disabled:!s,onClick:u,variant:"contained",startIcon:(0,j.jsx)(Y.Z,{}),children:(0,j.jsx)("span",{className:"Text",children:"Продолжить"})}),(0,j.jsx)(O.Z,{className:"FixMuiButton",onClick:a,variant:"outlined",startIcon:(0,j.jsx)(V.Z,{}),children:(0,j.jsx)("span",{className:"Text",children:"Отменить"})})]})]})})})]})}var $=a(6322),ee=a(9280);function et(){return(et=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}var ea=function(e){return C.createElement("svg",et({width:125,height:191,fill:"none",xmlns:"http://www.w3.org/2000/svg"},e),u||(u=C.createElement("ellipse",{cx:63.946,cy:175.242,rx:59.672,ry:14.918,fill:"#EEE"})),m||(m=C.createElement("path",{d:"M87.412 86.349c12.718-8.74 21.18-17.886 26.476-24.534 9.752-12.247 11.119-19.003 10.633-24.175-.21-2.246-.697-6.7-4.308-9.7-4.528-3.762-10.612-2.44-11.575-2.214-.589 2.287-1.183 4.578-1.773 6.864.523-.354 3.238-2.138 6.234-1.23 2.366.718 3.57 2.706 3.79 3.076 3.473 5.751-2.745 15.706-5.767 20.545a59.141 59.141 0 0 1-8.211 10.345c-5.163 7.003-10.33 14.01-15.499 21.023Z",fill:"#FED753"})),p||(p=C.createElement("path",{d:"M15.874 35.691c-.655-.128-5.654-1.025-8.241 1.923-2.12 2.42-1.368 5.998-.794 8.54 2.336 10.36 11.192 18.116 16.186 21.879A112.132 112.132 0 0 0 41.7 88.24a140.282 140.282 0 0 1-11.397-7.023C18.45 73.103 5.313 64.11 1.318 49.49c-1.025-3.742-2.71-9.924.788-14.815C6 29.238 13.626 29.13 14.973 29.13c.297 2.189.599 4.373.901 6.561Z",fill:"#CF9834"})),d||(d=C.createElement("path",{d:"M13.994 20.39a45.704 45.704 0 0 1 7.99-8.817C36.484-.72 54.678-.202 65.752.116c9.89.281 22.685.81 34.86 9.416a49.356 49.356 0 0 1 9.204 8.469c-1.219 13.113-2.443 26.22-3.662 39.334-2.92 8.186-9.491 22.53-23.95 33.36a65.594 65.594 0 0 1-11.044 6.68 22.937 22.937 0 0 1-8.046 1.292 22.573 22.573 0 0 1-5.143-.707 81.315 81.315 0 0 1-35.623-30.983 293.081 293.081 0 0 1-3.37-14.133 288.41 288.41 0 0 1-4.984-32.454Z",fill:"#F2BB2E"})),f||(f=C.createElement("path",{d:"M69.291 29.678c-3.048-5.449-6.095-10.903-9.143-16.352-2.146 5.572-4.297 11.144-6.443 16.716-6.172 2.271-12.344 4.542-18.516 6.818 4.938 2.958 9.875 5.91 14.818 8.869-.446 6.459-.896 12.918-1.342 19.377l14.843-11.688c5.973 3.593 11.94 7.187 17.912 10.78-1.952-6.766-3.898-13.538-5.85-20.305 4.349-3.916 8.698-7.832 13.041-11.749-6.438-.82-12.877-1.64-19.32-2.466Z",fill:"#CF9834"})),h||(h=C.createElement("path",{d:"M69.844 30.545c-2.77-4.957-5.542-9.91-8.313-14.866l-5.854 15.199-16.83 6.198c4.491 2.686 8.978 5.372 13.47 8.063-.405 5.875-.815 11.744-1.22 17.619 4.498-3.542 9-7.085 13.497-10.622 5.43 3.266 10.854 6.536 16.283 9.802-1.772-6.152-3.545-12.303-5.317-18.46 3.954-3.557 7.903-7.12 11.858-10.678-5.865-.758-11.72-1.507-17.574-2.255ZM71.16 97.37a24.183 24.183 0 0 1-13.194.58c.63.768 1.547 2.009 2.362 3.69.691 1.42 2.975 6.111 1.516 11.591-.287 1.081-.876 2.783-2.193 4.659.226.277 2.239 2.651 5.583 2.538 3.412-.113 5.276-2.712 5.47-2.989-1.526-1.45-2.14-2.819-2.422-3.783-1.644-5.603.148-10.862 1.014-12.867a21.565 21.565 0 0 1 1.864-3.419Z",fill:"#FED753"})),_||(_=C.createElement("path",{d:"M46.314 142.173c4.446-8.089 8.892-16.183 13.337-24.272.661.446 2.838 1.789 5.865 1.579 2.704-.19 4.538-1.513 5.189-2.03 5.03 8.089 10.054 16.183 15.084 24.272a56.46 56.46 0 0 1-17.338 3.717c-9.706.513-17.481-1.599-22.137-3.266Z",fill:"#F2BB2E"})),x||(x=C.createElement("path",{d:"M41.15 146.792a6.448 6.448 0 0 1 1.133-3.158c1.623-2.296 4.246-2.645 4.712-2.696a57.423 57.423 0 0 0 17.62 3.148 57.438 57.438 0 0 0 20.41-3.332c.426.025 2.546.184 4.175 1.973 1.454 1.605 1.562 3.455 1.572 3.942a80.931 80.931 0 0 1-49.622.123Z",fill:"#FED753"})),N||(N=C.createElement("path",{d:"M41.694 146.767c-.559 0-1.742.076-2.935.82-2.028 1.271-2.453 3.455-2.525 3.839-.092 5.675-.185 11.355-.272 17.03 5.23 2.722 15.853 7.356 30.005 7.453 14.935.103 26.096-4.906 31.341-7.684-.087-5.034-.18-10.073-.266-15.107-.031-.595-.21-2.681-1.865-4.409-2.32-2.424-5.552-2.076-5.92-2.03a74.279 74.279 0 0 1-23.065 3.953 74.376 74.376 0 0 1-24.498-3.865Z",fill:"#F2BB2E"})),Z||(Z=C.createElement("path",{opacity:.65,d:"M13.994 20.39a45.285 45.285 0 0 1 5.286-6.336 44.814 44.814 0 0 1 6.085-5.075c-1.603 8.043-3.186 21.248.005 36.904.789 3.885 2.377 11.436 6.54 19.864 8.81 17.839 23.398 27.922 32.141 32.843l-4.927-.4a77.593 77.593 0 0 1-14.849-8.048c-11.13-7.72-17.998-16.85-21.937-23.175a280.5 280.5 0 0 1-8.344-46.577Z",fill:"#E1A832"})),E||(E=C.createElement("path",{opacity:.31,d:"m57.966 97.955 6.085.646a71.927 71.927 0 0 1 0 11.851c-1.183 14.246-6.418 25.329-10.602 32.306-.528-.031-2.07-.062-3.524.964-2.32 1.635-2.336 4.49-2.33 4.762-.549.051-2.341.282-3.842 1.753-1.987 1.948-1.885 4.506-1.86 4.911-.358 5.198-.711 10.396-1.07 15.594-1.618-.759-3.237-1.517-4.86-2.281.091-5.675.184-11.355.27-17.03.067-.384.498-2.573 2.526-3.839a5.463 5.463 0 0 1 2.935-.82c-.02-.344-.103-2.558 1.629-4.265 1.465-1.441 3.242-1.554 3.672-1.569 4.22-7.679 8.436-15.358 12.656-23.037a14.55 14.55 0 0 0 2.193-4.66c1.157-4.352-.087-8.012-.661-9.632a18.365 18.365 0 0 0-3.217-5.654Z",fill:"#E1A832"})))},en=a(8837),er=a.n(en),ec=a(8356),el=a(1799),es=a(9396),ei=a(2171),eo=a(3005),eu=a(1067),em=a.n(eu),ep=a(7081),ed=a.n(ep),ef=(0,ec.qC)((c=(r={errorClassName:ed().error,wrapperClassName:ed().wrapper,contentClassName:ed().content}).wrapperClassName,l=r.contentClassName,s=r.errorClassName,o=void 0===(i=r.showErrorInWrapper)||i,function(e){return function(t){var a=(0,eo.tP)(),n=(0,eo.lO)();return C.useEffect(function(){n&&P.Am.error((0,ei.VK)(n))},[n]),(0,j.jsxs)("div",{className:K()(c,em().container),children:[o&&n&&(0,j.jsx)(A.Z,{className:K()(s,em().contentError),children:(0,ei.VK)(n)}),(0,j.jsx)("div",{className:K()(l,em().contentContainer),children:(0,j.jsx)(e,(0,es.Z)((0,el.Z)({},t),{error:n,isLoading:a}))}),a&&(0,j.jsx)(P.uY,{className:em().smallLoader,spinnerSize:"medium",show:!0})]})}}))(function(e){var t=e.className,a=(0,$.TL)(),n=(0,W.useRouter)(),r=(0,$.tP)(),c=(0,$.GS)(),l=(0,$.u9)(),s=(0,$.gC)(),i=(0,D.Z)(C.useState(!1),2),o=i[0],u=i[1],m=C.useCallback(function(){u(!1)},[]),p=C.useCallback(function(e){m(),a(ee.Nw.setUserName(e)),n.push("/waiting")},[a,n,m]),d=C.useCallback(function(){a(ee.Nw.setGameMode("single")),u(!0)},[a]),f=C.useCallback(function(){a(ee.Nw.setGameMode("multi")),u(!0)},[a]);return l?(0,j.jsxs)(L.Z,{className:K()(t,er().container),children:[(0,j.jsxs)(X.Z,{className:K()(er().content),children:[(0,j.jsx)(A.Z,{variant:"h5",className:K()(er().title),gutterBottom:!0,children:"Турнир по теме \xabЧто проверить в договорах\xbb"}),!r&&c&&l&&(0,j.jsxs)(j.Fragment,{children:[(0,j.jsx)(A.Z,{className:K()(er().question),gutterBottom:!0,children:"Как вы хотите сыграть?"}),(0,j.jsxs)(q.Z,{className:K()(er().actions),variant:"outlined","aria-label":"outlined primary button group",children:[(0,j.jsx)(O.Z,{className:"FixMuiButton",onClick:d,children:(0,j.jsx)("span",{className:"Text",children:"Турнир для одного"})}),(0,j.jsx)(O.Z,{className:"FixMuiButton",onClick:f,children:(0,j.jsx)("span",{className:"Text",children:"Турнир для двоих"})})]})]}),(0,j.jsx)(J,{name:s||"",open:o,onClose:m,onSubmit:p})]}),(0,j.jsx)(X.Z,{className:K()(er().visual),children:(0,j.jsx)(ea,{})})]}):null}),eh=function(){var e=(0,G.d)("Стартовая страница"),t=(0,g.T)(),a=(0,w.Y)(),n=(0,$.u9)(),r=(0,$.GS)();return C.useEffect(function(){t(F.Nw.resetData())},[t]),C.useEffect(function(){!n&&r&&(0,v.DM)(a)},[t,a,n]),(0,j.jsx)(y.Z,{title:e,children:(0,j.jsx)(P.ip,{flex:!0,flexVertical:!0,fullSizeFlexChild:!0,flexCenter:!0,children:(0,j.jsx)(ef,{})})})}},8837:function(e){e.exports={container:"StartBlock_container__oZuED",content:"StartBlock_content__ii2Lo",visual:"StartBlock_visual__egLvG",actions:"StartBlock_actions__BM_KP",question:"StartBlock_question__wSXMI",title:"StartBlock_title__bQkon",error:"StartBlock_error__QD1tQ"}},7081:function(e){e.exports={error:"WrappedStartBlock_error__SYdEX",wrapper:"WrappedStartBlock_wrapper__EOXfs",content:"WrappedStartBlock_content__0yZTY"}},7558:function(e){e.exports={form:"UserNameDialog_form__W6gqc",dialogTitle:"UserNameDialog_dialogTitle__ue4w_"}},1067:function(e){e.exports={container:"GameParamsWrapper_container__9iO24",contentError:"GameParamsWrapper_contentError__gKQ2H",contentContainer:"GameParamsWrapper_contentContainer__dyZPT",smallLoader:"GameParamsWrapper_smallLoader__HcgG3",loaderSplash:"GameParamsWrapper_loaderSplash__n5GhT"}}},function(e){e.O(0,[911,259,187,390,674,774,888,179],function(){return e(e.s=8312)}),_N_E=e.O()}]);
//# sourceMappingURL=index-5157c4d63fe77320.js.map