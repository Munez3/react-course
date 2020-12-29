import React from 'react';

interface IProps {
    firstName: string;
    lastName?: string;
}

export default function User({firstName, lastName}: IProps){

    return (
        <div>
            {firstName || "nie ma imienia"}
            <br />
            {lastName || "nie ma nazwiska"}

            {/* <div>
                {(firstName || lastName) ? 
                    (
                        <div>
                            {firstName} {lastName}
                        </div>    
                    ) : (
                        <div>Brak danych</div>
                    )
                }
            </div>

            <div>
                {(firstName || lastName) && (
                    <div>{firstName} {lastName}</div>
                )}

                {!(firstName || lastName) && "Brak danych"}
            </div> */}
        </div>
    )
}