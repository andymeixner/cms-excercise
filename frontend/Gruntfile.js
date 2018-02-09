/* eslint-env node */
module.exports = function(grunt) {

	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),

		// compile sass stylesheets to css -----------------------------------------
		sass: {
			options: {
				sourceMap: true
			},
			dist: {
				files: {
					'public/css/main.css': 'scss/main.scss'
				}
			}
		},

		watch: {
			gruntfile: {
				files: 'Gruntfile.js',
				options: {
					reload: true
				}
			},
			sass: {
				files: 'scss/*.scss',
				tasks: ['sass'],
				options: {
					livereload: true
				}
			}
		}
	});

	grunt.loadNpmTasks('grunt-sass');
	grunt.loadNpmTasks('grunt-contrib-watch');
};
