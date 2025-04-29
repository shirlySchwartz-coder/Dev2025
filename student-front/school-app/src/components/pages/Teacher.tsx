import axios from 'axios';
import React, { useEffect } from 'react'
import { useState } from 'react';


export function Teacher  ()  {

    const [teacherList, setTeacherList] = useState<any[]>([]);
   


    const getAllTeachers = async () => {

         await axios.get("http://localhost:8080/api/v1/teacher/getAllTeachers")
         .then((result) => {
            console.log(result.data);
            setTeacherList(result.data);
            console.log(teacherList);
         }).catch((err) => {
            
         });
       
    }

    useEffect(() => {
        getAllTeachers();
    }, []);
  return (
    <div>
      <h1>Teacher Page</h1>
        <h2>List of Teachers</h2>
        <ul>
            {teacherList.map((teacher) => (
                <li key={teacher.user_id}>
                    {teacher.user_name} - {teacher.phone}
                </li>
            ))}
        </ul>
    </div>
  )
}

