var dice = document.getElementById('dice');
dice.style.cursor = 'pointer';
dice.onclick = function() {
    roll();
};


//testRolls();

function roll() {
    var statStr = document.getElementById('stat-str');
    var statDex = document.getElementById('stat-dex');
    var statInt = document.getElementById('stat-int');
    var statLuk = document.getElementById('stat-luk');
    var stats = generateStats();
    statStr.innerHTML = stats[0];
    statDex.innerHTML = stats[1];
    statInt.innerHTML = stats[2];
    statLuk.innerHTML = stats[3];
}

// getRandomRange [min, max] inclusive
function getRandomRange(min, max) {
    return Math.floor(Math.random() * (max-min+1)) + min;
}



// this doesn't create a even distribution, but that's okay.
// it's suposed to be harder to roll low STR/DEX stats.
function generateStats() {
    var total = 25;
    var minStat = 4;
    var maxStat = 13;
    var stats = [0, 0, 0, 0];
    for (i = 0; i < stats.length; i++) {
        // for the last one just take whatever is left
        if (i == stats.length - 1) {
            stats[i] = total;
            break;
        }
        stats[i] = getRandomRange(minStat, maxStat);
        total -= stats[i];
        remaining = stats.length - i - 1;
        var subtract = 4 * (remaining - 1);
        maxStat = total - subtract;
    }

    return stats;
}



function testRolls() {
    var totalStr = 0;
    var totalDex = 0;
    var totalInt = 0;
    var totalLuk = 0;

    var n = 100000;
    for (var i = 0; i < n; i++) {
        var s = generateStats();
        totalStr += s[0];
        totalDex += s[1];
        totalInt += s[2];
        totalLuk += s[3];
    }
    console.log(totalStr / n, totalDex / n, totalInt / n, totalLuk / n);
}

