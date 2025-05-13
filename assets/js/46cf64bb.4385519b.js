(self["webpackChunkdocs"] = self["webpackChunkdocs"] || []).push([[43320,69983],{

/***/ 80794:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  A: () => (/* binding */ DocSidebar)
});

// EXTERNAL MODULE: ../node_modules/react/index.js
var react = __webpack_require__(63696);
// EXTERNAL MODULE: ../node_modules/@docusaurus/theme-common/lib/hooks/useWindowSize.js
var useWindowSize = __webpack_require__(7978);
// EXTERNAL MODULE: ../node_modules/clsx/dist/clsx.mjs
var clsx = __webpack_require__(11750);
// EXTERNAL MODULE: ../node_modules/@docusaurus/theme-common/lib/utils/useThemeConfig.js
var useThemeConfig = __webpack_require__(12427);
// EXTERNAL MODULE: ../node_modules/@docusaurus/theme-classic/lib/theme/Logo/index.js
var Logo = __webpack_require__(56782);
// EXTERNAL MODULE: ../node_modules/@docusaurus/core/lib/client/exports/Translate.js + 1 modules
var Translate = __webpack_require__(27963);
// EXTERNAL MODULE: ../node_modules/@docusaurus/theme-classic/lib/theme/Icon/Arrow/index.js
var Arrow = __webpack_require__(48386);
;// ../node_modules/@docusaurus/theme-classic/lib/theme/DocSidebar/Desktop/CollapseButton/styles.module.css
// extracted by mini-css-extract-plugin
/* harmony default export */ const styles_module = ({"collapseSidebarButton":"collapseSidebarButton_oTwn","collapseSidebarButtonIcon":"collapseSidebarButtonIcon_pMEX"});
// EXTERNAL MODULE: ../node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(62540);
;// ../node_modules/@docusaurus/theme-classic/lib/theme/DocSidebar/Desktop/CollapseButton/index.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */function CollapseButton(_ref){let{onClick}=_ref;return/*#__PURE__*/(0,jsx_runtime.jsx)("button",{type:"button",title:(0,Translate/* translate */.T)({id:'theme.docs.sidebar.collapseButtonTitle',message:'Collapse sidebar',description:'The title attribute for collapse button of doc sidebar'}),"aria-label":(0,Translate/* translate */.T)({id:'theme.docs.sidebar.collapseButtonAriaLabel',message:'Collapse sidebar',description:'The title attribute for collapse button of doc sidebar'}),className:(0,clsx/* default */.A)('button button--secondary button--outline',styles_module.collapseSidebarButton),onClick:onClick,children:/*#__PURE__*/(0,jsx_runtime.jsx)(Arrow/* default */.A,{className:styles_module.collapseSidebarButtonIcon})});}
// EXTERNAL MODULE: ../node_modules/@docusaurus/theme-common/lib/utils/ThemeClassNames.js
var ThemeClassNames = __webpack_require__(97404);
// EXTERNAL MODULE: ../node_modules/@docusaurus/theme-common/lib/contexts/announcementBar.js
var announcementBar = __webpack_require__(87268);
// EXTERNAL MODULE: ../node_modules/@docusaurus/theme-common/lib/utils/scrollUtils.js
var scrollUtils = __webpack_require__(93707);
// EXTERNAL MODULE: ../node_modules/@docusaurus/plugin-content-docs/lib/client/docsUtils.js
var docsUtils = __webpack_require__(13511);
// EXTERNAL MODULE: ../node_modules/@docusaurus/theme-common/lib/utils/reactUtils.js
var reactUtils = __webpack_require__(78225);
;// ../node_modules/@docusaurus/plugin-content-docs/lib/client/docSidebarItemsExpandedState.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */const EmptyContext=Symbol('EmptyContext');const Context=/*#__PURE__*/react.createContext(EmptyContext);/**
 * Should be used to wrap one sidebar category level. This provider syncs the
 * expanded states of all sibling categories, and categories can choose to
 * collapse itself if another one is expanded.
 */function DocSidebarItemsExpandedStateProvider(_ref){let{children}=_ref;const[expandedItem,setExpandedItem]=(0,react.useState)(null);const contextValue=(0,react.useMemo)(()=>({expandedItem,setExpandedItem}),[expandedItem]);return/*#__PURE__*/(0,jsx_runtime.jsx)(Context.Provider,{value:contextValue,children:children});}function useDocSidebarItemsExpandedState(){const value=(0,react.useContext)(Context);if(value===EmptyContext){throw new reactUtils/* ReactContextError */.dV('DocSidebarItemsExpandedStateProvider');}return value;}
// EXTERNAL MODULE: ../node_modules/@docusaurus/theme-common/lib/components/Collapsible/index.js
var Collapsible = __webpack_require__(19695);
// EXTERNAL MODULE: ../node_modules/@docusaurus/theme-common/lib/utils/routesUtils.js
var routesUtils = __webpack_require__(14422);
// EXTERNAL MODULE: ../node_modules/@docusaurus/core/lib/client/exports/Link.js
var Link = __webpack_require__(99985);
// EXTERNAL MODULE: ../node_modules/@docusaurus/core/lib/client/exports/useIsBrowser.js
var useIsBrowser = __webpack_require__(95200);
;// ../node_modules/@docusaurus/theme-classic/lib/theme/DocSidebarItem/Category/index.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */// If we navigate to a category and it becomes active, it should automatically
// expand itself
function useAutoExpandActiveCategory(_ref){let{isActive,collapsed,updateCollapsed}=_ref;const wasActive=(0,reactUtils/* usePrevious */.ZC)(isActive);(0,react.useEffect)(()=>{const justBecameActive=isActive&&!wasActive;if(justBecameActive&&collapsed){updateCollapsed(false);}},[isActive,wasActive,collapsed,updateCollapsed]);}/**
 * When a collapsible category has no link, we still link it to its first child
 * during SSR as a temporary fallback. This allows to be able to navigate inside
 * the category even when JS fails to load, is delayed or simply disabled
 * React hydration becomes an optional progressive enhancement
 * see https://github.com/facebookincubator/infima/issues/36#issuecomment-772543188
 * see https://github.com/facebook/docusaurus/issues/3030
 */function useCategoryHrefWithSSRFallback(item){const isBrowser=(0,useIsBrowser/* default */.A)();return (0,react.useMemo)(()=>{if(item.href&&!item.linkUnlisted){return item.href;}// In these cases, it's not necessary to render a fallback
// We skip the "findFirstCategoryLink" computation
if(isBrowser||!item.collapsible){return undefined;}return (0,docsUtils/* findFirstSidebarItemLink */.Nr)(item);},[item,isBrowser]);}function Category_CollapseButton(_ref2){let{collapsed,categoryLabel,onClick}=_ref2;return/*#__PURE__*/(0,jsx_runtime.jsx)("button",{"aria-label":collapsed?(0,Translate/* translate */.T)({id:'theme.DocSidebarItem.expandCategoryAriaLabel',message:"Expand sidebar category '{label}'",description:'The ARIA label to expand the sidebar category'},{label:categoryLabel}):(0,Translate/* translate */.T)({id:'theme.DocSidebarItem.collapseCategoryAriaLabel',message:"Collapse sidebar category '{label}'",description:'The ARIA label to collapse the sidebar category'},{label:categoryLabel}),"aria-expanded":!collapsed,type:"button",className:"clean-btn menu__caret",onClick:onClick});}function DocSidebarItemCategory(_ref3){let{item,onItemClick,activePath,level,index,...props}=_ref3;const{items,label,collapsible,className,href}=item;const{docs:{sidebar:{autoCollapseCategories}}}=(0,useThemeConfig/* useThemeConfig */.p)();const hrefWithSSRFallback=useCategoryHrefWithSSRFallback(item);const isActive=(0,docsUtils/* isActiveSidebarItem */.w8)(item,activePath);const isCurrentPage=(0,routesUtils/* isSamePath */.ys)(href,activePath);const{collapsed,setCollapsed}=(0,Collapsible/* useCollapsible */.u)({// Active categories are always initialized as expanded. The default
// (`item.collapsed`) is only used for non-active categories.
initialState:()=>{if(!collapsible){return false;}return isActive?false:item.collapsed;}});const{expandedItem,setExpandedItem}=useDocSidebarItemsExpandedState();// Use this instead of `setCollapsed`, because it is also reactive
const updateCollapsed=function(toCollapsed){if(toCollapsed===void 0){toCollapsed=!collapsed;}setExpandedItem(toCollapsed?null:index);setCollapsed(toCollapsed);};useAutoExpandActiveCategory({isActive,collapsed,updateCollapsed});(0,react.useEffect)(()=>{if(collapsible&&expandedItem!=null&&expandedItem!==index&&autoCollapseCategories){setCollapsed(true);}},[collapsible,expandedItem,index,setCollapsed,autoCollapseCategories]);return/*#__PURE__*/(0,jsx_runtime.jsxs)("li",{className:(0,clsx/* default */.A)(ThemeClassNames/* ThemeClassNames */.G.docs.docSidebarItemCategory,ThemeClassNames/* ThemeClassNames */.G.docs.docSidebarItemCategoryLevel(level),'menu__list-item',{'menu__list-item--collapsed':collapsed},className),children:[/*#__PURE__*/(0,jsx_runtime.jsxs)("div",{className:(0,clsx/* default */.A)('menu__list-item-collapsible',{'menu__list-item-collapsible--active':isCurrentPage}),children:[/*#__PURE__*/(0,jsx_runtime.jsx)(Link/* default */.A,{className:(0,clsx/* default */.A)('menu__link',{'menu__link--sublist':collapsible,'menu__link--sublist-caret':!href&&collapsible,'menu__link--active':isActive}),onClick:collapsible?e=>{onItemClick?.(item);if(href){updateCollapsed(false);}else{e.preventDefault();updateCollapsed();}}:()=>{onItemClick?.(item);},"aria-current":isCurrentPage?'page':undefined,role:collapsible&&!href?'button':undefined,"aria-expanded":collapsible&&!href?!collapsed:undefined,href:collapsible?hrefWithSSRFallback??'#':hrefWithSSRFallback,...props,children:label}),href&&collapsible&&/*#__PURE__*/(0,jsx_runtime.jsx)(Category_CollapseButton,{collapsed:collapsed,categoryLabel:label,onClick:e=>{e.preventDefault();updateCollapsed();}})]}),/*#__PURE__*/(0,jsx_runtime.jsx)(Collapsible/* Collapsible */.N,{lazy:true,as:"ul",className:"menu__list",collapsed:collapsed,children:/*#__PURE__*/(0,jsx_runtime.jsx)(theme_DocSidebarItems,{items:items,tabIndex:collapsed?-1:0,onItemClick:onItemClick,activePath:activePath,level:level+1})})]});}
// EXTERNAL MODULE: ../node_modules/@docusaurus/core/lib/client/exports/isInternalUrl.js
var isInternalUrl = __webpack_require__(72535);
// EXTERNAL MODULE: ../node_modules/@docusaurus/theme-classic/lib/theme/Icon/ExternalLink/index.js + 1 modules
var ExternalLink = __webpack_require__(85443);
;// ../node_modules/@docusaurus/theme-classic/lib/theme/DocSidebarItem/Link/styles.module.css
// extracted by mini-css-extract-plugin
/* harmony default export */ const Link_styles_module = ({"menuExternalLink":"menuExternalLink_BiEj"});
;// ../node_modules/@docusaurus/theme-classic/lib/theme/DocSidebarItem/Link/index.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */function DocSidebarItemLink(_ref){let{item,onItemClick,activePath,level,index,...props}=_ref;const{href,label,className,autoAddBaseUrl}=item;const isActive=(0,docsUtils/* isActiveSidebarItem */.w8)(item,activePath);const isInternalLink=(0,isInternalUrl/* default */.A)(href);return/*#__PURE__*/(0,jsx_runtime.jsx)("li",{className:(0,clsx/* default */.A)(ThemeClassNames/* ThemeClassNames */.G.docs.docSidebarItemLink,ThemeClassNames/* ThemeClassNames */.G.docs.docSidebarItemLinkLevel(level),'menu__list-item',className),children:/*#__PURE__*/(0,jsx_runtime.jsxs)(Link/* default */.A,{className:(0,clsx/* default */.A)('menu__link',!isInternalLink&&Link_styles_module.menuExternalLink,{'menu__link--active':isActive}),autoAddBaseUrl:autoAddBaseUrl,"aria-current":isActive?'page':undefined,to:href,...(isInternalLink&&{onClick:onItemClick?()=>onItemClick(item):undefined}),...props,children:[label,!isInternalLink&&/*#__PURE__*/(0,jsx_runtime.jsx)(ExternalLink/* default */.A,{})]})},label);}
;// ../node_modules/@docusaurus/theme-classic/lib/theme/DocSidebarItem/Html/styles.module.css
// extracted by mini-css-extract-plugin
/* harmony default export */ const Html_styles_module = ({"menuHtmlItem":"menuHtmlItem_OniL"});
;// ../node_modules/@docusaurus/theme-classic/lib/theme/DocSidebarItem/Html/index.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */function DocSidebarItemHtml(_ref){let{item,level,index}=_ref;const{value,defaultStyle,className}=item;return/*#__PURE__*/(0,jsx_runtime.jsx)("li",{className:(0,clsx/* default */.A)(ThemeClassNames/* ThemeClassNames */.G.docs.docSidebarItemLink,ThemeClassNames/* ThemeClassNames */.G.docs.docSidebarItemLinkLevel(level),defaultStyle&&[Html_styles_module.menuHtmlItem,'menu__list-item'],className),// eslint-disable-next-line react/no-danger
dangerouslySetInnerHTML:{__html:value}},index);}
;// ../node_modules/@docusaurus/theme-classic/lib/theme/DocSidebarItem/index.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */function DocSidebarItem(_ref){let{item,...props}=_ref;switch(item.type){case'category':return/*#__PURE__*/(0,jsx_runtime.jsx)(DocSidebarItemCategory,{item:item,...props});case'html':return/*#__PURE__*/(0,jsx_runtime.jsx)(DocSidebarItemHtml,{item:item,...props});case'link':default:return/*#__PURE__*/(0,jsx_runtime.jsx)(DocSidebarItemLink,{item:item,...props});}}
;// ../node_modules/@docusaurus/theme-classic/lib/theme/DocSidebarItems/index.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */function DocSidebarItems(_ref){let{items,...props}=_ref;const visibleItems=(0,docsUtils/* useVisibleSidebarItems */.Y)(items,props.activePath);return/*#__PURE__*/(0,jsx_runtime.jsx)(DocSidebarItemsExpandedStateProvider,{children:visibleItems.map((item,index)=>/*#__PURE__*/(0,jsx_runtime.jsx)(DocSidebarItem,{item:item,index:index,...props},index))});}// Optimize sidebar at each "level"
/* harmony default export */ const theme_DocSidebarItems = (/*#__PURE__*/(0,react.memo)(DocSidebarItems));
;// ../node_modules/@docusaurus/theme-classic/lib/theme/DocSidebar/Desktop/Content/styles.module.css
// extracted by mini-css-extract-plugin
/* harmony default export */ const Content_styles_module = ({"menu":"menu_jmj1","menuWithAnnouncementBar":"menuWithAnnouncementBar_YufC"});
;// ../node_modules/@docusaurus/theme-classic/lib/theme/DocSidebar/Desktop/Content/index.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */function useShowAnnouncementBar(){const{isActive}=(0,announcementBar/* useAnnouncementBar */.M)();const[showAnnouncementBar,setShowAnnouncementBar]=(0,react.useState)(isActive);(0,scrollUtils/* useScrollPosition */.Mq)(_ref=>{let{scrollY}=_ref;if(isActive){setShowAnnouncementBar(scrollY===0);}},[isActive]);return isActive&&showAnnouncementBar;}function DocSidebarDesktopContent(_ref2){let{path,sidebar,className}=_ref2;const showAnnouncementBar=useShowAnnouncementBar();return/*#__PURE__*/(0,jsx_runtime.jsx)("nav",{"aria-label":(0,Translate/* translate */.T)({id:'theme.docs.sidebar.navAriaLabel',message:'Docs sidebar',description:'The ARIA label for the sidebar navigation'}),className:(0,clsx/* default */.A)('menu thin-scrollbar',Content_styles_module.menu,showAnnouncementBar&&Content_styles_module.menuWithAnnouncementBar,className),children:/*#__PURE__*/(0,jsx_runtime.jsx)("ul",{className:(0,clsx/* default */.A)(ThemeClassNames/* ThemeClassNames */.G.docs.docSidebarMenu,'menu__list'),children:/*#__PURE__*/(0,jsx_runtime.jsx)(theme_DocSidebarItems,{items:sidebar,activePath:path,level:1})})});}
;// ../node_modules/@docusaurus/theme-classic/lib/theme/DocSidebar/Desktop/styles.module.css
// extracted by mini-css-extract-plugin
/* harmony default export */ const Desktop_styles_module = ({"sidebar":"sidebar_CUen","sidebarWithHideableNavbar":"sidebarWithHideableNavbar_w4KB","sidebarHidden":"sidebarHidden_k6VE","sidebarLogo":"sidebarLogo_CYvI"});
;// ../node_modules/@docusaurus/theme-classic/lib/theme/DocSidebar/Desktop/index.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */function DocSidebarDesktop(_ref){let{path,sidebar,onCollapse,isHidden}=_ref;const{navbar:{hideOnScroll},docs:{sidebar:{hideable}}}=(0,useThemeConfig/* useThemeConfig */.p)();return/*#__PURE__*/(0,jsx_runtime.jsxs)("div",{className:(0,clsx/* default */.A)(Desktop_styles_module.sidebar,hideOnScroll&&Desktop_styles_module.sidebarWithHideableNavbar,isHidden&&Desktop_styles_module.sidebarHidden),children:[hideOnScroll&&/*#__PURE__*/(0,jsx_runtime.jsx)(Logo/* default */.A,{tabIndex:-1,className:Desktop_styles_module.sidebarLogo}),/*#__PURE__*/(0,jsx_runtime.jsx)(DocSidebarDesktopContent,{path:path,sidebar:sidebar}),hideable&&/*#__PURE__*/(0,jsx_runtime.jsx)(CollapseButton,{onClick:onCollapse})]});}/* harmony default export */ const Desktop = (/*#__PURE__*/react.memo(DocSidebarDesktop));
// EXTERNAL MODULE: ../node_modules/@docusaurus/theme-common/lib/contexts/navbarSecondaryMenu/content.js
var content = __webpack_require__(56009);
// EXTERNAL MODULE: ../node_modules/@docusaurus/theme-common/lib/contexts/navbarMobileSidebar.js
var navbarMobileSidebar = __webpack_require__(20712);
;// ../node_modules/@docusaurus/theme-classic/lib/theme/DocSidebar/Mobile/index.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */// eslint-disable-next-line react/function-component-definition
const DocSidebarMobileSecondaryMenu=_ref=>{let{sidebar,path}=_ref;const mobileSidebar=(0,navbarMobileSidebar/* useNavbarMobileSidebar */.M)();return/*#__PURE__*/(0,jsx_runtime.jsx)("ul",{className:(0,clsx/* default */.A)(ThemeClassNames/* ThemeClassNames */.G.docs.docSidebarMenu,'menu__list'),children:/*#__PURE__*/(0,jsx_runtime.jsx)(theme_DocSidebarItems,{items:sidebar,activePath:path,onItemClick:item=>{// Mobile sidebar should only be closed if the category has a link
if(item.type==='category'&&item.href){mobileSidebar.toggle();}if(item.type==='link'){mobileSidebar.toggle();}},level:1})});};function DocSidebarMobile(props){return/*#__PURE__*/(0,jsx_runtime.jsx)(content/* NavbarSecondaryMenuFiller */.GX,{component:DocSidebarMobileSecondaryMenu,props:props});}/* harmony default export */ const Mobile = (/*#__PURE__*/react.memo(DocSidebarMobile));
;// ../node_modules/@docusaurus/theme-classic/lib/theme/DocSidebar/index.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */function DocSidebar(props){const windowSize=(0,useWindowSize/* useWindowSize */.l)();// Desktop sidebar visible on hydration: need SSR rendering
const shouldRenderSidebarDesktop=windowSize==='desktop'||windowSize==='ssr';// Mobile sidebar not visible on hydration: can avoid SSR rendering
const shouldRenderSidebarMobile=windowSize==='mobile';return/*#__PURE__*/(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[shouldRenderSidebarDesktop&&/*#__PURE__*/(0,jsx_runtime.jsx)(Desktop,{...props}),shouldRenderSidebarMobile&&/*#__PURE__*/(0,jsx_runtime.jsx)(Mobile,{...props})]});}

/***/ }),

/***/ 48386:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (/* binding */ IconArrow)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(63696);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(62540);
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */function IconArrow(props){return/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("svg",{width:"20",height:"20","aria-hidden":"true",...props,children:/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("g",{fill:"#7a7a7a",children:[/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("path",{d:"M9.992 10.023c0 .2-.062.399-.172.547l-4.996 7.492a.982.982 0 01-.828.454H1c-.55 0-1-.453-1-1 0-.2.059-.403.168-.551l4.629-6.942L.168 3.078A.939.939 0 010 2.528c0-.548.45-.997 1-.997h2.996c.352 0 .649.18.828.45L9.82 9.472c.11.148.172.347.172.55zm0 0"}),/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("path",{d:"M19.98 10.023c0 .2-.058.399-.168.547l-4.996 7.492a.987.987 0 01-.828.454h-3c-.547 0-.996-.453-.996-1 0-.2.059-.403.168-.551l4.625-6.942-4.625-6.945a.939.939 0 01-.168-.55 1 1 0 01.996-.997h3c.348 0 .649.18.828.45l4.996 7.492c.11.148.168.347.168.55zm0 0"})]})});}

/***/ }),

/***/ 48553:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ EmptyPage)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(63696);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(62540);
/**********************************************************************
 * Copyright (C) 2024 Red Hat, Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *
 * SPDX-License-Identifier: Apache-2.0
 ***********************************************************************/function EmptyPage(){return/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div",{className:"justify-center items-center grow flex w-full",children:/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("span",{children:"No component selected"})});}

/***/ }),

/***/ 98912:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ Storybook)
});

// EXTERNAL MODULE: ../node_modules/react-router/esm/react-router.js
var react_router = __webpack_require__(49519);
// EXTERNAL MODULE: ../node_modules/@docusaurus/theme-common/lib/contexts/colorMode.js
var contexts_colorMode = __webpack_require__(24996);
// EXTERNAL MODULE: ../node_modules/@docusaurus/theme-common/lib/utils/ThemeClassNames.js
var ThemeClassNames = __webpack_require__(97404);
// EXTERNAL MODULE: ./src/pages/storybook/empty-page.tsx
var empty_page = __webpack_require__(48553);
// EXTERNAL MODULE: ../node_modules/@docusaurus/theme-classic/lib/theme/DocSidebar/index.js + 15 modules
var DocSidebar = __webpack_require__(80794);
// EXTERNAL MODULE: ../node_modules/@docusaurus/theme-classic/lib/theme/Layout/index.js + 69 modules
var Layout = __webpack_require__(64103);
// EXTERNAL MODULE: ../node_modules/clsx/dist/clsx.mjs
var clsx = __webpack_require__(11750);
// EXTERNAL MODULE: ../node_modules/react/index.js
var react = __webpack_require__(63696);
// EXTERNAL MODULE: ./src/pages/storybook/sidebar.cjs
var sidebar = __webpack_require__(84224);
var sidebar_default = /*#__PURE__*/__webpack_require__.n(sidebar);
;// ./src/pages/storybook/styles.module.css
// extracted by mini-css-extract-plugin
/* harmony default export */ const styles_module = ({"docSidebarContainer":"docSidebarContainer_JCC2","docSidebarContainerHidden":"docSidebarContainerHidden_PAws","sidebarViewport":"sidebarViewport_KdtS","storybookRoot":"storybookRoot_nsIy"});
// EXTERNAL MODULE: ../node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(62540);
;// ./src/pages/storybook/index.tsx
/**********************************************************************
 * Copyright (C) 2024 Red Hat, Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *
 * SPDX-License-Identifier: Apache-2.0
 ***********************************************************************/// generated by storybook plugin
// the iframe is by default not taking all height
// adding an observer to ensure it always takes all the space it need
function observe(iframe){const body=iframe.contentDocument?.body;if(!body)return;const observerCallback=entries=>{window.requestAnimationFrame(()=>{if(!Array.isArray(entries)||!entries.length){return;}iframe.style.height=`${body.scrollHeight}px`;});};const resizeObserver=new ResizeObserver(observerCallback);resizeObserver.observe(body);}function StorybookRoot(){// eslint-disable-next-line no-null/no-null
const iframeRef=(0,react.useRef)(null);const{colorMode}=(0,contexts_colorMode/* useColorMode */.G)();const{search}=(0,react_router/* useLocation */.zy)();const[id,setId]=react.useState(undefined);(0,react.useEffect)(()=>{const queryId=new URLSearchParams(search).get('id');if(queryId){setId(queryId);}},[search]);const notifyIframe=()=>{// we send the iframe the dark mode change https://storybook.js.org/addons/storybook-dark-mode
iframeRef?.current?.contentWindow?.postMessage(JSON.stringify({key:'storybook-channel',event:{type:'DARK_MODE',args:[colorMode==='dark']}}));};const onLoad=e=>{// observe resize
observe(e.currentTarget);// https://github.com/storybookjs/storybook/blob/1943ee6b88d89c963f15ef4087aeabe64d05c9a1/code/lib/core-events/src/index.ts#L65
// eslint-disable-next-line sonarjs/post-message
window.addEventListener('message',message=>{if(message.source!==iframeRef?.current?.contentWindow){return;}const data=JSON.parse(message.data);if(!('key'in data)||data['key']!=='storybook-channel')return;if(!('event'in data)||typeof data['event']!=='object'||data['event']['type']!=='docsRendered')return;notifyIframe();});};(0,react.useEffect)(()=>{notifyIframe();},[colorMode]);return/*#__PURE__*/(0,jsx_runtime.jsxs)("div",{className:(0,clsx/* default */.A)(styles_module.storybookRoot),children:[/*#__PURE__*/(0,jsx_runtime.jsx)("aside",{className:(0,clsx/* default */.A)(ThemeClassNames/* ThemeClassNames */.G.docs.docSidebarContainer,styles_module.docSidebarContainer),children:/*#__PURE__*/(0,jsx_runtime.jsx)(DocSidebar/* default */.A,{isHidden:false,onCollapse:()=>{},sidebar:(sidebar_default()),path:`/storybook?id=${id}`})}),id?/*#__PURE__*/(0,jsx_runtime.jsx)("iframe",{ref:iframeRef,onLoad:onLoad,src:`/storybook-iframe?id=${id}`,style:{width:'100%',height:'100%'}}):/*#__PURE__*/(0,jsx_runtime.jsx)(empty_page["default"],{})]});}// to use `useColorMode` we need to be wrapped in Layout component
// ref https://docusaurus.io/docs/api/themes/configuration#use-color-mode
function Storybook(){return/*#__PURE__*/(0,jsx_runtime.jsx)(Layout/* default */.A,{title:"Storybook",children:/*#__PURE__*/(0,jsx_runtime.jsx)(StorybookRoot,{})});}

/***/ }),

/***/ 84224:
/***/ ((module) => {

module.exports = [{"type":"category","items":[{"type":"link","label":"Docs","href":"/storybook?id=checkbox--docs"},{"type":"link","label":"Basic","href":"/storybook?id=checkbox--basic"},{"type":"link","label":"Checked","href":"/storybook?id=checkbox--checked"},{"type":"link","label":"Indeterminate","href":"/storybook?id=checkbox--indeterminate"},{"type":"link","label":"Disabled","href":"/storybook?id=checkbox--disabled"},{"type":"link","label":"Disabled with custom tooltip","href":"/storybook?id=checkbox--disabled-with-custom-tooltip"},{"type":"link","label":"Required","href":"/storybook?id=checkbox--required"}],"collapsed":false,"collapsible":true,"label":"Checkbox"},{"type":"category","items":[{"type":"link","label":"Docs","href":"/storybook?id=dropdown--docs"},{"type":"link","label":"Basic","href":"/storybook?id=dropdown--basic"},{"type":"link","label":"Disabled","href":"/storybook?id=dropdown--disabled"},{"type":"link","label":"Left snippet","href":"/storybook?id=dropdown--left-snippet"}],"collapsed":false,"collapsible":true,"label":"Dropdown"},{"type":"category","items":[{"type":"link","label":"Docs","href":"/storybook?id=dropdownmenu--docs"},{"type":"link","label":"Basic","href":"/storybook?id=dropdownmenu--basic"}],"collapsed":false,"collapsible":true,"label":"DropdownMenu"},{"type":"category","items":[{"type":"category","items":[{"type":"link","label":"Docs","href":"/storybook?id=alert-errormessage--docs"},{"type":"link","label":"Basic","href":"/storybook?id=alert-errormessage--basic"},{"type":"link","label":"Icon only","href":"/storybook?id=alert-errormessage--icon-only"},{"type":"link","label":"Icon only and wrap","href":"/storybook?id=alert-errormessage--icon-only-and-wrap"}],"collapsed":false,"collapsible":true,"label":"ErrorMessage"}],"collapsed":false,"collapsible":true,"label":"Alert"},{"type":"category","items":[{"type":"link","label":"Docs","href":"/storybook?id=expandable--docs"},{"type":"link","label":"Basic","href":"/storybook?id=expandable--basic"}],"collapsed":false,"collapsible":true,"label":"Expandable"},{"type":"category","items":[{"type":"link","label":"Docs","href":"/storybook?id=link--docs"},{"type":"link","label":"Basic","href":"/storybook?id=link--basic"},{"type":"link","label":"Custom icon","href":"/storybook?id=link--custom-icon"}],"collapsed":false,"collapsible":true,"label":"Link"},{"type":"category","items":[{"type":"link","label":"Docs","href":"/storybook?id=statusicon--docs"},{"type":"link","label":"Starting","href":"/storybook?id=statusicon--starting"},{"type":"link","label":"Running","href":"/storybook?id=statusicon--running"},{"type":"link","label":"Used","href":"/storybook?id=statusicon--used"},{"type":"link","label":"Degraded","href":"/storybook?id=statusicon--degraded"},{"type":"link","label":"Deleting","href":"/storybook?id=statusicon--deleting"},{"type":"link","label":"Created","href":"/storybook?id=statusicon--created"}],"collapsed":false,"collapsible":true,"label":"StatusIcon"},{"type":"category","items":[{"type":"link","label":"Docs","href":"/storybook?id=tab--docs"},{"type":"link","label":"Basic","href":"/storybook?id=tab--basic"},{"type":"link","label":"Selected","href":"/storybook?id=tab--selected"}],"collapsed":false,"collapsible":true,"label":"Tab"},{"type":"category","items":[{"type":"link","label":"Docs","href":"/storybook?id=table--docs"},{"type":"link","label":"Basic","href":"/storybook?id=table--basic"},{"type":"link","label":"Children","href":"/storybook?id=table--children"}],"collapsed":false,"collapsible":true,"label":"Table"},{"type":"category","items":[{"type":"link","label":"Docs","href":"/storybook?id=tooltip--docs"},{"type":"link","label":"Basic","href":"/storybook?id=tooltip--basic"},{"type":"link","label":"Top","href":"/storybook?id=tooltip--top"},{"type":"link","label":"Top Left","href":"/storybook?id=tooltip--top-left"},{"type":"link","label":"Top Right","href":"/storybook?id=tooltip--top-right"},{"type":"link","label":"Right","href":"/storybook?id=tooltip--right"},{"type":"link","label":"Bottom","href":"/storybook?id=tooltip--bottom"},{"type":"link","label":"Bottom Left","href":"/storybook?id=tooltip--bottom-left"},{"type":"link","label":"Bottom Right","href":"/storybook?id=tooltip--bottom-right"},{"type":"link","label":"Left","href":"/storybook?id=tooltip--left"}],"collapsed":false,"collapsible":true,"label":"Tooltip"},{"type":"category","items":[{"type":"category","items":[{"type":"link","label":"Docs","href":"/storybook?id=button-button--docs"},{"type":"link","label":"Primary","href":"/storybook?id=button-button--primary"},{"type":"link","label":"Secondary","href":"/storybook?id=button-button--secondary"},{"type":"link","label":"Danger","href":"/storybook?id=button-button--danger"},{"type":"link","label":"With icon","href":"/storybook?id=button-button--with-icon"},{"type":"link","label":"Disabled","href":"/storybook?id=button-button--disabled"},{"type":"link","label":"Loading","href":"/storybook?id=button-button--loading"}],"collapsed":false,"collapsible":true,"label":"Button"},{"type":"category","items":[{"type":"link","label":"Docs","href":"/storybook?id=button-closebutton--docs"},{"type":"link","label":"Basic","href":"/storybook?id=button-closebutton--basic"}],"collapsed":false,"collapsible":true,"label":"CloseButton"}],"collapsed":false,"collapsible":true,"label":"Button"},{"type":"category","items":[{"type":"category","items":[{"type":"link","label":"Docs","href":"/storybook?id=icon-containericon--docs"},{"type":"link","label":"Basic","href":"/storybook?id=icon-containericon--basic"}],"collapsed":false,"collapsible":true,"label":"ContainerIcon"},{"type":"category","items":[{"type":"link","label":"Docs","href":"/storybook?id=icon-staricon--docs"},{"type":"link","label":"Basic","href":"/storybook?id=icon-staricon--basic"}],"collapsed":false,"collapsible":true,"label":"StarIcon"}],"collapsed":false,"collapsible":true,"label":"Icon"},{"type":"category","items":[{"type":"category","items":[{"type":"link","label":"Docs","href":"/storybook?id=input-input--docs"},{"type":"link","label":"Basic","href":"/storybook?id=input-input--basic"},{"type":"link","label":"Readonly","href":"/storybook?id=input-input--readonly"},{"type":"link","label":"Required","href":"/storybook?id=input-input--required"},{"type":"link","label":"Clearable","href":"/storybook?id=input-input--clearable"},{"type":"link","label":"Disabled","href":"/storybook?id=input-input--disabled"},{"type":"link","label":"Error","href":"/storybook?id=input-input--error"}],"collapsed":false,"collapsible":true,"label":"Input"}],"collapsed":false,"collapsible":true,"label":"Input"},{"type":"category","items":[{"type":"category","items":[{"type":"link","label":"Docs","href":"/storybook?id=progress-linearprogress--docs"},{"type":"link","label":"Basic","href":"/storybook?id=progress-linearprogress--basic"}],"collapsed":false,"collapsible":true,"label":"LinearProgress"},{"type":"category","items":[{"type":"link","label":"Docs","href":"/storybook?id=progress-spinner--docs"},{"type":"link","label":"Basic","href":"/storybook?id=progress-spinner--basic"}],"collapsed":false,"collapsible":true,"label":"Spinner"}],"collapsed":false,"collapsible":true,"label":"Progress"},{"type":"category","items":[{"type":"category","items":[{"type":"link","label":"Docs","href":"/storybook?id=screen-emptyscreen--docs"},{"type":"link","label":"Basic","href":"/storybook?id=screen-emptyscreen--basic"},{"type":"link","label":"Custom title & message","href":"/storybook?id=screen-emptyscreen--custom-title-message"},{"type":"link","label":"Custom title & message & details","href":"/storybook?id=screen-emptyscreen--custom-title-message-details"},{"type":"link","label":"Custom command","href":"/storybook?id=screen-emptyscreen--custom-command"}],"collapsed":false,"collapsible":true,"label":"EmptyScreen"},{"type":"category","items":[{"type":"link","label":"Docs","href":"/storybook?id=screen-filteredemptyscreen--docs"},{"type":"link","label":"Example","href":"/storybook?id=screen-filteredemptyscreen--example"}],"collapsed":false,"collapsible":true,"label":"FilteredEmptyScreen"}],"collapsed":false,"collapsible":true,"label":"Screen"}];

/***/ })

}]);