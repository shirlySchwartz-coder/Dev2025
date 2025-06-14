import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { AuthReducer } from "./loginReducer";

const rootReducer = combineReducers({
    login : AuthReducer,    
});

export const store = configureStore({   
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: false,
        }),
});
