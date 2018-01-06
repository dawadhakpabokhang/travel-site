// always remember to require the packages you need in order to use the code
var gulp = require('gulp');
var watch = require('gulp-watch');
var postcss = require('gulp-postcss')
var autoprefixer = require('autoprefixer');
var cssVars = require('postcss-simple-vars');
var nestedCss = require('postcss-nested');

////////// EVERYTHING IN GULP REVOLVES AROUND TASKS //////////

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

  // always remember to include the return keyword for gulp.src
  // gulp.src points to css file
  return gulp.src('./app/assets/styles/styles.css')

    // pass in the post css automation tools you want run as an array into the postcss.([]) method as an array
    // here you passed in the css variable, nested css and auto prefixer packages
    .pipe(postcss([cssVars, autoprefixer, nestedCss]))

    // gulp.dest points to where we want the new css file to be made
    .pipe(gulp.dest('./app/temp/styles'));
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
