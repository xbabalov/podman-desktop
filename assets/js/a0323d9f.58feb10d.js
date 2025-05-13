"use strict";
(self["webpackChunkdocs"] = self["webpackChunkdocs"] || []).push([[34415],{

/***/ 82252:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_minikube_pushing_an_image_to_minikube_md_a03_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-minikube-pushing-an-image-to-minikube-md-a03.json
const site_docs_minikube_pushing_an_image_to_minikube_md_a03_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"minikube/pushing-an-image-to-minikube","title":"Pushing an image","description":"Pushing an image to your Minikube cluster","source":"@site/docs/minikube/pushing-an-image-to-minikube.md","sourceDirName":"minikube","slug":"/minikube/pushing-an-image-to-minikube","permalink":"/docs/minikube/pushing-an-image-to-minikube","draft":false,"unlisted":false,"editUrl":"https://github.com/podman-desktop/podman-desktop/tree/main/website/docs/minikube/pushing-an-image-to-minikube.md","tags":[{"inline":true,"label":"pushing-an-image","permalink":"/docs/tags/pushing-an-image"},{"inline":true,"label":"minikube","permalink":"/docs/tags/minikube"}],"version":"current","sidebarPosition":10,"frontMatter":{"sidebar_position":10,"title":"Pushing an image","description":"Pushing an image to your Minikube cluster","keywords":["podman desktop","podman","containers","images","pushing an image","kubernetes"],"tags":["pushing-an-image","minikube"]},"sidebar":"mySidebar","previous":{"title":"Building and testing an image","permalink":"/docs/minikube/building-an-image-and-testing-it-in-minikube"},"next":{"title":"Lima","permalink":"/docs/lima/"}}');
// EXTERNAL MODULE: ../node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(62540);
// EXTERNAL MODULE: ../node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(43023);
;// ./docs/minikube/pushing-an-image-to-minikube.md


const frontMatter = {
	sidebar_position: 10,
	title: 'Pushing an image',
	description: 'Pushing an image to your Minikube cluster',
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
		'minikube'
	]
};
const contentTitle = 'Pushing an image to your local Minikube-powered Kubernetes cluster';

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
        id: "pushing-an-image-to-your-local-minikube-powered-kubernetes-cluster",
        children: "Pushing an image to your local Minikube-powered Kubernetes cluster"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "With Podman Desktop, you can push an image to your local Minikube-powered Kubernetes cluster."
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
          href: "/docs/minikube",
          children: "You onboarded a Minikube cluster"
        }), "."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.a, {
          href: "/docs/minikube/working-with-your-local-minikube-cluster",
          children: "You have set your Kubernetes context to your Minikube cluster"
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
        children: ["Go to ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Images"
        }), " from the left navigation pane."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Click the ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "overflow menu"
        }), " icon corresponding to the image you want to push and select ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Push image to minikube cluster"
        }), ". A successful operation notification opens.\n", (0,jsx_runtime.jsx)(_components.img, {
          alt: "pushing an image to Minikube",
          src: (__webpack_require__(45068)/* ["default"] */ .A) + "",
          width: "2054",
          height: "1340"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Click ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "OK"
        }), "."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "verification",
      children: "Verification"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Minikube enables you to list loaded images:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-command",
        children: "$ minikube image list\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "You can also create a pod that uses the loaded image:"
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
            src: (__webpack_require__(69368)/* ["default"] */ .A) + "",
            width: "1754",
            height: "1284"
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
            src: (__webpack_require__(9751)/* ["default"] */ .A) + "",
            width: "1774",
            height: "620"
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

/***/ 69368:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/create-pod-from-kube-yaml-c7eaccf9fd4d6e979d51834259a3c702.png");

/***/ }),

/***/ 45068:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/push-image-to-minikube-2cc403f09b12931b000613b299a73b87.png");

/***/ }),

/***/ 9751:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/verify-my-image-pod-running-0a6b4c2b574d58ff433fab951c0847a0.png");

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