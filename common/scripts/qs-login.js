/**
 * Created by Administrator on 2015-08-25.
 * qslogin
 */
function login(){
    var username=$("#username").val();
    var password=$("#password").val();
    if(username==""){
        alert("帐号不能为空")
        //$("#login-error").show(300).delay(3000).hide(300); 
         //alert($("#idwrong").show("slow"));
         return;
    }
    if(password==""){
        alert("密码不能为空")
        //$("#login-error").show(300).delay(3000).hide(300); 
        return;
    }
    if(username=="13800138001"&&password=="qsmd"){
        location.href="md/md_page.html";
    }
    else if(username=="13800138002"&&password=="qshc"){
        location.href="hc/find_doc.html";
    }else{        
        alert("请输入正确帐号/密码")

        //$("#login-error").show(300).delay(3000).hide(300); 
    }
}
