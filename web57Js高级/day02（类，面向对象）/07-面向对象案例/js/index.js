var that
class Tab {
    constructor(id) {
        this.tab = document.querySelector(id)
        this.lis = this.tab.querySelectorAll("li")
        this.sec = this.tab.querySelectorAll("section")
        that = this
        this.add_ = this.tab.querySelector(".tabadd")
        this.ul = this.tab.querySelector("ul")
        this.content = this.tab.querySelector(".tabscon")
        this.init()
        this.toggle()
        this.add()
    }
    init() {
        for (var i = 0; i < this.lis.length; i++) {
            this.lis[i].index = i
            this.lis[i].onclick = function () {
                // console.log(this.index);
            }
        }
        for (var i = 0; i < this.sec.length; i++) {
            this.sec[i].index = i
            this.sec[i].onclick = function () {
                // console.log(this.index);
            }
        }
    }
    toggle() {
        for (var i = 0; i < this.lis.length; i++) {
            this.lis[i].index = i
            this.lis[i].onclick = function () {
                for (var j = 0; j < that.lis.length; j++) {
                    that.lis[j].classList.remove("liactive")
                    that.sec[j].classList.remove("conactive")
                }
                this.classList.add("liactive")
                that.sec[this.index].classList.add("conactive")
                
            }
        }
    }
    add() {
        this.add_.onclick = function () {
            var li = document.createElement("li")
            var section = document.createElement("section")
            var span = document.createElement("span.iconfont icon-guanbi")
            li.innerText = "xxx"
            section.innerText = "xxx"
            that.ul.appendChild(li)
            that.content.appendChild(section)
        }
    }
}
new Tab("#tab")