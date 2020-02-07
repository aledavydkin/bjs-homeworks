class Weapon {
    constructor({ name, attack, durability, range }) {
        this.name = name;
        this.attack = attack;
        this.durability = durability;
        this.startDurability = this.durability;
        this.range = range;
    }

    takeDamage(damage) {
        this.durability = this.durability - damage;
        if (this.durability < 0) {
            this.durability = 0;
        }
        return damage;
    }

    getDamage() {
        if (this.durability >= (100 * this.startDurability) / this.durability) {
            return this.attack;
        } else if (this.durability = 0) {
            return 0;
        } else {
            return this.attack / 2;
        }
    }

    isBroken() {
        return this.durability > 0 ? false : true;
    }
}

const sword = new Weapon({
    name: 'Старый меч',
    attack: 20,
    durability: 10,
    range: 1,
});

sword.takeDamage(5);
console.log(sword.durability);

sword.takeDamage(50);
console.log(sword.durability);

const arm = new Weapon({
    name: 'Рука',
    attack: 1,
    durability: Infinity,
    range: 1,
});

arm.takeDamage(20);
console.log(arm.durability);

const bow = new Weapon({
    name: 'Лук',
    attack: 10,
    durability: 200,
    range: 3,
});

bow.takeDamage(20);
console.log(bow.durability); // 180

bow.takeDamage(200);
console.log(bow.durability); // 0

console.log(bow.durability); // 0
console.log(bow.getDamage()); // 0

console.log(arm.durability); // Infinity
console.log(bow.getDamage()); // 1


console.log(bow.durability); // 0
console.log(bow.isBroken()); // true
console.log(arm.durability); // Infinity
console.log(bow.isBroken()); // false

class Arm extends Weapon {
    constructor() {
        super({
            name: 'Рука',
            attack: 1,
            durability: Infinity,
            range: 1
        });
    }
}

class Bow extends Weapon {
    constructor() {
        super({
            name: 'Лук',
            attack: 10,
            durability: 200,
            range: 3
        });
    }
}

class Sword extends Weapon {
    constructor() {
        super({
            name: 'Меч',
            attack: 25,
            durability: 500,
            range: 1
        });
    }
}

class Knife extends Weapon {
    constructor() {
        super({
            name: 'Нож',
            attack: 5,
            durability: 300,
            range: 1
        });
    }
}

class Stick extends Weapon {
    constructor() {
        super({
            name: 'Посох',
            attack: 8,
            durability: 300,
            range: 2
        });
    }
}


class LongBow extends Bow {
    constructor() {
        super();
        this.name = 'Длинный лук';
        this.attack = 15;
        this.range = 4;
    }
}

class Axe extends Sword {
    constructor() {
        super();
        this.name = 'Секира';
        this.attack = 27;
        this.durability = 800;
        this.startDurability = this.durability;
    }
}

class StormStick extends Stick {
    constructor() {
        super();
        this.name = 'Посох Бури';
        this.attack = 10;
        this.range = 3;
    }
}

const storm = new StormStick();

console.log(storm);
console.log(storm.attack);
console.log(storm.durability);
console.log(storm.range);

//3 задача

class StudentLog {
    constructor(name) {
        this.name = name;
        this.subjects = {};
    }

    getName() {
        return this.name;
    }

    addGrade(grade, subject) {

        if (!Number.isFinite(grade) || (grade > 5 || grade < 1)) {
            return console.log(`Вы пытались поставить оценку "${grade}" по предмету "${subject}". Допускаются только числа от 1 до 5.`);
        }
        if (!this.subjects[subject]) {
            this.subjects[subject] = [];
        }

        this.subjects[subject].push(grade);
        return this.subjects[subject].length;
    }

    getAverageBySubject(subject) {
        if (!this.subjects[subject]) {
            return 0;
        }
        let result = 0;
        for (let items of this.subjects[subject]) {
            result += items;
        }
        return (result / this.subjects[subject].length).toFixed(2);
    }

    getTotalAverage() {
        if (Object.keys(this.subjects).length === 0) {
            return 0;
        }
        let summ = 0;
        for (const subject in this.subjects) {
            summ += this.getAverageBySubject(subject);
        }
        return summ / Object.keys(this.subjects).length;
    }
}

const log = new StudentLog('Олег Никифоров');
console.log(log.getName())


console.log(log.addGrade(3, 'algebra'));
// 1

console.log(log.addGrade('отлично!', 'math'));
// Вы пытались поставить оценку "отлично!" по предмету "math". Допускаются только числа от 1 до 5.
// 0

console.log(log.addGrade(4, 'algebra'));
// 1

console.log(log.addGrade(5, 'geometry'));
// 1

console.log(log.addGrade(25, 'geometry'));
// Вы пытались поставить оценку "25" по предмету "geometry". Допускаются только числа от 1 до 5.
// 1


log.addGrade(2, 'algebra');
log.addGrade(4, 'algebra');
log.addGrade(5, 'geometry');
log.addGrade(4, 'geometry');

console.log(log.getAverageBySubject('geometry')); // 4.5
console.log(log.getAverageBySubject('algebra')); // 3
console.log(log.getAverageBySubject('math')); // 0

console.log(log.getTotalAverage()); // 3,75