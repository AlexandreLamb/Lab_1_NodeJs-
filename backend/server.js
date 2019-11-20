/**
 * Module dependencies
 */
require('module-alias/register');
require('dotenv').config();

const http = require('http');
const app = require('./app');
/**
 * Get environement variable from .env file
 */
const port = process.env.PORT || 3030;

/**
 * Create HTTP server
 */

 const server = http.createServer(app);

 /**
  * Listen on provided port
  */

  server.listen(port);
  console.log(`Listening on port: ${port}`);