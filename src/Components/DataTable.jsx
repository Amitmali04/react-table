import React, { useState } from 'react';
import { Table, Button, Input } from 'antd';
import { Col, Row } from 'antd';
// import { AudioOutlined } from '@ant-design/icons';
const { Search } = Input;


const columns = [
  {
    title: 'Name',
    dataIndex: 'name',
  },
  {
    title: 'Age',
    dataIndex: 'age',
  },
  {
    title: 'Address',
    dataIndex: 'address',
  },
];
const data = [];
for (let i = 0; i < 46; i++) {
  data.push({
    key: i,
    name: `Edward King ${i}`,
    age: 32,
    address: `London, Park Lane no. ${i}`,
  });
}
 



const DataTable = () => {
 
    const [selectedRowKeys, setSelectedRowKeys] = useState([]);
    const [loading, setLoading] = useState(false);
    const start = () => {
      setLoading(true);
      // ajax request after empty completing
      setTimeout(() => {
        setSelectedRowKeys([]);
        setLoading(false);
      }, 1000);
    };
    const onSelectChange = (newSelectedRowKeys) => {
      console.log('selectedRowKeys changed: ', newSelectedRowKeys);
      setSelectedRowKeys(newSelectedRowKeys);
    };
    const rowSelection = {
      selectedRowKeys,
      onChange: onSelectChange,
    };
    const hasSelected = selectedRowKeys.length > 0;

    const onSearch = (value) => console.log(value);

  return (
   
    <div>
    <Row
      style={{
        marginBottom: 16,
        marginTop: 16,
      }}
    >

<Col span={12}>
  <Button type="primary" onClick={start} disabled={!hasSelected} loading={loading}>
        Reload
      </Button>
      <span
        style={{
          marginLeft: 8,
        }}
      >

        {hasSelected ? `Selected ${selectedRowKeys.length} items` : ''}
      </span>
      </Col>
      <Col span={12}> 

      <Search placeholder="search" onSearch={onSearch} enterButton style={{
        width: 304,
        marginRight:0,
      }} />

      </Col>
      
    </Row>
    <Table rowSelection={rowSelection} columns={columns} dataSource={data} />
  </div>
  );
}

export default DataTable
