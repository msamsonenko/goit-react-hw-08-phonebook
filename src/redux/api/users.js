import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const usersApi = createApi({
  reducerPath: 'usersApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://connections-api.herokuapp.com',
  }),
  tagTypes: ['Users'],
  endpoints: builder => ({
    // getAllContacts: builder.query({
    //   query: () => `/contacts`,
    //   providesTags: ['Contacts'],
    // }),
    deleteContact: builder.mutation({
      query: contactId => ({
        url: `/contacts/${contactId}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['Users'],
    }),
    addUser: builder.mutation({
      query: newUser => ({
        url: '/users/signup',
        method: 'POST',
        body: newUser,
      }),
      invalidatesTags: ['Users'],
    }),
  }),
});

export const {
  //   useGetAllContactsQuery,
  //   useDeleteContactMutation,
  useAddUserMutation,
} = usersApi;
