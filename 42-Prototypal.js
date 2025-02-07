// Prototypal Inheritance exercise

const user = {
  username: "jon",
  id: 2,
  introduction: function () {
    console.log(`Name : ${this.username} , id : ${this.id}`);
  },
};

const student = Object.create(user);
student.id = 10; // Override id

console.log(student.introduction());
// Name : jon , id : 10
