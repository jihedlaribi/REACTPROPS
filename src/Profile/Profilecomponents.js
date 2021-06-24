import React from 'react'
import propTypes from 'prop-types';
import { Button } from 'react-bootstrap'
const Profilecomponents = ({children,FullName,Bio,Profession,handleAlert}) => {
    return (
        <div>
            {children}
            <div>
            <Button variant="primary" onClick={()=>handleAlert(FullName)}>Name</Button>{' '}
            <Button variant="success"onClick={()=>handleAlert(Bio)}>Bio</Button>{' '}
           
          <Button variant="warning" onClick={()=>handleAlert(Profession)}>Profession</Button>
            </div>
        </div>
    )
 
 
   
}
Profilecomponents.defaultProps = {
    FullName:"jihed",
    Bio:"coding",
    Profession:"developer"

}
export default Profilecomponents


Profilecomponents.propTypes= {
    handleAlert:propTypes.func
}
console.log(propTypes)