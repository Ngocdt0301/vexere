// import @vitejsPluginReact from "@vitejs/plugin-react"

import { useNavigate } from 'react-router-dom';
import { IBusHouse, ITrip } from '../interface/interface';
import { SubmitHandler, useForm } from "react-hook-form";
// import axios from "axios";

const Detail = ( {busHouses, stations, onAdd}) => {
  const navigate = useNavigate();
  const {handleSubmit, register, formState: {errors}} = useForm<ITrip>();
    const handle_submit: SubmitHandler<ITrip> = (formData) => {
      onAdd(formData);
      navigate("/admin")
      // console.log(formData);
    }

    return (
        <section className="ml-[50px] w-[70%] bg-white flex mt-3 flex-col">
            <span className="text-center text-[2vw] font-semibold ">Them moi chuyen xe</span>
            <div className="w-[100%]">
                <form className="w-[100%] mt-8" onSubmit={handleSubmit(handle_submit)}>
                    <div className="w-[100%] flex items-center justify-between">
                        <div className="w-[30%]">
                        <label htmlFor="UserEmail" className="block text-xs font-medium text-gray-700"> Nha xe </label>
                        <select
                            id="HeadlineAct"
                            className="mt-1.5 w-[100%] cursor-pointer rounded-lg border-gray-300 text-gray-700 border py-[1vw] sm:text-sm"
                            {...register("name")}
                        >
                            <option value="">Chon nha xe</option>
                            {busHouses?.map((bus: IBusHouse) => {
                                return (<>
                            <option  value={bus.id} >{bus.name}</option>
                                </>)
                            })  }
                        </select>
                        </div>
                    </div>
                    <div className="w-[100%] mt-3 flex items-center justify-between">
                        <div className="w-[30%]">
                            <label htmlFor="UserEmail" className="block text-xs font-medium text-gray-700"> Thoi gian bat dau </label>

                            <input
                                type="datetime-local"
                                id="UserEmail"
                                placeholder="Time"
                                className="mt-1 w-full px-2 outline-none py-[1vw] border rounded-md border-gray-200 shadow-sm sm:text-sm"
                                {...register("startTime")}
                            />
                        </div>
                        <div className="w-[30%]">
                            <label htmlFor="UserEmail" className="block text-xs font-medium text-gray-700"> So ghe </label>

                            <input
                                type="text"
                                id="UserEmail"
                                className="mt-1 w-full px-2 outline-none py-[1vw] border rounded-md border-gray-200 shadow-sm sm:text-sm"
                                {...register("seats")}
                            />
                        </div>
                        <div className="w-[30%]">
                            <label htmlFor="UserEmail" className="block text-xs font-medium text-gray-700"> Gia </label>

                            <input
                                {...register('price')}
                                type="text"
                                id="UserEmail"
                                className="mt-1 w-full px-2 outline-none py-[1vw] border rounded-md border-gray-200 shadow-sm sm:text-sm"
                            />
                        </div>
                    </div>

                    <div className="w-[100%] mt-3 flex items-center justify-between">
                    <div className="w-[30%]">
                        <label htmlFor="UserEmail" className="block text-xs font-medium text-gray-700"> Ben xe </label>
                        <select
                          {...register('station')}
                            id="HeadlineAct"
                            className="mt-1.5 w-[100%] cursor-pointer rounded-lg border-gray-300 text-gray-700 border py-[1vw] sm:text-sm"
                        >
                            <option value="">Chon ben xe</option>
                            {stations?.map((item : IBusHouse) => {
                                return (<>
                            <option value={item.name}>{item.name}</option>
                                </>)
                            })}
                        </select>
                        </div>
                        <div className="w-[30%]">
                        <label htmlFor="UserEmail" className="block text-xs font-medium text-gray-700"> Diem di </label>

                            <input
                                {...register('toStation')}
                                type="text"
                                id="UserEmail"
                                className="mt-1 w-full px-2 outline-none py-[1vw] border rounded-md border-gray-200 shadow-sm sm:text-sm"
                            />
                        </div>
                        <div className="w-[30%]">
                        <label htmlFor="UserEmail" className="block text-xs font-medium text-gray-700"> Diem den </label>

                            <input
                                {...register('fromStation')}
                                type="text"
                                id="UserEmail"
                                className="mt-1 w-full px-2 outline-none py-[1vw] border rounded-md border-gray-200 shadow-sm sm:text-sm"
                            />
                        </div>
                    </div>
                    <button type='submit' className="w-[30%] py-2 px-3 bg-gray-900 hover:bg-gray-500 duration-300 rounded-lg text-white mt-4">Them chuyen xe</button>
                </form>
            </div>
            {/* <ToastContainer/> */}
        </section>

    )
}

export default Detail