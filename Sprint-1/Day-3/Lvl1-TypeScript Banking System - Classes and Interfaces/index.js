// Define the BankAccount class
var BankAccount = /** @class */ (function () {
  function BankAccount(accountNumber, accountHolder, initialBalance) {
    this.transactions = [];
    this.accountNumber = accountNumber;
    this.accountHolder = accountHolder;
    this.balance = initialBalance;
  }
  BankAccount.prototype.deposit = function (amount) {
    if (amount > 0) {
      this.balance += amount;
      var transaction = {
        type: "deposit",
        amount: amount,
        timestamp: new Date(),
      };
      this.transactions.push(transaction);
      console.log(
        "Deposited $".concat(amount, ". New balance: $").concat(this.balance)
      );
    } else {
      console.log("Invalid deposit amount.");
    }
  };
  BankAccount.prototype.withdraw = function (amount) {
    if (amount > 0 && amount <= this.balance) {
      this.balance -= amount;
      var transaction = {
        type: "withdraw",
        amount: amount,
        timestamp: new Date(),
      };
      this.transactions.push(transaction);
      console.log(
        "Withdrawn $".concat(amount, ". New balance: $").concat(this.balance)
      );
    } else {
      console.log("Invalid withdrawal amount or insufficient balance.");
    }
  };
  BankAccount.prototype.getBalance = function () {
    return this.balance;
  };
  BankAccount.prototype.displayTransactions = function () {
    console.log("Transaction history:");
    this.transactions.forEach(function (transaction, index) {
      console.log(
        "#"
          .concat(index + 1, ": ")
          .concat(transaction.type, " of $")
          .concat(transaction.amount, " on ")
          .concat(transaction.timestamp)
      );
    });
  };
  return BankAccount;
})();

// Usage
var Person = new BankAccount("12345", "John Doe", 1000);
console.log("Account holder: ".concat(Person.getBalance()));

// Person.deposit(500);
// Person.withdraw(200);
// Person.withdraw(1500); // Attempt to withdraw more than the balance
// Person.displayTransactions();
