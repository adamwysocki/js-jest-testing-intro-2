/** import function for proper casing names */
import React from 'react';
import Head from 'next/head';
import { properCase } from '../util';


/**
 * @class Index
 * @description renders an index page
 */
class Index extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            name: "",
            espanol: false
        }
    }

    /**
     * @method onChange
     * @description - handle change event from form element
     * @param {object} event - HTML InputEvent object
     */
    onChange = (event) => {
        const name = event.currentTarget.id;
        const value = event.currentTarget.value;
        const type = event.currentTarget.type;

        if(type === "text") {
            this.setState({[name] : value});
        } else if(type === "checkbox") {
            this.setState({ [name]: !this.state[name]});
        }
    }

    /**
     * @method getGreeting
     * @description - return greeting based on language toggle
     */
    getGreeting = () => {
        if(this.state.espanol) {
            return "Hola";
        } else {
            return "Hello";
        }
    }

    /**
     * @method getPlaceholder
     * @description - return text input placeholder text based on language toggle 
     */    
    getPlaceholder = () => {
        if(this.state.espanol) {
            return "Ingrese su nombre ...";
        } else {
            return "Enter name ...";
        }
    }

    /**
     * @method render
     */
    render() {
        return(
            <div className="container" style={{marginTop: "150px"}}>
                <Head>
                    <title>React Testing w/ Jest Part 2</title>
                    <link rel="stylesheet" href="https://bootswatch.com/4/cerulean/bootstrap.css" />
                </Head>
                <h1>{ this.state.name ? `${this.getGreeting()} ${properCase(this.state.name)}!` : `${this.getGreeting()}!` }</h1>
                <form onSubmit={(event) => this.onSubmit(event)}>
                    <div className="form-group">
                        <input type="text" value={this.state.name} onChange={(event) => this.onChange(event)} className="form-control" id="name" aria-describedby="nameHelp" placeholder={this.getPlaceholder()} />
                    </div>
                    <div className="form-check">
                        <input type="checkbox" className="form-check-input" id="espanol" onChange={(event) => this.onChange(event)} checked={this.state.espanol}/>
                        <label className="form-check-label" htmlFor="showNameCheck">español</label>
                    </div>
                </form>        
            </div>
        );
    };
};

export default Index;