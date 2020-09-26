//引入express模块
const express = require('express');
//引入pool.js
const pool = require('../pool.js');
//console.log(pool);
//创建路由器
const r = express.Router();
//获取数据
r.get('/login',function(req,res){
	let sql = "select * from qdd_huawei";
	// console.log("111111111")
	pool.query(sql,function(err,result){
		// console.log("22222222222222")
		if(err) throw err;
		// console.log(result)
		if(result.length>0){
			res.send(result)
		}else{
			res.send("0")
		}
	})
})
//删除数据
r.delete('/del_home/:id',function(req,res){
	let _id = req.params.id;
	let sql = "delete from qdd_huawei where id=?";
	pool.query(sql,[_id],function(err,result){
		if(err) throw err;
		if(result.affectedRows>0){
			res.send("1");
		}else{
			res.send("0");
		}
	})
})
//查询
r.get('/select_home',function(req,res){
	let _id = req.query.id;
	console.log(_id);
	let sql = "select * from qdd_huawei where id=?"
	pool.query(sql,[_id],function(err,result){
		if(err) throw err;
		if(result.length>0){
			res.send(result);
		}else{
			res.send("0");
		}
	})
})
// 修改
r.post('/upd_home',function(req,res){
	let obj = req.body;
	console.log(obj);
	let sql = "update qdd_huawei  set ?  where  id=?";
	pool.query(sql,[obj,obj.id],function(err,result){
		if(err)throw err;
		console.log(result);
		if(result.affectedRows>0){
			res.send("1");
		}else{
			res.send("0");
		}
	})
})
// 注册
r.post('/instr',function(req,res){
	let obj = req.body;
	console.log(obj);
	let sql = "insert into xz_user set ?";
	pool.query(sql,[obj],function(err,result){
		if(err) throw err;
		if(result.affectedRows>0){
			res.send("1");
		}else{
			res.send("0");
		}
	})
})
//导出路由器
module.exports=r;


