import axios from "axios";

import { useEffect, useState } from "react";

export const ConsumoAmazon = () => {
  const [data, setData] = useState([]);
  const [search, setSearch] = useState("");

  
    const options = {
      method: "GET",
      url: "https://amazon-web-scraping-api.p.rapidapi.com/products/search",
      params: {
        criteria: "AMD Ryzen",
        page: "1",
        countryCode: "US",
        languageCode: "EN",
      },
      headers: {
        'X-RapidAPI-Key': 'd5cefb61e5mshd4dc07733ade907p1068dbjsne3a7192a5f08',
        'X-RapidAPI-Host': 'amazon-web-scraping-api.p.rapidapi.com'
      },
    };

    const fetchData = async () => {
      try {
       
        const response = await axios.request(options);
        setData(response.data.products.name)
        console.log(response.data);
       /* fetch(response.data).then((res)=>res.json())
        .then((json)=>{
            console.log(json)
        })*/
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  

  return (
    <div>
        <div>
      {data ? (
        <pre>{JSON.stringify(data, null, 2)}</pre>
      ) : (
        <p>Cargando datos...</p>
      )}
    </div>
      <form>
        <div className="input-group">
          <input
            type="text"
            className="form-control"
            placeholder="Buscar..."
            onChange={(ev) => {
              setSearch(ev.target.value);
            }}
          />
          <div className="input-group-append">
            <button className="btn btn-primary">Buscar</button>
          </div>
         
        </div>
      </form>
    </div>
  );
};
