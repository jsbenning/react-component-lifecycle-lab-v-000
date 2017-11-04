import React from 'react';
import Tweet from './Tweet';

// commented out my original version to meet requirements

class TweetWall extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      tweets: []
    };
  }

  // TODO: componentWillMount()
  // TODO: shouldComponentUpdate()
  // TODO: componentWillReceiveProps()

  componentWillMount(props) {
    this.setState({
      tweets: this.props.newTweets
    })
  }

  shouldComponentUpdate(nextProps, nextState) {
    //return (nextProps.newTweets !== this.state.tweets );
    return (nextProps.newTweets.length);
  }

  componentWillReceiveProps(nextProps){
    //if (nextProps.newTweets.length) {
    for (let i=0; i<nextProps.newTweets.length; i++){
      let tweets = this.state.tweets.slice();
      tweets.unshift(nextProps.newTweets[i]);
      this.setState({ tweets: tweets })

    }

    //this.setState({ tweets: tweets})

      //this.state.tweets.push(nextProps.newTweets[i])
      //this.state.tweets.push(nextProps.newTweets[0])
      //console.log(this.state)
    //}
  }

  render() {
    const tweets = this.state.tweets.map((tweet, index) => <Tweet text={tweet.text} key={index} />);

    return (
      <div>{tweets}</div>
    );
  }
}

export default TweetWall;
