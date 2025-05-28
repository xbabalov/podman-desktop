"use strict";
(self["webpackChunkdocs"] = self["webpackChunkdocs"] || []).push([[55395],{

/***/ 28686:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_api_interfaces_cli_tool_select_update_md_cf6_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/api/site-api-interfaces-cli-tool-select-update-md-cf6.json
const site_api_interfaces_cli_tool_select_update_md_cf6_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"interfaces/CliToolSelectUpdate","title":"Interface: CliToolSelectUpdate","description":"Defined in4664","source":"@site/api/interfaces/CliToolSelectUpdate.md","sourceDirName":"interfaces","slug":"/interfaces/CliToolSelectUpdate","permalink":"/api/interfaces/CliToolSelectUpdate","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{},"sidebar":"typedocSidebar","previous":{"title":"CliToolOptions","permalink":"/api/interfaces/CliToolOptions"},"next":{"title":"CliToolUpdate","permalink":"/api/interfaces/CliToolUpdate"}}');
// EXTERNAL MODULE: ../node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(62540);
// EXTERNAL MODULE: ../node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(43023);
;// ./api/interfaces/CliToolSelectUpdate.md


const frontMatter = {};
const contentTitle = 'Interface: CliToolSelectUpdate';

const assets = {

};



const toc = [{
  "value": "Properties",
  "id": "properties",
  "level": 2
}, {
  "value": "doUpdate()",
  "id": "doupdate",
  "level": 3
}, {
  "value": "Parameters",
  "id": "parameters",
  "level": 4
}, {
  "value": "logger",
  "id": "logger",
  "level": 5
}, {
  "value": "Returns",
  "id": "returns",
  "level": 4
}, {
  "value": "selectVersion()",
  "id": "selectversion",
  "level": 3
}, {
  "value": "Returns",
  "id": "returns-1",
  "level": 4
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    blockquote: "blockquote",
    code: "code",
    h1: "h1",
    h2: "h2",
    h3: "h3",
    h4: "h4",
    h5: "h5",
    header: "header",
    hr: "hr",
    p: "p",
    strong: "strong",
    ...(0,lib/* useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.header, {
      children: (0,jsx_runtime.jsx)(_components.h1, {
        id: "interface-clitoolselectupdate",
        children: "Interface: CliToolSelectUpdate"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Defined in: ", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://github.com/xbabalov/podman-desktop/blob/df48f7d65f8c5b7ae38fdf9f69d618baed8f1ebb/packages/extension-api/src/extension-api.d.ts#L4664",
        children: "packages/extension-api/src/extension-api.d.ts:4664"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "properties",
      children: "Properties"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "doupdate",
      children: "doUpdate()"
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "doUpdate"
        }), ": (", (0,jsx_runtime.jsx)(_components.code, {
          children: "logger"
        }), ") => ", (0,jsx_runtime.jsx)(_components.code, {
          children: "Promise"
        }), "<", (0,jsx_runtime.jsx)(_components.code, {
          children: "void"
        }), ">"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Defined in: ", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://github.com/xbabalov/podman-desktop/blob/df48f7d65f8c5b7ae38fdf9f69d618baed8f1ebb/packages/extension-api/src/extension-api.d.ts#L4666",
        children: "packages/extension-api/src/extension-api.d.ts:4666"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "parameters",
      children: "Parameters"
    }), "\n", (0,jsx_runtime.jsx)(_components.h5, {
      id: "logger",
      children: "logger"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.a, {
        href: "/api/interfaces/Logger",
        children: (0,jsx_runtime.jsx)(_components.code, {
          children: "Logger"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "returns",
      children: "Returns"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.code, {
        children: "Promise"
      }), "<", (0,jsx_runtime.jsx)(_components.code, {
        children: "void"
      }), ">"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "selectversion",
      children: "selectVersion()"
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "selectVersion"
        }), ": () => ", (0,jsx_runtime.jsx)(_components.code, {
          children: "Promise"
        }), "<", (0,jsx_runtime.jsx)(_components.code, {
          children: "string"
        }), ">"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Defined in: ", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://github.com/xbabalov/podman-desktop/blob/df48f7d65f8c5b7ae38fdf9f69d618baed8f1ebb/packages/extension-api/src/extension-api.d.ts#L4665",
        children: "packages/extension-api/src/extension-api.d.ts:4665"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "returns-1",
      children: "Returns"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.code, {
        children: "Promise"
      }), "<", (0,jsx_runtime.jsx)(_components.code, {
        children: "string"
      }), ">"]
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