import React, { useEffect, useState } from 'react';
import axios from 'axios';

export const DataContext = React.createContext(null);

export const DataProvider = ({ children }) => {
  const [data, setData] = useState(null);

  useEffect(() => {
    axios.get('https://myportfolioinfo.s3.eu-west-2.amazonaws.com/information.json')
      .then(response => {
        setData(response.data)
        console.log(response.data)})
      .catch(error => console.log('Error fetching data: ', error));
  }, []);

  return (
    <DataContext.Provider value={data}>
      {children}
    </DataContext.Provider>
  );
};