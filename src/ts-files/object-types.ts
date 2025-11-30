interface Address {
  city: string;
  street: string;
  coords: number[];
}

type User = {
  firstname?: string;
  surname: string;
  address: Address;
};

const user: User = {
  address: {
    coords: [5, 5],
    city: 'Minsk',
    street: 'Nezavisimosti',
  },
  surname: 'Falkone',
};
