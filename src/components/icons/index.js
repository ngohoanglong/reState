
import React from 'react'
export default function Icon  ({path,size,...props}){
    return <svg  height={size} viewBox="0 0 1024 1024" fill="currentColor" width={size} {...props}>
        <path d={path}></path>
    </svg>
}