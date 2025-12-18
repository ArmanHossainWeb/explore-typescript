type student = { id: number; name: string }

const addStudent = <T extends student >(studentInfo: T) => {
    return { Course: "Programming", ...studentInfo };
};

const s1 = { id: 123, name: "Dev1", useLinux: true };
const result = addStudent(s1);

const s2 = {name:"hello", id:123}
const result1 = addStudent(s2)