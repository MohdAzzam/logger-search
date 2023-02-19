import Constants from "./Constants";

export const initialState = {
  logId: "",
  actionType: "",
  applicationType: "",
  selectedDate: "",
  fromDate: "",
  toDate: "",
  applicationId: "",
};
export function reducer(state, action) {
  switch (action.type) {
    case Constants.actionTypes.SET_LOG_ID:
      return { ...state, logId: action.payload };
    case Constants.actionTypes.SET_ACTION:
      return { ...state, actionType: action.payload };
    case Constants.actionTypes.SET_APPLICATION_TYPE:
      return { ...state, applicationType: action.payload };
    case Constants.actionTypes.SET_SELECTED_DATE:
      return { ...state, selectedDate: action.payload };
    case Constants.actionTypes.SET_FROM_DATE:
      return { ...state, fromDate: action.payload };
    case Constants.actionTypes.SET_TO_DATE:
      return { ...state, toDate: action.payload };
    case Constants.actionTypes.SET_APPLICATION_ID:
      return { ...state, applicationId: action.payload };
    case Constants.actionTypes.RESET_FROM_DATE:
      return initialState;
    default:
      return initialState;
  }
}

export function filter(
  queryF,
  loggerData,
  setLoggerData,
  query,
  dateField = "creationTimestamp"
) {
  switch (queryF.key) {
    case "selectedDate":
      const date = loggerData.filter((logger) =>
        logger[dateField].includes(queryF.value)
      );
      setLoggerData(date);
      break;
    case "fromTo":
      const { from, to } = queryF.value;
      const fromDate = new Date(from);
      const toDate = new Date(to);
      const filteredLogs = loggerData.filter((log) => {
        const logDate = new Date(log[dateField].split(" ")[0]);
        return logDate >= fromDate && logDate <= toDate;
      });
      const filteredSortedLogs = filteredLogs.sort((log1, log2) => {
        const date1 = new Date(log1[dateField]);
        const date2 = new Date(log2[dateField]);
        return date2 - date1;
      });
      setLoggerData(filteredSortedLogs);
      break;
    default:
      const result = loggerData.filter((item) => {
        return query.every(({ key, value }) => item[key] === value);
      });
      setLoggerData(result);
  }
}
