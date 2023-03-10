const Constants = {
  API_END_POINT: "https://run.mocky.io/v3/a2fbc23e-069e-4ba5-954c-cd910986f40f",
  logId: "Log Id",
  applicationType: "Application Type",
  applicationId: "Application Id",
  action: "Action",
  actionDetails: "Action Details",
  dateTime: "Date : Time",
  accessorData: {
    id: "logId",
    applicationType: "applicationType",
    applicationId: "applicationId",
    actionType: "actionType",
    actionDetails: "actionDetails",
    dateTime: "creationTimestamp",
  },
  actionsKeys: {
    DARI_REFRESH_TOKEN: "Refresh Token",
    DARI_APP_LOGIN: "App Login",
    INITIATE_APPLICATION: "Initiate Application",
    SUBMIT_APPLICATION: "Submit Application",
    ADD_EMPLOYEE: "Add Employee",
  },
  applicationKeys: {
    CERT_TITLE_DEED_PLOT: "Create Title",
    LEASE_REGISTRATION: "Release Registration",
    ADD_POA: "Add POA",
    ADD_COMPANY: "Add Company",
    ADD_COMPANY_EMPLOYEE: "Add Company Employee",
    CERT_PROP_OWNERSHIP: "Create Prop OwnerShip",
    LEASE_CLOSURE: "Lease Closure",
  },
  actionTypes: {
    SET_LOG_ID: "SET_LOG_ID",
    SET_ACTION: "SET_ACTION",
    SET_APPLICATION_TYPE: "SET_APPLICATION_TYPE",
    SET_APPLICATION_ID: "SET_APPLICATION_ID",
    SET_SELECTED_DATE: "SET_SELECTED_DATE",
    SET_FROM_DATE: "SET_FROM_DATE",
    SET_TO_DATE: "SET_TO_DATE",
    RESET_FROM_DATE: "RESET_FROM_DATE",
  },
  errorMessage: "Please select to date",
};

export default Constants;
