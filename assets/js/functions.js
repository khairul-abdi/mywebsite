$('.toggled-nav-wrapper').on('click', function(e){
    e.stopPropagation();
  });

$('.nav-toggle-open-wrapper, .nav-toggle-close-wrapper, header .nav-toggle-body-overlay').on('click', function(){
  $('html').toggleClass('nav-open');
});

const reversePosition = document.getElementsByClassName('project-wrap')
for (let i = 0; i < reversePosition.length; i++) {
  if (i % 2 != 0) {
    reversePosition[i].classList.add('project-wrap-reverse')
  }
}