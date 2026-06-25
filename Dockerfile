# Local development image for camilledevaney.com
#
# This file is ONLY for running the website on your own computer.
# The LIVE site on the internet is built and hosted by Vercel, which does
# NOT use this file at all. See CLAUDE.md for the full picture.

# Start from a small, official Node.js image (Node is what runs Next.js).
FROM node:22-alpine

# All the website's files live in /app inside the container.
WORKDIR /app

# Copy just the dependency lists first, then install. Docker caches this
# step, so re-builds are fast unless these two files change.
COPY package.json package-lock.json ./
RUN npm install

# Copy the rest of the website's source code into the container.
COPY . .

# Next.js serves the site on port 3000.
EXPOSE 3000

# Start the development server. It auto-reloads the browser when you edit
# a file. `next dev` listens on 0.0.0.0 by default, so the port mapping
# in docker-compose.yml reaches it.
CMD ["npm", "run", "dev"]
