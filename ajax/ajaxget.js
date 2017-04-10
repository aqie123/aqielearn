var maxId = 0;
function ajaxget(url,success){
        var xhr = new XMLHttpRequest();
        xhr.onreadystatechange = function(){
            if(xhr.readyState === 4 && xhr.status === 200){
                // alert(xhr.responseText);             //正常
                 //console.log(xhr.responseText);       //   字符串正常
                // 字符串转换成对象
                if(xhr.responseText){
                    eval("var data=" + xhr.responseText);       // data 是对象
                    // console.log(data);           // 获取服务器响应数据
                    // alert(data.message);
                    success(data);
                    // console.log(data);
                    // console.log(data['message'][3]['id']);
                    for(var i=0;i<data.length;++i){
                        // 将已经获取到最大id赋给maxId
                        maxId = data[i]['id'];
                        // console.log(maxId);
                    }
                }
            }
        };
        // console.log(maxId);
        xhr.open('get',url+"&maxId="+maxId);
        xhr.send(null);
}

function getajax(url,success,fail) {
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function(){
        if(xhr.readyState === 4 && xhr.status === 200){
            eval("var data=" + xhr.responseText);
            success(data);
        }
    };
    xhr.open('get',url);
    xhr.send(null);
}