// Task 1: Customer Discounts

let purchaseAmount = 199
if (purchaseAmount > 100) {
    let discount = purchaseAmount * 0.09; // Implemented an if statement to check if the purchase amount exceeds $100; if true, a 9% discount is applied.
    purchaseAmount -= discount;
}
console.log(`Final amount after discount: $${purchaseAmount}`);
