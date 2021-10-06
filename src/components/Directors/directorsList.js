import React, { useEffect, useState } from "react";
import Director from "./Director";
import getData from "../../services/getData";

function DirectorsList() {
    const [datas, setDatas] = useState([]);
    useEffect(() => {
        getData().then((res) => setDatas(res));
    }, []);
    return (
        <>
            {datas.map((el) => {
                return (
                    <Director
                        key={el.id}
                        name={el.first_name}
                        imgUrl={el.profile_photo}
                        bio={el.biography}
                    />
                );
            })}
        </>
    );
}

export default DirectorsList;
