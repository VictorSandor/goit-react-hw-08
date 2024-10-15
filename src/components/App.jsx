import "./App.css";
import ContactForm from "./ContactForm";
import SearchBox from "./SearchBox";
import ContactList from "./ContactList";
import { FaAddressBook } from "react-icons/fa";

import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import Loader from "./Loader";
import Error from "./Error";
import { fetchContacts } from "../redux/contactsOps";
import { selectLoading, selectError } from "../redux/contactsSlice";

export default function App() {
  const loading = useSelector(selectLoading);
  const error = useSelector(selectError);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);
  
  return (
    <div>
      <FaAddressBook size="50" />
      <h1>Phonebook</h1>
      <ContactForm />
      <SearchBox />
      <ContactList />
      {loading && <Loader />}
      {error && <Error>{error}</Error>}
      {!error && !loading && <ContactList />}
    </div>
  );
}