var student={
    name:"Mert" ,
    surname: "Ezgin",
    age: 22,
    department:"Software Engineering",
    introduce: function(){
        return ` Fullname: ${this.name} ${this.surname}\n Age: ${this.age}\n Department: ${this.department}`;
    }
};
console.log(student.introduce());
