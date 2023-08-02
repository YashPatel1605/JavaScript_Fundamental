
        //Number

        //Regular numbers in JavaScript are stored in 64-bit format
        //BigInt numbers represent integers of arbitrary length.

        //More ways to write a number

        //let billion = 1000000000;
        //let billion = 1_000_000_000;

        //In JavaScript, we can shorten a number by appending the letter "e" to it and specifying the zeroes count:

        let numbe=1e9;
        console.log(numbe);

        /*
        1e3 === 1 * 1000; // e3 means *1000
        1.23e6 === 1.23 * 1000000; // e6 means *1000000
        */


        // -3 divides by 1 with 3 zeroes
        1e-3 === 1 / 1000; // 0.001

        // -6 divides by 1 with 6 zeroes
        1.23e-6 === 1.23 / 1000000; // 0.00000123

        // an example with a bigger number
        1234e-2 === 1234 / 100; // 12.34, decimal point moves 2 times


        //Hex, binary and octal numbers

        alert( 0xff ); // 255
        alert( 0xFF ); // 255 (the same, case doesn't matter)

        //Binary and octal numeral systems are rarely used, but also supported using the 0b and 0o prefixes:

        let a = 0b11111111; // binary form of 255
        let b = 0o377; // octal form of 255

        alert( a == b ); // true, the same number 255 at both sides

        //Rounding

        //             Math.floor	Math.ceil	Math.round	Math.trunc
	    //     3.1         3            4           3           3
  	    //     3.6         3            4           4           3
		//    -1.1        -2           -1          -1          -1
	    //    -1.6        -2           -1          -2          -1

        let num = 1.23456;
        alert( Math.round(num * 100) / 100 ); // 1.23456 -> 123.456 -> 123 -> 1.23

        //tofixed()
        //toFixed always returns a string
        let num1 = 12.34;
        alert(num1.toFixed(1)); // "12.3"


        let num2 = 12.36;
        alert(num2.toFixed(1)); // "12.4"

        let num3=12.34;
        alert( num3.toFixed(5) ); // "12.34000", added zeroes to make exactly 5 digits


        //parseInt returns an integer, whilst parseFloat will return a floating-point number:

        alert( parseInt('100px') ); // 100
        alert( parseFloat('12.5em') ); // 12.5

        alert( parseInt('12.3') ); // 12, only the integer part is returned
        alert( parseFloat('12.3.4') ); // 12.3, the second point stops the reading

        alert( parseInt('a123') ); // NaN, the first symbol stops the process