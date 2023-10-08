var isLongPressedName = function(name, typed) {
    let prev = '';
    let i = 0;

    for (const c of typed) {
        if (i < name.length && c === name[i]) {
            prev = c;
            i++
            continue;
        }

        if (c !== prev) return false;
    }

    return i === name.length;
};