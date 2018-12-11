const {
    foo,
    bar,
    students
} = require('./students.js')

console.log(foo(), bar())

for (let student of students) {
    console.log('Name: ' + student.name + '\n' + 'Subject: ' + student.subject + '\n')
}