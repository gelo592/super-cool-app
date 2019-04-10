import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { loadData as loadDataAction } from 'store/example/example-actions';

import { someSelector } from 'store/example/example-selectors';

import Box from 'components/box';
import { ViewTitle }  from 'components/text';

import { LayoutWithHeader } from 'components/layout';

class OneContainer extends Component {
  static mapStateToProps = (state, ownProps) => ({
    someDate: someSelector(state),
  });

  static mapDispatchToProps = dispatch => ({
    loadData: () => dispatch(loadDataAction()),
  });

  constructor(props) {
    super(props);

    this.state = {
    };
  }

  componentDidMount () {
    this.props.loadData();
  }

  render () {
    return (
      <LayoutWithHeader pageTitle="One">
        <Box flex flexDirection="column" justifyContent="space-between" marginBottom={5}>
          <Box>
            <ViewTitle fontSize={6} fontWeight="medium">Example One Container</ViewTitle>
            <OneSpecificComponent />
          </Box>
        </Box>
      </LayoutWithHeader>);
  }
}

OneContainer.propTypes = {

};

export default connect(
  OneContainer.mapStateToProps,
  OneContainer.mapDispatchToProps,
)(OneContainer);
