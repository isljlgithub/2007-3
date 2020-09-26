			// 获取焦点
			function show_unme(){
				name_msg.innerHTML="用户名在6~8之间";
			}
			// 失去焦点
			function check_name(){
				let _uname=uname.value;
				console.log(_uname);
				if(!_uname){
					name_msg.innerHTML="用户名不能为空"
				}else if(_uname.length>=6 && _uname.length<=8){
					name_msg.innerHTML="√";
				}else{
					name_msg.innerHTML="×"
				}
				
			}
			// 获取焦点
			function show_upwd(){
				upwd_msg.innerHTML="密码在6~8之间";
			}
			// 失去焦点
			function check_upwd(){
				let _upwd=upwd.value;
				if(!_upwd){
					upwd_msg.innerHTML="密码不能为空"
				}else if(_upwd.length>=6 && _upwd.length<=8){
					upwd_msg.innerHTML="√";
				}else{
					upwd_msg.innerHTML="×";
				}
			}
			// 获取焦点
			function show_cpwd(){
				cpwd_msg.innerHTML="再输一次";
			}
			// 失去焦点
			function check_cpwd(){
				let _cpwd = cpwd.value;
				if(!_cpwd){
					cpwd_msg.innerHTML="不能为空"
				}else if(cpwd.value==upwd.value){
					cpwd_msg.innerHTML="√";
				}else{
					cpwd_msg.innerHTML="×";
				}
			}
			// 获取焦点
			function show_phone(){
				phone_msg.innerHTML="请输入你的手机号";
			}
			// 失去焦点
			function check_phone(){
				let _phone=phone.value;
				if(!_phone){
					phone_msg.innerHTML="手机号不能为空";
				}else if(_phone.length==11){
					phone_msg.innerHTML="√";
				}else{
					phone_msg.innerHTML="×"
				}
			}
			function insrt(){
				let _uname=uname.value;
				let _upwd = upwd.value;
				let _cpwd = cpwd.value;
				let _phone = phone.value;
				 if(!_uname){
				 	name_msg.innerHTML="用户名不能为空";
					return;
				 }else if(name_msg.innerHTML=="×"){
					 name_msg.innerHTML="用户名不合规范";
					 return;
				 }else if(!_upwd){
				 	upwd_msg.innerHTML="密码不能为空";
					return;
				 }else if(upwd_msg.innerHTML=="×"){
				 	upwd_msg.innerHTML="密码不合规范";
					return;
				 }else if(!_cpwd){
					cpwd_msg.innerHTML="手机号不能为空";
					return;
				}else if(cpwd.value!=upwd.value){
					cpwd_msg.innerHTML="密码不一致";
					return;
				}else if(!_phone){
					phone_msg.innerHTML="手机号不能为空";
					return;
				}else if(phone_msg.innerHTML!="√"){
					phone_msg.innerHtml="格式不符合规范";
					return;
				};
				let xhr= new XMLHttpRequest();
				console.log("fafafafaf");
				xhr.onreadystatechange = function(){
					console.log("aaaaaaaa");
					if(xhr.readyState==4 && xhr.status==200){
						let r=xhr.responseText;
						console.log(r);
						console.log("11111111111")
						if(r!=0){
							alert("注册成功")
							console.log("222222");
						}else{
							alert("注册失败")
						}
					}
				}
				xhr.open("post","http://127.0.0.1:8080/pro/v1/instr",true);
				// console.log("111111111");
				let formdate=`uname=${_uname}&upwd=${_upwd}&phone=${_phone}`;
				// console.log("22222222")
				xhr.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
				// console.log("3333333333")
				xhr.send(formdate);
			}