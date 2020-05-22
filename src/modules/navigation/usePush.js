import React, { useEffect, useCallback } from 'react'
import useLocation from './useLocation'
import useHistory from './useHistory'
const usePush = ()=>{
    const history = useHistory() 
    const [_,setLocation] = useLocation()
    return useCallback((pathname)=>{
        setLocation(pathname)
        history.pushState({},'',pathname)
    },[])
}

export default usePush