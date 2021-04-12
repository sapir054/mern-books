const BASIC_API= "http://localhost:4000/"

function callMyServer(){
    await fetch(BASIC_API)
    .then(res => res.json())
    .catch(err => alert(err))
}

async function getAllBooks(newBook){
    try {
        return await fetch(BASIC_API + "books" )
        .then(res =>{return res.json()})
        .then(res =>{return res.data})
    } catch (error) {
        console.log(error);
    }
}

async function postBook(newBook){
    try {
        return await fetch(BASIC_API + "books" , {method:"POST", body:JSON.stringify(newBook)})
        .then(res =>{return res.json()})
    } catch (error) {
        console.log(error);
    }
}

export{
    callMyServer,
    postBook,
    getAllBooks,

}