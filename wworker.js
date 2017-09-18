

function timerCount(){
    var d=new Date();
    var t=d.getHours()+":"+d.getMinutes()+":"+d.getSeconds();
    postMessage(t);
    setTimeout("timerCount()",1000);
}
timerCount();