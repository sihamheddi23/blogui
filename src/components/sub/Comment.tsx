import React, { useState } from 'react'
import { FaBox, FaEdit } from 'react-icons/fa'
import { Rating, ThinStar } from '@smastrom/react-rating'
import { Commenty } from '../../types'
import EditComment from './EditComment'

type C = Commenty & {
  isAuth:boolean
} & {
  pid:string
}
function Comment(props:C) {
  const [isEdited, setisEdited] = useState(false)
  const myStyles = {
    itemShapes: ThinStar,
    activeFillColor: '#ffb700',
    inactiveFillColor: '#fbf1a9' 
  }

  const idu = localStorage.getItem("id")
  return (
    <>
     {
      isEdited?<EditComment cid={props._id} pid={props.pid}/>:
      <div className='my-5'>
       
       <div className='flex gap-3'>
         
         <img src="https://www.pngall.com/wp-content/uploads/12/Avatar-Profile-PNG-Images.png" className='my-4 w-[60px] h-[60px]' alt="" />
       
         <div className='flex flex-col gap-2'>
            <h3 className='font-bold'>
              Username
            </h3>
            <Rating style={{ maxWidth: 122 }} value={props.reviews}  readOnly itemStyles={myStyles} />
            <p>
              {props.content}
            </p>
         
  
         </div>
        {
          props.isAuth && ( props.userId == idu &&(
            <div className='flex gap-2 ml-auto'>
                <button className='text-emerald-600 flex gap-1 items-center' onClick={()=>setisEdited(true)}>
                <FaEdit/>Edit
                </button>
                <button className='text-red-700 flex gap-1 items-center'>
                <FaBox/> delete
                </button>
          </div>
          ) 
          
          )
        }
     
  
       </div>
       
  
  
  
      </div>
     }
      
    </>
  )
}

export default Comment