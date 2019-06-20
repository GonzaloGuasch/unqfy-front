function timeout(ms: number) {
  return new Promise(resolve => setTimeout(resolve, ms));
}
export async function sleep(fn: any, ...args: any) {
  await timeout(3000);
}
