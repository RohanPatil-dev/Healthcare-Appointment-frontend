import React, { useState, useEffect, useRef } from "react"

import { Button, Input, Space, Table, Popconfirm } from 'antd';
import { SearchOutlined } from '@ant-design/icons';

import Highlighter from 'react-highlight-words';

export default function With_react() {

    const [data, setData] = useState([])
    const [searchText, setSearchText] = useState('');
    const [searchedColumn, setSearchedColumn] = useState('');
    const searchInput = useRef(null);

    const handleSearch = (selectedKeys, confirm, dataIndex) => {
        confirm();
        setSearchText(selectedKeys[0]);
        setSearchedColumn(dataIndex);
    };

    const handleReset = (clearFilters) => {
        clearFilters();
        setSearchText('');
    };

    const getColumnSearchProps = (dataIndex) => ({
        filterDropdown: ({ setSelectedKeys, selectedKeys, confirm, clearFilters, close }) => (
            <div
                style={{
                    padding: 8,
                }}
                onKeyDown={(e) => e.stopPropagation()}
            >
                <Input
                    ref={searchInput}
                    placeholder={`Search ${dataIndex}`}
                    value={selectedKeys[0]}
                    onChange={(e) => setSelectedKeys(e.target.value ? [e.target.value] : [])}
                    onPressEnter={() => handleSearch(selectedKeys, confirm, dataIndex)}
                    style={{
                        marginBottom: 8,
                        display: 'block',
                    }}
                />
                <Space>
                    <Button
                        type="primary"
                        onClick={() => handleSearch(selectedKeys, confirm, dataIndex)}
                        icon={<SearchOutlined />}
                        size="small"
                        style={{
                            width: 90,
                        }}
                    >
                        Search
                    </Button>
                    <Button
                        onClick={() => clearFilters && handleReset(clearFilters)}
                        size="small"
                        style={{
                            width: 90,
                        }}
                    >
                        Reset
                    </Button>
                    <Button
                        type="link"
                        size="small"
                        onClick={() => {
                            confirm({
                                closeDropdown: false,
                            });
                            setSearchText(selectedKeys[0]);
                            setSearchedColumn(dataIndex);
                        }}
                    >
                        Filter
                    </Button>
                    <Button
                        type="link"
                        size="small"
                        onClick={() => {
                            close();
                        }}
                    >
                        close
                    </Button>
                </Space>
            </div>
        ),
        filterIcon: (filtered) => (
            <SearchOutlined
                style={{
                    color: filtered ? '#1677ff' : undefined,
                }}
            />
        ),
        onFilter: (value, record) =>
            record[dataIndex].toString().toLowerCase().includes(value.toLowerCase()),
        onFilterDropdownOpenChange: (visible) => {
            if (visible) {
                setTimeout(() => searchInput.current?.select(), 100);
            }
        },
        render: (text) =>
            searchedColumn === dataIndex ? (
                <Highlighter
                    highlightStyle={{
                        backgroundColor: '#ffc069',
                        padding: 0,
                    }}
                    searchWords={[searchText]}
                    autoEscape
                    textToHighlight={text ? text.toString() : ''}
                />
            ) : (
                text
            ),
    });

    function API() {
        fetch("https://jsonplaceholder.typicode.com/todos").then((data) => {
            return data.json()
        }).then((data) => {
            console.log(data);
            setData(data)
        })
    }

    useEffect(() => {
        API()
    }, [])

    const modifiedData = data.map(({ body, ...item }) => ({
        ...item,
        key: item.id,
        comment: body
    }))

    console.log("modify", modifiedData);

    const columns = [
        {
            title: "ID",
            dataIndex: "id",
            key: "id",
            ...getColumnSearchProps('id'),
            width: '30%',
        }, {
            title: "Title",
            dataIndex: "title",
            key: "title",
            ...getColumnSearchProps('title'),
            width: '30%',
        }, {
            title: "userId",
            dataIndex: "userId",
            key: "userId",
            ...getColumnSearchProps('userId'),
            width: '30%',
        }, {
            title: "Action",
            dataIndex: "action",
            key: "action",
            render: (_, record) => 
                modifiedData.length >= 1 ? (
                    <button className="btn btn-danger" onClick={()=>{handleDelete(record)}}>Delete</button>
                    // <Popconfirm
                    //     title="Delete"
                    //     onConfirm={() => handleDelete(record)}
                    // >
                    //     <button className="btn btn-danger">Delete</button>
                    // </Popconfirm>
                ) : null
            ,
            width: '30%',
        }
    ]

    function handleDelete(id) {
       console.log(id);
    }

    return (
        <>
            <Table
                columns={columns}
                dataSource={data}
            />
        </>
    )
}