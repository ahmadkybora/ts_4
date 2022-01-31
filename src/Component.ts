export class Component{

    static create(target: any, name: any) {
        customElements.define(target, name);
    }

    get() {
        return '1';
    }
}