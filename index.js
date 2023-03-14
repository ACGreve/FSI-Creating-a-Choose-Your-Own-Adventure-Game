let firstAnswer  = window.prompt('Do you head left or right?')
if(firstAnswer === 'left'){
    let secondAnswer = window.prompt(`You come across a stray cat. 
It scampers off down a small hole, just large enough for you to crawl through. 
Do you follow it, or continue on your path?`)
} else if(firstAnswer === 'right') {
    let secondAnswer = window.prompt(`You come across a snoring dragon. 
On the other side of him, you see a shiny chest of treasure. Another path would 
lead you away from the dragon altogether. Which path do you take?`)
};

console.log(firstAnswer);

if(secondAnswer === 'follow'){
    let thirdAnswer = window.prompt(`You come across a stray cat. It scampers off down a small hole just large enough for you to crawl through. Do you follow it or continue on your path?`)
    } elseif(secondAnswer === 'continue'){
    let thirdAnswer = window.prompt(`You come across a stray cat. It scampers off down a small hole just large enough for you to crawl through. Do you follow it or continue on your path?`)
    } elseif(secondAnswer === 'past the dragon'){
    let thirdAnswer = window.prompt(`The dragon wakes up and sits upright. You only have a moment to respond, to stay or run:`)
    } elseif(secondAnswer === 'away from the dragon'){
    let thirdAnswer = window.prompt(`After walking a while longer, you come across a shiny blue flower. It is so beautiful that you decide you must either draw it or pick it. Which do you do?`)
    };

console.log(secondAnswer);

if(thirdAnswer === 'stay'){
    window.alert(`You and the dragon have an uplifting conversation about local politics and become lifelong friends.`)
    } elseif(thirdAnswer === 'run'){
    window.alert(`Quickly, you run back to the cave's entrance. Sheepish, you return home.`)
    } elseif(thirdAnswer === 'draw it'){
    window.alert(`You draw the flower, capturing only a fraction of its beauty with your quill. You bring the drawing home, somewhat disappointed, but over time, discover joy in sharing it with your friends and family, recounting the story of your days as a sorcerer with the aid of the sketch.`)
    } elseif(thirdAnswer === 'pick it'){
    window.alert(`ou pick the flower and bring it home, and all marvel at its brilliance. However, over time it fades and eventually crumbles to dust.`)
    } elseif(thirdAnswer === 'stay'){
    window.alert(`You live happily amongst the cats for the rest of your days.`)
    } elseif(thirdAnswer === 'spread the word'){
    window.alert(`After leaving the cat colony, you are never able to find it again; without proof, no one believes your story, which passes into legend nonetheless.`)
    } elseif(thirdAnswer === 'ladder'){
    window.alert(`After ascending a few feet up the ladder, one of its rungs snaps, and you comedically fall through each of the rungs below. Sheepish, you return home.`)
    } elseif(thirdAnswer === 'staircase'){
    window.alert(`After ascending the staircase, you discover a shiny blue stone, which you take home and cherish forever.`)
    };
console.log(thirdAnswer);
console.log(fourthAnswer);