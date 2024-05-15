import css from "./ContactList.module.css";
import Contact from "../Contact/Contact";
import { useSelector } from "react-redux";

export default function ContactList() {
  const contacts = useSelector((state) => state.contacts.items);
  const searchQuery = useSelector((state) => state.filters);
  // console.log(searchQuery);

  const filtredContacts = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(searchQuery.name.toLowerCase())
  );

  return (
    <ul className={css.list}>
      {filtredContacts.map((contact) => (
        <li className={css.item} key={contact.id}>
          <Contact data={contact} />
        </li>
      ))}
    </ul>
  );
}
