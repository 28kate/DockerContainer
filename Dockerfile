# Stage 1: Build Node.js (React) frontend
FROM node:14-slim as client

# Set working directory for the frontend
WORKDIR /user/src/app/client

# Copy package.json and yarn.lock (if using Yarn)
COPY client/package.json client/package-lock.json ./

# Install dependencies
RUN npm install

# Add source code
COPY client .

# Command to run the react server
CMD ["npm", "start"]
# Stage 2: Build Python Flask backend
FROM python:3-slim as server

# Set working directory for the backend
WORKDIR /app

# Copy Flask application files
COPY server/ .

# Install Python dependencies
RUN pip install --no-cache-dir -r requirements.txt

# Expose port (if needed)
# EXPOSE 5000

# Command to run the Flask server
CMD ["python", "app.py"]