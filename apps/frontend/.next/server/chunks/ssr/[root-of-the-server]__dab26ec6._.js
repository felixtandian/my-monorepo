module.exports = {

"[externals]/next/dist/compiled/next-server/app-page-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-page-turbo.runtime.dev.js, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js"));

module.exports = mod;
}}),
"[project]/apps/frontend/src/apis/users.ts [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
/* eslint-disable @typescript-eslint/no-explicit-any */ __turbopack_context__.s({
    "getUsers": (()=>getUsers),
    "loginUser": (()=>loginUser),
    "updateUserData": (()=>updateUserData)
});
const baseUrl = process.env.NEXT_APP_API_URL || 'http://localhost:8000/api/';
async function getUsers(userid) {
    const response = await fetch(`${baseUrl}users/${userid}/`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer some-token`
        }
    });
    if (!response.ok) {
        throw new Error('Failed to fetch users');
    }
    return response.json();
}
async function updateUserData(userData) {
    const response = await fetch(`${baseUrl}updateUsers/`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer some-token`
        },
        body: JSON.stringify(userData)
    });
    if (!response.ok) {
        throw new Error('Failed to update user data');
    }
    return response.json();
}
async function loginUser(email, password) {
    const response = await fetch(`${baseUrl}login/`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            email,
            password
        })
    });
    if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || 'Login failed');
    }
    return response.json();
}
}}),
"[project]/apps/frontend/src/store/userSlice.ts [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
/* eslint-disable @typescript-eslint/no-explicit-any */ __turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__),
    "fetchUser": (()=>fetchUser),
    "loginUser": (()=>loginUser),
    "updateUser": (()=>updateUser)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$modern$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/@reduxjs/toolkit/dist/redux-toolkit.modern.mjs [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$frontend$2f$src$2f$apis$2f$users$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/frontend/src/apis/users.ts [app-ssr] (ecmascript)");
;
;
const initialState = {
    user: null,
    loading: false,
    error: null,
    userData: null,
    updateStatus: 'idle',
    loginStatus: 'idle'
};
const fetchUser = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$modern$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createAsyncThunk"])('user/fetchUser', async (userId)=>{
    const response = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$frontend$2f$src$2f$apis$2f$users$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getUsers"])(userId);
    return response;
});
const updateUser = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$modern$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createAsyncThunk"])('user/updateUser', async (userData)=>{
    const response = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$frontend$2f$src$2f$apis$2f$users$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["updateUserData"])(userData);
    return response;
});
const loginUser = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$modern$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createAsyncThunk"])('user/loginUser', async ({ email, password }, thunkAPI)=>{
    try {
        const response = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$frontend$2f$src$2f$apis$2f$users$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["loginUser"])(email, password);
        return response;
    } catch (error) {
        return thunkAPI.rejectWithValue(error.message);
    }
});
const userSlice = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$modern$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createSlice"])({
    name: 'user',
    initialState,
    reducers: {},
    extraReducers (builder) {
        builder.addCase(fetchUser.pending, (state)=>{
            state.loading = true;
            state.error = null;
        }).addCase(fetchUser.fulfilled, (state, action)=>{
            state.loading = false;
            state.user = action.payload;
        }).addCase(fetchUser.rejected, (state, action)=>{
            state.loading = false;
            state.error = action.error.message || 'Failed to fetch user';
        }).addCase(updateUser.pending, (state)=>{
            state.updateStatus = 'loading';
            state.error = null;
        }).addCase(updateUser.fulfilled, (state, action)=>{
            state.updateStatus = 'succeeded';
            state.user = action.payload;
        }).addCase(updateUser.rejected, (state, action)=>{
            state.updateStatus = 'failed';
            state.error = action.error.message || 'Failed to update user';
        }).addCase(loginUser.rejected, (state)=>{
            state.loginStatus = 'failed';
            state.error = null;
        }).addCase(loginUser.fulfilled, (state, action)=>{
            state.loginStatus = 'succeeded';
            state.user = action.payload;
        });
    }
});
const __TURBOPACK__default__export__ = userSlice.reducer;
}}),
"[project]/apps/frontend/src/store/index.ts [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "store": (()=>store)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$modern$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/@reduxjs/toolkit/dist/redux-toolkit.modern.mjs [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$frontend$2f$src$2f$store$2f$userSlice$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/frontend/src/store/userSlice.ts [app-ssr] (ecmascript)");
;
;
const store = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$modern$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["configureStore"])({
    reducer: {
        user: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$frontend$2f$src$2f$store$2f$userSlice$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"]
    }
});
}}),
"[project]/apps/frontend/src/app/providers.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "Providers": (()=>Providers)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$redux$2f$dist$2f$react$2d$redux$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-redux/dist/react-redux.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$frontend$2f$src$2f$store$2f$index$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/frontend/src/store/index.ts [app-ssr] (ecmascript)");
'use client';
;
;
;
function Providers({ children }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$redux$2f$dist$2f$react$2d$redux$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Provider"], {
        store: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$frontend$2f$src$2f$store$2f$index$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["store"],
        children: children
    }, void 0, false, {
        fileName: "[project]/apps/frontend/src/app/providers.tsx",
        lineNumber: 7,
        columnNumber: 10
    }, this);
}
}}),

};

//# sourceMappingURL=%5Broot-of-the-server%5D__dab26ec6._.js.map