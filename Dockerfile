# Use Node.js 20 (LTS)
FROM node:20-alpine

# Create base app directory
WORKDIR /app


# Copy rendering package files for dependency installation
COPY src/rendering/package*.json ./

RUN npm install --force
RUN npm install -g @sitecore-jss/sitecore-jss-cli

# Define build-time arguments
ARG JSS_EDITING_SECRET
ARG SITECORE_API_KEY
ARG SITECORE_API_HOST
ARG GRAPH_QL_ENDPOINT
ARG NEXT_PUBLIC_GRAPH_QL_ENDPOINT
ARG SITECORE_SITE_NAME
ARG GRAPH_QL_SERVICE_RETRIES
ARG FETCH_WITH
ARG DISABLE_SSG_FETCH

# Make ARGs available as ENV
ENV JSS_EDITING_SECRET=$JSS_EDITING_SECRET \
    SITECORE_API_KEY=$SITECORE_API_KEY \
    SITECORE_API_HOST=$SITECORE_API_HOST \
    GRAPH_QL_ENDPOINT=$GRAPH_QL_ENDPOINT \
    NEXT_PUBLIC_GRAPH_QL_ENDPOINT=$NEXT_PUBLIC_GRAPH_QL_ENDPOINT \
    SITECORE_SITE_NAME=$SITECORE_SITE_NAME \
    GRAPH_QL_SERVICE_RETRIES=$GRAPH_QL_SERVICE_RETRIES \
    FETCH_WITH=$FETCH_WITH \
    DISABLE_SSG_FETCH=$DISABLE_SSG_FETCH

COPY src/rendering/ ./

RUN npm run build

# Expose Next.js port
EXPOSE 3000

# Set environment
ENV NODE_ENV=production \
    PORT=3000

# Start the application
CMD ["jss", "start:connected"]