
        /*
         The two most used data structures in JavaScript are Object and Array.

            =>Objects allow us to create a single entity that stores data items by key.
            =>Arrays allow us to gather data items into an ordered list.

        */
        //Destructuring also works great with complex functions that have a lot of parameters, default values, and so on.


        //Destructuring Array

        let name=["Yash","Patel",21,"Bilimora"];
        
        let[fname,lname,age,city]=name
        console.log(fname);
        console.log(lname);
        console.log(age);
        console.log(city);

        //Or

        let [firstName,lastName]="Meet Patel".split(" ");
        console.log(firstName);
        console.log(lastName);

        //Assign to anything at the left-side
        let user={};
        [user.name,user.age]="Yash 21".split(" ");
        console.log(user.name);
        console.log(user.age);

        //The rest ‘…’
        let[name1,name2,...rest]=["Yash","Mayur","Shiv","this is a rest operator"];
        console.log(name1);
        console.log(name2);
        console.log(rest[0]);
        console.log(rest[1]);

        //default value

        let [name3="Yash",name4="Patel"] =["Mayur"]
        console.log(name3); //from array
        console.log(name4); //default Value
