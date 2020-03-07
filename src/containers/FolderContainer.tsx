import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../modules'
import { setFolder } from '../modules/folder'
import Folder from '../components/Folder'

export default function FolderContainer() {
    const folder = useSelector((state: RootState) => state.folder.folder)
    const dispatch = useDispatch()

    const onSetFolder = (payload: string) => { dispatch(setFolder(payload)) }
    return (
        <Folder
            folder={folder}
            setFolder={onSetFolder}
        />
    )
}
