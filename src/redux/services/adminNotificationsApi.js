import { createApi } from '@reduxjs/toolkit/query/react';
import { baseQueryWithReauth } from '../auth';

export const notificationsApi = createApi({
    reducerPath: 'notificationsApi',
    baseQuery: baseQueryWithReauth,
    tagTypes: ['Notification'],
    endpoints: (builder) => ({
        getNotifications: builder.query({
            query: ({ page = 1, limit = 10 } = {}) => ({
                url: 'admin/notifications',
                params: { page, limit }
            }),
            providesTags: ['Notification'],
        }),
        createNotification: builder.mutation({
            query: (data) => ({
                url: 'admin/notifications',
                method: 'POST',
                body: data,
            }),
            invalidatesTags: ['Notification'],
        }),
        editNotification: builder.mutation({
            query: ({ id, ...data }) => ({
                url: `admin/notifications/${id}`,
                method: 'PUT',
                body: data,
            }),
            invalidatesTags: ['Notification'],
        }),
        deleteNotification: builder.mutation({
            query: (id) => ({
                url: `admin/notifications/${id}`,
                method: 'DELETE',
            }),
            invalidatesTags: ['Notification'],
        }),
    }),
    keepUnusedDataFor: 60,
    refetchOnMountOrArgChange: 5,
});

export const {
    useGetNotificationsQuery,
    useCreateNotificationMutation,
    useEditNotificationMutation,
    useDeleteNotificationMutation,
} = notificationsApi;
