interface developer<T> {
    name: string;
    salary: number;
    device: {
        brand: string;
        model: string;
        relesedYear: string;
    };
    smartWatch: T
}





const poorDeveloper: developer<{ name: string, releasedYear: number }> = {
    name: "arman",
    salary: 1100,
    device: {
        brand: "asus",
        model: "asus14",
        relesedYear: "2021"


    },
    smartWatch: { name: "Huwai", releasedYear: 2020 }

}


const richDeveloper: developer<number> = {
    name: "hossain",
    salary: 1200,
    device: {
        brand: "asus",
        model: "asus15",
        relesedYear: "2025"


    },
    smartWatch: 154

}





// problem 1 
interface Developer<T> {
    name: string;
    salary: number;
    device: {
        brand: string;
        model: string;
        releasedYear: string
    };

    smartWatch: T


}

const midDeveloper: Developer<boolean> = {
    name: "rafi",
    salary: 900,
    device: {
        brand: "Dell",
        model: "inspiraton",
        releasedYear: "2022"
    },

    smartWatch: true
}