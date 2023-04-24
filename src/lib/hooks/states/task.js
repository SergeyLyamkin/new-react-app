import { useQuery } from "@apollo/client";

import Tasks from "src/graphql/queries/tasks";

export const useTasks = () => {
  const { data, loading, error } = useQuery(Tasks, {
    fetchPolicy: "cache-and-network",
  });

  return {
    tasks: data?.tasks || [],
    loading,
    error,
  };
};
