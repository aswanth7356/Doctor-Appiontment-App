import React, { useEffect, useState , useContext } from 'react'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import base_url from '../services/base_url';
import { updateDoctorApi } from '../services/allApis';
import { toast } from 'react-toastify';
import { editResponseContext } from '../contextApi/ContextShare';



function EditDoctor({ doctor }) {

    const [doctorData, setDoctorData] = useState({
        ...doctor
    })

    const [imgStatus, setImgStatus] = useState(false)
    const [preview, setPreview] = useState("")
    const [editResponse,setEditResponse]=useContext(editResponseContext) 

    useEffect(() => {
        if (doctorData.picture.type != 'image/jpg' && doctorData.picture.type != 'image/png' && doctorData.picture.type != 'image/jpeg') {
            console.log("Invalid File Type");
            setImgStatus(false)
            setDoctorData({
                ...doctor
            })
            setPreview("")
        }
        else {
            console.log("Valid file type");
            setImgStatus(true)
            setPreview(URL.createObjectURL(doctorData.picture))
        }
    }, [doctorData.picture])


    const handleUpdate = async () => {
        const { name, field, location, consultingTime, picture } = doctorData
        if (!name || !field || !location || !consultingTime || !picture) {
            toast.warning("Fill Form With Valid Data")
        }
        else {
            if (imgStatus) {
                const formData = new FormData()
                formData.append('name', name)
                formData.append('field', field)
                formData.append('location', location)
                formData.append('consultingTime', consultingTime)
                formData.append('picture', picture)

                const header = {
                    'Content-Type': 'multipart/form-data',
                    'Authorization': `Bearer ${sessionStorage.getItem('token')}`
                }

                const result = await updateDoctorApi(doctor._id, formData, header)
                if (result.status == 200) {
                    toast.success("Doctor Updated Successfully!!")
                    handleClose()
                    setEditResponse(result)
                }
                else {
                    toast.error("Updation Failed...Something went wrong")
                    console.log(result);
                }
            }
            else {
                const header = {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${sessionStorage.getItem('token')}`
                }
                const result = await updateDoctorApi(doctor._id, doctorData,header)
                if (result.status == 200) {
                    toast.success("Doctor Updated Successfully!!")
                    handleClose()
                    setEditResponse(result)
                }
                else {
                    toast.error("Updation Failed...Something went wrong")
                    console.log(result);
                }
            }
        }
    }



    const [show, setShow] = useState(false);

    const handleClose = () => {
        setShow(false);
        setDoctorData({
            ...doctor
        })
        setPreview("")
    }

    const handleShow = () => setShow(true);

    return (
        <>
            <div>

                <button className='btn' onClick={handleShow}>
                    <i className="fa-solid fa-pen-to-square fa-xl" style={{ color: "#0011ff", }} />
                </button>

                <Modal
                    show={show}
                    onHide={handleClose}
                    backdrop="static"
                    keyboard={false}
                >
                    <Modal.Header closeButton style={{ background: 'black', color: '#fff' }}>
                        <Modal.Title>Edit Doctor</Modal.Title>
                    </Modal.Header>
                    <Modal.Body style={{ background: 'black' }}>
                        <div className="row">
                            <div className="col">
                                <label htmlFor="img">
                                    <input type="file" name="" id="img" style={{ display: 'none' }} onChange={(e) => { setDoctorData({ ...doctorData, picture: e.target.files[0] }) }} />
                                    <img src={preview ? preview : `${base_url}/upload/${doctor?.picture}`} className='img-fluid' style={{ cursor: 'pointer' }} alt="" />
                                </label>
                            </div>
                            <div className='col'>
                                <div>
                                    <FloatingLabel controlId="floatingName" label="Name" className="mb-3">
                                        <Form.Control type="text" placeholder="name@example.com" value={doctorData?.name} onChange={(e) => { setDoctorData({ ...doctorData, name: e.target.value }) }} />
                                    </FloatingLabel>

                                    <FloatingLabel controlId="floatingField" label="Field" className="mb-3">
                                        <Form.Control type="text" placeholder="name@example.com" value={doctorData?.field} onChange={(e) => { setDoctorData({ ...doctorData, field: e.target.value }) }} />
                                    </FloatingLabel>

                                    <FloatingLabel controlId="floatingLocation" label="Location" className="mb-3">
                                        <Form.Control type="text" placeholder="name@example.com" value={doctorData?.location} onChange={(e) => { setDoctorData({ ...doctorData, location: e.target.value }) }} />
                                    </FloatingLabel>

                                    <FloatingLabel controlId="floatingCT" label="ConsultingTime" className="mb-3">
                                        <Form.Control type="text" placeholder="name@example.com" value={doctorData?.consultingTime} onChange={(e) => { setDoctorData({ ...doctorData, consultingTime: e.target.value }) }} />
                                    </FloatingLabel>
                                </div>
                            </div>



                        </div>
                    </Modal.Body>
                    <Modal.Footer style={{ background: 'black' }}>
                        <Button variant="secondary" onClick={handleClose}>
                            Close
                        </Button>
                        <Button variant="primary" onClick={handleUpdate}>UPDATE</Button>
                    </Modal.Footer>
                </Modal>
            </div>
        </>
    )
}

export default EditDoctor
