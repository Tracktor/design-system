# Select reference image
FROM node:14

# This is optional. Sets the level of logging that you see
ENV NPM_CONFIG_LOGLEVEL warn

# Create app directory
WORKDIR /usr/src/app

# Copy project files into the docker image
COPY . .

# Install app dependencies
RUN yarn install

# Make port 6006 available
EXPOSE 6006

# run storybook app
CMD ["npm", "run", "storybook"]
