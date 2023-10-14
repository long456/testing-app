import React, { useEffect, useState } from "react";
import { Typography, Col, Row, Input, Select, TimePicker, DatePicker, Button, message, Upload, Table  } from "antd";
import { SearchOutlined, UploadOutlined } from '@ant-design/icons';

function Page() {
    
    const [data, setData] = useState([]);

    const fetchData = async () => {
        const response = await fetch('https://random-data-api.com/api/users/random_user?size=20');
        response.json().then(json => {
            console.log(json);
            setData(json)
        })

    }

    useEffect(() => {
        fetchData();
    }, [])

    const columns = [
        {
            title: 'Name',
            dataIndex: 'last_name',
        },
        {
            title: 'Gender',
            dataIndex: 'gender',
        },
        {
            title: 'Email',
            dataIndex: 'email',
        },
        {
            title: 'Phone number',
            dataIndex: 'phone_number',
        },
        {
            title: 'Date of birth',
            dataIndex: 'date_of_birth',
        },
        {
            title: 'Social insurance number',
            dataIndex: 'social_insurance_number',
        },
    ]

    const props = {
        name: 'file',
        action: 'https://run.mocky.io/v3/435e224c-44fb-4773-9faf-380c5e6a2188',
        headers: {
          authorization: 'authorization-text',
        },
        onChange(info) {
          if (info.file.status !== 'uploading') {
            console.log(info.file, info.fileList);
          }
          if (info.file.status === 'done') {
            message.success(`${info.file.name} file uploaded successfully`);
          } else if (info.file.status === 'error') {
            message.error(`${info.file.name} file upload failed.`);
          }
        },
    };

    return(
        <div className="Page">
            <Typography.Title level={3}>
                Payroll services in bank	
            </Typography.Title>

            <Row>
                <Col span={12}>
                    <Row>
                        <Col span={6}>
                            <Row>
                                <Typography.Title level={5}>
                                    Request No	
                                </Typography.Title>
                                <Input></Input>
                            </Row>
                            <Row>
                                <Typography.Title level={5}>
                                    Debit account	
                                </Typography.Title>
                                <Input></Input>
                            </Row>
                            <Row>
                                <Typography.Title level={5}>
                                    Status	
                                </Typography.Title>
                                <Select
                                    defaultValue="true"
                                    style={{ width: '100%' }}
                                    options={[
                                        { value: 'true', label: 'True' },
                                        { value: 'False', label: 'False' },
                                    ]}
                                />
                            </Row>
                        </Col>
                    </Row>
                </Col>
                <Col span={12}>
                    <Row>
                        <Col span={6}>
                            <Row>
                                <Typography.Title level={5}>
                                    Request Time	
                                </Typography.Title>
                                <TimePicker format={'HH:mm'} />
                            </Row>
                            <Row>
                                <Typography.Title level={5}>
                                    Approval date	
                                </Typography.Title>
                                <DatePicker/>
                            </Row>
                        </Col>
                        <Col span={6}>
                            <Row>
                                <div style={{paddingTop: '58px'}}>
                                    <Button icon={<SearchOutlined />}>Search</Button>
                                </div>
                            </Row>
                        </Col>
                    </Row>
                </Col>
            </Row>
            
            <div style={{paddingTop: '30px'}}>
                <Upload {...props} >
                    <Button icon={<UploadOutlined />}>Click to Upload</Button>
                </Upload>   
            </div>

            <div style={{paddingTop: '15px' , paddingBottom: '10px'}}>
                <Button type="primary" onClick={fetchData} >
                    Reload
                </Button>
            </div>                        


            <Table 
                columns={columns} 
                dataSource={data} 
                pagination={{ defaultPageSize: 15, showSizeChanger: true, pageSizeOptions: ['15', '20', '30']}}
            />                            
                      
        </div>
    );
}

export default Page;