#!/bin/bash

# Start both Docusaurus servers and proxy
# The proxy will wait for both servers to be ready

echo "🚀 Starting development servers..."
echo "   German:  http://localhost:3001"
echo "   English: http://localhost:3002"
echo "   Proxy:   http://localhost:3000 (will start when servers are ready)"
echo ""

# Use npm-run-all to start servers in parallel, then proxy
npm-run-all --parallel start:de start:en --sequential -- start:proxy
