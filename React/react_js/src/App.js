import React, { useReducer, useMemo } from "react";
import UserList from "./UserList";
import CreateUser from "./CreateUser";
// import useInputs from "./hooks/useInputs";
import produce from "immer";

function countActiveUsers(users) {
  console.log("활성 사용자 수를 세는 중....");
  return users.filter((user) => user.active).length;
}

const initialState = {
  inputs: {
    username: "",
    email: "",
  },
  users: [
    {
      id: 1,
      username: "gaeun",
      email: "gaeungaeun4837@gmail.com",
      active: true,
    },
    {
      id: 2,
      username: "tester",
      email: "tester@example.com",
      active: false,
    },
    {
      id: 3,
      username: "liz",
      email: "liz@example.com",
      active: false,
    },
  ],
};

function reducer(state, action) {
  switch (action.type) {
    case "CREATE_USER":
      return produce(state, (draft) => {
        draft.users.push(action.user);
      });
    case "TOGGLE_USER":
      return produce(state, (draft) => {
        const user = draft.users.find((user) => user.id === action.id);
        user.active = !user.active;
      });
    case "REMOVE_USER":
      return produce(state, (draft) => {
        const index = draft.users.findIndx((user) => user.id === action.id);
        draft.users.splice(index, 1);
      });
    default:
      return state;
  }
}
// UserDispatch 라는 이름으로 내보낸다.
export const UserDispatch = React.createContext(null);

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  const { users } = state;

  const count = useMemo(() => countActiveUsers(users), [users]);

  return (
    <UserDispatch.Provider value={dispatch}>
      <CreateUser />
      <UserList users={users} />
      <div>활성사용자 수: {count}</div>
    </UserDispatch.Provider>
  );
}

export default App;
