!function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t,n){"use strict";var r=a(n(1)),o=a(n(3)),i=a(n(5));function a(e){return e&&e.__esModule?e:{default:e}}n(6);var u=new r.default,l=new o.default;new i.default(u,l)},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),o=function(e){return e&&e.__esModule?e:{default:e}}(n(2));var i=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.notes=o.default.get("notes")||[]}return r(e,[{key:"addItem",value:function(e){var t={url:e,image:"img/ribbon.png"};return this.notes.unshift(t),fetch("https://api.linkpreview.net/?key=5c0045ceab9e7ab8e9ef52f45f5ccd819e0d96f017447&q="+e).then(function(e){return e.json()}).then(function(n){return t.name=""===n.title?e:n.title,""!==n.image&&(t.image=n.image),t})}},{key:"contains",value:function(e){return this.notes.some(function(t){return t.url===e})}},{key:"removeItem",value:function(e){this.notes=this.notes.filter(function(t){return t.url!==e})}},{key:"getAll",value:function(){return this.notes}},{key:"save",value:function(){o.default.set("notes",this.notes)}}]),e}();t.default=i},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=function(e){if(e){return{isActive:"localStorage"in e,get:function(e){try{var t=localStorage.getItem(e);return null===t?void 0:JSON.parse(t)}catch(e){console.error("Get state error: ",e)}},set:function(e,t){try{var n=JSON.stringify(t);localStorage.setItem(e,n)}catch(e){console.error("Set state error: ",e)}},remove:function(e){return localStorage.removeItem(e)},clear:function(){return localStorage.clear()}}}}(window);t.default=r},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),o=function(e){return e&&e.__esModule?e:{default:e}}(n(4));var i=/(ftp|http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?/,a=function(e){function t(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var e=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this));return e.form=document.querySelector(".form"),e.input=e.form.querySelector("input"),e.notesGrid=document.querySelector(".notes-grid"),e.isUrl=!1,e.form.addEventListener("submit",e.handleAdd.bind(e)),e}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,o.default),r(t,[{key:"valid",value:function(e){this.isUrl=e}},{key:"show",value:function(e){var t,n=this;(t=this.notesGrid).append.apply(t,function(e){if(Array.isArray(e)){for(var t=0,n=Array(e.length);t<e.length;t++)n[t]=e[t];return n}return Array.from(e)}(e.map(function(e){return n.createNote(e)})))}},{key:"handleAdd",value:function(e){e.preventDefault();var t=this.input.value;""!==t&&(this.emit("valid",t),this.isUrl?alert("Такая вкладка уже есть"):i.test(t)?this.emit("add",t):alert("Введеный url не верный"))}},{key:"createNote",value:function(e){var t=document.createElement("div");t.classList.add("box");var n=document.createElement("div");n.classList.add("pic");var r=document.createElement("img");r.setAttribute("src",e.image);var o=document.createElement("a");o.classList.add("node"),o.setAttribute("href",e.url),o.textContent=e.name;var i=document.createElement("button");return i.classList.add("delete"),i.dataset.action="remove",i.textContent="X",n.appendChild(r),t.append(n,o,i),this.appendEventListeners(t),t}},{key:"addNote",value:function(e){var t=this.createNote(e);this.form.reset(),this.notesGrid.insertAdjacentElement("afterbegin",t)}},{key:"appendEventListeners",value:function(e){e.querySelector('[data-action="remove"]').addEventListener("click",this.handleRemove.bind(this))}},{key:"handleRemove",value:function(e){var t=e.target.closest(".box"),n=t.querySelector("a").getAttribute("href");t.remove(),this.emit("remove",n)}}]),t}();t.default=a},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}();var o=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.events={}}return r(e,[{key:"on",value:function(e,t){this.events[e]=this.events[e]||[],this.events[e].push(t)}},{key:"emit",value:function(e){for(var t=arguments.length,n=Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];this.events[e]&&this.events[e].forEach(function(e){return e.apply(void 0,n)})}}]),e}();t.default=o},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}();var o=function(){function e(t,n){var r=this;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.model=t,this.view=n,this.view.on("add",this.addNote.bind(this)),this.view.on("remove",this.removeNote.bind(this)),this.view.on("valid",this.valid.bind(this)),this.view.show(this.model.getAll()),window.onunload=function(){r.model.save()}}return r(e,[{key:"valid",value:function(e){var t=this.model.contains(e);this.view.valid(t)}},{key:"addNote",value:function(e){var t=this;this.model.addItem(e).then(function(e){return t.view.addNote(e)})}},{key:"removeNote",value:function(e){this.model.removeItem(e)}}]),e}();t.default=o},function(e,t){}]);