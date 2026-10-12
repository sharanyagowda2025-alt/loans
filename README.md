Loan Eligibility Pre‑Screening System
📌 Overview
This project is a simple Node.js CLI application that performs a preliminary loan eligibility check based on customer details.
It does not approve loans — it only provides an initial assessment for customer service teams.

⚙️ Features
Collects customer details interactively via the terminal.

Applies business rules:

Minimum monthly income: ₹30,000

Credit score ≥ 750 → Standard Category

Credit score 650–749 → Restricted Category

Credit score < 650 → Not Eligible

Existing EMI must be ≤ 40% of monthly income

Displays a structured eligibility result.

📂 Project Structure
Code
loan.js   # Main program file
README.md # Documentation
🛠 Prerequisites
Install Node.js (v14 or above recommended).

Verify installation:

bash
node -v
▶️ How to Run
Save the code into a file named loan.js.

Open a terminal in the folder containing loan.js.

Run:

bash
node loan.js
Enter details step by step when prompted:

Code
Enter Customer ID: CUST123
Enter Employment Type (Salaried/Self-Employed): Salaried
Enter Monthly Income: 40000
Enter Requested Loan Amount: 500000
Enter Existing EMI: 10000
Enter Credit Score: 760
✅ Example Output
text
--- Loan Eligibility Result ---
{
  'Customer ID': 'CUST123',
  'Employment Type': 'Salaried',
  'Monthly Income': 40000,
  'Credit Score': 760,
  'Existing EMI': 10000,
  'Loan Eligibility': 'Yes',
  'Eligibility Category': 'Standard',
  'Remarks': 'Eligible under standard category.'
}
📌 Notes
This is a pre‑screening tool only.

It does not connect to any bank database or approve loans.

You can extend it to:

Save results to a file (JSON/CSV).

Loan Eligibility Pre‑Screening System
📌 Overview
This project is a simple Node.js application that performs a preliminary loan eligibility check based on customer details.
It applies predefined business rules to determine whether a customer qualifies under the Standard, Restricted, or Not Eligible category.
⚠️ Note: This is a pre‑screening tool only — it does not approve or disburse loans.

⚙️ Features
Evaluates loan eligibility based on:

Minimum monthly income requirement (₹30,000).

Credit score thresholds:

≥ 750 → Standard Category

650–749 → Restricted Category

< 650 → Not Eligible

EMI burden rule: Existing EMI must be ≤ 40% of monthly income.

Returns a structured result with eligibility status, category, and remarks.

Simple to run in Node.js with no external dependencies.

📂 Project Structure
Code
loan.js   # Main program file
README.md # Documentation
🛠 Prerequisites
Install Node.js (v14 or above recommended).

Verify installation:

bash
node -v
▶️ How to Run
Save the code into a file named loan.js.

Open a terminal in the folder containing loan.js.

Run:

bash
node loan.js
The program will execute with the example data provided in the file.

✅ Example Code (loan.js)
javascript
function loanPreScreening(customerId, employmentType, monthlyIncome, requestedLoan, existingEmi, creditScore) {
  let remarks = "";
  let eligibility = "No";
  let category = "Not Eligible";

  const maxEmiAllowed = 0.4 * monthlyIncome;

  if (existingEmi > maxEmiAllowed) {
    remarks = "Existing EMI exceeds permissible limit.";
  } else if (monthlyIncome >= 30000) {
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

// Example run
const result = loanPreScreening("CUST200", "Salaried", 40000, 500000, 10000, 720);
console.log(result);
🖥 Example Output
text
{
  'Customer ID': 'CUST200',
  'Employment Type': 'Salaried',
  'Monthly Income': 40000,
  'Credit Score': 720,
  'Existing EMI': 10000,
  'Loan Eligibility': 'Yes',
  'Eligibility Category': 'Restricted',
  'Remarks': 'Eligible under restricted category.'
}
📌 Notes
This is a demo system for educational purposes.

You can extend it to:

Accept user input interactively (via readline).

Save results to a file (JSON/CSV).

Integrate with a web interface for customer service teams.Add more customer categories.

Integrate with a web interface.
