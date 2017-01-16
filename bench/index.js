var Suite = require('benchmark').Suite
var tempest = require('..')

var test = new Suite()

test.add('parse small', function() {
  tempest.parse('foo{{bar}}baz{{qux}}qix')
})

test.add('parse2 small', function() {
  tempest.parse2('foo{{bar}}baz{{qux}}qix')
})

test.on('cycle', function(event) {
  console.log(String(event.target))
})

test.on('error', console.error)

test.run()
