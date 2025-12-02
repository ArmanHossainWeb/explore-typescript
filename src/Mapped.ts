type Person = {
    name: string;
    age: number;
    email: string;
};

// Make all properties of Person optional
type PartialPerson = {
    [Key in keyof Person]?: Person[Key];
};

// Make all properties of Person readonly
type ReadonlyPerson = {
    readonly [Key in keyof Person]: Person[Key];
};

// Example usage
const partial: PartialPerson = { name: "Jibon" }; // age and email are optional

const readonlyPerson: ReadonlyPerson = {
    name: "Jahid",
    age: 30,
    email: "jahid@example.com",
};

type GenericReadonlyPerson<T> = {
    readonly [Key in keyof T]: T[Key];
};
const p1: GenericReadonlyPerson<{ name: string; age: number }> = {
    name: "Hasan",
    age: 20,
};