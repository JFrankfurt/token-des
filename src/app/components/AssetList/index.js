import React from 'react'
import {css} from 'aphrodite'
import {connect} from 'react-redux'
import {styles} from './styles'


const assetList = () =>
  <div className={css(styles.root)}>
    test
  </div>

const mapStateToProps = () => ({})
const mapDispatchToProps = () => ({})

export const AssetList = connect(
  mapStateToProps,
  mapDispatchToProps
)(assetList)
