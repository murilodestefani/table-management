export const db = {
  getUsers: jest.fn().mockReturnValue(Promise.resolve([])),
  saveUser: jest.fn().mockImplementation((user) => Promise.resolve(user)),
};
