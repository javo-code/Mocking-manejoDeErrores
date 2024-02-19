import request from 'supertest';
import app from '../server.js';

describe('Pruebas para la creación de usuarios', () => {
  it('debería crear un nuevo usuario correctamente', async () => {
    //etapa de preparacion
    const res = await request(app)
      .post('/api/users/register')
      .send({
        first_name: 'John',
        last_name: 'Doe',
        email: 'john.doe@example.com', age: 30,
        password: 'password'
      });
    
    //etapa de ejecucion

    
    //etapa de verificacion
  });

});
