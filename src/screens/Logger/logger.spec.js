import React from "react";
import { render, screen } from "@testing-library/react";
import Logger from "./Logger";

describe("Logger component", () => {
  beforeEach(() => {
    jest.spyOn(global, "fetch").mockResolvedValue({
      json: jest.fn().mockResolvedValue({
        result: {
          auditLog: [
            {
              id: 1,
              timestamp: "2022-02-17T14:43:10.000Z",
              user: "john.doe",
              action: "Login",
              details: { ip_address: "127.0.0.1" },
            },
            {
              id: 2,
              timestamp: "2022-02-16T10:30:20.000Z",
              user: "jane.doe",
              action: "Logout",
              details: { ip_address: "192.168.1.1" },
            },
          ],
        },
      }),
    });
  });

  afterEach(() => {
    jest.restoreAllMocks();
  });

  it("renders a loading spinner initially", async () => {
    render(<Logger />);
  });
});
