"use strict";
(self["webpackChunkdocs"] = self["webpackChunkdocs"] || []).push([[79607],{

/***/ 81358:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_api_podman_desktop_namespaces_process_functions_exec_md_676_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/api/site-api-podman-desktop-namespaces-process-functions-exec-md-676.json
const site_api_podman_desktop_namespaces_process_functions_exec_md_676_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"@podman-desktop/namespaces/process/functions/exec","title":"Function: exec()","description":"exec(command, args?, options?): Promise\\\\","source":"@site/api/@podman-desktop/namespaces/process/functions/exec.md","sourceDirName":"@podman-desktop/namespaces/process/functions","slug":"/@podman-desktop/namespaces/process/functions/exec","permalink":"/api/@podman-desktop/namespaces/process/functions/exec","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{},"sidebar":"typedocSidebar","previous":{"title":"process","permalink":"/api/@podman-desktop/namespaces/process/"},"next":{"title":"provider","permalink":"/api/@podman-desktop/namespaces/provider/"}}');
// EXTERNAL MODULE: ../node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(62540);
// EXTERNAL MODULE: ../node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(43023);
;// ./api/@podman-desktop/namespaces/process/functions/exec.md


const frontMatter = {};
const contentTitle = 'Function: exec()';

const assets = {

};



const toc = [{
  "value": "Parameters",
  "id": "parameters",
  "level": 2
}, {
  "value": "command",
  "id": "command",
  "level": 3
}, {
  "value": "args?",
  "id": "args",
  "level": 3
}, {
  "value": "options?",
  "id": "options",
  "level": 3
}, {
  "value": "Returns",
  "id": "returns",
  "level": 2
}, {
  "value": "Throws",
  "id": "throws",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    blockquote: "blockquote",
    code: "code",
    h1: "h1",
    h2: "h2",
    h3: "h3",
    header: "header",
    p: "p",
    strong: "strong",
    ...(0,lib/* useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.header, {
      children: (0,jsx_runtime.jsx)(_components.h1, {
        id: "function-exec",
        children: "Function: exec()"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "exec"
        }), "(", (0,jsx_runtime.jsx)(_components.code, {
          children: "command"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "args?"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "options?"
        }), "): ", (0,jsx_runtime.jsx)(_components.code, {
          children: "Promise"
        }), "<", (0,jsx_runtime.jsx)(_components.a, {
          href: "/api/interfaces/RunResult",
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "RunResult"
          })
        }), ">"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Defined in: ", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://github.com/xbabalov/podman-desktop/blob/df48f7d65f8c5b7ae38fdf9f69d618baed8f1ebb/packages/extension-api/src/extension-api.d.ts#L4450",
        children: "packages/extension-api/src/extension-api.d.ts:4450"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Executes the provided command and returns an object containing the exit code,\nstdout, and stderr content."
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "parameters",
      children: "Parameters"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "command",
      children: "command"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "string"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The command to execute."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "args",
      children: "args?"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.code, {
        children: "string"
      }), "[]"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The command arguments."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "options",
      children: "options?"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.a, {
        href: "/api/interfaces/RunOptions",
        children: (0,jsx_runtime.jsx)(_components.code, {
          children: "RunOptions"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Options, such as environment variables."
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "returns",
      children: "Returns"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.code, {
        children: "Promise"
      }), "<", (0,jsx_runtime.jsx)(_components.a, {
        href: "/api/interfaces/RunResult",
        children: (0,jsx_runtime.jsx)(_components.code, {
          children: "RunResult"
        })
      }), ">"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "A promise that resolves to a RunResult object."
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "throws",
      children: "Throws"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.a, {
        href: "/api/interfaces/RunError",
        children: "RunError"
      }), " if provided command can not be executed."]
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