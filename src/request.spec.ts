import mockAxios from 'axios';
import { getTodoList } from './request';

describe('Test getTodoList function', () => {
  it('should call axios and return a json', async () => {
    // mockAxios.get.mockImplementationOnce(() =>
    //   Promise.resolve({
    //     data: {
    //       userId: 1,
    //       id: 1,
    //       title: 'delectus aut autem',
    //       completed: false,
    //     },
    //   })
    // );
    const res = await getTodoList(1, 'delectus aut autem');
    console.log(res);
  });

  it('should send the correct config', async () => {
    const res = await getTodoList(1, 'delectus aut autem');
    const expectedParameter = { id: 1, title: 'delectus aut autem' };
    // expect(res.config.params).toBe({ id: 1, title: 'delectus aut autem' });
    expect(res.config.params).toEqual(expectedParameter);
    expect(res.config.method).toBe('get');
  });
});
