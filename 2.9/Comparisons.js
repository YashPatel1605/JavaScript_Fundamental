
        // true – means “yes”, “correct” or “the truth”.
        // false – means “no”, “wrong” or “not the truth”.

        alert( 2 > 1 );  // true 
        alert( 2 == 1 ); // false
        alert( 2 != 1 ); // true 

        alert( 'Z' > 'A' ); // true
        alert( 'Glow' > 'Glee' ); // true
        alert( 'Bee' > 'Be' ); // true


        //the lower case "a" is greter than the upper case "A"

        //Comparison of different types

        alert( '2' > 1 ); // true,
        alert( '01' == 1 ); // true

        alert( true == 1 ); // true
        alert( false == 0 ); // true

        //Comparison with null and undefined

        alert( null === undefined ); // false
        alert( null == undefined ); // true


        //Strange result: null vs 0

        alert( null > 0 );  // false
        alert( null == 0 ); // false
        alert( null >= 0 ); // true
