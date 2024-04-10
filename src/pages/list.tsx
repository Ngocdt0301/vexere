import React from "react";
import { ITrip } from "../interface/interface";
import { Link } from "react-router-dom";

type Props = {
  trips: ITrip[];
};

const List = ({trips, onRemove }) => {
  
//   console.log(trips);
  return (
    <>
      <div className="w-[80%]">
        <h2 className="text-[40px] font-semibold font-inter text-center">
          Danh sách chuyến xe
        </h2>
        <Link to="/add" className="w-[300px] h-[50px] bg-black text-white text-[16px] font-bold rounded-[10px] mb-5 ml-[5%]">
          Thêm mới nhà xe
        </Link>
        <div className="flex flex-col gap-5">
            {trips?.map((trip: ITrip) => (

          <div className="w-[90%] flex bg-[#F2F2F2] border-[1px] border-black mx-auto h-[340px] rounded-[10px]" key={trip.id}>
            <div className="w-[50%] flex flex-col gap-4 justify-start">
              <p className="text-[32px] font-semibold ">Số ghế còn chống: {trip.seats}</p>
              <p className="text-[32px] font-semibold ">Khởi hành: {trip.startTime}</p>
              <p className="text-[32px] font-semibold ">Điểm đi: {trip.fromStation}</p>
              <Link to={`update/${trip.id}`}>Update</Link>
            </div>
            <div className="w-[50%] flex flex-col justify-start gap-4">
              <p className="text-[32px] font-semibold ">
                Số điện thoại nhà xe: {trip.phone}
              </p>
              <p className="text-[32px] font-semibold ">Bến xe: {trip.station}</p>
              <p className="text-[32px] font-semibold ">Điểm đến: {trip.toStation}</p>
              <button onClick={() => onRemove(trip.id) && window.confirm("ban chac xoa trip nay chu ??")}>Delete</button>
            </div>
          </div>
            ))}
        </div>
      </div>
    </>
  );
};

export default List;
