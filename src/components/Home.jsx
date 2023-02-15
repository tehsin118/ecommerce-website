import React, { useEffect, useState } from "react";
import { db } from "../firebase-config";
import {
  collection,
  getDocs,
  addDoc,
  updateDoc,
  deleteDoc,
  doc,
} from "firebase/firestore";
import { async } from "@firebase/util";
const Home = () => {
  const [user, setuser] = useState([]);
  const [newName, setNewName] = useState("");
  const [newAge, setNewAge] = useState(0);

  const userCollectionRef = collection(db, "users");

  const createUser = async () => {
    console.log("user function called");
    await addDoc(userCollectionRef, { name: newName, age: Number(newAge) });
  };
  const deleteUser = async (id) => {
    const userDoc = doc(db, "users", id);
    await deleteDoc(userDoc);
  };

  const updateUser = async (id, age) => {
    const userDoc = doc(db, "users", id);
    const newUpdateAge = { age: age + 1 };
    await updateDoc(userDoc, newUpdateAge);
  };

  useEffect(() => {
    const getUsers = async () => {
      const data = await getDocs(userCollectionRef);

      setuser(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
      console.log(user);
    };
    getUsers();
  }, []);

  return (
    <div>
      <div className="input-user">
        <input
          type="text"
          placeholder="name.."
          name="username"
          onChange={(event) => {
            setNewName(event.target.value);
          }}
        />{" "}
        <br />
        <br />
        <input
          type="number"
          placeholder="age..."
          name="userage"
          onChange={(event) => {
            setNewAge(event.target.value);
          }}
        />{" "}
        <br />
        <br />
        <button onClick={createUser}>Create user</button>
      </div>

      <div className="user">
        {user.map((item) => {
          return (
            <div>
              <h1>
                Name: <span>{item.name}</span>
              </h1>
              <br />
              <h1>
                Age: <span>{item.age}</span>
                <span>
                  <button
                    onClick={() => {
                      updateUser(item.id, item.age);
                    }}
                  >
                    +age
                  </button>
                  <button
                    onClick={() => {
                      deleteUser(item.id);
                    }}
                  >
                    delete
                  </button>
                </span>
              </h1>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Home;
