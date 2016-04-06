
    var input_array=['silver', 'lantern', 'wigglers', 'larry bird', 'shaq', 'bud ice', 'boomshakalaka'];
    var output_array=[];

    /**
     * Shuffles an array randomly
     * @param {Array} arr
     * @return Array
     */
function shuffle(array) {
    var m = array.length, t, i;

    // While there remain elements to shuffle…
    while (m) {

        // Pick a remaining element…
        i = Math.floor(Math.random() * m--);

        // And swap it with the current element.
        t = array[m];
        array[m] = array[i];
        array[i] = t;
        output_array.push();
    }

    return array;
}

    console.log(shuffle(input_array));