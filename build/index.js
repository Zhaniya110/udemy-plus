(()=>{"use strict";const e=window.wp.element,t=window.wp.blocks,n=window.wp.blockEditor,a=JSON.parse('{"u2":"udemy-plus/fancy-header"}'),o=window.wp.i18n;(0,t.registerBlockType)(a.u2,{edit({attributes:t,setAttributes:a}){const{content:r}=t;return(0,e.createElement)(n.RichText,{tagName:"h2",placeholder:(0,o.__)("Enter heading","udemy-plus"),value:r,onChange:e=>a({content:e})})},save({attributes:t}){const{content:a}=t;return(0,e.createElement)(n.RichText.Content,{tagName:"h2",value:a})}})})();