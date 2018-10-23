import gulp from 'gulp'
import babel from 'gulp-babel'
import watch from 'gulp-watch'
import log from 'fancy-log'
import fs from 'fs'
import path from 'path'

const walkSync = (dir, filelist = []) => {
  fs.readdirSync(dir).forEach(file => {
    filelist = fs.statSync(path.join(dir, file)).isDirectory()
      ? walkSync(path.join(dir, file), filelist)
      : filelist.concat(path.join(dir, file))
  })
  return filelist
}

const compile = () => {
  gulp
    .src(path.normalize('src/**/*.js'))
    .pipe(babel())
    .on('error', log)
    .pipe(gulp.dest('lib'))
}

gulp.task('build', compile)

gulp.task('watch', () => {
  compile()
  return watch([path.normalize('src/**/*.js')], compile)
})
