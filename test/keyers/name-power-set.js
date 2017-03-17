/**
 * Talisman keyers/normalize tests
 * ================================
 */
import assert from 'assert';
import namePowertSet from '../../src/keyers/name-power-set';

describe('name-power-set', function() {

  it('should return a correct name power set.', function() {
    assert.deepEqual(namePowertSet('John Henry'), [
      ['Henry', 'John'],
      ['H', 'John'],
      ['Henry', 'J']
    ]);

    assert.deepEqual(namePowertSet('John Philip Henry'), [
      ['Henry', 'John'],
      ['H', 'John'],
      ['Henry', 'J'],
      ['Henry', 'John', 'Philip'],
      ['H', 'John', 'Philip'],
      ['Henry', 'J', 'Philip'],
      ['H', 'J', 'Philip'],
      ['Henry', 'John', 'P'],
      ['H', 'John', 'P'],
      ['Henry', 'J', 'P'],
      ['Henry', 'Philip'],
      ['H', 'Philip'],
      ['Henry', 'P'],
      ['John', 'Philip'],
      ['J', 'Philip'],
      ['John', 'P']
    ]);

    assert.deepEqual(namePowertSet('J.R.R. Tolkien'), [
      ['J', 'R', 'Tolkien'],
      ['J', 'Tolkien'],
      ['R', 'Tolkien']
    ]);
  });
});
