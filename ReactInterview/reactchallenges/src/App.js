import React, { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";
function App() {
  const [counter, setCounter] = useState(0);
  const [apiResponse, setApiResponse] = useState([]);
  const [pageNumber, setPageNumber] = useState(2);
  //Second challenge is :display the data onPage load .APi: https://randomuser.me/api
  //thirdChallenge is we need to add a button called loadmore users and onclick of the loadmore button; api for that is  https://randomuser.me/api/?page=2
  useEffect(() => {
    apiCall();
  }, []);
  const apiCall = async () => {
    await axios
      .get("https://randomuser.me/api")
      .then((response) => {
        setApiResponse(response.data.results);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  //Third Challenge solution
  const loadMore = async () => {
    setPageNumber(pageNumber + 1);
    return await axios
      .get(`https://randomuser.me/api?page=${pageNumber}`)
      .then((response) => {
        setApiResponse((previous) => [...previous, ...response.data.results]);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  console.log(apiResponse);

  //Its always best to wrap  it inside callback if we call a function in he useEffect and avoid the linting error when passing an empty array as dependency
  /*
  const loadMore = useCallback(async () => {
    setPageNumber((prevPageNumber) => prevPageNumber + 1);
    try {
      const response = await axios.get(
        `https://randomuser.me/api?page=${pageNumber}`
      );
      setApiResponse((prevApiResponse) => [
        ...prevApiResponse,
        ...response.data.results,
      ]);
    } catch (error) {
      console.log(error);
    }
  }, [pageNumber]);
  
*/

  return (
    <div className="App">
      <h4>The first challenge: Counter Value is :{counter}</h4>
      <input
        type="number"
        value={counter}
        onChange={(e) => setCounter(parseInt(e.target.value))}
      />
      <button onClick={() => setCounter(counter + 1)} className="btn">
        Counter
      </button>
      <h4>
        The second challenge
        {apiResponse &&
          apiResponse.map((person) => {
            const { gender, name, location, email, phone, picture } = person;
            return (
              <>
                <h5>Person details:</h5>
                <img src={picture.medium} alt="perosnImage" />
                <p>
                  {name.title}
                  {name.first} {name.last}
                </p>
                <p>{gender}</p>
                <p>
                  {location.street.number} {location.street.name},{" "}
                  {location.city}, {location.state} {location.country}{" "}
                  {location.postcode}
                  {/* {JSON.stringify(location)} */}
                </p>
                <p>{email}</p>
                <p>{phone}</p>
              </>
            );
          })}
      </h4>
      <button onClick={loadMore} className="btn">
        LoadMore
      </button>
    </div>
  );
}

export default App;
