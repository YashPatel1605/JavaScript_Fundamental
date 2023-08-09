
        let message = {
            name: "Yash",
            age: 21,
            city: "Bilimora"
        };
        for (let mess of Object.values(message)) {
            console.log(mess);
        };
        for (let mess of Object.keys(message)) {
            console.log(mess);
        };
        for (let mess of Object.entries(message)) {
            console.log(mess);
        };

        //Transforming objects

        let value = {
            banana: 1,
            orange: 2,
            meat: 4,
        };

        let doublevalue = Object.fromEntries(
            // convert value to array, map each key/value pair into another pair
            // and then fromEntries gives back the object
            Object.entries(value).map(entry => [entry[0], entry[1] * 2])
        );

        alert(doublevalue.meat); // 8
