interface Transaction {
  type: string;
  amount: number;
  timestamp: Date;
}

class BankAccount {
  constructor(
    public accountNumber: string,
    public accountHolder: string,
    public balance: number
  ) {}

  deposit(amount: number) {
    this.balance += amount;
    this.transactions.push({
      type: "deposit",
      amount,
      timestamp: new Date(),
    });
  }

  withdraw(amount: number) {
    if (amount > this.balance) {
      throw new Error("Insufficient funds.");
    }

    this.balance -= amount;
    this.transactions.push({
      type: "withdraw",
      amount,
      timestamp: new Date(),
    });
  }

  getBalance() {
    return this.balance;
  }

  transactions: Transaction[] = [];
}

const bankAccount = new BankAccount("1234567890", "John Doe", 1000);

// Deposit $500 into the account.
bankAccount.deposit(500);

// Withdraw $200 from the account.
bankAccount.withdraw(200);

// Display the current account balance.
console.log(bankAccount.getBalance()); // 800
