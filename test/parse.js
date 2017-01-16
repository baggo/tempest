var test = require('tape')
var tempest = require('..')

test('parsing', function (t) {
  t.same(tempest('foo{{bar}}baz{{qux}}qix'), [['foo', 'baz', 'qix',], ['bar', 'qux']], 'simple template inner')
  t.same(tempest('{{foo}}bar{{baz}}qux{{qix}}'), [['', 'bar', 'qux', ''], ['foo', 'baz', 'qix']], 'simple template outer')
  t.deepEqual(tempest('foo bar baz qux foo'), [['foo bar baz qux foo'], []], 'no expressions')
  t.end()
})
