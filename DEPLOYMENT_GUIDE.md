# CloudBlogger Deployment Guide

## Backend Deployment on Render

### 1. Backend Setup

The backend is already configured for Render deployment with:
- `backend/render.yaml` - Render configuration
- `backend/DEPLOYMENT.md` - Detailed backend deployment instructions

### 2. Environment Variables for Backend

Set these in your Render dashboard:

```
EMAIL_USER=your-email@gmail.com
EMAIL_PASS=your-app-password
RAZORPAY_KEY_ID=your-razorpay-key-id
RAZORPAY_KEY_SECRET=your-razorpay-key-secret
NODE_ENV=production
PORT=10000
```

### 3. Deploy Backend

1. Go to [Render Dashboard](https://dashboard.render.com)
2. Click "New +" → "Web Service"
3. Connect your GitHub repository
4. Configure:
   - **Name**: `cloudblogger-backend`
   - **Environment**: `Node`
   - **Build Command**: `npm install`
   - **Start Command**: `npm start`
   - **Root Directory**: `backend`
5. Add environment variables
6. Deploy

## Frontend Configuration

### 1. Environment Variables

Create a `.env` file in the root directory:

```env
# Backend API URL
REACT_APP_API_URL=https://your-backend-service-name.onrender.com
```

### 2. Update API Calls

Your frontend already uses environment variables for API calls. Just update the `.env` file with your Render backend URL.

## Complete Deployment Steps

1. **Deploy Backend on Render**
   - Follow the backend deployment guide
   - Note your backend URL (e.g., `https://cloudblogger-backend.onrender.com`)

2. **Configure Frontend**
   - Create `.env` file in root directory
   - Set `REACT_APP_API_URL` to your backend URL

3. **Deploy Frontend** (Optional)
   - You can deploy frontend on Vercel, Netlify, or Render
   - Make sure to set the environment variable in your frontend deployment platform

## API Endpoints

Your backend will provide these endpoints:
- `GET /` - Health check
- `GET /api/health` - API health status
- `POST /api/send-demo-email` - Send demo booking emails
- `POST /api/consultation` - Send consultation emails
- `POST /api/create-order` - Create Razorpay order
- `POST /api/enroll-now-confirm` - Confirm enrollment
- `POST /api/brochure-request` - Handle brochure requests
- `GET /api/download-brochure` - Download brochure

## Testing

After deployment, test your endpoints:
- Visit `https://your-backend-url.onrender.com/` - Should show "CloudBlogger API is running!"
- Visit `https://your-backend-url.onrender.com/api/health` - Should show health status

## Notes

- Free Render plan has limitations (15-minute request timeout)
- Consider paid plan for production use
- Make sure your email and Razorpay credentials are correct
- Test all forms after deployment 