import axios, { AxiosInstance } from "axios"

export const api: AxiosInstance = axios.create({
  baseURL: "http://ec2-18-130-127-9.eu-west-2.compute.amazonaws.com:5000/api"
})
