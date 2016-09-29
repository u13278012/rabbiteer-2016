import {spawn} from 'child_process';
import path from 'path';

/** Starts watching files and updates css and js and live reload.
 * @return {void}
 */
export function startDebugSupport() {
  let gulp = 'gulp';
  if (process.platform === 'win32') gulp = 'gulp.cmd';

  let p = spawn(
    path.join('./node_modules/.bin/', gulp),
    ['watch'],
    { stdio: "inherit", cwd: process.cwd() });
  p.on('error', e => console.error('watch error', e));
  console.info(`debug support established pid:${p.pid}`);
}