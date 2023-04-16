const { src, dest, series, watch } = require(`gulp`),
    CSSLinter = require(`gulp-stylelint`);
    jsLinter = require(`gulp-eslint`);

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

exports.lintCSS = lintCSS;
exports.lintJS = lintJS;

