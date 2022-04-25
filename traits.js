const COMMON_MAX_RARITY = 50;
const UNCOMMON_MAX_RARITY = 75;
const RARE_MAX_RARITY = 95;
const LEGENDARY_MAX_RARITY = 100;

const randomElement = (list) => {
    const _random = Math.floor(Math.random() * list.length);
    return list[_random];
}

const getBackground = () => {
    const _random = Math.floor(Math.random() * LEGENDARY_MAX_RARITY);

    if(_random < COMMON_MAX_RARITY) {
        return randomElement([
             'unique'
        ]);
    }else if(_random < UNCOMMON_MAX_RARITY) {
        return randomElement([
            'unique'
        ]);
    }else if(_random < RARE_MAX_RARITY) {
        return randomElement([
            'unique'
        ]);
    }else if(_random < LEGENDARY_MAX_RARITY) {
        return randomElement([
            'unique'
        ]);
    }
}

const getBodyAndHead = () => {
    const _random = Math.floor(Math.random() * LEGENDARY_MAX_RARITY);

    if(_random < COMMON_MAX_RARITY) {
        return randomElement([
             'gris', 'amarillo'
        ]);
    }else if(_random < UNCOMMON_MAX_RARITY) {
        return randomElement([
            'morado', '1'
        ]);
    }else if(_random < RARE_MAX_RARITY) {
        return randomElement([
            'piel', 'verde', '2'
        ]);
    }else if(_random < LEGENDARY_MAX_RARITY) {
        return randomElement([
            'naranja', 'azul'
        ]);
    }
}

const getOutfit = () => {
    const _random = Math.floor(Math.random() * LEGENDARY_MAX_RARITY);

    if(_random < COMMON_MAX_RARITY) {
        return randomElement([
             'Gap', 'Hoodie', 'Tanktop', 'Lumberjack'
        ]);
    }else if(_random < UNCOMMON_MAX_RARITY) {
        return randomElement([
            'Shirt with holes'
        ]);
    }else if(_random < RARE_MAX_RARITY) {
        return randomElement([
            'Blue Jacket', 'Red Jacket'
        ]);
    }else if(_random < LEGENDARY_MAX_RARITY) {
        return randomElement([
            'Pink Hoodie'
        ]);
    }
}

const getNose = () => {
    const _random = Math.floor(Math.random() * LEGENDARY_MAX_RARITY);

    if(_random < COMMON_MAX_RARITY) {
        return randomElement([
             '1', '2'
        ]);
    }else if(_random < UNCOMMON_MAX_RARITY) {
        return randomElement([
            '3', '4'
        ]);
    }else if(_random < RARE_MAX_RARITY) {
        return randomElement([
            '5'
        ]);
    }else if(_random < LEGENDARY_MAX_RARITY) {
        return randomElement([
            '6', '7'
        ]);
    }
}

const getMouth = () => {
    const _random = Math.floor(Math.random() * LEGENDARY_MAX_RARITY);

    if(_random < COMMON_MAX_RARITY) {
        return randomElement([
             '1', '2'
        ]);
    }else if(_random < UNCOMMON_MAX_RARITY) {
        return randomElement([
            '4','5',
        ]);
    }else if(_random < RARE_MAX_RARITY) {
        return randomElement([
             '3', '6'
        ]);
    }else if(_random < LEGENDARY_MAX_RARITY) {
        return randomElement([
            '7', 
        ]);
    }
}

const getEyes = () => {
    const _random = Math.floor(Math.random() * LEGENDARY_MAX_RARITY);

    if(_random < COMMON_MAX_RARITY) {
        return randomElement([
             '1', '2'
        ]);
    }else if(_random < UNCOMMON_MAX_RARITY) {
        return randomElement([
            '3'
        ]);
    }else if(_random < RARE_MAX_RARITY) {
        return randomElement([
             '4', '7'
        ]);
    }else if(_random < LEGENDARY_MAX_RARITY) {
        return randomElement([
            '5', '6'
        ]);
    }
}

const getSunglasses = () => {
    const _random = Math.floor(Math.random() * LEGENDARY_MAX_RARITY);

    if(_random < COMMON_MAX_RARITY) {
        return randomElement([
             '1'
        ]);
    }else if(_random < UNCOMMON_MAX_RARITY) {
        return randomElement([
            '2', '3'
        ]);
    }else if(_random < RARE_MAX_RARITY) {
        return randomElement([
             '5', '6'
        ]);
    }else if(_random < LEGENDARY_MAX_RARITY) {
        return randomElement([
            '4', '7'
        ]);
    }
}

const getHeadwear = () => {
    const _random = Math.floor(Math.random() * LEGENDARY_MAX_RARITY);

    if(_random < COMMON_MAX_RARITY) {
        return randomElement([
             '1'
        ]);
    }else if(_random < UNCOMMON_MAX_RARITY) {
        return randomElement([
            '1'
        ]);
    }else if(_random < RARE_MAX_RARITY) {
        return randomElement([
             '1'
        ]);
    }else if(_random < LEGENDARY_MAX_RARITY) {
        return randomElement([
            '1'
        ]);
    }
}

module.exports = {
    getBackground,
    getBodyAndHead,
    // getOutfit,
    getNose,
    getMouth,
    getEyes,
    getSunglasses,
    getHeadwear
}