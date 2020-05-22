import React, { useEffect } from 'react'
const replace = ()=>{
    history.go(-1)
    history.pushState(...args)
    history.pushState(...args)
    history.go(-1)
}
const useReplace = ()=>{
    return replace
}
export default useReplace