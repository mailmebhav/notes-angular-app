import { Notes } from './notes';

describe('Notes', () => {
  it('should create an instance', () => {
    expect(new Notes()).toBeTruthy();
  });

  it('should accept values in the constructor', () => {
    let todo = new Notes({
      Title: 'hello',
    });
    expect(todo.Title).toEqual('hello');
  });
});
