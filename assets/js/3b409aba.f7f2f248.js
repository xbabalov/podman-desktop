"use strict";
(self["webpackChunkdocs"] = self["webpackChunkdocs"] || []).push([[38537],{

/***/ 92414:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_migrating_from_docker_customizing_docker_compatibility_md_3b4_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-migrating-from-docker-customizing-docker-compatibility-md-3b4.json
const site_docs_migrating_from_docker_customizing_docker_compatibility_md_3b4_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"migrating-from-docker/customizing-docker-compatibility","title":"Customizing Docker compatibility","description":"How to customize the Docker compatibility feature","source":"@site/docs/migrating-from-docker/customizing-docker-compatibility.md","sourceDirName":"migrating-from-docker","slug":"/migrating-from-docker/customizing-docker-compatibility","permalink":"/docs/migrating-from-docker/customizing-docker-compatibility","draft":false,"unlisted":false,"editUrl":"https://github.com/podman-desktop/podman-desktop/tree/main/website/docs/migrating-from-docker/customizing-docker-compatibility.md","tags":[{"inline":true,"label":"enable-docker-compatibility","permalink":"/docs/tags/enable-docker-compatibility"},{"inline":true,"label":"disable-docker-compatibility","permalink":"/docs/tags/disable-docker-compatibility"}],"version":"current","sidebarPosition":2,"frontMatter":{"sidebar_position":2,"title":"Customizing Docker compatibility","description":"How to customize the Docker compatibility feature","keywords":["podman desktop","podman","Docker compatibility","Kubernetes"],"tags":["enable-docker-compatibility","disable-docker-compatibility"]},"sidebar":"mySidebar","previous":{"title":"Importing saved containers","permalink":"/docs/migrating-from-docker/importing-saved-containers"},"next":{"title":"Managing Docker compatibility","permalink":"/docs/migrating-from-docker/managing-docker-compatibility"}}');
// EXTERNAL MODULE: ../node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(62540);
// EXTERNAL MODULE: ../node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(43023);
// EXTERNAL MODULE: ../node_modules/@docusaurus/theme-classic/lib/theme/Tabs/index.js + 2 modules
var Tabs = __webpack_require__(65457);
// EXTERNAL MODULE: ../node_modules/@docusaurus/theme-classic/lib/theme/TabItem/index.js + 1 modules
var TabItem = __webpack_require__(97265);
;// ./docs/migrating-from-docker/customizing-docker-compatibility.md


const frontMatter = {
	sidebar_position: 2,
	title: 'Customizing Docker compatibility',
	description: 'How to customize the Docker compatibility feature',
	keywords: [
		'podman desktop',
		'podman',
		'Docker compatibility',
		'Kubernetes'
	],
	tags: [
		'enable-docker-compatibility',
		'disable-docker-compatibility'
	]
};
const contentTitle = 'Customizing Docker compatibility';

const assets = {

};





const toc = [{
  "value": "Enable Docker compatibility",
  "id": "enable-docker-compatibility",
  "level": 2
}, {
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
}, {
  "value": "Procedure",
  "id": "procedure-1",
  "level": 4
}, {
  "value": "Verification",
  "id": "verification-1",
  "level": 4
}, {
  "value": "Procedure",
  "id": "procedure-2",
  "level": 4
}, {
  "value": "Verification",
  "id": "verification-2",
  "level": 4
}, {
  "value": "Disable Docker compatibility",
  "id": "disable-docker-compatibility",
  "level": 2
}, {
  "value": "Prerequisites",
  "id": "prerequisites-1",
  "level": 4
}, {
  "value": "Procedure",
  "id": "procedure-3",
  "level": 4
}, {
  "value": "Verification",
  "id": "verification-3",
  "level": 4
}, {
  "value": "Procedure",
  "id": "procedure-4",
  "level": 4
}, {
  "value": "Verification",
  "id": "verification-4",
  "level": 4
}, {
  "value": "Procedure",
  "id": "procedure-5",
  "level": 4
}, {
  "value": "Verification",
  "id": "verification-5",
  "level": 4
}, {
  "value": "Additional resources",
  "id": "additional-resources",
  "level": 4
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    code: "code",
    h1: "h1",
    h2: "h2",
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
        id: "customizing-docker-compatibility",
        children: "Customizing Docker compatibility"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "With Podman Desktop, you can customize the Docker compatibility feature. If you want to run your Docker applications on a Podman engine, you can enable the feature."
    }), "\n", (0,jsx_runtime.jsxs)(Tabs/* default */.A, {
      groupId: "operating-systems",
      children: [(0,jsx_runtime.jsxs)(TabItem/* default */.A, {
        value: "win",
        label: "Windows",
        className: "markdown",
        children: [(0,jsx_runtime.jsx)(_components.p, {
          children: "The binding between the Podman machine and the system socket is not known. So, Podman Desktop displays only the server information on the Docker Compatibility page."
        }), (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.img, {
            alt: "system socket details on Windows",
            src: (__webpack_require__(85283)/* ["default"] */ .A) + "",
            width: "1628",
            height: "456"
          })
        })]
      }), (0,jsx_runtime.jsxs)(TabItem/* default */.A, {
        value: "macOS",
        label: "macOS",
        className: "markdown",
        children: [(0,jsx_runtime.jsxs)(_components.p, {
          children: ["Podman Desktop uses the ", (0,jsx_runtime.jsx)(_components.code, {
            children: "podman-mac-helper"
          }), " utility to automatically link the Docker socket to the Podman machine. This utility provides a compatibility layer that allows you to:"]
        }), (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Run Docker commands on a Podman engine."
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["Make your tools, such as ", (0,jsx_runtime.jsx)(_components.a, {
              href: "https://maven.apache.org/",
              children: "Maven"
            }), " or ", (0,jsx_runtime.jsx)(_components.a, {
              href: "https://www.testcontainers.com/",
              children: "Testcontainers"
            }), " communicate with Podman without reconfiguration."]
          }), "\n"]
        }), (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Podman Desktop provides information about the Podman machine that emulates the Docker socket on the Docker Compatibility page. Click the ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "Podman details"
          }), " icon to view the details of the Podman machine."]
        }), (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.img, {
            alt: "system socket details on macOS",
            src: (__webpack_require__(66715)/* ["default"] */ .A) + "",
            width: "2320",
            height: "474"
          })
        })]
      }), (0,jsx_runtime.jsxs)(TabItem/* default */.A, {
        value: "linux",
        label: "Linux",
        className: "markdown",
        children: [(0,jsx_runtime.jsx)(_components.p, {
          children: "The binding between the Podman machine and the system socket is not known. So, Podman Desktop displays only the server information on the Docker Compatibility page."
        }), (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.img, {
            alt: "system socket details on Linux",
            src: (__webpack_require__(79650)/* ["default"] */ .A) + "",
            width: "1836",
            height: "464"
          })
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "enable-docker-compatibility",
      children: "Enable Docker compatibility"
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "prerequisites",
      children: "Prerequisites"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.a, {
          href: "/docs/podman/creating-a-podman-machine",
          children: "A running Podman machine"
        }), "."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(Tabs/* default */.A, {
      groupId: "operating-systems",
      children: [(0,jsx_runtime.jsxs)(TabItem/* default */.A, {
        value: "win",
        label: "Windows",
        className: "markdown",
        children: [(0,jsx_runtime.jsx)(_components.h4, {
          id: "procedure",
          children: "Procedure"
        }), (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["Go to ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "Settings > Preferences > Docker Compatibility"
            }), ", and click the toggle button."]
          }), "\n"]
        }), (0,jsx_runtime.jsxs)(_components.p, {
          children: ["A Docker Compatibility section is added to the list of ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "Settings"
          }), "."]
        }), (0,jsx_runtime.jsx)(_components.h4, {
          id: "verification",
          children: "Verification"
        }), (0,jsx_runtime.jsx)(_components.p, {
          children: "Perform any of the following steps:"
        }), (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "Run the following command to check the output returns the Podman version rather than the Docker version:"
            }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
              children: (0,jsx_runtime.jsx)(_components.code, {
                className: "language-shell-session",
                children: "$ docker info --format=json | jq -r .ServerVersion\n"
              })
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: ["Run the ", (0,jsx_runtime.jsx)(_components.code, {
                children: "docker context list"
              }), " command to check that the Docker CLI context is set to the default value ", (0,jsx_runtime.jsx)(_components.code, {
                children: "npipe:////./pipe/docker_engine"
              }), "."]
            }), "\n"]
          }), "\n"]
        })]
      }), (0,jsx_runtime.jsxs)(TabItem/* default */.A, {
        value: "macOS",
        label: "macOS",
        className: "markdown",
        children: [(0,jsx_runtime.jsx)(_components.h4, {
          id: "procedure-1",
          children: "Procedure"
        }), (0,jsx_runtime.jsxs)(_components.p, {
          children: ["The Docker socket compatibility mode is enabled by default. However, if you have disabled the Docker socket and want to re-enable it, you must enable the ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "Third-Party Docker Tool Compatibility"
          }), " setting."]
        }), (0,jsx_runtime.jsxs)(_components.ol, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["Go to ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "Settings > Preferences > Docker Compatibility"
            }), ", and click the toggle button.\n", (0,jsx_runtime.jsx)(_components.img, {
              alt: "enable toggle button - Preferences",
              src: (__webpack_require__(37614)/* ["default"] */ .A) + "",
              width: "1536",
              height: "502"
            }), "\nA Docker Compatibility section is added to the list of ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "Settings"
            }), "."]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["Click ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "Docker Compatibility"
            }), " in the Settings. The Docker Compatibility page opens."]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["Click ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "Enable"
            }), " in the ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "Third-Party Docker Tool Compatibility"
            }), " setting."]
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Enter your machine password when prompted. A successful operation notification opens."
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["Click ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "OK"
            }), ". A notification prompts you to restart your Podman machine.\n", (0,jsx_runtime.jsx)(_components.img, {
              alt: "enable docker compatibility",
              src: (__webpack_require__(82240)/* ["default"] */ .A) + "",
              width: "1198",
              height: "412"
            })]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["Click ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "Yes"
            }), ".\n", (0,jsx_runtime.jsx)(_components.img, {
              alt: "restart Podman machine",
              src: (__webpack_require__(44216)/* ["default"] */ .A) + "",
              width: "600",
              height: "215"
            })]
          }), "\n"]
        }), (0,jsx_runtime.jsx)(_components.h4, {
          id: "verification-1",
          children: "Verification"
        }), (0,jsx_runtime.jsx)(_components.p, {
          children: "Perform any of the following steps:"
        }), (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "Check whether the Docker socket is a symbolic link for the Podman socket:"
            }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
              children: (0,jsx_runtime.jsx)(_components.code, {
                className: "language-shell-session",
                children: "$ ls -la /var/run/docker.sock\n"
              })
            }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: ["The output points to a ", (0,jsx_runtime.jsx)(_components.code, {
                children: "podman.sock"
              }), " file, as shown below:"]
            }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
              children: (0,jsx_runtime.jsx)(_components.code, {
                className: "language-shell-session",
                children: "/var/run/docker.sock -> /Users/username/.local/share/containers/podman/machine/podman.sock\n"
              })
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "Run the following command to check the output returns the Podman version rather than the Docker version:"
            }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
              children: (0,jsx_runtime.jsx)(_components.code, {
                className: "language-shell-session",
                children: "$ curl -s --unix-socket /var/run/docker.sock \"http://v1.41/info\"  | jq -r .ServerVersion\n"
              })
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: ["Run the ", (0,jsx_runtime.jsx)(_components.code, {
                children: "docker context list"
              }), " command to check that the Docker CLI context is set to ", (0,jsx_runtime.jsx)(_components.code, {
                children: "unix:///var/run/docker.sock"
              }), "."]
            }), "\n"]
          }), "\n"]
        })]
      }), (0,jsx_runtime.jsxs)(TabItem/* default */.A, {
        value: "linux",
        label: "Linux",
        className: "markdown",
        children: [(0,jsx_runtime.jsx)(_components.h4, {
          id: "procedure-2",
          children: "Procedure"
        }), (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["Go to ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "Settings > Preferences > Docker Compatibility"
            }), ", and click the toggle button."]
          }), "\n"]
        }), (0,jsx_runtime.jsxs)(_components.p, {
          children: ["A Docker Compatibility section is added to the list of ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "Settings"
          }), "."]
        }), (0,jsx_runtime.jsx)(_components.h4, {
          id: "verification-2",
          children: "Verification"
        }), (0,jsx_runtime.jsx)(_components.p, {
          children: "Perform any of the following steps:"
        }), (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "Run the following command to check the output returns the Podman version rather than the Docker version:"
            }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
              children: (0,jsx_runtime.jsx)(_components.code, {
                className: "language-shell-session",
                children: "$ docker info --format=json | jq -r .ServerVersion\n"
              })
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: ["Run the ", (0,jsx_runtime.jsx)(_components.code, {
                children: "docker context list"
              }), " command to check that the Docker CLI context is set to the default value ", (0,jsx_runtime.jsx)(_components.code, {
                children: "unix:///var/run/docker.sock"
              }), "."]
            }), "\n"]
          }), "\n"]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "disable-docker-compatibility",
      children: "Disable Docker compatibility"
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "prerequisites-1",
      children: "Prerequisites"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.a, {
          href: "/docs/podman/creating-a-podman-machine",
          children: "A running Podman machine"
        }), "."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(Tabs/* default */.A, {
      groupId: "operating-systems",
      children: [(0,jsx_runtime.jsxs)(TabItem/* default */.A, {
        value: "win",
        label: "Windows",
        className: "markdown",
        children: [(0,jsx_runtime.jsx)(_components.h4, {
          id: "procedure-3",
          children: "Procedure"
        }), (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: ["Go to ", (0,jsx_runtime.jsx)(_components.strong, {
                children: "Settings > Preferences > Docker Compatibility"
              }), ", and click the toggle button."]
            }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: ["The Docker Compatibility section is removed from the list of ", (0,jsx_runtime.jsx)(_components.strong, {
                children: "Settings"
              }), "."]
            }), "\n"]
          }), "\n"]
        }), (0,jsx_runtime.jsx)(_components.h4, {
          id: "verification-3",
          children: "Verification"
        }), (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "Run the following command to check the output returns the Docker version rather than the Podman version:"
            }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
              children: (0,jsx_runtime.jsx)(_components.code, {
                className: "language-shell-session",
                children: "$ docker info --format=json | jq -r .ServerVersion\n"
              })
            }), "\n"]
          }), "\n"]
        })]
      }), (0,jsx_runtime.jsxs)(TabItem/* default */.A, {
        value: "macOS",
        label: "macOS",
        className: "markdown",
        children: [(0,jsx_runtime.jsx)(_components.h4, {
          id: "procedure-4",
          children: "Procedure"
        }), (0,jsx_runtime.jsxs)(_components.ol, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["Click ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "Docker Compatibility"
            }), " in the Settings. The Docker Compatibility page opens."]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["Click ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "Disable"
            }), " in the ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "Third-Party Docker Tool Compatibility"
            }), " setting."]
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Enter your machine password when prompted. A successful operation notification opens."
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["Click ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "OK"
            }), ". A notification prompts you to restart your Podman machine."]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["Click ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "Yes"
            }), "."]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["Go to ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "Settings > Preferences > Docker Compatibility"
            }), ", and click the toggle button.\nThe Docker Compatibility section is removed from the ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "Settings"
            }), " list."]
          }), "\n"]
        }), (0,jsx_runtime.jsx)(_components.h4, {
          id: "verification-4",
          children: "Verification"
        }), (0,jsx_runtime.jsx)(_components.p, {
          children: "Perform any of the following steps:"
        }), (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "Check that the Docker socket is not a symbolic link for the Podman socket:"
            }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
              children: (0,jsx_runtime.jsx)(_components.code, {
                className: "language-shell-session",
                children: "$ ls -la /var/run/docker.sock\n"
              })
            }), "\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "The output returns the following:"
            }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
              children: (0,jsx_runtime.jsx)(_components.code, {
                className: "language-shell-session",
                children: "ls: /var/run/docker.sock: No such file or directory\n"
              })
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "Run the following command to check the output returns the Docker version rather than the Podman version:"
            }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
              children: (0,jsx_runtime.jsx)(_components.code, {
                className: "language-shell-session",
                children: "$ curl -s --unix-socket /var/run/docker.sock \"http://v1.41/info\"  | jq -r .ServerVersion\n"
              })
            }), "\n"]
          }), "\n"]
        })]
      }), (0,jsx_runtime.jsxs)(TabItem/* default */.A, {
        value: "linux",
        label: "Linux",
        className: "markdown",
        children: [(0,jsx_runtime.jsx)(_components.h4, {
          id: "procedure-5",
          children: "Procedure"
        }), (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: ["Go to ", (0,jsx_runtime.jsx)(_components.strong, {
                children: "Settings > Preferences > Docker Compatibility"
              }), ", and click the toggle button."]
            }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: ["The Docker Compatibility section is removed from the list of ", (0,jsx_runtime.jsx)(_components.strong, {
                children: "Settings"
              }), "."]
            }), "\n"]
          }), "\n"]
        }), (0,jsx_runtime.jsx)(_components.h4, {
          id: "verification-5",
          children: "Verification"
        }), (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "Run the following command to check the output returns the Docker version rather than the Podman version:"
            }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
              children: (0,jsx_runtime.jsx)(_components.code, {
                className: "language-shell-session",
                children: "$ docker info --format=json | jq -r .ServerVersion\n"
              })
            }), "\n"]
          }), "\n"]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "additional-resources",
      children: "Additional resources"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "/docs/migrating-from-docker/managing-docker-compatibility",
          children: "Managing Docker compatibility"
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsxs)(_components.a, {
          href: "https://github.com/containers/podman/tree/main/cmd/podman-mac-helper",
          children: [(0,jsx_runtime.jsx)(_components.code, {
            children: "podman-mac-helper"
          }), " source"]
        })
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

/***/ 97265:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  A: () => (/* binding */ TabItem)
});

// EXTERNAL MODULE: ../node_modules/react/index.js
var react = __webpack_require__(63696);
// EXTERNAL MODULE: ../node_modules/clsx/dist/clsx.mjs
var clsx = __webpack_require__(11750);
;// ../node_modules/@docusaurus/theme-classic/lib/theme/TabItem/styles.module.css
// extracted by mini-css-extract-plugin
/* harmony default export */ const styles_module = ({"tabItem":"tabItem_wHwb"});
// EXTERNAL MODULE: ../node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(62540);
;// ../node_modules/@docusaurus/theme-classic/lib/theme/TabItem/index.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */function TabItem(_ref){let{children,hidden,className}=_ref;return/*#__PURE__*/(0,jsx_runtime.jsx)("div",{role:"tabpanel",className:(0,clsx/* default */.A)(styles_module.tabItem,className),hidden,children:children});}

/***/ }),

/***/ 65457:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  A: () => (/* binding */ Tabs)
});

// EXTERNAL MODULE: ../node_modules/react/index.js
var react = __webpack_require__(63696);
// EXTERNAL MODULE: ../node_modules/clsx/dist/clsx.mjs
var clsx = __webpack_require__(11750);
// EXTERNAL MODULE: ../node_modules/@docusaurus/theme-common/lib/utils/scrollUtils.js
var scrollUtils = __webpack_require__(93707);
// EXTERNAL MODULE: ../node_modules/react-router/esm/react-router.js
var react_router = __webpack_require__(49519);
// EXTERNAL MODULE: ../node_modules/@docusaurus/core/lib/client/exports/useIsomorphicLayoutEffect.js
var useIsomorphicLayoutEffect = __webpack_require__(83604);
// EXTERNAL MODULE: ../node_modules/@docusaurus/theme-common/lib/utils/historyUtils.js
var historyUtils = __webpack_require__(95196);
// EXTERNAL MODULE: ../node_modules/@docusaurus/theme-common/lib/utils/jsUtils.js
var jsUtils = __webpack_require__(76229);
// EXTERNAL MODULE: ../node_modules/@docusaurus/theme-common/lib/utils/storageUtils.js + 1 modules
var storageUtils = __webpack_require__(88030);
;// ../node_modules/@docusaurus/theme-common/lib/utils/tabsUtils.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */// A very rough duck type, but good enough to guard against mistakes while
// allowing customization
function isTabItem(comp){const{props}=comp;return!!props&&typeof props==='object'&&'value'in props;}function sanitizeTabsChildren(children){return react.Children.toArray(children).filter(child=>child!=='\n').map(child=>{if(!child||/*#__PURE__*/(0,react.isValidElement)(child)&&isTabItem(child)){return child;}// child.type.name will give non-sensical values in prod because of
// minification, but we assume it won't throw in prod.
throw new Error(`Docusaurus error: Bad <Tabs> child <${// @ts-expect-error: guarding against unexpected cases
typeof child.type==='string'?child.type:child.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`);})?.filter(Boolean)??[];}function extractChildrenTabValues(children){return sanitizeTabsChildren(children).map(_ref=>{let{props:{value,label,attributes,default:isDefault}}=_ref;return{value,label,attributes,default:isDefault};});}function ensureNoDuplicateValue(values){const dup=(0,jsUtils/* duplicates */.XI)(values,(a,b)=>a.value===b.value);if(dup.length>0){throw new Error(`Docusaurus error: Duplicate values "${dup.map(a=>a.value).join(', ')}" found in <Tabs>. Every value needs to be unique.`);}}function useTabValues(props){const{values:valuesProp,children}=props;return (0,react.useMemo)(()=>{const values=valuesProp??extractChildrenTabValues(children);ensureNoDuplicateValue(values);return values;},[valuesProp,children]);}function isValidValue(_ref2){let{value,tabValues}=_ref2;return tabValues.some(a=>a.value===value);}function getInitialStateValue(_ref3){let{defaultValue,tabValues}=_ref3;if(tabValues.length===0){throw new Error('Docusaurus error: the <Tabs> component requires at least one <TabItem> children component');}if(defaultValue){// Warn user about passing incorrect defaultValue as prop.
if(!isValidValue({value:defaultValue,tabValues})){throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${defaultValue}" but none of its children has the corresponding value. Available values are: ${tabValues.map(a=>a.value).join(', ')}. If you intend to show no default tab, use defaultValue={null} instead.`);}return defaultValue;}const defaultTabValue=tabValues.find(tabValue=>tabValue.default)??tabValues[0];if(!defaultTabValue){throw new Error('Unexpected error: 0 tabValues');}return defaultTabValue.value;}function getStorageKey(groupId){if(!groupId){return null;}return`docusaurus.tab.${groupId}`;}function getQueryStringKey(_ref4){let{queryString=false,groupId}=_ref4;if(typeof queryString==='string'){return queryString;}if(queryString===false){return null;}if(queryString===true&&!groupId){throw new Error(`Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".`);}return groupId??null;}function useTabQueryString(_ref5){let{queryString=false,groupId}=_ref5;const history=(0,react_router/* useHistory */.W6)();const key=getQueryStringKey({queryString,groupId});const value=(0,historyUtils/* useQueryStringValue */.aZ)(key);const setValue=(0,react.useCallback)(newValue=>{if(!key){return;// no-op
}const searchParams=new URLSearchParams(history.location.search);searchParams.set(key,newValue);history.replace({...history.location,search:searchParams.toString()});},[key,history]);return[value,setValue];}function useTabStorage(_ref6){let{groupId}=_ref6;const key=getStorageKey(groupId);const[value,storageSlot]=(0,storageUtils/* useStorageSlot */.Dv)(key);const setValue=(0,react.useCallback)(newValue=>{if(!key){return;// no-op
}storageSlot.set(newValue);},[key,storageSlot]);return[value,setValue];}function useTabs(props){const{defaultValue,queryString=false,groupId}=props;const tabValues=useTabValues(props);const[selectedValue,setSelectedValue]=(0,react.useState)(()=>getInitialStateValue({defaultValue,tabValues}));const[queryStringValue,setQueryString]=useTabQueryString({queryString,groupId});const[storageValue,setStorageValue]=useTabStorage({groupId});// We sync valid querystring/storage value to state on change + hydration
const valueToSync=(()=>{const value=queryStringValue??storageValue;if(!isValidValue({value,tabValues})){return null;}return value;})();// Sync in a layout/sync effect is important, for useScrollPositionBlocker
// See https://github.com/facebook/docusaurus/issues/8625
(0,useIsomorphicLayoutEffect/* default */.A)(()=>{if(valueToSync){setSelectedValue(valueToSync);}},[valueToSync]);const selectValue=(0,react.useCallback)(newValue=>{if(!isValidValue({value:newValue,tabValues})){throw new Error(`Can't select invalid tab value=${newValue}`);}setSelectedValue(newValue);setQueryString(newValue);setStorageValue(newValue);},[setQueryString,setStorageValue,tabValues]);return{selectedValue,selectValue,tabValues};}
// EXTERNAL MODULE: ../node_modules/@docusaurus/core/lib/client/exports/useIsBrowser.js
var useIsBrowser = __webpack_require__(95200);
;// ../node_modules/@docusaurus/theme-classic/lib/theme/Tabs/styles.module.css
// extracted by mini-css-extract-plugin
/* harmony default export */ const styles_module = ({"tabList":"tabList_J5MA","tabItem":"tabItem_l0OV"});
// EXTERNAL MODULE: ../node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(62540);
;// ../node_modules/@docusaurus/theme-classic/lib/theme/Tabs/index.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */function TabList(_ref){let{className,block,selectedValue,selectValue,tabValues}=_ref;const tabRefs=[];const{blockElementScrollPositionUntilNextRender}=(0,scrollUtils/* useScrollPositionBlocker */.a_)();const handleTabChange=event=>{const newTab=event.currentTarget;const newTabIndex=tabRefs.indexOf(newTab);const newTabValue=tabValues[newTabIndex].value;if(newTabValue!==selectedValue){blockElementScrollPositionUntilNextRender(newTab);selectValue(newTabValue);}};const handleKeydown=event=>{let focusElement=null;switch(event.key){case'Enter':{handleTabChange(event);break;}case'ArrowRight':{const nextTab=tabRefs.indexOf(event.currentTarget)+1;focusElement=tabRefs[nextTab]??tabRefs[0];break;}case'ArrowLeft':{const prevTab=tabRefs.indexOf(event.currentTarget)-1;focusElement=tabRefs[prevTab]??tabRefs[tabRefs.length-1];break;}default:break;}focusElement?.focus();};return/*#__PURE__*/(0,jsx_runtime.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,clsx/* default */.A)('tabs',{'tabs--block':block},className),children:tabValues.map(_ref2=>{let{value,label,attributes}=_ref2;return/*#__PURE__*/(0,jsx_runtime.jsx)("li",{// TODO extract TabListItem
role:"tab",tabIndex:selectedValue===value?0:-1,"aria-selected":selectedValue===value,ref:tabControl=>{tabRefs.push(tabControl);},onKeyDown:handleKeydown,onClick:handleTabChange,...attributes,className:(0,clsx/* default */.A)('tabs__item',styles_module.tabItem,attributes?.className,{'tabs__item--active':selectedValue===value}),children:label??value},value);})});}function TabContent(_ref3){let{lazy,children,selectedValue}=_ref3;const childTabs=(Array.isArray(children)?children:[children]).filter(Boolean);if(lazy){const selectedTabItem=childTabs.find(tabItem=>tabItem.props.value===selectedValue);if(!selectedTabItem){// fail-safe or fail-fast? not sure what's best here
return null;}return/*#__PURE__*/(0,react.cloneElement)(selectedTabItem,{className:(0,clsx/* default */.A)('margin-top--md',selectedTabItem.props.className)});}return/*#__PURE__*/(0,jsx_runtime.jsx)("div",{className:"margin-top--md",children:childTabs.map((tabItem,i)=>/*#__PURE__*/(0,react.cloneElement)(tabItem,{key:i,hidden:tabItem.props.value!==selectedValue}))});}function TabsComponent(props){const tabs=useTabs(props);return/*#__PURE__*/(0,jsx_runtime.jsxs)("div",{className:(0,clsx/* default */.A)('tabs-container',styles_module.tabList),children:[/*#__PURE__*/(0,jsx_runtime.jsx)(TabList,{...tabs,...props}),/*#__PURE__*/(0,jsx_runtime.jsx)(TabContent,{...tabs,...props})]});}function Tabs(props){const isBrowser=(0,useIsBrowser/* default */.A)();return/*#__PURE__*/(0,jsx_runtime.jsx)(TabsComponent// Remount tabs after hydration
// Temporary fix for https://github.com/facebook/docusaurus/issues/5653
,{...props,children:sanitizeTabsChildren(props.children)},String(isBrowser));}

/***/ }),

/***/ 82240:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/enable-docker-compatibility-90c5fed023988f8df4841c892d770e88.png");

/***/ }),

/***/ 37614:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/enable-using-preferences-c57d5a1c09f3a7771ede4ef1789ab2a2.png");

/***/ }),

/***/ 44216:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/restart-podman-machine-bb352da892a0ff8c4e7cf636aed3c074.png");

/***/ }),

/***/ 79650:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/system-socket-details-linux-1d4669fcc0d1f890a27273136854895f.png");

/***/ }),

/***/ 66715:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/system-socket-details-macOS-98b324fcf335fa467641ca5828bc1db1.png");

/***/ }),

/***/ 85283:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/system-socket-details-windows-5269c2b9c8ea3c785a12aa21e1e80b76.png");

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