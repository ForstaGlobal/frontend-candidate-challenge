# Use the official Node.js image
FROM node:20

# Create and change to the app directory
WORKDIR /usr/src/app

# Copy application dependency manifests to the container image
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of your application code to the container image
COPY . .

# Build the app
RUN npm run build

# Start the app
CMD [ "npm", "start" ]

# Expose the port the app runs on
EXPOSE 3000
