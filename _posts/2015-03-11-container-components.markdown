---
layout: post
title:  "Container Components"
date:   2015-03-11 00:00:00
---
Container Components **SHOULD** be used to fetch for stateless components.

### Bad

{% highlight js %}
// CommentList.js

class CommentList extends React.Component {
  constructor() {
    this.state = { comments: [] }
  }

  componentDidMount() {
    $.ajax({
      url: "/my-comments.json",
      dataType: 'json',
      success: function(comments) {
        this.setState({comments: comments});
      }.bind(this)
    });
  }

  render() {
    return <ul> {this.state.comments.map(renderComment)} </ul>;
  }

  renderComment({body, author}) {
    return <li>{body}—{author}</li>;
  }
}
{% endhighlight %}

### Good

{% highlight js %}
// CommentListContainer.js

class CommentListContainer extends React.Component {
  constructor() {
    this.state = { comments: [] }
  }

  componentDidMount() {
    $.ajax({
      url: "/my-comments.json",
      dataType: 'json',
      success: function(comments) {
        this.setState({comments: comments});
      }.bind(this)
    });
  }

  render() {
    return <CommentList comments={this.state.comments} />;
  }
}


// CommentList.js

class CommentList extends React.Component {
  constructor(props) {
    super(props);
  }

  render() { 
    return <ul> {this.props.comments.map(renderComment)} </ul>;
  }

  renderComment({body, author}) {
    return <li>{body}—{author}</li>;
  }
}
{% endhighlight %}
