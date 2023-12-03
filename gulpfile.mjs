import gulp from "gulp";
const { parallel, watch: gulpWatch } = gulp;

// Pull in each task
import fonts from "./gulp-tasks/fonts.mjs";
import images from "./gulp-tasks/images.mjs";
import sass from "./gulp-tasks/sass.mjs";

// Set each directory and contents that we want to watch and
// assign the relevant task. `ignoreInitial` set to true will
// prevent the task being run when we run `gulp watch`, but it
// will run when a file changes.
const watcher = () => {
	gulpWatch("./src/assets/images/**/*", { ignoreInitial: true }, images);
	gulpWatch("./src/scss/**/*.scss", { ignoreInitial: true }, sass);
};

// The default (if someone just runs `gulp`) is to run each task in parallel
export default parallel(fonts, images, sass);

// This is our watcher task that instructs gulp to watch directories and
// act accordingly
export const watch = watcher;