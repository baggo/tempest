var o = '{{', c = '}}'

function p (s) {
  var p = [], e = [], f, l
  while (1) {
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
