# 🚀 YaYa Wallet Transaction Dashboard

This project implements a simple dashboard to monitor transactions made to/from user accounts using the YaYa Wallet REST API.

## ✨ Features

- 📋 **Tabular List of Transactions**: Displays Transaction ID, Sender, Receiver, Amount, Currency, Cause, Created At.
- 🔢 **Pagination**: Use the `page` query parameter to navigate pages.
- 🔍 **Search**: Search by sender account name, receiver account name, cause, or transaction ID.
- 🔄 **Incoming/Outgoing Indicator**: Each row visually indicates if the transaction is incoming or outgoing. Top-up transactions (sender == receiver) are marked as incoming.
- 📱 **Responsive Design**: The dashboard adapts to different screen sizes for usability on desktop and mobile.

## 🔒 Security

- 🗝️ **API Credentials**: API Key and Secret are stored in environment variables (`.env.local`) and never hardcoded in the source code.

## 🛠️ Setup & Testing

1. **Clone the repository**:

   ```bash
   git clone <repo-url>
   cd yaya
   ```

2. **Configure Environment Variables**:
   Create a `.env.local` file in the root directory with the following:

   ```
   API_URL="https://sandbox.yayawallet.com"
   YAYA_API_KEY="your-key"
   YAYA_API_SECRET="your-secret"
   ```

3. **Install dependencies**:

   ```bash
   npm install
   ```

   or bun

   ```bash
   bun install
   ```

4. **Run the development server**:

   ```bash
   npm run dev
   ```

   or bun

   ```bash
   bun run dev
   ```

   Access the dashboard at `http://localhost:3000`.

5. **Usage**:
   - 🔎 Use the search bar to filter transactions.
   - ⏩ Use pagination controls to browse pages.
   - 🟢 Incoming transactions are visually indicated (e.g., color or icon).

## 🧩 Code Quality

- 🧹 **Maintainability**: The code is modular, separating API logic, UI components, and utilities.
- 🪄 **Simplicity**: Only essential logic is implemented for clarity.
- 🏗️ **Structure**: Follows best practices for Next.js and TypeScript projects.

## 📡 API Reference

- **GET /api/en/transaction/find-by-user**: Fetch paginated transactions for the current user.
- **POST /api/en/transaction/search**: Search transactions by query.

## 📱 Further Improvements

- Enhance mobile experience.
- Add loading and error states.
