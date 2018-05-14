const gulp = require('gulp')
    , http = require('http')
    , sass = require('gulp-sass')
    , pug = require('gulp-pug')
    , minify = require('gulp-cssnano')
    , liveReload = require('gulp-livereload')
    , st = require('st')
    , path = require('path')
    , plumber = require('gulp-plumber')
    , browserSync = require('browser-sync').create();



gulp.task('sass', () => {
    gulp.src('./dist/main/css/main.scss')
        .pipe(plumber({
            errorHandler: function (error) {
                console.log(error.toString());
                this.emit('end');
            }
        })
        )
        .pipe(sass())
        .pipe(minify())
        .pipe(gulp.dest('./dist/main/css'))
        .pipe(liveReload())
        .pipe(browserSync.stream())
});

gulp.task('pug', () => {
    gulp.src('./dev/*.pug')
        .pipe(plumber({
            errorHandler: function (error) {
                console.log(error.toString());
                this.emit('end');
            }
        })
        )
        .pipe(pug({ pretty: true }))
        .pipe(gulp.dest(path.join(__dirname, '/')))
        .pipe(browserSync.stream())
})

gulp.task('watch-sass', () => {
    liveReload.listen();
    gulp.watch([
        './dist/main/css/**/*.scss',
        './dist/main/css/*.scss'
    ],
        ['sass']);
})
gulp.task('watch-pug', () => {
    gulp.watch([
        './dev/**/*.pug'],
        ['pug']);
})

gulp.task('server', function (done) {
    http.createServer(
        st({ path: __dirname + '/', index: 'index.html', cache: false })
    ).listen(8080, done);
    gulp.run(['watch-pug', 'watch-sass'])
});

gulp.task('browser-sync', function () {
    browserSync.init({
        server: {
            baseDir: "./"
        }
    });
    gulp.run(['watch-pug', 'watch-sass']).on('change', browserSync.reload)
});


