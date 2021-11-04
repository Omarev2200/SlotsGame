$(function loadGames() {
  const url = 'https://www.palmsbet.com/static/games_bg.json';

  $.ajax({
    methot: "GET",
    url,
    success: function(data) {

        const gamesArr = Object.entries(data.game_list);
        const result = gamesArr.filter(([key, value]) => value.vendor_code === "CTRGSECASINO");
        result.forEach(e => {
          let img;
          
          if (e[1].img_url.substring(0, 6) != 'https:') {
            img = `Https:${e[1].img_url}`;
          }else{
            img = e[1].img_url;
          }
         
            let game = `
        <div class="card-game">
          <img class="card-game__img" src="${img}" alt="${e[1].name}">
          <div class="card-game__wrapper">
          <h3 class="card-game__title">${e[1].name}</h3>
          <i class="fa fa-star-o""></i>
          </div>
          <div class="play-game">
          <h3 class="card-game__title">${e[1].name}</h3>
          <i class="fa fa-star-o""></i>
            <button class="btn btn__demo">Демо</button>
            <button class="btn btn__play">Играй</button>
          </div>
        </div>`;

            $('.games-container').append(game)

            $('.card-game').on('mouseenter mouseleave', function (ev) {
              let $element = this.childNodes[3];
              if (ev.type === "mouseenter") { $($element).css('opacity', '0'); }
              else if (ev.type === "mouseleave") { $($element).css('opacity', '1'); }
            })
        });

    },
    error: (err) => console.log(err)
});
});


