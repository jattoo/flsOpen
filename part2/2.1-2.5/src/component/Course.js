import React from 'react';
import Header from './Header'
import Content from './Content'

const Course = ({course}) => {
    //console.log(course)
    return (
        <div>
        <Header header={course}/>
        <Content content={course}/>
        </div>
    )
}
export default Course