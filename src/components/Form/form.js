import { useState, useEffect } from 'react'
const initalFormValues = { new_todo: ''};

function Form({addContact, contacts}) {

    const [form, setForm] = useState(initalFormValues);

 
    useEffect(()=>{
        //kayıt ettikten sonr a girilen verilerin ekrandan yok olması
        setForm(initalFormValues)
    
      },[contacts]);
      const onChangeInput = (e)=>{
        //verilerin 
        setForm({...form,[e.target.name]: e.target.value});
      };
    const onSubmit = (e) => {
        e.preventDefault();
        if (form.new_todo === "") {
            return false;
        }
        addContact([...contacts, form])

    };
    return (
        <form onSubmit={onSubmit} >
            <input className='new_todo' name='new_todo' placeholder="What needs to be done?" autoFocus onChange={onChangeInput} value={form.new_todo}/>
        </form>
    )
}

export default Form
