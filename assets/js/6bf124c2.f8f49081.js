"use strict";
(self["webpackChunkdocs"] = self["webpackChunkdocs"] || []).push([[12401],{

/***/ 10600:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_minikube_deleting_your_minikube_cluster_md_6bf_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-minikube-deleting-your-minikube-cluster-md-6bf.json
const site_docs_minikube_deleting_your_minikube_cluster_md_6bf_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"minikube/deleting-your-minikube-cluster","title":"Deleting a cluster","description":"Deleting your local Minikube-powered Kubernetes cluster.","source":"@site/docs/minikube/deleting-your-minikube-cluster.md","sourceDirName":"minikube","slug":"/minikube/deleting-your-minikube-cluster","permalink":"/docs/minikube/deleting-your-minikube-cluster","draft":false,"unlisted":false,"editUrl":"https://github.com/podman-desktop/podman-desktop/tree/main/website/docs/minikube/deleting-your-minikube-cluster.md","tags":[{"inline":true,"label":"deleting-a-minikube-cluster","permalink":"/docs/tags/deleting-a-minikube-cluster"},{"inline":true,"label":"minikube","permalink":"/docs/tags/minikube"}],"version":"current","sidebarPosition":7,"frontMatter":{"sidebar_position":7,"title":"Deleting a cluster","description":"Deleting your local Minikube-powered Kubernetes cluster.","keywords":["podman desktop","podman","containers","migrating","kubernetes","minikube"],"tags":["deleting-a-minikube-cluster","minikube"]},"sidebar":"mySidebar","previous":{"title":"Restarting a cluster","permalink":"/docs/minikube/restarting-your-minikube-cluster"},"next":{"title":"Building and testing an image","permalink":"/docs/minikube/building-an-image-and-testing-it-in-minikube"}}');
// EXTERNAL MODULE: ../node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(62540);
// EXTERNAL MODULE: ../node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(43023);
;// ./docs/minikube/deleting-your-minikube-cluster.md


const frontMatter = {
	sidebar_position: 7,
	title: 'Deleting a cluster',
	description: 'Deleting your local Minikube-powered Kubernetes cluster.',
	keywords: [
		'podman desktop',
		'podman',
		'containers',
		'migrating',
		'kubernetes',
		'minikube'
	],
	tags: [
		'deleting-a-minikube-cluster',
		'minikube'
	]
};
const contentTitle = 'Deleting your local Minikube-powered Kubernetes cluster';

const assets = {

};



const toc = [{
  "value": "Prerequisites",
  "id": "prerequisites",
  "level": 4
}, {
  "value": "Procedure",
  "id": "procedure",
  "level": 4
}, {
  "value": "Verification",
  "id": "verification",
  "level": 4
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    h1: "h1",
    h4: "h4",
    header: "header",
    li: "li",
    ol: "ol",
    strong: "strong",
    ul: "ul",
    ...(0,lib/* useMDXComponents */.R)(),
    ...props.components
  }, {Icon} = _components;
  if (!Icon) _missingMdxReference("Icon", true);
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.header, {
      children: (0,jsx_runtime.jsx)(_components.h1, {
        id: "deleting-your-local-minikube-powered-kubernetes-cluster",
        children: "Deleting your local Minikube-powered Kubernetes cluster"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "prerequisites",
      children: "Prerequisites"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.a, {
          href: "./creating-a-minikube-cluster",
          children: "You configured Podman"
        }), "."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.a, {
          href: "https://minikube.sigs.k8s.io/",
          children: "You installed Minikube"
        }), "."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "procedure",
      children: "Procedure"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Open ", (0,jsx_runtime.jsxs)(_components.strong, {
          children: [(0,jsx_runtime.jsx)(Icon, {
            icon: "fa-solid fa-cog",
            size: "lg"
          }), " Settings > Resources"]
        }), "."]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Find the Minikube cluster to delete."
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Click ", (0,jsx_runtime.jsx)(Icon, {
          icon: "fa-solid fa-stop",
          size: "lg"
        }), " to stop the cluster."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Once the cluster is stopped, click ", (0,jsx_runtime.jsx)(Icon, {
          icon: "fa-solid fa-trash",
          size: "lg"
        }), " to delete it."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "verification",
      children: "Verification"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["In ", (0,jsx_runtime.jsxs)(_components.strong, {
          children: [(0,jsx_runtime.jsx)(Icon, {
            icon: "fa-solid fa-cog",
            size: "lg"
          }), " Settings > Resources"]
        }), ", the deleted Minikube cluster is not visible."]
      }), "\n"]
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
function _missingMdxReference(id, component) {
  throw new Error("Expected " + (component ? "component" : "object") + " `" + id + "` to be defined: you likely forgot to import, pass, or provide it.");
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