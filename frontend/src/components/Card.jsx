import roaddug from "../assets/roaddug.jpeg"


export default function Card({ issue, issueDesc }) {

    return (
        <div>
            <div className="absolute inset-0 -z-10 h-full w-full bg-white bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-[size:6rem_4rem]"><div className="absolute bottom-0 left-0 right-0 top-0 bg-[radial-gradient(circle_500px_at_50%_200px,#ffffff,transparent)]">
            </div></div>

            <div className="bg-[#1f1b2b] text-white flex rounded-[16px] p-3">
                <div >
                    <img className="rounded-[16px]" src={roaddug} alt="image" />

                </div>
                <div className="pl-5">
                    <div className="pb-5">{issue}</div>
                    <div>{issueDesc}</div>
                </div>

            </div>
        </div>
    )
}