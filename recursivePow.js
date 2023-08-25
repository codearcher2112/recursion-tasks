function power(num, powNum) {
    if (powNum === 1) {
        return num;
    } else {
        return num * power(num, powNum - 1);
    }
}

power(2, 3);