# Use an official Node.js runtime as the base image
FROM node:18-alpine

# Set the working directory in the container
WORKDIR /app

# Copy the package.json and package-lock.json (or yarn.lock) into the container
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application files into the container
COPY . .

# Build the Vite app for production
RUN npm run build

# Use a lightweight web server to serve the production build
FROM nginx:stable-alpine as production

# Copy the build output from the previous stage to the NGINX html folder
COPY --from=0 /app/dist /usr/share/nginx/html

# Expose port 80 to serve the application
EXPOSE 80

# Start NGINX server
CMD ["nginx", "-g", "daemon off;"]
