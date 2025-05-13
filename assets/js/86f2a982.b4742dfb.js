"use strict";
(self["webpackChunkdocs"] = self["webpackChunkdocs"] || []).push([[4769],{

/***/ 67002:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_troubleshooting_troubleshooting_podman_md_86f_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-troubleshooting-troubleshooting-podman-md-86f.json
const site_docs_troubleshooting_troubleshooting_podman_md_86f_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"troubleshooting/troubleshooting-podman","title":"Podman","description":"How to investigate when Podman does not work as expected.","source":"@site/docs/troubleshooting/troubleshooting-podman.md","sourceDirName":"troubleshooting","slug":"/troubleshooting/troubleshooting-podman","permalink":"/docs/troubleshooting/troubleshooting-podman","draft":false,"unlisted":false,"editUrl":"https://github.com/podman-desktop/podman-desktop/tree/main/website/docs/troubleshooting/troubleshooting-podman.md","tags":[],"version":"current","sidebarPosition":10,"frontMatter":{"sidebar_position":10,"title":"Podman","description":"How to investigate when Podman does not work as expected."},"sidebar":"mySidebar","previous":{"title":"Access logs","permalink":"/docs/troubleshooting/access-logs"},"next":{"title":"Podman on Windows","permalink":"/docs/troubleshooting/troubleshooting-podman-on-windows"}}');
// EXTERNAL MODULE: ../node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(62540);
// EXTERNAL MODULE: ../node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(43023);
// EXTERNAL MODULE: ../node_modules/@docusaurus/theme-classic/lib/theme/Tabs/index.js + 2 modules
var Tabs = __webpack_require__(65457);
// EXTERNAL MODULE: ../node_modules/@docusaurus/theme-classic/lib/theme/TabItem/index.js + 1 modules
var TabItem = __webpack_require__(97265);
;// ./docs/troubleshooting/troubleshooting-podman.md


const frontMatter = {
	sidebar_position: 10,
	title: 'Podman',
	description: 'How to investigate when Podman does not work as expected.'
};
const contentTitle = 'Troubleshooting Podman';

const assets = {

};





const toc = [{
  "value": "Podman Desktop does not find your Podman installation",
  "id": "podman-desktop-does-not-find-your-podman-installation",
  "level": 2
}, {
  "value": "Issue",
  "id": "issue",
  "level": 4
}, {
  "value": "Solution",
  "id": "solution",
  "level": 4
}, {
  "value": "Podman Desktop fails to create a Podman machine",
  "id": "podman-desktop-fails-to-create-a-podman-machine",
  "level": 2
}, {
  "value": "Issue",
  "id": "issue-1",
  "level": 4
}, {
  "value": "Workaround",
  "id": "workaround",
  "level": 4
}, {
  "value": "Podman Desktop fails starting a Podman machine",
  "id": "podman-desktop-fails-starting-a-podman-machine",
  "level": 2
}, {
  "value": "Issue",
  "id": "issue-2",
  "level": 4
}, {
  "value": "Workaround",
  "id": "workaround-1",
  "level": 4
}, {
  "value": "Podman Desktop fails to list images or containers",
  "id": "podman-desktop-fails-to-list-images-or-containers",
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
  "value": "Podman Desktop fails listing containers",
  "id": "podman-desktop-fails-listing-containers",
  "level": 2
}, {
  "value": "Issue",
  "id": "issue-3",
  "level": 4
}, {
  "value": "Solution",
  "id": "solution-1",
  "level": 4
}, {
  "value": "Podman Desktop is failing to display the images or containers from a rootful Podman machine",
  "id": "podman-desktop-is-failing-to-display-the-images-or-containers-from-a-rootful-podman-machine",
  "level": 2
}, {
  "value": "Workaround",
  "id": "workaround-2",
  "level": 4
}, {
  "value": "Verification",
  "id": "verification",
  "level": 4
}, {
  "value": "Warning about Docker compatibility mode",
  "id": "warning-about-docker-compatibility-mode",
  "level": 2
}, {
  "value": "Issue",
  "id": "issue-4",
  "level": 4
}, {
  "value": "Solution",
  "id": "solution-2",
  "level": 4
}, {
  "value": "Uninstalling Podman Desktop preserves the old configuration data",
  "id": "uninstalling-podman-desktop-preserves-the-old-configuration-data",
  "level": 2
}, {
  "value": "Issue",
  "id": "issue-5",
  "level": 4
}, {
  "value": "Solution",
  "id": "solution-3",
  "level": 4
}, {
  "value": "Kubernetes clusters are not reachable from Podman Desktop",
  "id": "kubernetes-clusters-are-not-reachable-from-podman-desktop",
  "level": 2
}, {
  "value": "Issue",
  "id": "issue-6",
  "level": 4
}, {
  "value": "Solution",
  "id": "solution-4",
  "level": 4
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    code: "code",
    em: "em",
    h1: "h1",
    h2: "h2",
    h4: "h4",
    header: "header",
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
        id: "troubleshooting-podman",
        children: "Troubleshooting Podman"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "podman-desktop-does-not-find-your-podman-installation",
      children: "Podman Desktop does not find your Podman installation"
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "issue",
      children: "Issue"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "To install Podman, you can choose between multiple installation methods:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Install from Podman Desktop."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Podman installer."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Operating system specific installer: Brew, Chocolatey, Scoop, Winget."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Installer for restricted environment."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Podman Desktop might fail to detect your Podman installation."
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "solution",
      children: "Solution"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Try following steps to verify your Podman installation.\nAfter each step, quit and restart Podman Desktop to ensure that it can detect your Podman installation."
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "In a terminal, verify you can access the Podman CLI, and verify the version."
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            className: "language-shell-session",
            children: "$ podman version\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Update Podman to the latest stable version by using your installation method."
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Search for errors in the installation logs (if your installation method is providing logs)."
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Reinstall Podman with the same installation method."
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Reinstall Podman with the Podman Desktop installer."
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Reinstall Podman with the Podman installer."
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Reinstall Podman with another method."
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "podman-desktop-fails-to-create-a-podman-machine",
      children: "Podman Desktop fails to create a Podman machine"
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "issue-1",
      children: "Issue"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Podman Desktop might fail creating a Podman machine."
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "workaround",
      children: "Workaround"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "In a terminal, create the Podman machine with the Podman CLI:"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            className: "language-shell-session",
            children: "$ podman machine init\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "If the creation fails, read the logs carefully to continue troubleshooting."
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "podman-desktop-fails-starting-a-podman-machine",
      children: "Podman Desktop fails starting a Podman machine"
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "issue-2",
      children: "Issue"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Podman Desktop might fail starting a Podman machine. On the ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Settings > Resources"
      }), " page, the machine does not switch to the running phase for quite some time."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "workaround-1",
      children: "Workaround"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "In a terminal, start the Podman machine with the Podman CLI:"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            className: "language-shell-session",
            children: "$ podman machine start\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "If the start fails, read the logs carefully to continue troubleshooting."
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Alternatively, you can run the ", (0,jsx_runtime.jsx)(_components.code, {
        children: "podman machine reset"
      }), " command, and ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/docs/podman/creating-a-podman-machine",
        children: "create a new machine"
      }), " using the Podman Desktop UI."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "podman-desktop-fails-to-list-images-or-containers",
      children: "Podman Desktop fails to list images or containers"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Podman Desktop might fail listing images or container."
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "prerequisites",
      children: "Prerequisites"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Podman 4.1.0 or later is needed. Podman Desktop requires the Podman machine to expose the socket on the host for macOS, and on a named pipe for Windows"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "procedure",
      children: "Procedure"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "On Windows and macOS: In a terminal, verify that at least one Podman machine is running:"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            className: "language-shell-session",
            children: "$ podman machine list\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["To verify that you can connect using the CLI, open a terminal and run the ", (0,jsx_runtime.jsx)(_components.code, {
            children: "hello"
          }), " container:"]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            className: "language-shell-session",
            children: "$ podman run quay.io/podman/hello\n"
          })
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "podman-desktop-fails-listing-containers",
      children: "Podman Desktop fails listing containers"
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "issue-3",
      children: "Issue"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Podman Desktop might display \"No containers\" on the Containers page, even if active containers are running in the background."
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "solution-1",
      children: "Solution"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Stop and restart Podman Desktop."
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "In Podman Desktop, restart the Podman machine."
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "In a terminal, restart the Podman machine:"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            className: "language-shell-session",
            children: "$ podman machine stop\n$ podman machine start\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "If the previous step did not work for you, delete your Podman machine, and create a new one:"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            className: "language-shell-session",
            children: "$ podman machine rm\n$ podman machine init\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "If the previous steps did not work for you, delete your Podman configuration files, and create a new Podman machine:"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            className: "language-shell-session",
            children: "$ rm -rf ~/.local/share/containers/podman\n$ rm -rf ~/.config/containers/\n$ podman machine init\n"
          })
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "podman-desktop-is-failing-to-display-the-images-or-containers-from-a-rootful-podman-machine",
      children: "Podman Desktop is failing to display the images or containers from a rootful Podman machine"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The rootful configuration for a Podman machine depends on the Podman machine default connection.\nThe default connection can be modified by external events, or when creating a new Podman machine.\nPodman Desktop might then reconnect in rootless mode, and fail to display the images or containers."
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "workaround-2",
      children: "Workaround"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Verify that the Podman default connection is the rootful connection to your Podman machine:"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            className: "language-shell-session",
            children: "$ podman system connection ls\n"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["The default connection has ", (0,jsx_runtime.jsx)(_components.code, {
            children: "true"
          }), " at the end of the line."]
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["The rootful connection has a ", (0,jsx_runtime.jsx)(_components.code, {
            children: "-root"
          }), " name suffix, and a ", (0,jsx_runtime.jsx)(_components.code, {
            children: "ssh://root@"
          }), " URI prefix."]
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Example default rootful connection:"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            className: "language-shell-session",
            children: "Name                        URI                                                         Identity                                      Default\npodman-machine-default      ssh://user@127.0.0.1:54826/run/user/1000/podman/podman.sock c:\\Users\\username\\.ssh\\podman-machine-default false\npodman-machine-default-root ssh://root@127.0.0.1:54826/run/podman/podman.sock           c:\\Users\\username\\.ssh\\podman-machine-default true\n"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Example default rootless connection:"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            className: "language-shell-session",
            children: "Name                        URI                                                         Identity                                      Default\npodman-machine-default      ssh://user@127.0.0.1:54826/run/user/1000/podman/podman.sock c:\\Users\\username\\.ssh\\podman-machine-default true\npodman-machine-default-root ssh://root@127.0.0.1:54826/run/podman/podman.sock           c:\\Users\\username\\.ssh\\podman-machine-default false\n"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Continue with the next steps only if the default connection is not the rootful connection to your Podman machine."
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Set the Podman machine in rootful mode:"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            className: "language-shell-session",
            children: "$ podman machine set --rootful\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Restart the Podman machine:"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            className: "language-shell-session",
            children: "$ podman machine stop\n$ podman machine start\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Verify that Podman default connection points to the rootful connection:"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            className: "language-shell-session",
            children: "$ podman system connection ls\n"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Continue with the next steps only if the default connection is not the rootful connection to your Podman machine."
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Set the Podman machine, such as ", (0,jsx_runtime.jsx)(_components.code, {
            children: "podman-machine-default"
          }), " in rootful mode:"]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            className: "language-shell-session",
            children: "$ podman system connection default podman-machine-default-root\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Restart the Podman machine:"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            className: "language-shell-session",
            children: "$ podman machine stop\n$ podman machine start\n"
          })
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "verification",
      children: "Verification"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "The Podman default connection is the rootful connection to your Podman machine:"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            className: "language-shell-session",
            children: "$ podman system connection ls\n"
          })
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "warning-about-docker-compatibility-mode",
      children: "Warning about Docker compatibility mode"
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "issue-4",
      children: "Issue"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "When running the Podman provider, a warning shows regarding Docker compatibility mode on the dashboard:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-<!--",
        metastring: "markdownlint-disable MD040 -->",
        children: "⚠️ Docker Socket Compatibility: Podman is not emulating the default Docker socket path: '/var/run/docker.sock'. Docker-specific tools may not work. See troubleshooting page on podman-desktop.io for more information.\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "This might appear when either:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The Docker socket is not mounted correctly."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Docker Desktop is also being ran at the same time."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "solution-2",
      children: "Solution"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Stop Docker Desktop (if installed)."
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["On macOS, Run the ", (0,jsx_runtime.jsx)(_components.code, {
            children: "podman-mac-helper"
          }), " binary:"]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            className: "language-shell-session",
            children: "$ sudo podman-mac-helper install\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Restart the Podman machine to recreate and activate the default Docker socket path."
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.em, {
        children: "Note:"
      }), " If Docker Desktop is started again, it will automatically re-alias the default Docker socket location and the Podman compatibility warning will re-appear."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "uninstalling-podman-desktop-preserves-the-old-configuration-data",
      children: "Uninstalling Podman Desktop preserves the old configuration data"
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "issue-5",
      children: "Issue"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "After uninstalling Podman Desktop, the configuration data persists even though it is not needed for a fresh installation."
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "solution-3",
      children: "Solution"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.em, {
          children: "Deleting Podman Desktop configuration"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Go to the ", (0,jsx_runtime.jsx)(_components.code, {
          children: "$HOME/.local/share/containers"
        }), " directory, where ", (0,jsx_runtime.jsx)(_components.code, {
          children: "$HOME"
        }), " denotes the home folder of the current user."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Delete the ", (0,jsx_runtime.jsx)(_components.code, {
          children: "podman-desktop"
        }), " folder."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.em, {
          children: "Deleting Podman configuration"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Podman stores its configuration files in the ", (0,jsx_runtime.jsx)(_components.code, {
        children: "$HOME/.config/containers"
      }), " directory. Options available to delete Podman configuration:"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Using CLI", "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["Run the ", (0,jsx_runtime.jsx)(_components.code, {
              children: "podman machine reset"
            }), " command."]
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Using UI", "\n", (0,jsx_runtime.jsxs)(_components.ol, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["Click the ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "Troubleshooting"
            }), " icon in the status bar."]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["Click the ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "Cleanup/Purge data"
            }), " button to delete all resources from the engine."]
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "kubernetes-clusters-are-not-reachable-from-podman-desktop",
      children: "Kubernetes clusters are not reachable from Podman Desktop"
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "issue-6",
      children: "Issue"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["When you connect to a Kubernetes cluster, such as Amazon Web Services (AWS) or Oracle Cloud Infrastructure (OCI), you might get this error: ", (0,jsx_runtime.jsx)(_components.code, {
        children: "spawnSync <cloud-provider-binary> ENOENT"
      }), "."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Kubernetes clusters from cloud providers require an executable installed on the user's machine for authentication tokens. When you add the path of this executable to the ", (0,jsx_runtime.jsx)(_components.code, {
        children: "PATH"
      }), " for the shell session, this change does not apply to Podman Desktop. This prevents Podman Desktop from obtaining new tokens, making clusters inaccessible."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "solution-4",
      children: "Solution"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Move the binary located in your ", (0,jsx_runtime.jsx)(_components.code, {
            children: ".kube/config"
          }), " file to a system bin directory, such as ", (0,jsx_runtime.jsx)(_components.code, {
            children: "/usr/local/bin/"
          }), "."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Set the value of the ", (0,jsx_runtime.jsx)(_components.code, {
            children: "command"
          }), " parameter to the full path of the executable in your Kubernetes configuration file. For example, ", (0,jsx_runtime.jsx)(_components.code, {
            children: "command: /usr/local/bin/<cloud-provider-binary>"
          }), ", where ", (0,jsx_runtime.jsx)(_components.code, {
            children: "cloud-provider-binary"
          }), " denotes the binary name, such as ", (0,jsx_runtime.jsx)(_components.code, {
            children: "aws"
          }), " or ", (0,jsx_runtime.jsx)(_components.code, {
            children: "oci"
          }), "."]
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