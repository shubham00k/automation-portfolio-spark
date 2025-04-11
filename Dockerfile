# Step 1: Build the React app using Node
FROM node:18-alpine as builder

# Set working directory
WORKDIR /app

# Copy dependencies
COPY package*.json ./
COPY bun.lockb ./
COPY . .

# Install deps and build
RUN npm install
RUN npm run build

# Step 2: Serve the built app using Nginx
FROM nginx:alpine

# Remove default nginx static files
RUN rm -rf /usr/share/nginx/html/*

# Copy built files from builder
COPY --from=builder /app/dist /usr/share/nginx/html

# Expose port
EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
