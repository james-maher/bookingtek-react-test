import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { LoadingIndicator } from '../shared/LoadingIndicator/LoadingIndicator';
import { Error } from '../shared/Error/Error';

class ZipCodeBrowser extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        {/* To Complete: if this.props.fetched is truthy then the zipCodes data is ready to display */}
        {/* {this.props.fetched} */}
        {'<<Insert list of data...>>'}

        {<LoadingIndicator busy={this.props.fetching} />}
        {this.props.failed && (
          <Error message="Failed to fetch list of zip codes" />
        )}
      </div>
    );
  }
}

ZipCodeBrowser.propTypes = {
  fetched: PropTypes.bool.isRequired,
  fetching: PropTypes.bool.isRequired,
  failed: PropTypes.bool,
  zipCodes: PropTypes.array.isRequired
};

const mapStateToProps = state => {
  const { fetching, fetched, failed, zipCodes } = state.zipCodes;

  return { fetching, fetched, failed, zipCodes };
};

export default connect(
  mapStateToProps
)(ZipCodeBrowser);
