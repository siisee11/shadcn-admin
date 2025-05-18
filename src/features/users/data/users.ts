import { faker } from '@faker-js/faker'

// <agent> Modify this. Fetch data from postgres </agent>
export const getUsers = async () => {
  return fakeUsers
}
  

export const fakeUsers = Array.from({ length: 20 }, () => {
  const firstName = faker.person.firstName()
  const lastName = faker.person.lastName()
  return {
    id: faker.string.uuid(),
    firstName,
    lastName,
    username: faker.internet
      .username({ firstName, lastName })
      .toLocaleLowerCase(),
    email: faker.internet.email({ firstName }).toLocaleLowerCase(),
    status: faker.helpers.arrayElement([
      'active',
      'inactive',
    ]),
    role: faker.helpers.arrayElement([
      'admin',
      'user',
    ]),
    createdAt: faker.date.past(),
    updatedAt: faker.date.recent(),
  }
})
