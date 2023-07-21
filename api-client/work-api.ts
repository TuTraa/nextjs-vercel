import { ListParam, ListResponse, LoginPayLoad, Work } from "../models"
import axiosClient from "./axios-client"

export const workApi = {
    getAll(params: Partial<ListParam>): Promise<ListResponse<Work>> {
        return axiosClient.get('./works', { params })
    },
    get(id: string): Promise<Work> {
        return axiosClient.get(`./logout${id}`)
    },
}