import React, { Component } from 'react';

//Note: this type of solution is usually implemented to be reused.
//Then, the components use as standard de facto the prop "data" to define the data that will be rendered
//and shared with the component. In this example, we are reusing the <Awesomelist> 
//that expects the list of strings via "list" prop.
function withUsersFetch(WrappedComponent, requestUrl) {

  class WithFetch extends Component {
    constructor(props) {
      super(props);
      this.state = { isFetching: true, data: [] };
    }

    componentDidMount() {
      if (requestUrl) {
        this.fetchData(requestUrl);
      }
    }

    fetchData = async (requestUrl) => {
      try {
        const response = await fetch(requestUrl);
        const data = await response.json();
        //example handing error: https://randomuser.me/documentation#errors
        if (data.error) {
          throw new Error('Fetch request error: ' + data.error);
        }

        const results = data.results;
        //we create a new array with only user emails
        const users = results.map(item => {
          return item.email;
        });
        this.setState({ data: users, error: null, isFetching: false });

      } catch (error) {
        //Here we can handle the error...
        this.setState({
          error
        });
      }
    }

    render() {
      //This is not necessary. We could pass the state as props to the component with something like
      //{isLoading: boolean, isError: boolean, data:[]}. However, our Awesome list does not support those
      //props and, therefore, we use a different implementation.
      if (this.state.error) {
        return (
          <p style={{ color: 'red', fontSize: '0.8em', fontStyle: 'italic' }}>
            this.state.error;
          </p>
        )
      }

      if (this.state.isFetching) {
        return (
          <p style={{ color: 'green' }}>
            Loading...
          </p>
        )
      }

      // IMPORTANT: our AwesomeList is stateful component. If our HOC tries to pass the list via props
      //in the first render cycle (fetch not resolved yet, this is, without isFetching and error in the state).
      //the WarappedComponent (AwesomeList) will render an empty list because we will have 2 sources of truth
      //the this.state.data (this component) and this.state.list (the awesomelist component).
      return (
        <WrappedComponent list={this.state.data} {...this.props} />
      )
    }
  }

  return WithFetch;
}

//This HOC is in charge of fetching users
export default withUsersFetch;