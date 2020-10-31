const probabilitilized = new Probability({
    p: '99.5%',                                         /* the probability by that ... */
    f: function () {                                  /* ... this function is called */
        counter[0]++;
    }
}, {
    p: '0.5%',
    f: function () {
        counter[1]++;
    }
});