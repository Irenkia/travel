import React, { useEffect, useState } from "react";
import CountriesService from "../../services/CountriesService";
import { Button } from "../button/Button";
//import { Link } from "react-router-dom";
//import { Table, FormControl } from "react-bootstrap";
import "./Countries.css";

const Countries = () => {
  const [countries, setCountries] = useState([]);
  const [currentCountry, setCurrentCountry] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(-1);
  const [searchName, setSearchName] = useState("");

  useEffect(() => {
    retrieveCountries();
  }, []);

  const retrieveCountries = () => {
    CountriesService.getAll()
      .then((response) => {
        setCountries(response.data);
        console.log(response.data);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  // const refreshList = () => {
  //   retrieveCountries();
  //   setCurrentCountry(null);
  //   setCurrentIndex(-1);
  // };

  const setActiveCountry = (country, index) => {
    setCurrentCountry(country);
    setCurrentIndex(index);
  };

  const onChangeSearchName = (e) => {
    const searchName = e.target.value;
    setSearchName(searchName);
  };

  // const removeAllCountries = () => {
  //   CountriesService.removeAll()
  //     .then((response) => {
  //       console.log(response.data);
  //       refreshList();
  //     })
  //     .catch((e) => {
  //       console.log(e);
  //     });
  // };

  const findByName = () => {
    CountriesService.findByName(searchName)
      .then((response) => {
        setCountries(response.data);
        console.log(response.data);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  return (
    <div className="countries">
      <div className="countries-container bg-white p-3">
        <div className="input-group mb-3">
          <input
            type="text"
            className="form-control"
            placeholder="Search by Name"
            value={searchName}
            onChange={onChangeSearchName}
          />
          <Button
            // className="btn btn-outline-secondary"
            className="btns"
            buttonStyle="btn--primary"
            buttonSize="btn--large"
            onClick={findByName}
          >
            Search
          </Button>
          <Button
            // className="btn btn-outline-secondary"
            className="btns"
            buttonStyle="btn--primary"
            buttonSize="btn--large"
            onClick={retrieveCountries}
          >
            Show All
          </Button>
        </div>

        <h2 className="title-countries p-3 mb-3">Countries</h2>

        <div className="col-md-6">
          {currentCountry ? (
            <div>
              <h4>Country</h4>
              <div>
                <label>
                  <strong>Country:</strong>
                </label>{" "}
                {currentCountry.name}
              </div>
              <div>
                <label>
                  <strong>Capital:</strong>
                </label>{" "}
                {currentCountry.capital}
              </div>
              <div>
                <label>
                  <strong>Region:</strong>
                </label>{" "}
                {currentCountry.region}
              </div>

              {/* <Link
                to={"/basket/" + currentCountry.id}
                className="badge badge-warning"
              >
                add to Basket
              </Link> */}
            </div>
          ) : (
            <div className="country-table">
              {/* <Table striped bordered hover> */}
              <table className="table">
                <thead>
                  <tr>
                    <th>Name</th>
                    <th>Capital</th>
                    <th>Region</th>
                  </tr>
                </thead>
                <tbody>
                  {countries &&
                    countries.map((country, index) => (
                      <tr
                        className={
                          "list-group-item " +
                          (index === currentIndex ? "active" : "")
                        }
                        onClick={() => setActiveCountry(country, index)}
                        key={index}
                      >
                        <td>{country.name}</td>
                        <td>{country.capital}</td>
                        <td>{country.region}</td>
                      </tr>
                    ))}
                </tbody>
              </table>
              {/* </Table> */}
            </div>
          )}
        </div>

        {/* <Button
          // className="m-3 btn btn-sm btn-danger"
          className="btns"
          buttonStyle="btn--primary"
          buttonSize="btn--large"
          onClick={removeAllCountries}
        >
          Remove All
        </Button> */}
      </div>
    </div>
  );
};

export default Countries;
