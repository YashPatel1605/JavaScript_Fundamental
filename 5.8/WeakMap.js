
        //WeakMap
        //The first difference between Map and WeakMap is that keys must be objects, not primitive values:

        let wp = new WeakMap();
        let obj1 = { "name": "Yash", "age": 21 };
        let obj2 = { "name": "mayur", "age": 23 };
        console.log(wp.set(obj1));
        console.log(wp.set(obj2));
        //console.log(wp.set(1)); //return error only object will be stored
        console.log(wp.has(obj1)); //true
        console.log(wp.delete(obj1))

        //WeakSet
        //It is analogous to Set, but we may only add objects to WeakSet(not primitives).
        //An object exists in the set while it is reachable from somewhere else.
        //Like Set, it supports add, has and delete, but not size, keys() and no iterations.


        let ws = new WeakSet();

        let Shiv = { name: "Shiv" };
        let Hiral = { name: "Hiral" };
        let jaivik = { name: "jaivik" };

        ws.add(Shiv); // Shiv visited us
        ws.add(Hiral); // Then Hiral
        ws.add(Shiv); // Shiv again

        // ws has 2 users now

        // check if Shiv visited?
        console.log(ws.has(Shiv)); // true

        // check if jaivik visited?
        console.log(ws.has(jaivik)); // false
