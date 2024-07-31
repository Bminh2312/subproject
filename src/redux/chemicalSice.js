import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    chemicals: [
        {
            id:1,
            name:"Hydrochloric Acid",
            fomula:"HCL"
        },
        {
            id:2,
            name:"Sodium Chloride",
            fomula:"Nacl"
        },
        {
            id:3,
            name:"Sulfuric Acid",
            fomula:"H2SO4"
        },
        {
            id:4,
            name:"Ammoniac",
            fomula:"NH3"
        },
        {
            id:5,
            name:"Ethanol",
            fomula:"C2H5OH"
        },
    ],
    status: "start",
    error: null,
};

const chemicalSiceSlice = createSlice({
    name: 'chemical',
    initialState,
    reducers: {
        //function 
        addChemical(state,action){
            state.chemicals=[...state.chemicals,{id: state.chemicals.length === 0 ? 1 : state.chemicals.reduce((value, item) => Math.max(item.id, value) + 1, 0), name: action.payload.name, fomula: action.payload.fomula }]

        },
        deleteChemicalByid(state,action){
            state.chemicals = state.chemicals.filter(item =>item.id !== action.payload.id)
           
        },
        editChemicalName(state,action){
            state.chemicals = state.chemicals.map(item => item.id === action.payload.id ?{...item,name:action.payload.name}:item)
           
        },
        editChemicalFormula(state,action){
            state.chemicals = state.chemicals.map(item => item.id === action.payload.id ?{...item,fomula:action.payload.fomula}:item)
           
        },
        searchChemicalByid(state,action){
            state.chemicals = state.chemicals.map(item =>item.name.search(action.payload))
            console.log(state.chemicals)
           
        },
        setLoading: (state) => {
            state.status = 'loading';
        },
        setError: (state, action) => {
            state.status = 'failed';
            action.error = action.payload
        },
        setLoaded: (state) => {
            state.status = 'succeeded';
        }
    }
})


export const {searchChemicalByid,editChemicalFormula,editChemicalName, deleteChemicalByid, addChemical, setLoading, setError, setLoaded } = chemicalSiceSlice.actions
export default chemicalSiceSlice.reducer