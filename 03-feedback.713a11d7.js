!function(){function e(e){return e&&e.__esModule?e.default:e}var t,n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},r={};Object.defineProperty(r,"__esModule",{value:!0}),r.default=function(e){return e&&e.constructor===Symbol?"symbol":typeof e};var i="Expected a function",o=/^\s+|\s+$/g,u=/^[-+]0x[0-9a-f]+$/i,f=/^0b[01]+$/i,a=/^0o[0-7]+$/i,l=parseInt,c="object"==typeof n&&n&&n.Object===Object&&n,s="object"==typeof self&&self&&self.Object===Object&&self,d=c||s||Function("return this")(),v=Object.prototype.toString,m=Math.max,g=Math.min,p=function(){return d.Date.now()};function y(e,t,n){var r,o,u,f,a,l,c=0,s=!1,d=!1,v=!0;if("function"!=typeof e)throw new TypeError(i);function y(t){var n=r,i=o;return r=o=void 0,c=t,f=e.apply(i,n)}function j(e){return c=e,a=setTimeout(T,t),s?y(e):f}function h(e){var n=e-l;return void 0===l||n>=t||n<0||d&&e-c>=u}function T(){var e=p();if(h(e))return w(e);a=setTimeout(T,function(e){var n=t-(e-l);return d?g(n,u-(e-c)):n}(e))}function w(e){return a=void 0,v&&r?y(e):(r=o=void 0,f)}function S(){var e=p(),n=h(e);if(r=arguments,o=this,l=e,n){if(void 0===a)return j(l);if(d)return a=setTimeout(T,t),y(l)}return void 0===a&&(a=setTimeout(T,t)),f}return t=O(t)||0,b(n)&&(s=!!n.leading,u=(d="maxWait"in n)?m(O(n.maxWait)||0,t):u,v="trailing"in n?!!n.trailing:v),S.cancel=function(){void 0!==a&&clearTimeout(a),c=0,r=l=o=a=void 0},S.flush=function(){return void 0===a?f:w(p())},S}function b(t){var n=void 0===t?"undefined":e(r)(t);return!!t&&("object"==n||"function"==n)}function O(t){if("number"==typeof t)return t;if(function(t){return"symbol"==(void 0===t?"undefined":e(r)(t))||function(e){return!!e&&"object"==typeof e}(t)&&"[object Symbol]"==v.call(t)}(t))return NaN;if(b(t)){var n="function"==typeof t.valueOf?t.valueOf():t;t=b(n)?n+"":n}if("string"!=typeof t)return 0===t?t:+t;t=t.replace(o,"");var i=f.test(t);return i||a.test(t)?l(t.slice(2),i?2:8):u.test(t)?NaN:+t}t=function(e,t,n){var r=!0,o=!0;if("function"!=typeof e)throw new TypeError(i);return b(n)&&(r="leading"in n?!!n.leading:r,o="trailing"in n?!!n.trailing:o),y(e,t,{leading:r,maxWait:t,trailing:o})};var j=JSON.parse(localStorage.getItem("feedback-form-state"))||{};form=document.querySelector(".feedback-form"),form.addEventListener("input",e(t)((function(e){j[e.target.name]=e.target.value.trim(),localStorage.setItem(LOCAL_KEY,JSON.stringify(j))}),500)),form.addEventListener("submit",(function(e){if(e.preventDefault(),""===refs.input.value)return alert("Hey, you should fill all fields!");console.log(j),e.currentTarget.reset(),localStorage.removeItem(LOCAL_KEY),j={}})),function(){if(j){var e=form.elements,t=e.email,n=e.message;t.value=j.email||"",n.value=j.message||""}}()}();
//# sourceMappingURL=03-feedback.713a11d7.js.map
