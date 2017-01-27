var test = require('tape')
var tempest = require('./')
var compile = tempest.compile
var render = tempest.render

test('tempest', (t) => {
  t.plan(3)
  t.same(tempest('foo{{bar}}baz{{qux}}qix'), [['foo', 'baz', 'qix',], ['bar', 'qux']], 'inner expressions')
  t.same(tempest('{{foo}}bar{{baz}}qux{{qix}}'), [['', 'bar', 'qux', ''], ['foo', 'baz', 'qix']], 'outer expressions')
  t.same(tempest('foo bar baz qux qix'), [['foo bar baz qux qix'], []], 'no expressions')
})

test('compile', (t) => {
  t.plan(4)

  var sample1 = tempest('foo{{bar}}baz{{qux}}qix')
  var sample2 = tempest('{{foo}}bar{{baz}}qux{{qix}}')
  var sample3 = tempest('foo bar baz qux qix')

  t.is(compile(sample1, { bar: ' BAR ', qux: ' QUX ' }), 'foo BAR baz QUX qix', 'inner expressions')
  t.is(compile(sample2, { foo: 'FOO ', baz: ' BAZ ', qix: ' QIX' }), 'FOO bar BAZ qux QIX', 'outer expressions')
  t.is(compile(sample3, { nop: 'data' }), 'foo bar baz qux qix', 'no expressions')
  t.is(compile(sample1, { bar: ' BAR ' }), 'foo BAR bazqix', 'missing data')
})

test('render', (t) => {
  t.plan(1)
  t.is(render('foo{{bar}}baz{{qux}}qix', { bar: ' BAR ', qux: ' QUX ' }), 'foo BAR baz QUX qix', 'plain render')
})
