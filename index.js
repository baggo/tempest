'use strict'

module.exports = tempest
tempest.compile = compile
tempest.render = render

function tempest (s) {
  for (var i = 0, p = [], e = [], f, l;;) {
    f = s.indexOf('{{', l)
    if (f < 0) break
    p[i] = s.slice(l, f)
    l = s.indexOf('}}', f)
    e[i++] = s.slice(f + 2, l)
    l = l + 2
  }
  p[i] = s.slice(l)
  return [p, e]
}

function compile (t, d) {
  for (var i = 0, s = '', p = t[0], e = t[1], l = e.length; i < l; s += p[i] + (d[e[i++]] || ''));
  return s + p[i]
}

function render (s, d) {
  return compile(tempest(s), d)
}
