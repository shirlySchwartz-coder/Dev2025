import axios from 'axios';
import React, { useEffect } from 'react'
import { useState } from 'react';
import UserCard from './UserCard';


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

        <div className='p-4 flex gap-4 flex-col md:flex-row'>
        {/*left  students list*/}
        <div className='w-full lg:w-2/3 flex flex-col gap-8 '>
          <h1 className='text-center'>Students Details</h1>
          <div className='flex gap-4 justify-between flex-wrap'>
            <UserCard />
            <UserCard />
            <UserCard />
            <UserCard />
          </div>
          <button type='button'>Add Student</button>
        </div>
        <br />

        {/*right grades */}
        <div className='w-full lg:w-1/3 text-center'>
          <h1>Students grades table</h1>
          <br />
          <div>
            <table className='w-full'>
              <thead>
                <tr>
                  <th>Student Name</th>
                  <th>Task 1</th>
                  <th>Task 2</th>
                  <th>Task 3</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>John Doe1</td>
                  <td>90</td>
                  <td>80</td>
                  <td>70</td>
                  <td>Edit</td>
                </tr>
                <tr>
                  <td>Jane Doe2</td>
                  <td>70</td>
                  <td>60</td>
                  <td>50</td>
                </tr>
                <tr>
                  <td>John Doe3</td>
                  <td>90</td>
                  <td>80</td>
                  <td>70</td>
                </tr>
                <tr>
                  <td>Jane Doe4</td>
                  <td>70</td>
                  <td>60</td>
                  <td>50</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  )
}

