(self.webpackChunkorchardcore_apis_graphql=self.webpackChunkorchardcore_apis_graphql||[]).push([[801],{2801:(e,n,r)=>{!function(e){var n={pairs:"()[]{}''\"\"",closeBefore:")]}'\":;>",triples:"",explode:"[]{}"},r=e.Pos;function t(e,r){return"pairs"==r&&"string"==typeof e?e:"object"==typeof e&&null!=e[r]?e[r]:n[r]}e.defineOption("autoCloseBrackets",!1,(function(n,r,s){s&&s!=e.Init&&(n.removeKeyMap(i),n.state.closeBrackets=null),r&&(a(t(r,"pairs")),n.state.closeBrackets=r,n.addKeyMap(i))}));var i={Backspace:function(n){var i=l(n);if(!i||n.getOption("disableInput"))return e.Pass;for(var a=t(i,"pairs"),s=n.listSelections(),o=0;o<s.length;o++){if(!s[o].empty())return e.Pass;var c=h(n,s[o].head);if(!c||a.indexOf(c)%2!=0)return e.Pass}for(o=s.length-1;o>=0;o--){var f=s[o].head;n.replaceRange("",r(f.line,f.ch-1),r(f.line,f.ch+1),"+delete")}},Enter:function(n){var r=l(n),i=r&&t(r,"explode");if(!i||n.getOption("disableInput"))return e.Pass;for(var a=n.listSelections(),s=0;s<a.length;s++){if(!a[s].empty())return e.Pass;var c=h(n,a[s].head);if(!c||i.indexOf(c)%2!=0)return e.Pass}n.operation((function(){var e=n.lineSeparator()||"\n";n.replaceSelection(e+e,null),o(n,-1),a=n.listSelections();for(var r=0;r<a.length;r++){var t=a[r].head.line;n.indentLine(t,null,!0),n.indentLine(t+1,null,!0)}}))}};function a(e){for(var n=0;n<e.length;n++){var r=e.charAt(n),t="'"+r+"'";i[t]||(i[t]=s(r))}}function s(n){return function(i){return function(n,i){var a=l(n);if(!a||n.getOption("disableInput"))return e.Pass;var s=t(a,"pairs"),h=s.indexOf(i);if(-1==h)return e.Pass;for(var u,p=t(a,"closeBefore"),d=t(a,"triples"),g=s.charAt(h+1)==i,v=n.listSelections(),k=h%2==0,b=0;b<v.length;b++){var P,S=v[b],y=S.head,O=n.getRange(y,r(y.line,y.ch+1));if(k&&!S.empty())P="surround";else if(!g&&k||O!=i)if(g&&y.ch>1&&d.indexOf(i)>=0&&n.getRange(r(y.line,y.ch-2),y)==i+i){if(y.ch>2&&/\bstring/.test(n.getTokenTypeAt(r(y.line,y.ch-2))))return e.Pass;P="addFour"}else if(g){var x=0==y.ch?" ":n.getRange(r(y.line,y.ch-1),y);if(e.isWordChar(O)||x==i||e.isWordChar(x))return e.Pass;P="both"}else{if(!k||!(0===O.length||/\s/.test(O)||p.indexOf(O)>-1))return e.Pass;P="both"}else P=g&&f(n,y)?"both":d.indexOf(i)>=0&&n.getRange(y,r(y.line,y.ch+3))==i+i+i?"skipThree":"skip";if(u){if(u!=P)return e.Pass}else u=P}var A=h%2?s.charAt(h-1):i,B=h%2?i:s.charAt(h+1);n.operation((function(){if("skip"==u)o(n,1);else if("skipThree"==u)o(n,3);else if("surround"==u){for(var e=n.getSelections(),r=0;r<e.length;r++)e[r]=A+e[r]+B;for(n.replaceSelections(e,"around"),e=n.listSelections().slice(),r=0;r<e.length;r++)e[r]=c(e[r]);n.setSelections(e)}else"both"==u?(n.replaceSelection(A+B,null),n.triggerElectric(A+B),o(n,-1)):"addFour"==u&&(n.replaceSelection(A+A+A+A,"before"),o(n,1))}))}(i,n)}}function l(e){var n=e.state.closeBrackets;return!n||n.override?n:e.getModeAt(e.getCursor()).closeBrackets||n}function o(e,n){for(var r=[],t=e.listSelections(),i=0,a=0;a<t.length;a++){var s=t[a];s.head==e.getCursor()&&(i=a);var l=s.head.ch||n>0?{line:s.head.line,ch:s.head.ch+n}:{line:s.head.line-1};r.push({anchor:l,head:l})}e.setSelections(r,i)}function c(n){var t=e.cmpPos(n.anchor,n.head)>0;return{anchor:new r(n.anchor.line,n.anchor.ch+(t?-1:1)),head:new r(n.head.line,n.head.ch+(t?1:-1))}}function h(e,n){var t=e.getRange(r(n.line,n.ch-1),r(n.line,n.ch+1));return 2==t.length?t:null}function f(e,n){var t=e.getTokenAt(r(n.line,n.ch+1));return/\bstring/.test(t.type)&&t.start==n.ch&&(0==n.ch||!/\bstring/.test(e.getTokenTypeAt(n)))}a(n.pairs+"`")}(r(4631))}}]);