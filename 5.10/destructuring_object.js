
        let message = {
            name: "Yash",
            age: 21,
            city: "Bilimora"
        };
        let { name, age, city } = message
        console.log(name);
        console.log(age);
        console.log(city);

        let options = {
            title: "Menu",
            width: 100,
            height: 200
        };

        // { sourceProperty: targetVariable }
        let { width: w, height: h, title } = options;

        // width -> w
        // height -> h
        // title -> title

        console.log(title);  // Menu
        console.log(w);      // 100
        console.log(h);      // 200


        //The Rest Operator
        let mess={
            fname:"Yash",
            lname:"Patel",
            age:21,
            city:"Bilimora",
        }
        let{fname,...rest}=mess;
        console.log(fname);
        console.log(rest.lname);
        console.log(rest.age);
        console.log(rest.city);
