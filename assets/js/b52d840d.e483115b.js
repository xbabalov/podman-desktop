"use strict";
(self["webpackChunkdocs"] = self["webpackChunkdocs"] || []).push([[45226],{

/***/ 97395:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_api_interfaces_volume_info_md_b52_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/api/site-api-interfaces-volume-info-md-b52.json
const site_api_interfaces_volume_info_md_b52_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"interfaces/VolumeInfo","title":"Interface: VolumeInfo","description":"Defined in3710","source":"@site/api/interfaces/VolumeInfo.md","sourceDirName":"interfaces","slug":"/interfaces/VolumeInfo","permalink":"/api/interfaces/VolumeInfo","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{},"sidebar":"typedocSidebar","previous":{"title":"VolumeDeleteOptions","permalink":"/api/interfaces/VolumeDeleteOptions"},"next":{"title":"VolumeListInfo","permalink":"/api/interfaces/VolumeListInfo"}}');
// EXTERNAL MODULE: ../node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(62540);
// EXTERNAL MODULE: ../node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(43023);
;// ./api/interfaces/VolumeInfo.md


const frontMatter = {};
const contentTitle = 'Interface: VolumeInfo';

const assets = {

};



const toc = [{
  "value": "Properties",
  "id": "properties",
  "level": 2
}, {
  "value": "containersUsage",
  "id": "containersusage",
  "level": 3
}, {
  "value": "id",
  "id": "id",
  "level": 4
}, {
  "value": "names",
  "id": "names",
  "level": 4
}, {
  "value": "CreatedAt",
  "id": "createdat",
  "level": 3
}, {
  "value": "Driver",
  "id": "driver",
  "level": 3
}, {
  "value": "engineId",
  "id": "engineid",
  "level": 3
}, {
  "value": "engineName",
  "id": "enginename",
  "level": 3
}, {
  "value": "Labels",
  "id": "labels",
  "level": 3
}, {
  "value": "Index Signature",
  "id": "index-signature",
  "level": 4
}, {
  "value": "Mountpoint",
  "id": "mountpoint",
  "level": 3
}, {
  "value": "Name",
  "id": "name",
  "level": 3
}, {
  "value": "Options?",
  "id": "options",
  "level": 3
}, {
  "value": "Scope",
  "id": "scope",
  "level": 3
}, {
  "value": "Status?",
  "id": "status",
  "level": 3
}, {
  "value": "Index Signature",
  "id": "index-signature-1",
  "level": 4
}, {
  "value": "UsageData?",
  "id": "usagedata",
  "level": 3
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
        id: "interface-volumeinfo",
        children: "Interface: VolumeInfo"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Defined in: ", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://github.com/xbabalov/podman-desktop/blob/3a5b73d1f3bd22a255c749abf3e7695ef8847f4d/packages/extension-api/src/extension-api.d.ts#L3710",
        children: "packages/extension-api/src/extension-api.d.ts:3710"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "properties",
      children: "Properties"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "containersusage",
      children: "containersUsage"
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "containersUsage"
        }), ": ", (0,jsx_runtime.jsx)(_components.code, {
          children: "object"
        }), "[]"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Defined in: ", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://github.com/xbabalov/podman-desktop/blob/3a5b73d1f3bd22a255c749abf3e7695ef8847f4d/packages/extension-api/src/extension-api.d.ts#L3714",
        children: "packages/extension-api/src/extension-api.d.ts:3714"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "id",
      children: "id"
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "id"
        }), ": ", (0,jsx_runtime.jsx)(_components.code, {
          children: "string"
        })]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "names",
      children: "names"
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "names"
        }), ": ", (0,jsx_runtime.jsx)(_components.code, {
          children: "string"
        }), "[]"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "createdat",
      children: "CreatedAt"
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "CreatedAt"
        }), ": ", (0,jsx_runtime.jsx)(_components.code, {
          children: "string"
        })]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Defined in: ", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://github.com/xbabalov/podman-desktop/blob/3a5b73d1f3bd22a255c749abf3e7695ef8847f4d/packages/extension-api/src/extension-api.d.ts#L3713",
        children: "packages/extension-api/src/extension-api.d.ts:3713"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "driver",
      children: "Driver"
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Driver"
        }), ": ", (0,jsx_runtime.jsx)(_components.code, {
          children: "string"
        })]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Defined in: ", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://github.com/xbabalov/podman-desktop/blob/3a5b73d1f3bd22a255c749abf3e7695ef8847f4d/packages/extension-api/src/extension-api.d.ts#L3716",
        children: "packages/extension-api/src/extension-api.d.ts:3716"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "engineid",
      children: "engineId"
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "engineId"
        }), ": ", (0,jsx_runtime.jsx)(_components.code, {
          children: "string"
        })]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Defined in: ", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://github.com/xbabalov/podman-desktop/blob/3a5b73d1f3bd22a255c749abf3e7695ef8847f4d/packages/extension-api/src/extension-api.d.ts#L3711",
        children: "packages/extension-api/src/extension-api.d.ts:3711"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "enginename",
      children: "engineName"
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "engineName"
        }), ": ", (0,jsx_runtime.jsx)(_components.code, {
          children: "string"
        })]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Defined in: ", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://github.com/xbabalov/podman-desktop/blob/3a5b73d1f3bd22a255c749abf3e7695ef8847f4d/packages/extension-api/src/extension-api.d.ts#L3712",
        children: "packages/extension-api/src/extension-api.d.ts:3712"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "labels",
      children: "Labels"
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Labels"
        }), ": ", (0,jsx_runtime.jsx)(_components.code, {
          children: "object"
        })]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Defined in: ", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://github.com/xbabalov/podman-desktop/blob/3a5b73d1f3bd22a255c749abf3e7695ef8847f4d/packages/extension-api/src/extension-api.d.ts#L3719",
        children: "packages/extension-api/src/extension-api.d.ts:3719"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "index-signature",
      children: "Index Signature"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["[", (0,jsx_runtime.jsx)(_components.code, {
        children: "key"
      }), ": ", (0,jsx_runtime.jsx)(_components.code, {
        children: "string"
      }), "]: ", (0,jsx_runtime.jsx)(_components.code, {
        children: "string"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "mountpoint",
      children: "Mountpoint"
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Mountpoint"
        }), ": ", (0,jsx_runtime.jsx)(_components.code, {
          children: "string"
        })]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Defined in: ", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://github.com/xbabalov/podman-desktop/blob/3a5b73d1f3bd22a255c749abf3e7695ef8847f4d/packages/extension-api/src/extension-api.d.ts#L3717",
        children: "packages/extension-api/src/extension-api.d.ts:3717"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "name",
      children: "Name"
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Name"
        }), ": ", (0,jsx_runtime.jsx)(_components.code, {
          children: "string"
        })]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Defined in: ", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://github.com/xbabalov/podman-desktop/blob/3a5b73d1f3bd22a255c749abf3e7695ef8847f4d/packages/extension-api/src/extension-api.d.ts#L3715",
        children: "packages/extension-api/src/extension-api.d.ts:3715"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "options",
      children: "Options?"
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "optional"
        }), " ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Options"
        }), ": ", (0,jsx_runtime.jsx)(_components.code, {
          children: "null"
        }), " | {[", (0,jsx_runtime.jsx)(_components.code, {
          children: "key"
        }), ": ", (0,jsx_runtime.jsx)(_components.code, {
          children: "string"
        }), "]: ", (0,jsx_runtime.jsx)(_components.code, {
          children: "string"
        }), "; }"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Defined in: ", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://github.com/xbabalov/podman-desktop/blob/3a5b73d1f3bd22a255c749abf3e7695ef8847f4d/packages/extension-api/src/extension-api.d.ts#L3721",
        children: "packages/extension-api/src/extension-api.d.ts:3721"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "scope",
      children: "Scope"
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Scope"
        }), ": ", (0,jsx_runtime.jsx)(_components.code, {
          children: "\"global\""
        }), " | ", (0,jsx_runtime.jsx)(_components.code, {
          children: "\"local\""
        })]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Defined in: ", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://github.com/xbabalov/podman-desktop/blob/3a5b73d1f3bd22a255c749abf3e7695ef8847f4d/packages/extension-api/src/extension-api.d.ts#L3720",
        children: "packages/extension-api/src/extension-api.d.ts:3720"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "status",
      children: "Status?"
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "optional"
        }), " ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Status"
        }), ": ", (0,jsx_runtime.jsx)(_components.code, {
          children: "object"
        })]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Defined in: ", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://github.com/xbabalov/podman-desktop/blob/3a5b73d1f3bd22a255c749abf3e7695ef8847f4d/packages/extension-api/src/extension-api.d.ts#L3718",
        children: "packages/extension-api/src/extension-api.d.ts:3718"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "index-signature-1",
      children: "Index Signature"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["[", (0,jsx_runtime.jsx)(_components.code, {
        children: "key"
      }), ": ", (0,jsx_runtime.jsx)(_components.code, {
        children: "string"
      }), "]: ", (0,jsx_runtime.jsx)(_components.code, {
        children: "string"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "usagedata",
      children: "UsageData?"
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "optional"
        }), " ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "UsageData"
        }), ": ", (0,jsx_runtime.jsx)(_components.code, {
          children: "null"
        }), " | { ", (0,jsx_runtime.jsx)(_components.code, {
          children: "RefCount"
        }), ": ", (0,jsx_runtime.jsx)(_components.code, {
          children: "number"
        }), "; ", (0,jsx_runtime.jsx)(_components.code, {
          children: "Size"
        }), ": ", (0,jsx_runtime.jsx)(_components.code, {
          children: "number"
        }), "; }"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Defined in: ", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://github.com/xbabalov/podman-desktop/blob/3a5b73d1f3bd22a255c749abf3e7695ef8847f4d/packages/extension-api/src/extension-api.d.ts#L3722",
        children: "packages/extension-api/src/extension-api.d.ts:3722"
      })]
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