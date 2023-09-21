import React from "react";
import user from "../../../../assets/abc.png";
import flag from "../../../../assets/United.svg";
import logo from '../../../../assets/logo.svg'
import { handleDrawer } from '../Sections/Drawer'

const Nav = () => {
const handleClick = ()=>{
  
  handleDrawer()
  preventDefault()
}
  return (
    <div >
        
      <div className="flex justify-between navbar bg-white max-h-32 p-[35px]">
        <div className="flex">
          <p className="2xl:hidden " href="" onClick={handleDrawer}><img src={logo} alt="" /></p>
          <a className="btn btn-ghost normal-case text-4xl font-semibold">
            Dashboard
          </a>
        </div>
        <div className=" flex gap-2">
          <div className="hidden lg:form-control pr-5">
            <input
              type="text"
              placeholder="Search here"
              className="input input-bordered w-24 md:w-auto rounded-2xl pl-12"
            />
          </div>
          <div className="lg:flex items-center hidden">
            <div className="flex gap-4">
              <img src={flag} alt="" />
              <p>Eng(US)</p>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M11.9978 14.4999L11.997 14.4999C11.9312 14.5003 11.866 14.4877 11.8051 14.4628C11.7444 14.4381 11.6892 14.4016 11.6426 14.3555C11.6424 14.3553 11.6422 14.3551 11.6421 14.3549L7.64349 10.3564C7.54896 10.2619 7.49585 10.1336 7.49585 9.99994C7.49585 9.86625 7.54896 9.73803 7.64349 9.64349C7.73803 9.54896 7.86625 9.49585 7.99994 9.49585C8.13353 9.49585 8.26166 9.54888 8.35617 9.64328C8.35624 9.64335 8.35632 9.64342 8.35639 9.64349L11.6459 12.943L11.9994 13.2976L12.3535 12.9435L15.6275 9.6695C15.7213 9.59425 15.8392 9.5552 15.9597 9.55986C16.0855 9.56472 16.2049 9.61688 16.294 9.70593C16.383 9.79498 16.4352 9.91435 16.44 10.0402C16.4447 10.1607 16.4056 10.2786 16.3304 10.3724L12.3478 14.3549C12.3476 14.3551 12.3474 14.3553 12.3472 14.3555C12.2542 14.4475 12.1287 14.4994 11.9978 14.4999Z"
                  fill="#A098AE"
                  stroke="#A098AE"
                />
              </svg>
            </div>
            <div className="p-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M21.6732 18.5534C21.0303 17.9802 20.4675 17.3232 19.9999 16.6C19.4894 15.6017 19.1834 14.5115 19.0999 13.3934V10.1C19.1043 8.34376 18.4672 6.64633 17.3084 5.32666C16.1495 4.007 14.5486 3.15592 12.8065 2.93335V2.07335C12.8065 1.83731 12.7128 1.61093 12.5459 1.44402C12.379 1.27712 12.1526 1.18335 11.9165 1.18335C11.6805 1.18335 11.4541 1.27712 11.2872 1.44402C11.1203 1.61093 11.0265 1.83731 11.0265 2.07335V2.94668C9.30004 3.1853 7.71852 4.04152 6.57489 5.35675C5.43126 6.67199 4.80302 8.35711 4.80654 10.1V13.3934C4.72304 14.5115 4.41705 15.6017 3.90654 16.6C3.44712 17.3216 2.89333 17.9785 2.25987 18.5534C2.18876 18.6158 2.13176 18.6927 2.09268 18.7789C2.0536 18.8651 2.03332 18.9587 2.0332 19.0534V19.96C2.0332 20.1368 2.10344 20.3064 2.22847 20.4314C2.35349 20.5564 2.52306 20.6267 2.69987 20.6267H21.2332C21.41 20.6267 21.5796 20.5564 21.7046 20.4314C21.8296 20.3064 21.8999 20.1368 21.8999 19.96V19.0534C21.8997 18.9587 21.8795 18.8651 21.8404 18.7789C21.8013 18.6927 21.7443 18.6158 21.6732 18.5534ZM3.41987 19.2934C4.04014 18.6942 4.58627 18.0227 5.04654 17.2934C5.68961 16.0877 6.06482 14.7574 6.14654 13.3934V10.1C6.1201 9.31871 6.25115 8.54007 6.5319 7.81046C6.81265 7.08086 7.23734 6.41521 7.7807 5.85315C8.32406 5.2911 8.97496 4.84413 9.69466 4.53887C10.4144 4.2336 11.1881 4.07629 11.9699 4.07629C12.7516 4.07629 13.5254 4.2336 14.2451 4.53887C14.9648 4.84413 15.6157 5.2911 16.159 5.85315C16.7024 6.41521 17.1271 7.08086 17.4078 7.81046C17.6886 8.54007 17.8196 9.31871 17.7932 10.1V13.3934C17.8749 14.7574 18.2501 16.0877 18.8932 17.2934C19.3535 18.0227 19.8996 18.6942 20.5199 19.2934H3.41987Z"
                  fill="#FFA412"
                />
                <path
                  d="M11.9996 22.8533C12.4195 22.8436 12.8225 22.6857 13.1373 22.4075C13.4521 22.1294 13.6583 21.7488 13.7196 21.3333H10.2129C10.2759 21.7601 10.4918 22.1496 10.8204 22.4292C11.1491 22.7088 11.5681 22.8595 11.9996 22.8533Z"
                  fill="#FFA412"
                />
              </svg>
            </div>
          </div>
          <div className="dropdown dropdown-end">
            <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
              <div className="w-10 rounded-full">
                <img src={user} />
              </div>
            </label>
            <ul
              tabIndex={0}
              className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52"
            >
              <li>
                <a className="justify-between">Profile</a>
              </li>
              <li>
                <div className="form-control ">
                  <input
                    type="text"
                    placeholder="Search"
                    className="input input-bordered w-full "
                  />
                </div>
              </li>
              <li>
                <a>Settings</a>
              </li>
              <li>
                <a>Logout</a>
              </li>
            </ul>
          </div>
          <div>
            <div className="flex gap-6 items-center">
              <p className="text-[16px]">Musfiq</p>
              

              <div className="dropdown dropdown-end">
            <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
              <div className="w-10 rounded-full">
              <svg className="dropdown dropdown-end "
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
              >
                <path
                  d="M4 6L8 10L12 6"
                  stroke="#151D48"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
              </div>
            </label>
            <ul
              tabIndex={0}
              className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52"
            >
              <li>
                <a className="justify-between">Profile</a>
              </li>
              <li>
                <div className="form-control ">
                  <input
                    type="text"
                    placeholder="Search"
                    className="input input-bordered w-full "
                  />
                </div>
              </li>
              <li><div className="flex items-center ">
            <div className="flex gap-4">
              <img src={flag} alt="" />
              <p>Eng(US)</p>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M11.9978 14.4999L11.997 14.4999C11.9312 14.5003 11.866 14.4877 11.8051 14.4628C11.7444 14.4381 11.6892 14.4016 11.6426 14.3555C11.6424 14.3553 11.6422 14.3551 11.6421 14.3549L7.64349 10.3564C7.54896 10.2619 7.49585 10.1336 7.49585 9.99994C7.49585 9.86625 7.54896 9.73803 7.64349 9.64349C7.73803 9.54896 7.86625 9.49585 7.99994 9.49585C8.13353 9.49585 8.26166 9.54888 8.35617 9.64328C8.35624 9.64335 8.35632 9.64342 8.35639 9.64349L11.6459 12.943L11.9994 13.2976L12.3535 12.9435L15.6275 9.6695C15.7213 9.59425 15.8392 9.5552 15.9597 9.55986C16.0855 9.56472 16.2049 9.61688 16.294 9.70593C16.383 9.79498 16.4352 9.91435 16.44 10.0402C16.4447 10.1607 16.4056 10.2786 16.3304 10.3724L12.3478 14.3549C12.3476 14.3551 12.3474 14.3553 12.3472 14.3555C12.2542 14.4475 12.1287 14.4994 11.9978 14.4999Z"
                  fill="#A098AE"
                  stroke="#A098AE"
                />
              </svg>
            </div>
            <div className="p-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M21.6732 18.5534C21.0303 17.9802 20.4675 17.3232 19.9999 16.6C19.4894 15.6017 19.1834 14.5115 19.0999 13.3934V10.1C19.1043 8.34376 18.4672 6.64633 17.3084 5.32666C16.1495 4.007 14.5486 3.15592 12.8065 2.93335V2.07335C12.8065 1.83731 12.7128 1.61093 12.5459 1.44402C12.379 1.27712 12.1526 1.18335 11.9165 1.18335C11.6805 1.18335 11.4541 1.27712 11.2872 1.44402C11.1203 1.61093 11.0265 1.83731 11.0265 2.07335V2.94668C9.30004 3.1853 7.71852 4.04152 6.57489 5.35675C5.43126 6.67199 4.80302 8.35711 4.80654 10.1V13.3934C4.72304 14.5115 4.41705 15.6017 3.90654 16.6C3.44712 17.3216 2.89333 17.9785 2.25987 18.5534C2.18876 18.6158 2.13176 18.6927 2.09268 18.7789C2.0536 18.8651 2.03332 18.9587 2.0332 19.0534V19.96C2.0332 20.1368 2.10344 20.3064 2.22847 20.4314C2.35349 20.5564 2.52306 20.6267 2.69987 20.6267H21.2332C21.41 20.6267 21.5796 20.5564 21.7046 20.4314C21.8296 20.3064 21.8999 20.1368 21.8999 19.96V19.0534C21.8997 18.9587 21.8795 18.8651 21.8404 18.7789C21.8013 18.6927 21.7443 18.6158 21.6732 18.5534ZM3.41987 19.2934C4.04014 18.6942 4.58627 18.0227 5.04654 17.2934C5.68961 16.0877 6.06482 14.7574 6.14654 13.3934V10.1C6.1201 9.31871 6.25115 8.54007 6.5319 7.81046C6.81265 7.08086 7.23734 6.41521 7.7807 5.85315C8.32406 5.2911 8.97496 4.84413 9.69466 4.53887C10.4144 4.2336 11.1881 4.07629 11.9699 4.07629C12.7516 4.07629 13.5254 4.2336 14.2451 4.53887C14.9648 4.84413 15.6157 5.2911 16.159 5.85315C16.7024 6.41521 17.1271 7.08086 17.4078 7.81046C17.6886 8.54007 17.8196 9.31871 17.7932 10.1V13.3934C17.8749 14.7574 18.2501 16.0877 18.8932 17.2934C19.3535 18.0227 19.8996 18.6942 20.5199 19.2934H3.41987Z"
                  fill="#FFA412"
                />
                <path
                  d="M11.9996 22.8533C12.4195 22.8436 12.8225 22.6857 13.1373 22.4075C13.4521 22.1294 13.6583 21.7488 13.7196 21.3333H10.2129C10.2759 21.7601 10.4918 22.1496 10.8204 22.4292C11.1491 22.7088 11.5681 22.8595 11.9996 22.8533Z"
                  fill="#FFA412"
                />
              </svg>
            </div>
          </div></li>
              <li>
                <a>Settings</a>
              </li>
              <li>
                <a>Logout</a>
              </li>
            </ul>
          </div>





            </div>
            <span className="text-sm text-[#737791]">Admin</span>
          </div>
        </div>
      </div>
      
    </div>
  );
};

export default Nav;