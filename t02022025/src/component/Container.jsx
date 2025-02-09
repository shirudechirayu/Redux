import buyCake from '../redux/firstAction';
import { connect } from 'react-redux';

function Container(props)
{
    return (
        <div>
            <div>Num of cakes - {props.numOfCakes}</div>
            <button onClick={props.buyCake}>BUY CAKE</button>
        </div>
    );
}

const mapStateToProps = (state) => {
    return {
        numOfCakes : state.numOfCakes
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        buyCake : () => dispatch(buyCake())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Container);