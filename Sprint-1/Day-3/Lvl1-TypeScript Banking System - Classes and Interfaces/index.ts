// Define the Transaction interface
interface Transaction {
  type: "deposit" | "withdraw";
  amount: number;
  timestamp: Date;
}

// Define the BankAccount class
class BankAccount {
  private accountNumber: string;
  private accountHolder: string;
  private balance: number;
  private transactions: Transaction[] = [];

  constructor(
    accountNumber: string,
    accountHolder: string,
    initialBalance: number
  ) {
    this.accountNumber = accountNumber;
    this.accountHolder = accountHolder;
    this.balance = initialBalance;
  }

  deposit(amount: number): void {
    if (amount > 0) {
      this.balance += amount;
      const transaction: Transaction = {
        type: "deposit",
        amount: amount,
        timestamp: new Date(),
      };
      this.transactions.push(transaction);
      console.log(`Deposited $${amount}. New balance: $${this.balance}`);
    } else {
      console.log("Invalid deposit amount.");
    }
  }

  withdraw(amount: number): void {
    if (amount > 0 && amount <= this.balance) {
      this.balance -= amount;
      const transaction: Transaction = {
        type: "withdraw",
        amount: amount,
        timestamp: new Date(),
      };
      this.transactions.push(transaction);
      console.log(`Withdrawn $${amount}. New balance: $${this.balance}`);
    } else {
      console.log("Invalid withdrawal amount or insufficient balance.");
    }
  }

  getBalance(): number {
    return this.balance;
  }

  displayTransactions(): void {
    console.log("Transaction history:");
    this.transactions.forEach((transaction, index) => {
      console.log(
        `#${index + 1}: ${transaction.type} of $${transaction.amount} on ${
          transaction.timestamp
        }`
      );
    });
  }
}

// Usage
const myAccount = new BankAccount("12345", "John Doe", 1000);

console.log(`Account holder: ${myAccount.getBalance()}`);
myAccount.deposit(500);
myAccount.withdraw(200);
myAccount.withdraw(1500); // Attempt to withdraw more than the balance
myAccount.displayTransactions();
