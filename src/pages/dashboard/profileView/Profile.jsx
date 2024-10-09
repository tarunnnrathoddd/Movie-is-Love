import React from 'react'
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import {BiPencil} from "react-icons/bi"
import fullPath from 'src/utils/fullPath';

function Profile(props) {

    const {setEditProfile} = props

    let skipFields = ["_id", "__v", "avatar", "updatedAt", "OTPCode","expiredAt","verify"]


    const { auth } = useSelector(state => state)
    const { authProfile } = auth

    function renderItem(key, value){
        switch(true){
            case key === "createdAt":
                return (
                    <>
                        <td className="py-2 w-[200px]  text-gray-200">Join on</td>
                        <td>{new Date(value).toLocaleString()}</td>
                    </>
                )

            default:
                return (
                    <>
                        <td className="py-2 w-[200px] text-gray-200">{key}</td>
                        <td className=''>{value}</td>
                    </>
                )
        }

    }


    return (
        <div className="">
            <div>
                <h1 className="text-3xl text-gray-100 font-medium mb-4 text-center">
                    Welcame
                    <span> {authProfile.firstName}</span>
                </h1>
                <button className='btn mb-4' onClick={()=>setEditProfile(true)} >
                    <BiPencil className="mr-1" />
                    Edit Profile</button>
            </div>


            {authProfile && <div className='mb-4'>
                <img className=" w-48" src={fullPath(authProfile.avatar)} alt="" />
            </div> }


            <table className="w-full">

                <tbody>
                {authProfile && Object.keys(authProfile).map(key => !skipFields.includes(key) && (
                    <tr>
                        {renderItem(key, authProfile[key])}
                    </tr>
                ))}
                </tbody>

            </table>
        </div>
    )

}

export default Profile