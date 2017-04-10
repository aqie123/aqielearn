

xhtml,css,javascript,xml,XMLHttpRequest

1.get 对传递特殊符号(& = # %)中文 需要特殊编码

2.post :
        需要调用setRequestHeader(在open方法之后调用),将传递数据组织为xml格式
        中文无需编码，特殊符号需要
        可以同时传递get参数信息，$_GET接收

3.缓存处理:
    1.设置随机数 open(get,请求地址加随机数)
    2.给动态程序页面设置header头,禁止浏览器缓存