import Game from "./js/Game.js"


//start button action
// document.querySelector("button.start").addEventListener("click", Game.startGame);
export const numberOfCards = 12;
Game.startGame(numberOfCards);
// document.querySelector(`div.card[data-index='11']`);

//pick two cards - when picked one, wait to picked second i zablokuj klikanie wiecej;
//flaga na false; nadaj transparent; pobierz liste coverow. sprawdz ich bgc, jesli dwa z nich maja wartosc transparent - najpierw sprawdz czy matching. jesli match to wywal w pizdziec cover i sam card, jesli not matching -  wlacz settimeout i po 1,5sekundy wroc do 'bgc=grey' dla coverow

//check pick - if colours the same, cards dissapear, if different - cover them again;
//




//gra dziala, wyrzuca divy wiec robia sie dziury, trzeba to ogarnac
//do tego ten potwor createCardsCovers z klasy board jest do zrefaktorowania fchuj
//w momencie trafienia tych samych komorek mozna by w miejsce wywalonych
//wstawiac new object blank zeby nie przesuwac klocuczkow albo jakos tak o
//do tego wciaz trzeba usunac mozliwosc odkrywania kolejnych kart, zanim
//dwie sie nie odwroca

//dodac punktacje
//tablice punktow (localStorage!)

