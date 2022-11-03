import User from "../user/User";
import {useContext} from "react";
import { UserContext } from "../../context/UserContext";

function UserList() {
   

    const { users } = useContext(UserContext);

    return(
        <aside className="aside" id="members-container">
            {
            users.map((user) => (
                <User key={user.id} user={user} />
            ))
            }
        </aside>
    );
}

export default UserList;