import React from "react";
import MemberCard from "./MemberCard";


const MemberList = ({member}) =>{
    return (
        <div>
            {
                member.map((user,i) => {
                    return (
                        <MemberCard
                            key={i}
                            id={user[i].id}
                            member_rep={user[i].name}
                            member_login={user[i].username}
                            member_org={user[i].company}
                            member_email={user[i].email}
                            member_officeaddr={user[i].address}
                            member_officetel={user[i].phone}
                            member_website={user[i].website}
                            member_password={'arise123'}                            
                        />
                    ); 
                })
            }
        </div>
    );
}

export default MemberList;