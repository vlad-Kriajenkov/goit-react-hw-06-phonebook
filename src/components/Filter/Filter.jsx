import { useDispatch } from "react-redux";
import { ContainerFilter, TitleFilter, Labe, Input } from "./Filter.styled";
import { filterContact } from "redux/filterContact/slice";

const Filter = () => {
 const dispatch = useDispatch()
  const handelChange =(e)=>{
    e.preventDefault()

    dispatch(filterContact(e.target.value))
  }
  return (
    <ContainerFilter>
      <TitleFilter>Contacts</TitleFilter>
      <Labe>
        Find contacts by name
        <Input type="text" placeholder="Enter name" onChange={handelChange} />
      </Labe>
    </ContainerFilter>
  );
};

export default Filter;
