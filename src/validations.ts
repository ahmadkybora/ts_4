export class Validations {

    static string(value: any): boolean {
        if(typeof(value) === "string")
            return true;
        return false
    }
}