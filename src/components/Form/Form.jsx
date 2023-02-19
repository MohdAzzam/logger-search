import React, { useReducer, useState } from "react";
import Constants from "../../helpers/Constants";
import { initialState, reducer } from "../../helpers/function";
import Input from "../Input";
import Select from "../Select";
import "./style.css";

function Form({ setQuery }) {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [error, setError] = useState({ error: false, message: "" });
  const onChange = (event) => {
    const { name, value } = event.target;
    switch (name) {
      case "logId":
        dispatch({
          type: Constants.actionTypes.SET_LOG_ID,
          payload: +value,
        });
        break;
      case "actionType":
        dispatch({ type: Constants.actionTypes.SET_ACTION, payload: value });
        break;
      case "applicationType":
        dispatch({
          type: Constants.actionTypes.SET_APPLICATION_TYPE,
          payload: value,
        });
        break;
      case "applicationId":
        dispatch({
          type: Constants.actionTypes.SET_APPLICATION_ID,
          payload: +value,
        });
        break;
      case "selectedDate":
        dispatch({
          type: Constants.actionTypes.SET_SELECTED_DATE,
          payload: value,
        });
        break;
      case "fromDate":
        dispatch({ type: Constants.actionTypes.SET_FROM_DATE, payload: value });
        break;
      case "toDate":
        dispatch({ type: Constants.actionTypes.SET_TO_DATE, payload: value });
        setError(false);
        break;
      default:
        return;
    }
  };

  const formSubmit = (event) => {
    event.preventDefault();
    let fromTo;
    if (state.fromDate !== "" && state.toDate === "") {
      setError({
        error: true,
        message: Constants.errorMessage,
      });
      return;
    }
    const formData = new FormData();
    const query = Object.entries(state)
      .map((item) => {
        if (item[1] !== "") {
          formData.append(...item);
          return {
            key: item[0],
            value: item[1],
          };
        } else {
          return null;
        }
      })
      .filter((item) => item);
    if (state.fromTo !== "" && state.toDate !== "") {
      fromTo = {
        key: "fromTo",
        value: {
          from: state.fromDate,
          to: state.toDate,
        },
      };
      setQuery([...query, fromTo]);
    } else {
      setQuery(query);
    }

    const asString = new URLSearchParams(formData).toString();
    if (asString) window.history.pushState(null, null, `?${asString}`);
  };

  const formReset = () => {
    setQuery([]);
    setError(false);
    dispatch({ type: Constants.actionTypes.RESET_FROM_DATE });
    window.history.pushState(null, null, "/");
  };

  return (
    <form className="form" onSubmit={formSubmit}>
      <Input
        label="Log Id"
        type="text"
        defaultValue={state.logId}
        name="logId"
        onChange={onChange}
        placeholder="eg.906468196730134"
      />

      <Select
        name="applicationType"
        label="Application Type"
        onChange={onChange}
        defaultValue="Select action type"
        options={Constants.applicationKeys}
      />

      <Select
        name="actionType"
        label="Action Type"
        onChange={onChange}
        defaultValue="Select action type"
        options={Constants.actionsKeys}
      />

      <Input
        label="Application Id"
        type="text"
        defaultValue={state.applicationId}
        name="applicationId"
        onChange={onChange}
        placeholder="eg.375709440378514"
      />

      <Input
        label="Selected Date"
        type="date"
        defaultValue={state.selectedDate}
        name="selectedDate"
        onChange={onChange}
      />
      <Input
        label="From Date"
        type="date"
        defaultValue={state.fromDate}
        name="fromDate"
        onChange={onChange}
      />
      <Input
        label="To Date"
        type="date"
        defaultValue={state.toDate}
        name="toDate"
        onChange={onChange}
        error={error}
      />
      <div>
        <Input type="submit" value="Search Logger" />
        <Input type="reset" onClick={formReset} value="Reset" />
      </div>
    </form>
  );
}

export default Form;
