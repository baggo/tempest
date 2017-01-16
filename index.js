var o = '{{', c = '}}'

exports.parse = function (s) {
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

function c () {

}

function r () {

}
