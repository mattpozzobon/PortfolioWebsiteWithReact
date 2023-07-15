import React, { useEffect, useState} from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';

export const DataContext = React.createContext(null);

export const DataProvider = ({ children }) => {
  const [state, setState] = useState({
    data: null,
    isFirstTime: false,
    isLoading: true
  });

  useEffect(() => {
    axios.get('https://myportfolioinfo.s3.eu-west-2.amazonaws.com/information.json')
      .then(response => {
        setState({
          data: response.data,
          isLoading: false
        });
      })
      .catch(error => {
        console.log('Error fetching data: ', error)
        setState({isLoading: false});
      });
  }, []);

  useEffect(() => {
    const cacheVariable = '@First';
    const hasVisited = localStorage.getItem(cacheVariable);
    const toastText = "Thank you so much for visiting my website for the first time! I hope you enjoy it!";
    const toastObj = {position: "top-right", autoClose: false,hideProgressBar: false, closeOnClick: true,pauseOnHover: true,draggable: true,progress: undefined,theme: "dark"}

    if (!hasVisited) {
        localStorage.setItem(cacheVariable, true);
        setState({isFirstTime: false});
        toast.info(toastText, toastObj);
    }
  }, []);
  
  console.log(state)
  return (
    <DataContext.Provider value={state}>
      {children}
    </DataContext.Provider>
  );
};