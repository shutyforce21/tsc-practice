export default function typeAliasSample() {

    // 合併型(Union(和集合))と交差型(Intersection(積集合))
    type Knight = {
        hp: number,
        sp: number,
        weapon: string,
        swordSkill: string
    }

    type Wizard = {
        hp: number,
        mp: number,
        weapon: string,
        magicSkill: string
    }

    // 合併型
    type Adventure = Knight | Wizard;

    // 交差型
    type Paladin = Knight & Wizard;

    const adventure1: Adventure = {
        hp: 100,
        sp: 200,
        weapon: 'sword',
        swordSkill: 'Level 1',
    }

    const adventure2: Adventure = {
        hp: 100,
        mp: 200,
        weapon: 'stick',
        magicSkill: 'Level 1',
    }

    console.log('adventure1: ', adventure1);
    console.log('adventure2: ', adventure2);

    const adventure3: Paladin = {
        hp: 100,
        sp: 200,
        mp: 200,
        weapon: 'stick',
        swordSkill: 'Level 1',
        magicSkill: 'Level 1',
    }

    console.log('adventure3: ', adventure3);
}