# Use a slim, official Python image
FROM python:3.10-slim

# Set the working directory inside the container
WORKDIR /app

# 1. Copy and install dependencies first
# This layer is cached and won't re-run unless requirements.txt changes
COPY requirements.txt .
RUN pip install --no-cache-dir -r requirements.txt

# 2. Copy the rest of your application code
# This includes server.py, util.py, and your artifacts/ folder
COPY . .

# 3. Expose the port the app will run on
EXPOSE 5000

# 4. Define the command to run the production server
# We use Gunicorn to serve the 'app' object inside your 'server.py' file
# --bind 0.0.0.0:5000 makes it accessible from outside the container
CMD ["gunicorn", "--bind", "0.0.0.0:5000", "server:app"]