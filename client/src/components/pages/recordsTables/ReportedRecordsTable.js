import React from 'react';
import PropTypes from 'prop-types';

import { Table, TableColumn } from '../../pages/table';
import ReportedRecordsActions from '../iconLinks/iconLinksGroup/ReportedRecordsActions';

const ReportedRecordsTable = ({records}) => (
  <Table data={records}>
    <TableColumn fieldFormatter={({firstName, lastName}) => `${firstName} ${lastName}`}
                 fieldSelector="declarant"
                 className="col-md-2">Declarant</TableColumn>
    <TableColumn fieldSelector="title"
                 className="col-md-4">Title</TableColumn>
    <TableColumn fieldSelector="resourceType"
                 className="col-md-2">Type</TableColumn>
    <TableColumn fieldFormatter={keywords => keywords.join(' ')}
                 fieldSelector="keywords"
                 className="col-md-2">Keywords</TableColumn>
    <TableColumn fieldFormatter={id => <ReportedRecordsActions id={id}/>}
                 fieldSelector="_id"
                 className="col-md-2">Actions</TableColumn>
  </Table>
);

ReportedRecordsTable.propTypes = {
  records: PropTypes.array
};

export default ReportedRecordsTable;