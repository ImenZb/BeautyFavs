import { LikesCountPipe } from './likes-count.pipe';

describe('LikesCountPipe', () => {
  it('create an instance', () => {
    const pipe = new LikesCountPipe();
    expect(pipe).toBeTruthy();
  });
});
