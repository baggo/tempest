module.exports = tempest
tempest.compile = compile
tempest.render = render

var o = '{{', c = '}}'

function tempest (s) {
  var p = [], e = [], f, l
  for (;;) {
    f = s.indexOf(o)
    if (f < 0) break
    p.push(s.slice(0, f))
    l = s.indexOf(c, f)
    e.push(s.slice(f + 2, l))
    s = s.slice(l + 2)
  }
  p.push(s)
  return [p, e]
}

function compile (t, d) {
  var s = '', p = t[0], e = t[1], i = e.length
  do { s = p[i] + (d[e[i]] || '') + s } while (i--)
  return s
}

function render (s, d) {
  return compile(tempest(s), d)
}
