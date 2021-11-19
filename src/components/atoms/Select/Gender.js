import React, { useState, useEffect } from 'react';

const Gender = ({isGender, setIsGender, fillMessage}) => {
    const selectList = ['남', '여'];
    const [selected, setSelected] = useState('');
    const [color, setColor] = useState({color: 'gray'});
    const [isNull, setIsNull] = useState(false);

    const changeSelect = (e) =>{
        setSelected(e.target.value);
        setColor({color: 'black'});
        e.target.value.length > 0 ? setIsNull(false) : setIsNull(true);
    };

    useEffect(()=>{
        setSelected(isGender);
    },[isGender])

    useEffect(() => {
        selected === '' ? setIsNull(fillMessage): setIsGender(selected);
    }, [fillMessage, selected])
    

    const handleStyle = {
        width: '70px', 
        paddingLeft: '10px', 
        height: '55px'
    };

    return(
        <div className='sel-size' style={handleStyle}>
            <div className="tit-userchoice">성별</div>
            <select name='gender' className="sel-userchoice" defaultValue='default' onChange={changeSelect} style={color}>
                <option value='default' disabled hidden>선택</option>
                {selectList.map((item) =>{
                    if(item === isGender){
                        <option value={item} key={item} style={{color: 'black'}} selected>
                            {item}
                        </option>
                    }else{
                        <option value={item} key={item} style={{color: 'black'}}>
                            {item}
                        </option>
                    }
                })}
                {/* {
                    isGender === '여'
                    ?<><option value='여' style={{color: 'black'}} selected>
                            여
                        </option>
                        <option value='남' style={{color: 'black'}}>
                            남
                        </option></>
                    :<><option value='여' style={{color: 'black'}}>
                            여
                        </option>
                        <option value='남' style={{color: 'black'}} selected>
                            남
                        </option></>
                } */}
            </select>
            {isNull && <div className='notice-massage'>※ 필수</div>}
        </div>
    );
};

export default Gender;