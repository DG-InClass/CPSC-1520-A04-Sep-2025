// node --watch about-passing-objects.js
const primitiveGradeReporting = function(studentName, age, mark) {
    console.log(`${studentName} is ${age} years old and earned a ${mark}%`);
}

primitiveGradeReporting('Alice', 21, 86);
// Whoops - parameter order problems below...
primitiveGradeReporting('Mark', 85, 22);
// This is a classic "transpositional error"
// where we are erroneously putting values
// in the wrong position when we call the function.

// There is ONE parameter in the following function.
// It's an object.
// BUT, we are Deconstructing that object/parameter
// into three variables that "map" to the expected
// properties on the ONE object we expect.
const objectGradeReporting = function({studentName, age, mark}) {
    console.log(`${studentName} is ${age} years old and earned a ${mark}%`);
}

console.log();
objectGradeReporting({ studentName: 'Alice', age: 21, mark: 86});
// As I call the code below, I can more easily see where
// each data item should go.
objectGradeReporting({ studentName: 'Mark', mark: 85, age: 22 });

let student = { studentName: 'Stew', age: 20, mark: 92 };
objectGradeReporting(student);
