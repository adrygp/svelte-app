import { persisted } from 'svelte-persisted-store';

const INITIAL_DATA = {
    "example": "this is a persistence data example",
    "variable1": 12,
    "variable2": true,
    "lorem": "ipsum"
}

export const session = persisted('session', { },
    {
        storage: 'local', // 'session' for sessionStorage, defaults to 'local'
        syncTabs: true, // choose wether to sync localStorage across tabs, default is true
        onError: (e) => {
            throw e
        }
    }
);