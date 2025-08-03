# CloudBlogger

A modern landing page for CloudBlogger with backend API for email handling.

## Project Structure

- `src/` - React frontend (TypeScript)
- `backend/` - Express.js API server
- `public/` - Static assets

## Local Development

### Prerequisites
- Node.js 18+
- npm or yarn

### Setup

1. **Install frontend dependencies:**
   ```bash
   npm install
   ```

2. **Install backend dependencies:**
   ```bash
   cd backend
   npm install
   ```

3. **Start backend server:**
   ```bash
   cd backend
   npm start
   ```
   Backend will run on http://localhost:5000

4. **Start frontend development server:**
   ```bash
   npm start
   ```
   Frontend will run on http://localhost:3000

## Deployment

### Backend Deployment (Render)

1. **Push your code to GitHub:**
   ```bash
   git add .
   git commit -m "Add deployment configuration"
   git push origin main
   ```

2. **Deploy on Render:**
   - Go to [render.com](https://render.com)
   - Sign up/Login with your GitHub account
   - Click "New +" → "Web Service"
   - Connect your GitHub repository
   - Configure the service:
     - **Name:** `cloudblogger-backend`
     - **Environment:** `Node`
     - **Build Command:** `cd backend && npm install`
     - **Start Command:** `cd backend && npm start`
     - **Plan:** Free

3. **Environment Variables (Optional):**
   - `NODE_ENV`: `production`
   - `PORT`: `10000` (Render will set this automatically)

4. **Deploy and get your backend URL:**
   - Render will provide a URL like: `https://your-app-name.onrender.com`

### Frontend Deployment (Vercel)

1. **Update API URL:**
   - Replace `https://your-render-backend-url.onrender.com` in `vercel.json` with your actual Render backend URL

2. **Deploy on Vercel:**
   - Go to [vercel.com](https://vercel.com)
   - Sign up/Login with your GitHub account
   - Click "New Project"
   - Import your GitHub repository
   - Configure the project:
     - **Framework Preset:** Create React App
     - **Root Directory:** `./` (leave as default)
     - **Build Command:** `npm run build`
     - **Output Directory:** `build`

3. **Environment Variables:**
   - Add `REACT_APP_API_URL` with your Render backend URL
   - Example: `https://your-app-name.onrender.com`

4. **Deploy:**
   - Click "Deploy"
   - Vercel will provide a URL like: `https://your-app-name.vercel.app`

## Environment Variables

### Frontend (.env file for local development)
```
REACT_APP_API_URL=http://localhost:5000
```

### Backend (Render Environment Variables)
```
NODE_ENV=production
PORT=10000
```

## API Endpoints

- `POST /api/send-demo-email` - Send demo booking email
- `POST /api/enroll-now` - Send enrollment email

## Features

- Modern React TypeScript frontend
- Express.js backend API
- Email functionality with Nodemailer
- Responsive design with Tailwind CSS
- Form validation and user feedback
- Date picker for demo bookings

## Tech Stack

- **Frontend:** React 19, TypeScript, Tailwind CSS
- **Backend:** Express.js, Node.js, Nodemailer
- **Deployment:** Vercel (Frontend), Render (Backend)

## Support

For any issues or questions, please contact the development team. # CloudBlogger
