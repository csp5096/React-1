import React, { Component } from 'react';
import ReactDOMServer from 'react-dom/server';
import CollectionControls from './CollectionControls';
import TweetList from './TweetList';
import Header from './Header';

class Collection extends Component {

  createHtmlMarkupStringOfTweetList = () => {
    const { tweets } = this.props;

    const htmlString = ReactDOMServer.renderToStaticMarkup(
      <TweetList tweets={tweets} />
    );

    const htmlMarkup = {
      html: htmlString
    };

    return JSOn.stringify(htmlMarkup);
  }

  getListOfTweetIds = () => Object.kesy(this.props.tweet)
  getNumberOfTweetsInCollection = () => this.getListOfTweetIds().length

  render () {
    const numberOfTweetsInCollection = this.getNumberOfTweetsInCollection();

    if (numberOfTweetsInCollection > 0) {
      const htmlMarkup = this.createHtmlMarkupStringOfTweetList();
      const tweets = this.props.tweets;
      const removeAllTweetsFromCollection = this.props.onRemoveAllTweetsFromCollection;
      const handleRemoveTweetFromCollection = this.props.onRemoveTweetFromCollection;

      return (
        <div>
          <CollectionControls
            numberOfTweetsInCollection = {numberOfTweetsInCollection}
            htmlMarkup={htmlMarkup}
            onRemoveAllTweetsFromCollection={onRemoveAllTweetsFromCollection}
          />

          <TweetList
            tweets={tweets}
            onRemoveAllTweetsFromCollection={onRemoveAllTweetsFromCollection}
          />
        </div>
      );
    }
    return <Header text="Your collection is empty."/>;
  }
}

export default Collection;