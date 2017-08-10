const npmRunScript = require('npm-run-script');

const command = 'start';
const child = npmRunScript(command, { stdio: 'inherit' });// quiet...
// child.once('error', (error) => {
//   console.trace(error);
//   process.exit(1);
// });

child.once('exit', (exitCode) => {
  console.trace('exit in', exitCode);
  process.exit(exitCode);
});
