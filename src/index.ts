/**
 * Some numbers.
 */
export enum Delays {
  Short = 500,
  Medium = 1000,
  Long = 1500,
}
/**
 * Says hello to you.
 * @param name
 */
export async function hello(name = "Developer"): Promise<string> {
  return new Promise(resolve => {
    const msg = `Hello, ${name}!`;
    setTimeout(() => resolve(msg), Delays.Short);
  });
}
