const user = {
    id: 123,
    name: {
        firstName: "Shakhawat",
        middleName: "Hossain",
        lastName: "Arman"
    },
    gender: "male",
    favColor: "black"
}


const {favColor:color} = user;
console.log(color)