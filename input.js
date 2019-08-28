
const handleUserInput = function(key) {
  // conn.write("Say: WRYY");
  console.log(key);
      if(key === '\u0003') {
       return process.exit();
      }   
  } 

  const setupInput = function() {
    const stdin = process.stdin;
    stdin.setRawMode(true);
    stdin.setEncoding('utf8');
    stdin.resume();
    stdin.on('data', function(data){handleUserInput(data)})
    return stdin;
  }

  module.exports = setupInput;