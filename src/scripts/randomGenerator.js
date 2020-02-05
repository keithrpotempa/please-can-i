const randomGenerator = {
    tf () {
        if (parseInt(Math.random()*2) === 1) {return true}
        else {return false}
    },
    num (min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min)) + min;
    }
}

export default randomGenerator;