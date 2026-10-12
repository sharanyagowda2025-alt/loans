function orderSummary(customerId, category, orderAmount, location) {
  let discount = 0;
  let remarks = "";

  // Membership discount
  if (category === "Premium") {
    discount = 0.15 * orderAmount;
  } else if (category === "Regular") {
    discount = 0.05 * orderAmount;
  }

  // Extra discount for orders above 5000
  if (orderAmount > 5000) {
    discount += 500;
  }

  // Cap discount at 20% of order amount
  const maxDiscount = 0.20 * orderAmount;
  if (discount > maxDiscount) {
    discount = maxDiscount;
    remarks = "Discount capped at 20% of order amount.";
  }

  // Delivery charges
  let deliveryCharge = 0;
  if (orderAmount < 3000) {
    if (location === "Local") {
      deliveryCharge = 100;
    } else {
      deliveryCharge = 200;
    }
  }

  // Final payable amount
  const finalAmount = orderAmount - discount + deliveryCharge;

  return {
    "Customer ID": customerId,
    "Customer Category": category,
    "Original Order Amount": orderAmount,
    "Discount Amount": discount,
    "Delivery Charge": deliveryCharge,
    "Final Payable Amount": finalAmount,
    "Order Summary": remarks || "Order processed successfully."
  };
}

// Example usage
const result = orderSummary("CUST501", "Premium", 6000, "Local");
console.log(result);
