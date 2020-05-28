import React, { useEffect, useCallback } from 'react'
import history from './history'
import { useHistory } from 'react-router'

const useReplace = ()=>{
    const history = useHistory() 
    const replace = useCallback((...args)=>{
        history.go(-1)
        history.pushState(...args)
        history.pushState(...args)
        history.go(-1)
    },[])
    return replace
}
export default useReplace