type MainInfo = {
  firstname: string;
  secondname: string;
};

type AdditionalInfo = {
  age: number;
};

type FullInfo = AdditionalInfo | MainInfo;

const info0: FullInfo = { firstname: '123', secondname: '1234', age: 123 };
const info1: FullInfo = { firstname: '123', secondname: '1234' }; // if will & = error because upper used &. If use | will ok
const info3: FullInfo = { age: 123 }; // if will & = error because upper used &. If use | will ok
