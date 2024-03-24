/**
 * @description test demo
 * @author th
 */

function sum(a, b) {
  return a + b;
}
test('test demo 1, 100 + 200 = 300', () => {
  const res = sum(100, 200)
  expect(res).toBe(300)
})