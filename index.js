// Code your solution in this file!
function distanceFromHqInBlocks(x) {
    let distance;
    if (x > 42) {
        distance = x - 42;
    }
    else if (x <= 42) {
        distance = 42 - x;
    }
    return distance;
}

function distanceFromHqInFeet(x) {
    let blocks = distanceFromHqInBlocks(x);
    return blocks * 264;
}

function distanceTravelledInFeet(a, b) {
    let feet;
    if (a >= b) {
        feet = (a - b) * 264;
    }
    else if (a < b) {
        feet = (b - a) * 264;
    }
    return feet;
}

function calculatesFarePrice(a, b) {
    let fare;
    let calc = distanceTravelledInFeet(a, b);
    if (calc <= 400) {
        fare = 0;
    }
    else if ((calc > 400) && (calc <= 2000)) {
        fare = (calc - 400) * .02;
    }
    else if ((calc > 2000) && (calc <= 2500)) {
        fare = 25
    }
    else if (calc > 2500) {
        fare = 'cannot travel that far';
    }
    return fare;
}