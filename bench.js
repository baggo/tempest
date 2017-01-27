var Suite = require('benchmark').Suite
var tempest = require('./')
var compile = tempest.compile
var render = tempest.render

var test = new Suite()

test.add('parse', function() {
  tempest('foo{{bar}}baz{{qux}}qix')
})

const sample = tempest('foo{{bar}}baz{{qux}}qix')
test.add('compile', function() {
  compile(sample, { bar: ' BAR ', qux: ' QUX ' })
})

test.on('cycle', function(event) {
  console.log(String(event.target))
})

test.on('error', console.error)

test.run()
