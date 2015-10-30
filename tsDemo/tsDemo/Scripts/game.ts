module sn {

    export interface IMeleeWeapon {
        getDamage(): number;
        weight: number;
    }


    export class InventoryItem {


    }

    export class Character {
        public health: number;

        public name: string;
        public primaryWeapon: IMeleeWeapon;
    }

    export class Hero extends Character {
        public badGuysKilled: number;
        public milesTraveled: number;
    }
}