"use strict";
(self["webpackChunkdocs"] = self["webpackChunkdocs"] || []).push([[95341],{

/***/ 86102:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_api_interfaces_vm_provider_connection_md_341_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/api/site-api-interfaces-vm-provider-connection-md-341.json
const site_api_interfaces_vm_provider_connection_md_341_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"interfaces/VmProviderConnection","title":"Interface: VmProviderConnection","description":"Defined in528","source":"@site/api/interfaces/VmProviderConnection.md","sourceDirName":"interfaces","slug":"/interfaces/VmProviderConnection","permalink":"/api/interfaces/VmProviderConnection","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{},"sidebar":"typedocSidebar","previous":{"title":"UpdateVmConnectionEvent","permalink":"/api/interfaces/UpdateVmConnectionEvent"},"next":{"title":"VmProviderConnectionFactory","permalink":"/api/interfaces/VmProviderConnectionFactory"}}');
// EXTERNAL MODULE: ../node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(62540);
// EXTERNAL MODULE: ../node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(43023);
;// ./api/interfaces/VmProviderConnection.md


const frontMatter = {};
const contentTitle = 'Interface: VmProviderConnection';

const assets = {

};



const toc = [{
  "value": "Properties",
  "id": "properties",
  "level": 2
}, {
  "value": "lifecycle?",
  "id": "lifecycle",
  "level": 3
}, {
  "value": "name",
  "id": "name",
  "level": 3
}, {
  "value": "shellAccess?",
  "id": "shellaccess",
  "level": 3
}, {
  "value": "Methods",
  "id": "methods",
  "level": 2
}, {
  "value": "status()",
  "id": "status",
  "level": 3
}, {
  "value": "Returns",
  "id": "returns",
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
        id: "interface-vmproviderconnection",
        children: "Interface: VmProviderConnection"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Defined in: ", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://github.com/xbabalov/podman-desktop/blob/ac8f465dc7f355e9d6d1cb17cc0814eeb3834624/packages/extension-api/src/extension-api.d.ts#L528",
        children: "packages/extension-api/src/extension-api.d.ts:528"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "properties",
      children: "Properties"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "lifecycle",
      children: "lifecycle?"
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "optional"
        }), " ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "lifecycle"
        }), ": ", (0,jsx_runtime.jsx)(_components.a, {
          href: "/api/interfaces/ProviderConnectionLifecycle",
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "ProviderConnectionLifecycle"
          })
        })]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Defined in: ", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://github.com/xbabalov/podman-desktop/blob/ac8f465dc7f355e9d6d1cb17cc0814eeb3834624/packages/extension-api/src/extension-api.d.ts#L531",
        children: "packages/extension-api/src/extension-api.d.ts:531"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "name",
      children: "name"
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "name"
        }), ": ", (0,jsx_runtime.jsx)(_components.code, {
          children: "string"
        })]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Defined in: ", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://github.com/xbabalov/podman-desktop/blob/ac8f465dc7f355e9d6d1cb17cc0814eeb3834624/packages/extension-api/src/extension-api.d.ts#L529",
        children: "packages/extension-api/src/extension-api.d.ts:529"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "shellaccess",
      children: "shellAccess?"
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "optional"
        }), " ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "shellAccess"
        }), ": ", (0,jsx_runtime.jsx)(_components.a, {
          href: "/api/interfaces/ProviderConnectionShellAccess",
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "ProviderConnectionShellAccess"
          })
        })]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Defined in: ", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://github.com/xbabalov/podman-desktop/blob/ac8f465dc7f355e9d6d1cb17cc0814eeb3834624/packages/extension-api/src/extension-api.d.ts#L530",
        children: "packages/extension-api/src/extension-api.d.ts:530"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "methods",
      children: "Methods"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "status",
      children: "status()"
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "status"
        }), "(): ", (0,jsx_runtime.jsx)(_components.a, {
          href: "/api/type-aliases/ProviderConnectionStatus",
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "ProviderConnectionStatus"
          })
        })]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Defined in: ", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://github.com/xbabalov/podman-desktop/blob/ac8f465dc7f355e9d6d1cb17cc0814eeb3834624/packages/extension-api/src/extension-api.d.ts#L532",
        children: "packages/extension-api/src/extension-api.d.ts:532"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "returns",
      children: "Returns"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.a, {
        href: "/api/type-aliases/ProviderConnectionStatus",
        children: (0,jsx_runtime.jsx)(_components.code, {
          children: "ProviderConnectionStatus"
        })
      })
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