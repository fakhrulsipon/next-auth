# MyStore - Next.js Product App

## 🔗 Live Demo
Check out the live version of MyStore here:  
[🌐 MyStore Live Demo](https://nestjs-app-one.vercel.app/)  
*(Replace the above URL with your deployed Vercel link)*

---

## 🌟 Project Description
MyStore is a modern e-commerce web application built with **Next.js 13+ (App Router)**, **Tailwind CSS**, and **MongoDB**.  
It allows users to view latest products, add new products (for admins), and manage their dashboard. The project includes **client-side route protection**, **dynamic product listing**, **theme toggle**, and a responsive UI.

---

## ⚡ Features
- Client-side route protection using NextAuth
- Dashboard for managing products
- Latest products section on the homepage
- Responsive designs with Tailwind CSS
- Theme toggle (light/dark)
- MongoDB integration for product storage
- Server-side API routes for fetching products

---

## 🛠 Setup & Installation

### 1. Clone the repository
```bash
git clone <your-repo-url>
cd mystore
2. Install dependencies
bash
Copy
Edit
npm install
3. Configure environment variables
Create a .env file in the root directory with the following variables:

env
Copy
Edit
MONGO_URI=<your-mongodb-connection-string>
NEXTAUTH_SECRET=<your-nextauth-secret>
NEXTAUTH_URL=http://localhost:3000
4. Run the development server
bash
Copy
Edit
npm run dev
Open http://localhost:3000 in your browser.

5. Build for production
bash
Copy
Edit
npm run build
npm start
🗂 Route Summary
Route	Description	Access
/	Homepage with latest products	Public
/login	User login page	Public
/user-dashboard/overview	Dashboard overview page	Authenticated users only
/user-dashboard/addProducts	Add new product page	Authenticated users only
/api/products	CRUD operations for products	Server-side
/api/products/latest	Fetch latest 4 products	Public API

Note: All dashboard routes are client-side protected. Users who are not logged in will be redirected to the login page.

🔗 Deployment
Recommended hosting: Vercel.

Push your project to GitHub.

Connect the GitHub repository to Vercel.

Add your environment variables in Vercel dashboard.

Deploy — your project will be live with server-side APIs and MongoDB integration.

📝 Tech Stack
Next.js 13+ (App Router)

React & Tailwind CSS

MongoDB & Mongoose

NextAuth.js for authentication

react-hot-toast for notifications

React Icons for UI icons