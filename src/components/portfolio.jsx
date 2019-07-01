import React from 'react';
import getUserData from '../githubapi';
// import Loading from './loading';

export default class Portfolio extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: null
        }

        this.userData = this.userData.bind(this);
    }

    async userData () {
        console.log(await getUserData());
        this.setState({
            data: await getUserData()
        })
    }

    componentDidMount () {
        this.userData();
    }

    render () {
        
        return (
            <div id='work'>
             {/* {!this.state.data && <Loading />} */}
        <h2>My Portfolio</h2>
        {/* <img src="https://avatars0.githubusercontent.com/u/22435185?v=4" alt="My avatar"/> */}
        <p className='bio'>{!this.state.data ? 'LOADING' : JSON.stringify(this.state.data, null, 4)}</p>
        </div>
        )
    }
}