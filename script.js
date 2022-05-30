document.getElementById("roll").addEventListener("click", makeReq);

async function makeReq() {
  const res = await fetch(`api?roller=unknown`);
  const data = await res.json();

}

// function rollDice() {
  
//   let roll = []
//   for(let i = 0; i < 5; i++) {
//     roll.push(Math.ceil(Math.random() * 6))
//   }
//   console.log(roll)
// }
