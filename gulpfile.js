const { src, dest, series, watch } = require(`gulp`),
    CSSLinter = require(`gulp-stylelint`),
    jsLinter = require(`gulp-eslint`),
    babel = require(`gulp-babel`),
    browserSync = require(`browser-sync`),
    reload = browserSync.reload;

let lintCSS = () => {
    return src(`./styles/*.css`)
        .pipe(CSSLinter({
            failAfterError: false,
            reporters: [
                {formatter: `string`, console: true}
            ]
        }));
};

let lintJS = () => {
    return src(`./scripts/*.js`)
        .pipe(jsLinter())
        .pipe(jsLinter.formatEach(`compact`));
};

let transpileJSForDev = () => {
    return src(`./scripts/*.js`)
        .pipe(babel())
        .pipe(dest(`temp/scripts`));
};

let serve = () => {
    browserSync({
        notify: true,
        reloadDelay: 50,
        server: {
            baseDir: [
                `./`
            ]
        }
    });

    watch(`./styles/*.css`, series(lintCSS))
        .on(`change`, reload);

    watch(`./scripts/*.js`, series(lintJS, transpileJSForDev))
        .on(`change`, reload);

    watch(`./*.html`)
        .on(`change`, reload);
};


exports.lintCSS = lintCSS;
exports.lintJS = lintJS;
exports.transpileJSForDev = transpileJSForDev;
exports.default = series(
    lintCSS,
    lintJS,
    transpileJSForDev,
    serve
);