import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import 'bootstrap/dist/css/bootstrap.min.css';
import { CgShoppingBag } from 'react-icons/cg';
import Canvas from './Canvas.scss';
import product1 from './img/product1.webp';
import product2 from "./img/product2.webp";

function Example() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
      <CgShoppingBag />
      </Button>

      <Offcanvas show={show} placement={"end"} onHide={handleClose}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title><div className='car'>Cart</div> </Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <div className='div1'>
          <div className='product1'>
          <img src={product1} alt="product" width={100} />
          </div> 

          <div className='primis'>
          Primis in Faucibus
          <p>1 x <span className='num'>$65.00</span></p>
          </div> 
          </div>
<div className='div2'>
  <div className='product2'>
    <img src={product2} alt="" width={100} />
  </div>
  <div className='Letraset'>Letraset Sheets
  <p>1 x <span className='numm'>$60.00</span></p>
  </div>
</div>
<div className='class'>

<div className='sub'>Sub total: <p className='cto'>$125.00</p>
</div>
<div className='total'>total: <p className='dva'>$125.00</p>
</div>
</div>
<button className='viev'><h1 className='cart'>VIEV CART</h1></button>
<button className='checkout'><h1 className='chech'>CHECHOUT</h1></button>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}
export default Example;