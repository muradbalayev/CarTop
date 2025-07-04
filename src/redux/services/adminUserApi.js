import { createApi } from '@reduxjs/toolkit/query/react';
import { baseQueryWithReauth } from '../auth';

// Create the API
export const userApi = createApi({
    reducerPath: 'userApi',
    baseQuery: baseQueryWithReauth,
    endpoints: (builder) => ({
        getUser: builder.query({
            query: ({page, deleted, name}) => ({
                url: 'admin/user',
                params: {
                    name: name,
                    deleted: deleted,
                    page: page,
                    limit: 20
                }
            }),
            providesTags: ['User'],
        }),
    }),
    keepUnusedDataFor: 60,
    refetchOnMountOrArgChange: 5
});

export const { useGetUserQuery } = userApi;
