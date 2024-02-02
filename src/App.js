import logo from './logo.svg';
import './App.css';
import { FaFacebookF, FaTwitter, FaLinkedinIn,FaChevronLeft,FaChevronRight } from "react-icons/fa";
import { ImInstagram } from "react-icons/im";
import myimg from './image/asset 1.jpeg'
import {  } from "react-icons/fa";
// import { HiOutlineDotsHorizontal } from "react-icons/hi";
import {TiSocialInstagram } from "react-icons/ti";

function App(){
  return(
    <div>
      
      <div class='head'>
          <div class='container'>
            <div class="main-head">
              <p class='urlinfo1'>
                <i><FaFacebookF></FaFacebookF></i>
                <i><FaTwitter></FaTwitter></i>
                <i><ImInstagram></ImInstagram></i>
                <i><FaLinkedinIn ></FaLinkedinIn ></i>
              </p>
              <div class='qus'>
                <p>long established fact that a reader will be</p>
              </div>
            </div>
          </div>
        </div>


        {/* Second Header */}
    <div class='logo-head'>
    <div class='container'>
      <div class='menu-head'>
          <div class="logo">
            <img src={myimg}></img>
          </div>
          <div class='menu'>
            <ul>
              <li>HOME</li>
              <li>ABOUT</li>
              <li>PRODUCT</li>
              <li>BLOG</li>
              <li>CONTACT</li>
              <li>SIGN UP</li>
            </ul>
          </div>
          <div className='btn-login'>
            <a>Login</a>
          </div>
      </div>
    </div>
  </div>

  {/* Slider */}
    <div className='slider-main'>
      <div class='slider'>
            <img src={require(`./image/asset 2.jpeg`)}></img>
      </div>
      <div className='slider-text'>
        <div>
          <h1 className='our'>OUR</h1>
        </div>
        <div>
          <h1 className='letest'>LATEST</h1>
        </div>
        <div>
          <h1 className='product'>PRODUCT</h1>
        </div>
      </div>
      <div className='slider-text1'>
        <p>It is a long established fact that a</p>
        <p className='p2'>reader will be distracted by the readable content of a page  </p>
      </div>
      <div className='slider-btn'>
        <a>see more Products</a>
      </div>
      <div className='slider-arrow'>
        <i><FaChevronLeft></FaChevronLeft></i>
        <i><FaChevronRight ></FaChevronRight ></i>
      </div>
    </div>


    {/* why choose us */}
    <div>
      <div className='choose-us'>
        <p className='why1'>WHY</p>
        <p className='why2'>CHOOSE US</p>
      </div>
      <div className='choose-us2'>
        <p>Fastest repair service with best price!</p>
      </div>
      <div className='bgyellow'>
        <div className='container'>
          <div className='bgwhite'>
            <div className='why3'>
              <img src={require(`./image/asset 3.png`)}></img>
              <p className='data'>Data recovery</p>
              <p className='data1'>Perspiciatis eos quos totam cum minima autPerspiciatis eos quos</p>
            </div>
            <div className='why3'>
              <img src={require(`./image/asset 4.png`)}></img>
              <p className='data'>Computer repair</p>
              <p className='data1'>Perspiciatis eos quos totam cum minima autPerspiciatis eos quos</p>
            </div>
            <div className='why3'>
              <img src={require(`./image/asset 5.png`)}></img>
              <p className='data'>Mobile service</p>
              <p className='data1'>Perspiciatis eos quos totam cum minima autPerspiciatis eos quos</p>
            </div>
            <div className='why3'>
              <img src={require(`./image/asset 6.png`)}></img>
              <p className='data'>Network solutions</p>
              <p className='data1'>Perspiciatis eos quos totam cum minima autPerspiciatis eos quos</p>
            </div>
          </div>
          <div className='readmore'>
              <a>Read More</a>
            </div>
        </div>
      </div>
      </div>



      {/* service process */}
 
          <div className='light-white'>
            <div className='container'>
              <div className='service-process'>
                <p className='service'>SERVICE</p>
                <p className='process'>PROCESS</p>
              </div>
              <div className='service-process1'>
                <p>Easy and effective way to get your device repair</p>
              </div>
              <div className='service-type'>
                <div className='service-type1'>
                <img src={require(`./image/asset 7.png`)}></img>
                  <h2>Affordable services</h2>
                  <p>Exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea</p>
                </div>
                <div className='service-type1'>
                  <img src={require(`./image/asset 8.png`)}></img>
                  <h2>Secure payments</h2>
                  <p>Exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea</p>
                </div>
                <div className='service-type1'>
                  <img src={require(`./image/asset 9.png`)}></img>
                  <h2>Expert team</h2>
                  <p>Exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea</p>
                </div>
              </div>
              <div className='service-type'>
                <div className='service-type1'>
                  <img src={require(`./image/asset 10.png`)}></img>
                  <h2>Affordable services</h2>
                  <p>Exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea</p>
                </div>
                <div className='service-type1'>
                  <img src={require(`./image/asset 11.png`)}></img>
                  <h2>90 Days warranty</h2>
                  <p>Exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea</p>
                </div>
                <div className='service-type1'>
                  <img src={require(`./image/asset 12.png`)}></img>
                  <h2>Award winning</h2>
                  <p>Exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea</p>
                </div>
              </div>
            </div>
          </div>

          <div className='container'>
              <div className='our-product'>
                <p className='ours'>OUR</p>
                <p className='products'>PRODUCTS</p>
              </div>
              <div className='our-product1'>
                <p>We package the products with best services to make you a happy customer.</p>
              </div>
          </div>




          <div className='bgproduct'>
            <div className='container'>
              <div className='product-flex'>
                <div className='products1'>
                  <div className='products2'>
                  <img src={require(`./image/asset 13.png`)}></img>
                    <p>Norton Internet Security</p>
                    <h2>$25.00</h2>
                    </div>
                </div>
                <div className='products1'>
                  <div className='products2'>
                  <img src={require(`./image/asset 14.png`)}></img>
                    <p>Norton Internet Security</p>
                    <h2>$25.00</h2>
                    </div>
                </div>
                <div className='products1'>
                  <div className='products2'>
                  <img src={require(`./image/asset 15.png`)}></img>
                    <p>Norton Internet Security</p>
                    <h2>$25.00</h2>
                    </div>
                </div>
                <div className='products1'>
                  <div className='products2'>
                  <img src={require(`./image/asset 16.png`)}></img>
                    <p>Norton Internet Security</p>
                    <h2>$25.00</h2>
                    </div>
                </div>
              </div>
              <div className='product-flex'>
                <div className='products1'>
                  <div className='products2'>
                  <img src={require(`./image/asset 17.png`)}></img>
                    <p>Norton Internet Security</p>
                    <h2>$25.00</h2>
                    </div>
                </div>
                <div className='products1'>
                  <div className='products2'>
                  <img src={require(`./image/asset 14.png`)}></img>
                    <p>Norton Internet Security</p>
                    <h2>$25.00</h2>
                    </div>
                </div>
                <div className='products1'>
                  <div className='products2'>
                  <img src={require(`./image/asset 18.png`)}></img>
                    <p>Norton Internet Security</p>
                    <h2>$25.00</h2>
                    </div>
                </div>
                <div className='products1'>
                  <div className='products2'>
                  <img src={require(`./image/asset 19.png`)}></img>
                    <p>Norton Internet Security</p>
                    <h2>$25.00</h2>
                    </div>
                </div>
              </div>
            </div>
          </div>



        <div className='main-img'>
          {/* <img src={require(`./image/asset 23.jpeg`)}></img> */}
          <div className='container'>
            <div className='what-client'>
              <span>What Clients Say?</span>
                <div className='man-img'>
                  <img src={require(`./image/asset 20.png`)}></img>
                    <div className='man-detail'>
                      <h2>Jone Due</h2>
                      <h3>12/02/2019</h3>
                    </div>
                </div>
                <div className='john-detail'>
                  <p>You guys rock! Thank you for making it painless, pleasant and most of all hassle free! I wish I would have thought of it first. I am really satisfied with my first laptop service.</p>
                  <p>You guys rock! Thank you for making it painless, pleasant and most of all hassle free! I wish I would have thought of it first. I am</p>
                </div>
            </div>
          </div>
        </div>



        <div className='main-request'>
          <div className='container'>
            <div className='main-request1'>
              <div className='request'>
                <span>REQUEST A FREE QUOTE</span>
                <p>Get answers and advice from people you want it from.</p>
                <div>
                  <a>Get Quote</a>
                </div>
              </div>
            </div>
        </div>
        </div>

      <div className='map'>
        <img src={require(`./image/asset 22.jpeg`)}></img>
      </div>

    
    <div className='bgblack'>
      <div className='container'>
        <div class='urlinfo2'>
                <i><FaFacebookF></FaFacebookF></i>
                <i><FaTwitter></FaTwitter></i>
                <i><TiSocialInstagram></TiSocialInstagram></i>
                <i><TiSocialInstagram></TiSocialInstagram></i>
        </div>
        <div className='row'>
          <div className='row1'>
                  <p className='contact' >CONTACT US</p>
                  <p className='address'>123 Second Street Fifth Avenue, Manhattan, New YorK</p>
                  <p className='number'> +987 654 3210</p>
          </div>

        <div className='row2'>
              <p>ADDITIONAL LINKS</p>
                <ul>
                <li>About Us</li>
                <li>Terms and conditions</li>
                <li>Privacy policy</li>
                <li>News</li>
                <li>Contact us</li>
                </ul>
          </div>

          <div className='row3'>
              <p>SERVICE</p>
                <ul>
                <li>Data recovery</li>
                <li>Computer repair</li>
                <li>Mobile service</li>
                <li>Network solutions</li>
                <li>Technical support</li>
                </ul>
          </div>

          <div className='row4'>
                  <p className='about-lighten' >ABOUT LIGHTEN</p>
                  <p className='about1'>Tincidunt elit magnis nulla facilisis. Dolor Sapien nunc amet ultrices,</p>
          </div>

        </div>
      </div>
    </div>

      <div className='bgyellow1'>
        <p>Copyright 2019 All Right Reserved By Free html Templates Distributed By ThemeWagon</p>
      </div>

  </div>


    
  );
}

export default App;