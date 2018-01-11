var gulp = require('gulp');
var watch = require('gulp-watch');
var browserSync = require('browser-sync').create();

////////// EVERYTHING IN GULP REVOLVES AROUND TASKS //////////

// the task method takes in 2 parameters
  // 1) what you want to name the Task
  // 2) a callback function which tells the task what to do
gulp.task('watch', function(){

  browserSync.init({
    notify: false,
    server: {
      // tells browserSync where your website lives (location of you html file)
      baseDir: "app"
    }
  });

  // the watch plugin takes 2 parameters
    // 1) the location of the file you want to watch for
    // 2) a callback function which tells the task what to do
  watch('./app/index.html', function(){

    // whenever a change is made to our html file, the page reloads
    browserSync.reload();
  });

  // the location for this watch method targets any future folders (**) within the styles folder and any flies with a css extension (*.css)
  watch('./app/assets/styles/**/*.css', function(){

    // the start method runs the name of the task that is passed in
    gulp.start('cssInject');
  })
});


// the cssInject task refreshes the browser whenver a css file has been updated
// the cssInject task does not begin until the 'styles' task runs and completes (its a dependency)
gulp.task('cssInject', ['styles'], function(){
  return gulp.src('./app/temp/styles/styles.css')
    .pipe(browserSync.stream());
});
