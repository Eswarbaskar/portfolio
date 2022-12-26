import React from 'react';

const Contact = () => {
  return (
    <div className="container p-2 mt-2 ">
       <h4 className="b-line">
            Contact
          </h4>
      <div className="row justify-content-center">
        <div className="col-sm-8 p-5">
       
          <table className="table table-striped boder">

            <tbody>
              <tr className='p-5'>
                <th scope="row"></th>
                <td>PhoneNo</td>
                <td>9597644951</td>
                
              
              </tr>
              <tr>
                <th scope="row"></th>
                <td>E-mail</td>
                <td>baskaraneswar78@gmail.com</td>
                
              </tr>
              <tr>
                <th scope="row"></th>
                <td>Address</td>
                <td>2/188 south street keelakulikudi madurai-19</td>
                
              </tr>
            </tbody>

          </table>
        </div>
      </div>
    </div>
  );
};
export default Contact;