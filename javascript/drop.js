/**
 *
 * 1.获取对象
 * 2.遍历对象操作
 * 3.显示模块
 * 4，隐藏模块
 */


function List(id) {     // 获取对象
    this.id = document.getElementById(id);
    // 获取
    this.lis = this.id.children[0].children;        // 获取一级菜单所有的li
}

// 初始化
List.prototype.init = function(){       // 遍历所有li显示隐藏
    var self = this;
    for(var i=0;i<this.lis.length;++i){
        // 获得索引号
        this.lis[i].index = i;
        this.lis[i].onmouseover = function () {
            self.show(this.children[0]);
        };
        this.lis[i].onmouseout = function () {
            self.hide(this.children[0]);
        }


    }
};

// 显示模块
List.prototype.show=function(obj){
    obj.style.display='block';
};
// 隐藏模块
List.prototype.hide=function(obj){
    obj.style.display='none';
};
var list = new List("list");
list.init();