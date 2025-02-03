// Task 1: Customer Discounts

let purchaseAmount = 199
if (purchaseAmount > 100) {
    let discount = purchaseAmount * 0.09; // Implemented an if statement to check if the purchase amount exceeds $100; if true, a 9% discount is applied.
    purchaseAmount -= discount;
}
console.log(`Final amount after discount: $${purchaseAmount}`);

// Task 2: Sales Report

let sales = [199, 49, 79, 249, 507];
let totalSales = 0;
for (let i = 0; i < sales.length; i++) {
    totalSales += sales[i];
} // Implemented a for loop to calculate the total revenue if all sales are completed.
console.log(`Total sales: $${totalSales}`);

// Task 3: Inventory Depletion

for (let stock = 10; stock > 0; stock--) {
    console.log(`Stock remaining: ${stock}`);
} // Created a descending for loop starting from 10, 9, 8, and so on, decreasing until the inventory runs out.
console.log("Stock is empty.");

// Task 4: Customer Survey

let responses = 0;
do {
    responses++;
    console.log(`Collected response: ${responses}`);
} while (responses < 3);
// Created a do...while loop that runs from 1 to 3 in ascending order and terminates after completing the sequence.

// Task 5: Employee Information

let employee = { name: "Alice", position: "Manager", salary: 75000 };
for (let key in employee) {
    console.log(`${key}: ${employee[key]}`);
} // Created a for...in loop to display the employee's details, including their position and salary.
