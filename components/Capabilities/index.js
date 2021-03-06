import React, { Component } from 'react';

      class Capabalities extends React.Component {

        constructor(props) {
          super(props) 
            this.state = {
              seconds: 0,
              mainTitleWord1: '',
              mainTitleWord2: '',
              itemsArray1: [],
            }
          this.tick = this.tick.bind(this);
          this.onChangeTitle = this.onChangeTitle.bind(this);
          this.onChangeBody = this.onChangeBody.bind(this);
        }
        componentDidMount() {
          let timer = setInterval(this.tick, 1000);
          this.setState({timer});
        }
        tick() {
            this.onChangeTitle();

            this.setState({ 
              seconds: this.state.seconds + 1 
            });

            this.onChangeBody();             
          }
          onChangeTitle(){
            if(this.state.seconds == 0) {
              this.state = {
                mainTitleWord1: 'EXPLORE OUR ',
                mainTitleWord2: 'capabilities',
              }
            }
          }

          onChangeBody(index){
            if(this.state.seconds == 1) {
              this.state = {
                itemsArray1: array1,
              }
            }
          }
          
        render() {

          return (
            <div id="foundationCap">
              <video id="videoCap" src="img/disaster.mp4" autoPlay muted>
              </video>
              <div id="text_block2">
                <div className="intro medium36Font"> 
                  {this.state.mainTitleWord1} 
                  <font className = "blue_font">{this.state.mainTitleWord2}</font>
                </div>
                <div id="firstContainer">
                  <div className = "containerItem">Website Development</div>
                  <div className = "containerItem">Mobile App Development</div>
                  <div className = "containerItem"> Presentation Design</div>
                </div>
                <div className="ContLines">
                  <div className="itemLine"></div>
                  <div className="itemLine"></div>
                  <div className="itemLine"></div>
                </div>
                <div className="ContLines">
                  <div className="itemLineGrey"></div>
                  <div className="itemLineGrey"></div>
                  <div className="itemLineGrey"></div>
                </div>
                <div id="secondContainer">
                  <div className = "containerItem">Logo Design</div>
                  <div className = "containerItem">Photography</div>
                  <div className = "containerItem">Media Buying</div>
                </div>
                <div className="ContLines2">
                  <div className="itemLine itemLine2"></div>
                  <div className="itemLine itemLine2"></div>
                  <div className="itemLine itemLine2"></div>
                </div>
                <div className="ContLines2">
                  <div className="itemLineGrey itemLineGrey2"></div>
                  <div className="itemLineGrey itemLineGrey2"></div>
                  <div className="itemLineGrey itemLineGrey2"></div>
                </div>
                <div className="intro medium26Font"> 
                  ADDITIONAL CAPABILITIES
                </div>
                <div id = "contLi">
                  <ul id ="containerForLi">
                    <li className="liItem"> Research </li>
                    <li className="liItem"> UX/UI </li>
                    <li className="liItem"> SEO </li>
                    <li className="liItem"> SEM </li>
                    <li className="liItem"> Call Tracking </li>
                    <li className="liItem"> Analytics </li>
                    <li className="liItem"> Metrics </li>
                    <li className="liItem"> Marketing </li>
                    <li className="liItem"> Automation </li>
                    <li className="liItem"></li>
                </ul>
              </div>
              </div>
            </div>
          );
        }
      };
export default Capabalities;
