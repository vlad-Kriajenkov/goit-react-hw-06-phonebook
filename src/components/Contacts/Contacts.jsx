import { AiOutlineDelete } from "react-icons/ai";
import {
  ContainerContact,
  TitileContact,
  ListContatct,
  ItemContatct,
  NameContatct,
  NumberContatct,
  Wrapper,
} from "./Contacts.styled";
import { useSelector, useDispatch } from "react-redux";
import { removeContact } from "redux/contactsStore/slice";
 

const Contacts = () => {
  const dispatch = useDispatch();
  const contacts = useSelector((state) => state.contactsSlice);
  const filter = useSelector((state) => state.filterSlice.filter);

  const visualContacts = contacts.filter(({ name }) => {
    console.log(name)
   return name.toLowerCase().includes(filter);
  });
  const onHandelClick = (id) => {
    dispatch(removeContact(id));
  };
  return (
    <ContainerContact>
      <TitileContact>Results:</TitileContact>
      <ListContatct>
        {visualContacts?.map(({ id, name, phone }) => {
          console.log(id);
          return (
            <ItemContatct key={id}>
              <Wrapper>
                <NameContatct>{name}:</NameContatct>
                <NumberContatct>{phone}</NumberContatct>
              </Wrapper>

              <button type="button" onClick={() => onHandelClick(id)}>
                <AiOutlineDelete />
              </button>
            </ItemContatct>
          );
        })}
      </ListContatct>
    </ContainerContact>
  );
};
export default Contacts;
