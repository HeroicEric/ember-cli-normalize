import { test } from 'qunit';
import moduleForAcceptance from '../../tests/helpers/module-for-acceptance';
import jQuery from 'jquery';

moduleForAcceptance('Acceptance | sanity');

test('normalize styles are being applied', function(assert) {
  visit('/');

  andThen(() => {
    let fontFamily = jQuery('pre').css('font-family');
    assert.equal(fontFamily, 'monospace, monospace', 'PRE has expected font-family');
  });
});
