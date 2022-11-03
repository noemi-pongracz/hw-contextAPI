import { createContext, useState, useReducer } from "react";
import { v4 as uuidv4 } from "uuid";

export const UserContext = createContext();

const reducer = (state, action) => {
  switch (action.type) {
    case "ADD_PERSON":
      const newUser = { id: uuidv4(), ...action.data };
      return [...state, newUser];
    case "DELETE_PERSON":
      return state.filter((person) => person.id !== action.data.id);
    case "EDIT_PERSON":
      return state.map((person) => {
        if (person.id === action.data.id) {
          return action.data;
        }
        return person;
      });
    default:
      break;
  }
};

const UserContextProvider = ({ children }) => {
  const initialUsers = [
    {
      id: uuidv4(),
      firstName: "John",
      lastName: "Doe",
      address: {
        streetAndNumber: "Sesame, 10",
        postalCode: "077020",
        city: "LA",
        country: "USA",
      },
      sports: ["running", "cycling"],
      gender: "male",
      age: 23,
      activity_class: "amateur",
    },
    {
      id: uuidv4(),
      firstName: "Jane",
      lastName: "Doe",
      address: {
        streetAndNumber: "1 Mai, 32",
        postalCode: "077020",
        city: "Berceni",
        country: "Romania",
      },
      sports: ["running"],
      gender: "female",
      age: 20,
      activity_class: "professional",
    },
    {
      id: uuidv4(),
      firstName: "Lorem",
      lastName: "Ipsum",
      address: {
        streetAndNumber: "Intrarea Verii, 15",
        postalCode: "27653",
        city: "Iasi",
        country: "Romania",
      },
      sports: ["walking"],
      gender: "female",
      age: 59,
      activity_class: "professional",
    },
    {
      id: uuidv4(),
      firstName: "Rilastil",
      lastName: "Sulfat",
      address: {
        streetAndNumber: "Strada mica, 3",
        postalCode: "52296",
        city: "Iasi",
        country: "Romania",
      },
      sports: ["walking"],
      gender: "female",
      age: 29,
      activity_class: "professional",
    },
    {
      id: uuidv4(),
      firstName: "Norbert",
      lastName: "Layis",
      address: {
        streetAndNumber: "Tamalis, 43",
        postalCode: "826470",
        city: "Budapest",
        country: "Hungary",
      },
      sports: ["skiing"],
      gender: "male",
      age: 31,
      activity_class: "amateur",
    },
  ];

  const [users, dispatch] = useReducer(reducer, initialUsers);
  const [currentUserId, setCurrentUserId] = useState(-1);

  return (
    <UserContext.Provider
      value={{ users, dispatch, currentUserId, setCurrentUserId }}
    >
      {children}
    </UserContext.Provider>
  );
};

export default UserContextProvider;
