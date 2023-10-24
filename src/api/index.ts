import { DataResultType } from '@/type/result';
import { CarType } from '@/type/selectType';
import axios from 'axios';

const baseURL = 'https://parallelum.com.br/fipe/api/v1'

export const getBrand = async (): Promise<CarType[]> => {
    try {
        const response = await axios.get(`${baseURL}/carros/marcas`);
        if (response.status !== 200) {
            throw new Error('Something went wrong');
        }
        const data: CarType[] = await response.data;
        return data;
    } catch (err) {
        throw err;
    }
};

export const getModel = async (brand: number): Promise<CarType[]> => {
    try {
        const response = await axios.get(`${baseURL}/carros/marcas/${brand}/modelos`);
        if (response.status !== 200) {
            throw new Error('Something went wrong');
        }
        const data: CarType[] = await response.data.modelos;
        return data;
    } catch (err) {
        throw err;
    }
};

export const getAge = async (brand: string, model: number): Promise<CarType[]> => {
    try {
        const response = await axios.get(`${baseURL}/carros/marcas/${brand}/modelos/${model}/anos`);
        if (response.status !== 200) {
            throw new Error('Something went wrong');
        }
        const data: CarType[] = await response.data;
        return data;
    } catch (err) {
        throw err;
    }
};

export const getResult = async (brand: number, model: number, age: string): Promise<DataResultType> => {
    try {
        const response = await axios.get(`${baseURL}/carros/marcas/${brand}/modelos/${model}/anos/${age}`);
        if (response.status !== 200) {
            throw new Error('Something went wrong');
        }
        const data: DataResultType  = await response.data;
        
        return data 
    } catch (err) {
        throw err;
    }
};