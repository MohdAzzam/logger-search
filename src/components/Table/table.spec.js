import { render, screen } from "@testing-library/react";
import Table from "./Table";

const loggerData = [
  {
    logId: 906468196730134,
    applicationId: null,
    applicationType: null,
    companyId: null,
    actionType: "DARI_REFRESH_TOKEN",
    ip: "10.11.0.89",
    userAgent:
      "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/97.0.4692.99 Safari/537.36",
    userId: 115678,
    source: null,
    ownerId: null,
    logInfo: null,
    creationTimestamp: "2022-01-31 17:29:00",
  },
];

describe("Table", () => {
  it("renders a table with the correct headers and data", () => {
    render(<Table loggerData={loggerData} />);
    const tableHeaders = [
      "Log Id",
      "Application Type",
      "Application Id",
      "Action",
      "Action Details",
      "Date : Time",
    ];
    const headerElements = screen.getAllByRole("columnheader");
    expect(headerElements.length).toBe(tableHeaders.length);
    for (let i = 0; i < tableHeaders.length; i++) {
      expect(headerElements[i]).toHaveTextContent(tableHeaders[i]);
    }

    const rowElements = screen.getAllByRole("row");
    expect(rowElements.length).toBe(loggerData.length + 1);

    const dataCells = screen.getAllByRole("cell");
    expect(dataCells[0]).toHaveTextContent(loggerData[0].logId);
  });
});
