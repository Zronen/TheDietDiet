import React, {Component} from 'react';
import { Link, BrowserRouter as Router,  Route } from 'react-router-dom'
import '../CafesPage.css';
import '../App.css';
import Nut from '../duncandoughnuts2.png';


//between constructor and render is all just stuff for making the menu work
class CafesPage extends Component{
    constructor(){
        super();

        this.state = {
            showMenu: false,
        }

        this.showMenu= this.showMenu.bind(this);
        this.closeMenu = this.closeMenu.bind(this);
    }

    showMenu(event){
        event.preventDefault();

        this.setState({ showMenu: true }, () => {
            document.addEventListener('click', this.closeMenu);
        });
    }

    closeMenu() {
        this.setState({ showMenu: false }, () => {
          document.removeEventListener('click', this.closeMenu);
        });
      }

        

      


    render(){
        return(

          <div className="CafesPage">
            <div className="CafesPage__Aside"> </div>
            <div className="CafesPage__Form">
                <div className="DropDown">
                    <button onClick ={this.showMenu}>
                        <img src={Nut} alt=" " height = '100px' width = '100px'/>
                        </button>

                    {
                        this.state.showMenu
                    ?(
                        <div className="btn-group">
                            <Link exact to="/upload" className="FormField__Link"  >
                            <button > 
                                <img src={Nut} alt=" " />
                            </button> 

                            </Link>

                            <button> <img src={Nut} alt=" "/></button>
                            <button> <img src={Nut} alt=" "/></button>
                        </div>
                    ):(
                    null
                    )
                    }
                </div>
                <h2>This is Cafes page</h2>
                </div>
            </div>

           
         
    );
    }
    
}

export default CafesPage;