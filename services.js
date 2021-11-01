import { hover } from './hover.js';

export const getSlotGames = function() {
    const URL = 'https://www.palmsbet.com/static/games_bg.json';

    $.getJSON(URL, function(data) {

        const gamesArr = Object.entries(data.game_list);
        const result = gamesArr.filter(([key, value]) => value.vendor_code === "CTRGSECASINO");
        result.forEach(e => {

            let game = `
            <div class="card-game">
              <img class="card-game__img" src="${e[1].img_url}" alt="${e[1].name}">
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
            hover();
        });

    });
};