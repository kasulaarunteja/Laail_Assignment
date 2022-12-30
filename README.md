# Laail_Assignment

1. Application data is stored in multiple collections in a mongodb database with below structure.
 .Users(Id, Name, MobileNumber, etc)
 .Contracts (Id, LenderId, BorrowerId, Principle, Interest, LoanStartDate, LoanDueDate, IsRepaid)
2. Build REST APIs (in Node.js and typescript for coding)on this database to answer questions like
 .Get All lenders or borrowers depending on route/query string.
 .Post endpoints to create a lender, borrower and a contract.
 .Given a number (n) find the lenders who have given loans to at least n borrowers and the total amount of the money lent by that lender to all borrowers. Accept n as input to API.eg.

Lender Borrower  Amount
A       B         100
A       C          50
D       E          75

So if n=1 then return [{LenderName: A, Total: 150}, {LenderName: D, Total: 75}]

 .Accept a number n as input and return n records sorted ascending by number of people they have given loans to. Eg. Looking at above table return [{LenderName: D, Total: 1},{LenderName: A, Total: 2}]
