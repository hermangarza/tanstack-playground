import { primaryKey } from "@mswjs/data";
import { faker } from "@faker-js/faker";



export const users = {
    user: {
        userId: primaryKey(() => faker.string.uuid()),
        firstName: () => faker.person.firstName(),
        lastName: () => faker.person.lastName(),
        age: () => faker.number.int({ min: 18,max: 70 }),
        email: () => faker.internet.email(),
        phoneNumber: () => faker.phone.number(),
        city: () => faker.location.city(),
        company: () => faker.company.name(),
        avatar: () => faker.image.avatar(),
        information: () => faker.lorem.words(10)


    }
}