function welcomeUser(name: string) {
  console.log(`Hi, ${name}`);
}
welcomeUser('Den');

function localData(data: unknown) {
  let value: string;
  if (typeof data === 'string') {
    value = data;
  } else {
    value = 'this is not string';
  }
  console.log(value);
}
localData('December');
localData(24);

function fn(): void {
  console.log();
}
