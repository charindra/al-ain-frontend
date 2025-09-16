# Use Node.js 20 (LTS)
FROM node:20-alpine

# Set working directory
WORKDIR /app

# Copy package files
COPY package*.json ./

# Install dependencies (remove Sitecore CLI)
RUN npm install

# Copy source code
COPY . .

# Build ONLY Next.js (skip bootstrap)
RUN npm run next:build

# Expose port
EXPOSE 3000

# Set environment
ENV NODE_ENV=production \
    PORT=3000

# Start Next.js directly
CMD ["npm", "run", "next:start"]