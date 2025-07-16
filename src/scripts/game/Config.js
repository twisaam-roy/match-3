import { Game } from "./Game";
import { Tools } from "../system/Tools";

export const Config = {
    loader: Tools.massiveRequire(require["context"]('./../../sprites/', true, /\.(mp3|png|jpe?g)$/)),
    soundLoader: Tools.massiveRequire(require["context"]('./../../sounds/', true, /\.(mp3|png|jpe?g)$/)),
    startScene: Game,
    tilesColors: ['blue', 'green', 'orange', 'red', 'pink', 'yellow'],
    board: {
        rows: 8,
        cols: 8
    },
    combinationRules: [[
        { col: 1, row: 0 }, { col: 2, row: 0 }
    ], [
        { col: 0, row: 1 }, { col: 0, row: 2 }
    ]],
    style: {
        fontFamily: 'Desyrel',
        fontSize: 35,
    }
};