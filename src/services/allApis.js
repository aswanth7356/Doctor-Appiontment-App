import base_url from "./base_url"
import commonApi from "./commonApi"



export const registerApi=async(data)=>{
    return await commonApi("POST",`${base_url}/reg`,data,"")
}

export const LoginApi=async(data)=>{
    return await commonApi("POST",`${base_url}/log`,data,"")
}





export const addDoctorApi=async(data,header)=>{
    return await commonApi("POST",`${base_url}/addDoctor`,data,header)
}

export const getUserDoctorApi=async(header)=>{
    return await commonApi("GET",`${base_url}/viewDoctor`,"",header)
}

export const deleteDoctorApi=async(id,header)=>{
    return await commonApi("DELETE",`${base_url}/deleteDoctor/${id}`,{},header)
}

export const updateDoctorApi=async(id,data,header)=>{
    return await commonApi("PUT",`${base_url}/updateDoctor/${id}`,data,header)
}