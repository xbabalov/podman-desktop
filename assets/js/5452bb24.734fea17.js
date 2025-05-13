"use strict";
(self["webpackChunkdocs"] = self["webpackChunkdocs"] || []).push([[27767],{

/***/ 17211:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_api_podman_desktop_namespaces_container_engine_functions_list_containers_md_545_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/api/site-api-podman-desktop-namespaces-container-engine-functions-list-containers-md-545.json
const site_api_podman_desktop_namespaces_container_engine_functions_list_containers_md_545_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"@podman-desktop/namespaces/containerEngine/functions/listContainers","title":"Function: listContainers()","description":"listContainers(): Promise\\\\","source":"@site/api/@podman-desktop/namespaces/containerEngine/functions/listContainers.md","sourceDirName":"@podman-desktop/namespaces/containerEngine/functions","slug":"/@podman-desktop/namespaces/containerEngine/functions/listContainers","permalink":"/api/@podman-desktop/namespaces/containerEngine/functions/listContainers","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{},"sidebar":"typedocSidebar","previous":{"title":"inspectManifest","permalink":"/api/@podman-desktop/namespaces/containerEngine/functions/inspectManifest"},"next":{"title":"listImages","permalink":"/api/@podman-desktop/namespaces/containerEngine/functions/listImages"}}');
// EXTERNAL MODULE: ../node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(62540);
// EXTERNAL MODULE: ../node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(43023);
;// ./api/@podman-desktop/namespaces/containerEngine/functions/listContainers.md


const frontMatter = {};
const contentTitle = 'Function: listContainers()';

const assets = {

};



const toc = [{
  "value": "Returns",
  "id": "returns",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    blockquote: "blockquote",
    code: "code",
    h1: "h1",
    h2: "h2",
    header: "header",
    p: "p",
    strong: "strong",
    ...(0,lib/* useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.header, {
      children: (0,jsx_runtime.jsx)(_components.h1, {
        id: "function-listcontainers",
        children: "Function: listContainers()"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "listContainers"
        }), "(): ", (0,jsx_runtime.jsx)(_components.code, {
          children: "Promise"
        }), "<", (0,jsx_runtime.jsx)(_components.a, {
          href: "/api/interfaces/ContainerInfo",
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "ContainerInfo"
          })
        }), "[]>"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Defined in: ", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://github.com/xbabalov/podman-desktop/blob/3a5b73d1f3bd22a255c749abf3e7695ef8847f4d/packages/extension-api/src/extension-api.d.ts#L3773",
        children: "packages/extension-api/src/extension-api.d.ts:3773"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Returns the list of containers across all container engines, in any state (running or not)."
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "returns",
      children: "Returns"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.code, {
        children: "Promise"
      }), "<", (0,jsx_runtime.jsx)(_components.a, {
        href: "/api/interfaces/ContainerInfo",
        children: (0,jsx_runtime.jsx)(_components.code, {
          children: "ContainerInfo"
        })
      }), "[]>"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["A promise resolving to an array of containers information. This method returns a subset of the available information for containers. To get the complete description of a specific container, you can use the ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/api/@podman-desktop/namespaces/containerEngine/functions/inspectContainer",
        children: "containerEngine.inspectContainer"
      }), " method."]
    })]
  });
}
function MDXContent(props = {}) {
  const {wrapper: MDXLayout} = {
    ...(0,lib/* useMDXComponents */.R)(),
    ...props.components
  };
  return MDXLayout ? (0,jsx_runtime.jsx)(MDXLayout, {
    ...props,
    children: (0,jsx_runtime.jsx)(_createMdxContent, {
      ...props
    })
  }) : _createMdxContent(props);
}



/***/ }),

/***/ 43023:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   R: () => (/* binding */ useMDXComponents),
/* harmony export */   x: () => (/* binding */ MDXProvider)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(63696);
/**
 * @import {MDXComponents} from 'mdx/types.js'
 * @import {Component, ReactElement, ReactNode} from 'react'
 */

/**
 * @callback MergeComponents
 *   Custom merge function.
 * @param {Readonly<MDXComponents>} currentComponents
 *   Current components from the context.
 * @returns {MDXComponents}
 *   Additional components.
 *
 * @typedef Props
 *   Configuration for `MDXProvider`.
 * @property {ReactNode | null | undefined} [children]
 *   Children (optional).
 * @property {Readonly<MDXComponents> | MergeComponents | null | undefined} [components]
 *   Additional components to use or a function that creates them (optional).
 * @property {boolean | null | undefined} [disableParentContext=false]
 *   Turn off outer component context (default: `false`).
 */



/** @type {Readonly<MDXComponents>} */
const emptyComponents = {}

const MDXContext = react__WEBPACK_IMPORTED_MODULE_0__.createContext(emptyComponents)

/**
 * Get current components from the MDX Context.
 *
 * @param {Readonly<MDXComponents> | MergeComponents | null | undefined} [components]
 *   Additional components to use or a function that creates them (optional).
 * @returns {MDXComponents}
 *   Current components.
 */
function useMDXComponents(components) {
  const contextComponents = react__WEBPACK_IMPORTED_MODULE_0__.useContext(MDXContext)

  // Memoize to avoid unnecessary top-level context changes
  return react__WEBPACK_IMPORTED_MODULE_0__.useMemo(
    function () {
      // Custom merge via a function prop
      if (typeof components === 'function') {
        return components(contextComponents)
      }

      return {...contextComponents, ...components}
    },
    [contextComponents, components]
  )
}

/**
 * Provider for MDX context.
 *
 * @param {Readonly<Props>} properties
 *   Properties.
 * @returns {ReactElement}
 *   Element.
 * @satisfies {Component}
 */
function MDXProvider(properties) {
  /** @type {Readonly<MDXComponents>} */
  let allComponents

  if (properties.disableParentContext) {
    allComponents =
      typeof properties.components === 'function'
        ? properties.components(emptyComponents)
        : properties.components || emptyComponents
  } else {
    allComponents = useMDXComponents(properties.components)
  }

  return react__WEBPACK_IMPORTED_MODULE_0__.createElement(
    MDXContext.Provider,
    {value: allComponents},
    properties.children
  )
}


/***/ })

}]);