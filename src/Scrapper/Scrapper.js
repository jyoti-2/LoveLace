import React, { useState, useEffect } from 'react' 

class Hackathons extends React.Component { 
    constructor(props) {
        super(props);
        this.state = {
          hacks: [],
        };
        this.handleChange = this.handleChange.bind(this);
      }
      componentDidMount() {
            // get all entities - GET
            fetch("http://www.hackalist.org/api/1.0/2021/06.json").then(response => response.json())
            .then(response => {
              this.setState({hacks: response['June']})
            })
            .catch(err => { console.log(err); });

            fetch("http://www.hackalist.org/api/1.0/2021/05.json").then(response => response.json())
            .then(response => {
              this.setState({
                hacks: this.state.hacks.concat(response['May'])
              })
            })
            .catch(err => { console.log(err); });

            fetch("http://www.hackalist.org/api/1.0/2021/04.json").then(response => response.json())
            .then(response => {
              this.setState({
                hacks: this.state.hacks.concat(response['April'])
              })
            })
            .catch(err => { console.log(err); });
          }
      handleChange(changeObject) {
        this.setState(changeObject)
      }
      render() {
        return (
            <div className="container">
              <div className="row justify-content-center">
                <div className="col-md-8">
                  <h1 className="display-4 text-center">Hackathons</h1>
                  {
                      this.state.hacks.map(hack =>
                            <h3>{hack.title}</h3>
                        )
                  }
                </div>
              </div>
            </div>
        );
      }
} 

export default Hackathons