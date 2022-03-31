// Here we create our initial state object that will hold default values of our data. For our example purposes 
// we will leave this here for the long haul and use this data from time to time when creating new drones. 
// reducers are how values such as a name for a drone get add to the state object. Currently we only have two, 
// we can add more but this gets the job done for now.
import { createSlice } from '@reduxjs/toolkit';

const rootSlice = createSlice({
    name: 'root',
    initialState: {
        name: 'classic drone',
        price: "2000.00",
        description: "Redefine what's possible",
        camera_quality: '4k',
        flight_time: 'Approx 20mins',
        max_speed: '140 kph',
        dimensions: '255 x 312 x 127mm',
        weight: 'Approx 795g',
        cost_of_production: 450.00,
        series: 'DJI FPV Series'
    },
    reducers: {
        chooseName: (state, action) => { state.name = action.payload },
        choosePrice: (state, action) => { state.price = action.payload },
        chooseDescription: (state, action) => { state.description = action.payload },
        chooseCameraQuality: (state, action) => { state.camera_quality = action.payload },
        chooseFlightTime: (state, action) => { state.flight_time = action.payload },
        chooseMaxSpeed: (state, action) => { state.max_speed = action.payload },
        chooseDimensions: (state, action) => { state.dimensions = action.payload },
        chooseWeight: (state, action) => { state.weight = action.payload },
        chooseCostOfProduction: (state, action) => { state.cost_of_production = action.payload },
        chooseSeries: (state, action) => { state.series = action.payload }
    }
})

export const reducer = rootSlice.reducer;
export const { chooseName, choosePrice, chooseDescription, chooseCameraQuality, chooseFlightTime, 
    chooseMaxSpeed, chooseDimensions, chooseWeight, chooseCostOfProduction, chooseSeries } = rootSlice.actions