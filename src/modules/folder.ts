const SET_FOLDER = 'SET_FOLDER' as const

export const setFolder = (folder: string) => ({ type: SET_FOLDER, payload: folder })

export type FolderAction = | ReturnType<typeof setFolder>

export type FolderState = {
    folder: string
}

const initialState: FolderState = {
    folder: ''
}

export default function reducer(state: FolderState = initialState, action: FolderAction) {
    switch (action.type) {
        case SET_FOLDER:
            return { ...state, folder: action.payload }
        default:
            return state
    }
}

