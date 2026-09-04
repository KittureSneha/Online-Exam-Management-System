import React,{ createContext, useContext, useState,useEffect } from 'react';

const CenterContext = createContext();

export const CenterProvider = ({ children }) => {
    const initialCenters =JSON.parse(localStorage.getItem('centers')) || ['center 1'];
  const [centers, setCenters] = useState(initialCenters);

  const getCenters = () => {
    return centers;
  };
  

  const addCenter = (newCenter) => {
    setCenters([...centers, newCenter]);
  };

  const deleteCenter = (index) => {
    const updatedCenters = [...centers];
    updatedCenters.splice(index, 1);
    setCenters(updatedCenters);
  };

  useEffect(() => {
    localStorage.setItem('centers', JSON.stringify(centers));
  }, [centers]);


  return (
    <CenterContext.Provider value={{ centers, addCenter, deleteCenter,getCenters }}>
      {children}
    </CenterContext.Provider>
  );
};

export const useCenterContext = () => {
  return useContext(CenterContext);
};