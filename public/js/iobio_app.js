function typeOnLoad(){
  var owl = $(".owl-carousel");

  $('.owl-stage-outer').after("<center><p id='BeforeActiveSliderContent'>vcf.iobio</p></center><center><i id='ActiveSliderContent'>A variant data inspector tool that quickly samples vcf files and visualizes a series of metrics</i></center>")

  owl.on('changed.owl.carousel',function(property){
      var current = property.item.index;
      var src = $(property.target).find(".owl-item").eq(current).find("img").attr('src');
      var idFound = $(property.target).find(".owl-item").eq(current).find("img").attr('id');

      switch (idFound) {
        case "vcf":
          document.getElementById('BeforeActiveSliderContent').innerHTML = "vcf.iobio";
          document.getElementById('ActiveSliderContent').innerHTML = "A variant data inspector tool that quickly samples vcf files and visualizes a series of metrics"
          break;
        case "genepanel":
          document.getElementById('BeforeActiveSliderContent').innerHTML = "genepanel.iobio";
          document.getElementById('ActiveSliderContent').innerHTML = "A web app for generating list of genes based on suspected conditions and phenotypes"
          break;
        case "gene":
          document.getElementById('BeforeActiveSliderContent').innerHTML = "gene.iobio";
          document.getElementById('ActiveSliderContent').innerHTML = "A web app for investigating potential disease-causing variants"
          break;
        case "bam":
          document.getElementById('BeforeActiveSliderContent').innerHTML = "bam.iobio";
          document.getElementById('ActiveSliderContent').innerHTML = "An alignment data inspector tool that quickly samples bam files and visualizes a series of metrics"
          break;
      }
  });

  //Hide video when the modal is closed
  $("#exampleModalCenter").on('hide.bs.modal', function(){
    $("#MY_VIDEO_1")[0].player.pause();
  })

  var typed3 = new Typed('#typed-element', {
    strings: ['Genomic Analysis', 'Variant Interrogation', 'Gene List Generation', 'Alignment Inspector', 'Variant Inspector'],
    typeSpeed: 80,
    // time before typing starts
    startDelay: 300,
    // backspacing speed
    backSpeed: 70,
    // time before backspacing
    backDelay: 1500,
    smartBackspace: true, // this is a default
    loop: true
  });

}



$(".owl-nav").click(function(){
  // console.log("next button clicked");
  // console.log("type 3 ", typed3.options.preStringTyped);
  // console.log("typed3" , typed3.arrayPos)
  // console.log("stringPos ", stringPos)
  // typed3.destroy();
  // typed3.backDelay = 0;
  // typed3.backSpeed = 0;
  // typed3.stop();
  setTimeout(function(){
    console.log("start")
    // typed3.arrayPos = typed3.arrayPos+1;
    // typed3.start();
    // typed3.backDelay = 3200;
    // typed3.backSpeed = 55;
  },2000)
  // typed3.arrayPos = typed3.arrayPos+1;
  // typed3.backDelay = 0;
  // typed3.backSpeed = 0;
  // typed3.typeSpeed = 0;

  // setTimeout(function(){
  //   typed3.backDelay = 3200;
  //   typed3.backSpeed = 55;
  //   typed3.typeSpeed = 80;
  // },500)
  //
    // typed3.options.preStringTyped();
  // typed3.options.preStringTyped =  function(pos, self) {
  //   // console.log('preStringTyped ' ,self);
  //   self.arrayPos = self.arrayPos+1;
  //  },
})
