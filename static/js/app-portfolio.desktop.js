var Core;
! function(t) {
    var i = function() {
        function t() {
            this.preload = $(".preload"), this.init()
        }
        return t.prototype.init = function() {
            setTimeout(function() {
                this.preload.addClass("animated")
            }.bind(this), 1e3), setTimeout(function() {
                this.preload.remove(), this.Slider = new e
            }.bind(this), 5e3)
        }, t
    }();
    t.Kernel = i;
    var e = function() {
        function t() {
            this.durations = {
                auto: 5e3,
                slide: 2e3
            }, this.dom = {
                wrapper: null,
                container: null,
                project: null,
                current: null,
                next: null,
                bullet: null,
                knob: null,
                arrow: null,
                about: null
            }, this.links = ["https://r2vg.com/", "https://r2vg.com/", "https://r2vg.com/", "https://r2vg.com/", "https://r2vg.com/", "https://r2vg.com/"], this.infos = ["<li>《战地1》</li><li>PlayStation|Xbox|PC</li><li>第一人称射击</li>", "<li>《古墓丽影：崛起》</li><li>PlayStation|Xbox|PC</li><li>动作冒险</li>", "<li>《最后生还者》</li><li>PlayStation</li><li>动作冒险、生存恐怖</li>", "<li>《地平线：黎明时分》</li><li>PlayStation</li><li>动作冒险</li>", "<li>《侠盗猎车手V》</li><li>PlayStation|Xbox|PC</li><li>动作冒险|开放世界|沙盒式游戏</li>", "<li>《生化奇兵：无限》</li><li>PlayStation|Xbox|PC|macOS|Linux</li><li>第一人称射击游戏</li>"], this.length = 0, this.current = 0, this.next = 0, this.isAuto = !0, this.working = !1, this.dom.wrapper = $(".page-view"), this.dom.container = this.dom.wrapper.find(".game-slider"), this.dom.project = this.dom.container.find(".project"), this.dom.bullet = this.dom.container.find(".bullet"), this.dom.arrow = this.dom.container.find(".arrow"), this.dom.about = this.dom.wrapper.find(".about"), this.length = this.dom.project.length, this.about(), this.init(), this.events(), this.auto = setInterval(this.updateNext.bind(this), this.durations.auto)
        }
        return t.prototype.events = function() {
            var t = this;
            this.dom.arrow.on("click", function() {
                t.working || t.processBtn($(this))
            }), this.dom.bullet.on("click", function() {
                var i = t.dom.bullet.index($(this));
                t.working || (t.isAuto && (t.isAuto = !1, clearInterval(t.auto)), t.next = i, t.process(), t.changeUrl())
            });
            var i = document.querySelector(".game-slider"),
                e = new Hammer(i);
            e.on("swipe", function(i) {
                t.isAuto && (t.isAuto = !1, clearInterval(t.auto))
            }), e.on("swipeleft", function(t) {
                this.updateNext()
            }.bind(this)), e.on("swiperight", function(t) {
                this.updatePrevious()
            }.bind(this))
        }, t.prototype.about = function() {
            this.dom.about.on("click", function(t) {
                t.preventDefault(), $(".about-container").toggleClass("display").css("z-index", "99")
            }), $(".close").on("click", function() {
                $(".about-container").toggleClass("display"), setTimeout(function() {
                    $(".about-container").css("z-index", "0")
                }, 1100)
            })
        }, t.prototype.processBtn = function(t) {
            this.isAuto && (this.isAuto = !1, clearInterval(this.auto)), t.hasClass("next") && this.updateNext(), t.hasClass("previous") && this.updatePrevious()
        }, t.prototype.updateNext = function() {
            this.next = (this.current + 1) % this.length, this.process(), this.changeUrl()
        }, t.prototype.updatePrevious = function() {
            this.next--, this.next < 0 && (this.next = this.length - 1), this.process(), this.changeUrl()
        }, t.prototype.changeUrl = function() {
            document.getElementById("link").href = this.links[this.next], $(".infos").toggleClass("show"), setTimeout(function() {
                document.getElementById("infosKey").innerHTML = this.infos[this.next]
            }.bind(this), 1e3)
        }, t.prototype.process = function() {
            var t = this;
            this.working = !0, this.dom.next = $(this.dom.project[this.next]), this.dom.current.css("z-index", 30), t.dom.next.css("z-index", 20), this.dom.current.addClass("hide"), this.updateBullet(), setTimeout(function() {
                t.dom.current.css("z-index", 10), t.dom.next.css("z-index", 30), t.dom.current.removeClass("hide"), t.dom.current = t.dom.next, t.current = t.next, t.working = !1
            }, this.durations.slide)
        }, t.prototype.updateBullet = function() {
            $(this.dom.knob[this.current]).css("transition-duration", "0ms"), $(this.dom.bullet[this.current]).removeClass("current"), $(this.dom.knob[this.next]).css("transition-duration", this.isAuto ? this.durations.auto + "ms" : this.durations.slide + "ms"), $(this.dom.bullet[this.next]).addClass("current")
        }, t.prototype.init = function() {
            this.dom.project.css("z-index", 10), this.dom.current = $(this.dom.project[this.current]), this.dom.next = $(this.dom.project[this.current + 1]), this.dom.current.css("z-index", 30), this.dom.next.css("z-index", 20), this.dom.knob = this.dom.bullet.find(".knob"), this.dom.knob.css("transition-duration", this.durations.auto + "ms"), $(this.dom.bullet[this.current]).addClass("current")
        }, t.prototype.clear = function() {
            this.dom.arrow.off("click"), this.isAuto && clearInterval(this.auto)
        }, t
    }();
    t.Slider = e
}(Core || (Core = {})), document.addEventListener("DOMContentLoaded", function() {
    new Core.Kernel
});