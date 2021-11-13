import { useEffect, useState } from 'react';

const useBrands = () => {
    const [brands, setBrands] = useState([]);
    useEffect(() => {
        fetch('https://agile-headland-59879.herokuapp.com/brands')
            .then(res => res.json())
            .then(data => setBrands(data))
    }, []);
    return [brands, setBrands];

};

export default useBrands;