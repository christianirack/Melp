/*----------  NPM install  ----------*/

const 
gulp = require('gulp'),
sass = require('gulp-sass'),
autoprefixer = require('gulp-autoprefixer'),
concat = require('gulp-concat'),
minifier = require('gulp-minifier'),
pug = require('gulp-pug'),
tattoo = require('gulp-tattoo'),
fs = require("fs"),
obf = require('gulp-javascriptobfuscator'),
run = require('gulp-run');

/*----------  Modo de compilación  ----------*/


process.env.NODE_ENV = 'production';
const MODE = process.env.NODE_ENV;
//export NODE_ENV=production

/*----------  Play time  ----------*/

var  asciiArt = fs.readFileSync('./maintainer.txt', 'utf8')
asciiArt+='\n\nMELP\nDev: christian@irack.mx\nRepo: https://github.com/christianirack/Melp.git\nLinkedIn: https://www.linkedin.com/in/web-developer-full-stack\n';
//const asciiArt = 'Dev: Christian Irack\nchristian@irack.mx\n\nLinkedIn: https://www.linkedin.com/in/web-developer-full-stack';

/*----------  Manejo de errores (Instalar terminal-notifier CLI MacOs)  ----------*/

function errores(err){
   var cmd = new run.Command("terminal-notifier -title 'Error de compilación' -message 'Revisar código!'");
    cmd.exec();
    console.log(err.toString());
    this.emit('end');
}

/*----------  Archivos JS & CSSS por secuencia  ----------*/

const jsFiles = ['lib/isMobile.js',
                'lib/jquery-3.1.1.js',
                'lib/what-input.js',
                'lib/foundation.js',
                'lib/mapa.js',
                'lib/font-awesome.js',
                'react.js',
                'app.js'];

const cssFiles = ['lib/foundation.css',
                  'lib/fonts.css',
                  'app.css'];

/*----------  Ruta de archivos compilados  ----------*/

const dest = '../dist/';
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
	gulp.src(sassSrc+'*.scss')
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
    {
    if (MODE=='development'){
      /*----------  Desarrollo  ----------*/
      gulp.src('./views/*.pug')
      .pipe(pug({
        pretty:true,
      })).on('error', errores)
      .pipe(tattoo(asciiArt)).on('error', errores)
      .pipe(gulp.dest(dest))
    }else{
      /*----------  Producción  ----------*/
      
     gulp.src('./views/*.pug')
      .pipe(pug({
        pretty:false,
      })).on('error', errores)
      .pipe(minifier({
          minify: true,
          collapseWhitespace: true,
          conservativeCollapse: true,
          minifyJS: false,
          minifyCSS: false 
      })).on('error', errores)
      .pipe(tattoo(asciiArt)).on('error', errores)
      .pipe(gulp.dest(dest))
    }
  }
);

/*----------  Bundle de archivos CSS & JS ----------*/

gulp.task('concatcss', ()=>
  {
    if (MODE=='development'){
      /*----------  Desarrollo ----------*/
        gulp.src(css)
        .pipe(concat('bundle.css')).on('error', errores)
        .pipe(gulp.dest(dest+'css/'))
    }else{
      /*----------  Producción  ----------*/
        gulp.src(css)
        .pipe(concat('bundle.css')).on('error', errores)
        .pipe(minifier({
          minify: true,
          collapseWhitespace: true,
          conservativeCollapse: true,
          minifyJS: false,
          minifyCSS: true 
      })).on('error', errores)
        .pipe(gulp.dest(dest+'css/'))
    }
  }
);

gulp.task('concatjs', ()=>
  {

    
    if (MODE=='development'){
       /*----------  Desarrollo ----------*/
      gulp.src(js)
      .pipe(concat('bundle.js')).on('error', errores)
      .pipe(gulp.dest(dest+'js/'))
    }else{
       /*----------  Producción  ----------*/
      gulp.src(js)
      .pipe(concat('bundle.js')).on('error', errores)
       .pipe(obf({
        encodeString: true,
        encodeNumber: true,
        replaceNames: true,
        moveString: true,
        exclusions: ["^_get_", "^_set_", "^_mtd_"]
       }))
      .pipe(minifier({
        minify: true,
        collapseWhitespace: true,
        conservativeCollapse: true,
        minifyJS: true,
        minifyCSS: false 
      })).on('error', errores)

      .pipe(gulp.dest(dest+'js/'))
    }
  }
);

/*----------  Vigilar SRC ----------*/

gulp.task('default',['views','sass','concatcss','concatjs'], ()=> {
  gulp.watch([sassSrc+'**/*.scss'],['sass'])
  gulp.watch([cssSrc+'**/*.css'],['concatcss'])
	gulp.watch([jsSrc+'**/*.js'],['concatjs'])
  gulp.watch([pugSrc+'/**/*.pug',pugSrc+'/**/*.html'],['views'])
})

/*----------  Modo de compilación alerta  ----------*/
function gulpFiles(){
   var cmd = new run.Command("clear && figlet Mode: "+MODE);
    cmd.exec();
}
gulpFiles();
