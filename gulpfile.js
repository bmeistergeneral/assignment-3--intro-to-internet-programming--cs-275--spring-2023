const { src, dest, series, watch } = require(`gulp`),
    CSSLinter = require(`gulp-stylelint`);

let lintCSS = () => {
    return src(`./styles/*.css`)
        .pipe(CSSLinter({
            failAfterError: false,
            reporters: [
                {formatter: `string`, console: true}
            ]
        }));
};

exports.lintCSS = lintCSS;
