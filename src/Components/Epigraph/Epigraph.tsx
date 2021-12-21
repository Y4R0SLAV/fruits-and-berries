import { Typography, Row, Col } from "antd"
import './epigraph.css'

export const Epigraph = () => {
  return <div className='epigraph'>
    <Typography.Paragraph >
      <Row > 
        <Col span={24}>
          <span> Cушеный виноград - изюм. </span>
        </Col>
      </Row>
      <Row> 
        <Col span={24}>
          <span> Cушеный абрикос - курага. </span>
        </Col>
      </Row>
      <Row> 
        <Col span={24}>
          <span> Cушеное яблоко - ? </span>
        </Col>
      </Row>
      <Row justify="center"> 
        <Col span={7}>
          <span> груша? </span>
        </Col>
      </Row>
      <Row justify="end"> 
        <Col span={8}>
          <span> бананы? </span>
        </Col>
      </Row>
    </Typography.Paragraph>
  </div> 
}