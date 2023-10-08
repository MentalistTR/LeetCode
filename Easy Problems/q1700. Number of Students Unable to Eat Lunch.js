var countStudents = function(students, sandwiches) {
    let count = 0

    while(sandwiches.length > 0) {
        if(students[0] === sandwiches[0]) {
            students.shift();
            sandwiches.shift();
            count = 0
        }
        else {
            students.push(students.shift());
            count++
            if(count === students.length) {
                break
            }
        }
    }
    return students.length  
};