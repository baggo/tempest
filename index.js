'use strict'

module.exports = tempest
tempest.compile = compile
tempest.render = render

function tempest (s) {
  for (var i = 0, p = [], e = [], f, l, o = '{{', c = '}}';;) {
    f = s.indexOf(o)
    if (f < 0) break
    p[i++] = s.slice(0, f)
    l = s.indexOf(c, f)
    e[i] = s.slice(f + 2, l)
    s = s.slice(l + 2)
  }
  p[i] = s
  return [p, e]
}

function compile (t, d) {
  for (var i = 0, p = t[0], e = t[1], l = e.length, s = ''; i < l; i++) {
    s += p[i] + (d[e[i]] || '')
  }
  return s + p[i]
}

function render (s, d) {
  return compile(tempest(s), d)
}
