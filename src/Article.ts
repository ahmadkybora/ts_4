import { Validations } from './validations'
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
abstract class Component<T extends HTMLElement, U extends HTMLElement> {}

export class Article {
    // تویجه کنید تایپ اسکریپت نمیتواند 
    // تشخیص دهد که متغییر مورد نظر از نو ع چه داد های است
    // مثلا بطور مثال دکمه است فیلد است یا غیره
    // که باید تایپ آن را مشخص کنیم
    first_name: string = "";
    last_name: string = "";
    username: string = "";

    user: object = {
        first_name: "",
        last_name: "",
        username: "",
    }
    
    constructor() {
        // بوسیله 2 روش زیر میتوان به
        // دام دسترسی داشت در صورتی که
        // نوع داده ای رامشخص کنید
        // this.first_name = document.getElementById('first-name') as HTMLInputElement;
        // this.last_name = <HTMLInputElement>document.getElementById('last-name')!;

        // var inputValue = (<HTMLInputElement>document.getElementById(elementId)).value;
        
        // this.first_name = document.getElementById('first-name') as HTMLInputElement;
        // this.last_name = document.getElementById('last-name') as HTMLInputElement;
        // this.username = document.getElementById('username') as HTMLInputElement;

        this.handleClick()
    }

    // selectorID(id: any) {
    //     (document.getElementById(id) as HTMLInputElement).value;
    //     this.first_name.value
    // }

    html() {
        return `
            <form>
                <input type="text" name="first_name" id="first-name" value="${this.first_name}" />
                <input type="text" name="last_name" id="last-name" value="${this.last_name}" />
                <input type="text" name="username" id="username" value="${this.username}" />
                <button type="submit">Login</button>
            </form>
        `;
    }

    handleClick() {
        document.addEventListener('submit', (e: Event) => {
            e.preventDefault();
            const first_name = (document.getElementById("first-name") as HTMLInputElement).value;
            const last_name = (document.getElementById("last-name") as HTMLInputElement).value;
            const username = (document.getElementById("username") as HTMLInputElement).value;

            this.first_name = first_name;
            this.last_name = last_name;
            this.username = username;

            console.log(this.first_name, this.last_name, this.username);

        });
      }

    getm() {
        // this.first_name = this.selectorID("first-name");
        // this.first_name = this.selectorID("last-name");
        // this.first_name = this.selectorID("username");
    }
}