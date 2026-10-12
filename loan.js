function loanPreScreening(customerId, employmentType, monthlyIncome, 
                          requestedLoan, existingEmi, creditScore) {
    let remarks = "";
    let eligibility = "No";
    let category = "Not Eligible";

    // EMI burden check (40% of income)
    const maxEmiAllowed = 0.4 * monthlyIncome;
    if (existingEmi > maxEmiAllowed) {
        remarks = "Existing EMI exceeds permissible limit.";
        return {
            "Customer ID": customerId,
            "Employment Type": employmentType,
            "Monthly Income": monthlyIncome,
            "Credit Score": creditScore,
            "Existing EMI": existingEmi,
            "Loan Eligibility": eligibility,
            "Eligibility Category": category,
            "Remarks": remarks
        };
    }

    // Credit score and income rules
    if (monthlyIncome >= 30000) {
        if (creditScore >= 750) {
            eligibility = "Yes";
            category = "Standard";
            remarks = "Eligible under standard category.";
        } else if (creditScore >= 650 && creditScore < 750) {
            eligibility = "Yes";
            category = "Restricted";
            remarks = "Eligible under restricted category.";
        } else {
            remarks = "Credit score too low.";
        }
    } else {
        remarks = "Income below minimum requirement.";
    }

    return {
        "Customer ID": customerId,
        "Employment Type": employmentType,
        "Monthly Income": monthlyIncome,
        "Credit Score": creditScore,
        "Existing EMI": existingEmi,
        "Loan Eligibility": eligibility,
        "Eligibility Category": category,
        "Remarks": remarks
    };
}

// Example usage
const result = loanPreScreening("CUST123", "Salaried", 40000, 500000, 10000, 760);
console.log(result);
