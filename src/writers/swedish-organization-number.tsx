import IWriter from '../interfaces/writer';
import Luhn from 'luhn-js';

export default class SwedishOrganizationNumber implements IWriter {
    write(): String {
        let result = new Array<Number>();
        result[0] = this.random(1,9);
        result[1] = this.random(0,9); 
        result[2] = this.random(2,9);
        result[3] = 0;

        for (let i = 4; i < 9; i++)
        {
            result[i] = this.random(0,9);
        }
        let numbers = result.join('');
        var remainder = Luhn.getRemainder(numbers);
        result[9] = remainder;
        return result.join('');
    }

    private random(min : number, max :number) : Number{
        return Math.floor(Math.random() * (max - min + 1) + min);
    }
}

