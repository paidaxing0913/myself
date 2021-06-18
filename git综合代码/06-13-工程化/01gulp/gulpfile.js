const {
    series,
    parallel
} = require('gulp')
const gulp = require('gulp');
const babel = require('gulp-babel');
const browserify = require('gulp-browserify');
const rename = require('gulp-rename');
const less = require('gulp-less');
const concat = require('gulp-concat');
const connect = require('gulp-connect');
const {
    exec
} = require('child_process');
const uglify = require('gulp-uglify');
const cssmin = require('gulp-cssmin');
const htmlmin = require('gulp-htmlmin');



// 使用task定义一个任务，规定任务名
gulp.task('babel', () =>
    gulp.src('./src/js/*js') // 把某个文件夹的文件读取出来一个可读流
    .pipe(babel({
        // 把es6代码编译为es5
        // 把es6模块化规范编译为connonJS规范
        presets: ['@babel/env']
    }))
    // 把处理的流写入到某个文件夹
    .pipe(gulp.dest('./dist/js'))
    .pipe(connect.reload())
);

// browserify配置
gulp.task('browserify', function () {
    // Single entry point to browserify
    return gulp.src('./dist/js/index.js')
        .pipe(browserify({
            insertGlobals: true,
        }))
        .pipe(rename('build.js'))
        .pipe(gulp.dest('./dist/js'))
        .pipe(connect.reload())
});

// less配置
gulp.task('less', function () {
    return gulp.src('./src/less/*.less')
        .pipe(less())
        .pipe(concat('all.css'))
        .pipe(gulp.dest('./dist/css'))
        .pipe(connect.reload())
});


// Html配置
gulp.task('html', function () {
    return gulp.src('./src/index.html')
        .pipe(gulp.dest('./dist'))
        .pipe(connect.reload())
})


// 服务器配置
gulp.task('connect', function () {
    connect.server({
        // 端口号
        port: 8888,
        // 目录
        root: ['./dist'],
        livereload:true
    });
    // 自动打开浏览器
    exec('start http://127.0.0.1:8888')

    // 自动监视文件的变化
    gulp.watch('./src/js/*.js',gulp.series(['js-dev']))
    gulp.watch('./src/less/*.less',gulp.series(['less']))
    gulp.watch('./src/index.html',gulp.series(['html']))

});


// 生产环境的统一配置 js
gulp.task('uglify', function () {
    return gulp
        .src('./dist/js/build.js')
        .pipe(uglify())
        .pipe(rename('build.min.js'))
        .pipe(gulp.dest('./dist/js'))
    
  })

  // css压缩配置
  gulp.task('cssmin', function () {
    return gulp.src('./dist/css/*.css')
        .pipe(cssmin())
        .pipe(rename('all.min.css'))
        .pipe(gulp.dest('./dist/css'));
});

// html压缩配置
gulp.task('htmlmin', () => {
    return gulp.src('./src/index.html')
      .pipe(htmlmin({ 
            collapseWhitespace: true, 
            removeComments: true
        }))
      .pipe(gulp.dest('./dist'));
  });

// 统一js任务配置
// series方法可以整合多个任务，并且按照顺序依次执行
gulp.task('js-dev', series(['babel', 'browserify']))

// 统一配置 html js css
// parallel方法，整合多个任务，速度块
gulp.task('dev', parallel(['js-dev', 'html', 'less']))

// 开发环境的统一配置
gulp.task('watch',series(['dev','connect']))

// 生产环境的统一配置
gulp.task('js-prod',series(['js-dev','uglify']))
gulp.task('css-prod',series(['less','cssmin']))
gulp.task('build',parallel(['js-prod','css-prod','htmlmin']))

