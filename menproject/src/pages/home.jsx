import React from 'react'
import Navbar from '../componet/navbar'

function Home() {
  return (
    <div>

     <div className='men1' id='top'>


        <h1 className='q1'>Anagram Sofa. Adapts in a snap.</h1>
        <p className='p1'>Discover the new sofa that adapts to the needs of the moment as well as major<br/>life changes.</p>

        <button className='b1'>EXPLORE</button>
     </div>


     <div className='men2'>
        <div className='box1'><img src="1.jpg" alt="" />
          <p className='p2'>Vitra Cushions<br/>A univesal collection of sort cushions for enhanced comfort</p>
        </div>
        <div className='box1'><img src="2.jpg" alt="" />
        <p className='p2'>Vitra Cushions<br/>A univesal collection of sort cushions for enhanced comfort</p>
        </div>
        <div className='box1'><img src="3.jpg" alt="" />
        <p className='p2'>Vitra Cushions<br/>A univesal collection of sort cushions for enhanced comfort</p>
        </div>
        <div className='box1'><img src="4.jpg" alt="" />
        <p className='p2'>Vitra Cushions<br/>A univesal collection of sort cushions for enhanced comfort</p>
        </div>
     </div>

     <div className='men3'>

        <h1 className='q3'>Vitra’s Environmental<br/>Mission</h1>
        <button className='b2'>More Details</button>

     </div>

     <div className='men4'>

        <div className='box2'>
        <div className='box3'><img src="5.jpg" alt="" /></div>
        <p className='p4'>Inspiring and flexible workspaces<br/>Collaborate with us-Consulting & Planing Studio</p>
        </div>

        <div className='box2'>
        <div className='box3'><img src="6.jpg" alt="" /></div>
        <p className='p4'>Inspiring and flexible workspaces<br/>Collaborate with us-Consulting & Planing Studio</p>

        </div>

     </div>
     

     <div className='men5'><h1 className='p5'>Product categories</h1></div>


     <div className='men6'>
        <div className='box4 shadow' ><img src="7.jpg" alt="" /></div>
        <div className='box4 shadow'><img src="8.jpg" alt="" /></div>
        <div className='box4 shadow'><img src="9.jpg" alt="" /></div>
        <div className='box4 shadow'><img src="10.jpg" alt="" /></div>
     </div>

     <div className='men7'>

        <div className='box5'>
            <p className='q7'>Vitra Newsletter</p>
            <p className='q8'>New products, limited editions, event invitations and much more.</p>
        </div>
        <div className='box5'>
            <p className='q9'><i class="fa-solid fa-house"></i>  Private customers</p>
        </div>
        <div className='box5'> <p className='q10'><i class="fa-solid fa-oil-can"></i>Private customers</p></div>
     </div>


     <footer className='f1'>

        <div className='box6'>
            <button className='b4'>Products</button>
            <button className='b5'> All Products</button>
            <button className='b5'>NEW product</button>
            <button className='b5'>Desiner</button>
            <button className='b5'>Manufacture warranty</button>
            <button className='b5'>Colours & materials</button>

            <button className='b6'>Professional</button>
            <button className='b5'>Downloads</button>
            <button className='b5'>Project</button>
            <button className='b5'>Our Clients</button>
            <button className='b5'>Tools</button>
        </div>

        <div className='box6'>

        <button className='b4'>About Vitra</button>
        <button className='b5'>Fact</button>
        <button className='b5'>Vitra cumpus</button>
        <button className='b5'>Sustainability</button>
        <button className='b5'>Magazine</button>
        <button className='b5'>Jobs & Careers</button>
        <button className='b5'>Press</button>

        <p className='q11'>
        <i class="fa-brands fa-youtube"></i>&nbsp;&nbsp;&nbsp;&nbsp;
        <i class="fa-brands fa-twitter"></i>&nbsp;&nbsp;&nbsp;&nbsp;
        <i class="fa-brands fa-facebook"></i>&nbsp;&nbsp;&nbsp;&nbsp;
        <i class="fa-brands fa-instagram"></i>&nbsp;&nbsp;&nbsp;&nbsp;
        <i class="fa-brands fa-linkedin"></i>&nbsp;
        </p>

        <p className='q12'>COPYRIGHT © 2024 VITRA INTERNATIONAL AG<br/>cookie Setting</p>
        
       <div className='hh'>
       <a  href="#top">Up</a>
       </div>
        

        </div>

        <div className='box6'>
        <button className='b4'>Contact</button>
        <button className='b5'>Contact vitra</button>
        <button className='b5'>Find vitra</button>
        <button className='b5'>Vitra Companies</button>
        <button className='b5'>Subscribe to the  newsletter</button>
        <button className='b5'>Vitra Circle Stores</button>

        <button className='b6'>Legal</button>
        <button className='b5'>Dristibution</button>
        <button className='b5'>Imprint</button>
        <button className='b5'>Privacy Policy</button>
        </div>

     </footer>


    </div>
  )
}

export default Home