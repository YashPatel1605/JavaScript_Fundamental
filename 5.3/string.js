
        //Strings
        //In JavaScript, the textual data is stored as strings.

        //String length
        let name="Yash Patel";
        alert(name.length);

        //Accessing characters

        let str = `Hello`;

        // the first character
        alert( str[0] ); // H
        alert( str.at(0) ); // H

       // the last character
       alert( str[str.length - 1] ); // o
       alert( str.at(-1) ); //o

       //Strings are immutable
       //Strings can’t be changed in JavaScript. It is impossible to change a character.
        
       let str1="Yash";
       str1[0]="y";
       alert(str1[0]);

       //Changing the case

       alert( 'yash'.toUpperCase() ); // YASH
       alert( 'YASH'.toLowerCase() ); // yash

       let str3 = 'Widget with id';
       alert( str3.indexOf('id', 2) ) // 12  //in these case value will be searching start at the 2 position


       //includes, startsWith, endsWith

       // str.includes(substr, pos) returns true/false depending on whether str contains substr within.
       let a="hello world!";
       console.log(a.includes('hello'));
       
       alert( "Widget".includes("id") ); // true
       alert( "Widget".includes("id", 3) ); // false, from position 3 there is no "id"

       alert( "Widget".startsWith("Wid") ); // true, "Widget" starts with "Wid"
       alert( "Widget".endsWith("get") ); // true, "Widget" ends with "get"


       //Getting a substring
       //There are 3 methods in JavaScript to get a substring: substring, substr and slice.

       let name1="yashkumar";
       console.log(name1.slice(0,4));  //yash
       console.log(name1.slice(4,8));  //kumar
       console.log(name1.slice(2));    //hkumar
       console.log(name1.slice(-5,-1)); //kuma



       //let str = "stringify";

       // these are same for substring
       alert( str.substring(2, 6) ); // "ring"
       alert( str.substring(6, 2) ); // "ring"

       // ...but not for slice:
       alert( str.slice(2, 6) ); // "ring" (the same)
       alert( str.slice(6, 2) ); // "" (an empty string)


       let str4 = "stringify";
       alert( str4.substr(2, 4) ); // 'ring', from the 2nd position get 4 characters



       
//     method	                                  selects                               negatives
// slice(start, end)	         from start to end (not including end)	              allows negatives
// substring(start, end)	     between start and end (not including end)	          negative values mean 0
// substr(start, length)	     from start get length characters	                  allows negative start
