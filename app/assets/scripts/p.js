var $ = require('jquery');
//var Person = require('./modules/Person');
import Person from './modules/Person';

class Adult extends Person {
    payTaxes() {
        alert(this.name + " must now pay taxes.");
    }
}

//creates new object
var john = new Person("Alannah Holder", "green");
john.greet();

var jane = new Adult("Charles", "Ekunwe");
jane.greet();
jane.payTaxes();
