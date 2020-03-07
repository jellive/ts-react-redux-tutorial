import React, { useState } from 'react'

type FolderProps = {
    folder: string
    setFolder: (folder: string) => void

}

export default function Folder({ folder, setFolder }: FolderProps) {

    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        e.preventDefault()
        setFolder(e.target.value)
    }

    return (
        <div>
            <p>현재 선택한 폴더: {folder}</p>
            폴더를 선택해보련?
            <input
                type="file"
                onChange={onChange} />
        </div>
    )
}