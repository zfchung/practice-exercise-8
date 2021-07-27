export default {
  get: jest.fn(() =>
    Promise.resolve({
      data: { userId: 1, id: 1, title: 'delectus aut autem', completed: false },
    })
  ),
};
