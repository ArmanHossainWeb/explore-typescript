type PersonType = {
    id: number;
    name: string;
    age?: number;
};

// Partial<T> make optional
type PartialVehicle = Partial<PersonType>;

const partialVehicle: PartialVehicle = { id: 123 };

// Required<T>
type RequiredPerson = Required<Person>;

const person1: RequiredPerson = {
    id: 123
    name: "Hasib",
    age: 25,
};

// Readonly<T>
type ReadonlyVehicle = Readonly<{
    bike: string;
    car: string;
    ship: string;
}>;

const readonlyVehicle: ReadonlyVehicle = {
    bike: "Hero",
    car: "BMW",
    ship: "Titanic",
};
// readonlyVehicle.bike = "Yamaha"; // Error: Cannot assign to 'bike' because it is a read-only property

// Record<K, T>
type CountryCode = "BD" | "US" | "UK";
type CountryCallingCodes = Record<CountryCode, string>;

const callingCodes: CountryCallingCodes = {
    BD: "+880",
    US: "+1",
    UK: "+44",
};

// Pick<T, K>
type FullPerson = {
    name: string;
    age: number;
    email: string;
};

type PersonNameAndEmail = Pick<FullPerson, "name" | "email">;

const nameAndEmail: PersonNameAndEmail = {
    name: "Rafi",
    email: "rafi@example.com",
};

// Omit<T, K>
type PersonWithoutEmail = Omit<FullPerson, "email">;

const personWithoutEmail: PersonWithoutEmail = {
    name: "Sumaiya",
    age: 22,
};

// Exclude<T, U>
type Letters = "A" | "B" | "C";
type ExcludedLetters = Exclude<Letters, "A">; // "B" | "C"

// Extract<T, U>
type Numbers = 1 | 2 | 3;
type ExtractedNumbers = Extract<Numbers, 2 | 3 | 4>; // 2 | 3

// NonNullable<T>
type NullableType = string | null | undefined;
type NonNullableType = NonNullable<NullableType>; // string

// ReturnType<T>
function getUser() {
    return { name: "Karim", age: 28 };
}
type UserType = ReturnType<typeof getUser>;

// Parameters<T>
function sum(a: number, b: number): number {
    return a + b;
}
type SumParameters = Parameters<typeof sum>; // [number, number]