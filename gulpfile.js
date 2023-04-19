const { src, dest, series, watch } = require(`gulp`),
    CSSLinter = require(`gulp-stylelint`),
    jsLinter = require(`gulp-eslint`),
    babel = require(`gulp-babel`),
    browserSync = require(`browser-sync`),
    reload = browserSync.reload,
    htmlCompressor = require(`gulp-htmlmin`),
    jsCompressor = require(`gulp-uglify`),
    cssCompressor = require(`gulp-clean-css`);

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

let compressHTML = () => {
    return src([`./*.html`])
        .pipe(htmlCompressor({collapseWhitespace: true}))
        .pipe(dest(`prod`));
};

let transpileJSForProd = () => {
    return src(`./scripts/*.js`)
        .pipe(babel())
        .pipe(jsCompressor())
        .pipe(dest(`prod/scripts`));
};

let compressCSS = () => {
    return src([`./styles/*.css`])
        .pipe(cssCompressor({compatibility: `ie8`}))
        .pipe(dest(`prod/styles`));
};

exports.lintCSS = lintCSS;
exports.lintJS = lintJS;
exports.transpileJSForDev = transpileJSForDev;
exports.compressHTML = compressHTML;
exports.transpileJSForProd = transpileJSForProd;
exports.compressCSS = compressCSS;

exports.default = series(
    lintCSS,
    lintJS,
    transpileJSForDev,
    serve
);