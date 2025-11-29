interface Developer<T> {
    name: string;
    salary: number;
    device: {
        brand: string;
        model: string;
        relesedYear: string;
    }
    smartWatch: T

}


interface nonBrandWatch {
    heartRate: string;
    stopWatch: boolean;
}

interface breandWatch {
    heartRate: string;
    callSupport: boolean;
    calculator: Boolean;
    AiFeture: boolean;
}


const poorDeveloper: Developer<nonBrandWatch> = {
    name: "arman",
    salary: 15000,
    device: {
        brand: "asus",
        model: "x500",
        relesedYear: "2015"
    },
    smartWatch: {
        heartRate: "200",
        stopWatch: true
    }
}


const RichDeveloper: Developer<breandWatch> = {
    name: "hossain",
    salary: 25000,
    device: {
        brand: "hp",
        model: "x300",
        relesedYear: "2025"
    },
    smartWatch: {
        heartRate: "300",
        callSupport: true,
        calculator: false,
        AiFeture: true
    }
}