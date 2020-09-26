// 这是主模块
// 引入express模快
const express = require('express')
// 引入第三方模块
const bodyParser= require('body-Parser')
// 引入Pro.js
const proRouter = require('./router/pro.js')
// 创建web服务器
const app = express();
// 解决本地跨域问题
app.all('*', function(req, res, next){
	res.header("Access-Control-Allow-Origin", "*");//项目上线后改成页面的地址
	res.header("Access-Control-Allow-Headers", "X-Requested-With,Content-Type");
	res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");
	next();
})
// 设置端口
app.listen(8080);
// 托管静态资源
app.use(express.static('./public'));

app.use(bodyParser.urlencoded({
		//是否使用扩展模块
		//false 不适用，会使用官方提供querstring,
		//true使用
	extended:false
	}));
// 路由器添加路由
app.use('/pro/v1',proRouter);