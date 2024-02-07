/**
 * Source
 * https://codepen.io/leemark/pen/neXrjb
 */

colorRange();

function colorRange() {
  let body    = document.body,
      r       = document.querySelector('#r'),
      g       = document.querySelector('#g'),
      b       = document.querySelector('#b'),
      r_out   = document.querySelector('#r_out'),
      g_out   = document.querySelector('#g_out'),
      b_out   = document.querySelector('#b_out'),
      hex_out = document.querySelector('#hex');

  r.addEventListener('change', function () {
    setColor();
    r_out.value = r.value;
  });

  r.addEventListener('input', function () {
    setColor();
    r_out.value = r.value;
  });

  g.addEventListener('change', function () {
    setColor();
    g_out.value = g.value;
  });

  g.addEventListener('input', function () {
    setColor();
    g_out.value = g.value;
  });

  b.addEventListener('change', function () {
    setColor();
    b_out.value = b.value;
  });

  b.addEventListener('input', function () {
    setColor();
    b_out.value = b.value;
  });

  function setColor() {
    let r_hex = parseInt(r.value, 10).toString(16),
        g_hex = parseInt(g.value, 10).toString(16),
        b_hex = parseInt(b.value, 10).toString(16),
        hex   = "#" + pad(r_hex) + pad(g_hex) + pad(b_hex);

    body.style.backgroundColor = hex;
    hex_out.value = hex;
  }

  function pad(n) {
    return (n.length < 2) ? "0" + n : n;
  }
}
