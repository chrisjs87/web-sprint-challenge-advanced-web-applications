// import axiosWithAuth from '../helpers/axiosWithAuth';

// const fetchColorService = () => {
//   let responseData;
//     axiosWithAuth()
//       .get(`http://localhost:5000/api/colors`)
//       .then(res => {
//         console.log(res.data)
//         responseData = res.data
//         console.log(responseData)
//       })
//       .catch(err => console.log(err))
//     return responseData;
// }

// const fetchColorService = () => {
//     axiosWithAuth()
//       .get(`http://localhost:5000/api/colors`)
//       .then(res => {
//         console.log(res.data)
//         // setColors(res.data)
//         return res.data
//       })
//       .catch(err => console.log(err))
// }

// export default fetchColorService;

// const fetchColorService = () => {
//     return axiosWithAuth()
//       .get(`http://localhost:5000/api/colors`)
//       .then(res => {
//         return res
//       })
//       .catch(err => {
//         console.log(err)
//         return err
//       })
// }
// export default fetchColorService;