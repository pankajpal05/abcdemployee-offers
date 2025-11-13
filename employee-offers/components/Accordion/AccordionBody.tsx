import { ReactNode } from "react";

interface AccordianBodyProps{
  title:string;
  subTitle?:string;
  description?:ReactNode;
  imageLink?:string;
}

const AccordianBody = ({title,subTitle,description,imageLink}:AccordianBodyProps) => {
  return (
   <div className="mb-3">
<h6 className='mb-2 text-sm font-medium leading-1.5'><strong>{title}</strong></h6>
<p className="leading-4 text-xs font-medium opacity-80">{subTitle}</p>
<p className="leading-4 text-xs font-medium opacity-80"> {description}</p>

{imageLink &&<img src={imageLink} alt="img" />}
   </div>
   
  )
}

export default AccordianBody;