import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ContactForm from '../components/ContactForm';
import ContactList from '../components/ContactList';
import Filter from '../components/Filter';
import { fetchContacts } from '../redux/contacts/operations';
import { selectLoading, selectError } from '../redux/contacts/selectors';

export default function Contacts() {
    const dispatch = useDispatch();
    const isLoading = useSelector(selectLoading);
    const error = useSelector(selectError);

    useEffect(() => {
        dispatch(fetchContacts());
    }, [dispatch]);
  
    return (
        <div className="container">
            <h1 className="heading">Phonebook</h1>
            <ContactForm />
            <h2 className="contacts_title">Contacts</h2>
            {isLoading ? 
                <p>Loading...</p>
             : error ? (
                <p>Error: {error}</p>
            ) : (
                <>
                  <Filter />
                  <ContactList />
                </>
            )}
        </div>
  );
}
