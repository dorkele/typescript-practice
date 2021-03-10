import { Userform } from "./views/UserForm";
import { User } from "./models/User";

const user = User.buildUser({ name: "Mala", age: 20 });

const userForm = new Userform(document.getElementById("root"), user);

userForm.render();
