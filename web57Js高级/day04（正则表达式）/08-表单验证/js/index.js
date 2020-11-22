window.addEventListener("load",function(){
    var reg_tel = /^1(3(0|1|2|3|4|5|6|7|8|9)|4(5|7)|5(0|1|2|3|4|5|6|7|8|9)|8(0|1|2|3|4|5|6|7|8|9))\d{8}$/
    var reg_qq = /^(\d{6}|\d{7}|\d{8}|\d{9}|\d{10}|\d{11})$/
    var reg_nc=/^[\u4e00-\u9fa5]{1,}$/
    var reg_msg = /^\d{6}$/
    var reg_pwd = /^\w{6,16}$/
    var tel = document.querySelector("#tel")
    var qq = document.querySelector("#qq")
    var nc = document.querySelector("#nc")
    var msg = document.querySelector("#msg")
    var pwd = document.querySelector("#pwd")
    var ul = document.querySelector("ul")
    regexp(tel,reg_tel)
    regexp(qq,reg_qq)
    regexp(nc,reg_nc)
    regexp(msg,reg_msg)
    regexp(pwd,reg_pwd)
    function regexp(ele,reg) {
        ele.onblur = function(){
            if(reg.test(this.value)){
                this.nextElementSibling.innerHTML = "<i class='success_icon'></i>输入格式正确"
                this.nextElementSibling.className = ("success")
            }else {
                this.nextElementSibling.innerHTML = "<i class='error_icon'></i>输入格式不正确，请重新输入"
                this.nextElementSibling.className = ("error")
            }
            ele.onfocus = function(){
                this.nextElementSibling.innerHTML = ""
                // for(var i = 0 ;i < ul.children.length ; i++){
                //     ul.children[i].children[2].innerHTML = ""
                // }
            }
        }
    }
    var surepwd = document.querySelector("#surepwd")
    surepwd.onblur = function() {
        if(surepwd.value === pwd.value) {
            this.nextElementSibling.innerHTML = "<i class='success_icon'></i>输入正确"
            this.nextElementSibling.className = ("success")  
        }else {
            this.nextElementSibling.innerHTML = "<i class='error_icon'></i>密码不一致，请重新确认"
            this.nextElementSibling.className = ("error")
        }
    }
})