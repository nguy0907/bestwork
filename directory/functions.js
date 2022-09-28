
// This is where it displays all the list of clients using map()
function list(clients){
    return clients.map(clients => `
    <li class="list-group-item d-flex justify-content-between" data-index="${clients['index']}">
    ${clients['name']}
    <strong>$${clients['balance']}</strong>
    </li>`).join('')
}

// Order Function displays the order of the index, name, and balance
function order(clients,property){
return clients.sort((a,b) => {
    if (a[property] < b[property]){
        return -1 

    } else if (a[property] < b[property]){
        return 1
    
    } else{
return 0

    }
})
}

//Total Function adds all the balance and give you the total.
function total(clients){
    return clients.reduce((total,count)=>{
        return total + count.balance
    },0)
}

//Info function will allow you to see the contact of the clients when clicking on the client
function info(index){
    return clients.find(client =>client.index ===index)
}


//search function When clicking a letter, it will show all the client with a letter. Lowercase and uppercase works.
function search(query){
    return clients.filter(client => client.name.toLowerCase().includes(query.toLowerCase()))
}