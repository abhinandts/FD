const person1 = {
    fName: "Melvin",
    lName: "Cherian"
}

const person2 = {
    fName: "Vishnu",
    lName: "P",
}

const printFullName = function (place,state) {
    console.log(this.fName, this.lName,"from",place,",",state)
}

printFullName.call(person1,"Kottayam","Kerala")
printFullName.call(person2,"Kakodi","Kozhikode")

printFullName.apply(person1,["Kottayam","Kerala"])

const print = printFullName.bind(person1,"kotayam","Kerala")
print();