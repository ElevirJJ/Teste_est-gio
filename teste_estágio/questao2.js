function isFibonacci(num) {
    let a = 0, b = 1, next;
    
    if (num === 0 || num === 1) {
      return `${num} pertence à sequência de Fibonacci.`;
    }
    
    while (b < num) {
      next = a + b;
      a = b;
      b = next;
    }
    
    if (b === num) {
      return `${num} pertence à sequência de Fibonacci.`;
    } else {
      return `${num} não pertence à sequência de Fibonacci.`;
    }
  }
  
  const numero = 21; 
  console.log(isFibonacci(numero));
  