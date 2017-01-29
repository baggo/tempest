'use strict'

module.exports = tempest
tempest.compile = compile
tempest.render = render

function tempest (s) {
  for (var i = 0, t = 0, p = [], e = [], f, l, o = '{{', c = '}}';;) {
    f = s.indexOf(o, t)
    if (f < 0) break
    p[i] = s.slice(t, f)
    l = s.indexOf(c, f)
    e[i++] = s.slice(f + 2, l)
    t = l + 2
  }
  p[i] = s.slice(t)
  return [p, e]
}

function compile (t, d) {
  for (var i = 0, s = '', p = t[0], e = t[1], l = e.length; i < l; s += p[i] + (d[e[i++]] || ''));
  return s + p[i]
}

function render (s, d) {
  return compile(tempest(s), d)
}
