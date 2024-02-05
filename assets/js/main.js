try { fitPanelToContent();} catch (e) { }

try { changeTheme(csInterface);} catch (e) { }

try {
 let reloadButton = document.getElementById("reload_btn");
 reloadButton.addEventListener('click', reloadPanel);
} catch (e) { }

try {
 setInputNumber({
                 selectElem: document.getElementById('select_number'),
                 inputField: document.getElementById('input_number'),
                 rangeSlider: document.getElementById('range_slider'),
                 btnPlus: document.getElementById('btn_plus'),
                 btnMinus: document.getElementById('btn_minus'),
                });
} catch (e) { }