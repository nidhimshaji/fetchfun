// import { useCallback, useState } from "react";

// const useFetch = url => {
//   const [resData, setresData] = useState();

//   const getData = useCallback(url => {
//     fetch(url)
//       .then(res => res.json())
//       .then(data => {
//         // console.log("data", data);
//         setresData(data);
//       });
//   }, []);

//   const invokeFetch = url => {
//     getData(url);
//   };

//   return { invokeFetch };
// };

// export default useFetch;

export function fetchAPI(url) {
  // param is a highlighted word from the user before it clicked the button
  return fetch(url)
    .then(res => res.json())
    .then(data => data);
}
