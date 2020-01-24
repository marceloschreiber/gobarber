import { Router } from 'express';
import multer from 'multer';
import multerConfig from './config/multer';

import ProviderController from './app/controllers/ProviderController';
import UserController from './app/controllers/UserController';
import SessionController from './app/controllers/SessionController';
import FileController from './app/controllers/FileController';
import AppointmentController from './app/controllers/AppointmentController';
import ScheduleControler from './app/controllers/ScheduleController';
import NotificationController from './app/controllers/NotificationController';

import authMiddleware from './app/middlewares/auth';

const routes = new Router();
const upload = multer(multerConfig);

/**
 * @swagger
 * {
 *   "/users": {
 *     "post": {
 *       "summary": "Create a new user",
 *       "description": "",
 *       "consumes": ["application/json"],
 *       "produces": ["application/json"],
 *       "parameters": [
 *         {
 *           "in": "body",
 *           "name": "body",
 *           "description": "User object",
 *           "required": true,
 *           "schema": {
 *             "type": "object",
 *             "required": ["name", "email", "password"],
 *             "properties": {
 *               "name": {
 *                 "type": "string",
 *                 "example": "Jon"
 *               },
 *               "email": {
 *                 "type": "string",
 *                 "example": "john.snow@gmail.com"
 *               },
 *               "password": {
 *                 "type": "string",
 *                 "example": "thewall"
 *               }
 *             }
 *           }
 *         }
 *       ],
 *       "responses": {
 *         "200": {
 *           "description": "User created",
 *           "schema": {
 *             "type": "object",
 *             "properties": {
 *               "id": {
 *                 "type": "number",
 *                 "example": 1
 *                },
 *               "name": {
 *                 "type": "string",
 *                 "example": "Jon"
 *               },
 *               "email": {
 *                 "type": "string",
 *                 "example": "john.snow@gmail.com"
 *               },
 *               "password": {
 *                 "type": "string",
 *                 "example": "thewall"
 *               }
 *             }
 *           }
 *         },
 *         "400": {
 *           "description": "Errors",
 *           "schema": {
 *             "type": "object",
 *             "properties": {
 *               "error": {
 *                 "type": "string",
 *                 "example": "User already exists"
 *               }
 *             }
 *           }
 *         }
 *       }
 *     }
 *   }
 * }
 */
routes.post('/users', UserController.store);

/**
 * @swagger
 * /sessions:
 *   post:
 *     summary: "Login"
 */
routes.post('/sessions', SessionController.store);

routes.use(authMiddleware);

/**
 * @swagger
 * /users:
 *   put:
 *     summary: "Update user information"
 */
routes.put('/users', UserController.update);

/**
 * @swagger
 * /providers:
 *   get:
 *     summary: "List providers"
 */
routes.get('/providers', ProviderController.index);

/**
 * @swagger
 * /files:
 *   post:
 *     summary: "Upload a picture"
 */
routes.post('/files', upload.single('file'), FileController.store);

/**
 * @swagger
 * /appointments:
 *   post:
 *     summary: "Create new appointment"
 */
routes.post('/appointments', AppointmentController.store);

/**
 * @swagger
 * /appointments:
 *   get:
 *     summary: "List all appointments for a user"
 */
routes.get('/appointments', AppointmentController.index);

/**
 * @swagger
 * /schedule:
 *   get:
 *     summary: "List all appointments for a provider"
 */
routes.get('/schedule', ScheduleControler.index);

/**
 * @swagger
 * /notifications:
 *   get:
 *     summary: "List all notifications"
 */
routes.get('/notifications', NotificationController.index);

/**
 * @swagger
 * /notifications/{id}:
 *   put:
 *     summary: "Return a modification and mark it as read"
 */
routes.get('/notifications/:id', NotificationController.update);

export default routes;
