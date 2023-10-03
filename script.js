function fizzBuzzBiffFuzzBizz() {
    for (let i = 1; i <= 500; i++) {
      let result = '';
  
      if (i % 3 === 0) {
        result += 'Fizz';
      }
  
      if (i % 5 === 0) {
        result += 'Buzz';
      }
  
      if (i % 7 === 0) {
        result += 'Biff';
      }
  
      if (i % 9 === 0) {
        result += 'Fuzz';
      }
  
      if (i % 11 === 0) {
        result += 'Bizz';
      }
  
      if (!result) {
        result = i;
      }
  
      console.log(result);
    }
  }
  
  fizzBuzzBiffFuzzBizz();  