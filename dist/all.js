import createTag from"./utils/createTag.js";import{openPopup}from"./popup.js";let counter=0;const isBiggerThen=e=>{if(counter>e){const a=document.querySelector(".alert-box__reset-btn-closed");a.classList.remove("alert-box__reset-btn-closed"),a.classList.add("alert-box__reset-btn-opened")}},clickCounter=()=>{counter++,document.querySelector(".alert-box__highlight").textContent=counter+" times",isBiggerThen(5)},reset=e=>{e.preventDefault(),counter=0},createHeaderSection=()=>{const e=createTag({tagName:"header",className:"header"}),a=createTag({tagName:"div",className:"container"});var t=createTag({tagName:"img",className:"header-image",tagAttrs:[{key:"src",value:"./images/sean-o-KMn4VEeEPR8-unsplash_1_s6zmfh_c_scale,w_1400.jpg"},{key:"alt",value:"Beautifull beach image"}]});const r=createTag({tagName:"div",className:"content"});var c=createTag({tagName:"h2",className:"content__title",tagText:"Lorem Ipsum"}),o=createTag({tagName:"p",className:"content__text",tagText:"Infinitely scalable, feature-rich and cloud-native data management and protection for modern and legacy infrastructures and SaaS platforms, managed via a single app with no hardware required."}),n=createTag({tagName:"button",className:"content__btn",tagText:"Button",tagEvent:{name:"click",callback:()=>{openPopup(),clickCounter()}}});e.appendChild(a),a.append(t,r),r.append(c,o,n)};import{createHeaderSection}from"./header.js";createHeaderSection();import createTag from"./utils/createTag.js";import{reset,counter}from"./header.js";const openPopup=()=>{const a=e=>{e.target.matches(".alert-box, .alert-box__title, .alert-box__text, .alert-box__hightlight")||t.remove()},t=createTag({tagName:"div",className:"alert",tagEvent:{name:"click",callback:e=>{a(e)}}}),e=createTag({tagName:"div",className:"alert-box"});var r=createTag({tagName:"h2",className:"alert-box__title",tagText:"Alert!"});const c=createTag({tagName:"p",className:"alert-box__text"});var o=createTag({tagName:"span",className:"alert-box__highlight",tagText:"0 times"}),n=createTag({tagName:"span",tagText:"You have clicked "}),s=createTag({tagName:"span",tagText:" to related button."}),l=createTag({tagName:"img",className:"alert-box__icon",tagAttrs:[{key:"src",value:"../../images/close.png"},{key:"alt",value:"Alert close icon"}]});const g=createTag({tagName:"button",className:"alert-box__btn",tagEvent:{name:"click",callback:e=>{a(e)}}});var i=createTag({tagName:"button",className:"alert-box__reset-btn-closed",tagText:"Reset",tagEvent:{name:"click",callback:e=>{openPopup(e),reset(e)}}});t.appendChild(e),g.appendChild(l),c.append(n,o,s),e.append(r,c,g,i)},createTag=({tagName:e="div",tagText:a,className:t,tagId:r,tagAttrs:c,tagEvent:o})=>{const n=document.createElement(e);return void 0!==a&&(e=document.createTextNode(a),n.appendChild(e)),void 0!==t&&(Array.isArray(t)?t.forEach(e=>{n.classList.add(e)}):n.classList.add(t)),void 0!==r&&(n.id=r),void 0!==c&&c.forEach(e=>{n.setAttribute(e.key,e.value)}),void 0!==o&&({name:a,callback:e}=o,n.addEventListener(a,e)),document.body.appendChild(n),n};export default createTag;export{counter,reset,createHeaderSection,openPopup};