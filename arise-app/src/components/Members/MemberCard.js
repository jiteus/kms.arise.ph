import React from 'react';

const MemberCard = ({
    id,
    member_rep,
    member_login,
    member_org,
    member_email,
    member_officeaddr,
    member_officetel,
    member_website,
    }) => {
    return (
        
        <div className='bg-light-purple dib br2 pa2 ma1 grow bw2 shadow-5'>
            <div>
                <h1>You are logged in as + {member_login}</h1>
                <h2>{member_org} at {member_website}</h2>
                <p>{member_officeaddr}</p>
                <p>Contact {member_rep} at {member_email} or {member_officetel} </p>
            </div>
        </div>
    );
}

export default MemberCard;