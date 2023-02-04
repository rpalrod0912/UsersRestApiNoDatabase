//For post method
import { v4 as uuidv4 } from "uuid";
let users = [];

export const createUser = (req, res) => {
  console.log("POST ROUTE REACHED");
  //user es el json que esceribimos en postman para enviar con Post
  const user = req.body;

  const userWithId = { ...user, id: uuidv4() };
  users.push(userWithId);

  res.send(`User with the name ${user.firstName} added to the database`);

  res.send("POST ROUTE REACHED");
};

export const getUsers = (req, res) => {
  console.log(users);
  res.send(users);
};

export const getUserById = (req, res) => {
  //Obtenemos el id de la url
  const { id } = req.params;
  //Encontramos el usuario en nuestra array con el id de la url
  const foundUser = users.find((user) => user.id === id);
  console.log(req.params);
  res.send(foundUser);
};

export const deleteUserById = (req, res) => {
  const { id } = req.params;

  users = users.filter((user) => user.id !== id);

  res.send(`User with the id :${id} deleted `);
};

export const updateUserById = (req, res) => {
  const { id } = req.params;

  const { firstName, lastName, age } = req.body;

  const userToBeUpdated = users.find((user) => user.id === id);

  if (firstName) {
    userToBeUpdated.firstName = firstName;
  }

  if (lastName) {
    userToBeUpdated.lastName = lastName;
  }

  if (age) {
    userToBeUpdated.age = age;
  }

  res.send(`User with the id ${id} has update`);
};
