import axios, { AxiosInstance } from "axios"

export const api: AxiosInstance = axios.create({
  baseURL: "http://ec2-13-41-225-59.eu-west-2.compute.amazonaws.com:5000/api"
})
