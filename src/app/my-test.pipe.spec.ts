import { MyTestPipe } from './my-test.pipe';

describe('MyTestPipe', () => {
  it('create an instance', () => {
    const pipe = new MyTestPipe();
    expect(pipe).toBeTruthy();
  });

  it('it should return the input if the length of input less than 10 char', () =>{
    const MockData = "abcd";
    const expectData = "abc";
    const pipe = new MyTestPipe();
    let res = pipe.transform(MockData);
    expect(res).toBe(expectData)
  })
});
