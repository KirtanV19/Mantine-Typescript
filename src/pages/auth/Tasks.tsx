import { api } from "../../api";
import { Box } from "@mantine/core";
import { usePageData } from "../../hooks/use-page-data";
import CustomTable from "../../components/custom-table";
import { apiAsyncHandler } from "../../utils/helper";
import { useState } from "react";

const Tasks = () => {
  usePageData();
  const [data, setData] = useState([]);

  const [error, setError] = useState<string | null>(null);

  const response = apiAsyncHandler(() => api.users.getAll({}));
  console.log("response: ", response);

  if (!response || !response?.data || response?.data?.length === 0) {
    setError("Email not found!");
    return;
  }

  if (response) {
    setData(response?.data);
  }

  const columns = [
    {
      id: "name",
      label: "Name",
      field_name: "name",
      render: ({ row }) => row.name,
    },
    {
      id: "email",
      label: "Email",
      field_name: "email",
      render: ({ row }) => row.email,
    },
    {
      id: "role",
      label: "Role",
      field_name: "role",
      render: ({ row }) => row.role,
    },
  ];

  return (
    <Box>
      <CustomTable data={data} columns={columns} />
    </Box>
  );
};

export default Tasks;
