import { Component, NgModule } from '@angular/core';

//Console, Manufacturer, and AppComponent

@NgModule({
  declarations: [Manufacturer],
  providers: [Manufacturer]
})
export class Manufacturer {
  nm: string;
  constructor(nm: string) {
    this.nm = nm;
  }
}

@NgModule({
  declarations: [Console],
  providers: [Console]
})
export class Console {
  nm: string;
  mn: string;
  yr: number;
  static use: number = 0;
  constructor(nm: string, yr: number, obj: Manufacturer) {
    this.nm = nm;
    this.mn = obj.nm;
    this.yr = yr;
    Console.use = Console.use + 1;
  }
  public dispCons() {

  }
}

@NgModule({
  declarations: [Game],
  providers: [Game]
})
export class Game {
  gmn: string;
  nm: string;
  cs: string;
  gyr: number;
  constructor(nm: string, mn: Manufacturer, cs: Console, yr: number) {
    this.nm = nm;
    this.gmn = mn.nm;
    this.cs = cs.nm;
    this.gyr = yr;
  }
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  /**
   * Add a Game to the Game Array
   */
  public addGame(gg: Game) {
    this.games.push({ mn: gg.gmn, nm: gg.nm, yr: gg.gyr, cs: gg.cs });
  }
  /**
   * Add a Console to the Console Array
   */
  public addConsole(cc: Console) {
    this.consoles.push({ mn: cc.mn, nm: cc.nm, yr: cc.yr });
  }
  //Nintendo
  static ntd: Manufacturer = new Manufacturer("Nintendo");
  nx: Console = new Console("Nintendo Switch", 2017, AppComponent.ntd);
  stwo: Game = new Game("Splatoon 2", AppComponent.ntd, this.nx, 2017);
  threeds: Console = new Console("Nintendo 3DS", 2013, AppComponent.ntd);
  pksm: Game = new Game("Pokemon Sun/Moon", AppComponent.ntd, this.threeds, 2016);
  //Microsoft
  static mc: Manufacturer = new Manufacturer("Microsoft");
  xbts: Console = new Console("Xbox 360", 2007, AppComponent.mc);
  ftft: Game = new Game("Fifa 2015", AppComponent.mc, this.xbts, 2015);

  consoles: any[];
  games: any[];
  constructor() {
    this.consoles =
      [
        /*{ mn: this.nx.mn, nm: this.nx.nm, yr: 2017 },
        { mn: this.nx.mn, nm: "NEW 3DS (XL)", yr: 2015 },
        { mn: this.nx.mn, nm: "Wii U", yr: 2012 },
        { mn: this.nx.mn, nm: this.threeds.nm, yr: 2011 },
        { mn: this.nx.mn, nm: "Wii", yr: 2006 },
        { mn: this.xbts.mn, nm: this.xbts.nm, yr: 2007 }*/
      ];
    this.games =
      [
        /*{ mn: this.stwo.gmn, nm: this.stwo.nm, c: this.stwo.cs, yr: this.stwo.gyr },
        { mn: this.nx.mn, nm: "Legend of Zelda: Breath of the Wild", c: "Nintendo Switch / Nintendo Wii U", yr: 2017 },
        { mn: "GameFreak", nm: "Pokemon Sun / Pokemon Moon", c: this.threeds.nm, yr: 2016 },
        { mn: this.nx.mn, nm: "Super Paper Mario", c: "Nintendo Wii", yr: 2008 },
        { mn: this.nx.mn, nm: "Luigi's Mansion", c: "GameCube", yr: 2001 }*/
      ];
      //Init Consoles
      this.addConsole(this.nx);
      this.addConsole(this.xbts);
      //Init Games
      this.addGame(this.stwo);
      this.addGame(this.pksm);
      this.addGame(this.ftft);
  }
}