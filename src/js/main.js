function animationHide() {

    panel.style.transform = 'translateY(150%)';

    setTimeout(function(){
        panel.classList.remove('panel-controls_fixed'); 
        panel.classList.remove('show');
        panel.style.transform = '';
    }, 400)
}
