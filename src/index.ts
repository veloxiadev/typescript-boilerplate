/**
 * Dummy function.
 * @param message Message to display.
 */
export function writeMessage(message?: string): string {
  const msg = message || "Hello";
  console.dir(msg);
  return msg;
}

export default writeMessage;
