let basicSalary = parseFloat(prompt("Enter your basic salary."));
let benefits = parseFloat(prompt('Enter your benefits amount.'));

let payeeRate =  0.3;
let nhifRate = 0.015;
let nssfRate = 0.06;


let payee = basicSalary * payeeRate;
let nhifDeductions = basicSalary * nhifRate;
let nssfDeductions = basicSalary * nssfRate;
let grossSalary = basicSalary + benefits;
let netSalary = grossSalary - (payee + nssfDeductions + nhifDeductions);
 

document.write('Your net salary is  ' + netSalary);