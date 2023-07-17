console.log('// Providing a getter for toStringTag')
{
  class Employee {
  constructor(name, salary) {
    this.name = name; this.salary = salary;
  }
    get [Symbol.toStringTag]() { return JSON.stringify(this) }
  }


  const harry = new Employee('Harry Smith', 100000)
  console.log(harry.toString())  
}

console.log('// Customizing the behavior of toString')
{
  const harry = { name: 'Harry Smith', salary: 100000 }
  harry[Symbol.toStringTag] = JSON.stringify(harry)
  console.log(harry.toString())
    // Now toString yields '[object Employee]
  
}