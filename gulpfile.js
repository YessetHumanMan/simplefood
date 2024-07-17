const { src, dest, watch, parallel, series } = require('gulp');

const scss = require('gulp-sass')(require('sass'));
const concat = require('gulp-concat');
const uglify = require('gulp-uglify-es').default;
const browserSync = require('browser-sync').create();
const autoprefixer = require('gulp-autoprefixer');
const clean = require('gulp-clean');
const imagemin = require('gulp-imagemin');
const svgSprite = require('gulp-svg-sprite');
const cheerio = require('gulp-cheerio');
const replace = require('gulp-replace');
const fileInclude = require('gulp-file-include');


function scripts() {
  return src([
    'node_modules/jquery/dist/jquery.js',
    'node_modules/slick-carousel/slick/slick.js',
    'node_modules/mixitup/dist/mixitup.js',
    'node_modules/swiper/swiper-bundle.js',
    'node_modules/ion-rangeslider/js/ion.rangeSlider.js',
    'node_modules/jquery-form-styler/dist/jquery.formstyler.js',
    'app/js/main.js'
  ])
    .pipe(concat('main.min.js'))
    .pipe(uglify())
    .pipe(dest('app/js'))
    .pipe(browserSync.stream())
}

function styles() {
  return src(
    'app/scss/style.scss'
  )
    .pipe(autoprefixer({ overrideBrowserslist: ['last 10 version'] }))
    .pipe(concat('style.min.css'))
    .pipe(scss({ outputStyle: 'compressed' }))
    .pipe(dest('app/css'))
    .pipe(browserSync.stream())
}

function watching() {
  watch(['app/scss/style.scss'], styles)
  watch(['app/js/main.js'], scripts)
  watch(['app/*.html']).on('change', browserSync.reload);
  watch(['app/images/icons/*.svg'], svgSprites);
  watch(['app/html/**/*.html'], htmlInclude);
}

function browsersync() {
  browserSync.init({
    server: {
      baseDir: "app/"
    }
  });
}

function cleanDist() {
  return src('dist')
    .pipe(clean())
}

// gulp.task('cleanDist', function() {
//   return del('dist');
// });

function building() {
  return src([
    'app/css/style.min.css',
    'app/js/main.min.js',
    'app/**/*.html'
  ], { base: 'app' })
    .pipe(dest('dist'))
}

// gulp.task('build', gulp.series('cleanDist', function() {
//   return gulp.src('src/**/*.js')
//       .pipe(gulp.dest('dist'));
// }));

function images() {
  return src('app/images/**/*.*')
    .pipe(imagemin([
      gifsicle({ interlaced: true }),
      mozjpeg({ quality: 75, progressive: true }),
      optipng({ optimizationLevel: 5 }),
      svgo({
        plugins: [
          {
            name: 'removeViewBox',
            active: true
          },
          {
            name: 'cleanupIDs',
            active: false
          }
        ]
      })
    ]))
    .pipe(dest('dist/images'))
}

function svgSprites() {
  return src('app/images/icons/*.svg')
    .pipe(cheerio({
      run: ($) => {
        $("[fill]").removeAttr("fill");
        $("[stroke]").removeAttr("stroke");
        $("[style]").removeAttr("style");
      },
      parserOptions: { xmlMode: true },
    })
    )
    .pipe(replace('&gt;', '>'))
    .pipe(
      svgSprite({
        mode: {
          stack: {
            sprite: '../sprite.svg',
          },
        },
      })
    )
    .pipe(dest('app/images'));
}

const htmlInclude = () => {
  return src(['app/html/*.html'])
  .pipe(fileInclude({
    prefix: '@',
    basepath: '@file',
  }))
  .pipe(dest('app'))
  .pipe(browserSync.stream());
}

exports.styles = styles;
exports.scripts = scripts;
exports.watching = watching;
exports.browsersync = browsersync;
exports.images = images;
exports.svgSprites = svgSprites;
exports.htmlInclude = htmlInclude;

exports.build = series(cleanDist, building);
// gulp.task('default', gulp.series('build'));

exports.default = parallel(htmlInclude, svgSprites, styles, scripts, browsersync, watching);