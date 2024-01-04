import axios, { AxiosInstance } from "axios"

export const api: AxiosInstance = axios.create({
  baseURL: "http://ec2-13-40-213-131.eu-west-2.compute.amazonaws.com:5000/api"
})
