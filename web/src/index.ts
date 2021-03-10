import { Userform } from "./views/UserForm";
import { User } from "./models/User";

const user = User.buildUser({ name: "Mala", age: 20 });

const root = document.getElementById("root");

if (root) {
    const userForm = new Userform(root, user);
    userForm.render();
} else {
    throw new Error("Root element not found");
}
