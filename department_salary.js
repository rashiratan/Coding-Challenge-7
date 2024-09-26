//Task 1: Create a Department Structure

const company = {
    departments: [
    {departmentName: 'IT', employees: [
        {name: 'Alisha', salary: 120000, subordinates: [
            {name: 'Gavin', salary: 85000, subordinates: [
                {name: 'Josh', salary: 62000, subordinates: []},
                {name: 'Jack', salary: 62500, subordinates: []},
                {name: 'Warren', salary: 62700, subordinates: []}]
            },
            {name: 'Devin', salary: 83000, subordinates: [
                {name: 'Charles', salary: 45000, subordinates: []},
                {name: 'Francesco', salary: 42300, subordinates: []},
                {name: 'John', salary: 47000, subordinates: []}]
            },
            {name: 'Alex', salary: 78000, subordinates: [
                {name: 'Barbara', salary: 54000, subordinates: []},
                {name: 'Victor', salary: 56200, subordinates: []}]
            }]
        },
        {name: 'Frank', salary: 97000, subordinates: [
            {name: 'Peter', salary: 76500, subordinates: [
                {name: 'Harry', salary: 59800, subordinates: []},
                {name: 'Tracy', salary: 64570, subordinates: []}]
            },
            {name: 'Lisa', salary: 89050, subordinates: [
                {name: 'Xavier', salary: 56800, subordinates: []},
                {name: 'Rachel', salary: 59400, subordinates: []},
                {name: 'Nathan', salary: 51200, subordinates: []}]
            },
            {name: 'Alan', salary: 85600, subordinates: [
                {name: 'Derek', salary: 64500, subordinates: []},
                {name: 'Edward', salary: 61400, subordinates: []}]
            }
        ]
        }]
    },
    {departmentName: 'Marketing', employees: [
        {name: 'Mason', salary: 92000, subordinates: [
            {name: 'Grant', salary: 74500, subordinates: [
                {name: 'Michael', salary: 53200, subordinates: []},
                {name: 'Monica', salary: 54520, subordinates: []},
                {name: 'Yves', salary: 57800, subordinates: []}  
            ]},
            {name: 'Hernando', salary: 87860, subordinates: [
                {name: 'Steve', salary: 68960, subordinates: []},
                {name: 'Travis', salary: 64500, subordinates: []}
        ]}]},
        {name: 'Marley', salary: 94530, subordinates: [
            {name: 'Helen', salary: 75200, subordinates: [
                {name: 'Amber', salary: 57800, subordinates: []},
                {name: 'Jacky', salary: 54560, subordinates: []},
                {name: 'Nancy', salary: 54550, subordinates: []}  
            ]},
            {name: 'Troy', salary: 85960, subordinates: [
                {name: 'Graham', salary: 64520, subordinates: []},
                {name: 'Evelyn', salary: 67420, subordinates: []}
        ]}
        ]}]
        }
    ]
};
//creating a huge hierarchial structure for the function to work with

//Task 2
function calculateDepartmentSalary(departmentInfo) {
    let totalSalary =0; //intializing the variable
    departmentInfo.employees.forEach((employee) => {
         //going into each employee in the provided department object
     totalSalary += employee.salary; 
     //adding each employee's salary to the variable
    if (employee.subordinates.length > 0) { 
        //checking if the employee has any suvbordinates
         totalSalary += calculateDepartmentSalary({employees: employee.subordinates});}
    });
    return totalSalary; //returning the total value after all loops and recursion
 };

 //Task 3
function calculateCompanySalary(company){
    let totalCompanySalary = 0; //initializing variable
    company.departments.forEach((department) => totalCompanySalary += calculateDepartmentSalary(department));
    //using the calculateDepartmentSales function on each department
    //and also adding the value to the initialized variable
    return totalCompanySalary;
    //outputting the total value after recursion
}

//testing function and logging results
console.log(`The department salary for "Marketing" department is $${calculateDepartmentSalary(company.departments[1])}.`);
console.log(`The salary for the company is $${calculateCompanySalary(company)}.`)