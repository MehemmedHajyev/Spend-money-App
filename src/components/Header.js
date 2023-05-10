import { useState } from "react";

function Header({ total, money }) {
    return (
        <>
            <h1>
                {total > 0 && (
                    <>
                        Xərcləmək üçün {money - total}$ pulunuz qaldi

                    </>
                )}
                {total === 0 && (

                    <>
                        Xərcləmək üçün {money}$ pulunuz  var
                    </>
                )
                }


                {money-total === 0 && (

                    <>
                        Xərcləmək üçün {money}$ pulunuz  yoxdu
                    </>
                )
                }


            </h1>
        </>
    )
}
export default Header