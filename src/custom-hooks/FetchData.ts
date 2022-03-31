// Creating a brand new custom React Hook
// The top import adds the React Hooks useState and useEffect into the mix. 
// We will use those to send out our API call and keep the data inside of the programs state. 
// The second import gives us access to the Server calls we just created.
import React, { useState, useEffect } from 'react';
import { server_calls } from '../api';

// Here we use the useState hook setting the data expected to any since we 
// don't know what the shape of the object/data will be.
export const useGetData = () => {
    const [ droneData, setData ] = useState<any>([]);

     // At this stage, we go out to get our API data and then store that data inside of droneData 
     // because the setData function sets the state (as the name suggests)
    async function handleDataFetch(){
        const result = await server_calls.get();
        setData(result)
    }

    // useEffect Hook adds our data to react State
    // we have the useEffect hook. This will listen for any changes (aka side effects) from the input into the 
    // browser from the user. We are also telling it to stop after the initial call to the handledataFetch() function 
    // call as we don't want it to do this more than once at a time. We accomplished this with the [] .
    //  And from there, we return the data and the stateSetter(which will call the handledataFetch function).
    useEffect( () => {
        handleDataFetch();
    }, [])

    return {droneData, getData:handleDataFetch}
}
