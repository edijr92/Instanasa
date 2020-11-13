import axios from 'axios'
export const NasaActionTypes = {
    NASA: 'NASA',

}

export const getNasaPhotos = () => {
    return dispatch => {
        return axios.get('https://api.nasa.gov/mars-photos/api/v1/rovers/spirit/photos?sol=1000&api_key=Oe3V5OPtXbUb3RCTa0Cb1jdkaacfQ3DINuuU0rUD')
            .then((res) => dispatch({ type: NasaActionTypes.NASA, payload: res.data }))
            .catch(err => console.log(err))
    }
}