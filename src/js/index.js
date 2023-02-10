const name_input = document.querySelector("#name");
const lastName_input = document.querySelector("#lastName");
const iphone_input = document.querySelector("#iphone");
const email_input = document.querySelector("#email");

const add_button = document.querySelector("#add");
const delete_button = document.getElementById("#delte_all");
const update_button = document.querySelector("#update");
const button_eliminar = document.querySelector("#delete");

const content_div = document.getElementById("content");

//const content_table = document.getElementById("content-table");


document.addEventListener("DOMContentLoaded", () => {//Espera a que cargue nuestro contenido HTML

    //Mostrar en vista todo mi contenido en local storage...

   //1. Obtener de localStorage...

    const contacts = JSON.parse(localStorage.getItem("contacts"));

    if (contacts === null){
        const parrafo = document.createElement("p");
        const text_parrafo = document.createTextNode("No hay contactos para mostrar")

        parrafo.appendChild(text_parrafo);
        content_div.append(parrafo);

    }else{
        render(contacts)
    }

    add_button.addEventListener('click', (e) =>{
        e.preventDefault();

        // Agrerar funciones que agreguen elementos

        const contacts = JSON.parse( localStorage.getItem("contacts")) || [];

        const name = name_input.value;
        const lastName = lastName_input.value;
        const iphone = iphone_input.value;
        const email = email_input.value;

        const contact ={ //JSON
        // key  : value

         "name": name,
         "lastName": lastName,
         "iphone" : iphone,
         "email" : email

        }

        contacts.push(contact);

        localStorage.setItem('contacts',JSON.stringify(contacts));

        content_div.innerHTML = '';//Limpia el contenido de un div

        //LLENA EL CONTENIDO DEL DIV

        render(contacts)
    
    })

    delete_button.addEventListener('click',() => {
       localStorage.setItem("contacts", JSON.stringify([]));
       content_div.innerHTML= '';

       const parrafo = document.createElement("p");
       const text_parrafo = document.createTextNode("No hay elementos")

       parrafo.appendChild(text_parrafo);
       content_div.append(parrafo);

    })

    function render(contacts){
        for(let i = 0; i < contacts.length; i++){

            //Div del contenido

            //Crear Elemento div
            const div_contact = document.createElement("div");
            const text_name_lastName_iphone_email = document.createTextNode(`${contacts[i].name}-${contacts[i].lastName}-${contacts[i].iphone}-${contacts[i].email}`);
       

         //Crear Botón Eliminar

         const button_delete = document.createElement("button");
         const text_button_delete = document.createTextNode("Eliminar");
         button_delete.appendChild(text_button_delete);

         const button_update = document.createElement("button");
         const text_button_update = document.createTextNode("Update");
         button_update.appendChild(text_button_update);

         button_update.onclick = () => {

         }

         button_delete.onclick = () => {
            deleteLocalstorage(i, contacts)
         }

         //Agregar texto y botones...
         div_contact.appendChild(text_name_lastName_iphone_email);
         div_contact.appendChild(button_update);
         div_contact.appendChild(button_delete);

         content_div.appendChild(div_contact);
        }
    }

    function deleteLocalstorage(i, contacts){
        contacts.splice(i, 1);

        localStorage.setItem('contacts', JSON.stringify(contacts) );

        content_div.innerHTML='';

         render(contacts)
    }

})

         //Tabla contenido

        /* const row  = document.createElement('tr');
         row.innerHTML = `
           
            <td><input value="${contacts[i].name}" id="name-${i}"</td>
            <td><input value="${contacts[i].lastName}" id="lastName-${i}"/td>
            <td><input value="${contacts[i].iphone}" id="iphone-${i}" </td>
            <td><input value="${contacts[i].email}" id="email-${i}" </td>
         
            <td>
                  <button>Eliminar</button>
                  <button>Eliminar</button>
            </td>

         `;
         content_table.appendChild(row);
        }
    }*/
    

