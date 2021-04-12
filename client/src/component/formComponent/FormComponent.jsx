import React from "react";

const FormComponent = (props) =>{
    const {saveNewBook,changeNameInput,changeNumberInput}=props;
    return(
        <div>
            <form onSubmit={saveNewBook}>
                <label htmlFor="name">name</label>
                <input onChange={changeNameInput} name="name" type="text"/>
                <label htmlFor="numberOfPages">number Of Pages</label>
                <input onChange={changeNumberInput} name="changeNumberInput" type="number"/>
                <button type="submit">save book</button>
            </form>
        </div>
    );
};
export default FormComponent;