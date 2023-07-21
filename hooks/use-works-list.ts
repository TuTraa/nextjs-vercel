import { workApi } from "@/api-client";
import { QueryKey } from "@/contants";
import { ListParam } from "@/models";
import useSWR, { SWRConfiguration } from "swr";

export interface UserWorkListProps {
    params: Partial<ListParam>
    options?: SWRConfiguration
}


export function useWorkList({ params, options }: UserWorkListProps) {
    const swrResponse = useSWR([QueryKey.GET_WORK_LISR, params], () => workApi.getAll(params), {
        dedupingInterval: 30 * 1000,
        keepPreviousData: true,
        fallbackData: {
            data: [],
            pagination: {
                _page: 1,
                _limit: 10,
                _totalRows: 0
            }
        },
        ...options
    })
    console.log('swrResponse:', swrResponse);
    return swrResponse;
}

