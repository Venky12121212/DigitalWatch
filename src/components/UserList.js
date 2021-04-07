import React, {Fragment, useEffect, useState}from 'react'
import Axios from 'axios'

let UserList = () => {
    let [users, setUsers] = useState([])
    useEffect(() => {
        Axios.get('https://jsonplaceholder.typicode.com/users').then((response) => {
            setUsers(response.data)
            console.log(response.data)
        }).catch((err)=> {
            console.error(err)
        })
    }, [])

    return(
        <Fragment>
            <pre>{JSON.stringify({users})}</pre>
        </Fragment>
    )
}

export default UserList