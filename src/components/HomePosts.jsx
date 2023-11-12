const HomePost= ()=>{
    return(
        <div className="w-full flex mt-8 space-x-4">
            {/* left */}
            <div className="w-[35%] h-[200px] flex justify-center items-center ">
                <img src="https://media.istockphoto.com/id/1410391090/photo/crystal-globe-putting-on-moss.webp?s=2048x2048&w=is&k=20&c=x6u5kEmJsZuQtdrSzyV7X-raq6-3194fXU9VqSAwnsc=" width="80px" height="80px" alt="" className=""/>
                {/* <h1 className="text-" >left</h1> */}
            </div>
             {/*right */}
            <div className="flex flex-col w-[65%]">
                <h1 className="text-xl font-bold md:mb-2 mb-1 md:text-2xl">
                    10 Users of Artificial intelligence  in Day Life 
                </h1>
           
                <div className="flex mb-2 text-sm font-semibold text-gray-500 items-center justify-between md:mb-4">
                 <p>@lamain test</p>
                 <div className="flex space-x-2 text-sm">
                    <p>15/06/2023</p>
                    <p>16:45</p>
                 </div>
                 </div>
                 <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                    Lorem Ipsum has been the industry's standard dummy.
                </p>
          
            </div>
        </div>
    )
}
export default HomePost; 