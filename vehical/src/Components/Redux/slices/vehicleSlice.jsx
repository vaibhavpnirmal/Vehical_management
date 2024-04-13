import { createSlice } from "@reduxjs/toolkit";

const vehicleSlice=createSlice({
    name:"vehicledata",
    initialState:{
        data:[ {model: "Mazda CX3",
    engine: "2.0-liter I-4 with 146 hp",
    blurb: "Serving as the brand’s entry-level crossover, the 2018 Mazda CX-3 slots below the larger CX-5. Front-wheel drive is standard on all trims and all-wheel drive is optional.",
    picture: "/public/cars/pexels-brett-sayles-1638459.jpg"},
    {
        model: "Honda HRV",
        engine: "1.8-liter I-4 with 141 hp",
        blurb: "A new entry into the growing subcompact crossover segment, the Honda HR-V is practical and spacious. With seating for up to five passengers and multiple seating configurations, the HR-V is a capable, if slow, competitor for those who want an entry-level SUV.",
        picture: "/public/cars/pexels-alexgtacar-1592384.jpg"
    
    },
    {
        model: "Subaru Crosstrek",
        engine: "2.0-liter I-4 with 152 hp",
        blurb: "The Crosstrek is Subaru’s smallest crossover. Based on the Impreza hatchback, the Crosstrek has a lower starting price than the Forester and Outback.",
        picture: "/public/cars/pexels-albert-nunez-88630.jpg"
    }]
},

    reducers:{
        addvehicle:(state,action)=>{
            state.data.push(action.payload)
        }
    }

})

export const {addvehicle}=vehicleSlice.actions
export default vehicleSlice.reducer