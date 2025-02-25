import { useQuery } from "@tanstack/react-query";
import { useSearchParams, useRouter } from "next/navigation";
import { useState, useEffect } from "react";

export const useFetchData = (
  fetchFunction: Function,
  queryKey: string,
  usePagination: boolean = true
) => {
  const searchParams = useSearchParams();
  const router = useRouter();

  const [currentPage, setCurrentPage] = useState(
    usePagination ? Number(searchParams.get("page")) || 1 : 1
  );
  const [limit, setLimit] = useState(
    usePagination ? Number(searchParams.get("limit")) || 5 : 0
  );
  const [search, setSearch] = useState(searchParams.get("search") || "");
  const [date, setDate] = useState(searchParams.get("date") || "");
  const [productId, setProductId] = useState(searchParams.get("date") || "");
  const [pagination, setPagination] = useState({});

  useEffect(() => {
    if (!usePagination) return;

    const newParams = new URLSearchParams(searchParams.toString());
    newParams.set("limit", limit.toString());
    newParams.set("page", currentPage.toString());
    if (search) newParams.set("search", search);
    if (date) newParams.set("date", date.toString());
    if (productId) newParams.set("product_id", productId.toString());
    router.push(`?${newParams.toString()}`, { scroll: false });
  }, [
    search,
    currentPage,
    limit,
    router,
    searchParams,
    usePagination,
    date,
    productId,
  ]);

  const fetchData = async () => {
    const response = usePagination
      ? await fetchFunction(currentPage, limit, search, date, productId)
      : await fetchFunction(search);

    if (usePagination) setPagination(response.meta.pagination);
    return response.data;
  };

  const { data, isLoading, refetch } = useQuery({
    queryKey: usePagination
      ? [queryKey, currentPage, limit, search, date, productId]
      : [queryKey],
    queryFn: fetchData,
  });

  return {
    data,
    isLoading,
    pagination,
    currentPage,
    limit,
    search,
    date,
    setSearch,
    setCurrentPage,
    setLimit,
    refetch,
    fetchData,
    setDate,
    setProductId,
  };
};
