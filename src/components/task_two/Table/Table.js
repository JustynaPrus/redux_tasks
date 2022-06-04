<<<<<<< HEAD
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { nextPage, prevPage } from "../../../redux/toolkitSlice";
import { useGetData } from "../useGetData";
import { StyledRow } from "./Table.styles";

export const Table = () => {
  const [limit, setLimit] = useState("3");
  const [sort, setSort] = useState("");
  const { page } = useSelector((state) => state.customersTableSlice);
  const API = `http://localhost:3002/customers?_page=${page}&_limit=${limit}&_sort=${sort}&_order=asc`;
  const { data } = useGetData(API);

  const dispatch = useDispatch();

  const handleChange = (e) => {
    setLimit(`${e.target.value}`);
  };

  const sortColumn = (type) => {
    setSort(`${type}`);
  };

  return (
    <div>
      <select onChange={(e) => handleChange(e)}>
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
        <option value="5">5</option>
        <option value="6">6</option>
      </select>
      <StyledRow>
        <p name="name" onClick={() => sortColumn("name")}>
          Name
        </p>
        <p name="surname" onClick={() => sortColumn("surname")}>
          Surname
        </p>
        <p
          name="dateOfRegistration"
          onClick={() => sortColumn("dateOfRegistration")}
        >
          Date of registration
        </p>
        <p
          name="endOfSubscription"
          onClick={() => sortColumn("endOfSubscription")}
        >
          End of subscription
        </p>
      </StyledRow>
      {data.map((item, id) => (
        <StyledRow key={id}>
          <div className={sort === "name" ? "sort" : null}>
            <p>{item.name}</p>
          </div>
          <div className={sort === "surname" ? "sort" : null}>
            <p>{item.surname}</p>
          </div>
          <div className={sort === "dateOfRegistration" ? "sort" : null}>
            <p>{item.dateOfRegistration}</p>
          </div>
          <div className={sort === "endOfSubscription" ? "sort" : null}>
            <p>{item.endOfSubscription}</p>
          </div>
        </StyledRow>
      ))}
      <button onClick={() => dispatch(prevPage())}>prev</button>
      <button onClick={() => dispatch(nextPage())}>next</button>
    </div>
  );
};
=======
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { nextPage, prevPage } from "../../../redux/toolkitSlice";
import { useGetData } from "../useGetData";
import { StyledRow } from "./Table.styles";

export const Table = () => {
  const [limit, setLimit] = useState("3");
  const [sort, setSort] = useState("");
  const { page } = useSelector((state) => state.customersTableSlice);
  const API = `http://localhost:3002/customers?_page=${page}&_limit=${limit}&_sort=${sort}&_order=asc`;
  const { data } = useGetData(API);

  const dispatch = useDispatch();

  const handleChange = (e) => {
    setLimit(`${e.target.value}`);
  };

  const sortColumn = (type) => {
    setSort(`${type}`);
  };

  return (
    <div>
      <select onChange={(e) => handleChange(e)}>
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
        <option value="5">5</option>
        <option value="6">6</option>
      </select>
      <StyledRow>
        <p name="name" onClick={() => sortColumn("name")}>
          Name
        </p>
        <p name="surname" onClick={() => sortColumn("surname")}>
          Surname
        </p>
        <p
          name="dateOfRegistration"
          onClick={() => sortColumn("dateOfRegistration")}
        >
          Date of registration
        </p>
        <p
          name="endOfSubscription"
          onClick={() => sortColumn("endOfSubscription")}
        >
          End of subscription
        </p>
      </StyledRow>
      {data.map((item, id) => (
        <StyledRow key={id}>
          <div className={sort === "name" ? "sort" : null}>
            <p>{item.name}</p>
          </div>
          <div className={sort === "surname" ? "sort" : null}>
            <p>{item.surname}</p>
          </div>
          <div className={sort === "dateOfRegistration" ? "sort" : null}>
            <p>{item.dateOfRegistration}</p>
          </div>
          <div className={sort === "endOfSubscription" ? "sort" : null}>
            <p>{item.endOfSubscription}</p>
          </div>
        </StyledRow>
      ))}
      <button onClick={() => dispatch(prevPage())}>prev</button>
      <button onClick={() => dispatch(nextPage())}>next</button>
    </div>
  );
};
>>>>>>> f36d9c31cfbf4ff0a43d5b0cfd94ad861324c6bc
