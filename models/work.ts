export interface Work {
    id: string,
    title: string,
    tagList: string[],
    shortDescription: string,
    fullDescription: string,
    updateAt: string,
    createdAt: string,
    thumbnailUrl: string,
}

export interface WorkFilterPayload {
    search: string,
    tagList_search: string,
    selectedTaglist: string[],
}