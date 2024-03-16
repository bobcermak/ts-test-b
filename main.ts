// Analyzátor datového toku
/*
  Na API jednoduchého webového analyzátoru přichází log dat 
  z inspekčního modulu routeru firemní sítě.
  Data představují informaci o agregovaných velikostech datagramů v bitech (b) 
  za posledních 100 milisekund (ms).
  Z toho můžeme zjistit, jakou rychlostí data proudí naší sítí. 
  (Jedná se o tzv. goodput.) 
  Informace o rychlosti se obvykle udává v megabitech za sekundu (Mbps).
  Jeden megabit odpovídá 1000000 bitů.
*/

// Ukázkový vstup jedné dávky dat
/*
  Každé číslo představuje počet bitů přenesených za 100 ms. 
  Hodnoty jsou vždy řazeny chronologicky. 
  Předem nevíme, kolik v jedné dávce přijde takových hodnot, 
  ale určitě jejich počet bude dělitelný deseti bezezbytku.
*/
let data: Array<number> = [19001264, 16633737, 14572964, 13994284, 21105829, 2951431, 29360416, 31644638, 23902405, 18661594, 8263449, 19204170, 10708400, 7844183, 7590074, 5913449, 4081707, 24082970, 15694899, 3597721];
let mereni1: Array<number> = []
let mereni2: Array<number> = []


let soucet1: number = 0
let soucet2: number = 0


for (let i = 0; i < data.length; i++) {
    if (i < 10) {
        mereni1.push(data[i])
    }

    else {
        mereni2.push(data[i])
    }
}


for (let x of mereni1) {
    soucet1 += x
}


for (let y of mereni2) {
    soucet2 += y
}


let celkSoucet1 = Math.roundWithPrecision(soucet1 * 0.000001, 1)
let celkSoucet2 = Math.roundWithPrecision(soucet2 * 0.000001, 1)







// Ukázkový výstup
/*
  Na každý řádek console.log() vypište číslo zaokrouhlené na jedno desetinné místo, ve tvaru XX.X Mbps
  (Představuje aktuální efektivní propustnost sítě. Uvidíme tak, jak kolísá reálné vytížení naší sítě v čase.)
*/
console.log(celkSoucet1 + " Mbps");
console.log(celkSoucet2 + " Mbps");

/* Vysvětlení ukázkového vstupu a výstupu
 * V této dávce bylo doručeno celkem 20 hodnot.
 * Prvních deset odpovídá objemu přenesených bitů v první sekundě,
 * druhých deset pak v sekundě následující.
 * Prostým součtem hodnot získáme rychlost v bps (bitů za sekundu).
 * Megabitů za sekundu je 10^6 krát méně.
 * Výsledné číslo lze zaokrouhlit pomocí funkce Math.round() nebo v MakeCode existuje i metoda Math.roundWithPrecision().
 */