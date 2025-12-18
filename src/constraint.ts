const addStudent = <T extends { id: number; name: string }>(studentInfo: T) => {
    return { Course: "Programming", ...studentInfo };
};

const s1 = { id: 123, name: "Dev1", useLinux: true };
const result = addStudent(s1);