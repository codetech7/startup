// import React from 'react'
// import { Button, Checkbox, Form } from 'semantic-ui-react';


// const Fbody = () => (
//   <Form>
//     <Form.Field>
//       <label>First Name</label>
//       <input placeholder='First Name' />
//     </Form.Field>
//     <Form.Field>
//       <label>Last Name</label>
//       <input placeholder='Last Name' />
//     </Form.Field>
//     <Form.Field>
//       <Checkbox label='I agree to the Terms and Conditions' />
//     </Form.Field>
//     <Button type='submit'>Submit</Button>
//   </Form>
// )

// export default Fbody;

import React from 'react'
import "./index.css"

export default function Fbody() {
  return (
    <div className = "Container">
        <div className='firstchild'>
            
            <div className = "image">
                <img src = ""/>
            </div>
            <div className = "description">
                <h6>SAVE TIME</h6>
                <h4>Reduce Time Spent On Manual Deshelling And Separation</h4>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo</p>
            </div>

        </div>

        <div className='secondchild'>
            <div className = "description">
                <h6>SAVE TIME</h6>
                <h4>Reduce Time Spent On Manual Deshelling And Separation</h4>
                <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo</span>
            </div>
            <div className='image'>
                <img src = ""/>
            </div>
            
            
        </div>
    </div>
  )
}
