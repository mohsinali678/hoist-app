/*
Body mass index (BMI) is a measure of body fat based on height and weight that applies to adult men and women.
lbs/inches**2*703
*/

const BMI = (weight, height) => Math.round(weight / height ** 2 * 703)

console.log(BMI(161,65))