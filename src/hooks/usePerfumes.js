import { useEffect, useState } from 'react';

const usePerfumes = () => {
    const [perfumes, setPerfumes] = useState([]);
    useEffect(() => {
        fetch('https://agile-headland-59879.herokuapp.com/perfumes')
            .then(res => res.json())
            .then(data => setPerfumes(data))
    }, []);
    return [perfumes, setPerfumes];

};

export default usePerfumes;