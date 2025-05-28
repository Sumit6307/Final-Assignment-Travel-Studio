GydeXP Intern Assignment
Guest Request Logging Workflow for Travel Studio MVP using n8n.io, NestJS, and Next.js.
Prerequisites

Node.js 18.x
PostgreSQL (database: gydexp_db, user: postgres, password: password)
n8n.io (npm install -g n8n)
WhatsApp Business API sandbox account
Vercel CLI (npm install -g vercel)
VS Code

Setup

Backend:
cd backend
npm install
echo 'DATABASE_URL="postgresql://postgres:password@localhost:5432/gydexp_db?schema=public"' > .env
npx prisma generate
npx prisma migrate dev --name init
npm run start:dev

Runs on http://localhost:3000.

Frontend:
cd frontend
npm install
npm run dev

Runs on http://localhost:3001. Deploy with vercel --prod.

n8n.io Workflow:

Run n8n start (opens http://localhost:5678).
Import workflow/request-workflow.json.
Add WhatsApp credentials in n8n.io (use sandbox access token and phone number ID).
Update webhookId, phoneNumberId, and credential IDs in request-workflow.json.
Activate workflow and test by sending a WhatsApp message.


WhatsApp Sandbox:

Sign up at developers.facebook.com.
Get temporary phone number and access token.
Send test message (e.g., "extra towels") to the sandbox number.



Testing

Send a WhatsApp message to the sandbox number (e.g., "extra towels").
Verify the request appears in the database (psql -U postgres -d gydexp_db -c "SELECT * FROM Requests;").
Check the dashboard at http://localhost:3001/dashboard for the request.
Deployed dashboard: https://<YourFullName>_gydexp_intern_assignment.vercel.app.

Submission

GitHub: Push to travel-studio-intern-assignment.
Vercel: Deploy frontend with vercel --prod.
PDF: FirstName_LastName_Assignment.pdf (500 words, implementation/challenges).
Video: FirstName_LastName_Assignment_Demo_Video.mp4 (2-3 min, show WhatsApp, workflow, DB, dashboard).
Submit via Google Form by May 29, 2025, 11:59 PM IST.

