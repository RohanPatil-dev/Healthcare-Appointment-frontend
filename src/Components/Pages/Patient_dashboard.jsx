import React, { useState, useEffect, useRef } from "react"

import { ToastContainer, toast } from "react-toastify"
import 'react-toastify/dist/ReactToastify.css';

// for data table
import { Button, Input, Space, Table, Popconfirm } from 'antd';
import { SearchOutlined } from '@ant-design/icons';

import Highlighter from 'react-highlight-words';

import Nav_dashboard from "./Nav_dashboard";

import axios from "axios";

import { useLocation } from "react-router-dom";

import Modal from "../Modal";

import { useNavigate } from "react-router-dom";

export default function Patient_dashboard() {

  const navigate = useNavigate()

  const location = useLocation()

  console.log(location);

  const [appointment, setAppointment] = useState([])

  console.log("appointment", appointment);

  const [doctors, setDoctors] = useState([])

  const [doctorId, setDoctorId] = useState("")

  const [date, setDate] = useState("")

  const local = localStorage.getItem("patientId")

  console.log("local", local);

  useEffect(() => {
    addAppointment()
    addDoctors()
  }, [local])


  function addAppointment() {
    const token = localStorage.getItem('token');

    axios
      .get(`http://localhost:8081/appointment/appointmentsByPatient?patientId=${local}`, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((response) => {
        setAppointment(response.data.task);
      }).catch(err => console.log(err))
  }

  function addDoctors() {
    axios.get(`http://localhost:8081/doctor/docData`).then((value) => {
      console.log("doctor", value.data);
      return setDoctors(value.data)
    }).catch((err) => {
      return err
    })
  }

  async function postAppointment() {
    try {
      const token = localStorage.getItem('token');

      const data = {
        patientId: local,
        doctorId: doctorId,
        date: date,
        status: "pending"
      }

      const response = await axios.post("http://localhost:8081/appointment/userAppointment", data,{
        headers : { Authorization: `Bearer ${token}` }
      })
      
      if(response === true){
        toast.error(response.data.error)
       
      }else if(!doctorId && !date){
        toast.error("Please select your appointment !")
      }else if(!date){
        toast.error("Please select date !")
      }else if(!doctorId){
        toast.error("Please select doctor !")
      }else{
        toast.success("Success !")
        addAppointment()
      }
    } catch (error) {
       toast.error("Server error !");
    }
  }

  function deleteAppointment(id) {
    toast.success("Appointment deleted successfully !")

    const token = localStorage.getItem("token")

    axios.delete(`http://localhost:8081/appointment/userAppointmentDelete/${id}`,{
      headers : { Authorization: `Bearer ${token}` }
    }).then(() => {
      console.log(`${id} : data deleted successfully`);
      addAppointment()
    }).catch((err) => {
      console.log(err);
    })
  }


  function getDocName(id) {
    const doctor = doctors.find((value) => value._id === id)

    return doctor ? doctor.name : "Unknown Doctor"
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

  const modifiedData = appointment.map(({ body, index, ...item }) => ({
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
      dataIndex : "index",
      render: (text, record, index) => (currentPage - 1) * pageSize + index + 1,
      width: '0.3%',
      align: "center",
    }, {
      title: "Doctor Name",
      key: "doctor",
      render: (text, record, index) => getDocName(record.doctorId),
      width: '0.8%',
      align: "center",
    }, {
      title: "Date",
      dataIndex: "date",
      key: "date",
      ...getColumnSearchProps('date'),
      width: '1.2%',
      align: "center",
    }, {
      title: "Status",
      dataIndex: "status",
      key: "status",
      ...getColumnSearchProps('status'),
      width: '0.6%',
      align: "center",
    }, {
      title: "Action",
      dataIndex: "action",
      key: "action",
      render: (_, record) => <button className="btn btn-danger w-50" onClick={() => { deleteAppointment(record._id) }}>Delete</button>,
      width: '0.8%',
      align: "center"
    },{
      title: "Doctor Profile",
      dataIndex: "profile",
      key: "profile",
      render: (_, record) => <button className="btn btn-success" onClick={() => { deleteAppointment(record._id) }}>Doctors profile</button>,
      width: '0.6%',
      align: "center"
    }
  ]

  return (
    <>

      <ToastContainer />

      <Modal btn={postAppointment} doctors={doctors} date={date} setDate={setDate} doctorId={doctorId} setDoctorId={setDoctorId} />

      <Nav_dashboard />

      <div>
        <div>
          <div className="patient-btn-div">
            <button className="btn patient-btn" data-toggle="modal" data-target="#exampleModal">Add Appointment</button>
          </div>

          <div className="mt-5 text-center">
            <Table
              columns={columns}
              dataSource={appointment}
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
          </div>
        </div>
      </div>
    </>
  )
}