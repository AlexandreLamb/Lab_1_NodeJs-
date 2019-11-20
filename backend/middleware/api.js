const { Router } = require('express');

const router = Router();

/**
 * Controllers imports
 */

// UNMATCHED IMPORT
const { ReadUnmatched } = require('@middleware');


// UNMATCHED ROUTES
router.all('*', ReadUnmatched);

module.exports = router;