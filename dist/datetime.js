!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.DateTime=t():e.DateTime=t()}(this,(function(){return function(e){var t={};function n(o){if(t[o])return t[o].exports;var i=t[o]={i:o,l:!1,exports:{}};return e[o].call(i.exports,i,i.exports,n),i.l=!0,i.exports}return n.m=e,n.c=t,n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)n.d(o,i,function(t){return e[t]}.bind(null,i));return o},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=n(1);e.exports=o.DateTime},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=n(2),i=n(3),r=function(){function e(){this.date=new Date,this.timezoneOffset=this.date.getTimezoneOffset(),this.differenceOfTimezone=0}return e.prototype.getTimezoneOffset=function(){return this.timezoneOffset},e.prototype.setTimezoneOffset=function(e){var t=o.getTimeOfTimezone(e);this.differenceOfTimezone=this.differenceOfTimezone+this.date.getTime()-t,this.date.setTime(t),this.timezoneOffset=e},e.prototype.getTime=function(){return this.date.getTime()+this.differenceOfTimezone},e.prototype.setTime=function(e){this.date.setTime(e-this.differenceOfTimezone)},e.prototype.toObject=function(){return{day:this.date.getDate(),hours:this.date.getHours(),minutes:this.date.getMinutes(),month:this.date.getMonth()+1,seconds:this.date.getSeconds(),year:this.date.getFullYear()}},e.prototype.toString=function(){var e=this.toObject(),t=e.year,n=e.month,o=e.day,r=e.hours,f=e.minutes,u=e.seconds;return t+"-"+i.padLeft(n,2)+"-"+i.padLeft(o,2)+" "+i.padLeft(r,2)+":"+i.padLeft(f,2)+":"+i.padLeft(u,2)},e}();t.DateTime=r},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.getTimeOfTimezone=function(e){var t=new Date,n=t.getTimezoneOffset(),o=t.getTime();return o=o+60*n*1e3-60*e*1e3}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.padLeft=function e(t,n){var o=""+t;return o.length>=n?o:e("0"+t,n)}}])}));