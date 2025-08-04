# Backend Deployment on Render

## Prerequisites
- Render account
- Environment variables configured

## Environment Variables Required

Create these environment variables in your Render dashboard:

```
EMAIL_USER=your-email@gmail.com
EMAIL_PASS=your-app-password
RAZORPAY_KEY_ID=your-razorpay-key-id
RAZORPAY_KEY_SECRET=your-razorpay-key-secret
NODE_ENV=production
PORT=10000
```

## Deployment Steps

1. **Connect your GitHub repository to Render**
   - Go to Render Dashboard
   - Click "New +" → "Web Service"
   - Connect your GitHub repository

2. **Configure the service**
   - **Name**: `cloudblogger-backend`
   - **Environment**: `Node`
   - **Build Command**: `npm install`
   - **Start Command**: `npm start`
   - **Root Directory**: `backend` (if deploying from root repo)

3. **Set Environment Variables**
   - Add all the environment variables listed above
   - Make sure to use your actual values

4. **Deploy**
   - Click "Create Web Service"
   - Render will automatically build and deploy your backend

## API Endpoints

Your backend will be available at: `https://your-service-name.onrender.com`

Available endpoints:
- `GET /` - Health check
- `GET /api/health` - API health status
- `POST /api/send-demo-email` - Send demo booking emails
- `POST /api/consultation` - Send consultation emails
- `POST /api/create-order` - Create Razorpay order
- `POST /api/enroll-now-confirm` - Confirm enrollment
- `POST /api/brochure-request` - Handle brochure requests
- `GET /api/download-brochure` - Download brochure

## Notes

- The free plan has limitations on request timeouts
- Consider upgrading to a paid plan for production use
- Make sure your frontend is configured to use the new backend URL 