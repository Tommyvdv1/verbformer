import React, { Component, Suspense } from 'react';
const Header = React.lazy(() => import('../Components/Header'));
const Body = React.lazy(() => import('../Components/Body'));

class App extends Component {
    


    render() {
      return(
        <div>
        	<Suspense fallback={<div>Loading...</div>}>
            	<Header/>
            	<Body/>
            </Suspense>
        </div>
        )
    }
}


export default (App);

//Users/bert/
//cd Documents/'Zweedse les'/'Rivstart A1+A2'/OregelbundnaVerbformer/react/verbformer
