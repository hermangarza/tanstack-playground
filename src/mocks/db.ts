import { factory } from "@mswjs/data";
import {  users } from "./users";

export const db = factory(users);

for (let index = 0; index <= 200; index++) {
    db.user.create();
}