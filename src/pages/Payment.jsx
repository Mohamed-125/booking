import React from 'react'
import card from"../assests/card.png"
import "./Payment.css"
import { Link } from 'react-router-dom'
import Login from './Login'
const Payment = () => {
  return (
    <>

      <div className="container-payment">

        <form className='form-payment' action="">

          <div className="row row-payment">

            <div className="col-payment col-md-6 ">

              <h3 className="title-payment">billing address</h3>

              <div className="inputBox-payment">
                <span>full name :</span>
                <input type="text" placeholder="john deo" />
              </div>
              <div className="inputBox-payment">
                <span>email :</span>
                <input type="email" placeholder="example@example.com" />
              </div>
              <div className="inputBox-payment">
                <span>address :</span>
                <input type="text" placeholder="room - street - locality" />
              </div>
              <div className="inputBox-payment">
                <span>city :</span>
                <input type="text" placeholder="mumbai" />
              </div>

              <div className="flex-payment">
                <div className="inputBox-payment">
                  <span>state :</span>
                  <input type="text" placeholder="india" />
                </div>
                <div className="inputBox-payment">
                  <span>zip code :</span>
                  <input type="text" placeholder="123 456" />
                </div>
              </div>

            </div>

            <div className="col-payment col-md-6">

              <h3 className="title-payment">payment</h3>

              <div className="inputBox-payment">
                <span>cards accepted :</span>
                <img src={card} alt="" />
              </div>
              <div className="inputBox-payment nameNoCard">
                <span>name on card :</span>
                <input type="text" placeholder="mr. john deo" />
              </div>
              <div className="inputBox-payment">
                <span>credit card number :</span>
                <input type="number" placeholder="1111-2222-3333-4444" />
              </div>
              <div className="inputBox-payment">
                <span>exp month :</span>
                <input type="text" placeholder="january" />
              </div>

              <div className="flex-payment">
                <div className="inputBox-payment">
                  <span>exp year :</span>
                  <input type="number" placeholder="2022" />
                </div>
                <div className="inputBox-payment">
                  <span>CVV :</span>
                  <input type="text" placeholder="1234" />
                </div>
              </div>

            </div>

          </div>
          <input type="submit" value="proceed to checkout" onClick={()=> alert("secusss")} className="submit-btn-payment" />

        </form>

      </div>
    </>
  )
}

export default Payment