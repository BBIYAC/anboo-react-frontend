import React, {useEffect, useState} from 'react';
import Star from '../../atoms/Button/Star';

const Satisfaction = ({star_rating}) => {
    const [starOnOff, setStarOnOff] = useState([]);
    const onClickStarRating = (idx) => {
        let temp = [];
        for(let i=0; i<5; i++){
            if(i<=idx){
                temp.push('var(--color-yellow)')
            }
            else{
                temp.push('var(--color-dark-gray)')
            }
        }
        setStarOnOff([...temp]);
    }

    useEffect(()=>{
        let temp = [];
        for(let i=0; i<5; i++){
            if(i<star_rating){
                temp.push('var(--color-yellow)')
            }else{
                temp.push('var(--color-dark-gray)')
            }
        }
        setStarOnOff([...temp]);
    }, [star_rating])

    useEffect(()=>{
        let temp = [];
        for(let i=0; i<5; i++){
            temp.push('var(--color-dark-gray)')
        }
        setStarOnOff([...temp]);
    }, []);

      const handleStyle = {
        display: 'flex',
        padding: '0 30px',
        justifyContent: 'space-between',
        border: '1px solid #ddd',
        borderRadius: 'var(--border-radius)',
        margin: '20px 0 40px 0' 
    }
    return(
        <div className="satisfaction" style={handleStyle}>
            <Star color={starOnOff[0]} onClick={()=>onClickStarRating(0)} />
            <Star color={starOnOff[1]} onClick={()=>onClickStarRating(1)} />
            <Star color={starOnOff[2]} onClick={()=>onClickStarRating(2)} />
            <Star color={starOnOff[3]} onClick={()=>onClickStarRating(3)} />
            <Star color={starOnOff[4]} onClick={()=>onClickStarRating(4)} />
        </div>
    );
};

export default Satisfaction;