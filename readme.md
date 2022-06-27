#notFinishedYet

MEMORYGAME

Live:
https://karoljablonski.github.io/MemoryGame/

Game assumptions:

1. create board of 3x4 cards. 
2. Card requirements: 6 colours, so cards are 'paired', and they need to be assigned to board randomly.
3. While resting, cards are grey.
4. Click on single card makes it 'turn over' and specific, assigned to it colour is visible.
5. When first card is turned over, app wait for another pick up, then switch colour to visible and check if won or lost.
6. If win == same colours at two different, chosen cards == make them disappear by blending with background.
7. If lost == different colours at two different, chosen cards == wait x seconds (500ms f.e.) and their background turn grey again.
8. when all are discovered, info about win and button for 'play again'

Future requirements:

1. Create game interface (for example start with 6 cards, then 8, 10 etc., information about winning/losing, some animations).
2. Possibility to play 'single mode' and set number of cards and sth like 'challenge mode' when u start with 6, and go on to X.
3. Insert settings such as "easy, normal, hard".
4. Counting points (time, mistakes)
5. Create table of results (localstorage)
6. Animated rolling cards
