function postData(url = '', data = {}) {
    return fetch(url, {
      method: 'POST', // *GET, POST, PUT, DELETE, etc.
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data) // body data type must match "Content-Type" header
    })
}
 
function submitFormData(){
    postData('/api/form', { first: 'Felipe', last: 'Ferreira' }).then(data => data.json())
    .then(responseData => {
       debugger
       console.dir(responseData)
    }).catch((bad) => {
       debugger
       console.dir({error: 'BAD'})
    })
}