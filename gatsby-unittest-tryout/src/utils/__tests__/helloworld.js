import {helloworld} from '../helloworld'

describe("helloworld", () => {
  it('test helloworld call', () => {

    expect(helloworld()).toBe('helloworld');

  })
})