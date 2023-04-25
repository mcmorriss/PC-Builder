import React from 'react';
import { supabase } from '../client';
import { useState, useEffect } from "react";
import { Row, Col, Card, Descriptions, Space } from 'antd';

const CreateBuild = () => {

    const [cpu, setCpu] = useState("");
    const [gpu, setGpu] = useState("");
    const [motherboard, setMotherboard] = useState("");
    const [cooler, setCooler] = useState("");
    const [memory, setMemory] = useState("");
    const [storage, setStorage] = useState("");
    const [psu, setPsu] = useState("");
    const [pccase, setPccase] = useState("");
    const [os, setOs] = useState("");
    const [price, setPrice] = useState(0.00);
  return (
    <div className='create'>
        <form className='build'>
            <Descriptions title="New Build" bordered >

                <Descriptions.Item label="CPU" span={3}>
                    <select name='cpu' onChange={(e) => {setCpu(e.target.value) ; console.log(e.target.data-price)} }>
                        {cpuArray.map((x) => (
                            <option value={x[0]} data-price={`${x[1]}`}> {`${x[0]}: `}{`($${x[1]})`}</option>
                        ))}
                        <option value="" selected></option>
                    </select>
                    <b>{cpu.length > 0 && cpu[1] && console.log(cpu)}</b>
                </Descriptions.Item>
                <Descriptions.Item label="GPU" span={3}>
                    <select name='cpu'>
                        {gpuArray.map((x) => (
                            <option value={x[0]} price={x[1]}> {`${x[0]}: `}{`($${x[1]})`}</option>
                        ))}
                        <option value="" selected></option>
                    </select>
                </Descriptions.Item>
                <Descriptions.Item label="Motherboard" span={3}>
                    <select name='cpu'>
                        {mbArray.map((x) => (
                            <option value={x[0]} price={x[1]}> {`${x[0]}: `}{`($${x[1]})`}</option>
                        ))}
                        <option value="" selected></option>
                    </select>
                </Descriptions.Item>
                <Descriptions.Item label="CPU Cooler" span={3}>
                    <select name='cpu'>
                        {coolerArray.map((x) => (
                            <option value={x[0]} price={x[1]}> {`${x[0]}: `}{`($${x[1]})`}</option>
                        ))}
                        <option value="" selected></option>
                    </select>
                </Descriptions.Item>
                <Descriptions.Item label="Memory" span={3}>
                    <select name='cpu'>
                        {memArray.map((x) => (
                            <option value={x[0]} price={x[1]}> {`${x[0]}: `}{`($${x[1]})`}</option>
                        ))}
                        <option value="" selected></option>
                    </select>
                </Descriptions.Item>
                <Descriptions.Item label="Storage" span={3}>
                    <select name='cpu'>
                        {storArray.map((x) => (
                            <option value={x[0]} price={x[1]}> {`${x[0]}: `}{`($${x[1]})`}</option>
                        ))}
                        <option value="" selected></option>
                    </select>
                </Descriptions.Item>
                <Descriptions.Item label="Power Supply" span={3}>
                    <select name='cpu'>
                        {psuArray.map((x) => (
                            <option value={x[0]} price={x[1]}> {`${x[0]}: `}{`($${x[1]})`}</option>
                        ))}
                        <option value="" selected></option>
                    </select>
                </Descriptions.Item>
                <Descriptions.Item label="Case" span={3}>
                    <select name='cpu'>
                        {caseArray.map((x) => (
                            <option value={x[0]} price={x[1]}> {`${x[0]}: `}{`($${x[1]})`}</option>
                        ))}
                        <option value="" selected></option>
                    </select>
                </Descriptions.Item>
                <Descriptions.Item label="Total Price" span={3}>
                    {price > 0 && <b>{price}</b>}
                </Descriptions.Item>
            </Descriptions>
        </form>
    </div>
  )
}

const cpuArray = [
["AMD Ryzen 9 7950X3D", 674.00],
["AMD Ryzen 9 7950X", 577.00],
["AMD Ryzen 7 7700X", 340.99],
["AMD Ryzen 9 5900X", 303.57],
["Intel Core i9-13900K", 561.91],
["Intel Core i7-13700K", 415.87],
["Intel Core i5-13600K", 318.99],
["Intel Core i7-12700K", 300.42],
["Intel Core i5-12600K", 226.89],
["Intel Core i7-6700K", 223.11] ,
["Intel Core i5-6600K", 195.00],
]

const gpuArray = [
["GeForce RTX 3050 8GB", 299.99],
["GeForce RTX 3060 Ti", 579.90],
["GeForce RTX 3060 12GB", 619.99],
["GeForce RTX 3070", 809.99],
["GeForce RTX 3070 Ti", 899.99],
["GeForce RTX 3080 10GB", 1059.99],
["GeForce RTX 3080 Ti", 1549.00],
["GeForce RTX 3090", 1659.69],
["GeForce RTX 3090 Ti", 1999.00],
]

const mbArray = [
["Asus TUF GAMING X570-PLUS (WI-FI)", 209.99],
["MSI MAG B550 TOMAHAWK", 169.99],
["MSI B550-A PRO", 139.99],
["MSI B550M PRO-VDH WIFI", 119.99],
["Asus ROG STRIX Z490-E GAMING", 383.01],
["MSI Z490-A PRO", 234.09],
["MSI Z270-A PRO", 234.09],
["Gigabyte GA-H270N-WIFI", 234.09],
]

const coolerArray = [
["Noctua NH-D15 chromax.black", 119.95],
["be quiet! Dark Rock Pro 4", 89.90],
["Corsair iCUE H150i ELITE CAPELLIX", 308.00],
["NZXT Kraken X63", 154.99],
["Cooler Master Hyper 212 Black Edition", 75.98],
]

const memArray = [
["Corsair Vengeance LPX 16 GB", 41.99],
["Corsair Vengeance RGB Pro 32 GB", 104.98],
["Corsair Vengeance LPX 32 GB", 88.98],
["G.Skill Trident Z5 RGB 32 GB", 145.99],
["G.Skill Ripjaws V 32 GB", 66.99],
["Corsair Vengeance RGB Pro 16 GB", 62.94],
]

const storArray = [
["Samsung 970 Evo Plus - 1TB SSD", 59.99],
["Samsung 980 Pro - 2TB SSD", 158.00],
["Samsung 970 Evo Plus - 500GB SSD", 39.89],
["Seagate Barracuda Compute - 2TB SSD", 49.99],
["Western Digital Black SN850X - 2TB SSD", 159.99],
]

const psuArray = [
["Corsair RM850x (2021)", 149.99],
["Corsair RM1000x (2021)", 188.99],
["Thermaltake Toughpower GX2", 59.99],
["Corsair SF750", 162.54],
["EVGA 600 BR", 77.95],
["Cooler Master V750 SFX GOLD", 104.99],
]

const caseArray = [
["Corsair 4000D Airflow", 103.99],
["NZXT H5 Flow", 94.99],
["Phanteks Eclipse P300A Mesh", 59.99],
["Lian Li O11 Dynamic EVO", 169.99],
["Thermaltake Versa H18", 44.99]
]

export default CreateBuild