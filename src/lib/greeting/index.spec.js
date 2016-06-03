import assert from 'power-assert';

import { greet } from './index';


describe('lib/greeting', () => {

  describe('greet()', () => {

    it("should return greeting message.", () => {
      assert.equal(greet("Alice"), "Hello, Alice !!");
      assert.equal(greet("Bob"), "Hello, Bob !!");
    });

  });

});
