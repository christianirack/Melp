/*----------  NPM install  ----------*/

const 
gulp = require('gulp'),
sass = require('gulp-sass'),
autoprefixer = require('gulp-autoprefixer'),
concat = require('gulp-concat'),
minify = require('gulp-minify'),
pug = require('gulp-pug'),
tattoo = require('gulp-tattoo'),
fs = require("fs"),
run = require('gulp-run');

/*----------  Play time  ----------*/

var  asciiArt = fs.readFileSync('./maintainer.txt', 'utf8')
asciiArt+='\n\nchristian@irack.mx\nLinkedIn \n\n';
//const asciiArt = 'Dev: Christian Irack\nchristian@irack.mx\n\nLinkedIn: https://www.linkedin.com/in/web-developer-full-stack';

/*----------  Manejo de errores (Instalar terminal-notifier CLI MacOs)  ----------*/

function errores(err){
   var cmd = new run.Command("terminal-notifier -title 'Error de compilación' -message 'Revisar código!'");
    cmd.exec();
    console.log(err.toString());
    this.emit('end');
}

/*----------  Archivos JS & CSSS por secuencia  ----------*/

const jsFiles = ['lib/jquery-3.1.1.js',
                'lib/TimelineMax.min.js',
                'lib/what-input.js',
                'lib/foundation.js',
                'react.js',
                'app.js'];

const cssFiles = ['lib/foundation.css',
                  'app.css'];

/*----------  Ruta de archivos compilados  ----------*/

const dest = '../dest/';
const jsSrc = "./js/"
const cssSrc = "./css/"
const sassSrc = "./sass/"
const pugSrc = "./views/"

/*----------  Array de archivos  ----------*/

var js = [];
for(var i in jsFiles){
  js.push(jsSrc+jsFiles[i]);
}
var css = [];
for(var i in cssFiles){
  css.push(cssSrc+cssFiles[i]);
}

/*----------  Compilar SASS  ----------*/

gulp.task('sass',()=>
	gulp.src('./sass/**/*.scss')
	.pipe(sass({
		outputStyle: 'nested'

	})).on('error', errores)
	.pipe(autoprefixer({
		versions:['last 3 browsers']
	})).on('error', errores)
	.pipe(gulp.dest('./css/'))
);

/*----------  Compilar Pug  ----------*/
/*
gulp.task('views', function buildHTML(){
    gulp.src(pugSrc)
    .pipe(pug())
     .pipe(gulp.dest(dest+'index.html'))
   }
)
*/
 
gulp.task('views', ()=>
  gulp.src('./views/*.pug')
  .pipe(pug({
    pretty:true
  })).on('error', errores)
  .pipe(tattoo(asciiArt))
  .pipe(gulp.dest(dest))
);

/*----------  Bundle de archivos CSS & JS ----------*/

gulp.task('concatcss', ()=>
    gulp.src(css)
    .pipe(concat('bundle.css')).on('error', errores)
    .pipe(gulp.dest(dest+'css/'))
);

gulp.task('concatjs',['sass'], ()=>
    gulp.src(js)
    .pipe(concat('bundle.js')).on('error', errores)
    .pipe(gulp.dest(dest+'js/'))
);


/*----------  Vigilar SRC ----------*/

gulp.task('dev',['views','sass','concatcss','concatjs'], ()=> {
  gulp.watch([sassSrc+'**/*.scss'],['sass'])
  gulp.watch([cssSrc+'**/*.css'],['concatcss'])
	gulp.watch([jsSrc+'**/*.js'],['concatjs'])
  gulp.watch([pugSrc+'*.pug'],['views'])
})
