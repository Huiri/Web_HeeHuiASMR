import {db} from "../../firebase";
import {collection, getDocs, getDoc, addDoc, updateDoc, deleteDoc, doc} from "firebase/firestore";

const userCollectionRef = collection(db, "User");
class UserDataService {
    addUser = (newUser) => {
        return addDoc(userCollectionRef, newUser);
    };

    updateUser = (id, updatedUser) => {
        const userDoc = doc(db, "User", id);
        return updateDoc(userDoc, updatedUser);
    };
    deleteUser= (id) => {
        const userDoc = doc(db, "User", id);
        return deleteDoc(userDoc);
    };
    getAllUser = () => {
        return getDocs(userCollectionRef);
    };
    getUser = (id) => {
        const userDoc = doc(db, "User", id);
        return getDoc(userDoc);
    };

}
export default new UserDataService();