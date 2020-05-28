let HELP_DELAY = 1500;
let HELP_TIMER = -1;

let SCORE_1 = 0;
let SCORE_2 = 0;
let SCORE_3 = 0;
let SCORE_4 = 0;
let SCORE_5 = 0;

let SCORE_NAME_DEFAULT = "-------";

let SCORE_1_NAME = SCORE_NAME_DEFAULT;
let SCORE_2_NAME = SCORE_NAME_DEFAULT;
let SCORE_3_NAME = SCORE_NAME_DEFAULT;
let SCORE_4_NAME = SCORE_NAME_DEFAULT;
let SCORE_5_NAME = SCORE_NAME_DEFAULT;

let ENTER_NAME_DEFAULT_CHAR = "-";
let ENTER_NAME_MAX_CHAR = 7;
let ENTER_NAME = -1;
let ENTER_NAME_POSITION = 0;
let ENTER_NAME_DELAY = 300;
let ENTER_NAME_TIMER = -1;

let GAME_OVER = false;
let GAME_PAUSE = false;
let GAME_SPECIAL_AUTHORIZED = false;
let GAME_START_DELAY = 650;
let GAME_START_TIMER = -1;

let LINES = "";
let LINES_BLINK_COUNTER = 0;
let LINES_BLINK_TIMER = -1;
let LINES_BLINK_DELAY = 200;
let LINES_BLINK_MAX = 5;
let LINES_MAX_X = 10;
let LINES_MAX_Y = 18;

let PIECE_NEXT = -1;
let PIECE_NEXT_MASKED = false;
let PIECE_CONTROL = "NULL";
let PIECE_DOWN_TIMER = -1;
let PIECE_DISABLED_TIMER = -1;
let PIECE_DISABLED_DELAY = 10;
let PIECE_DISABLED_X = -1;
let PIECE_DISABLED_Y = -1;
let PIECE_START_X = (LINES_MAX_X / 2) + 1;
let PIECE_START_Y = (LINES_MAX_Y - 2);

let PLAYER_LEVEL = 0;
let PLAYER_LINES = 0;
let PLAYER_LINES_LEVEL = 0;
let PLAYER_SCORE = 0;
let PLAYER_SCORE_MAXIMUM = 999999;
let PLAYER_SCORE_BONUS = 0;
let PLAYER_SPEED_DEFAULT = 1000;
let PLAYER_SPEED = PLAYER_SPEED_DEFAULT;
let PLAYER_SPEED_DELAY = 97;