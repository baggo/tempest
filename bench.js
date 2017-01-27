var Suite = require('benchmark').Suite
var test = new Suite()

var s = 'foo{{bar}}baz{{qux}}qix'
var d = { bar: ' BAR ', qux: ' QUX ' }

var tempest = require('./')
var tempestCompile = tempest.compile
var tempestRender = tempest.render

var t = tempest('foo{{bar}}baz{{qux}}qix')

test.add('tempest        ', () => { tempest(s) })
test.add('tempest compile', () => { tempestCompile(t, d) })
test.add('tempest render ', () => { tempestRender(s, d) })

var pixie = require('pixie')
var pixieCompile = pixie.compile
var pixieRender = pixie.render

var t = pixie('foo{{bar}}baz{{qux}}qix')

test.add('pixie          ', () => { pixie(s) })
test.add('pixie compile  ', () => { pixieCompile(t, d) })
test.add('pixie render   ', () => { pixieRender(s, d) })

test.on('cycle', event => {
  console.log(String(event.target))
})

test.on('error', console.error)

test.run()
