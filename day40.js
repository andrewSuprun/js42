const { exec } = require('child_process');

function execute(command, callback) {
  exec(command, (err, cbInput) => {
    if (err) { callback(err) }
    else { callback(null, cbInput) }
  });
}
