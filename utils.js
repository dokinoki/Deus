export const roll = (str) => {
    const regex = /(\d+)d(\d+)|\+(\d+)/gm;
    let m;
    let multiplier;
    let dice;
    let addition = 0;

    while ((m = regex.exec(str)) !== null) {
        // This is necessary to avoid infinite loops with zero-width matches
        if (m.index === regex.lastIndex) {
            regex.lastIndex++;
        }

        // The result can be accessed through the `m`-variable.
        m.forEach((match, groupIndex) => {
            if (match && groupIndex === 1) multiplier = match;
            if (match && groupIndex === 2) dice = match;
            if (match && groupIndex === 3) addition = parseInt(match, 10);
        });
    }

    return {
        isRoll: !!(multiplier && dice),
        multiplier,
        dice,
        addition
    }
};
