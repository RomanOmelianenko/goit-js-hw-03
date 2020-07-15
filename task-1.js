const user = {
  name: "Mango",
  age: 20,
  hobby: "html",
  premium: true,
};

console.log((user.mood = "happy"));
console.log((user.hobby = "skydiving"));
console.log((user.premium = false));

const keys = Object.keys(user);
console.log(keys);

for (const key of keys) {
  console.log(`${key}: ${user[key]}`);
}
