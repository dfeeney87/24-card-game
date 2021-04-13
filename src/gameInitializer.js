export function shuffle(array) {
    let currentIndex = array.length, temporaryValue, randomIndex;

    while (0 !== currentIndex) {
  
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;
  
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }
  
    return array;
  }

export function initializeGame () {
    const matches = 12;
    const arrayOne = Array.from(Array(matches).keys());
    const arrayTwo = Array.from(Array(matches).keys());
    return shuffle(arrayOne.concat(arrayTwo).map((gm, i) => {
        return {value: gm, hash: `${i}-gm`}
    }))
}