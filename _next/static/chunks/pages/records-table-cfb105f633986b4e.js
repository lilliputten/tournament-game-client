(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[431],{5028:function(e,l,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/records-table",function(){return t(5647)}])},5647:function(e,l,t){"use strict";t.r(l),t.d(l,{default:function(){return E}});var a=t(5893),n=t(2720),c=t(5409),o=t(7433),s=t(7294),r=t(1163),i=t(7357),d=t(4184),_=t.n(d),b=t(6322),m=t(99),u=t.n(m),T=t(6327),x=t(8122),h=t(5861),C=t(9211),k=t(9746),R=t(6041),N=t(2171),j=t(457),f=t.n(j);function w(e){var l=e.recordEntry,t=e.token,n=e.activeGameToken,c=e.idx+1,o=l.finishedTimestamp,s=l.gameToken,r=l.name,i=l.partnerToken,d=l.questionAnswers,b=l.startedTimestamp,m=d&&Object.values(d),u=m?m.length:0,T=m&&m.reduce(function(e,l){return"correct"===l?e+1:e},0),x=o&&(0,k.Z)(new Date(o),R.Z.constants.dateTimeFormat),h=(0,N.pI)(b,o);return(0,a.jsxs)("tr",{id:s+"/"+i,className:_()(f().tableRow,f()["tableRow"+c],s===n&&i===t&&f().activeGame),children:[(0,a.jsx)("td",{className:_()(f().tableCell,f().cellNo),children:c}),(0,a.jsx)("td",{className:_()(f().tableCell,f().cellName),children:r}),(0,a.jsxs)("td",{className:_()(f().tableCell,f().cellAnswers),children:[T,!!u&&" / "+u]}),(0,a.jsx)("td",{className:_()(f().tableCell,f().cellTime),children:h}),(0,a.jsx)("td",{className:_()(f().tableCell,f().cellDate),children:x})]})}function B(e){var l=e.recordsTable,t=e.gameToken,n=!!(l&&l.length),c=s.useMemo(function(){return n&&l.map(function(e,l){return(0,a.jsx)(w,{idx:l,recordEntry:e,activeGameToken:t},e.gameToken+"/"+e.partnerToken)})},[n,l,t]);return n?(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(i.Z,{className:f().tableTitle,children:"Турнирная таблица"}),(0,a.jsxs)("table",{className:f().table,cellPadding:4,cellSpacing:2,width:"100%",border:0,children:[(0,a.jsx)("thead",{className:f().tableHeadRow,children:(0,a.jsxs)("tr",{className:_()(f().tableRow,f().tableHeadRow),children:[(0,a.jsx)("th",{className:_()(f().tableHeadCell,f().cellNo),children:"Место"}),(0,a.jsx)("th",{className:_()(f().tableHeadCell,f().cellName),children:"Игрок"}),(0,a.jsx)("th",{className:_()(f().tableHeadCell,f().cellAnswers),children:"Верных ответов"}),(0,a.jsx)("th",{className:_()(f().tableHeadCell,f().cellTime),children:"Время"}),(0,a.jsx)("th",{className:_()(f().tableHeadCell,f().cellDate),children:"Дата"})]})}),(0,a.jsx)("tbody",{className:f().tableBody,children:c})]})]}):(0,a.jsx)(h.Z,{children:"Турнирная таблица пока пуста."})}function g(e){var l=e.onClick,t=e.goToStartPage,n=e.recordsTable,c=e.gameToken;return(0,a.jsxs)(i.Z,{className:_()(f().container,f().WaitingFailed),children:[(0,a.jsx)(B,{recordsTable:n,gameToken:c}),(0,a.jsxs)(C.Z,{className:f().actions,spacing:2,direction:"row",justifyContent:"center",my:2,mt:4,children:[!!t&&(0,a.jsx)(x.Z,{className:"FixMuiButton",onClick:t,variant:"contained",children:(0,a.jsx)("span",{className:"Text",children:"Сыграть ещё раз"})}),!!l&&!!c&&(0,a.jsx)(x.Z,{className:"FixMuiButton",onClick:l,disabled:!l,children:(0,a.jsx)("span",{className:"Text",children:"Посмотреть результаты"})})]})]})}function p(e){var l=e.className,t=(0,b.TL)(),n=(0,r.useRouter)(),c=(0,b.u9)(),o=(0,b.dn)(),d=(0,b.w3)(),m=s.useCallback(function(){n.push("/")},[n]);s.useEffect(function(){t((0,T.K)())},[t]);var x=s.useCallback(function(){n.push("/results")},[n]),h=s.useMemo(function(){return(0,a.jsx)(g,{onClick:x,goToStartPage:m,token:c,gameToken:o,recordsTable:d})},[x,m,c,o,d]);return(0,a.jsx)(i.Z,{className:_()(l,u().container),my:2,children:h})}var v=t(1046),y=t.n(v),E=function(){var e=(0,o.d)("Результаты");return(0,a.jsx)(n.Z,{className:y().root,title:e,children:(0,a.jsx)(c.ip,{flex:!0,flexVertical:!0,fullSizeFlexChild:!0,flexCenter:!0,children:(0,a.jsx)(p,{})})})}},99:function(e){e.exports={container:"RecordsTableBlock_container__ldFJX"}},457:function(e){e.exports={container:"RecordsTableBlockContent_container__nHyRB",Empty:"RecordsTableBlockContent_Empty__KjAeo",error:"RecordsTableBlockContent_error__u5eqa",actions:"RecordsTableBlockContent_actions__oSbk9",tableHeadCell:"RecordsTableBlockContent_tableHeadCell__m4s57",tableHeadRow:"RecordsTableBlockContent_tableHeadRow__aOgmx",tableBody:"RecordsTableBlockContent_tableBody__PomMv",tableRow:"RecordsTableBlockContent_tableRow__iTdYp",tableCell:"RecordsTableBlockContent_tableCell__lhgi9",table:"RecordsTableBlockContent_table__97c0y",tableTitle:"RecordsTableBlockContent_tableTitle__XeeTg",cellNo:"RecordsTableBlockContent_cellNo__tEZFT",cellName:"RecordsTableBlockContent_cellName__d6qgA",cellTime:"RecordsTableBlockContent_cellTime__mxR2I",cellDate:"RecordsTableBlockContent_cellDate__y96_E",cellAnswers:"RecordsTableBlockContent_cellAnswers__bG9AF",tableRow1:"RecordsTableBlockContent_tableRow1__4_1Pz",tableRow2:"RecordsTableBlockContent_tableRow2__4Ft_g",tableRow3:"RecordsTableBlockContent_tableRow3__lLUEr",activeGame:"RecordsTableBlockContent_activeGame__DqtyM"}},1046:function(e){e.exports={root:"RecordsTablePage_root__BMj0_"}}},function(e){e.O(0,[911,234,998,390,674,774,888,179],function(){return e(e.s=5028)}),_N_E=e.O()}]);
//# sourceMappingURL=records-table-cfb105f633986b4e.js.map