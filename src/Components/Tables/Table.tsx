import {Table} from 'antd'
import {dataSourceFruitsType, dataSourceBerriesType } from './../../dataSource'
import { Typography, Row, Col, Divider } from 'antd'
import './table.css'

const _Table: React.FC<{title: string,
                        dataSource: dataSourceFruitsType | dataSourceBerriesType, 
                        columns: any}> = ({title, dataSource, columns}) => {
  return <div>
    <Divider>
      <Typography.Title level={3} style={{textAlign: 'center', marginBottom: '35px', marginTop: '30px'}}> {title} </Typography.Title>
    </Divider>

    <Row justify='center'>
      <Col span={20}>
        <Table className="table" bordered dataSource={dataSource} columns={columns} pagination={false}/>
      </Col>
    </Row>
  </div>
}

export default _Table