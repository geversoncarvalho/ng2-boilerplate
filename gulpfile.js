var gulp = require('gulp');
var webpack = require('webpack');
var webpackConf = require('./webpack.config.js');
var browserSync = require('browser-sync');
var spawn = require('child_process').spawn;

var compiler = webpack(webpackConf);

gulp.task('serve-dev', webpackWatch);

var browserInitialized = false;

function browserSyncTask() {

	browserSync.init(null, {
		proxy: "http://localhost:5000",
        serveStatic: ["build/**/*.*"],
        browser: "chrome.exe",
        port: 3000,
	});
	browserInitialized = true;
}

function webpackWatch() {
	var options = { // watch options:
		aggregateTimeout: 300, // wait so long for more changes
		poll: true // use polling instead of native watchers
	};
	compiler.watch(options, function(err, stats) {
		executeServer();
		if (browserInitialized) {
			browserSync.reload();
		} else {
			browserSyncTask();
		}
	});
}

var serveProcess = null;
function executeServer() {
	if (serveProcess) {
		serveProcess.kill();
	}
	serveProcess = spawn('node', ['./server.js']);
	serveProcess.stdout.on('data', (data) => {
		process.stdout.write(data);
		console.log(`stdout: ${data}`);
	});
}