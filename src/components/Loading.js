import React from "react";


const Loading = () => {
    console.log('Loading');

    return (
        <div  class = "loader-body" > 
            <div  class = "loader-circle-4 loader-spinner_top" > 
                <div  class = "loader-circle-4 loader-spinner_mid" > 
                    <div  class = "loader-circle-4 loader-spinner_bot" > </div > 
                </div > 
            </div > 
        </div > 
    )

}
export default React.memo(Loading);