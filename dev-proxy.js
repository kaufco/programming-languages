#!/usr/bin/env node

/**
 * Development Proxy Server
 * 
 * Serves both German and English versions on the same port (3000).
 * Routes:
 * - /programming-languages/de/* -> http://localhost:3001/*
 * - /programming-languages/* -> http://localhost:3002/*
 */

const http = require('http');
const { createProxyMiddleware } = require('http-proxy-middleware');
const express = require('express');
const { exec } = require('child_process');

const app = express();
const PORT = 3000;
const DE_PORT = 3001;
const EN_PORT = 3002;

// Check if port is available
function isPortAvailable(port) {
  return new Promise((resolve) => {
    const server = http.createServer();
    server.listen(port, () => {
      server.once('close', () => resolve(true));
      server.close();
    });
    server.on('error', () => resolve(false));
  });
}

// Wait for servers to be ready before starting proxy
function waitForServer(port, maxAttempts = 30, delay = 1000) {
  return new Promise((resolve, reject) => {
    let attempts = 0;
    const check = () => {
      attempts++;
      const req = http.get(`http://localhost:${port}`, (res) => {
        resolve();
      });
      req.on('error', (err) => {
        if (attempts >= maxAttempts) {
          reject(new Error(`Server on port ${port} did not start after ${maxAttempts} attempts`));
        } else {
          setTimeout(check, delay);
        }
      });
    };
    check();
  });
}

// Proxy for German version (/programming-languages/de/*)
// Keep the full path because DE server expects /programming-languages/de/... as baseUrl
app.use(
  '/programming-languages/de',
  createProxyMiddleware({
    target: `http://localhost:${DE_PORT}`,
    changeOrigin: true,
    // Don't rewrite path - keep /programming-languages/de/... as-is
    ws: true, // Enable websocket proxying for hot reload
    logLevel: 'silent', // Reduce noise
  })
);

// Proxy for English version (/programming-languages/*)
// Keep the full path because EN server expects /programming-languages/... as baseUrl
app.use(
  '/programming-languages',
  createProxyMiddleware({
    target: `http://localhost:${EN_PORT}`,
    changeOrigin: true,
    // Don't rewrite path - keep /programming-languages/... as-is
    ws: true, // Enable websocket proxying for hot reload
    logLevel: 'silent', // Reduce noise
  })
);

// Root redirect to English version
app.get('/', (req, res) => {
  res.redirect('/programming-languages/');
});

// Wait for both servers to be ready, then start proxy
async function startProxy() {
  try {
    // Check if port 3000 is available
    const portAvailable = await isPortAvailable(PORT);
    if (!portAvailable) {
      console.error(`❌ Port ${PORT} is already in use. Please stop the process using this port.`);
      console.error(`   You can find it with: lsof -ti:${PORT}`);
      process.exit(1);
    }

    console.log('⏳ Waiting for Docusaurus servers to start...');
    await Promise.all([
      waitForServer(DE_PORT),
      waitForServer(EN_PORT),
    ]);
    console.log('✅ Both servers are ready!\n');
    
    app.listen(PORT, () => {
      console.log(`🚀 Development proxy server running on http://localhost:${PORT}`);
      console.log(`   German version:  http://localhost:${PORT}/programming-languages/de/`);
      console.log(`   English version: http://localhost:${PORT}/programming-languages/\n`);
      
      // Open browser to proxy URL (English version as default)
      const url = `http://localhost:${PORT}/programming-languages/`;
      const platform = process.platform;
      let command;
      
      if (platform === 'darwin') {
        command = `open ${url}`;
      } else if (platform === 'win32') {
        command = `start ${url}`;
      } else {
        command = `xdg-open ${url}`;
      }
      
      exec(command, (error) => {
        if (error) {
          // Silently fail if browser can't be opened (e.g., in headless environments)
          // User can manually open the URL
        }
      });
    });
  } catch (error) {
    console.error('❌ Error starting proxy:', error.message);
    process.exit(1);
  }
}

startProxy();
