var test = require('tape')
var tempest = require('..')

test('parse', function (t) {
  t.same(tempest.parse('foo{{bar}}baz{{qux}}qix'), [['foo', 'baz', 'qix',], ['bar', 'qux']], 'simple template inner')
  t.same(tempest.parse('{{foo}}bar{{baz}}qux{{qix}}'), [['', 'bar', 'qux', ''], ['foo', 'baz', 'qix']], 'simple template outer')
  t.deepEqual(tempest.parse('foo bar baz qux qix'), [['foo bar baz qux qix'], []], 'no expressions')
  t.end()
})
