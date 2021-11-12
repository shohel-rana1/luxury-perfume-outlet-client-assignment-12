import { useEffect, useState } from 'react';

const useBrands = () => {
    const [brands, setBrands] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/brands')
            .then(res => res.json())
            .then(data => setBrands(data))
    }, []);
    return [brands, setBrands];

};

export default useBrands;