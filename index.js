let Name = "Ruan";
let Xp = 10010;

if (Xp <= 1000) {
  console.log(`${Name} está no Ferro`);
    } else if (Xp <= 2000 && Xp > 1000) {
    console.log(`O herói de nome: ${Name} está no Bronze`);
        } else if (Xp <= 5000 && Xp > 2000) {
        console.log(`O herói de nome: ${Name} está no Prata`);
            } else if (Xp <= 7000 && Xp > 5000) {
            console.log(`O herói de nome: ${Name} está no Ouro`);
                } else if (Xp <= 8000 && Xp > 7000) {
                console.log(`O herói de nome: ${Name} está no Platina`);
                    } else if (Xp <= 9000 && Xp > 8000) {
                    console.log(`O herói de nome: ${Name} está no Ascendente`);
                        } else if (Xp <= 10000 && Xp > 9000) {
                        console.log(`O herói de nome: ${Name} está no Imortal`);
                            } else { console.log(`O herói de nome: ${Name} está no Radiante`);}
console.log(`Com exatos ${Xp} de XP` );