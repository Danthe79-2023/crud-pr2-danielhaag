import { getItemLocalStorage, setItemLocalStorage } from "../utils/localstorage.js"

class Contacts{

    id = null
    name= ''
    lastName1 = ''
    lastName2 = ''
    email= ''
    cellphone= ''
    status = 'pending'
    user_id = null

    constructor(data) {
        Object.assign(this, data)
    }

    save() {
        const contacts = getItemLocalStorage('contacts') || [];
        this.id = contacts.length + 1;
        tasks.push(this.toJson());
        setItemLocalStorage('contacts', contacts);
    }

    getAll() {
        return getItemLocalStorage('contacts') || []
    }

    filter(key, value) {
        var contacts = getItemLocalStorage('contacts') || [];
        contacts = contacts.filter(contact => contact[key] === value)
    }

    remove(id) {
        const contacts = getItemLocalStorage('contacts') || []
        const newContacts = contacts.filter(contact => contact.id !== id)
        setItemLocalStorage('contacts', newTasks)
    }

    update(id, data) {
        const contacts = getItemLocalStorage('contacts') || []
        const newContacts = contacts.map(contact => {
            console.log(task.id, id)
            if (contact.id == id) {
                console.log(data)
                contact = data
            }
            return contact
        })
        setItemLocalStorage('contacts', newContacts)
    }

    assignUser(user) {
        this.user_id = user.id
        this.update(this.id, this)
    }

    getByUser(user) {
        const contacts = getItemLocalStorage('contacts') || []
        return contacts.filter(task => contacts.user_id === user.id)
    }

    toJson() {
        return JSON.parse(JSON.stringify(this))
    }

    fromJson(json) {
        return Object.assign(this, json);
    }

}

export default Contacts