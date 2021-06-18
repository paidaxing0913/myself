1.初始化 npm init -y  改package.json名字
2.全局安装 npm install gulp-cli -g
3.安装开发依赖 npm install gulp -D
4.在外层建立一个gulpfile.js文件
5. 创建一个src文件夹，里面创建一个js文件夹，放js文件
6.安装gulp插件 在npmjs中搜索gulp-xxx
7.安装gulp-Babel npm install --save-dev gulp-babel @babel/core @babel/preset-env
8.引入gulp和gulp-babel 使用task定义一个任务，规定任务名 把处理好的流写入到一个新的文件夹 然后运行Babel gulp babel
9.配置browserify  npm install --save-dev gulp-browserify   改任务名，加return 读取dist里的index 但是生成的是文件夹，所以要改名
10.配置gulp-rename npm i -D gulp-rename 再写一个管道，进入rename改名之后再读取
11.如果改src下面的index.js的值，每次都得执行gulp babel 和 gulp browserify 所以要配置series  gulp.task('js-dev',series(['babel','browserify']))  引入series const {series} = require('gulp')
12.配置less 关闭插件easy less  安装less  npm install gulp-less -D(开发依赖)  放在dist下面的css中，但是未来要合并，所以要装concat包
13.安装concat 写一个通道，规定合并的文件，再读取
14.在src中新建一个index.html引入dist中的all.ccss和dist中的bulid.js 需要进行html配置 找到src中的index.html读取到dist中
15.配置统一js任务 parallel方法 gulp.task('dev',parallel(['js-dev','html','less']))  gulp dev执行
16.配置服务器 安装gulp-connect 配置端口号和目录
17.自动打开浏览器 const{exec} = require('child_process') 启动服务器之后 exec('start http://127.0.0.1:8888')
18.自动监视html,js,css文件的变化 gulp.watch('./src/js/*js',gulp.series(['js-dev']))   gulp.watch('./src/less/*less',gulp.series(['less']))   gulp.watch('./src/index.html',gulp.series(['html']))
19.自动刷新 在每一个任务后添加一个.pipe(connect.reload());  要在服务器配置的connect 下面加一个 livereload:true
删除dist 执行gulp dev和gulp connect两条命令，在、再生成dist,实时监听文件变化
21.配置开发环境 gulp.task('watch',series(['dev','connect']))
22.再删除dist 在package.json中调试gulp watch  然后运行npm start 
生产环境的统一配置 三个包：uglify(压缩js) cssmin(压缩css) htmlmin(压缩html)
配置生产环境 gulp.task('js-prod',series(['js-dev','uglify']))
            gulp.task('css-prod',series(['less','cssmin']))
            gulp.task('build',parallel(['js-prod','css-prod','htmlmin']))
