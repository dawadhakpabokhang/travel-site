var gulp = require('gulp');
var postcss = require('gulp-postcss');
var autoprefixer = require('autoprefixer');
var cssVars = require('postcss-simple-vars');
var nestedCss = require('postcss-nested');
var cssImport = require('postcss-import');

////////// EVERYTHING IN GULP REVOLVES AROUND TASKS //////////

// the task method takes in 2 parameters
  // 1) what you want to name the Task
  // 2) a callback function which tells the task what to do
gulp.task('styles', function(){

  // always remember to include the return keyword for gulp.src
  // gulp.src points to css file
  return gulp.src('./app/assets/styles/styles.css')

    // pass in the post css automation tools you want run as an array into the postcss.([]) method as an array
    // here you passed in the css Import, css variable, nested css and auto prefixer packages
    .pipe(postcss([cssImport, cssVars, autoprefixer, nestedCss]))

    ////////////////////////////////////////////////////// GULP ERROR HANDELING //////////////////////////////////////////////////////

    // if an error occurs, keep running the watch function but console.log where the error is in the code
    .on('error', function(errorInfo){
      console.log(errorInfo.toString());
      this.emit('end');
    })

    ////////////////////////////////////////////////////// GULP ERROR HANDELING ////////////////////////////////////////////////////// 

    // gulp.dest points to where we want the new css file to be made
    .pipe(gulp.dest('./app/temp/styles'));
});
