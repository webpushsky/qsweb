/**
 * Created by Administrator on 2015-08-25.
 */
$(function(){
    $('#loginform').submit(function(e){
        return false;
    });
    $('#modaltrigger').leanModal({ top: 110, overlay: 0.45, closeButton: ".hidemodal" });
});
