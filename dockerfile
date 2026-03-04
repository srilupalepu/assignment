# Use official Node image
FROM node:18-alpine

# Create app directory
WORKDIR /app

# Copy package.json
COPY package.json .

# Install dependencies
RUN npm install

# Copy app source code
COPY app.js .

# Expose app port
EXPOSE 3000

# Start the app
CMD ["npm", "start"]