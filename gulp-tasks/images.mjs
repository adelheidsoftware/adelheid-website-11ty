import gulp from "gulp";
import imagemin, { mozjpeg, optipng } from "gulp-imagemin";

// Grabs all images, runs them through imagemin
// and plops them in the build folder
const images = () => {
	// We have specific configs for jpeg and png files to try
	// to really pull down asset sizes
	return gulp
		.src("./src/assets/images/**/*")
		.pipe(
			imagemin(
				[
					mozjpeg({ quality: 60, progressive: true }),
					optipng({ optimizationLevel: 5, interlaced: null }),
				],
				{
					silent: true,
				},
			),
		)
		.pipe(gulp.dest("./build/assets/images"));
};

export default images;