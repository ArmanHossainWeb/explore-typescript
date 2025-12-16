const kgToGm = (input: string | number): string | number | undefined => {
    if (typeof input === "number") {
        return input * 1000;
    } else if (typeof input === "string") {
        const [value] = input.split(" ")
        return `converted output is ${Number(value) * 1000}`
    } else {

    }
}

const result1 = kgToGm(2) as number;
console.log(result1)

const result2 = kgToGm("2")
console.log(result2)