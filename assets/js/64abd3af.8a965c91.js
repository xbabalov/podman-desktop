"use strict";
(self["webpackChunkdocs"] = self["webpackChunkdocs"] || []).push([[41266],{

/***/ 22187:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_kind_pushing_an_image_to_kind_md_64a_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-kind-pushing-an-image-to-kind-md-64a.json
const site_docs_kind_pushing_an_image_to_kind_md_64a_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"kind/pushing-an-image-to-kind","title":"Pushing an image","description":"Pushing an image to your Kind cluster","source":"@site/docs/kind/pushing-an-image-to-kind.md","sourceDirName":"kind","slug":"/kind/pushing-an-image-to-kind","permalink":"/docs/kind/pushing-an-image-to-kind","draft":false,"unlisted":false,"editUrl":"https://github.com/podman-desktop/podman-desktop/tree/main/website/docs/kind/pushing-an-image-to-kind.md","tags":[{"inline":true,"label":"pushing-an-image","permalink":"/docs/tags/pushing-an-image"},{"inline":true,"label":"images","permalink":"/docs/tags/images"}],"version":"current","sidebarPosition":10,"frontMatter":{"sidebar_position":10,"title":"Pushing an image","description":"Pushing an image to your Kind cluster","keywords":["podman desktop","podman","containers","images","pushing an image","kubernetes"],"tags":["pushing-an-image","images"]},"sidebar":"mySidebar","previous":{"title":"Building and testing an image","permalink":"/docs/kind/building-an-image-and-testing-it-in-kind"},"next":{"title":"Minikube","permalink":"/docs/minikube/"}}');
// EXTERNAL MODULE: ../node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(62540);
// EXTERNAL MODULE: ../node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(43023);
;// ./docs/kind/pushing-an-image-to-kind.md


const frontMatter = {
	sidebar_position: 10,
	title: 'Pushing an image',
	description: 'Pushing an image to your Kind cluster',
	keywords: [
		'podman desktop',
		'podman',
		'containers',
		'images',
		'pushing an image',
		'kubernetes'
	],
	tags: [
		'pushing-an-image',
		'images'
	]
};
const contentTitle = 'Pushing an image to your local Kind-powered Kubernetes cluster';

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
    code: "code",
    h1: "h1",
    h4: "h4",
    header: "header",
    img: "img",
    li: "li",
    ol: "ol",
    p: "p",
    pre: "pre",
    strong: "strong",
    ul: "ul",
    ...(0,lib/* useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.header, {
      children: (0,jsx_runtime.jsx)(_components.h1, {
        id: "pushing-an-image-to-your-local-kind-powered-kubernetes-cluster",
        children: "Pushing an image to your local Kind-powered Kubernetes cluster"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "With Podman Desktop, you can push an image to your local Kind-powered Kubernetes cluster."
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "prerequisites",
      children: "Prerequisites"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.a, {
          href: "/docs/containers",
          children: "You onboarded a container engine"
        }), "."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.a, {
          href: "/docs/kind",
          children: "You onboarded a Kind cluster"
        }), "."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.a, {
          href: "/docs/kind/working-with-your-local-kind-cluster",
          children: "You have set your Kubernetes context to your local Kind-powered Kubernetes cluster"
        }), "."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Your image is available on the ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Images"
        }), " page: ", (0,jsx_runtime.jsx)(_components.code, {
          children: "<my_image>:<my_tag>"
        }), "."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "procedure",
      children: "Procedure"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Go to ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "Images"
          }), " from the left navigation pane."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Click the ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "overflow menu"
          }), " icon corresponding to the image you want to push and select ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "Push image to Kind cluster"
          }), ".\n", (0,jsx_runtime.jsx)(_components.img, {
            alt: "pushing an image to Kind",
            src: (__webpack_require__(83948)/* ["default"] */ .A) + "",
            width: "2070",
            height: "1112"
          })]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Optional: If you created multiple Kind clusters, select the required Kind cluster from the context dropdown list.\n", (0,jsx_runtime.jsx)(_components.img, {
            alt: "selecting a Kind cluster",
            src: (__webpack_require__(92005)/* ["default"] */ .A) + "",
            width: "1212",
            height: "196"
          }), "\nA successful operation notification opens."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Click ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "OK"
          }), "."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "verification",
      children: "Verification"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Kind does not enable you to list loaded images.\nTherefore, create a pod that uses the loaded image."
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Create a ", (0,jsx_runtime.jsx)(_components.code, {
            children: "verify_my_image.yaml"
          }), " Kubernetes YAML file on your workstation.\nReplace the placeholders:"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["Pod ", (0,jsx_runtime.jsx)(_components.code, {
              children: "name"
            }), " and container ", (0,jsx_runtime.jsx)(_components.code, {
              children: "name"
            }), " values must consist of lowercase alphanumeric characters, '-', or '.', and must start and end with an alphanumeric character."]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["Container ", (0,jsx_runtime.jsx)(_components.code, {
              children: "image"
            }), " value is the image you pushed. You can click the name of the image to check its name and tag."]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            className: "language-yaml",
            children: "apiVersion: v1\nkind: Pod\nmetadata:\n  name: <verify-my-image>\nspec:\n  containers:\n    - name: <my-image>\n      image: <my_image>:<my_tag>\n      imagePullPolicy: Never\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Go to ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "Pods"
          }), " from the left navigation pane."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Click ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "Play Kubernetes YAML"
          }), " and provide the following details:"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Kubernetes YAML file"
            }), ": select your ", (0,jsx_runtime.jsx)(_components.code, {
              children: "verify_my_image.yaml"
            }), " file."]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["Set ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "Runtime"
            }), " to ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "Kubernetes cluster"
            }), "."]
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Click ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "Play"
          }), ".\n", (0,jsx_runtime.jsx)(_components.img, {
            alt: "play a Kubernetes YAML",
            src: (__webpack_require__(17792)/* ["default"] */ .A) + "",
            width: "1660",
            height: "1180"
          })]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Click ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "Done"
          }), "."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["View the created pod ", (0,jsx_runtime.jsx)(_components.code, {
            children: "verify-my-image"
          }), " on the same page. The pod ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "STATUS"
          }), " is ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "RUNNING"
          }), ".\n", (0,jsx_runtime.jsx)(_components.img, {
            alt: "play a Kubernetes YAML",
            src: (__webpack_require__(63231)/* ["default"] */ .A) + "",
            width: "1896",
            height: "762"
          })]
        }), "\n"]
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



/***/ }),

/***/ 17792:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/create-pod-from-kube-yaml-34aaf5bf132ad491dd86eb7fe187451b.png");

/***/ }),

/***/ 83948:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/push-image-to-kind-4ae1cc94ad082ec055038155b10e65c6.png");

/***/ }),

/***/ 92005:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/select-a-kind-cluster-6263649f7bb4937b5f1ec0ceb94f7910.png");

/***/ }),

/***/ 63231:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/verify-my-image-pod-running-accfce73c16551d6fcd8eada9f652d46.png");

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