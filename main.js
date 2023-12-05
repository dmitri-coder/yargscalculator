import yargs from 'yargs';
import { hideBin } from 'yargs/helpers';

const argv = yargs(hideBin(process.argv))
  .options({
    value1: {
      alias: 'v1',
      describe: 'First operand',
      demandOption: true,
      type: 'number',
    },
    sign: {
      alias: 's',
      describe: 'Mathematical operator (+, -, *, /)',
      demandOption: true,
      type: 'string',
    },
    value2: {
      alias: 'v2',
      describe: 'Second operand',
      demandOption: true,
      type: 'number',
    },
  })
  .argv;

const { value1, sign, value2 } = argv;
let result;

switch (sign) {
  case '+':
    result = value1 + value2;
    break;
  case '-':
    result = value1 - value2;
    break;
  case '*':
    result = value1 * value2;
    break;
  case '/':
    result = value1 / value2;
    break;
  default:
    console.error('Invalid operator. Please use +, -, *, or /.');
    process.exit(1);
}

console.log(`${value1} ${sign} ${value2} = ${result}`);
