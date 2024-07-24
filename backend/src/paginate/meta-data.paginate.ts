import {MetaDataArgs} from "./meta-data.args";
import {paginate, PaginateQuery} from "nestjs-paginate";
import {Repository} from "typeorm";
import {MetaData} from "./meta-data";

export const metaDataPaginate =  async function (paginationArgs: MetaDataArgs, repository: Repository<any>, options: { filterableColumns?: object, relations?: object, where?: object}) {
    const query: PaginateQuery = convertToPaginateQuery(paginationArgs);
    const data = await paginate(query, repository, {
        sortableColumns: ['id'],
        nullSort: 'last',
        defaultSortBy: [['id', 'DESC']],
        filterableColumns: options?.filterableColumns,
        relations: options?.relations,
        where: options?.where
    });

    const metaData = new MetaData()
    metaData.totalItems = data.meta.totalItems
    metaData.itemsPerPage = data.meta.itemsPerPage
    metaData.currentPage = data.meta.currentPage
    metaData.totalPages = data.meta.totalPages

    return { edges: data.data, metaData };
}

export const convertToPaginateQuery = (paginationArgs: MetaDataArgs): PaginateQuery => {
    return {
        page: paginationArgs.page,
        limit: paginationArgs.limit,
        sortBy: [['id', 'DESC']], // Приклад, змінюйте за потребою
        filter: paginationArgs.filters,
        path: '', // Додайте ваш шлях, якщо необхідно
    };
};