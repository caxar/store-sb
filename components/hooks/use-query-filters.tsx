import { useRouter } from "next/navigation";
import React from "react";
import { Filters } from "./use-filters";
import qs from "qs";

const useQueryFilters = (filters: Filters) => {
  const router = useRouter();

  React.useEffect(() => {
    const params = {
      ...filters.prices,
      gender: Array.from(filters.gender),
      sizes: Array.from(filters.sizes),
      brands: Array.from(filters.selectedBrands),
    };

    // конвертация данных в строку формата JSON
    const query = qs.stringify(params, {
      arrayFormat: "comma",
    });

    // добавляем в url
    router.push(`?${query}`, {
      scroll: false,
    });
  }, [filters, router]);
};

export default useQueryFilters;
