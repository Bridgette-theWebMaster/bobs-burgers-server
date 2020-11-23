function makeBurgerArray() {
  return [
    {
      id: 1,
      photo: "www.burger.com",
      name: "Burger",
      description: "Burger for noms",
      price: 0.0,
      quantity: 1,
    },
  ];
}

function makeUserArray() {
  return [
    {
      id: 1,
      name: "test",
      email: "test@test.com",
      password: "$2b$10$KVnUJ7Tpa1nJsh0o3KMsn.OzPeJq3PbFEo5UBLYaFC30d2l0ODffu",
    },
  ];
}

module.exports = {
  makeBurgerArray,
  makeUserArray,
};
