// we will need to add an object that will hold the four API calls we will need for the project. 
// Let's take a look at the code!
let token = '149323dde70dd06e6af33933fd2ae24a9152f758ce000264'


//  we are using the fetch command for each of our calls. Inside of the body areas, we call on a JavaScript value 
//that will turn any regular JavaScript object into a pure JSON object. We do this for our backend to accept the data.
export const server_calls = {
    get: async () => {
        const response = await fetch(`127.0.0.1:5000/api/drones`,{
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'x-access-token': `Bearer ${token}`
            }
        });
        if (!response.ok){ //if we don't get a response, that's ok
            throw new Error('Failed to fetch data from the server')
        }
        return await response.json()
    },
    create: async ( data: any = {} ) => {
        const response = await fetch(`127.0.0.1:5000/api/drones`,{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'x-access-token': `Bearer ${token}`
            },
            body: JSON.stringify(data)
        });
        if (!response.ok){ //if we don't get a response, that's ok
            throw new Error('Failed to fetch data from the server')
        }
        return await response.json()
    },
    update: async ( id:string, data:any) => {
        const response = await fetch(`127.0.0.1:5000/api/drones/${id}`,{
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                'x-access-token': `Bearer ${token}`
            },
            body: JSON.stringify(data)
        });
    },
    delete: async ( id:string ) => {
        const response = await fetch(`127.0.0.1:5000/api/drones/${id}`,{
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
                'x-access-token': `Bearer ${token}`
            }  
        });
    }
}
