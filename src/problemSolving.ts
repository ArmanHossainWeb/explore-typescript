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





const getProperty = <X,Y> (params1: X , params2 : Y) => {
    return {params1, params2}
}




const name = getProperty(user, "name");      // string
const id = getProperty(user, "id");          // number
const isAdmin = getProperty(user, "isAdmin"); // boolean










