var Component = /** @class */ (function () {
    function Component() {
    }
    Component.create = function (target, name) {
        customElements.define(target, name);
    };
    Component.prototype.get = function () {
        return '1';
    };
    return Component;
}());
export { Component };
//# sourceMappingURL=Component.js.map