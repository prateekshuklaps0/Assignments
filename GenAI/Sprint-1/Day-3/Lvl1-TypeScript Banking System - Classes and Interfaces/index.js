var BankAccount = /** @class */ (function () {
  function BankAccount(accountNumber, accountHolder, balance) {
    this.accountNumber = accountNumber;
    this.accountHolder = accountHolder;
    this.balance = balance;
    this.transactions = [];
  }
  BankAccount.prototype.deposit = function (amount) {
    this.balance += amount;
    this.transactions.push({
      type: "deposit",
      amount: amount,
      timestamp: new Date(),
    });
  };
  BankAccount.prototype.withdraw = function (amount) {
    if (amount > this.balance) {
      throw new Error("Insufficient funds.");
    }
    this.balance -= amount;
    this.transactions.push({
      type: "withdraw",
      amount: amount,
      timestamp: new Date(),
    });
  };
  BankAccount.prototype.getBalance = function () {
    return this.balance;
  };
  return BankAccount;
})();

var bankAccount = new BankAccount("1234567890", "John Doe", 1000);
// Deposit $500 into the account.
bankAccount.deposit(500);
// Withdraw $200 from the account.
bankAccount.withdraw(200);
// Display the current account balance.
console.log(bankAccount.getBalance()); // 800
