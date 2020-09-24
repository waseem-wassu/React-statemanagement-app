// eslint-disable-next-line
import React,{ createContext } from "react";

const counterContext =  createContext(45, () => {});

export default counterContext;
