#!/bin/bash

# Launch script for RM Weekly Report React App
echo "🚀 Launching RM Weekly Report React App..."

# Check if node_modules exists
if [ ! -d "node_modules" ]; then
    echo "📦 Installing dependencies..."
    npm install
fi

# Start the development server in background
echo "🔥 Starting Vite development server..."
npm run dev &

# Wait a moment for server to start
sleep 3

# Open browser
echo "🌐 Opening browser..."
open http://localhost:3000

echo "✅ React app is now running at http://localhost:3000"
echo "🔧 Browser extensions (like stagewise) should now work!"
echo "📝 Press Ctrl+C to stop the server" 