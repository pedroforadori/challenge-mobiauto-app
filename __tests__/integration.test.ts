// src/api/index.spec.ts
import axios from 'axios';
import { CarType } from '@/type/selectType';
import { getBrand } from '@/api';

jest.mock('axios');

const mockedAxios = axios as jest.Mocked<typeof axios>;
describe('connect api', () => {
  it('should return brand list', async () => {

    const brand: CarType[] = [
      {
        codigo: 1,
        nome: "Acura"
      },
      {
        codigo: 2,
        nome: "Agrale"
      },
    ];
    
    const mockedResponse = {
      data: brand,
      status: 200,
      statusText: 'OK',
      headers: {},
      config: {},
    };
    
    mockedAxios.get.mockResolvedValueOnce(mockedResponse);

    const data = await getBrand();
    expect(axios.get).toHaveBeenCalled();
    expect(data).toEqual(brand);
  });

  it('should return model list', async () => {
  
    const model: CarType[] = [
      {
        codigo:5585,
        nome:"AMAROK CD2.0 16V/S CD2.0 16V TDI 4x2 Die"
      },
      {
        codigo:5586,
        nome:"AMAROK CD2.0 16V/S CD2.0 16V TDI 4x4 Die"
      }
    ];
    
    const mockedResponse = {
      data: model,
      status: 200,
      statusText: 'OK',
      headers: {},
      config: {},
    };

    mockedAxios.get.mockResolvedValueOnce(mockedResponse);

    const data = await getBrand();
    expect(axios.get).toHaveBeenCalled();
    expect(data).toEqual(model);
  });

  it('should return age list', async () => {
  
    const age: CarType[] = [
      {
        codigo:2022-3,
        nome:"2022 Diesel"
      },
      {
        codigo:2021-3,
        nome:"2021 Diesel"
      }
    ];
    
    const mockedResponse = {
      data: age,
      status: 200,
      statusText: 'OK',
      headers: {},
      config: {},
    };

    mockedAxios.get.mockResolvedValueOnce(mockedResponse);

    const data = await getBrand();
    expect(axios.get).toHaveBeenCalled();
    expect(data).toEqual(age);
  });

});