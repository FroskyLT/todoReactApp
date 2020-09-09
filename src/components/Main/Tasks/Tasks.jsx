import React from 'react';
import style from './Tasks.module.css'
import SingleTask from './SingleTask/SingleTask';

const Tasks = (props) => {
    let singleTaskElement = props.tasks.map(m => <SingleTask text={m.text}/>)

    return (
        <div className={style.tasks__wrapper}>
            {singleTaskElement}
        </div>
    );
}

export default Tasks;