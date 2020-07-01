import React from 'react';
// import ReactDOM from 'react-dom';

class Dada extends React.Component {
    render(){
        return <p>DADA!</p>
    }
}
class Title extends React.Component {
    render(){
        return <div><h1>Title</h1><Dada /></div>
    }
}
export default Title;