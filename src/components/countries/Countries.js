import React, { useEffect, useState } from "react";
import Country from "./Country";
import { Table, FormControl } from "react-bootstrap";
//import CountriesNavbar from "./route/NavbarCountries";
import "./Countries.css";

function Countries() {
  const [countries, setCountries] = useState([]);
  const [filteredCountries, setFilteredCountries] = useState([]);
  const [searchValue, setSearchValue] = useState("");
  useEffect(() => {
    fetch("https://localhost:8080/api/dashboard/countries")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setCountries(
          data.map((country) => ({
            id: country.id,
            name: country.name,
            capital: country.capital || "---",
            region: country.region,
          }))
        );
      });
  }, []);

  function searchByCountryName(searchName) {
    setSearchValue(searchName);
    const result = countries.filter((country) =>
      country.name.toLowerCase().includes(searchName)
    );
    console.log(result);
    setFilteredCountries(result);
  }

  return (
    <div className="countries">
      <div className="countries-container bg-white p-3">
        {/* <h2 className="p-3 mb-3">Countries</h2> */}
        {/* <CountriesNavbar /> */}
        <FormControl
          className="mb-3"
          placeholder="Search"
          aria-label="Search"
          onKeyUp={(e) =>
            searchByCountryName(e.currentTarget.value.toLowerCase().trim())
          }
        />

        <Table striped bordered hover>
          <thead>
            <tr>
              <th>Name</th>
              <th>Capital</th>
              <th>Region</th>
            </tr>
          </thead>
          <tbody>
            {searchValue.length
              ? filteredCountries.map((country) => (
                  <Country
                    key={country.id}
                    country={country}
                    countryTitle={country.name}
                  />
                ))
              : countries.map((country) => (
                  <Country
                    key={country.id}
                    country={country}
                    countryTitle={country.name}
                  />
                ))}
            {/* {(searchValue.length ? filteredCountries : countries).map(
            (country) => (
              <Country
                key={country.id}
                country={country}
                countryTitle={country.name}
              />
            )
          )} */}
          </tbody>
        </Table>
      </div>
    </div>
  );
}

export default Countries;
