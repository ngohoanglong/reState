import React, { useEffect } from 'react'
import useHistory from './useHistory'
const useBack = ()=>{
    const history = useHistory() 
    return history.back
}
export default useBack