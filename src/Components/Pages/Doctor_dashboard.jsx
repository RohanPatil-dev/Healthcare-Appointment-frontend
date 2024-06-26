import React, { useState, useEffect,useRef } from "react"

import {ToastContainer,toast} from "react-toastify"
import 'react-toastify/dist/ReactToastify.css';

// for data table
import { Button, Input, Space, Table, Popconfirm } from 'antd';
import { SearchOutlined } from '@ant-design/icons';

import Highlighter from 'react-highlight-words';

import { useLocation } from "react-router-dom";

import Doctor_Modal from "./Doctor_Modal"
import Nav_dashboard from "./Nav_dashboard"


import axios from "axios";

export default function Doctor_dashboard() {

    const location = useLocation()

    const [appointments, setAppointments] = useState([])

    console.log("appointments", appointments);

    // selectedAppointment
    const [users, setUsers] = useState([])

    console.log("users",users);

    const [status, setStatus] = useState(users.status)

    console.log("status", status);

    const [selectedAppointment,setSelectedAppointment] = useState([])

    const local = localStorage.getItem("doctorId")

    console.log("local", local);

    useEffect(() => {
        allData()
        allPatients()
    }, [local])


    function allData() {
      const token = localStorage.getItem('token');

        axios
            .get(`http://localhost:8081/appointment/appointmentsByDoctor?doctorId=${local}`, {
              headers: { Authorization: `Bearer ${token}` },
            })
            .then((response) => {
                setAppointments(response.data.task);
            }).catch(err => console.log(err))
    }

    function allPatients() {
        axios.get("http://localhost:8081/user/allPatient").then((value) => {
            setUsers(value.data)
        }).catch((err) => {
            console.log(err);
        })
    }


    function getDoctor(id) {
        var getDocId = id

        setSelectedAppointment(getDocId)
        console.log("getDocId",getDocId);
    }


    function updateStatus() {
      const token = localStorage.getItem('token');

        if(status === undefined){
            toast.error("Choose your status !")
        }else{
            toast.success("Status updated successfully !")

            const result = axios.put(`http://localhost:8081/appointment/userAppointmentUpdate/${selectedAppointment._id}`, { status }, {
              headers: { Authorization: `Bearer ${token}` },
            }).then((value)=>{
                
                console.log("result",value.data);
                console.log("res",result.data);
    
                console.log("success !");
    
               setStatus(undefined)
               
               allPatients()
                 allData()
            })
        }

    }

    function getPatientName(id){
        const patient = users.find((value) => value._id === id)

        return patient ? patient.name : "Unknown Patient"
    }

    
  // data table code

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

  const modifiedData = appointments.map(({ body, index, ...item }) => ({
    ...item,
    key: item.id,
    comment: body
  }))

  console.log("modify", modifiedData);

  // pagination purpose
  const [currentPage, setcurrentPage] = useState(1)

  let pageSize = 10

  const columns = [
    {
      title: "ID",
      key: "index",
      render: (text, record, index) => (currentPage - 1) * pageSize + index + 1,
      width: '0.3%',
      align: "center",
      
    }, {
      title: "Doctor Name",
      key: "doctor",
      render: (text, record, index) => getPatientName(record.patientId),
      width: '0.8%',
      align: "center",
 
    }, {
      title: "Date",
      dataIndex: "date",
      key: "date",
      ...getColumnSearchProps('date'),
      width: '0.9%',
      align: "center",
 
    }, {
      title: "Status",
      dataIndex: "status",
      key: "status",
      ...getColumnSearchProps('status'),
      width: '0.4%',
      align: "center",
      defaultSortOrder: 'descend',
      sorter: (a, b) => a.status > b.status,
    }, {
      title: "Action",
      dataIndex: "action",
      key: "action",
      render: (_, record) => <button className="btn btn-primary action" onClick={()=>{getDoctor(record)}} data-toggle="modal" data-target="#doctorModal">Change Status</button>,
      width: '0.5%',
      align: "center"
    },{
      title: "Doctor Profile",
      dataIndex: "profile",
      key: "profile",
      render: (_, record) => <button className="btn btn-success" onClick={() => { }}>Patients profile</button>,
      width: '0.6%',
      align: "center"
    }
  ]
    
    return (
        <>
    <ToastContainer/>

            <Doctor_Modal users={users} updateStatus={updateStatus} status={status} setStatus={setStatus} />

            <Nav_dashboard />
            <div className="mt-5 text-center" style={{marginTop : "25px"}}>
               
            <Table
              columns={columns}
              dataSource={appointments}
              rowKey={"_id"}
              bordered
              pagination = {
                {
                  // pageSize : pageSize,
                  current : currentPage,
                  onChange : (page) => setcurrentPage(page)
                }
              }
              scroll={{y : 500}}
            />
               
                {/* <table className="table table-bordered table-striped" style={{width : "60rem",marginLeft : "50px"}}>
                    <thead className="text-light" style={{backgroundColor : "#6D6D6D"}}>
                        <tr>
                            <th scope="col">ID</th>
                            <th scope="col">Patient</th>
                            <th scope="col">Date</th>
                            <th scope="col">Status</th>
                            <th scope="col">Action</th>
                        </tr>
                    </thead>
                    <tbody>

                        {appointments && appointments.map((data, index) => {
                            return (
                                <>
                                    <tr key={index + 1} className="table-row">
                                        <td className="doc">{index + 1}</td>
                                        <td className="doc">{getPatientName(data.patientId)}</td>
                                        <td className="doc">{data.date}</td>
                                        <td className="doc">{data.status}</td>
                                        <td><button className="btn btn-primary action" onClick={()=>{getDoctor(data)}} data-toggle="modal" data-target="#doctorModal">Change Status</button></td>
                                    </tr>
                                </>
                            )
                        })}

                    </tbody>
                </table> */}
            </div>
        </>
    )
}