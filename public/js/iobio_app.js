
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
    window.onload = typeOnLoad;
