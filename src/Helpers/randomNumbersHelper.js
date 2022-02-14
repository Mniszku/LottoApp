




export const randomNumbers = (numbersCount, min, max) => {
    let result = [];
    for (let i = 0; i < numbersCount; i++) {
      result.push(
        Math.floor(Math.random() * (max - min)) + min
      );
    }

    return result;
  };