
        //Sum the properties
        /*
        let salaries = {
       "John": 100,
       "Pete": 300,
       "Mary": 250
     };
        alert( sumSalaries(salaries) ); // 650
        */


        let salaries = {
            "John": 100,
            "Pete": 300,
            "Mary": 250
        };
        let sum = 0;
        function sumSalaries(salaries) {
            for (let value of Object.values(salaries)) {
                sum += value;
            }
            console.log(sum);
        }
        sumSalaries(salaries);

        /*
        // reduce loops over array of salaries,
        // adding them up
        // and returns the result

    function sumSalaries(salaries) {
      return Object.values(salaries).reduce((a, b) => a + b, 0) // 650
    }
        */
