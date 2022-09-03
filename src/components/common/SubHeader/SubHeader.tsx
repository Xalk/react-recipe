import React from 'react';
import s from "./SubHeader.module.scss"

interface SubHeaderProps {
    title: string
}


const SubHeader: React.FC<SubHeaderProps> = ({title}) => {
    return (
        <div className={s.subHeader}>
            <h2>{title}</h2>
        </div>
    );
};

export default SubHeader;