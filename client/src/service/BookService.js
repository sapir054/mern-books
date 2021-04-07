
const BASIC_API= "http://localhost:4000/"

function callMyServer(){
    await fetch(BASIC_API)
    .then(res => res.json())
    .catch(err => alert(err))
}

export{
    callMyServer,

}

