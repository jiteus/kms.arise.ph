import React from "react";
import SDGCard from "./SDGCard";

const CardList = ({sdg}) =>{
    return (
        <div>
            {
                sdg.map((user,i) => {
                    return (
                        <SDGCard
                            key={i}
                            id={sdg[i].id}
                            name={sdg[i].name}
                            // desc={sdg[i].desc}
                            // tracker={sdg[i].tracker}
                            // logo={sdg[i].logo}
                        />
                    ); 
                })
            }
        </div>
    );
}

export default CardList;