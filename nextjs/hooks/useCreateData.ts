import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import { handleError } from "@/utils/handleError";

export const useCreateData = (
  createFunction: (data: any) => Promise<any>,
  redirectPath: string,
  queryKey: any | any[]
) => {
  const queryClient = useQueryClient();
  const router = useRouter();

  return useMutation({
    mutationFn: async (formData: any) => {
      return await createFunction(formData);
    },
    onSuccess: async (response) => {
      toast.success(response.meta.message);
      queryClient.invalidateQueries(queryKey);
      router.push(redirectPath);
    },
    onError: (error: any) => {
      handleError(error);
    },
  });
};
