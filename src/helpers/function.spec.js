import { reducer, initialState, filter } from "./function";

describe("reducer", () => {
  it("should return the initial state", () => {
    expect(reducer(undefined, {})).toEqual(initialState);
  });

  it("should handle SET_LOG_ID", () => {
    const logId = "906468196730134";
    const expectedState = { ...initialState, logId };

    expect(
      reducer(initialState, { type: "SET_LOG_ID", payload: logId })
    ).toEqual(expectedState);
  });

  it("should handle SET_ACTION", () => {
    const actionType = "DARI_REFRESH_TOKEN";
    const expectedState = { ...initialState, actionType };

    expect(
      reducer(initialState, { type: "SET_ACTION", payload: actionType })
    ).toEqual(expectedState);
  });

  it("should handle SET_APPLICATION_TYPE", () => {
    const applicationType = "web";
    const expectedState = { ...initialState, applicationType };

    expect(
      reducer(initialState, {
        type: "SET_APPLICATION_TYPE",
        payload: applicationType,
      })
    ).toEqual(expectedState);
  });

  it("should handle SET_SELECTED_DATE", () => {
    const selectedDate = "2022-01-31";
    const expectedState = { ...initialState, selectedDate };

    expect(
      reducer(initialState, {
        type: "SET_SELECTED_DATE",
        payload: selectedDate,
      })
    ).toEqual(expectedState);
  });

  it("should handle SET_FROM_DATE", () => {
    const fromDate = "2022-01-30";
    const expectedState = { ...initialState, fromDate };

    expect(
      reducer(initialState, { type: "SET_FROM_DATE", payload: fromDate })
    ).toEqual(expectedState);
  });

  it("should handle SET_TO_DATE", () => {
    const toDate = "2022-02-01";
    const expectedState = { ...initialState, toDate };

    expect(
      reducer(initialState, { type: "SET_TO_DATE", payload: toDate })
    ).toEqual(expectedState);
  });

  it("should handle SET_APPLICATION_ID", () => {
    const applicationId = "1";
    const expectedState = { ...initialState, applicationId };

    expect(
      reducer(initialState, {
        type: "SET_APPLICATION_ID",
        payload: applicationId,
      })
    ).toEqual(expectedState);
  });

  it("should handle RESET_FROM_DATE", () => {
    const state = {
      logId: "906468196730134",
      actionType: "DARI_REFRESH_TOKEN",
      applicationType: "web",
      selectedDate: "2022-01-31",
      fromDate: "2022-01-30",
      toDate: "2022-02-01",
      applicationId: "1",
    };
    const expectedState = initialState;

    expect(reducer(state, { type: "RESET_FROM_DATE" })).toEqual(expectedState);
  });
});
// describe("filter", () => {
//   let loggerData, setLoggerData, query, queryF;

//   beforeEach(() => {
//     loggerData = [
//       {
//         creationTimestamp: "2022-02-01 10:00:00",
//         logId: "1",
//         actionType: "create",
//         applicationType: "web",
//         applicationId: "app1",
//       },
//       {
//         creationTimestamp: "2022-02-02 11:00:00",
//         logId: "2",
//         actionType: "update",
//         applicationType: "mobile",
//         applicationId: "app2",
//       },
//       {
//         creationTimestamp: "2022-02-03 12:00:00",
//         logId: "3",
//         actionType: "delete",
//         applicationType: "web",
//         applicationId: "app3",
//       },
//     ];

//     setLoggerData = jest.fn();

//     query = [
//       { key: "actionType", value: "create" },
//       { key: "applicationType", value: "web" },
//     ];

//     queryF = { key: "fromTo", value: { from: "2022-02-02", to: "2022-02-03" } };
//   });

//   test("filters logger data based on selected date", () => {
//     queryF = { key: "selectedDate", value: "2022-02-02" };
//     filter(queryF, loggerData, setLoggerData, query);
//     expect(setLoggerData).toHaveBeenCalledWith([loggerData[1]]);
//   });

//   test("filters logger data based on from and to dates", () => {
//     filter(queryF, loggerData, setLoggerData, query);
//     expect(setLoggerData).toHaveBeenCalledWith([loggerData[2], loggerData[1]]);
//   });

//   test("filters logger data based on additional filters", () => {
//     filter({ key: "", value: "" }, loggerData, setLoggerData, query);
//     expect(setLoggerData).toHaveBeenCalledWith([loggerData[0]]);
//   });
// });

describe("filter", () => {
  const loggerData = [
    {
      id: 1,
      creationTimestamp: "2022-01-01T00:00:00.000Z",
      actionType: "CREATE",
      applicationType: "APP1",
      applicationId: "APP1-123",
    },
    {
      id: 2,
      creationTimestamp: "2022-01-02T00:00:00.000Z",
      actionType: "UPDATE",
      applicationType: "APP1",
      applicationId: "APP1-123",
    },
    {
      id: 3,
      creationTimestamp: "2022-01-03T00:00:00.000Z",
      actionType: "DELETE",
      applicationType: "APP2",
      applicationId: "APP2-456",
    },
    {
      id: 4,
      creationTimestamp: "2022-01-04T00:00:00.000Z",
      actionType: "CREATE",
      applicationType: "APP2",
      applicationId: "APP2-456",
    },
  ];

  it("should filter by selected date", () => {
    const setLoggerData = jest.fn();
    filter(
      { key: "selectedDate", value: "2022-01-01" },
      loggerData,
      setLoggerData,
      []
    );
    expect(setLoggerData).toHaveBeenCalledWith([loggerData[0]]);
  });

  it("should filter by from/to date and sort by date", () => {
    const setLoggerData = jest.fn();
    filter(
      { key: "fromTo", value: { from: "2022-01-02", to: "2022-01-03" } },
      loggerData,
      setLoggerData,
      []
    );
    expect(setLoggerData).toHaveBeenCalledWith([loggerData[2], loggerData[1]]);
  });

  it("should filter by multiple properties", () => {
    const setLoggerData = jest.fn();
    filter({ key: "", value: "" }, loggerData, setLoggerData, [
      { key: "actionType", value: "CREATE" },
      { key: "applicationType", value: "APP2" },
    ]);
    expect(setLoggerData).toHaveBeenCalledWith([loggerData[3]]);
  });

  it("should filter by selected date with custom date field", () => {
    const setLoggerData = jest.fn();
    filter(
      { key: "selectedDate", value: "2022-01-01" },
      loggerData,
      setLoggerData,
      [],
      "creationTimestamp"
    );
    expect(setLoggerData).toHaveBeenCalledWith([loggerData[0]]);
  });

  it("should filter by from/to date and sort by date with custom date field", () => {
    const setLoggerData = jest.fn();
    filter(
      { key: "fromTo", value: { from: "2022-01-02", to: "2022-01-03" } },
      loggerData,
      setLoggerData,
      [],
      "creationTimestamp"
    );
    expect(setLoggerData).toHaveBeenCalledWith([loggerData[2], loggerData[1]]);
  });
});
