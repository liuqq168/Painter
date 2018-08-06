import Card from './card';
import DancingCard from './dancing-card';

export default class Pac {
  palettes = []

  constructor() {
    const ps = [
      new Card(),
      new DancingCard(),
    ];
    this.palettes.push(...ps);
  }

  getPalette(name) {
    for (const i in this.palettes) {
      if (name === this.palettes[i].constructor.name) {
        return this.palettes[i];
      }
    }
  }
}
