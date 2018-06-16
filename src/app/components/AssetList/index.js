import React, {Component} from 'react'
import {css} from 'aphrodite'
import {connect} from 'react-redux'
import {styles} from './styles'
import {receiveTokenData} from '../../actions/tokens'
import {getTokens} from '../../api'


class assetList extends Component {
  componentDidMount() {
    if (Object.keys(this.props.tokens).length === 0) {
      getTokens().then(x => x.json())
        .then(this.props.receiveTokenData)
    }
  }
  render() {
    return (
      <div className={css(styles.root)}>
        {JSON.stringify(this.props.tokens)}
      </div>
    )
  }
}

const mapStateToProps = ({tokens}) => ({
  tokens
})
const mapDispatchToProps = dispatch => ({
  receiveTokenData: data => dispatch(receiveTokenData(data))
})

export const AssetList = connect(
  mapStateToProps,
  mapDispatchToProps
)(assetList)
