import React from 'react'
import Covid from '../components/icons/Covid'
import usePush from '../modules/navigation/usePush'
const Header = ()=>{
    const push = usePush()
return  <>
<label
  htmlFor="theme"
  className="btn flex justify-center items-center font-bold text-xl background hover:shadow hover:rounded w-12 h-12 mt-3 rounded-full"
/>
<label onClick={()=>{push('/covid')}}
  className="btn flex justify-center items-center font-bold text-xl background hover:shadow hover:rounded w-12 h-12 mt-3 rounded-full"
>
    <Covid size="1.6em"/>
</label>
<label onClick={()=>{push('/github')}}
  className="btn flex justify-center items-center font-bold text-xl background hover:shadow hover:rounded w-12 h-12 mt-3 rounded-full"
>
    G
</label>
<div className="flex-1" />
<div className="p-3 sticky bottom-0 background-rich shadow-2xl">
  <label
    htmlFor="openRight"
    className="btn flex justify-center items-center font-bold text-xl background hover:shadow hover:rounded w-12 h-12 rounded-full"
  >
    <svg
      stroke="currentColor"
      fill="currentColor"
      strokeWidth={0}
      viewBox="0 0 24 24"
      height="1em"
      width="1em"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g>
        <path fill="none" d="M0 0h24v24H0z" />
        <path d="M20 22h-2v-2a3 3 0 0 0-3-3H9a3 3 0 0 0-3 3v2H4v-2a5 5 0 0 1 5-5h6a5 5 0 0 1 5 5v2zm-8-9a6 6 0 1 1 0-12 6 6 0 0 1 0 12zm0-2a4 4 0 1 0 0-8 4 4 0 0 0 0 8z" />
      </g>
    </svg>
  </label>
</div>
</>
}
export default Header