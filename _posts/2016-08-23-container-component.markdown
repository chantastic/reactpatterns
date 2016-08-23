---
layout: post
title:  "Container component"
date:   2016-08-23 08:52:00
---

"A container does data fetching and then renders its corresponding sub-component. That’s it."&mdash;[Jason Bonta](https://twitter.com/jasonbonta)

So, given a reusable `CommentList` component.

{% highlight ts %}
const CommentList = ({ comments }) =>
  <ul>
    {comments.map(comment =>
      <li>{comment.body}-{comment.author}</li>
    )}
  </ul>
{% endhighlight %}

We can create a new component responsible for fetching data and re-rendering the unopinionated `CommentList` component.

{% highlight ts %}
class CommentListContainer extends React.Component {
  constructor() {
    super()
    this.state = { comments: [] }
  }

  componentDidMount() {
    $.ajax({
      url: "/my-comments.json",
      dataType: 'json',
      success: comments =>
        this.setState({comments: comments});
    })
  }

  render() {
    return <CommentList comments={this.state.comments} />
  }
}
{% endhighlight %}

We can write different containers for different application contexts.