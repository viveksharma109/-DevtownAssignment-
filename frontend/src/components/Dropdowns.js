import { Button, FormControl, InputLabel, MenuItem, Select } from '@mui/material';
import React from 'react';
import axios from 'axios';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { fetchMobiles } from './store/mobileslice';

const host_url = process.env.REACT_APP_HOST_URL;

function DropDowns({setState}) {
    const dispatch = useDispatch();
    const [dropdowns, setdropdowns] = useState([]);
    const [selectedValues, setSelectedValues] = useState({
        name: '',
        price: '',
        type: '',
        processor: '',
        memory: '',
        os: '',
    });

    // get all domaines
    React.useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(`${host_url}dropdowns`);
                setdropdowns(response.data.data);
            } catch (error) {
                console.error('Error fetching domains data:', error);
            }
        };
        fetchData();
    }, []);

    const handleinpuChange = (e) => {
        const { name, value } = e.target;
        console.log(name, ": ", value);
        switch (name) {
            case "name":
                console.log("who")
                setSelectedValues(prev => ({ ...prev, 'name': value }));
                break;
            case "price":
                setSelectedValues(prev => ({ ...prev, 'price': value }));
                break;
            case "type":
                setSelectedValues(prev => ({ ...prev, 'type': value }));
                break;
            case "processor":
                setSelectedValues(prev => ({ ...prev, 'processor': value }));
                break;
            case "memory":
                setSelectedValues(prev => ({ ...prev, 'memory': value }));
                break;
            case "os":
                setSelectedValues(prev => ({ ...prev, 'os': value }));
                break;
            default:
                console.log("Invalid input name");
        }
    }

    const handleApply = (event) => {
        dispatch(fetchMobiles({
            name: selectedValues.name,
            price: selectedValues.price,
            type: selectedValues.type,
            processor: selectedValues.processor,
            memory: selectedValues.memory,
            os: selectedValues.os
        }));
        setState(prev => ({ ...prev, "right": false }));
    };

    return (
        <>

            <FormControl sx={{ m: 1, minWidth: 200, border: "2px solid black", }} size="small">
                <InputLabel id="demo-select-small-label">Name</InputLabel>
                <Select
                    name='name'
                    labelId="demo-select-small-label "
                    id="demo-select-small"
                    value={selectedValues.name}
                    onChange={handleinpuChange}
                    label=" Name"

                    sx={{ color: "black", width: "200px" }}
                >
                    <MenuItem value="">All</MenuItem>
                    {dropdowns && dropdowns.name && dropdowns.name.map((name) => (
                        <MenuItem key={name} value={name}>
                            {name}
                        </MenuItem>
                    ))}
                </Select>
            </FormControl>
            <FormControl sx={{ m: 1, minWidth: 200, border: "2px solid black", }} size="small">
                <InputLabel id="demo-select-small-label">Price</InputLabel>
                <Select
                    name='price'
                    labelId="demo-select-small-label "
                    id="demo-select-small"
                    value={selectedValues.price}
                    onChange={handleinpuChange}
                    label=" Name"
                    sx={{ color: "black", width: "200px" }}
                >
                    <MenuItem value="">All</MenuItem>
                    {dropdowns && dropdowns.price && dropdowns.price.map((price) => (
                        <MenuItem key={price} value={price}>
                            {price}
                        </MenuItem>
                    ))}
                </Select>
            </FormControl>
            <FormControl sx={{ m: 1, minWidth: 200, border: "2px solid black", }} size="small">
                <InputLabel id="demo-select-small-label">Type</InputLabel>
                <Select
                    name='type'
                    labelId="demo-select-small-label "
                    id="demo-select-small"
                    label=" Name"
                    value={selectedValues.type}
                    onChange={handleinpuChange}
                    sx={{ color: "black", width: "200px" }}
                >
                    <MenuItem value="">All</MenuItem>
                    {dropdowns && dropdowns.type && dropdowns.type.map((type) => (
                        <MenuItem key={type} value={type}>
                            {type}
                        </MenuItem>
                    ))}
                </Select>
            </FormControl>
            <FormControl sx={{ m: 1, minWidth: 200, border: "2px solid black", }} size="small">
                <InputLabel id="demo-select-small-label">Processor</InputLabel>
                <Select
                    name='processor'
                    labelId="demo-select-small-label "
                    id="demo-select-small"
                    label=" Name"
                    value={selectedValues.processor}
                    onChange={handleinpuChange}
                    sx={{ color: "black", width: "200px" }}
                >
                    <MenuItem value="">All</MenuItem>
                    {dropdowns && dropdowns.processor && dropdowns.processor.map((processor) => (
                        <MenuItem key={processor} value={processor}>
                            {processor}
                        </MenuItem>
                    ))}

                </Select>
            </FormControl>
            <FormControl sx={{ m: 1, minWidth: 200, border: "2px solid black", }} size="small">
                <InputLabel id="demo-select-small-label">Memory</InputLabel>
                <Select
                    name='memory'
                    labelId="demo-select-small-label "
                    id="demo-select-small"
                    value={selectedValues.memory}
                    onChange={handleinpuChange}
                    label=" Name"
                    sx={{ color: "black", width: "200px" }}
                >
                    <MenuItem value="">All</MenuItem>
                    {dropdowns && dropdowns.memory && dropdowns.memory.map((memory) => (
                        <MenuItem key={memory} value={memory}>
                            {memory}
                        </MenuItem>
                    ))}
                </Select>
            </FormControl>
            <FormControl sx={{ m: 1, minWidth: 200, border: "2px solid black", }} size="small">
                <InputLabel id="demo-select-small-label">Os</InputLabel>
                <Select
                    name='os'
                    labelId="demo-select-small-label "
                    id="demo-select-small"
                    value={selectedValues.os}
                    onChange={handleinpuChange}
                    sx={{ color: "black", width: "200px" }}
                    label=" Name"
                >
                    <MenuItem value="">All</MenuItem>
                    {dropdowns && dropdowns.os && dropdowns.os.map((os) => (
                        <MenuItem key={os} value={os}>
                            {os}
                        </MenuItem>
                    ))}
                </Select>
            </FormControl>
            <Button onClick={handleApply} variant="contained">Apply</Button>

        </>
    )
}

export default DropDowns;