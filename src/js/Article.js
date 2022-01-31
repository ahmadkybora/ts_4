//----------------------1---------------------------
// <T extends HTMLElement, U extends HTMLElement>
// generic types
// در این روش میتوانیم نوع داده ای را هر جور که خواستیم
// بدهیم بطور مثال عدد میدهیم و عدد میگیریم
// و یا هر چیزی دیگری در اصل
// generic types
// باعث میشود که تابع ما عمومی تر شود نسبت به تایپ 
// any
//----------------------2---------------------------
// طبق قوانین تایپ اسکریپت نمیتوان ابسترکت کلاس ها را اگپکسپورت کرد
var Component = /** @class */ (function () {
    function Component() {
    }
    return Component;
}());
var Article = /** @class */ (function () {
    function Article() {
        // بوسیله 2 روش زیر میتوان به
        // دام دسترسی داشت در صورتی که
        // نوع داده ای رامشخص کنید
        // this.first_name = document.getElementById('first-name') as HTMLInputElement;
        // this.last_name = <HTMLInputElement>document.getElementById('last-name')!;
        // تویجه کنید تایپ اسکریپت نمیتواند 
        // تشخیص دهد که متغییر مورد نظر از نو ع چه داد های است
        // مثلا بطور مثال دکمه است فیلد است یا غیره
        // که باید تایپ آن را مشخص کنیم
        this.first_name = "";
        this.last_name = "";
        this.username = "";
        this.user = {
            first_name: "",
            last_name: "",
            username: "",
        };
        // var inputValue = (<HTMLInputElement>document.getElementById(elementId)).value;
        // this.first_name = document.getElementById('first-name') as HTMLInputElement;
        // this.last_name = document.getElementById('last-name') as HTMLInputElement;
        // this.username = document.getElementById('username') as HTMLInputElement;
        this.handleClick();
    }
    // selectorID(id: any) {
    //     (document.getElementById(id) as HTMLInputElement).value;
    //     this.first_name.value
    // }
    Article.prototype.html = function () {
        return "\n            <form>\n                <input type=\"text\" name=\"first_name\" id=\"first-name\" value=\"".concat(this.first_name, "\" />\n                <input type=\"text\" name=\"last_name\" id=\"last-name\" value=\"").concat(this.last_name, "\" />\n                <input type=\"text\" name=\"username\" id=\"username\" value=\"").concat(this.username, "\" />\n                <button type=\"submit\">Login</button>\n            </form>\n        ");
    };
    Article.prototype.handleClick = function () {
        var _this = this;
        document.addEventListener('submit', function (e) {
            e.preventDefault();
            var first_name = document.getElementById("first-name").value;
            var last_name = document.getElementById("last-name").value;
            var username = document.getElementById("username").value;
            _this.first_name = first_name;
            _this.last_name = last_name;
            _this.username = username;
            console.log(_this.first_name, _this.last_name, _this.username);
        });
    };
    Article.prototype.getm = function () {
        // this.first_name = this.selectorID("first-name");
        // this.first_name = this.selectorID("last-name");
        // this.first_name = this.selectorID("username");
    };
    return Article;
}());
export { Article };
//# sourceMappingURL=Article.js.map