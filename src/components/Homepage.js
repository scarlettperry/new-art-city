import React, { Component } from 'react'
import ExhibitionGrid from './ExhibitionGrid'
import Filter from './Filter'
import { connect } from 'react-redux'

class Homepage extends Component {

  constructor(){
    super()
    this.state = {
      Painting: "",
      Calligraphy: "",
      Illustration: "",
      Drawing: "",
      Graphics: "",
      Photography: "",
      Architecture: "",
      Sculpture: "",
      Crafts: "",
      Fashion: "",
      Furniture: "",
      Installation: "",
      Product: "",
      Cermaics: "",
      Film: "",
      Digital: "",
      "Video Installation": "",
      "Performance Art": ""
    }
  }

  handleChange = (event) => {
    this.setState({
    [event.target.innerText]: event.target.innerText
    })
  }

  // filterEvents = () => {
  //   if (this.props.events) {
  //     if (
  //       this.state.Painting === "" && this.state.Calligraphy === "" && this.state.Illustration === "" && this.state.Drawing === "" && this.state.Graphics === "" && this.state.Photography === "" && this.state.Architecture === ""
  //       && this.state.Sculpture === "" && this.state.Crafts === ""  && this.state.Fashion === ""  && this.state.Furniture === ""
  //       && this.state.Installation === "" && this.state.Product === "" && this.state.Cermaics === "" && this.state.Film === ""
  //       && this.state.Digital === "" && this.state["Video Installation"] === "" && this.state["Performance Art"] === ""
  //     ) {
  //       console.log("I wasnt chosen")
  //       console.log(this.props.events)
  //     }
  //     else if (
  //       this.state.Painting !== "" || this.state.Calligraphy !== "" || this.state.Illustration !== "" || this.state.Drawing !== "" || this.state.Graphics !== "" || this.state.Photography !== "" || this.state.Architecture !== ""
  //       || this.state.Sculpture !== "" || this.state.Crafts !== ""  || this.state.Fashion !== ""  || this.state.Furniture !== ""
  //       || this.state.Installation !== "" || this.state.Product !== "" || this.state.Cermaics !== "" || this.state.Film !== ""
  //       || this.state.Digital !== "" || this.state["Video Installation"] !== "" || this.state["Performance Art"] !== ""
  //     ) {
  //       console.log("I was chosen")
  //       return this.props.events.filter(obj => obj["Media"]["_text"].includes(this.state.Painting)
  //       || obj["Media"]["_text"].includes(this.state.Calligraphy) || obj["Media"]["_text"].includes(this.state.Illustration) ||
  //       obj["Media"]["_text"].includes(this.state.Drawing) || obj["Media"]["_text"].includes(this.state.Graphics) || obj["Media"]["_text"].includes(this.state.Photography) || obj["Media"]["_text"].includes(this.state.Architecture)
  //       || obj["Media"]["_text"].includes(this.state.Sculpture) || obj["Media"]["_text"].includes(this.state.Crafts) || obj["Media"]["_text"].includes(this.state.Fashion) || obj["Media"]["_text"].includes(this.state.Furniture) ||
  //       obj["Media"]["_text"].includes(this.state.Installation) || obj["Media"]["_text"].includes(this.state.Product) || obj["Media"]["_text"].includes(this.state.Cermaics) || obj["Media"]["_text"].includes(this.state.Film) ||
  //       obj["Media"]["_text"].includes(this.state.Digital) || obj["Media"]["_text"].includes(this.state["Video Installation"]) ||
  //       obj["Media"]["_text"].includes(this.state["Performance Art"]))
  //     }
  //   }
  // }



  render(){
    console.log(this.props)
    console.log(this.state);
    return (
      <div>
        <Filter
          handleChange={this.handleChange}
        />
        <ExhibitionGrid
          events={this.props.events}
        />
      </div>
    )
  }
}

//redux
const mapStateToProps = (state) => {
  return {
    events: state.events
  }
}

export default connect(mapStateToProps)(Homepage)
