import {createApi,fetchBaseQuery} from '@reduxjs/toolkit/query/react';

export const api = createApi({
    baseQuery:fetchBaseQuery({baseUrl:'https://jsonplaceholder.typicode.com'}),
    endpoints:(builder)=>({
        feachUser:builder.query({
            query:({username,email})=>`users?username=${username}&email=${email}`,
        }),
        feachGoods:builder.query({
            query:(searchReqest)=>`photos?title=${searchReqest}`,
        })
    }),

});

export const {useFeachUserQuery,useFeachGoodsQuery} = api;
export const apiReducerPath = api.reducerPath;
export const apiMiddleware = api.middleware;