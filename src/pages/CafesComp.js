import React, {Component} from 'react';
import { Link, BrowserRouter as Router,  Route, Redirect } from 'react-router-dom'
import '../CafesComp.css';

class ProgCircle extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            /*0=f 1=a 2=f 3=e 4=s*/
            Finishtext: ["","","","",""],
            Checkmarktext:["☐☐","☐☐","☐☐","☐☐","☐☐"],
            ColorHolder: ["rgb(41, 180, 97)","rgb(196, 0, 71)","rgb(101, 0, 232)","rgb(255, 220, 46)","rgb(29, 206, 209)",],
            CAFESvalue: [0,0,0,0,0],
            seg: [null,null,null,null,null,null,null],
            segCounter: 0
        }
        
    }

    fillIn(){
        this.state.segCounter = 0;
        for(var j = 0; i< 5; j++){
            this.state.Finishtext[j] = "";
        }

        this.state.CAFESvalue[0] = this.props.c;
        this.state.CAFESvalue[1] = this.props.a;
        this.state.CAFESvalue[2] = this.props.f;
        this.state.CAFESvalue[3] = this.props.e;
        this.state.CAFESvalue[4] = this.props.s;

        for(var i =0; i < 5; i++){
            if(this.state.CAFESvalue[i] == 0){
                this.state.ColorHolder[i]=null;
                this.state.Finishtext[i] = "No progress yet";
            }
            if(this.state.CAFESvalue[i] > 0){
                this.state.seg[this.state.segCounter] = this.state.ColorHolder[i];
                this.state.segCounter++;
                this.state.Finishtext[i] = "Weekly progress gained!";
                this.state.Checkmarktext[i] = "☑☐";

                if(this.state.CAFESvalue[i] >= 2){
                    this.state.seg[this.state.segCounter] = this.state.ColorHolder[i];
                    this.state.segCounter++;
                    this.state.Finishtext[i] = "Weekly goal met!";
                    this.state.Checkmarktext[i] = "☑☑";
                }
            }
        }

        if(this.state.segCounter >= 7){
            for(var i = 0; i < 5; i++){
                this.state.Finishtext[i] = "Completed all weekly goals!"
            }
        }
    }




    render(){
        this.fillIn();

        return(
        <div class="CafesComp">

        <table id="cafesTable">
        <tr>
            <td>
                <div id="cafesCircle">
                <ul class="sliceMaster">
                    <li>
                        <div class="slice" style={{background: this.state.seg[0]}}></div>
                    </li>
                    <li>
                        <div class="slice" style={{background: this.state.seg[1]}}></div>
                    </li>
                    <li>
                        <div class="slice" style={{background: this.state.seg[2]}}></div>
                    </li>
                    <li>
                        <div class="slice" style={{background: this.state.seg[3]}}></div>
                    </li>
                    <li>
                        <div class="slice" style={{background: this.state.seg[4]}}></div>
                    </li>
                    <li>
                        <div class="slice" style={{background: this.state.seg[5]}}></div>
                    </li>
                    <li>
                        <div class="slice" style={{background: this.state.seg[6]}}></div>
                    </li>
                    </ul>
                </div>
            </td>
            <td>
                <div id="cafesInfo">
                    <h2>CAFES Progress:</h2>
                    <p><b style={{color: "rgb(41, 180, 97)"}}>Cultrual:</b>
                     <u style={{color: "lime"}}>{this.state.Checkmarktext[0]}</u> {this.state.Finishtext[0]}</p>

                    <p><b style={{color: "rgb(196, 0, 71)"}}>Athletics:</b>
                     <u style={{color: "lime"}}>{this.state.Checkmarktext[1]}</u> {this.state.Finishtext[1]}</p>

                    <p><b style={{color: "rgb(101, 0, 232)"}}>Family/Friends:</b>
                     <u style={{color: "lime"}}>{this.state.Checkmarktext[2]}</u> {this.state.Finishtext[2]}</p>

                    <p><b style={{color: "rgb(255, 220, 46)"}}>Education:</b>
                     <u style={{color: "lime"}}>{this.state.Checkmarktext[3]}</u> {this.state.Finishtext[3]}</p>

                    <p><b style={{color: "rgb(29, 206, 209)"}}>Social:</b>
                     <u style={{color: "lime"}}>{this.state.Checkmarktext[4]}</u> {this.state.Finishtext[4]}</p>
                </div>
            </td>
        </tr>
        </table>

        </div>
        )
    }
}
export default ProgCircle