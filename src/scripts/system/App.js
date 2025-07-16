import * as PIXI from "pixi.js";
import { gsap } from "gsap";
import { PixiPlugin } from "gsap/PixiPlugin";
import { Loader } from "./Loader";
import * as sound from "pixi-sound";

class Application {
    run(config) {
        gsap.registerPlugin(PixiPlugin);
        PixiPlugin.registerPIXI(PIXI);

        this.config = config;

        this.app = new PIXI.Application({ resizeTo: window });
        globalThis.__PIXI_APP__ = this.app;
        document.body.appendChild(this.app.view);

        this.loader = new Loader(this.app.loader, this.config);
        this.loader.preload().then(() => this.start());
    }

    res(key) {
        return this.loader.resources[key].texture;
    }

    sprite(key) {
        return new PIXI.Sprite(this.res(key));
    }

    start() {
        this.scene = new this.config["startScene"]();
        this.app.stage.addChild(this.scene.container);
    }

    sound(key, volume, autoPlay, loop) {
        return new sound.default.Sound.from({
            url: this.loader.resources[key],
            autoPlay: autoPlay,
            loop: loop,
            volume: volume
        });
    }

}

export const App = new Application();
