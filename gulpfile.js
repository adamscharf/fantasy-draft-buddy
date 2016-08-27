/**
 * OneUI Angular Generator
 *
 * Usage:
 *    gulp / gulp serve
 *    	Default task for local development.
 *      Builds styles, scripts, and templates and
 *      starts a connect server with watches.
 *		gulp release
 *			gulp tasks for building on Jenkins and releasing
 */
var gulp        = require('gulp'),
  sass      		= require('gulp-sass'),
	bump          = require('gulp-bump'),
	fs 			 			= require('fs'),
	tag           = require('gulp-tag-version'),
	filter        = require('gulp-filter'),
  uglify        = require('gulp-uglify'),
  connect       = require('gulp-connect'),
  concat        = require('gulp-concat'),
  sourcemaps    = require('gulp-sourcemaps'),
  templateCache = require('gulp-angular-templatecache'),
  del 					= require('del');

var config = {
	appName: 'app',
	sources: {
	  scripts: [
	  	'bower_components/angular/angular.js',
	  	'bower_components/angular-ui-router/release/angular-ui-router.js',
	  	'bower_components/angular-sanitize/angular-sanitize.js',
	  	'bower_components/angular-animate/angular-animate.js',
	  	'bower_components/angular-aria/angular-aria.js',
	  	'bower_components/angular-material/angular-material.js',
	  	'app/app.module.js',
	  	'app/app.config.js',
	  	'app/*/scripts/*.module.js',
	  	'app/*/scripts/*.js',
	  	'app/*/scripts/*.directive.js',
	  	'!app/build/**/*',
	  	'app/templates.js'
	  ],
	  fonts: [
	  ],
	  images: [
	  	'app/core/assets/images/*'
	  ],
	  style: [
	  	'app/core/styles/app.scss'
	  ],
	  templates: [
	  	'app/**/*.html'
	  ],
		tests: [
	  	'app/build/all.js',
	    'app/*/scripts/*.js',
			'bower_components/angular-mocks/angular-mocks.js',
			'bower_components/jquery/dist/jquery.js',
			'tests/specs/*.js'
		]
	}
};

var localServerPort = 8181;

// Start a connect server with livereload
gulp.task('connect', function() {
  connect.server({
      root: "app",
      livereload: true,
      port: localServerPort
   });
});

// Watches
gulp.task('watch', ['build'], function() {
  gulp.watch('app/**.*.scss', ['build-css']);
  gulp.watch([config.sources.scripts, '!app/templates.js', config.sources.templates], ['build-js']);
  gulp.watch(['app/**/*.html'], ['build-js']);
});

// Cache templates
gulp.task('cache-templates', function() {
	return gulp.src(config.sources.templates)
    .pipe(templateCache('templates.js', { module: config.appName }))
    .pipe(gulp.dest('app'));
});

// Build style
gulp.task('build-css', function() {
	return gulp.src(config.sources.style)
		.pipe(sourcemaps.init())
			.pipe(sass())
		.pipe(sourcemaps.write())
		.pipe(gulp.dest('app/build'))
		.pipe(connect.reload());
});

// Build scripts
gulp.task('build-js', ['cache-templates'], function() {
	return gulp.src(config.sources.scripts)
		.pipe(sourcemaps.init())
			.pipe(concat('all.js'))
		.pipe(sourcemaps.write())
		.pipe(gulp.dest('app/build'))
		.on('end', function(){
			// remove the app/templates.js file when the concat/dest is done
			console.log("remove templates.js");
			fs.unlinkSync('app/templates.js');
		})
		.pipe(connect.reload());
});

gulp.task("copy-fonts", function(){
	return gulp.src(config.sources.fonts)
		.pipe(gulp.dest('app/build/assets/fonts'));
});

gulp.task("copy-images", function(){
	return gulp.src(config.sources.images)
		.pipe(gulp.dest('app/build/assets/images'));
});


//create task to copy assets
gulp.task("copy-assets", ['copy-fonts', 'copy-images']);

//create build task
gulp.task('build', ['build-js', 'copy-assets', 'build-css']);

// task to build and run locally
// does build also, which is a dependency of 'watch'
gulp.task('serve', ['watch', 'connect']);

//task to build and update version on server
gulp.task('release', ['build']);

//default task
gulp.task('default', ['serve']);
