const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function askQuestion(query: string): Promise<string> {
  return new Promise(resolve => rl.question(query, resolve));
}

async function main() {
  const name = await askQuestion("What's your name? ");
  const age = await askQuestion("How old are you? ");
  
  const ageInDays = Number(age) * 365;
  console.log(`Hello ${name}, you are approximately ${ageInDays} days old.`);
  
  rl.close();
}

main();