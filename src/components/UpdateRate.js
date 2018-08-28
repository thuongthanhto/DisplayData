import React, { Component } from 'react';
import { config } from '../config/index';
import { Col, Row, Button, Modal } from 'antd';
import { Spin, Icon } from 'antd';
import { TimeStamp } from './styled';
import { getLogs } from '../socket/log';

const GET_ALL_DATA = `${config.apiEndPoint}/api/rates/getalldata/`;
const GET_TIMESTAMP = `${config.apiEndPoint}/api/rates/get-timestamp`;
const antIcon = <Icon type="loading" style={{ fontSize: 24 }} spin />;

export class UpdateRate extends Component {
  state = {
    timestamp01: '',
    timestamp02: '',
    isFetching: false,
    logs: [],
    visible: false,
  };

  componentDidMount() {
    this.getTimestamp();
    getLogs((error, data) => {
      var array = this.state.logs;
      array.push(data);
      this.setState({
        logs: array,
      });
    });
  }

  handleCancel = e => {
    this.setState({
      visible: false,
    });
    this.getTimestamp();
  };

  handleOk = e => {
    this.setState({
      visible: false,
    });
    this.getTimestamp();
  };

  toggle(id) {
    if (this.state.visible == false) {
      this.setState({ logs: [], visible: true });
      this.getAllData(id);
    }
  }

  getAllData(id) {
    const req = new Request(GET_ALL_DATA + id, {
      method: 'GET',
      cache: 'default',
    });

    fetch(req)
      .then(response => {
        return response.json();
      })
      .then(data => {
        if (data.status == 200) {
          console.log('Update Done');
          this.getTimestamp();
        }
      })
      .catch(err => {
        console.log(err);
      });
  }

  getTimestamp = () => {
    this.setState({ isFetching: true });
    const req = new Request(GET_TIMESTAMP, {
      method: 'GET',
      cache: 'default',
    });

    fetch(req)
      .then(response => {
        return response.json();
      })
      .then(data => {
        this.setState({ isFetching: false });
        if (data.status == 200) {
          data.data.forEach(element => {
            if (element.id === config.idButton1) {
              this.setState({
                timestamp01: element.updateDate,
              });
            }
            if (element.id === config.idButton2) {
              this.setState({
                timestamp02: element.updateDate,
              });
            }
          });

          this.state.timestamp01;
          this.state.timestamp02;
        }
      })
      .catch(err => {
        this.setState({ isFetching: false });
      });
  };

  render() {
    const { isFetching, timestamp01, timestamp02, logs } = this.state;
    return (
      <div>
        {isFetching && <Spin indicator={antIcon} />}
        {!isFetching && (
          <div>
            {/* <Row>
              <Col span={12}>
                <Button
                  type="primary"
                  block
                  onClick={e => this.toggle(config.idButton1)}
                >
                  {config.textButton1}
                </Button>
              </Col>
              <Col span={12}>
                <TimeStamp>{timestamp01}</TimeStamp>
              </Col>
            </Row> */}
            <Row style={{ paddingTop: 20 }}>
              <Col span={12}>
                <Button
                  type="primary"
                  block
                  onClick={e => this.toggle(config.idButton2)}
                >
                  {config.textButton2}
                </Button>
              </Col>
              <Col span={12}>
                <TimeStamp>{timestamp02}</TimeStamp>
              </Col>
            </Row>
          </div>
        )}
        <Modal
          title="Update"
          style={{ top: 20 }}
          visible={this.state.visible}
          onOk={this.handleOk}
          onCancel={this.handleCancel}
          maskClosable={false}
        >
          {logs.map((content, index) => (
            <div key={index}>
              <span style={{ wordBreak: 'break-all' }}>{content}</span>
              <br />
              <br />
            </div>
          ))}
        </Modal>
      </div>
    );
  }
}

export default UpdateRate;
