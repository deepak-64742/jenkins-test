// Simple Node.js script to calculate the average of numbers.

function average(numbers) {
    if (numbers.length === 0) {
      return 0; // Avoid division by zero
    }
  
    let sum = 0;
    for (let num of numbers) {
      sum += num;
    }
    return sum / numbers.length;
  }
  
  const values = [10, 20, 30, 40];
  const avg = average(values);
  
  console.log("The average is:", avg); // Output the average.
