// always remember to require the packages you need in order to use the code
var gulp = require('gulp');
var watch = require('gulp-watch');

// EVERYTHING IN GULP REVOLVES AROUND TASKS

// the task method takes in 2 parameters
  // 1) what you want to name the Task
  // 2) what you want the task to do
gulp.task('default', function(){
  console.log('Gulp Works');
});

gulp.task('html', function(){
  console.log('HTML Task');
});

gulp.task('styles', function(){
  console.log('CSS Task');
});

gulp.task('watch', function(){
  // the watch plugin takes 2 parameters
    // 1) the location of the file you want to watch for
    // 2) what you want the watch function to do
  watch('./app/index.html', function(){
    // the start method runs the name of the task that is passed in
    gulp.start('html');
  });

  // the location for this watch method targets any future folders (**) within the styles folder and any flies with a css extension (*.css)
  watch('./app/assets/styles/**/*.css', function(){
    gulp.start('styles');
  })
});
