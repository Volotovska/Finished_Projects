import React, { Component } from 'react';

        class Adnorml extends React.Component {
          constructor(props) {
            super(props) 
            this.state = {
               textBlock1: 'We are a team of strategic thinkers that do more than just web and mobile applications for business. We dont just do digital, we step outside of the standard box to place ourselves as users who engage in your products or services.',
               textBlock2: 'Our team has developed projects for industry-leading brands such as The City of McAllen, FCC Environmental, Sunoco, Greater Houston Neurosurgery Center, and more.',
               textBlock3: 'We think logically, creatively, and continuously innovate to make things unique, modern, smart, engaging, and successful.',
               textBlock4: 'Thats how we do Adnorml.'
            };
          }
          
          render() {

            return (
              <div id='foundationAdn'>
                <video src="img/ufo.mp4" loop autoPlay muted>
                </video>
                <div id="text_block">
                  <div  id ='mission_title'> 
                    <font className='white_font'>ADNORML. </font> 
                    <font className = 'blue_font'>WE COME IN PEACE.</font>
                  </div>
                  <div className='white_font mission_main'>
                  {this.state.textBlock1}
                  </div>
                  <div className='white_font mission_main'>
                  {this.state.textBlock2}
                  </div>
                  <div className='white_font mission_main'>
                  {this.state.textBlock3}
                  </div>
                  <div className='white_font mission_main'>
                  {this.state.textBlock4}
                  </div>             
                  <div className="mission_work">
                    <button type='submit' id="buttonBlock4">
                      <div className="button_text">View work
                      </div>
                      <div id="triangle_div">
                      <div id='triangle_right'></div>
                      </div>
                    </button>
                  </div>
                </div>
              </div>
            );
          }
        }
export default Adnorml;
