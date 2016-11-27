/* eslint-disable */

/**
 * Talisman clustering/inverted-index tests
 * =========================================
 *
 */
import assert from 'assert';
import invertedIndex from '../../src/clustering/inverted-index';
import {distance as identity} from '../../src/metrics/distance/identity';
import levenshtein from '../../src/metrics/distance/levenshtein';

const DATA = [
  'abc',
  'abc',
  'bde',
  'bd',
  'bde',
  'bcde',
  'abcde'
].map(s => s.split(''));

describe.skip('inverted-index', function() {

  it('should cluster as expected.', function() {
    const clusters = invertedIndex({distance: identity, radius: 0}, DATA);

    // FAIRE LES TEST D'EQUIVALENCE DANS REFINE
    console.log(clusters);

    // assert.deepEqual(
    //   clusters,
    //   [['a', 'a', 'a'], ['b', 'b', 'b'], ['c', 'c']]
    // );
  });

  it('should work with fuzzy cases.', function() {
    const clusters = invertedIndex({distance: levenshtein, radius: 1}, DATA);

    console.log(clusters);
  });
});
