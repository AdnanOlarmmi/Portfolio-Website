import React from 'react'

const ResumeHeader = ({activeIndex, onClick, slider}) => {
  return (
    <ul className='flex-row'>
        <li>Education</li>
        <li>Professional Skills</li>
        <li>Experience</li>
        <li>Interview</li>
    </ul>
  )
}

export default ResumeHeader