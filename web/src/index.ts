import { User } from "./models/User";

const user = new User({});

user.on("lalala", () => {
    console.log("pjevaj pticica");
});
user.on("lalala", () => {
    console.log("suti pticica");
});
user.on("baaaalalala", () => {
    console.log("ne pricaj gluposti");
});
