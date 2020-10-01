function Temperature(doc) {
    this.doc = doc;

    this.getDoc = function () {
        return doc;
    }
    this.changeFahrenheit = function () {
        let fahrenheit = ( 1.8 *this.doc + 32);
         return fahrenheit;
}
    this.changeKelvin = function () {
        let kelvin = this.doc + 273.15 ;
        return kelvin;
    }
}
let tem1 = new Temperature(25);
let a = tem1.getDoc();
alert(a+ " độ C = " + tem1.changeFahrenheit() + " độ F");
alert(a+ " độ C = " + tem1.changeKelvin() + " độ K");