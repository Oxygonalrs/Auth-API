import express from 'express';
const router = express.Router();
import UserController from '../controllers/userController.js';
import checkUserAuth from '../middlewares/authMiddleware.js';

// Middelware
router.use('/changepassword', checkUserAuth);
router.use('/loggeduser', checkUserAuth);

// Public Routes
router.post('/register', UserController.userRegistration);
router.post('/login', UserController.userLogin);
router.post('/resetpassword', UserController.sendUserPasswordResetEmail);
router.post('/reset-password/:id/:token', UserController.userPasswordReset);

// Protected Routes
router.post('/changepassword', UserController.changePassword);
router.get('/loggeduser', UserController.loggedUser);


export default router;