// JavaScript Document
//去除所有链接的虚线框 
$(document).ready(function(){
	$('a,input[type="button"],input[type="image"],input[type="submit"],area').bind('focus',function(){ 
		if(this.blur){ //如果支持 this.blur 
			this.blur(); 
		}; 
	}); 
});

//输入框文字隐藏
showInfo_head = function(infoTxt_head){
	var s_head = infoTxt_head;
	$(".showInfo_head").click(function(){
		var ss_head=$(this).val();if(ss_head==s_head){$(this).val("")}else{return} })
    .blur(function(){
        var ss_head=$(this).val();if(ss_head==""){$(this).val(s_head)}else{return} });
};

showInfo_help = function(infoTxt_help){
	var s_help = infoTxt_help;
	$(".showInfo_help").click(function(){
		var ss_help=$(this).val();if(ss_help==s_help){$(this).val("")}else{return} })
    .blur(function(){
        var ss_help=$(this).val();if(ss_help==""){$(this).val(s_help)}else{return} });
};