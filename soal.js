class Assesment {
  solve(s) {
    // stack untuk menyimpan tanda kurung
    const stack = [];

    // Iterasi melalui setiap karakter dalam string
    for (let i = 0; i < s.length; i++) {
      const char = s[i];

      // Jika karakter adalah "(", maka akan ditambahkan ke stack
      if (char === "(") {
        stack.push(char);
      }
      // Jika karakter adalah ")", maka diperiksa apakah ada "(" di stack
      else if (char === ")") {
        // Jika stack kosong, maka tanda kurung tidak seimbang
        if (stack.length === 0) {
          return false;
        }

        // Pop "(" dari stack karena sudah seimbang dengan ")"
        stack.pop();
      }
    }

    // Jika setelah iterasi stack masih tidak kosong, tanda kurung tidak seimbang
    return stack.length === 0;
  }
}

// Penggunaan
const solution = new Assesment();

console.log(solution.solve("()"));     
console.log(solution.solve("()()"));   
console.log(solution.solve(")("));     
console.log(solution.solve(""));     
console.log(solution.solve("((()))"));  
console.log(solution.solve("((()")); 
