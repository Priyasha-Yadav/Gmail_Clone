import React from 'react'
import { IoMdMore, IoMdArrowBack } from 'react-icons/io'
import { BiArchiveIn } from 'react-icons/bi'
import { MdDeleteOutline, MdOutlineReport, MdOutlineAddTask, MdOutlineWatchLater, MdOutlineDriveFileMove, MdOutlineMarkEmailUnread, MdKeyboardArrowLeft, MdKeyboardArrowRight } from 'react-icons/md'
import { useNavigate } from 'react-router-dom'

const icons = [
  {
    icon: <IoMdArrowBack size={20} />,
    action: (navigate) => navigate("/"), // Define the action for navigation
  },
  {
    icon: <BiArchiveIn size={20} />,
    action: () => {}, // You can add specific actions later
  },
  {
    icon: <MdOutlineReport size={20} />,
    action: () => {},
  },
  {
    icon: <MdDeleteOutline size={20} />,
    action: () => {},
  },
  {
    icon: <MdOutlineMarkEmailUnread size={20} />,
    action: () => {},
  },
  {
    icon: <MdOutlineWatchLater size={20} />,
    action: () => {},
  },
  {
    icon: <MdOutlineAddTask size={20} />,
    action: () => {},
  },
  {
    icon: <MdOutlineDriveFileMove size={20} />,
    action: () => {},
  },
  {
    icon: <IoMdMore size={20} />,
    action: () => {},
  },
]

const Mail = () => {
  const navigate = useNavigate()

  return (
    <>
      <div className="flex-1 bg-white rounded-xl mx-5">
        <div className="flex items-center justify-between px-4">
          <div className="flex items-center gap-2 text-gray-700 py-2">
            {icons.map((item, index) => (
              <div
                key={index}
                className="p-2 rounded-full hover:bg-gray-100 cursor-pointer"
                onClick={() => item.action(navigate)} // Use action for each icon
              >
                {item.icon}
              </div>
            ))}
          </div>

          <div className="flex items-center gap-2">
            <button className="hover:rounded-full hover:bg-gray-100">
              <MdKeyboardArrowLeft size={24} />
            </button>
            <button className="hover:rounded-full hover:bg-gray-100">
              <MdKeyboardArrowRight size={24} />
            </button>
          </div>
        </div>

        <div className="h-[90vh] overflow-y-auto p-4">
          <div className="flex items-center justify-between bg-white gap-1">
            <div className="flex items-center gap-2">
              <h1 className="text-xl font-medium">Subject</h1>
              <span className="text-sm bg-gray-200 rounded-md px-2">inbox</span>
            </div>
            <div className="flex-none text-gray-400 my-5 text-sm">
              <p>12-08-2024</p>
            </div>
          </div>
          <div className="text-gray-500 text-sm">
            <h1>sylvia@gmail.com</h1>
            <span>to me</span>
          </div>
          <div className="my-10">
            <p>message</p>
          </div>
        </div>
      </div>
    </>
  )
}

export default Mail
