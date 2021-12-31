/**
  RG LazyYoutube - Embed youtube video with javascript on-click lazy loading approach
  @version v1.0.0
  @author Me
  @source https://webdesign.tutsplus.com/tutorials/how-to-lazy-load-embedded-youtube-videos--cms-26743
**/

( function() {
  var ytlazy = document.querySelectorAll( ".rg-lazyYT" );

  for (var i = 0; i < ytlazy.length; i++) {
    var image = new Image(),
        source = "https://img.youtube.com/vi/"+ ytlazy[i].dataset.embed +"/sddefault.jpg";

    image.className = "rg-lazyImage";
    image.src = source;
    image.addEventListener( "load", function() {
      ytlazy[ i ].appendChild( image );
    }( i ) );

    ytlazy[i].addEventListener( "click", function() {
      var iframe = document.createElement( "iframe" );

      iframe.setAttribute( "frameborder", "0" );
      iframe.setAttribute( "allowfullscreen", "" );
      iframe.setAttribute( "src", "https://www.youtube.com/embed/"+ this.dataset.embed +"?rel=0&showinfo=0&autoplay=1" );

      this.innerHTML = "";
      this.appendChild( iframe );
    } );
  };

} )();
