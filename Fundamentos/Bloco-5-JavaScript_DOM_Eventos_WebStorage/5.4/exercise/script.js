window.onload = function(){
//Change and save background color local
    let select = document.querySelector('select');
    select.addEventListener('change', function(){
      let selected = select.selectedOptions[0];
      document.body.style.backgroundColor = selected.value;

      localStorage.setItem('5.4-background-color', selected.value);
    })
//Change and save font size local
    let inputFontSize = document.querySelector('input[name="font-size"]');
    inputFontSize.addEventListener('change', function() {
      let p = document.querySelector('p');
      p.style.fontSize = `${inputFontSize.value}px`;

      localStorage.setItem('5.4-font-size', `${inputFontSize.value}px`);
    })
// Get saved values when page is loaded
    let savedBackground = localStorage.getItem('5.4-background-color');
    document.body.style.backgroundColor = savedBackground;
    
    let savedFontSize = localStorage.getItem('5.4-font-size');
    let p = document.querySelector('p');
    p.style.fontSize = savedFontSize;
}