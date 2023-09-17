import { useMemo } from "react";
import { useSearchParams } from "react-router-dom";

/** 返回 URL 中指定键 `keys` 的参数值 */
export const useUrlQueryParam = <K extends string>(keys: K[]) => {
  const [searchParams, setSearchParams] = useSearchParams();
  return [
    useMemo(
      () =>
        keys.reduce(
          (prev: { [key in K]: string }, key: string) => ({
            ...prev,
            [key]: searchParams.get(key) || "",
          }),
          {} as { [key in K]: string }
        ),
      // eslint-disable-next-line
      [searchParams]
    ),
    setSearchParams,
  ] as const;
};
