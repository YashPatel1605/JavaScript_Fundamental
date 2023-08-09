
        /*
        Write the destructuring assignment that reads:

        name property into the variable name.
        years property into the variable age.
        isAdmin property into the variable isAdmin (false, if no such property)

        */

        let user = { fname: "John", years: 30 };

        // your code to the left side:
        // ... = user
        let{fname,year,isAdmin=false}=user;

        alert(fname); // John
        alert(age); // 30
        alert(isAdmin); // false
