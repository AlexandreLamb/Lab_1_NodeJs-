const { Router } = require('express');

const router = Router();

/**
 * Controllers imports
 */

// HELLO IMPORT
const { ReadHello } = require('@controllers');

// DEFAULT IMPORT
const { ReadDefault } = require('@controllers');

// HELLO ROUTES
router.get('/hello/read/:name', ReadHello);
router.get('/hello/read', ReadHello);

// DEFAULT ROUTES
router.get('/', ReadDefault);

module.exports = router;