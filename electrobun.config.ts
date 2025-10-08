export default {
    app: {
        name: "buncord",
        identifier: "buncord.legcord.app",
        version: "0.0.1",
    },
    build: {
        views: {
            splash: {
                entrypoint: "src/splash/index.ts",
                external: [],
            },
        },
        copy: {
            "src/splash/index.html": "views/splash/index.html",
            "src/splash/index.css": "views/splash/index.css",
            "src/splash/loading.webm": "views/splash/loading.webm",
        },
        mac: {
            bundleCEF: false,
        },
        linux: {
            bundleCEF: false,
        },
        win: {
            bundleCEF: false,
        },
    },
};