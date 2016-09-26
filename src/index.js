/**
 * @module index
 */

import {hello} from './hello';
import * as readline from 'readline';


const rl = readline.createInterface({ input: process.stdin, output: process.stdout });


rl.question('What is your name? ', name => {

    console.log(hello(name));

    rl.close();
});