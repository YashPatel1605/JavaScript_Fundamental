
        //Count properties

        /*
        let user = {
            name: 'John',
            age: 30
        };
       alert( count(user) ); // 2
        */

        let user = {
            name: 'John',
            age: 30
        };
        function count(user){
            console.log(Object.keys(user).length); 
        }

        count(user);
