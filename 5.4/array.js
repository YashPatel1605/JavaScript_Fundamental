
        //Arrays
        //There exists a special data structure named Array, to store ordered collections.

        //Declaration
        //There are two syntaxes for creating an empty array

        let arr=new Array();
        let arra=[];

        let name=["Yash","Mayur","Shiv","Hiral"];
        console.log(name[0]);
        console.log(name[1]);
        console.log(name[2]);
        console.log(name[3]);
        name[3]="Meet";
        console.log(name);

        console.log(name.length)

        console.log(name[name.length-1]);
        //or
        console.log(name.at(-1));



        //Methods pop/push, shift/unshift
        

        let userName=["Meet","Jay","Vill","Ayush"];

        console.log(userName.push("Shivam"));
        console.log(userName);
        console.log(userName.pop());


        // shift/unshift

        console.log(userName.shift());
        console.log(userName.unshift("Yash"));
        console.log(userName);

        //Methods push/pop run fast, while shift/unshift are slow.

        //toString

        alert( [] + 1 ); // "1"
        alert( [1] + 1 ); // "11"
        alert( [1,2] + 1 ); // "1,21"

        alert( [] == [] ); // false
        alert( [0] == [0] ); // false

        alert( 0 == [] ); // true
        alert('0' == [] ); // false

