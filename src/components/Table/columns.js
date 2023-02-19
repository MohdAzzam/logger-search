import Constants from "../../helpers/Constants";
import { format } from "date-fns";
export const COLUMNS = [
  {
    Header: Constants.logId,
    accessor: Constants.accessorData.id,
  },
  {
    Header: Constants.applicationType,
    accessor: Constants.accessorData.applicationType,
    Cell: ({ value }) => Constants.applicationKeys[value],
  },
  {
    Header: Constants.applicationId,
    accessor: Constants.accessorData.applicationId,
  },
  {
    Header: Constants.action,
    accessor: Constants.accessorData.actionType,
    Cell: ({ value }) => Constants.actionsKeys[value],
  },
  {
    Header: Constants.actionDetails,
    accessor: Constants.accessorData.actionDetails,
    Cell: () => <span className="action-details">-/-</span>,
  },
  {
    Header: Constants.dateTime,
    accessor: Constants.accessorData.dateTime,
    Cell: ({ value }) => {
      return format(new Date(value), "yyyy-MM-dd hh:mm:ss");
    },
  },
];
