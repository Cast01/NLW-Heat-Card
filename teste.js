function teste() {
  return {
    name: "gabriel",
    age: 22,
  };
}

fetch(teste()).then((resp) => console.log(resp));
