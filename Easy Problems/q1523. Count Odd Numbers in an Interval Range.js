const countOdds = (low, high) => {
    if (low % 2 === 1) {
        low--;
    }
    if (high % 2 === 1) {
        high++;
    }
    return (high - low) / 2;
};