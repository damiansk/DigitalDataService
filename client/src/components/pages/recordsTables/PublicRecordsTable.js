import React from 'react';
import PropTypes from 'prop-types';
import dateFormat from 'dateformat';

import { Table, TableColumn } from '../../pages/table';
import PreviewIconLink from '../iconLinks/PreviewIconLink';
import { PUBLIC_RECORD_PREVIEW } from '../../../constants/routes';


const PublicRecordsTable = ({records}) => (
  <Table data={records}>
    <TableColumn fieldSelector="title"
                 className="col-md-2">Title</TableColumn>
    <TableColumn fieldSelector="description"
                 className="col-md-7">Description</TableColumn>
    <TableColumn fieldFormatter={date => dateFormat(date, 'mmmm dS yyyy')}
                 fieldSelector="date"
                 className="col-md-2">Date</TableColumn>
    <TableColumn fieldFormatter={id => (
                    <div className="text-center">
                      <PreviewIconLink recordId={id} to={PUBLIC_RECORD_PREVIEW}/>
                    </div>)}
                 fieldSelector="_id"
                 className="col-md-1">Preview</TableColumn>
  </Table>
);

PublicRecordsTable.propTypes = {
  records: PropTypes.array
};

export default PublicRecordsTable;