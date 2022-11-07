import {useContext} from "react";
import { UserContext } from "../../context/UserContext";

function User({user}) {
    const { setCurrentUserId, users, setUsers } = useContext(UserContext);

    const fullName = user.firstName + ' ' + user.lastName;
    
    const handleEdit = () => {
        setCurrentUserId(user.id);
    }

    const handleDelete = () => {
        setUsers(users.filter((person) => person.id !== user.id));
    };

    return(
    <div className="card" data-fullname={fullName}>
                    <div className="card__content member">
                        <div className="member__avatar">{Array.from(user.lastName)[0]}</div>
                        <div className="member__info">
                            <h4 className="member__name">{fullName}</h4>
                            <p className="member__id">{user.id}</p>
                            <p className="member__city">{user.address.city}</p>
                        </div>
                    </div>
                    <div className="card__actions actions">
                        <button className="actions__edit btn" onClick={handleEdit}>Edit</button>
                        <button className="actions__delete btn" onClick={handleDelete}>Delete</button>
                    </div>
    </div>
    );
}

export default User;