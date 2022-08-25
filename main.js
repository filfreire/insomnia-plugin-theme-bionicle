// For help writing plugins, visit the documentation to get started:
//   https://support.insomnia.rest/article/173-plugins

const fs = require("fs");
const os = require("os");

const platform = os.platform()
const homeDir = os.homedir()
let path = ""
switch (platform) {
    case "win32":
        path = homeDir+"/AppData/Roaming/Insomnia/plugins/insomnia-plugin-theme-bionicle/tahu.png"
        break
    case "darwin":
        path = homeDir+"/Library/Application Support/Insomnia/plugins/insomnia-plugin-theme-bionicle/tahu.png"
        break;
    default:
        throw "Unsupported platform!"
}

let image = fs.readFileSync(path);
let stringImage = image.toString("base64");

module.exports.themes = [{
    name: "theme-bionicle",
    displayName: "Bionicle theme",
    theme: {
        rawCss: `
    .request-pane.theme--pane.pane .pane__body.theme--pane__body.react-tabs {
        background-image: url(data:image/png;base64,${stringImage});
        background-position-x: 5rem;
        background-position-y: bottom;
        background-size: 70%;
        background-repeat: no-repeat;
    }
    /*#BionicleOverlay {
        width:100%;
        height:100%;
        position:absolute;
        top:0;
        pointer-events:none;
        background-image: url(data:image/png;base64,${stringImage});
        background-position-x: calc(1vw + 1rem);
        background-position-y: bottom;
        background-size: 49vmin;
        background-repeat: no-repeat;
        z-index:20;
    }*/
    `,
        styles: {
            transparentOverlay: {
                background: {
                    default: 'rgba(30, 30, 30, 0.8)',
                },
                foreground: {
                    default: '#ddd',
                },
            },
            dialog: {
                background: {
                    default: '#fff',
                },
                foreground: {
                    default: '#333',
                },
            },
            appHeader: {
                background: {
                    default: '#2C2C2C',
                },
            },
            sidebar: {
                background: {
                    default: '#2C2C2C',
                    success: '#7ecf2b',
                    notice: '#f0e137',
                    warning: '#ff9a1f',
                    danger: '#ff5631',
                    surprise: '#a896ff',
                    info: '#46c1e6',
                },
                foreground: {
                    default: '#e0e0e0',
                },
                highlight: {
                    default: '#999',
                },
            },
            sidebarHeader: {
                background: {
                    default: '#695eb8',
                },
                foreground: {
                    default: '#fff',
                },
            },
            paneHeader: {
                foreground: {
                    default: '#ccc',
                },
                background: {
                    default: '#212121',
                    success: '#75ba24',
                    notice: '#d8c84d',
                    warning: '#ec8702',
                    danger: '#e15251',
                    surprise: '#8776d5',
                    info: '#20aed9',
                },
            },
            pane: {
                background: {
                    default: '#292929',
                    success: '{{ styles.sidebar.background.success }}',
                    notice: '{{ styles.sidebar.background.notice }}',
                    warning: '{{ styles.sidebar.background.warning }}',
                    danger: '{{ styles.sidebar.background.danger }}',
                    surprise: '{{ styles.sidebar.background.surprise }}',
                    info: '{{ styles.sidebar.background.info }}',
                },
                foreground: {
                    default: '#e0e0e0',
                },
                highlight: {
                    default: '#999',
                },
            },
        },
    }
}]
