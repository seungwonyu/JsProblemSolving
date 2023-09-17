const 포켓몬 = [
  {
    pokeid: 1,
    name: "이상해씨",
    type: "풀",
    lv: 50,
    hp: 105,
    atk: 70,
    def: 70,
    speed: 50,
    cri: 0.3,
    tech: { name: "덩쿨채찍", power: 40, type: "풀" },
  },
  {
    pokeid: 2,
    name: "파이리",
    type: "불",
    lv: 50,
    hp: 99,
    atk: 65,
    def: 55,
    speed: 70,
    cri: 0.3,
    tech: { name: "불꽃세례", power: 40, type: "불" },
  },
  {
    pokeid: 3,
    name: "꼬부기",
    type: "물",
    lv: 50,
    hp: 104,
    atk: 55,
    def: 69,
    speed: 48,
    cri: 0.3,
    tech: { name: "물대포", power: 40, type: "물" },
  },
];

function battle(mypokemon) {
  const 포켓몬1 = 포켓몬.find((i) => i.name == mypokemon);
  let enemy = 0;
  while ((enemy == 1 || enemy == 2 || enemy == 3) == false) {
    enemy = Math.floor(Math.random() * 3) + 1;
  }
  const 포켓몬2 = 포켓몬.find((i) => i.pokeid == enemy);
  console.log(`[라이벌]은 ${포켓몬2.name}을/를 내보냈다`);
  console.log(`[라이벌] : 가랏! ${포켓몬2.name}!`);
  let crit1;
  let crit2;
  let effect1to2;
  let effect2to1;
  let count = 1;

  if (
    ((포켓몬1.type == "풀" && 포켓몬2.type == "물") ||
      (포켓몬1.type == "물" && 포켓몬2.type == "불") ||
      (포켓몬1.type == "불" && 포켓몬2.type == "풀")) == true
  ) {
    effect1to2 = 2;
    effect2to1 = 1;
  } else if (
    ((포켓몬1.type == "물" && 포켓몬2.type == "풀") ||
      (포켓몬1.type == "불" && 포켓몬2.type == "물") ||
      (포켓몬1.type == "풀" && 포켓몬2.type == "불")) == true
  ) {
    effect1to2 = 1;
    effect2to1 = 2;
  } else {
    effect1to2 = 1;
    effect2to1 = 1;
  }
  const trainer = "한지우";

  function damage1() {
    if (Math.random() < 포켓몬1.cri) {
      crit1 = 2;
      console.log(`[${trainer}] : ${포켓몬1.name}, ${포켓몬1.tech.name}!`);
      if (effect1to2 == 2) {
        console.log(`효과가 굉장했다`);
      }
      console.log(`${포켓몬1.name}은/는 급소를 공격했다`);
    } else {
      console.log(`[${trainer}] : ${포켓몬1.name}, ${포켓몬1.tech.name}!`);
      if (effect1to2 == 2) {
        console.log(`효과가 굉장했다`);
      }
      crit1 = 1;
    }

    const damage1 = Math.floor(
      ((((((포켓몬1.lv * 2) / 5 + 2) * 포켓몬1.tech.power * 포켓몬1.atk) /
        50 /
        포켓몬2.def +
        2) *
        crit1 *
        (Math.random() * 15 + 85)) /
        100) *
        1.5 *
        effect1to2
    );

    if (포켓몬2.hp > damage1) {
      포켓몬2.hp = 포켓몬2.hp - damage1;
      console.log(`[라이벌] : ${포켓몬2.name}의 hp가 ${포켓몬2.hp} 남았다`);
    } else {
      포켓몬2.hp = 0;
      console.log(`[라이벌] : ${포켓몬2.name}의 hp가 ${포켓몬2.hp} 남았다`);
      console.log(`[라이벌] : ${포켓몬2.name}가 쓰러졌다`);
      return console.log(`[라이벌] 과의 승부에서 승리하였다`);
    }
  }

  function damage2() {
    if (Math.random() < 포켓몬2.cri) {
      crit2 = 2;
      console.log(`[라이벌] : ${포켓몬2.name}, ${포켓몬2.tech.name}!`);
      if (effect2to1 == 2) {
        console.log("효과가 굉장했다");
      }
      console.log(`${포켓몬2.name}은/는 급소를 공격했다`);
    } else {
      console.log(`[라이벌] : ${포켓몬2.name}, ${포켓몬2.tech.name}!`);
      if (effect2to1 == 2) {
        console.log("효과가 굉장했다");
      }
      crit2 = 1;
    }
    const damage2 = Math.floor(
      ((((((포켓몬2.lv * 2) / 5 + 2) * 포켓몬2.tech.power * 포켓몬2.atk) /
        50 /
        포켓몬1.def +
        2) *
        crit2 *
        (Math.random() * 15 + 85)) /
        100) *
        1.5 *
        effect2to1
    );
    if (포켓몬1.hp > damage2) {
      포켓몬1.hp = 포켓몬1.hp - damage2;
      console.log(`[${trainer}] : ${포켓몬1.name}의 hp가 ${포켓몬1.hp} 남았다`);
    } else {
      포켓몬1.hp = 0;
      console.log(`[${trainer}] : ${포켓몬1.name}의 hp가 ${포켓몬1.hp} 남았다`);
      console.log(`[${trainer}] : ${포켓몬1.name}가 쓰러졌다`);
      return console.log(`[라이벌] 과의 승부에서 패배하였다`);
    }
  }
  if (포켓몬1.speed >= 포켓몬2.speed) {
    while ((포켓몬1.hp == 0 || 포켓몬2.hp == 0) !== true) {
      console.log(`${count}턴`);
      damage1();
      if ((포켓몬1.hp == 0 || 포켓몬2.hp == 0) !== true) {
        damage2();
        count++;
      }
    }
  } else {
    while ((포켓몬1.hp == 0 || 포켓몬2.hp == 0) !== true) {
      console.log(`${count}턴`);
      damage2();
      if ((포켓몬1.hp == 0 || 포켓몬2.hp == 0) !== true) {
        damage1();
        count++;
      }
    }
  }
}

battle("꼬부기");
