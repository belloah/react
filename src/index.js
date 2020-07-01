import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';

import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import 'bootstrap/dist/css/bootstrap.min.css';

import './index.css';

import Mark from 'markdown-react-js';

// A page header component with inline styling
class PageHeader extends React.Component {
  render() {
    const mystyle = {
      "borderBottom": "1px solid",
      "paddingBottom": "8px",
      "marginBottom": "8px",
      "marginTop": "24px",
    };
    return <h1 style={mystyle}>React Playground</h1>;
  }
}

// Load Markdown file
class LoadMd extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: "",
    }
  }
  load() {
    fetch(this.props.url)
      .then(response => response.text())
      .then(data => {
        this.setState({ text: data })
      });
  }
  render() {
    this.load();
    return <Mark text={this.state.text} />
  }
}

function Readme(props) {
  return (
    <Card body id="readme">
      <LoadMd url={props.url} />
    </Card>
  )
}

ReactDOM.render(
  <Container>
    <PageHeader />
    <Readme url="react/README.md" />
  </Container>
  , document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
