 type UserRoles = "Admin" | "Editor" | "viewwe";

 const canEdit = (role: UserRoles) => {
    if(role === "Admin" || role === "Editor") {
        return true
    }
    else return false ;
 }

 const result = canEdit("Editor")
 console.log(result)