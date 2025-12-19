type withId = {
    id: number
}

const addCreatedAt = <T extends withId>(obj:T) => {
    return {
        ...obj,
        createdAt: new Date().toISOString()
    }
}

const user = {
  id: 1,
  name: "Arman",
  role: "admin",
};

const result = addCreatedAt(user);