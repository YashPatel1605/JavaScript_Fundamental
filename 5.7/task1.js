
        //Let arr be an array.
        //Create a function unique(arr) that should return an array with unique items of arr.
        /*
        function unique(arr) {
         }

        let values = ["Hare", "Krishna", "Hare", "Krishna",
            "Krishna", "Krishna", "Hare", "Hare", ":-O"
        ];

        alert(unique(values));
        */
        let values = ["Hare", "Krishna", "Hare", "Krishna",
            "Krishna", "Krishna", "Hare", "Hare", ":-O"];
        function unique(arra){
            console.log(Array.from(new Set(arra)));
        };
        unique(values);