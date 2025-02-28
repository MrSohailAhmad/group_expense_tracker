# AI Usage Documentation

## 📌 Overview  
This project was developed using **Supabase, Next.js, and Tailwind CSS** to create a group expense tracker. AI tools were utilized throughout the development process to enhance efficiency, generate code snippets, and debug issues.

---

## 🛠 AI Tools Used  
- **ChatGPT**: Used for debugging errors, optimizing queries, and generating API route structures.  
- **GitHub Copilot**: Assisted with writing repetitive code, function structures, and improving TypeScript type definitions.  
- **Claude AI**: Provided suggestions for code refactoring and best practices in authentication and database schema design.  

---

## 🏗️ How AI Was Used in Development  

### 1️⃣ Authentication (Supabase Auth)  
- **Generated initial authentication logic** for login and registration using ChatGPT.  
- **Resolved login errors** (e.g., `"email_not_confirmed"` issue) with AI debugging suggestions.  
- **Used GitHub Copilot** to auto-complete authentication hooks and error handling.  

---

### 2️⃣ Database & API Routes (Supabase)  
- **Schema Design**: AI suggested **PostgreSQL table structures** for groups and expenses.  
- **Query Optimization**: Used AI to optimize Supabase queries for fetching **user-linked groups and expenses**.  
- **Generated API routes**:  
  - **POST /api/groups** → AI-assisted in structuring request validation and inserting group data.  
  - **GET /api/expenses/[groupId]** → AI suggested indexing strategies for faster queries.  
  - **POST /api/expenses/[groupId]** → AI helped refine expense insertion logic.  

---

### 3️⃣ Frontend UI & State Management (Next.js + Tailwind CSS)  
- **AI generated the initial Tailwind CSS configuration** and debugged PostCSS errors.  
- **Suggested a folder structure** for Next.js pages (`/dashboard`, `/groups/[groupId]`).  
- **Used Copilot** to auto-complete form state handling for expense submission.  

---

## 🔍 AI-Generated Code vs. Manual Modifications  

| Feature              | AI Contribution                                   | Manual Modifications |
|----------------------|-------------------------------------------------|----------------------|
| **Auth Setup**       | Generated Supabase Auth functions & hooks       | Added error handling, UI integration |
| **Database Queries** | AI suggested SQL & Supabase query optimization  | Modified based on business logic |
| **API Routes**       | AI structured endpoints and request validation  | Integrated into Next.js API routes |
| **Frontend Forms**   | AI-generated form structures with state handling | Adjusted styles and validation logic |

---

## 📝 Summary  
AI significantly **sped up development**, especially for repetitive coding tasks and debugging. However, all AI-generated code was **carefully reviewed and modified** to fit project requirements. This approach ensured efficiency **while maintaining human oversight and logical correctness**.

---

