import React from 'react';
import Tweet from './Tweet';

// this.props.newTweets is sent down from app, fetched array

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
    return (nextProps.newTweets !== this.state.tweets );
  }

  componentWillReceiveProps(nextProps){
    if (nextProps.newTweets.length) {
      this.state.tweets.push(nextProps.newTweets[0])
      console.log(this.state)
    }
  }

  render() {
    const tweets = this.state.tweets.map((tweet, index) => <Tweet text={tweet.text} key={index} />);

    return (
      <div>{tweets}</div>
    );
  }
}

export default TweetWall;
