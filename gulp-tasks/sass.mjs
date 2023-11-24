import gulp from "gulp";
import cleanCSS from "gulp-clean-css";
import * as dartSass from "sass";
import gulpSass from "gulp-sass";
const sassProcessor = gulpSass(dartSass);

// Flags whether we compress the output etc
const isProduction = process.env.NODE_ENV === 'production';

// An array of outputs that should be sent over to includes
const criticalStyles = ['critical.scss', 'home.scss', 'page.scss', 'blog-page.scss'];

// Takes the arguments passed by `dest` and determines where the output file goes
const calculateOutput = ({history}) => {
  // By default, we want a CSS file in our build directory, so the
  // HTML can grab it with a <link />
  let response = './build/css';

  // Get everything after the last slash
  const sourceFileName = /[^(/|\\)]*$/.exec(history[0])[0];

  // If this is critical CSS though, we want it to go
  // to the _includes directory, so nunjucks can include it
  // directly in a <style>
  if (criticalStyles.includes(sourceFileName)) {
    response = './src/_includes/css';
  }

  return response;
};

// The main Sass method grabs all root Sass files,
// processes them, then sends them to the output calculator
const sass = () => {
  return gulp
    .src("./src/scss/*.scss")
    .pipe(sassProcessor().on("error", sassProcessor.logError))
    .pipe(
      cleanCSS(
        isProduction
          ? {
              level: 2,
            }
          : {},
      ),
    )
    .pipe(gulp.dest(calculateOutput, { sourceMaps: !isProduction }));
};

export default sass;