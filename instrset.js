
			function clearTipText(id){
				document.getElementById(id).innerHTML = "";
			}
			//form check 
			function isuname(){
				var data = this.getFormData();
				var uname = data.uname;
				if(!uname){
					name_msg.innerHTML = "用户名不能为空";
					return false;
				}
				if(uname.length < 6 ||  uname.length > 9){
					name_msg.innerHTML = "用户名在6~8之间";
					return false;
				}
				return true
			}
			function isupwd(){
				var data = this.getFormData();
				var upwd = data.upwd;
				if(!upwd){
					upwd_msg.innerHTML = "密码不能为空"
					return false;
				}
				return true;
			}
			function iscpwd(){
				var data = this.getFormData();
				var upwd = data.upwd;
				var cpwd = data.cpwd;
				if(!cpwd){
					cpwd_msg.innerHTML = "请确认密码";
					return false;
				}
				if(cpwd != upwd){
					cpwd_msg.innerHTML = "密码输入不一致，请重新输入";
					return false;
				}
				return true;
			}
			function isphone(){
				var data = this.getFormData();
				var phone = data.phone;
				if(!phone){
					phone_msg.innerHTML = "手机号不能为空";
					return false;
				}
				const reg = /^1(3|4|5|6|7|8|9)\d{9}$/;
      			if(!reg.test(phone)){
					phone_msg.innerHTML = "请输入正确的手机号码";
					return false;
				}
				return true;
			}
			function getFormData(){
				var _uname = document.getElementById('uname').value;
				var _upwd = document.getElementById('upwd').value;
				var _cpwd = document.getElementById('cpwd').value;
				var _phone = document.getElementById('phone').value;
				return {
					uname: _uname.trim(),
					upwd: _upwd,
					cpwd: _cpwd,
					phone: _phone.trim()
				}
			}
			function onSubmit(){
				if(!this.isuname() || !this.isupwd() || !this.iscpwd() || !this.isphone()){
					return;
				}
				var data = this.getFormData();
				console.log("data",data);
				return;
		 
			// 	let xhr= new XMLHttpRequest();
			// 	console.log("fafafafaf");
			// 	xhr.onreadystatechange = function(){
			// 		console.log("aaaaaaaa");
			// 		if(xhr.readyState==4 && xhr.status==200){
			// 			let r=xhr.responseText;
			// 			console.log(r);
			// 			console.log("11111111111")
			// 			if(r!=0){
			// 				alert("注册成功")
			// 				console.log("222222");
			// 			}else{
			// 				alert("注册失败")
			// 			}
			// 		}
			// 	}
			// 	xhr.open("post","http://127.0.0.1:8080/pro/v1/instr",true);
			// 	// console.log("111111111");
			// 	let formdate=`uname=${_uname}&upwd=${_upwd}&phone=${_phone}`;
			// 	// console.log("22222222")
			// 	xhr.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
			// 	// console.log("3333333333")
			// 	xhr.send(formdate);
			}