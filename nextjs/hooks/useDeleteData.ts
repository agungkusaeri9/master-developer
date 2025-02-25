import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { handleError } from "@/utils/handleError";

export const useDeleteData = (
  deleteFunction: (ids: number[]) => Promise<any>,
  queryKey: any | any[]
) => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: deleteFunction,
    onSuccess: () => {
      toast.success("Data deleted successfully");
      queryClient.invalidateQueries(queryKey);
    },
    onError: (error) => {
      handleError(error);
    },
  });
};
