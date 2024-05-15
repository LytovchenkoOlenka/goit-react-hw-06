import css from "./ContactList.module.css";
import Contact from "../Contact/Contact";
import { useSelector } from "react-redux";

export default function ContactList() {
  const contacts = useSelector((state) => state.contacts.items);
  const searchValue = useSelector();
  // const id = nanoid();
  console.log(contacts);

  const visibleContacts = contacts.items.filter((contact) =>
    contact.name.toLowerCase().includes(searchValue.name.toLowerCase())
  );

  return (
    <ul className={css.list}>
      {visibleContacts.map((contact) => (
        <li className={css.item} key={contact.id}>
          <Contact data={contact} />
        </li>
      ))}
    </ul>
  );
}
