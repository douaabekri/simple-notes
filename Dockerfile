
# Official Node.js LTS image
FROM node:22-alpine

# Working directory inside container
WORKDIR /app

# Copy dependency files first
COPY package*.json ./

# Install production dependencies
RUN npm install --omit=dev

# Copy application source code
COPY . .

# Application port
EXPOSE 3000

# Start API
CMD ["node", "index.js"]
