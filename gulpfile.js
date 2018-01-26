var gulp = require("gulp");
var postcss = require("gulp-postcss");
var sass = require("gulp-sass");
var concat = require("gulp-concat");
var copyAssets = require("postcss-copy");
var autoprefixer = require("autoprefixer");

gulp.task("default", function() {
  var processors = [
    autoprefixer,
    copyAssets({ dest: "build" })
  ];
  return gulp
    .src("./src/**/*.scss")
    .pipe(sass().on("error", sass.logError))
    .pipe(postcss(processors))
    .pipe(concat("app.css"))
    .pipe(gulp.dest("./build"));
});
