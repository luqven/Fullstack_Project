import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


class AutoComplete extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      searchStr: "",
      matchedSearch: [],
      matchedIds: "",
      titleComponents: null,
    }
    this.handleKey = this.handleKey.bind(this);
    this.handleInput = this.handleInput.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  };

  componentDidMount() {
    this.props.getSearchResults();
  }

  // custom onkeypress handler to account for backspacing
  handleKey(e){
      // check if backspace pressed
    if (e.keyCode === 8 ) {
      this.setState({ 
        searchStr: this.state.searchStr.slice(0, this.state.searchStr.length - 1),
      })
      // otherwise register the keypress
    } else if(e.key.length === 1){  
      this.setState({ searchStr: this.state.searchStr + e.key})
    }
    // if searchStr now empty, clear state and don't search again
    if (this.state.searchStr.length <= 1) {
      this.setState({ titleComponents: null })
      return;
    }
    this.handleInput()
  }
  // search hash of {title: video_id} for matching substring
  handleInput(){
    let currentInput = this.state.searchStr;
    // return null if searchStr is empty, 
    // accounts for backspacing and first render
    if(currentInput === "" || currentInput.length < 1) {return null};
    let matchedSearch = [];
    // get all of the titles as an array of stirngs
    let allTitles = Object.keys(this.props.search);
    for (let i = 0; i < allTitles.length; i++) {
      const curTitle = allTitles[i];
      if (curTitle.includes(currentInput)) { matchedSearch.push(curTitle)};
    }

    let titles = [];
    let indexes = "";
    for (let i = 0; i < this.state.matchedSearch.length; i++) {
      const curTitle = this.state.matchedSearch[i];
      const curIndex = this.props.search[curTitle]["id"];
      indexes = indexes.concat(`_id_${curIndex}`);
      titles.push(
        <li onClick={this.handleClick} key={i}> {curTitle} </li>
        )
      };
    // store the array of lis instide a ul element
    let titlesComponents;
    // if no matchdes, do not render ul
    if (titles.length < 1) {
      titlesComponents = null
      } else {
        titlesComponents = (<ul>{titles}</ul>)
      }
    // store the created ul component in state
    this.setState({
      matchedSearch: matchedSearch,
      matchedIds: indexes,
      titleComponents: titlesComponents,
    })
  };

  // take the user to the video show page for that video id
  handleClick(e){
    let searchId = (this.props.search[e.currentTarget.innerText])
    searchId = searchId["id"];
    // reset the component to not render at next url
    this.setState({
        searchStr: "",
        matchedSearch: [],
        titleComponents: null,
      })
    this.props.history.push(`/videos/${searchId}`)
  }

  handleSubmit() {
    this.props.history.push(`/search/${this.state.matchedIds}`)
  };

  render() {
    return(
      <form onSubmit={this.handleSubmit} >
        <input onKeyDown={this.handleKey} type="text" placeholder="Search" value={this.state.searchStr} />
        {this.state.titleComponents}
        <p onClick={this.handleSubmit}><FontAwesomeIcon icon={["fas", "search"]} /></p>
      </form>
    )
  }

}

export default AutoComplete