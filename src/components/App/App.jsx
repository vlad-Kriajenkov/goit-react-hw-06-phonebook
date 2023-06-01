 
import Phonebook from "components/Phonebook/Phonebook";
import Contacts from "components/Contacts/Contacts";
import Filter from "components/Filter/Filter";
 

export default function App() {
  return (
    <div>
      <Phonebook />
      <Filter />
      <Contacts />
    </div>
  );
}
