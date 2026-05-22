const express = require('express');
const router = express.Router();
const { getAllUsers } = require('../controllers/user.controller');

/**
 * @swagger
 * tags:
 *   name: Users
 *   description: User management endpoints
 */

/**
 * @swagger
 * /api/users:
 *   get:
 *     summary: Get all registered users
 *     tags: [Users]
 *     responses:
 *       200:
 *         description: List of all users
 *       500:
 *         description: Server error
 */
router.get('/', getAllUsers);

/**
/**
 * @swagger
 * /api/users:
 *   post:
 *     summary: Get all registered users with filters
 *     tags: [Users]
 *     requestBody:
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *                 example: Tanisha
 *               email:
 *                 type: string
 *                 example: tanisha
 *               sortBy:
 *                 type: string
 *                 example: createdAt
 *               order:
 *                 type: string
 *                 example: asc
 *               page:
 *                 type: integer
 *                 example: 1
 *               limit:
 *                 type: integer
 *                 example: 10
 *     responses:
 *       200:
 *         description: Filtered list of users
 *       500:
 *         description: Server error
 */
router.post('/', getAllUsers);

module.exports = router;