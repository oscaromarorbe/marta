export const userPostFetch = user => {
    return dispatch => {
        return fetch('http://localhost:3000/api/user', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                Accept: 'application/json',
            },
            body: JSON.stringify({ user })
        })
        .then(resp=>resp.json())
        .then(data=>{
            if(data.message){
                alert('')
            }else{
                
            }
        })
    }

}