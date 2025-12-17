interface Developer<T> {
    name: string;
    salary: number;
    device: {
        brand: string;
        model: string;
        relesedYear: string;
    };
    smartWatch: T
}





const poorDeveloper: Developer<{ name: string, releasedYear: number }> = {
    name: "arman",
    salary: 1100,
    device: {
        brand: "asus",
        model: "asus14",
        relesedYear: "2021"


    },
    smartWatch: { name: "Huwai", releasedYear: 2020 }

}


const richDeveloper: Developer<number> = {
    name: "hossain",
    salary: 1200,
    device: {
        brand: "asus",
        model: "asus15",
        relesedYear: "2025"


    },
    smartWatch: 154

}