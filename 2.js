import prompt, {gen_random_int} from "./prompt.js"


const target = gen_random_int(101);

while (true) {
  const input = Number(prompt ("Insira um valor entre 1 e 100: "));
  
  if (input === target) {
    console.log("Você acertou!"); 
    break;
  }

  if (input > target) {
    console.log("Insira um valor menor");
  } else {
    console.log("Insira um valor maior");
  }
}
