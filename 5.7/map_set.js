//Map and Set

        /*Objects are used for storing keyed collections.
        Arrays are used for storing ordered collections.
        But that’s not enough for real life. That’s why Map and Set also exist.*/

        //Map

        //Map is a collection of keyed data items, just like an Object. But the main difference is that Map allows keys of any type.

        /*
        Methods and properties are:
        
        new Map() – creates the map.
        map.set(key, value) – stores the value by the key.
        map.get(key) – returns the value by the key, undefined if key doesn’t exist in map.
        map.has(key) – returns true if the key exists, false otherwise.
        map.delete(key) – removes the element (the key/value pair) by the key.
        map.clear() – removes everything from the map.
        map.size – returns the current element count.
        */

        let data = new Map();
        data.set(1, "Yash");
        data.set("1", "Mayur");
        data.set(true, "boolean");
        console.log(data.get(1));
        console.log(data.get("1"));
        console.log(data.get(true));
        console.log(data.has("1"));
        console.log(data.delete(1));
        console.log(data);

        //Iteration over Map
        // For looping over a map, there are 3 methods:

        // map.keys() – returns an iterable for keys,
        //     map.values() – returns an iterable for values,
        //         map.entries() – returns an iterable for entries[key, value], it’s used by default in for..of.


        let recipeMap = new Map([
            ['Yash', 100],
            ['Mayur', 250],
            ['Shiv', 170]
        ]);

        for(let names of recipeMap.keys()){
            console.log(names);
        }
        for(let num of recipeMap.values()){
            console.log(num);
        }
        for(let mess of recipeMap){
            console.log(mess);
        }



        //Set
        //Set Method Duplicate value has to be Remove

        let message=new Set();
        message.add("Yash");
        message.add("mayur");
        message.add(123);
        message.add("hello World!");
        message.add(789);
        message.add("Shiv");
        message.add("Shiv");
        message.add("Shiv");
        message.add(456);
        console.log(message);

        console.log(message.has(123));
        console.log(message.delete("Shiv"));
        console.log(message);
        for(let mess of message){
            console.log(mess);
        }
        //or
        message.forEach((item)=>{
            console.log(item);
        });
