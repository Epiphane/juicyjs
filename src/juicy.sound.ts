var Sounds: { [key: string]: MultiSampleSound } = {};

class MultiSampleSound {
    elements: HTMLAudioElement[] = [];
    volume: number = 1;
    index: number = 0;

    constructor(src: string, loop: boolean, samples: number, volume: number) {
        for (var i = 0; i < samples; i++) {
            var sound = document.createElement('audio');
            sound.volume = volume || 1;
            sound.loop = loop;

            var source = document.createElement("source");
            source.src = src;
            sound.appendChild(source);
            sound.load();
            this.elements.push(sound);
        }
    }

    play() {
        this.elements[this.index].play();
        this.index = (this.index + 1) % this.elements.length;
    }

    pause() {
        this.elements.forEach(el => el.pause());
    }

    stop() {
        this.elements.forEach(el => {
            el.pause();
            el.currentTime = 0;
        });
    }
}

export function MuteMusic() {
    for (var key in Sounds) {
        Sounds[key].elements.forEach(function (element) {
            if (element.loop) {
                element.volume = 0;
            }
        });
    }
}

export function MuteSfx() {
    for (var key in Sounds) {
        Sounds[key].elements.forEach(function (element) {
            if (!element.loop) {
                element.volume = 0;
            }
        });
    }
}

export function Play(name: string) {
    Sounds[name].play();
}

export function Pause(name: string) {
    Sounds[name].pause();
}

export function Load(name: string, src: string, loop?: boolean, samples?: number, volume?: number) {
    Sounds[name] = new MultiSampleSound(src, !!loop, samples || 1, volume || 1);
}
