import axios from 'axios'
export const NasaActionTypes = {
    GET_ROVER: 'GET_ROVER',
    GET_CAMERA: 'GET_CAMERA',
    GET_DATE: 'GET_DAY',
    GET_SOL: 'GET_SOL'

}

export const getNasaPhotos = (nombre, sol) => {
    return dispatch => {
        return axios.get(`https://api.nasa.gov/mars-photos/api/v1/rovers/${nombre}/photos?sol=${sol}&api_key=4daGu2mWR24Eo3VEXpfvcBORkEEu3ieMXbkNmLxI`)
            .then((res) => dispatch({ type: NasaActionTypes.GET_ROVER, payload: res.data }))
            .catch(err => console.log(err))
    }
}


// export const getPhotoDate = (nombre, fecha) => {
//     return dispatch => {
//         return axios.get(`https://api.nasa.gov/mars-photos/api/v1/rovers/${nombre}/photos?earth_date=${fecha}&api_key=4daGu2mWR24Eo3VEXpfvcBORkEEu3ieMXbkNmLxI`)
//             .then((res) => dispatch({ type: NasaActionTypes.GET_ROVER, payload: res.data }))
//             .catch(err => console.log(err))
//     }
// }

// export const getPhotoSol = (sol) => {
//     return dispatch => {
//         return axios.get(`https://api.nasa.gov/mars-photos/api/v1/rovers/${nombre}/photos?sol=1000&api_key=4daGu2mWR24Eo3VEXpfvcBORkEEu3ieMXbkNmLxI`)
//             .then((res) => dispatch({ type: NasaActionTypes.GET_ROVER, payload: res.data }))
//             .catch(err => console.log(err))
//     }
// }

