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
} // Implemented a `for` loop to calculate the total revenue if all sales are completed.
console.log(`Total sales: $${totalSales}`);
