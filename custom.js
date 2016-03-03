
function fnLogin(){
	$(document).on('click',"#loginBtn",function(ev){
		$(document).find('input').val(''); //setting value as blank
		$('#register').hide();
		$('#login').show();
	});
	
	$(document).on('click',"#registerBtn",function(ev){
		$(document).find('input').val(''); //setting value as blank
		$('#login').hide();	
		$('#register').show();
	});
	
	$("#loginSubmit").on('click',function(){
		var userName = $("#userNameLogin").val().trim();
		var password = $("#passwordLogin").val().trim();
		
		if(userName.length === 0){
			alert('username is not valid');
			return false;
		}else if(password.length === 0){
			alert('password is not valid');
			return false;
		}else{
			var html = '<p>You are logged in as <strong>"'+userName +'"</strong></p>';
			html += '<p><button type="button" class="btn btn-primary" id="logOutBtn">Logout</button></p>';
			$("#userValue").html(html);
			$("#userPanel").show();
			$('#login, #loginBtn, #registerBtn').hide();	
		}
	});
	$("#registerSubmit").on('click',function(){
		var userName=$("#registerEmail").val().trim();
		var name=$("#registerName").val().trim();
		var address=$("#registerAddress").val().trim();
		var password=$("#registerPassword").val().trim();
		if(userName.length === 0){
			alert('username is not valid');
			return false;
		}else if(name.length === 0){
			alert('Name is not correct');
			return false;
		}else if(address.length === 0){
			alert('Address is not correct');
			return false;
		}else if(password.length === 0){
			alert('password is not correct');
			return false;
		}
		else{
			var html='<ul class="list-group">'
			html +='<li class="list-group-item">'+userName+'</li>';
			html +='<li class="list-group-item">'+name+'</li>';
			html +='<li class="list-group-item">'+address+'</li>';
			html +='</ul>';
			html += '<p><button type="button" class="btn btn-primary" id="logOutBtn">Logout</button></p>';
			$("#userValue").html(html);
			$("#userPanel").show();
			$('#registerBtn, #register, #loginBtn').hide();	
		}
	});
	$(document).on('click','#logOutBtn',function(){
		$("#userPanel").hide();
		$("#loginBtn, #registerBtn").show();
		
	});	
}