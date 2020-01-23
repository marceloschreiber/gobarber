import swaggerUI from 'swagger-ui-express';
import swaggerJSDoc from 'swagger-jsdoc';

const url = '/api-docs';

const options = {
  swaggerDefinition: {
    info: {
      title: 'GoBarber APIs documentation',
      version: '1.0.0',
    },
    basePath: '/',
  },
  apis: ['./src/routes.js'],
};

const specs = swaggerJSDoc(options);

export default [url, swaggerUI.serve, swaggerUI.setup(specs)];
