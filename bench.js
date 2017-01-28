var Suite = require('benchmark').Suite
var test = new Suite()

var tempest = require('./')
var tempestCompile = tempest.compile
var tempestRender = tempest.render

var pixie = require('pixie')
var pixieCompile = pixie.compile
var pixieRender = pixie.render

var balanced = require('balanced-match')

var s = 'foo{{bar}}baz{{qux}}qix' + 'foo{{bar}}baz{{qux}}qix' + 'foo{{bar}}baz{{qux}}qix' + 'foo{{bar}}baz{{qux}}qix'
var d = { bar: ' BAR ', qux: ' QUX ' }

var t = tempest(s)
test.add('tempest         ', () => { tempest(s) }, { minSamples: 100 })
test.add('tempest compile ', () => { tempestCompile(t, d) })
test.add('tempest render  ', () => { tempestRender(s, d) })

var t = pixie(s)
test.add('pixie           ', () => { pixie(s) }, { minSamples: 100 })
test.add('pixie compile   ', () => { pixieCompile(t, d) })
test.add('pixie render    ', () => { pixieRender(s, d) })

test.add('balanced        ', () => { balanced('{{', '}}', s) })

test.on('cycle', event => {
  console.log(String(event.target))
})

test.on('error', console.error)

test.run()
