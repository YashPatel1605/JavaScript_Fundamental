//Optional_Chaining '?.'

//optional chaining is a feacture in JavaScript that allows you to Access property of an object or element of an array without having to check weather the object or array is null or undefind first

//it can be represented by the ?.

    const user={
        name:"Yash",
        age:21,
        address:{
            city:"bilimora",
            state:"Gujarat",
            pinNo:396310
        },
    };
    console.log(user.address?.city?.xyz?.abc);

    //optional chaining can also be used to access element of an array in javaScript

    const student=[
        {name:"Yash",age:21},
        {name:"Mayur",age:23},
        {name:"hiral",age:24},
        ];

        console.log(student[0].name);
        console.log(student[3]?.name);
    


