import React from 'react'


export default function Details({title}) {
  const [show, setShow] = React.useState(false)
  const s = show?"-show": '';
  return (
    <li onMouseOver={() => setShow(true)} onMouseOut>
     {title}
     <div className='abs'>
     {
      links.map(obj => <li> {obj.option} </li>)
     }
     </div>
     
     
     
    </li>
  )
}
