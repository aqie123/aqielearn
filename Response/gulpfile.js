// var gulp =require('gulp');

// gulp.task('task-name',function(){
//     console.log("hello gulp")
// });
/*!
 * gulp
 * $ cnpm install gulp-rev gulp-rev-replace gulp-useref gulp-filter gulp-uglify gulp-csso --save-dev
 */
// Load plugins
var gulp = require('gulp'),
    rev = require('gulp-rev'),
    revReplace = require('gulp-rev-replace'),
    useref = require('gulp-useref'),
    filter = require('gulp-filter'),
    uglify = require('gulp-uglify'),
    csso = require('gulp-csso');

gulp.task('default',function(){
    var jsFilter = filter('**/*.js',{restore:true});
    var cssFilter = filter('**/*.css',{restore:true});
    var indexHtmlFilter = filter(['**/*','!**/index.html'],{restore:true});

    return gulp.src('src/index.html')
        .pipe(useref())//合并js ，css
        .pipe(jsFilter)
        .pipe(uglify())//压缩js
        .pipe(jsFilter.restore)
        .pipe(cssFilter)
        .pipe(csso())//压缩css
        .pipe(cssFilter.restore)
        .pipe(indexHtmlFilter)
        .pipe(rev())//添加哈希
        .pipe(indexHtmlFilter.restore)
        .pipe(revReplace())//替换哈希码
        .pipe(gulp.dest('dist'));// 输出
});

