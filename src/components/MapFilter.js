import React from 'react';
import { connect } from 'react-redux';
import { Button, Icon } from 'semantic-ui-react';

import { showFilterModal } from '../actions/appActions';
import FilterList from './FilterList';

const filterListStyle = {
    marginTop: 10
};

const MapFilter = ({showFilterModal}) => {

    return (
        <div>
            <Button type="button" icon onClick={() => showFilterModal()}><Icon name='filter' />New Filter</Button>    
            <div style={filterListStyle}>
                <FilterList />
            </div>
        </div>
    );
}

export default connect(null, {showFilterModal})(MapFilter);