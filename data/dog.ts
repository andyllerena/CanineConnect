// data/dogs.ts
type Dog = {
  id: string;
  name: string;
  breed: string;
  age: number;
  img: string;
  zip_code: string;
};

const dogs: Dog[] = [
  {
    id: "1",
    name: "Buddy",
    breed: "Labrador Retriever",
    age: 3,
    img: "/assets/placeholder.png",
    zip_code: "10001",
  },
  {
    id: "2",
    name: "Max",
    breed: "Beagle",
    age: 2,
    img: "/assets/placeholder.png",
    zip_code: "10002",
  },
  {
    id: "3",
    name: "Luna",
    breed: "French Bulldog",
    age: 1,
    img: "/assets/placeholder.png",
    zip_code: "10003",
  },
  // …more entries if desired
];

export default dogs;
